import {useState, MouseEvent, KeyboardEvent, Fragment} from "react";
import {Box, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {VideoLibrary, RecentActors, Category, MenuOpen} from '@mui/icons-material/';


const items = [
  {
    name: 'Movies',
    icon: VideoLibrary
  },
  {
    name: 'Casts',
    icon: RecentActors
  },
  {
    name: 'Genres',
    icon: Category
  },
]

export default function MenuButton() {
  const [open, setState] = useState(false);

  const toggleDrawer =
    () =>
      (event: KeyboardEvent | MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as KeyboardEvent).key === 'Tab' ||
            (event as KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState(!open);
      };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        {items.map(list => (
          <ListItem button key={list.name}>
            <ListItemIcon>
              <list.icon />
            </ListItemIcon>
            <ListItemText primary={list.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Fragment>
        <IconButton
          onClick={toggleDrawer()}
          sx={{ visibility: !open ? 'visibility' : 'hidden' }}
          aria-label="menu"
          size={"large"}
        >
          <MenuOpen fontSize={"inherit"} />
        </IconButton >
        <Drawer
          anchor="right"
          open={open}
          onClose={toggleDrawer()}
        >
          {list()}
        </Drawer>
      </Fragment>
    </div>
  );
}