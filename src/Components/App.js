import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import React, { Component } from 'react'

import Home from './Home'
import Config from './Config'

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 50px;
  height: 100vh;
  background: linear-gradient(45deg, #0d2843 155px, #2980b9);

  nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #006194;
    color: #2980b9;
    text-decoration: none;
    border-radius: 10px;
    font-size: 30px;
    font-family: 'Patrick Hand', cursive;
    color: white;

    &.selected {
      background: #ffcc00;
      color: #006194;
    }
  }
`

export default class App extends Component {
  state = {
    showDoneTodos: false
  }

  toggleShowDonetodos = () => {
    this.setState({
      showDoneTodos: !this.state.showDoneTodos
    })
  }

  render() {
    return (
      <Router>
        <Grid>
          <div>
            <Route
              exact
              path="/"
              render={() => <Home showDoneTodos={this.state.showDoneTodos} />}
            />

            <Route
              path="/config"
              render={() => (
                <Config
                  showDoneTodos={this.state.showDoneTodos}
                  onToggle={this.toggleShowDonetodos}
                />
              )}
            />
          </div>
          <nav>
            <NavLink exact activeClassName="selected" to="/">
              Home
            </NavLink>
            <NavLink activeClassName="selected" to="/config">
              Config
            </NavLink>
          </nav>
        </Grid>
      </Router>
    )
  }
}
