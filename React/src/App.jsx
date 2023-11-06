import { useState } from "react";

import { ClassComponent, FunctionComponent } from "./components";

// Data flow top-down, one-way
function App() {
  const [display, setDisplay]=useState(true);

  return (
    <>
      <FunctionComponent user={{name:"John",age:20}} displayChildren={false} country="Nepal" cars={["Thar", "scorpio"]} salary={10_00_000} users={true}> 
        <ClassComponent>
          <h2>Children</h2>
        </ClassComponent>
        <ClassComponent>
          <h2>Children</h2>
        </ClassComponent>
      </FunctionComponent>
      <button onClick={()=>setDisplay(!display)}>Display</button>
    </>
  );
}

export default App;