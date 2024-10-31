import './Modal.css';
import { X } from 'lucide-react';
import { useState } from 'react';
//redux:
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  addInpOneValue,
  addInpTwoValue,
  addTask,
  setID,
} from '../../redux/Slices/modalSlice';

export default function Modal() {
  //redux:
  const count = useSelector((state) => state.counter.cssModal);
  const dispatch = useDispatch();
  const inputValOne = useSelector((state) => state.counter.inputOne);
  const inputValTwo = useSelector((state) => state.counter.inputTwo);
  const ID = useSelector((state) => state.counter.id);

  const [inp1, setInp1] = useState(inputValOne);
  const [inp2, setInp2] = useState(inputValTwo);

  dispatch(addInpOneValue(inp1));
  dispatch(addInpTwoValue(inp2));
  function createNewArr() {
    const elementTasc = {
      idd: Math.random(),
      title: inputValOne,
      description: inputValTwo,
    };
    dispatch(setID());
    dispatch(addTask(elementTasc));
    dispatch(decrement());
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      createNewArr();
    }
  };

  return (
    <>
      <div className={count}>
        <div className="modal__container">
          <h1>Добавьте задачу</h1>
          <div className="modal__inp">
            <input
              onChange={() => setInp1(event.target.value)}
              className="inp1"
              type="text"
              placeholder="Название задачи"
              onKeyPress={handleKeyPress}
            />
            <input
              onChange={() => setInp2(event.target.value)}
              className="inp2"
              type="text"
              placeholder="Описание задачи"
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={() => {
                createNewArr();
              }}
              className="modalBTN"
            >
              Добавить задачу
            </button>
          </div>
          <X onClick={() => dispatch(decrement())} className="close__modal" />
        </div>
      </div>
    </>
  );
}
