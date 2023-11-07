import { useState } from "react";

// import { LearnState } from "./components";
import { ClassComponent, FunctionComponent, LearnState } from "./components";

// // Data flow top-down, one-way
// function App() {
//   const [display, setDisplay] = useState(true);
//   let a = "apple";
//   console.log(a, display);

//   return (
//     <>
//       {display ? (
//         <ClassComponent>
//           <h2>Children</h2>
//         </ClassComponent>
//       ) : (
//         <FunctionComponent
//           user={{ name: "John", age: 20 }}
//           displayChildren={false}
//           country="Nepal"
//           cars={["Thar", "scorpio"]}
//           salary={10_00_000}
//           users={true}
//         >
//           {/* <ClassComponent>
//               <h2>Children</h2>
//             </ClassComponent> */}
//         </FunctionComponent>
//       )}

//       <button
//         onClick={() => {
//           setDisplay(!display);
//           a = "banana";
//           console.log(a);
//         }}
//       >
//         Display
//       </button>
//     </>
//   );
// }

// export default App;

function App() {
  return (
    <>
      <LearnState></LearnState>
    </>
  );
}

export default App;
