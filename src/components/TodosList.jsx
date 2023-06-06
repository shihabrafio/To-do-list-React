import TodoItem from "./TodoItem";

const TodosList = ({ todosProps, handleChange, deleteTodo }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};
export default TodosList;
