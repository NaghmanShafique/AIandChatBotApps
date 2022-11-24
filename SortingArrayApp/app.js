


function sortNumberArray() {
   // let numArray = document.getElementById("input-array").value;
   
   let numArray = [4,6,5,8,7,9,3,2,1]
   let results  = document.getElementById("result");
   let errors  = document.getElementById("Errors");
   results.innerHTML = "";
   let ascArray = acendingArray([4,6,5,8,7,9,3,2,1]);
   let descArray = decendingArray([4,6,5,8,7,9,3,2,1]);

   // console.log(ascArray);

   results.innerHTML += `<br> Original Array : ${numArray} <br><br> Ascending Array :${ascArray} <br><br> Descending Array : ${descArray}`

} 

function acendingArray (arr) {
let numArray = [];
    numArray = arr;
for (let i = 0; i< numArray.length; i++) {
   for (let j = i+1; j < numArray.length; j++) {
      if(numArray[i]>numArray[j]){
          let temp = numArray[i];
         numArray[i] = numArray[j];
         numArray[j] = temp;
      }  
   }
}
 return numArray; 
}

function decendingArray (arr) {
   let numArray = arr;
   for (let i = 0; i< numArray.length; i++) {
      for (let j = i+1; j < numArray.length; j++) {
         if(numArray[i]<numArray[j]){
             let temp = numArray[i];
            numArray[i] = numArray[j];
            numArray[j] = temp;
         }  
      }
   }
   return numArray
}
   
   // let myArr = acendingArray([2,4,5,6,7]);
   // console.log(myArr)

