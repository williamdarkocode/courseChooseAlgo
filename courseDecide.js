const { UsExperiencesInItsDiversity, GroupsInTheUSA, WomenGenderAndSexOrientation, CreativeExpressions, LifeAndPhysSci, EuropeanSocieties, WorldCultureAndGlobalIssues } = require('./courseList');

const { courses } = require('./courseSelect');

const arr = [UsExperiencesInItsDiversity, GroupsInTheUSA, WomenGenderAndSexOrientation,
CreativeExpressions, LifeAndPhysSci, EuropeanSocieties, WorldCultureAndGlobalIssues];

'use strict';

const fs = require('fs');

const fieldsAndNames = [
    {'US Experience In Iths Diversity': UsExperiencesInItsDiversity},
    {'Groups In The USA': GroupsInTheUSA},
    {'Women Gender & Sexual Orientation': WomenGenderAndSexOrientation},
    {'Creative Expressions': CreativeExpressions},
    {'Life & Physical Sciences': LifeAndPhysSci},
    {'European Societies': EuropeanSocieties},
    {'World Culture & Global Issues': WorldCultureAndGlobalIssues}
];

let courseObjList = {};

function structurise(courseArr, key) {
    let i = 0;
    courseObjList[key] = {};

    while(i < courseArr.length) {
        if(courseArr[i].indexOf(" ") > 0) {
            let temp = courseArr[i].split(" ");
            let className = temp[0];
            let emptyArr = [];
            // console.log(className);
            emptyArr.push(temp[1]);

            i++;
            let j = i;
            while(j < courseArr.length && courseArr[j].indexOf(" ") < 0) {
                emptyArr.push(courseArr[j]);
                j++;
            }
            // courseObjList[key][className] = emptyArr;
            courseObjList[key][className] = emptyArr;
            i = j;


        }
        else {
            i++;
        }
    }
    // console.log(courseObjList);
}

let compute =  new Promise((res, rej) => {
    fieldsAndNames.forEach((elem) => {
        let key = Object.keys(elem)[0];
        let val = Object.values(elem)[0];
        // console.log(key);
        // console.log(val);
        structurise(val, key);
    }, res('done'))
    
})


Promise.all(
    [compute]
)
.then(() => {
    let final = JSON.stringify(courseObjList);
    console.log(courseObjList);
    fs.writeFileSync('./coursesCombined.json', final);
})


