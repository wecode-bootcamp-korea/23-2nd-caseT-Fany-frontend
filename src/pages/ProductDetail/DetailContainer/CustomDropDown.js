import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },

  DropDown: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid black',
    borderRadius: 4,
    margin: '3px 0 0 5px',
    width: '371px',
    height: '80px',
    boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
  },

  DropDownBox: {
    border: 0,
    borderRadius: 3,
    marginLeft: '-1px',
  },

  DropDownMenu: {
    border: 0,
    borderRadius: 3,
    width: '379px',
  },
}));

const options = ['S', 'M', 'L'];

export default function SimpleListMenu({ productData, setInventory }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    setInventory(options[index]);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <List
        className={classes.DropDown}
        component="nav"
        aria-label="Device settings"
      >
        <ListItem button onClick={handleClickListItem}>
          <ListItemText
            primary={
              productData.product_option &&
              productData.product_option[selectedIndex].size
            }
            secondary={`남은 수량: ${
              productData.product_option &&
              productData.product_option[selectedIndex].stock
            }개`}
          />
        </ListItem>
      </List>
      <Menu
        className={classes.DropDownBox}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            className={classes.DropDownMenu}
            key={option}
            selected={index === selectedIndex}
            onClick={event => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
