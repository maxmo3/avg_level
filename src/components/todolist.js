import react, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTask] = useState([]);
  const [input, setInput] = useState('');


 const addTaskHandler = () => {
    if (input) {
      setTask([...tasks, input]);
      setInput('');
    }
  };

  const checkboxHandler = () => {};

  return (
    <div>
      <input
        type='text'
        value={input}
        onChange={(x) => setInput(x.target.value)}
      ></input>
      <button onClick={addTaskHandler}>Submit Task</button>
      <ul>
        {tasks.map((task, index) => {
          return (
            <div>
              <input
                type='checkbox'
                onClick={checkboxHandler}
              ></input>
              {task}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
