import React from 'react'
import {
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui'
import VignetteIcon from '@material-ui/icons/Vignette'
import AddIcon from '@material-ui/icons/Add'

const openInNewTab = url => () => {
  const win = window.open(url, '_blank')
  win.focus()
}

export const mailFolderListItems = (
  <div>
    <ListItem>
      <ListItemText>
        <b>
          Formularios
        </b>
      </ListItemText>
    </ListItem>
    <ListItem button onClick={openInNewTab('./formularioConjuntos.pdf')}>
      <ListItemIcon>
        <VignetteIcon />
      </ListItemIcon>
      <ListItemText primary="Conjuntos" />
    </ListItem>
    <ListItem button disabled>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Muy Pronto..." />
    </ListItem>
  </div>
)

export const otherMailFolderListItems = (
  <div>
    <ListItem>
      <ListItemText>
        <b>
          Gu&iacute;as
        </b>
      </ListItemText>
    </ListItem>
    <ListItem button disabled>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Muy Pronto..." />
    </ListItem>
  </div>
)
