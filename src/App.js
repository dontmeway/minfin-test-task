import React from 'react';
import { CreateTodo } from './components/CreateTodo'
import { SideBar } from './components/SideBar';
import { Todos } from './components/Todos';

function App() {
  return (
    <div className="App wrapper">
      <h2 style = {{textAlign: "center", marginBottom: "30px"}}>TEST APP</h2>
      <div className = "appContent">
        <SideBar />
        <div className = "mainBar">
          <CreateTodo />
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
