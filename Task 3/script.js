var a;


if(confirm("Do you want to login in to this page?") )
{
    a = prompt("Please enter your age",19);
    if(a<18 && a>0)
    {
         console.log("You are "+ a +" years old");
         console.log("You are Minor");
    }
   else{
    console.log("You are "+ a +" years old");
    console.log("You are Major");
   }
}
else {
    alert("You are loggged out!");
}