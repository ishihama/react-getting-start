import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';

export default function Nav({ categories, onClick }) {
  // 遷移先パスの生成
  const to = category => (
    category.id === '1'
    ? '/all'
    : `/category/${category.id}`
  );

  return (
    <Drawer variant="permanent">
      <List style={{ width: 240 }}>
        {categories.map(category => (
          <ListItem button key={`menu-item-${category.id}`} onClick={() => onClick(to(category))}>
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

Nav.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired
};
