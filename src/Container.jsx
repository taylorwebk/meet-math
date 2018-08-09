import React, { Fragment, Component } from 'react'

import MainAppBar from './appBar/MainAppBar'

class Container extends Component {
  constructor() {
    super()
    this.state = {
      menu: false
    }
  }

  handleMenu = () => {
    this.setState(prevState => ({
      menu: !prevState.menu
    }))
  }

  render() {
    const { menu } = this.state
    return (
      <Fragment>
        <MainAppBar />
        { menu ? 'hola' : 'HOLA' }
      </Fragment>
    )
  }
}

export default Container
