import React, { Component } from 'react'
import Layout from '../hoc/Layout/Layout'


class App extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h1 className="text-danger m-5"><i className="fab fa-github-square"></i>Hello Ed, how333</h1>
        </div>
      </Layout>
    )
  }
}

export default App