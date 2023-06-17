/* eslint react/prop-types: 0 */
import { useState } from 'react';
import styles from '../styles/TodoItem.module.css'

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const handleEditing = () => {
    setEditing(true);
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      setEditing(false);
    }
  };

    return (
      <li className={styles.item}>
         <div className={styles.content} style={viewMode}>
         <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
          <button onClick={() => delTodo(itemProp.id)}>Delete</button>
          <span style={itemProp.completed ? completedStyle : null}></span>
          <button onClick={handleEditing}>Edit</button>
        {itemProp.title}
         </div>
         <input
          type="text"
          value={itemProp.title}
          className={styles.textInput}
          style={editMode}
          onChange={(e) => setUpdate(e.target.value, itemProp.id)}
          onKeyDown={handleUpdatedDone}
        />

      </li>
    );
  };
  export default TodoItem;