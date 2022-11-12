

function getTable () {
   let table  = +document.getElementById("table").value;
   let iterations  = +document.getElementById("itr").value;
   let results = "";

      if ((typeof table)!== "number") {
           console.log("Invalid Number for Table Value.")
      }
      if ((typeof iterations)!== "number") {
           console.log("Invalid Number for Iteration Value.")
      }
     
      if (table < 1 ) {
         document.getElementById("Errors").innerHTML = "Invalid Number for Table Input only Natural Numbers."
      
      }
     
      if (iterations < 1 ) {
         document.getElementById("Errors").innerHTML = "Invalid Number for Iteration Input only Natural Numbers."
      }

      
   
   
   for ( i = 1; i <= iterations; i++) {
      results += `<br>${table} * ${i} = ${table * i}`;
      // document.getElementById("result").innerHTML = `${i}`
   }
   
   document.getElementById("result").innerHTML = results;   
}