import React from "react";

function Tasks(props) {
  const { children } = props;
  return <ul>{children}</ul>;
}

export default function Example4() {
  return (
    <Tasks>
      <li>Task1</li>
      <li>Task2</li>
      <li>Task3</li>
    </Tasks>
  );
}
