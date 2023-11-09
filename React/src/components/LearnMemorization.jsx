import { useEffect, useMemo, useRef, useState } from "react";

export function LearnMemorization() {
  const [count, setCount] = useState(0);
  const [cars, setCars] = useState([
    "Mustang 1",
    "Porsche 1",
    "Ferrari 1",
    "Mustang 2",
    "Porsche 2",
    "Ferrari 2",
    "Mustang 3",
    "Porsche 3",
    "Ferrari 3",
  ]);

  const renderCount = useRef(0);

  const mustangCars = useMemo(() => {
    cars.filter((car) => {
      console.log("car", car);
      return car.startsWith("Mustang");
    }),
      [cars];
  });

  const handleCount = () => {
    setCount(count + 1);
  };

  const addCar = () => {
    const updateCars = [...cars, "Nexon"];
    setCars(updateCars);
  };

  useEffect(() => {
    console.log("Before", renderCount.current);
    renderCount.current += 1;
    console.log("After", renderCount.current);
  });

  return (
    <>
      <h1>count:{count}</h1>
      <h1>cars:{}</h1>
      <h1>mustang:{mustangCars.toString()}</h1>

      <button onClick={handleCount}>Increase Count</button>
      <button onClick={addCar}>Add Car</button>
    </>
  );
}
