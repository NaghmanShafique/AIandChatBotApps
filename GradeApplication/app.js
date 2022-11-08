

function getGrade () {
   let totalMarks  = +document.getElementById("t-marks").value;
   let obtainMarks  = +document.getElementById("o-marks").value;
   
   
   let per = ((obtainMarks/totalMarks)*100)

   if (per >=80 && per <= 100) {
      document.getElementById("result").innerHTML = 'You have got A+ Grade. Excelent!';
   }else if (per >= 70 && per <= 79) {
      document.getElementById("result").innerHTML = 'You have got A Grade. Very Good!';
   }else if (per >= 60 && per <= 69) {
      document.getElementById("result").innerHTML = 'You have got B Grade. Good!';
   }else if (per >= 50 && per <= 59) {
      document.getElementById("result").innerHTML = 'You have got C Grade. Satisfactory!';
   }else if (per < 50) {
      document.getElementById("result").innerHTML = 'You are Fail try hard next time.';     
   } else {
      document.getElementById("result").innerHTML = 'Invalid Percentage'; 
   }   
}