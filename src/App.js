import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo List</h1>
      </header>

      <main className="app-main">
        <div className="todo-input-container">
          <input
            type="text"
            className="todo-input"
            placeholder="Add a new task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="add-button" onClick={addTodo}>
            Add
          </button>
        </div>

        <div className="todo-list">
          {todos.length === 0 ? (
            <p className="empty-message">No tasks yet. Add one above!</p>
          ) : (
            todos.map((todo, index) => (
              <div key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <label className="todo-checkbox">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(index)}
                  />
                  <span className="checkmark"></span>
                  <span className="todo-text">{todo.text}</span>
                </label>
                <button className="delete-button" onClick={() => deleteTodo(index)}>
                  ×
                </button>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;