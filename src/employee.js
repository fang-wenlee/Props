import React from "react";

const Employees = (props) => {
  //nest destructure
  const {
    firstName,
    lastName,
    age,
    salary,
    address: {
      salary: addressSalary,
      street,
      country,
      province,
      zone: { plantZone, alienZone }
    }
  } = props;
  // const { salary: addressSalary, street, country, province, zone } = address;
  // const { plantZone, alienZone } = zone;
  return (
    <div>
      Employee name: {firstName.toUpperCase()} {lastName.toUpperCase()} who is
      age is {age}; <br />
      <h3> Employee Salary is {salary}</h3>
      <h3> the address salry is {addressSalary}</h3>
      <br />
      {street} {country} {province}
      <br />
      {plantZone} {alienZone}
      {/* {address.street} */}
    </div>
  );
};
export default Employees;
