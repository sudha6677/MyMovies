
/*Fuction to validate form*/
function validate()
			{
             if(document.myform.name.value=="")
               {
               alert("please enter your name");
               document.myform.name.focus();
               return false;
               }
			   if(document.myform.contact.value=="")
               {
               alert("please enter your contact detalis");
               document.myform.contact.focus();
               return false;
               }
 if(document.myform.email.value=="")
               {
               alert("please enter your email");
               document.myform.email.focus();
               return false;
               }
			   if(document.myform.r.value=="")
               {
               alert("please provide your gender");
               document.myform.r.focus();
               return false;
               }
			   
			    if(document.myform.uname.value=="")
               {
               alert("please provide your user name");
               document.myform.uname.focus();
               return false;
               }
			    if(document.myform.pw.value=="")
               {
               alert("please write your password");
               document.myform.pw.focus();
               return false;
               }
else
{ alert("THANK YOU FOR YOUR REGISTRATION!!")
}
 }
 function validate_email()
 {
 var emailID=document.myform.email.value;
 atpos=emailID.indexOf("@");
 dotpos=emailID.lastindexOf(".");
 if(atpos<1||(dotpos-atpos<2))
 {
 alert("Please provide correct email id ");
 document.myform.email.focus();
 return false();
 }
 return (true);
 }