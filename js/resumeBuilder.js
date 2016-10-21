/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name="Sunil Behera";
var role="Web Developer";

var mobile="+91 94375 95871";
var email="behera.sunil.k@gmail.com";
var twitter="_sunilbehera";
var github="beheraSunil";
// var blog="NA";
var mylocation="India";

var bioPic="./images/fry.jpg";
var welcomeMsg="Get ready to be impressed like never before!!";

var skills=["HTML5", "CSS3", "JS"];

// var workEmployer = "NA";
// var workTitle = "NA";
// var workDates = "NA";
// var workLocation = "NA";
// var workDescription = "NA";

// var schoolStart = "NA";
// var schoolName = "NA";
// var schoolDegree = "NA";
// var schoolDates = "NA";
// var schoolLocation = "NA";
// var schoolMajor = "NA";

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
    "jobs" :[
    {
        "workEmployer" : "Employer Number One",
        "workTitle":"Work Title One",
        "workDescription": "Work Description one",
        "workLocation" : "Work Location One",
        "workDates" : "Work date One",
    },
    {
        "workEmployer" : "Employer Number two",
        "workTitle": "Work Title two",
        "workDescription": "Work Description two",
        "workLocation" : "Work Location two",
        "workDates" : "Work date two",
    }
    ],
};

var education={
    "school": [
    {
        "schoolName" : "KVBAM",
        "city": "BAM"
    },
    {
        "schoolName" : "KVPAN",
        "city" : "PAN"
    }
    ]
};
var projects={
    "myproject" : [
    {
        "name" : "name_pt1",
        "date" : "date_pt1",
    }]
}
projects.display = function()
{
    for(project in projects.myproject)
    {
        $("#main").append(HTMLprojectStart);
        $("#main").append(HTMLprojectTitle.replace("%data%",projects.myproject[project].name));
        $("#main").append(HTMLprojectDates.replace("%data%",projects.myproject[project].date));
    }
}
$(document).click(function(loc) {
  // your code goes here
  var x=loc.pageX;
  var y=loc.pageY;
  // console.log(loc.y);
  logClicks(x,y);
});

function InName(Name) {
    var finalName = Name;
    var names = Name.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
};

$("#header").append(HTMLheaderName.replace("%data%",name));
$("#header").append(HTMLheaderRole.replace("%data%",role));


// $("#header").append(HTMLcontactGeneric);
$("#header").append(HTMLmobile.replace("%data%",mobile));
$("#header").append(HTMLemail.replace("%data%",email));
$("#header").append(HTMLtwitter.replace("%data%",twitter));
$("#header").append(HTMLgithub.replace("%data%",github));
// $("#header").append(HTMLblog.replace("%data%",blog));
$("#header").append(HTMLlocation.replace("%data%",mylocation));



$("#header").append(HTMLbioPic.replace("%data%",bioPic));

$("#header").append(HTMLwelcomeMsg.replace("%data%",welcomeMsg));



if(bio.skills.length!=0)
{
    $("#header").append(HTMLskillsStart);
    var formattedSkills=HTMLskills.replace("%data%",skills[0]);
    $("#header").append(formattedSkills);

    var formattedSkills=HTMLskills.replace("%data%",skills[1]);
    $("#header").append(formattedSkills);

    var formattedSkills=HTMLskills.replace("%data%",skills[2]);
    $("#header").append(formattedSkills);
}

for(job in work.jobs){
    $("#main").append(HTMLworkStart);
    var formattedWorkEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].workEmployer);
    $("#main").append(formattedWorkEmployer);
    var formattedWorkTitle=HTMLworkTitle.replace("%data%",work.jobs[job].workTitle);
    $("#main").append(formattedWorkTitle);
     var formattedWorkDescription=HTMLworkDescription.replace("%data%",work.jobs[job].workDescription);
    $("#main").append(formattedWorkDescription);
     var formattedWorkLocation=HTMLworkLocation.replace("%data%",work.jobs[job].workLocation);
    $("#main").append(formattedWorkLocation);
     var formattedWorkDates=HTMLworkDates.replace("%data%",work.jobs[job].workDates);
    $("#main").append(formattedWorkDates);

    // var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle
    // $(".work-entry:last").append(formattedEmployerTitle);
}
projects.display();
$("#main").append(internationalizeButton);