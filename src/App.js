import React from 'react';
import withSocket from './utils/socketSubscriber'
import Chess from "./components/Chess"
import styled, { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
`

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

`

class App extends React.Component {
  render() {
    // TODO: Part 1
  console.log(this.props.players[this.props.id])
    return <StyledContainer>
      <Global/>
      {JSON.stringify(this.props)}
      <Chess/>
    </StyledContainer>
  }
}

// TODO: Part 1
