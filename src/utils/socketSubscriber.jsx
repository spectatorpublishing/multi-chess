import React from "react"

function withSocket(Wrapped) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        id: null,
        role: "pending",
        black: [],
        white: [],
        players: {},
        boardHistory: null,
        fen: null
      }
      //TODO: Part 1
    }

    async componentDidMount() {
      console.log("Mounting...")
      this.makeSocket()
    }

    sendFenToHost(fen, id) {
      this.state.socket.send(JSON.stringify({
        intent: "sending fen to host",
        fen
      }))
    }

    sendFenToPlayers(fen) {
      console.log("come on")
      this.state.socket.send(JSON.stringify({
        intent: "sending fen to players",
        fen
      }))
      this.setState({
        fen
      })
    }

    assignPlayer(socket) {
      let id = this.state.white.length + this.state.black.length
      this.setState((state, props) => {
        let newPlayers = state.players
        let newWhite = state.white
        let newBlack = state.black
        if (state.black.length > state.white.length) {
          newWhite.push(id)
          newPlayers[id] = "w"
        }
        else {
          newBlack.push(id)
          newPlayers[id] = "b"
        }

        console.log(newPlayers)

        return {
          players: newPlayers,
          black: newBlack,
          white: newWhite
        }
      }, () => {
        let {black, white, players} = this.state
        socket.send(JSON.stringify({
          intent: "host exists",
          id,
          black,
          white,
          players
        }))
      })
    }

    makeSocket() {
      let socket = new WebSocket("wss://connect.websocket.in/spec-chess?room_id=queue-" + (window.location.pathname.slice(1) || 1))
      socket.addEventListener('message', message => {
        let parsed = JSON.parse(message.data)
        if (parsed.intent === "look for host"
          && this.state.role === "host") {
          this.assignPlayer(socket)
        }
        else if (parsed.intent === "host exists"
          && this.state.role === "pending") {
          let {id, black, white, players} = parsed
          this.setState({
            role: "client",
            id,
            black,
            white,
            players
          })
        }
        else if (parsed.intent === "state changed") {
          let {id, black, white} = parsed
          this.setState({
            id,
            black,
            white
          })
        }
        else if (parsed.intent === "sending fen to host"
          && this.state.role === "host") {
          let {fen} = parsed
          this.sendFenToPlayers(fen)
        }
      })
      socket.addEventListener('open', () => {
        socket.send(JSON.stringify({intent: "look for host"}))
        this.setState({
          socket
        })
      })
      setTimeout(() => {
        if (this.state.role === "pending") {
          this.setState({
            role: "host",
            id: 0,
            black: [0],
            players: {0: "b"}
          }, () => {
            this.assignPlayer(socket)
          })
        }
      }, 3000)
    }

    componentWillUnmount() {
      this.state.socket.close()
    }

    render() {
      return <Wrapped
        id={this.state.id}
        role={this.state.role}
        black={this.state.black}
        white={this.state.white}
        players={this.state.players}
        socket={this.state.socket}
        sendFenToHost={this.sendFenToHost}
        sendFenToPlayers={this.sendFenToPlayers}
        fen={this.state.fen}
      />
    }
  }
}

export default withSocket
