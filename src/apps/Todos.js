import React, { useReducer, useContext, useEffect } from 'react';
import useEffectOnce from '../custom-hooks/useEffectOnce';
import todoReducer from '../reducers/todoReducer';
import storage from '../utils/storage';

const Context = React.createContext();

export default () => {
  const [state, dispatch] = useReducer(todoReducer, []);

  useEffectOnce(() => {
    const data = storage.get('todo');
    dispatch({ type: 'reset', payload: data ? data : [] });
  });

  useEffect(() => {
    storage.save('todo', state);
  }, [state]);

  const addTodo = () => dispatch({ type: 'add' });

  return (
    <Context.Provider value={dispatch}>
      <h1>Todos App</h1>
      <button onClick={addTodo}>New Todo</button>
      <br />
      <br />
      <TodosList items={state} />
    </Context.Provider>
  );
};

const TodosList = ({ items }) =>
  items.map(item => <TodoItem key={item.id} {...item} />);

function TodoItem({ id, completed, text }) {
  const dispatch = useContext(Context);
  const onComplete = () => dispatch({ type: 'completed', payload: id });
  const onDelete = () => dispatch({ type: 'delete', payload: id });
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={onComplete} />
      <input type="text" defaultValue={text} />
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
