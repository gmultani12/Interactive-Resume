// Bio object
var bio = {
    "name": "Gurprit Multani",
    "role": "Front-End Web Developer",
    "welcomeMessage": "Welcome to my interactive resume for Udacity FED nanodegree",
    "contacts": {
        "mobile": "(708)-381-0201",
        "email": "gmultani12@gmail.com",
        "github": "gmultani12",
        "location": "Bloomington, Indiana"
    },
    "skills": ["HTML", "CSS", "JavaScript", "Ruby on Rails"],
    "bioPic": "images/gurprit.png"
};

bio.display = function() {
    // Append basic information
    var formattedName = bio.name;
    var formattedRole = bio.role;
    HTMLheaderName = HTMLheaderName.replace("%data%", formattedName);
    HTMLheaderRole = HTMLheaderRole.replace("%data%", formattedRole);
    $("#header").prepend(HTMLheaderRole);
    $("#header").prepend(HTMLheaderName);

    var mobile = bio.contacts.mobile;
    var formattedMobile = HTMLmobile.replace("%data%", mobile);
    $("#topContacts").append(formattedMobile);

    var email = bio.contacts.email;
    var formattedEmail = HTMLemail.replace("%data%", email);
    $("#topContacts").append(formattedEmail);

    var github = bio.contacts.github;
    var formattedGithub = HTMLgithub.replace("%data%", github);
    $("#topContacts").append(formattedGithub);

    var location = bio.contacts.location;
    var formattedLocation = HTMLlocation.replace("%data%", location);
    $("#topContacts").append(formattedLocation);

    var bioPic = bio.bioPic;
    var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
    $("#header").append(formattedBioPic);

    var welcomeMessage = bio.welcomeMessage;
    var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
    $("#header").append(formattedWelcomeMessage);


    // Append skills to the skills section
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
};


// Education object
var education = {
    "schools": [{
        "name": "Indiana University",
        "city": "Bloomington, Indiana",
        "years": "2008 - 2013",
        "degree": "Bachelor of Science",
        "major": "Neuroscience",
    }, {
        "name": "Indiana University",
        "city": "Bloomington,Indiana",
        "years": "2008 - 2013",
        "degree": "Bachelor of Science",
        "major": "Psychology",
    }, {
        "name": "Indiana University",
        "city": "Bloomington,Indiana",
        "years": "2013 - May 2015 (expected)",
        "degree": "Masters",
        "major": "Public Health Adminstration",
    }],

    "onlineCourse": [{
            "title": "Front End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2014 - Apr 2015 (expected)",
            "urls": "http://wwww.udacity.com"
        },

        {
            "title": "Creating Responsive Web Design",
            "school": "Udemy",
            "dates": 2014,
            "urls": "https://www.udemy.com/creating-responsive-web-design/#/"
        },

        {
            "title": "Learn Ruby on Rails from Scratch",
            "school": "Udemy",
            "dates": 2014,
            "urls": "https://www.udemy.com/learn-ruby-on-rails-from-scratch/#/"
        },

        {
            "title": "Become a Web Developer from Scratch",
            "school": "Udemy",
            "dates": "In Progress",
            "urls": "https://www.udemy.com/how-to-become-a-web-developer-from-scratch/#/"
        }, {
            "title": "Learning Javascript Programming",
            "school": "Udemy",
            "dates": "In progress",
            "urls": "https://www.udemy.com/programming-javascript/#/"
        }
    ]
}

// Work object
var work = {
    "jobs": [{
        "employer": "Airwave Networks",
        "title": "Network Technician",
        "location": "Bloomington, IN"
    }, {
        "employer": "Indiana University (School of Public Health)",
        "title": "Cervical Cancer Research Assistant",
        "location": "Bloomington, IN",
    }, {
        "employer": "Indiana University (School of Public Health)",
        "title": "STD Clinic Research Assistant",
        "location": "Bloomington, IN"
    }]
};


// Project object
var projects = {
    "projects": [{
            "title": "Portfolio Mockup",
            "dates": "October 2014",
            "description": "Intro HTML and CSS"
        },

        {
            "title": "Interactive Resume",
            "dates": "December 2014",
            "description": "Javascript Basics and Intro to JQuery"
        }, {
            "title": "Classic Arcade Game Clone",
            "dates": "December 2014",
            "description": "Object-Oriented Javascript and HTML5 Canvas"
        }, {
            "title": "Website Optimization",
            "dates": "January 2015 (expected)",
            "description": "Website Performance Optimization"
        }, {
            "title": "Neighborhood Map",
            "dates": "January 2015 (expected)",
            "description": "Intro to AJAX and Javascript Design Patterns"
        }, {
            "title": "Feed Reader Testing",
            "dates": "February 2015 (expected)",
            "description": "JavaScript Testing"
        }
    ]
};

// Encapsulates the function display() into projects object
projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDate);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
    }
};


// Append job experiences
function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedLocation);
    }
}

// Education section

function displayEducation() {

    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedschoolDegree = formattedschoolName + formattedschoolDegree;
        $(".education-entry:last").append(formattedschoolDegree);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
        $(".education-entry:last").append(formattedschoolDates);

        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        $(".education-entry:last").append(formattedschoolLocation);

        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedschoolMajor);

    }

}

displayEducation();

function displayonlinecourses() {

    $(".education-entry:last").append(HTMLonlineClasses);
    for (course in education.onlineCourse) {

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
        $(".education-entry:last").append(formattedonlineTitle);

        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[course].dates);
        $(".education-entry:last").append(formattedonlineDates);

        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
        $(".education-entry:last").append(formattedonlineSchool);

        var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourse[course].urls);
        $(".education-entry:last").append(formattedonlineUrl);

    }

}

displayonlinecourses();

//Other Sections

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);

});

// Return a list of job's 
function locationizer(work_obj) {
   var locationArray = [];

   for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
   }

   return locationArray;

}


// Add Internationalize button
$("#main").append(internationalizeButton);

// Reformat the given input into internationalize form
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase;
    name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];

}

bio.display();
displayWork();
projects.display();

// footer section

$("#footerContacts").append(formattedmobile);
$("#footerContacts").append(formattedemail);
$('#footerContacts').append(internationalizeButton);
$("#footerContacts").append(formattedtwitter);
$("#footerContacts").append(formattedlinkedin);

// map section

$("#mapDiv").append(googleMap);