import Input from "./Input";

export default function Game({ onClick }) {
  return (
    <div className="game">
      <div className="game1">
        <Input className={"inp inp1"} onClick={onClick} />
        <Input className={"inp inp2"} onClick={onClick} />
        <Input className={"inp inp3"} onClick={onClick} />
      </div>
      <div className="game2">
        <Input className={"inp inp4"} onClick={onClick} />
        <Input className={"inp inp5"} onClick={onClick} />
        <Input className={"inp inp6"} onClick={onClick} />
      </div>
      <div className="game3">
        <Input className={"inp inp7"} onClick={onClick} />
        <Input className={"inp inp8"} onClick={onClick} />
        <Input className={"inp inp9"} onClick={onClick} />
      </div>
      <div className="winnerMsg" style={{ display: "none" }}>
        <h3>🎉Congratualation!🎉</h3>
        <h3>🎉Player_1 is the winner🎉</h3>
      </div>
    </div>
  );
}
