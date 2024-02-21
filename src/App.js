import React, { useState } from "react";

// const Cars = () => {

//   let list = ['Mercedes', 'Audi', 'BMW', 'Toyota', 'Tesla'];

//   let lists = list.map(item => {
//     return <li>{ item }</li>
//   })

//   return (
//     <ol className="header-para">
//       { lists }
//     </ol>
//   )
// }

// const App = () => {
//   return <Cars />;
// }


// const App = () => {
//   return (
//     <section>
//       <button onClick={event => {
//         console.log("Hello I was clicked")
//       }}>Click Me</button>
//     </section>
//   )
// }


// const App = () => {

//   const handleClick = (event) => {
//     console.log(`You just clicked me`);
//   }
//   return (
//     <section>
//       <button onClick={handleClick}>Click Me</button>
//     </section>
//   )
// }


const App = () => {

  // State...
  const [counter, setCounter] = useState(0)
  //Handle Increase...
  const increase = (event) => {
    event.preventDefault();
    setCounter(prev => prev + 1);

  }
  //Handle Decrease...
  const decrease = (event) => {
    event.preventDefault();
    setCounter(prev => prev - 1);

  }
  return (


    <section>
      <button className="action-btn" onClick={increase}>Increase</button>
      <button className="action-btn" onClick={decrease}>Decrease</button>
      <p className="result">{counter}</p>
    </section>
  )
}

export default App;