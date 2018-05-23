

// function burgerNo() {
//     // The printed variable
//     var printed = 0;
//     var cheese = "cheese"
//     var burger = "burger"

//     for (var i = 0; i < 50; i++) {
//         var returnCase = ""
//         var state = 0; // This state will track what gets returned later. If 0, return i, if 1, return returnCase
//         // 3 case. Overall thought: check for 3, add to new string, check if mod 5, concat burger, then return
//         // if neither case matches, return i
//         if (i % 3 === 0) {
//             returnCase += cheese
//             state = 1
//         }
//         // check for the 5 case, on 5, do not return a number, but a string with burger. Concat 
//         if (i % 5 === 0) {
//             returnCase += burger
//             state = 1
//         }
//         if (state === 1) {
//             return returnCase
//         }
//         return i;
//     }
// }

// function checkForDupes(array) {
//     // Want to check to see if there are duplicates, but there's no need to check the full array every time
//     // Iterate through from 0, compare to each after 1
//     var bucket;
//     for (var i = 0; i < array.length;i++) {
//         bucket = array[i]
//         // now iterate through the rest of the array
//         for (j = i; j < array.length;j++) {
//             if (bucket === array[j]) {
//                 return true;
//             }
        
//         }
//     }
//     return false
// }

var countingFunctions = [];

for ( var i = 1; i <= 15; i++ ) {
      countingFunctions.push( () => {
          console.log( i );
      } );
}

countingFunctions.forEach( function ( f ) { f(); } );