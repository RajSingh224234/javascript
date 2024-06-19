let yourName=()=>{
    let btn1=document.querySelector("#name");
    let para1=document.querySelector("#para-1");
    let btn2=document.querySelector("#fname");
    if(btn1.value=="About"){
        btn1.value="hide";
        para1.style.display="block";
        btn2.style.marginBlock="50px 10px";
    }
    else{
        btn1.value="About";
        para1.style.display="none";
        btn2.style.marginBlock="25px 10px";
    }
}



let fatherName=()=>{
    let btn2=document.querySelector("#fname");
    let para2=document.querySelector("#para-2");
    let btn3=document.querySelector("#mname");
    if(btn2.value=="aboutFather"){
        btn2.value="hide";
        para2.style.display="block";
        btn3.style.marginBlock="60px 10px";
    }
    else{
        btn2.value="aboutFather";
        para2.style.display="none";
        btn3.style.marginBlock="25px 10px";
    }
}


let motherName=()=>{
    let btn3=document.querySelector("#mname");
    let para3=document.querySelector("#para-3");
    if(btn3.value=="aboutMother"){
        btn3.value="hide";
        para3.style.display="block";
    }
    else{
        btn3.value="aboutMother";
        para3.style.display="none";
    }
}


let professionName=()=>{
    let btn4=document.querySelector("#pname");
    let para4=document.querySelector("#para-4");
    if(btn4.value=="profession"){
        btn4.value="hide";
        para4.style.display="block";
    }
    else{
        btn4.value="profession";
        para4.style.display="none";
    }
}