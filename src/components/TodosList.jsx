/* eslint react/prop-types: 0 */
import TodoItem from "./TodoItem";

const TodosList = ({ todosProps, handleChange, setUpdate, delTodo }) => {
    return (
      <ul>
        {todosProps.map((todo) => (
         <TodoItem 
         key={todo.id} 
         itemProp={todo} 
         handleChange={handleChange}
         delTodo={delTodo}
         setUpdate={setUpdate}
         />
        ))}
      </ul>
    );
  };
  export default TodosList;