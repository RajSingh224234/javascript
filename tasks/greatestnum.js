let a=Number(prompt("Enter The Value Of a "));
let b=Number(prompt("Enter The Value Of b"));
let c=Number(prompt("Enter The Value Of c"));
if(a>b && a>c){
    document.write(a+":a is a Greatest Number Among All");
}
else if(b>a && b>c){
    document.write(b+":b is a Greatest  Number Among All")
}
else{
    document.write(c+":c is a Greatest Number Among All");
}