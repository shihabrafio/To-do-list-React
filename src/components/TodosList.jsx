/* eslint react/prop-types: 0 */
import TodoItem from "./TodoItem";

const TodosList = ({ todosProps, handlechange, Update, deleteTodo }) => {
    return (
      <ul>
        {todosProps.map((todo) => (
         <TodoItem 
         key={todo.id} 
         itemProp={todo} 
         handleChange={handlechange}
         delTodo={deleteTodo}
         setUpdate={Update}
         />
        ))}
      </ul>
    );
  };
  export default TodosList;