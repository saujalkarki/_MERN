// export default function Game() {
//   return (
//     <div className="game">
//       <div className="play play1">
//         <input type="text" className="inp inp1" />
//         <input type="text" className="inp inp2" />
//         <input type="text" className="inp inp3" />
//       </div>
//       <div className="play play2">
//         <input type="text" className="inp inp4" />
//         <input type="text" className="inp inp5" />
//         <input type="text" className="inp inp6" />
//       </div>
//       <div className="play play3">
//         <input type="text" className="inp inp7" />
//         <input type="text" className="inp inp8" />
//         <input type="text" className="inp inp9" />
//       </div>
//       <div className="Winner">
//         <h3 className="winnerText">Player 1 is the winner</h3>
//       </div>
//     </div>
//   );
// }

import Input from "./Input";

export default function Game() {
  return (
    <div className="game">
      <Input
        mainInp={"play1"}
        inp1={"inp inp1"}
        inp2={"inp inp2"}
        inp3={"inp inp3"}
      />
      <Input
        mainInp={"play2"}
        inp1={"inp inp4"}
        inp2={"inp inp5"}
        inp3={"inp inp6"}
      />
      <Input
        mainInp={"play3"}
        inp1={"inp inp7"}
        inp2={"inp inp8"}
        inp3={"inp inp9"}
      />
    </div>
  );
}
