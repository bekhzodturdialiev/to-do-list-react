import React from 'react';
import './List.scss';

function List({ items }) {
  return (
    <ul className="todo__list">
      {items.map((item) => (
        <li className={item.active ? 'active' : ''}>
          <i style={{ backgroundColor: item.color }} className={item.class}>
            {item.icon}
          </i>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default List;
