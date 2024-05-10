// import React, { useState } from "react";
// import Person from "../Person/Person";
// const Toggle = () => {
//   const [name, setName] = useState({
//     persons: [
//       { name: "ahmad", age: 22 },
//       { name: "akmal", age: 12 },
//     ],
//     showPerson: false,
//   });

// //   let persons = null;
// //    if (name.showPerson) {
// //      persons = (
// //        <div>
// //          <button>new button</button>
// //        </div>
// //      );
// //    }

//   const togglePerson = () => {
//     const doesShow = name.showPerson;
//     setName({ showPerson: !doesShow });

//   };

//   const names = name.persons.map((na) => {
//     return <Person name={na.name} age={na.age}/>
//   })
 
//   return (
//     <div>
//       <button onClick={togglePerson}>toggle</button>
//       {names}
      
//     </div>
//   );
// };

// export default Toggle;
