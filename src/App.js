import logo from './logo.svg';
import './App.css';
import {TextField , Button , List} from '@mui/material'
import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    console.log('newvalue: ', newTodo);
  } , [newTodo])
  
  const addTodo = () => {
    if(newTodo.length > 0){
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  }

  const deleteTodo = (index) => {
    const newTodos = [];
    for (let i = 0; i < todos.length; i++) {
      if (i !== index) {
        newTodos.push(todos[i])
      }
    }
    setTodos(newTodos)
  }

  const handleKeyDown = (event) => {
    if (event.key == 'Enter') {
      addTodo()
    }
  }

  return (
    <div className="App">
      <h1>Todo List</h1>

      <List>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo}
            onButtonClick={() => deleteTodo(index)}
            />
        ))}
      </List>
      
      <TextField
        label="Add a new todo"
        variant="outlined"
        value={newTodo}
        onKeyDown={handleKeyDown}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={addTodo}
        style={{ marginLeft: '20px', marginTop: '10px' }}
      >
        Add Todo
      </Button>
    </div>
  );
}

export default App;
