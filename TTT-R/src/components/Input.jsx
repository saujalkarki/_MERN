import { useState } from "react";

export default function Input({ mainInp, inp1, inp2, inp3 }) {
  const [inpXO, setInpXO] = useState("X");

  function handleClick(a) {
    a.target.blur();
  }

  function handleChange(a) {
    a.target.value = inpXO;
    setInpXO((inp) => (inp === "X" ? "O" : "X"));
  }

  return (
    <div className={mainInp}>
      <input
        type="text"
        className={inp1}
        onClick={handleClick}
        onChange={(e) => {
          handleChange(e);
        }}
        readOnly
      />
      <input
        type="text"
        className={inp2}
        onClick={handleClick}
        onChange={handleChange}
        readOnly
      />
      <input
        type="text"
        className={inp3}
        onClick={handleClick}
        onChange={handleChange}
        readOnly
      />
    </div>
  );
}
