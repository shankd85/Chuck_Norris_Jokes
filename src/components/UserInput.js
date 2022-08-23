import React, { useState } from 'react';
import { getJokes } from '../actions';
import { useDispatch } from 'react-redux';

function UserInput() {
  const [numberOfJokes, setNumberOfJokes] = useState(1);

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setNumberOfJokes(e.target.value);
  };

  const onClickHandler = (e) => {
    dispatch(getJokes(numberOfJokes));
  };

  return (
    <div className="h-100 d-flex align-items-center justify-content-center mt-4 mb-3">
      <label>Insert a Number:</label>
      <input
        value={numberOfJokes}
        onChange={onChangeHandler}
        type="number"
        min="1"
        style={{ margin: '10px', width: '75px' }}
      />
      <button onClick={onClickHandler} className="btn btn-dark">
        Press Here to Get Jokes
      </button>
    </div>
  );
}
export default UserInput;
