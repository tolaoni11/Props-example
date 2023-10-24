import React from "react";

function Dog(props) {
  return (
    <>
      <div>
        <p>Dog Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Habit: {props.habit}</p>
      </div>
    </>
  );
}

export function Example2() {
  return (
    <>
      <Dog name="Fufu" age="3" habit="jumping" />
      <Dog name="Ace" age={5} habit="running" />
    </>
  );
}
