import React from "react";

export default function Example6() {
  //arry of hobbies
  const hobbies = ["movies", "music", "sports"];

  //array of objects
  const todos = [
    {
      id: 1,
      text: "Take out trash",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Meeting the boss",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Dentist appt",
      isCompleted: false,
    },
  ];

  //map is used to loop through array
  return (
    <>
      {hobbies.map((h) => (
        <li>{h}</li>
      ))}

      <p>-----------</p>

      {todos.map((todo) => (
        <li>{todo.text}</li>
      ))}
    </>
  );
}
