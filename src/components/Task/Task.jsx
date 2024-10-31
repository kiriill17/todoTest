import './Task.css';
import { getTask, remove } from '../../redux/Slices/modalSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Task({ idd, title, description }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="task">
        <div className="task__left">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="task__right">
          <button className="delBTN" onClick={() => dispatch(remove(idd))}>
            Удалить
          </button>
          <button className="completeBTN">Выполнено</button>
        </div>
      </div>
    </>
  );
}
