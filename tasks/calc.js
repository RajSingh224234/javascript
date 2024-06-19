let a=Number(prompt("Enter Your first Number"));
let b=Number(prompt("Enter Your Second Number"));
let operator=prompt("Enter Your Operator");
if(operator=="+"){
    document.write(a+b);
}
else if(operator=="-"){
    document.write(a-b);
}
else if(operator=="*"){
    document.write(a*b);
}
else if(operator=="/"){
    document.write(a/b);
}
else{
    ("Enter Correct operator");
}