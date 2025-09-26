var a=prompt("Username");
var b = prompt("Password");
if(a=="library" && b=="book123")
{
  var d =  confirm("Do you want to borrow a book?")
 
    if(d)
    {
       switch(prompt("Book category"))
        {
            case "1":
                
                    alert("You selected Fiction");
                    break;
                

                case "2":
                    
                        alert("You selected Science")
                        break;
                    

                    case "3":
                        
                            alert("You selected History");
                            break;
                        

                        default:
                            {
                                alert("Invalid Input");
                                break;
                            }
        }
    }

    else{

        alert("May be next Time Good Bye!");
    }
}
else{
    alert("Login Failed!")
}