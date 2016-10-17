/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name="Sunil Behera";
var role="Web Developer";

// var contactGeneric="NA";
var mobile="9437595871";
var email="behera.sunil.k@gmail.com";
// var twitter="NA";
// var github="NA";
// var blog="NA";
// var location="NA";

var bioPic="./images/fry.jpg";
var welcomeMsg="Get ready to be impressed like never before!!";

// var skillsStart="Front-End web developement";
var skills=["HTML5", "CSS3", "JS"];

// var workStart = "NA";
// var workEmployer = "NA";
var workTitle = "NA";
// var workDates = "NA";
// var workLocation = "NA";
// var workDescription = "NA";

// var schoolStart = "NA";
var schoolName = "NA";
// var schoolDegree = "NA";
// var schoolDates = "NA";
// var schoolLocation = "NA";
// var schoolMajor = "NA";

var formattedname=HTMLheaderName.replace("%data%",name);
$("#header").append(formattedname);
var formattedrole=HTMLheaderRole.replace("%data%",role);
$("#header").append(formattedrole);

var bio={
    "name" : name,
    "role" : role,
    "contacts" : {
        "mobile": mobile,
        "email" : email
    },
    "bioPic" : bioPic,
    "welcomeMsg" : welcomeMsg,
    "skills" : skills
};
var work={
    "workTitle" : workTitle,
    // "workEmployer" : workEmployer,
    // "workStart" : workStart
};
var education={};
    education.schoolName="schoolName"
    // "schoolDegree" : schoolDegree,
    // "schoolLocation" : schoolLocation

$("#main").append(bio.contacts["mobile"]);
$("#main").append(work.workTitle);
$("#main").append(education["schoolName"]);