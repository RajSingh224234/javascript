                                //variables//

//It is a container which stores different types of data in a memory//

//#There are three methods to create a variable in js=>

//1.var=>In this type of variable declaration we can redeclare and  reassign the same variable;
//let's do some examples=>

// var a=10;//declaring first time;
// var a=20;//declaring second time;
//     a=30;//assigning again;
// console.log(a);


//2.let=>In this type of  variable declaration we can't  able to redeclare the same variable
// but we can reassign it;
//let's do some examples=>

// let b=10;//declaring first time;
// let b=20;//Uncaught SyntaxError: Identifier 'b' has already been declared;
// b=30;//but we can reassign it;
// console.log(b);

//3.const=>In this type of variable declaration we can't able to redeclare or reassign 
//the same variable it will be constant;
//let's do some examples=>

// const a=10;
// //const a=20;//Uncaught SyntaxError: Identifier 'a' has already been declared//
// //a=12;//Assignment to constant variable.
// document.write(a);

//#Rules to create a Identifier=>

//1.It is always started with alphabet/some special character(_,$)
//ex:- A,a,_a,$a;

//2.It is also used i n mixin for alphabet and numbers together
//ex:-arr3,arr_3;

//Not Allowed declarations:-
//1.not start variable name with numbers;
//2._,$ these are allowed to create variable names but &a,+a are not allowed;

//let's do some examples=>

// a=12;
// A=12;
// _ram="Raj Singh";
// $b=12.5;
// b2=14;
// document.write("<b>"+a+"</b>");
// document.write("<br>");
// document.write(A);
// document.write("<br>");
// document.write(_ram);
// document.write("<br>");
// document.write($b,"<br>");
// document.write(b2);






