// import ChooseParks from "./utils/ChooseParks";

// function App()
// {
//   return(
//     <main>
//       <header>
//         <div>National Parks App</div>
//         <nav>
//         <a href="Login">Login</a>
//         <a href="Profile">Profile</a>
//         </nav>

//       </header>
//       <ChooseParks></ChooseParks>
//     </main>
//   );
// }

// export default App;





//import React, { useEffect } from 'react';
//import CarComponent from './components/CarComponent';
// Importing our theme provider which will make our global state available to child components
//import CarProvider from './utils/CarContext';

//export default function App() {
 // useEffect(() => {
 //   document.title = 'Travel App';
  //}, []);

 // return (
    //<CarProvider>
   //   <CarComponent />
   // </CarProvider>
 // );
//}
import ChooseParks from "./utils/ChooseParks";
import Login from "./utils/Login";
import Profile from "./utils/Profile";
import Register from "./utils/Register";
import "./app.css";




function App()
{
  return(
    <main>
      <header>
        <div id='header'>National Parks App</div>
        <nav>
        <a href="">Login</a>
        <a href="">signup</a>
        </nav>
      </header>
      <div id="chooseParks">
      <ChooseParks></ChooseParks>
      </div>
      <Login></Login>
      <Profile></Profile>
      <Register></Register>
    </main>
  );
}

export default App;
