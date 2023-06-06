import { useState } from 'react';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import { v4 as uuidv4 } from "uuid";


const TodosLogic = () => {
    const [tododata, setTododata] = useState([
          {
            id: uuidv4(),
            title: 'Setup development environment',
            completed: true,
          },
          {
            id: uuidv4(),
            title: 'Develop website and add content',
            completed: false,
          },
          {
            id: uuidv4(),
            title: 'Deploy to live server',
            completed: false,
          },
        ]);

        const handleChange = (id) => {
            setTododata((prevState) =>
              prevState.map((todo) => {
                if (todo.id === id) {
                  return {
                    ...todo,
                    completed: !todo.completed,
                  };
                }
                return todo;
              })
            );
          };

          const deleteTodo = (id) => {
            setTododata([
                ...tododata.filter((todo) => {
                    return todo.id !==id;
                }),
            ]);
          };  

          const addTodoItem = (title) => {
            const newTodo = {
                id: uuidv4(),
                title: title,
                completed: false,
              };
              setTododata([...tododata, newTodo]);
          };  

    return (
        <div>
            <InputTodo addTodoItem={addTodoItem}/>
            <TodosList todosProps={tododata} handleChange={handleChange} deleteTodo={deleteTodo} />
      </div>
    )
    }
  export default TodosLogic;