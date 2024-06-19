// let num=prompt("Enter your Number");
// if(num%2==0){
//     document.write("Your Number is Even"+"&nbsp;"+num);
// }
// else{
//     document.write("Your Number is Odd"+"&nbsp;"+num);
// }


let a=parseInt(prompt("Enter the value of a"));
let b=parseInt(prompt("Enter the value of b"));
let operator=prompt("Enter Your Operator");
 switch(operator){
     case '+':document.write("Addition",a+b);
             break;
     case '-':document.write("Subtraction",a-b);
             break;
     case '*':document.write("Multiplication",a*b);
             break;
     case '/':document.write("Division",a/b);
             break;
     default:document.write("Enter The Correct Operator");
             break;
 }