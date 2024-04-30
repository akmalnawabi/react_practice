import React, {useState} from "react";
import Person from "../Person/Person";
const Toggle = () => {
  const [name, setName] = useState({
    persons: [
      { name: "ahmad", age: 22 },
      { name: "akmal", age: 12 },
    ],
    showPerson: false,
  });
  const togglePerson = () => {
    const doesShow = name.showPerson;
    setName({ showPerson: !doesShow });
  };

  return (
    <div>
      <button onClick={togglePerson}>toggle</button>
      {name.showPerson ? (
        <div>
          <button>new button</button>
        </div>
      ) : null}
    </div>
  );
};

export default Toggle;
