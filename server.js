var express = require("express") 
var app = express() 
var CSCourses = [{
    Course:"CUS 1102",
    CourseName:"SOFTWARE APPLICATION",
    Credits:"3",
    Code:"12943,10246,10257,11155,10454",
    Type:"Lecture",
    Days:"Tuesday,Friday"
    },
{
	Course:"CUS 1116",
	CourseName:"COMPUTER PROG FUND 1",
	Credits:"3",
	CourseCode:"12558,11501",
	Type:"Lecture/Lab",
	Days:"Monday,Wednesday,Thursday",
},
{
	Course: "CUS 1126",
	CourseName: "INTRO TO DATA STRUCTURES",
	Credits: "3",
	CourseCode: "12946,11737",
	Type: "Lecture/Lab",
	Days: "Monday, Tuesday,Thursday,Friday"
	},
	{
	Course: "CUS 1150",
	CourseName: "SYSTEMS PROGRAMMING IN LINUX",
	Credits: "3",
	CourseCode:"15476",
	Type: "Lecture/Lab",
	Days: "Monday,Thursday",
	Time: "1040-1205"
	},
	{
	Course:"CUS 1116",
	CourseName:"COMPUTER PROG FUND 2",
	Credits:"3",
	CourseCode:"11505,11514,11515,12321,12559,12329",
	Type:"Lecture/Lab",
	Days:"Monday,Tuesday,Thursday,Friday",
	Time:"0905-1030,1040-1205,1215-1340,1350-1515"
	},
	{
	Course:"CUS 1156",
	CourseName:"ADVANCED DATA STRUCTURES",
	Credits:"3",
	CourseCode:"11280",
	Type:"Lecture/Lab",
	Days:"Monday Thursday",
	Time:"1040-1205", 
	Professors:"Bonnie MacKellar"
	},
	{
	Course:"CUS 1156",
	CourseName: "SOFTWARE DESIGN METHOD",
	Credits: "3",
	CourseCode:"15475,12560",
	Type:"Lecture, Hybrid-Classroom & Online",
	Days:"Wednesday,Thursday",
	Time:"1700-1825,1350-1640"
	},
	{
	Course:"CUS 1163",
	CourseName:"OPERATING SYSTEMS",
	Credits:"3",
	CourseCode:"12561,12319",
	Type:"Lecture",
	Days:"Monday,Wednesday,Thursday",
	Time:"0730-0855,1350-1640" 
	},
	{
	Course:"CUS 1165",
	CourseName:"DATABASE MANAGEMENT SYSTEMS",
	Credits:"3",
	CourseCode:"15468,12328,11738",
	Type:"Lecture,Lecture/Lab",
	Days:"Monday,Wednesday,Thursday",
	Time:"0905-1030,1040-1330,1215-1340"
	},
	{
	Course:"CUS 1166",
	CourseName:"SOFTWARE ENGINEERING",
	Credits:"3",
	CourseCode:"11516,12948",
	Type:"Lecture/Lab",
	Days:"Monday, Wednesday,Thursday",
	Time:"1525-1650,1350-1640"
	},
	{
	Course: "CUS 1167",
	CourseName: "SYSTEMS ANALYSIS",
	Credits: "3",
	CourseCode: "12056",
	Type: "Hybrid-Classroom & Online",
	Days: "Monday,Thursday",
	Time: "0905-1030, 0730-0855"
	},
	
	{
	Course: "CUS 1172",
	CourseName: "WEB PAGE GRAPHICS",
	Credits: "3",
	CourseCode: "15412",
	Type: "Hybrid-Classroom & Online",
	Days: "Thursday",
	Time: "0730-0855"
	},
	
	{
	Course: "CUS 1174",
	CourseName: "ARTIFICIAL INTELLIGENCE",
	Credits: "3",
	CourseCode: "12324",
	Type: "Hybrid-Classroom & Online",
	Days: "Tuesday",
	Time: "1525-1650"
	},
	{
	Course: "CUS 1185",
	CourseName: "DATA SECURITY & CRYPTOGRAPHY",
	Credits: "3",
	CourseCode: "15696, 11502",
	Type: "Lecture",
	Days: "Monday, Thursday",
	Time: "0905-1030, 1040-1205"
	},
	{
	Course: "CUS 1186",
	CourseName: "THEORY OF COMPUTATION",
	Credits: "3",
	CourseCode: "13802",
	Type: "Lecture",
	Days: "Tuesday",
	Time: "1700,1950"
	},
	{
	Course: "CUS 1188",
	CourseName: "ANALYSIS OF ALGORITHIMS",
	Credits: "3",
	CourseCode: "12562",
	Type: "Lecture",
	Days: "Tuesday",
	Time: "0730-0855"
	},
	{
	Course: "CUS 1191, 1192",
	CourseName: "COMPUTER SCIENCE INTERNSHIP",
	Credits: "3, 6",
	CourseCode: "10040, 10642",
	Type: "Internship",
	Days: "HRS ARR",
	Time: "N/A"
	  }];
