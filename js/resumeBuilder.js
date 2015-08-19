//$("#main").append("Fletch");
//var awesomeThoughts = "I am Fletch and I am AWESOME!";
//console.log(awesomeThoughts);
//var funThoughts = awesomeThoughts.replace("AWESOME","fun");
//$("#main").append(funThoughts);

var name = "Michael Fletcher";
var role = "trainee developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);