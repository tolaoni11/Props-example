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

  //map function

  return (
    <>
      <div>{name}</div>
      <div>{age}</div>
      <div>{hobbies[3]}</div>
    </>
  );
}
