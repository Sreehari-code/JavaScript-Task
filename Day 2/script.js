
check();
function check()

{
    Name =prompt("Your name");
age = prompt("Your age");
if(age>=18)
{
    alert("Hello "+Name+", You are eligible to vote.");
}
else{
    alert("Sorry "+Name+",  You are not eligible to vote.");
}
call()
}

function call()
{
if(confirm("Do you want to check again?"))
{
    check();
}
else{
    alert("Good Bye!");
}
}
