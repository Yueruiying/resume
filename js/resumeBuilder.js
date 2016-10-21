/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name" : "Sunil Behera",
    "role" : "Web Developer",
    "contacts" : {
        "mobile": "+91 94375 95871",
        "email" : "behera.sunil.k@gmail.com",
        "twitter" : "_sunilbehera",
        "github" :"beheraSunil",
        "location" : "India",
    },
    "bioPic" : "./images/fry.jpg",
    "welcomeMsg" : "Get ready to be impressed like never before!!",
    "skills" : ["HTML5", "CSS3", "JS"]
};

var work = {
    "jobs" : [
    {
        "workEmployer" : "Upwork",
        "workTitle":"Freelance Developer",
        "workDates" : "2016 - Present",
        "location" : "India",
        "workDescription": "I work on various projects with different clients and provide technical solutions.",
    }
    ]
};

var education = {
    "schools": [
    {
        "schoolName" : "National Institute of Science & Technology",
        "schoolDegree" : "Bachelor of Technology",
        "schoolDates" : "2016",
        "location" : "Berhampur, Odisha",
        "schoolMajor" : "Computer Science & Engineering",
    },
    {
        "schoolName" : "Kendriya Vidalaya",
        "schoolDegree" : "High School",
        "schoolDates" : "2012",
        "location" : "India",
        "schoolMajor" : "Intermediate Science, Mathematics & Computer Science",
    }
    ],
    "courses" : [
    {
        "onlineTitle" : "Front-End Web Developer, Naaodegree",
        "onlineSchool" : "Udacity",
        "onlineDates" : "2016",
        "onlineURL" : "http://udacity.com",
    }
    ]
};

var projects = {
    "allProjects" : [
    {
        "projectTitle" :"Online Resume",
        "projectDates" :"Oct 2016",
        "projectDescription" :"An online resume(the one you are on) developed with Javascript",
        "projectImage" :"./images/fry.jpg",
    },
    {
        "projectTitle" :"Portfolio",
        "projectDates" :"Oct 2016",
        "projectDescription" :"A responsive website to showcase all my work.",
        "projectImage" :"./images/fry.jpg",
    }
    ]
}

bio.display=function()
{
    $("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

    $("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
    $("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
    $("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

    $("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg));

    $("#header").append(HTMLskillsStart);
    for(skill in bio.skills)
    {
        $("#skills-h3").append(HTMLskills.replace("%data%",bio.skills[skill]));
    }
}

work.display=function()
{
    for(job in work.jobs)
    {
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].workEmployer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].workTitle);
        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
        var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].workDescription);
        var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].workDates);

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedWorkDescription);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkLocation);
    }
}

education.display=function()
{
    for(school in education.schools)
    {
        $("#education").append(HTMLschoolStart);

        $(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[school].schoolName) + HTMLschoolDegree.replace("%data%",education.schools[school].schoolDegree));

        $(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].schoolDates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[school].schoolMajor));
    }


}

projects.display = function()
{
    for(project in projects.allProjects)
    {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.allProjects[project].projectTitle));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.allProjects[project].projectDates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.allProjects[project].projectDescription));
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.allProjects[project].projectImage));
    }

}

$(document).click(function(loc) {
  var y=loc.pageY
  var x=loc.pageX
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

bio.display();
work.display();
projects.display();
education.display();
$("#main").append(googleMap);
$("#main").append(internationalizeButton);