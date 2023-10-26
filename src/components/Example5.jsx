import React from "react";

export default function Example5() {
  //Variable
  const name = "John Doe"; //String
  const age = 35 + 5; //number

  //Array
  //array always start with zero
  //first is zero
  const hobbies = ["movies", "music", "sports"];

  //object
  const address = {
    street: "50 Main st",
    city: "Boston",
    state: "MA",
  };

  //Array of Objects
  {
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

    //map function

    return (
      <>
        <div>{name}</div>
        <div>{age}</div>
        <div>{hobbies[0]}</div>
        <div>{address.city}</div>
        <div>{address["state"]}</div>
        <div>{todos[0]["text"]}</div>
        <div>{todos[0].text}</div>
        <div>{todos[1]["id"]}</div>
        <div>{todos[2]["isCompleted"]}</div>
      </>
    );
  }
}
