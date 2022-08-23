import { useState, useEffect } from 'react';

function ReactHooks() {
  /* useState: Allows to track state in a function component. */
  const [color, setColor] = useState('red'); //Initialize state
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  /* Use State */

  /* useEffect: Allows to perform side effects in  components. */
  // useEffect(<function>, <dependency>)
  // Call on Every Render
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  // Call only once
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // }, []); // <- add empty brackets here

  //
  // useEffect(() => {
  //   setCalculation(() => count * 2);
  // }, [count]); // <- add the count variable here

  return (
    <>
      {/* Use State Example */}
      <h1>My favorite color is {color}!</h1> {/* Read State */}
      {/* ============================================================== */}
      {/* Update State Example */}
      {/* <button type="button" onClick={() => setColor('blue')}>
        Blue
      </button> */}
      {/* ============================================================== */}
      {/* Use Effect Example */}
      <h1>I've rendered {count} times!</h1>
      {/* Use Effect With Dependency Example */}
      {/* <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p> */}
    </>
  );
}

export default ReactHooks;
