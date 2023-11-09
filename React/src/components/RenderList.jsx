import { Fragment } from "react";

export function RenderList({ cars, users }) {
  return (
    <>
      <ul>
        {cars.map((car) => (
          <li key={car}>{car}</li>
        ))}
      </ul>
      {users.map((user) => (
        <Fragment key={user.name}>
          <p>{user.name}</p>
          <p>{user.age}</p>
        </Fragment>
      ))}
    </>
  );
}
