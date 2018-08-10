import React, { Fragment, Component } from 'react'

import MainAppBar from './appBar/MainAppBar'
import SideBar from './menu/SideBar'
import Main from './body/Main'

class Container extends Component {
  constructor() {
    super()
    this.state = {
      showMenu: false
    }
  }

  handleMenu = state => () => {
    this.setState({
      showMenu: state
    })
  }

  render() {
    const { showMenu } = this.state
    return (
      <Fragment>
        <MainAppBar handleMenu={this.handleMenu} />
        <SideBar
          handleMenu={this.handleMenu}
          showMenu={showMenu}
        />
        <Main />
      </Fragment>
    )
  }
}

export default Container
