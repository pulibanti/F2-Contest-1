/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developers = arr.map((arr) => {
    if (arr.profession === "developer") {
      return arr;
    }
  });

  console.log(developers);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((arr) => {
    if (arr.profession === "developer") {
      console.log(arr);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(newEmployee);
}

function removeAdmin() {
  //Write your code here, just console.log
  const updatedEmployees = arr.filter((arr) => arr.profession !== "admin");
  console.log(updatedEmployees);
}

function concatenateArray() {
  //Write your code here, just console.log
  const additionalArray = [
    { id: 5, name: "allu arjun", age: "35", profession: "designer" },
    { id: 6, name: "ram charan", age: "32", profession: "manager" },
    { id: 7, name: "ntr", age: "36", profession: "developer" },
  ];

  const combinedArray = arr.concat(additionalArray);
  console.log(combinedArray);
}
