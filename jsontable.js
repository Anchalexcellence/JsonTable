$("document").ready(function(){
	var person=[{firstname:"Anchal",lastname:"Agarwal",Dob:"14-03-1994"},
	{firstname:"Varun",lastname:"Gupta",Dob:"06-02-1991"},
	{firstname:"Abhishek",lastname:"Kumar",Dob:"10-04-1990"},
	{firstname:"Rajat",lastname:"Singh",Dob:"15-03-1994"},
	{firstname:"Asish",lastname:"Kumar",Dob:"16-10-1995"},
	{firstname:"kamal",lastname:"Joshi",Dob:"17-08-1996"},
	{firstname:"kamal",lastname:"Rathi",Dob:"20-05-1997"}
	]
	for(var i=0;i<person.length;i++)
	{
		console.log(person[i].firstname);
		$("#data1").append("<tr><td>"+person[i].firstname+"</td> <td>"+person[i].lastname+"</td> <td>"+person[i].Dob+"</td></tr>");

	
}

});