// @flow

import React, { Component } from 'react'
import styled from 'react-emotion'

const RootStyledElement = styled('div')`
  font-size: 1.2rem;
`

class App extends Component<{}> {
  render () {
    return <RootStyledElement>Your code here</RootStyledElement>
  }
}

export default App
