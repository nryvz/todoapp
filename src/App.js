import { useState } from 'react';
import './App.css';
import CreateTask from './CreateTask';
import Task from './Task';
import Footer from './Footer';
import Header from './Header';

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (newTask) => {
    debugger;
    setTasks((prevTask) => {
      return [...prevTask, newTask];
    });
  };

  const deleteTask = (id) => {
    debugger;
    setTasks((prevTask) => {
      return prevTask.filter((taskItem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <Header/>
      <CreateTask onAdd={addTask} />
      <div className="container">
        <div className="row my-5">
          {tasks.map((taskItem, index) => {
            return (
              <Task
                key={index}
                id={index}
                title={taskItem.title}
                content={taskItem.content}
                delete={deleteTask}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
