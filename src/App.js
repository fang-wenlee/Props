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
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <h1>Welcome to the app!</h1>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Log out" : "Log In"}
      </button>
      {loggedIn ? <h3>Hello Fawn</h3> : <h3>Please Login</h3>}
    </div>
  );
}
