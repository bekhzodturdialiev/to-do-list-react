import React from 'react';
import List from './components/List';
import BaseIcon from './components/BaseIcon';
import SymbolSvg from './assets/img/symbol.svg';
// import listSvg from "./assets/img/list.svg";

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        {/* <List label='Все задачи' /> */}
        <List
          items={[
            {
              icon: <BaseIcon path={`${SymbolSvg}#list`} color="#7c7c7c" height="18" width="18" />,
              name: 'Все задачи',
              active: true,
            },
          ]}
        />
        <List
          items={[
            {
              color: '#42B883',
              name: 'Покупки',
              class: 'badge',
            },
            {
              color: '#64C4ED',
              name: 'Фронтенд',
              class: 'badge',
            },
            {
              color: '#FFBBCC',
              name: 'Фильмы и сериалы',
              class: 'badge',
            },
          ]}
          isRemovable
        />
        <List
          items={[
            {
              className: 'todo__list__add-button',
              icon: <BaseIcon path={`${SymbolSvg}#add`} stroke="#868686" height="13" width="12" />,
              name: 'Добавить список',
            },
          ]}
        />
      </div>
      <div className="todo__tasks" />
    </div>
  );
}

export default App;
