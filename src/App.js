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
              icon: <BaseIcon path={`${SymbolSvg}#list`} color="#f4f4f4" height="18" width="18" />,
              name: 'Все задачи',
            },
          ]}
        />
        <List
          items={[
            {
              color: '#42B883',
              name: 'Покупки',
            },
            {
              color: '#64C4ED',
              name: 'Фронтенд',
            },
            {
              color: '#FFBBCC',
              name: 'Фильмы и сериалы',
            },
          ]}
        />
      </div>
      <div className="todo__tasks" />
    </div>
  );
}

export default App;
