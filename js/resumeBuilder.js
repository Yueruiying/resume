var html5 = '<img class="logo" src="./images/logos/logo-html5-k.svg">';
var css3 = '<img class="logo" src="./images/logos/css-3.svg">';
var js = '<img class="logo" src="./images/logos/logo-javascript.svg">';
var jquery = '<img class="logo" src="./images/logos/logo-jquery.svg">';
var bootstrap = '<img class="logo" src="./images/logos/logo-bootstrap.svg">';
var git = '<img class="logo" src="./images/logos/logo-git.svg">';
var npm = '<img class="logo" src="./images/logos/logo-npm.svg">';
var grunt = '<img class="logo" src="./images/logos/logo-grunt.svg">';


var bio = {
    "name": "Sunil Behera",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+91 94375 95871",
        "email": "sunil.behera@outlook.com",
        "twitter": "_sunilbehera",
        "github": "beheraSunil",
        "linkedin": "beherasunil",
        "location": "India",
    },

    "bioPic": "./images/myFace.png",
    "welcomeMsg": ["Welcome!", "Namaste!", "Hola!", "Bonjour!", "Ciao!", "Ola!", "Salaam!"],
    "skills": [html5, css3, js, jquery, bootstrap, git, npm, grunt]
};

var work = {
    "jobs": [{
        "workEmployer": "Upwork",
        "workTitle": "Freelance Developer",
        "link": "https://www.upwork.com/",
        "workDates": "2016 - Present",
        "location": "Berhampur",
        "workDescription": "I work on various projects with different clients and provide technical solutions.",
    }]
};

var education = {
    "schools": [{
        "schoolName": "National Institute of Science & Technology",
        "schoolDegree": "Bachelor of Technology",
        "schoolDates": "2016",
        "location": "Berhampur, Odisha",
        "schoolMajor": "Computer Science & Engineering",
        "link": "http://nist.edu/",
    }, {
        "schoolName": "Kendriya Vidalaya",
        "schoolDegree": "High School",
        "schoolDates": "2012",
        "location": "Panvel,Navi Mumbai",
        "schoolMajor": "Intermediate Science, Mathematics & Computer Science",
        "link": "http://kvsangathan.nic.in/",
    }],
    "courses": [{
        "onlineTitle": "Front-End Web Developer, Naaodegree",
        "onlineSchool": "Udacity",
        "onlineDates": "2016",
        "onlineURL": "http://udacity.com",
    }]
};

var projects = {
    "allProjects": [{
        "projectTitle": "Online Resume",
        "projectDates": "Oct 2016",
        "projectDescription": "An online resume(the one you are on) developed with Javascript",
        "projectImage": "./images/fry.jpg",
        "link": "#",
    }, {
        "projectTitle": "Portfolio",
        "projectDates": "Oct 2016",
        "projectDescription": "A responsive website to showcase all my work.",
        "projectImage": "./images/fry.jpg",
        "link": "https://beherasunil.github.io/Portfolio/",
    }]
};

bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", " "));
    $("#header").append(HTMLskillsStart);
    for (skill = 0; skill < bio.skills.length; skill++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }
    contactLink();
};

work.display = function() {
    for (job = 0; job < work.jobs.length; job++) {
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].workEmployer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].workTitle);
        var formattedEmployerTitle = formattedWorkEmployer.replace("#", work.jobs[job].link) + formattedWorkTitle;
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].workDescription);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].workDates);
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedWorkDescription);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkLocation);
    }
};

education.display = function() {
    for (school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);

        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].schoolName).replace("#", education.schools[school].link) + HTMLschoolDegree.replace("%data%", education.schools[school].schoolDegree));

        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].schoolDates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].schoolMajor));
    }
    $("#education").append(HTMLonlineClasses);
    for (course = 0; course < education.courses.length; course++) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.courses[course].onlineTitle).replace("#", education.courses[course].onlineURL) + HTMLonlineSchool.replace("%data%", education.courses[course].onlineSchool));

        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.courses[course].onlineDates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.courses[course].onlineURL));
    }

};

projects.display = function() {
    for (project = 0; project < projects.allProjects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.allProjects[project].projectTitle).replace("#", projects.allProjects[project].link));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.allProjects[project].projectDates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.allProjects[project].projectDescription));
        // $(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.allProjects[project].projectImage));
    }

};
$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);
$("#main").append(gototop);

$(document).click(function(loc) {
    var y = loc.pageY;
    var x = loc.pageX;
    logClicks(x, y);
});

function InName(Name) {
    var finalName = Name;
    var names = Name.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

var contactLink = function() {
    var tw = $(".contact").get(2);
    $(tw).click(function() {
        window.open('http://twitter.com/' + $(this).text(), "_blank");
    });
    $(tw).hover(function() {
        $(this).css('cursor', 'pointer');
    });
    var gt = $(".contact").get(3);
    $(gt).click(function() {
        window.open('http://github.com/' + $(this).text(), "_blank");
    });
    $(gt).hover(function() {
        $(this).css('cursor', 'pointer');
    });
    var mp = $(".contact").get(4);
    $(mp).click(function() {
        window.open('https://www.google.co.in/maps/place/' + $(this).text(), "_blank");
    });
    $(mp).hover(function() {
        $(this).css('cursor', 'pointer');
    });
};

$(".gray").hover(function() {
    $(this).css("box-shadow", "0px 13px 23px 1px rgba(115,101,115,1)");
});
$(".gray").mouseleave(function() {
    $(this).css("box-shadow", "0px 12px 15px 1px rgba(170,175,176,1)");
});
$("h2").hover(function() {
    $(this).css("color", "black");
});
$("h2").mouseleave(function() {
    $(this).css("color", "gray");
});


$("#tp").click(function() {
    $('body, html').animate({
        scrollTop: 0
    }, 800);
});

$("#internationalizeButton").click(function() {

    $("#name").text(InName(bio.name));
    $('body, html').animate({
        scrollTop: 0
    }, 800);
});

$("#lets-connect").click(function() {
    window.open('https://in.linkedin.com/in/beherasunil', "_blank");

});
$("#lets-connect").hover(function() {
    $(this).css('cursor', 'pointer');
});

bio.display();
work.display();
projects.display();
education.display();

var counter = 0;
var elem = document.getElementById("changeText");
setInterval(change, 1900);

function change() {
    elem.innerHTML = bio.welcomeMsg[counter];
    counter++;
    if (counter >= bio.welcomeMsg.length) {
        counter = 0;
    }
}