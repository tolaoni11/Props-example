import React from "react";

function Child(props) {
  const { name, age, isStudent } = props; //Destructuring
  return (
    <>
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Is student: {isStudent ? "Yes" : "No"}</p>
      </div>
    </>
  );
}

export default function Example3() {
  const person = {
    //Object
    name: "David",
    age: 29,
    isStudent: true,
  };

  return (
    <>
      <Child {...person} />
      <Child name={person.name} age={person.age} isStudent={person.age} />
    </> //Spead Operator
  );
}
