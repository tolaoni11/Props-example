import React from "react";

function Dog({ props }) {
  const { name, age } = props;
  return (
    <>
      <div>
        <p>Dog Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    </>
  );
}

export function Example2() {
  return (
    <>
      <Dog name="Fufu" age="3" />
      <Dog name="Ace" age={5} />
    </>
  );
}
