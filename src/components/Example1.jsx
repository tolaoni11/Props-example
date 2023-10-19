import React from "react";

function Greetings({ name, prof, title }) {
  return (
    <div>
      Hello {title}
      {name}, i am a {prof}.
    </div>
  );
}

export default function Example() {
  return (
    <>
      <Greetings name="Tola" prof="Software Eng" title="Mr." />
      <Greetings name="Kingley" prof="Teacher" title="Mr." />
    </>
  );
}
