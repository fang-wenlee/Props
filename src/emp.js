import React from "react";

const employeeInfo = [
  {
    name: "Anthony",
    id: "abc"
  }
];

const People = () => {
  const baseEmployeeObj = {
    role: "Web Developer",
    company: "CodeSandbox"
  };
  const firstEmpl = { ...baseEmployeeObj, ...employeeInfo[0] };
  console.log(firstEmpl);
  return <h1>Hello {firstEmpl.name} </h1>;
};
export default People;
