import React from "react";

const students = ["fang", "Jew", "Pohan", "John", "emily"];

const Students = () => {
  return (
    <>
      {students.map((element) => {
        return <h2>{element}</h2>;
      })}
    </>

    // <>
    //   {students.map(element =>
    //      <h2>{element}</h2>
    //   )}
    // </>
  );
};
export default Students;
