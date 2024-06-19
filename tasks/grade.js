let hindi=Number(prompt("Enter Your Hindi Marks"));
let english=Number(prompt("Enter Your English Marks"));;
let maths=Number(prompt("Enter Your Maths Marks"));;
let science=Number(prompt("Enter Your Science Marks"));;
let computer=Number(prompt("Enter Your Computer Marks"));;
let total=hindi+english+maths+science+computer;
let grade=total/5;
if(grade>=85 && grade<100){
    document.write(grade+":Your Grade is D");
}
else if(grade>=60 && grade<85){
    document.write(grade+":Your Grade is A");
}
else if(grade>=45 && grade<60){
    document.write(grade+":Your Grade is B");
}
else if(grade>=35 && grade<45){
    document.write(grade+":Your Grade is C");
}
else{
    document.write(grade+":Your Grade is F");
}