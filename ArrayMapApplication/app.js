
// let numArray = document.getElementById("input-array").value;

let numArray1 = [
   [4, 10, 5],
   [12, 3, 7],
   [9, 2, 21]
]
let numArray2 = [
   [10, 5, 7],
   [14, 18, 9],
   [19, 20, 11]
]
let newArray = [
    [],
    [],
    []
];

let arr1 = document.getElementById("array-1");
let arr2 = document.getElementById("array-2");
let results = document.getElementById("array-3");


console.log(arr1);


numArray1.map((eachValue, i) => {
   // arr1.innerHTML += `[`
   eachValue.map((subValue, j) => {
      arr1.innerHTML += `${subValue},`
   })
   arr1.innerHTML += `<br/>`
})


numArray2.map((eachValue, i) => {
   arr2.innerHTML += `[`
   eachValue.map((subValue, j) => {
      arr2.innerHTML += `${subValue},`
   })
   arr2.innerHTML += `]<br/>`
})

for (let k = 0; k < numArray1.length; k++) {
   newArray[k] = [];
   for (let l = 0; l < numArray1[k].length; l++) {
      newArray[k][l] = (numArray1[k][l] + numArray2[k][l]);
   }
}

newArray.map((newVlaue,n) =>{
   results.innerHTML += `[${newVlaue}]<br/>`
})