var CSSCourses = [{
	Course: "CSS 1005",
	CourseName: "FUNDAMENTALS OF CYBER SECURITY",
	Credits: "3",
	CourseCode: "11635, 11323",
	Type: "Lecture, Lecture/Lab, Hybrid-Classroom & Online",
	Days: "Wednesday, Friday",
	Time: "1040-1205, 1910-2200"
	},
	{
	Course: "CSS 1006",
	CourseName: "MGT OF INFORMATION SECURITY",
	Credits: "3",
	CourseCode: "13913",
	Type: "Lecture/Lab",
	Days: "Monday, Thursday",
	Time: "1040-1330"
	},
	{
	Course:"CSS 1008",
	CourseName:"HEALTHCARE INFO SECURITY",
	Credits:"3",
	CourseCode:"13858",
	Type:"Hybrid-Classroom & Online",
	Days:"Wednesday",
	Time:"1700-1825"
	},
	{
	Course:"CSS 1011",
	CourseName:"NETWORK SECURITY",
	Credits:"3",
	CourseCode:"13856",
	Type:"Hybrid-Classroom & Online",
	Days:"Wednesday",
	Time: "1700-1825"
	},
	{
	Course:"CSS 1012",
  	CourseName:"NETWORK PERIMETER SECURITY",
	Credits:"3",
	CourseCode:"11500",
	Type:"Hybrid-Classroom & Online",
	Days:"Monday",
	Time:"1040-1205"
	},
	{
	Course:"CSS 1015",
	CourseName:"WIRELESS SECURITY",
	Credits:"3",
	CourseCode:"14986",
	Type:"Hybrid-Classroom & Online",
 	Days:"Monday",
	Time:"0905-1030"
	},
	{
 	Course:"CSS 1018",
	CourseName:"SQL & CLOUD DATABASE SECURITY",
	Credits:"3",
	CourseCode:"15411",
	Type:"Lecture/Lab",
 	Days:"Monday",
	Time:"1910-2200",
	},
	{
	Course:"CSS 1032",
	CourseName: "CYBER THREATS AND DETECTION",
	Credits:"3",
 	CourseCode:"10959",
 	Type:"Lecture,Lecture/Lab",
	Days:"Monday",
	Time:"1215-1340"
	},
	{
	Course:"CSS 1035",
	CourseName:"SECURE SOFTWARE DEVELOPENT",
	Credits:"3",
	CourseCode:"14985",
	Type:"Hybrid-Classroom & Online",
	Days:"Tuesday",
	Time:"1040-1330"
	},
	{
	Course:"CSS 1092",
	CourseName:"COMP SECURITY SYS INTERNSHIP",
	Credits: "3",
 	CourseCode:"11360",
	Type:"Internship",
	Days:"HRS ARR",
	Time:"NA"
	}];
var HCICourses = [{
	Course:"HCI1002",
	CourseName:"HEALTHCARE INFO & DATA MGT",
	Credits:"3",
	CourseCode:"15413",
	Type:"Lecture,Lecture/Lab",
	Days:"Tuesday,Friday",
	Time:"1215-1340"
	},
	{
	Course:"HCI 1015",
	CourseName:"DATA STANDARS/VOCAB IN HLTHCR",
	Credits:"3",
	CourseCode:"15630",
	Type:"Lecture",
	Days:"Tuesday",
	Time:"1910-2200"
	},
	{
	Course:"HCI 1021",
	CourseName:"HEALTHCARE DATABASE MGT SYS",
	Credits:"3",
	CourseCode:"11881",
	Type:"Lecture",
	Days:"Wednesday",
	Time:"1040-1330"
	}];
var ITCourses = [{
	Course:"IT 1011",
	CourseName:"INFO TECHNOLOGY FOR BUSINESS",
	Credits:"3",
	CourseCode:"13136",
	Type:"Lecture/Lab",
	Days:"Monday,Thursday",
	Time:"0730-0855"
	}];
	
var NCourses = [{
	Course:"NET 1011",
	CourseName:"INTRODUCTION TO NETWORKS",
	Credits:"3",
	CourseCode:"11882",
	Type:"Lecture, Lecture/Lab",
	Days:"Wednesday",
	Time:"0905-1030,1040-1330,"
	},
	{
	Course:"NET 1015",
	CourseName:"ROUTING & SWITCHING ESSENTIALS",
	Credits:"3",
	CourseCode:"11634",
	Type:"Lecture/Lab",
	Days:"Wednesday",
	Time:"0730-1020"
	},
		{
	Course:"NET 1061",
	CourseName:"ADVANCED NETWORK ROUTING",
	Credits:"3",
	CourseCode:"12768",
	Type:"Lecture/Lab",
	Days:"Saturday",
	Time:"0830-1120"
	},
	{
	Course:"NET 1091",
	CourseName:"NETWORKING INTERNSHIP",
	Credits:"3",
	CourseCode:"11336",
	Type:"internship",
	Days:"HRS ARR",
	Time:"NA"
	}];
