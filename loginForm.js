let form1=document.querySelector("#inpt1").value;
let form2=document.querySelector("#inpt2").value;
let logIn=document.querySelector("#f1");
let signIn=document.querySelector("#f2");
let eye=document.querySelector("#eye");
let pass=()=>{
    eye.style.backgroundImage="url(images/view.png)";
    document.querySelector("#inpt2").type="text";
}
let lgn=()=>{
    f1.style.display="block";
    f2.style.display="none";

}
let sgn=()=>{
    f2.style.display="block";
    f1.style.display="none";
}