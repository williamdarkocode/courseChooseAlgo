const courses = "AFPRL, ASIAN, ANTHC, EDUC, ENGL, FILM, GEOG, MEDIA, MUSHL, NURS, PHILO, POLSC, REL, SOC, THEA, URBS, WGSL, WGS, CLA, COMPL, ECO, FREN, GEOG, HIST, MEDIA, GERMN, HEBR, HONS, ITAL, NURS, POLSC, PSYCH, RUSS, WGSA, WGSS, WGSC, WGST, WGSP, SPAN, WGSL, CLARC, DAN, LACS, POL, REL, ARB, CHIN, HUM, MHC, MUSTH, ANTHP, ASTRO, BIOL, CHEM, GEOL, PGEOG, PHYS";

const coursesArr = ["AFPRL", " ASIAN", " ANTHC", " EDUC", " ENGL", " FILM", " GEOG", " MEDIA", " MUSHL", " NURS", " PHILO", " POLSC", " REL", " SOC", " THEA", " URBS", " WGSL", " WGS", " CLA", " COMPL", " ECO", " FREN", " GEOG", " HIST", " MEDIA", " GERMN", " HEBR", " HONS", " ITAL", " NURS", " POLSC", " PSYCH", " RUSS", " WGSA", " WGSS", " WGSC", " WGST", " WGSP", " SPAN", " WGSL", " CLARC", " DAN", " LACS", " POL", " REL", " ARB", " CHIN", " HUM", " MHC", " MUSTH", " ANTHP", " ASTRO", " BIOL", " CHEM", " GEOL", " PGEOG", " PHYS"];

function structurise(courseGroup, courses) {
    let structure = {};
    structure[courseGroup] = {};
    let tempArr = [];
    tempArr = courses.split("or");
    for(let j = 0; j < tempArr.length; j++) {
        tempArr[j].toString();
        tempArr[j] = tempArr[j].trim();
        tempArr[j] = '"'+tempArr[j]+'"';
    }

    // tempArr = tempArr[0].split(",");

    // document.write(`<code>${tempArr}</code>`);
    console.log(tempArr);
    // for(let i = 0; i < courses.length; i++) {

    // }
}

// let classGroup = prompt("What is the class group?");
// let classes = prompt("What are the courses?");

// structurise(classGroup, classes);

exports.courses = coursesArr;
