import React, { useState } from "react";
import "./App.css";
// import Assignment from "../components/four/Assignment";
// import Validation from "../components/four/Validation";
// import Cockpit from "../components/Cockpit/Cockpit";
// import Toggle from "./four/Toggle";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import FaQ from "./pages/FaQ";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import CareersLayout from "./layouts/CareersLayout";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CarresDetails, { careerDetailsLoader } from "./pages/careers/CarresDetails";
import UseRef from "./differentPractice/UseRef";
import UseStatePrc from "./differentPractice/UseStatePrc";
import UseEffect from "./differentPractice/UseEffect";
import UseMemo from "./differentPractice/UseMemo";
import Profile from "./components/contextExample/Profile";
import Footer from "./components/contextExample/Footer";
import UseReducer from "./differentPractice/UseReducer";

function App(props) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="help" element={<Help />}>
          <Route path="faq" element={<FaQ />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="careers" element={<CareersLayout />}>
          <Route index element={<Careers />} loader={careersLoader} />
          <Route path=":id" element={<CarresDetails /> } loader={careerDetailsLoader} />
        </Route>
      </Route>
    )
  );
  // const [personState, setPersonState] = useState({
  //   persons: [
  //     { name: "akmal", age: 22 },
  //     { name: "ahamd", age: 21 }
  //   ],
  //   another: "some value",
  //   showPer: true

  // });

  // const nameHandler = (e) => {
  //   setPersonState({
  //     persons: [
  //       { name: "mahmmod", age: 12 },
  //       { name: "ahmad", age: 21 },
  //     ],
  //   });
  // };

  // const changeName = (e) => {
  //   setPersonState({
  //     persons: [
  //       {name: e.target.value, age: 11},
  //       {name: e.target.value, age: 90}
  //     ]
  //   })
  // }

  // const [name, setName] = useState({
  //   persons: [
  //     { name: "ahmad", age: 22 },
  //     { name: "akmal", age: 12 },
  //   ],
  //   showPerson: false,
  // });

  // if (personState.showPer) {
  //   personState.persons = (
  //     <div>
  //       {personState.persons.map((person) => {
  //         return
  //          <Person />
  //       })}
  //     </div>
  //   )
  // }


  // const userNameChangeHandler = (e) => {
  //   setName({ name: e.target.value });
  // };

  return (
    <>
      <RouterProvider router={router} />

      {/* <Profile /> */}
      {/* <Footer /> */}
      <UseReducer />
      {/* <UseRef /> */}
      {/* <UseStatePrc /> */}
      {/* <UseEffect /> */}
      {/* <UseMemo /> */}
      {/* 3rd folder  */}

      {/* <Person name={personState.persons[0].name} />
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
        click={nameHandler}
      />
      <Person>this is children</Person>
      <button onClick={() => userNameChangeHandler()}>change</button> */}
      {/* <button togglePerson={togglePerson}>change</button> */}

      {/* {
        showPerson === true ? 
        <div>
<Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
        name2={personState.persons[1].name}
        age2={personState.persons[1].age}
        change={changeName}
      />
        </div> : null
      }  */}

      {/* // assignement  */}

      {/* <UserInput changed={userNameChangeHandler} 
      currentName={name.name} />
      <UserOutput userName={name.name} /> */}

      {/* fourth part  */}

      {/* <Toggle /> */}

      {/* <Cockpit /> */}
      {/* <Assignment /> */}
    </>
  );
}

export default App;
