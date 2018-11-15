import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import GlobalStyle from './Components/GlobalStyle'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.Fragment>
    <App />
    <GlobalStyle />
  </React.Fragment>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
