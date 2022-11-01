import React from 'react';
import './App.css';
import Header from './Components/LayoutArea/Header/Header';
import Main from './Components/LayoutArea/Main/Main';
import TodoItem from './Components/TodoArea/TodoItem/TodoItem';
import TodoList from './Components/TodoArea/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      {/* <h1>Todo App</h1>

      <TodoList/> */}

      {/* <TodoItem id={0} title={'title'} description={'bla bla'} group={'React'} when={new Date()}/> */}
    </div>
  );
}

export default App;
