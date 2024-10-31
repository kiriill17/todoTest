import { useState } from 'react';

import Task from './components/Task/Task';
import Modal from './components/Modal/Modal';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

//redux:
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, addTask, clearTask } from './redux/Slices/modalSlice';

export default function App() {
  //redux:
  const count = useSelector((state) => state.counter.value);
  const id = Math.random();

  const inputValOne = useSelector((state) => state.counter.inputOne);
  const inputValTwo = useSelector((state) => state.counter.inputTwo);
  const dispatch = useDispatch();
  //массив данных о задачах:
  const arr = useSelector((state) => state.counter.arr);

  function createNewArr() {
    const elementTasc = {
      title: inputValOne,
      description: inputValTwo,
    };

    dispatch(addTask(elementTasc));
  }

  return (
    <>
      <div className="main__container">
        <div className="top__cont">
          <h1>Задачи:</h1>
          <p onClick={() => dispatch(clearTask())} className="clearCart">
            Очистить корзину
          </p>
        </div>
        {arr.map((obj) => {
          return <Task idd={obj.idd} title={obj.title} description={obj.description} />;
        })}
      </div>
      <div className="btn">
        <button onClick={() => dispatch(increment())} className="addTaskBTN">
          Добавить задачу
        </button>
      </div>
      <Modal />
    </>
  );
}
