let allUsers = [ {'email':'anurag.mishra@capgemini.com','password':'123456'} , {'email':'parag.mishra@capgemini.com','password':'123456'} ]
let checklogin = (...email,...password,allUsers) =>
{
	let isUserFound = false;
	let passwordCorrect = false;
	
	for(currentUser of allUsers)
	{
		console.log(currentUser)
		
		if (currentUser.email == email)
		 {
		   if (currentUser.password == password)
		    {
			  isUserFound = true
			  passwordCorrect = true
			  break
			}
			else
			{
			  isUserFound = true
			  passwordCorrect = false
			  break
			}
		 }
		 else
		 {
		   isUserFound = false
		 }
	}
		
		if (isUserFound == true && passwordCorrect == true)
		{
		  alert('You have logged in')
		} else if (isUserFound == true && passwordCorrect == false) {
		  alert('You have provided incorrect password') }
		else {
		  alert ('No user with this email found')
		}
		
}
		
	
     checklogin('anurag.mishra@capgemini.com','parag.mishra@capgemini.com',123456,'allUsers)	