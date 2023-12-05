import { useState } from "react";

export default function Input({ mainInp, inp1, inp2, inp3 }) {
  const [inpXO, setInpXO] = useState(null);

  function handleClick(a) {
    a.target.blur();
    setInpXO((inp) => (inp === "X" ? "O" : "X"));
  }

  return (
    <div className={mainInp}>
      <input
        type="text"
        className={inp1}
        onClick={(e) => {
          handleClick(e);
        }}
        value={inpXO || ""}
        readOnly
      />
      <input
        type="text"
        className={inp2}
        onClick={(e) => {
          handleClick(e);
        }}
        value={inpXO || ""}
        readOnly
      />
      <input
        type="text"
        className={inp3}
        onClick={(e) => {
          handleClick(e);
        }}
        value={inpXO || ""}
        readOnly
      />
    </div>
  );
}
