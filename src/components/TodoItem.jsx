const TodoItem = ({ itemProp, handleChange, deleteTodo  }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
        <button onClick={() => deleteTodo(itemProp.id)}>Delete</button>
      {itemProp.title}
    </li>
  );
};
export default TodoItem;