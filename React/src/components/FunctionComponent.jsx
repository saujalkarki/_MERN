import { useState } from "react";

export function FunctionComponent({user={name:"John", age:20}, country, salary, cars, children, displayChildren, users }) {
  console.log(user, country, salary, cars)
  const [count, setCount]= useState(1);

  // if(displayChildren){
  //   return children;
  // }else{
  //   return (
  //     <>
  //       <h1>I am {user.name}</h1>
  //       <h2 >Count: {count}</h2>
  //       {children}
  //       <h1>Function Component</h1>
  //       <button onClick={()=>setCount(2)}>Change to 2</button>
  //     </>
  //   );
  // }

  return displayChildren?(children):(
       <>
        {users && <h1>I'm {user.name}</h1>}
        <h2 >Count: {count}</h2>
        {children}
        <h1>Function Component</h1>
         <button onClick={()=>setCount(2)}>Change to 2</button>
      </>
     );
}

// We can export by this way too
// export default FunctionComponent;