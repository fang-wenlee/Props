import Employees from "./employee";
import React, { useState } from "react";
import "./styles.css";

const employeeData = [
  {
    firstName: "fang-wen",
    lastName: "lee",
    age: "25",
    salary: "$20",
    address: {
      salary: "$100",
      street: "210 Washington Str.",
      country: "Canda",
      province: "Ontario",
      zone: {
        plantZone: "7B",
        alienZone: "41"
      }
    },
    id: 1
  },
  {
    firstName: "Pohan-lin",
    lastName: "lin",
    age: "29",
    salary: "$20",
    address: {
      salary: "$100",
      street: "34311 Delware St.",
      country: "Canda",
      province: "Ontario",
      zone: {
        plantZone: "7B",
        alienZone: "41"
      }
    },
    id: 2
  },
  {
    firstName: "Tony",
    lastName: "foo",
    age: "22",
    salary: "$20",
    address: {
      salary: "$100",
      street: "11 Pine Rd. ",
      country: "Canda",
      province: "Ontario",
      zone: {
        plantZone: "7B",
        alienZone: "41"
      }
    },
    id: 3
  },
  {
    firstName: "Emily",
    lastName: "Chung",
    age: "28",
    salary: "$20",
    address: {
      salary: "$100",
      street: "222 Thornhill Ct. ",
      country: "Canda",
      province: "Ontario",
      zone: {
        plantZone: "7B",
        alienZone: "41"
      }
    },
    id: 4
  },
  {
    firstName: "Li-shuan",
    lastName: "le",
    age: "18",
    salary: "$20",
    address: {
      salary: "$100",
      street: "824 San Jose St. ",
      country: "Canda",
      province: "Ontario",
      zone: {
        plantZone: "7B",
        alienZone: "41"
      }
    },
    id: 5
  }
];

export default function App() {
  const [count, setCount] = useState(0);
  const [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
  console.log("3 after: ", rest);
  console.log("1st: ", a);
  console.log("2nd:  ", b);

  return (
    <div className="App">
      <h1>Employee Table</h1>
      <hr />

      {employeeData.map((employee) => {
        return <Employees key={employee.id} {...employee} />;
      })}

      {/* {employeeData.map((employee) => {
        const { firstName, lastName, age } = employee;
        return (
          <Employees firstName={firstName} lastName={lastName} age={age} />
        );
      })} */}

      {/* <Employees firstName="fang-wen" lastName="lee" age="20" />
      <Employees firstName="Pohan" lastName="Lin" age="20" />
      <Employees firstName="Tony" lastName="Foo" age="20" />
      <Employees firstName="Emily" lastName="Chung" age="20" /> */}
    </div>
  );
}
