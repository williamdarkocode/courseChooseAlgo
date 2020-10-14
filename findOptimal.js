// const { coursesCombinedArr } = require('./coursesCombinedArr');

// const reqsKeys = Object.keys(coursesCombinedArr);

const { optimal } = require('./optimalBind');

// let acc = {};

// function combineBy() {
//     return reqsKeys.reduce(function(acc, key) {
//         let obj = coursesCombinedArr[key];
//         let courseKeys = Object.keys(obj);
//         for(let k of courseKeys) {
//             if(!acc[k]) {
//                 acc[k] = {};
//             }
//             let courseNumbers = obj[k];
//             for(let c of courseNumbers) {
//                 if(!acc[k][c]) {
//                     acc[k][c] = [];
//                 }
//                 acc[k][c].push(key);
//             }
//         }
//     }, {})
// }

// function combineBy() {
//     for(let key of reqsKeys) {
//         let obj = coursesCombinedArr[key];
//         let courseKeys = Object.keys(obj);
//         for(let k of courseKeys) {
//             if(!acc[k]) {
//                 acc[k] = {};
//             }
//             let courseNumbers = obj[k];
//             for(let c of courseNumbers) {
//                 if(!acc[k][c]) {
//                     acc[k][c] = [];
//                 }
//                 acc[k][c].push(key);
//             }
//         }
//     }
//     return acc;
// }

// let final = combineBy();
// console.log(final);

function printMinimal() {
    let minimal = {};
    let keys = Object.keys(optimal);
    for(let k of keys) {
        let courseNumbers = Object.keys(optimal[k]);
        for(let inner of courseNumbers) {
            if(minimal[k]) {
                if(optimal[k][inner].length > 1) {
                    // minimal[k] = {};
                    minimal[k][inner] = optimal[k][inner];
                }
            }
            else {
                if(!minimal[k] && optimal[k][inner].length > 1) {
                    minimal[k] = {};
                    minimal[k][inner] = optimal[k][inner];
                }
            }
            
        }
    }
    return minimal;
}

const min = printMinimal();
console.log(min);