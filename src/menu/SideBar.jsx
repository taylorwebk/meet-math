import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  SwipeableDrawer,
  List,
  Divider
} from '@material-ui'
import { mailFolderListItems, otherMailFolderListItems } from './tileData'

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
}
/*
class SideBar extends React.Component {
  state = {
    left: false
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  };
 */
const SideBar = (props) => {
  const { classes, showMenu, handleMenu } = props

  const sideList = (
    <div className={classes.list}>
      <List>
        {mailFolderListItems}
      </List>
      <Divider />
      <List>
        {otherMailFolderListItems}
      </List>
    </div>
  )

  return (
    <div>
      <SwipeableDrawer
        open={showMenu}
        onClose={handleMenu(false)}
        onOpen={handleMenu(true)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={handleMenu(false)}
          onKeyDown={handleMenu(false)}
        >
          hola
        </div>
        {sideList}
      </SwipeableDrawer>
    </div>
  )
}

export default withStyles(styles)(SideBar)
