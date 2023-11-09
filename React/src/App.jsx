import { useState } from "react";

// import { LearnState } from "./components";
import {
  LearnMemorization,
  // ClassComponent,
  // FunctionComponent,
  LearnState,
  RenderList,
} from "./components";

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

// function App() {
//   return (
//     <>
//       {/* <LearnState></LearnState> */}
//       <RenderList
//         cars={["Thar", "Rolles Royce", "Lamborgini", "Ferreri", "Nexon  "]}
//         users={[
//           { name: "Allone", age: 15 },
//           { name: "Thatone", age: 12 },
//           { name: "Anyone", age: 26 },
//           { name: "Someone", age: 32 },
//         ]}
//       />
//     </>
//   );
// }

function App() {
  return (
    <>
      <LearnMemorization />
    </>
  );
}

export default App;
