import React from 'react';
import './List.scss';
import classNames from 'classnames';

function List({ items, isRemovable }) {
  return (
    <ul className="todo__list">
      {items.map((item, index) => (
        <li key={index} className={classNames(item.className, { active: item.active })}>
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
