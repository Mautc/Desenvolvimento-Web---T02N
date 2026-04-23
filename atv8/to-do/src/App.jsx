import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleAddTask() {
    const text = inputValue.trim();
    if (text === '') {
      alert('Por favor, digite uma tarefa!');
      return;
    }
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
    setInputValue('');
  }

  function handleRemoveTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function handleToggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  }

  return (
    <div className="container">
      <h2 className="titulo-tarefa">Minhas Tarefas</h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="Digite uma nova tarefa..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAddTask}>Adicionar</button>
      </div>

      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              className="check-task"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <span className="task-text">{task.text}</span>
            <button className="remove-btn" onClick={() => handleRemoveTask(task.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