var MTHCourses = [{
	Course:"MTH 1003",
	CourseName:"INTRO TO COLLEGE MATH 1",
	Credits:"3",
	CourseCode:"10745,10748,10749,12497,10034,10035,10037",
	Type:"Lecture",
	Days:"Monday,Tuesday, Wednesday,Thursday,Friday,Saturday",
	Time:"1525-1650,1700-1825,1910-2200,1215-1340,1040-1205,0839-1120"
	},
	{
	Course:"MTH 1004",
	CourseName:"INTRO TO COLLEGE MATH 2",
	Credits:"3",
	CourseCode:"10901,12619",
	Type:"Lecture",
	Days:"Tuesday,Friday",
	Time:"1040-1205,1215-1340"
	},
		{
	Course:"MTH 1007",
	CourseName:"COLLEGE ALGEBRA & TRIGONOMETRY",
	Credits:"3",
	CourseCode:"10547,10032,10033",
	Type:"Lecture",
	Days:"Tuesday,Wednesday,Friday",
	Time:"0905-1030,1040-1205,1700-1950"
	},
		{
	Course:"MTH 1008",
	CourseName:"MATRIX METHODS",
	Credits:"3",
	CourseCode:"11517",
	Type:"Lecture",
	Days:"Tuesday, Friday",
	Time:"0905-1030, 0730-0855"
	},
		{
	Course:"MTH 1009",
	CourseName:"CALCULUS 1",
	Credits:"3",
	CourseCode:"10505,13810,10674,10747,14054,15353,15414",
	Type:"Lecture,Lecture/Lab",
 	Days:"Monday,Tuesday,Thursday,Friday",
	Time:"1040-1330,1215-1340,1525-1650"
	},
	{
	Course:"MTH 1010",
	CourseName:"CALCULUS 2",
	Credits:"3",
	CourseCode:"13829,12950,10031",
	Type:"Lecture",
	Days:"Monday,Tuesday,Wednesday,Thursday",
	Time:"0905-1030,1040-1330,0730-1020" 
	},
	{
	Course:"MTH 1013",
	CourseName:"PROBABILITY AND STATISTICS 1",
	Credits:"3",
	CourseCode:"15415,12327,11661,15352",
	Type:"Lecture,Hybrid-Classroom & Online",
	Days:"Tuesday, Friday",
	Time:"1215-1340,1525-1650,0905-1030"
	},
	{
	Course:"MTH 1014",
	CourseName:"PROBABILITY AND STATISTICS 2",
	Credits:"3",
	CourseCode:"11518,11662",
	Type:"Hybrid-Classroom & Online",
	Days:"Monday, Tuesday,Thursday",
	Time:"1040-1205,1525-1650"
	},
	{
	Course:"MTH 1018",
	CourseName:"DIFFERENTIAL EQUATIONS",
	Credits:"3",
	CourseCode:"14987",
	Type:"Hybrid-Classroom & Online",
	Days:"Wednesday",
	Time:"1700-1825"
	},
	{
	Course:"MTH 1021",
	CourseName:"INTRODUCTION TO STATISTICS",
	Credits:"3",
	CourseCode:"10899,10900,11519,11711",
	Type:"Lecture",
	Days:"Monday,Tuesday,Wednesday,Thursday,Friday",
	Time:"0730-0855,1350-1515"
	},
	{
	Course: "MTH 1022",
	CourseName:"DISCRETE MATHEMATIC",
	Credits:"3",
	CourseCode:"12571",
	Type:"Lecture",
	Days:"Monday,Thursday",
	Time:"1700-1825"
	},
	{
	Course:"MTH 1031",
	CourseName:"MATH FOR ELEMENTARY TEACHER 2",
	Credits:"3",
	CourseCode:"13859",
	Type:"Lecture",
	Days:"Monday,Thursday",
	Time:"0905-1030"
	}];


app.get("/",function(req,res) {
	res.json("Hello");
});

app.get('/CSCourses',function(req,res) {
	res.json(CSCourses);
});

app.get('/CSSCourses',function(req,res) {
	res.json(CSSCourses);
});

app.get('/HCICourses',function(req,res) {
	res.json(HCICourses);
});

app.get('/ITCourses',function(req,res) {
	res.json(ITCourses);
});

app.get('/NCourses',function(req,res) {
	res.json(NCourses);
});

app.get('/MTHCourses',function(req,res) {
	res.json(MTHCourses);
});

app.listen(3000,function() {
		console.log("The server is running on port 3000");	
});
