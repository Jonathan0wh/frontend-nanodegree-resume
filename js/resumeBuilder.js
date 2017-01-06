var work = {
    "jobs": [{
            "employer": "Young Yaa Pty.Ltd",
            "title": "Web Developer",
            "dates": "September 2015 - June 2016",
            "description": "Web Developing and server management"
        },
        {
            "employer": "Hubei Library",
            "title": "book manager",
            "dates": "July 2013 - August 2013",
            "description": "Library management and catagorisation"
        },
    ]
};

var projects = {
    "projects": [{
        "title": "",
        "dates": "",
        "description": "",
        "images": []
    }]
};

var bio = {
    "name": "Jonathan Livingston",
    "role": "Web Developer",
    "welcomeMessage": "Welcome",
    "biopic": "images/fry.jpg",
    "contacts": {
        "mobile": "0451137772",
        "email": "Jonathan0wh@gmail.com",
        "github": "jonathan0wh",
        "twitter": "jonathan0wh",
        "location": "Sydney"
    },
    "skills": ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"]
}

var education = {
    "schools": [{
            "name": "University of New South Wales",
            "city": "Sydney, NSW",
            "degree": "Masters",
            "dates": 2016,
            "url": "https://example.com",
            "major": ["IT"]
        },
        {
            "name": "Wuhan University",
            "city": "Wuhan, Hubei",
            "degree": "Bachelors",
            "dates": 2014,
            "url": "https://example.com",
            "major": ["Library Science"]
        }
    ],
    "onlineCourses": [{
        "title": "JavaScript Crash Course",
        "school": "Udacity",
        "dates": 2016,
        "url": "https://www.udacity.com/course/ud804"
    }]
}

if (bio.skills.length > 0) {
    $("#header").append(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);

        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data", image);
                $(".project-entry:last").append(formattedImage);
            })
        }
    });
}

$("#mapDev").append(googleMap);

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});
