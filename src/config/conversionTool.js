const fs = require('fs')
const orm = require('./orm')
let [nodePath, filePath, setName, setCategory, fileName] = process.argv

// This is the function that would read your input from the CLI.
// Uncomment this to use the CLI to import files

// generalSetImport(setName, setCategory, fileName)

// These functions are already filled out according to txt files I provided.
// Do not uncomment all three and run, the connections will time out and you'll get 
// partial sets or cards. Just uncomment one, run, then comment it out and so on.

// generalSetImport('nashville numbers', 'music', 'Nashville Numbers - Fretboard Anatomy GuitarOS.txt')
// generalSetImport('biology', 'biology', 'biology.txt')
// generalSetImport('chemistry', 'chemistry', 'Periodensystem der Elemente.txt')


function generalSetImport(setName, setCategory, fileName) {
    let setID = null
    // First generate a set and capture it's ID for later card creation
    orm.createSet(000001, setName, setCategory)
        .then((fulfilled) => {
            console.log(fulfilled.ops)
            return fulfilled.ops[0]._id
        })
        .then((setID) => {
            // Now read from the card .txt file and async create the cards! Good luck
            fs.readFile('./data/' + fileName, 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                    throw err
                }
                let stringArray = data.split('\n')
                for (let i = 0; i < stringArray.length; i++) {
                    let frontNBack = stringArray[i].split('\t')
                    orm.createCard(setID, frontNBack[0], frontNBack[1])
                        .then((fulfilled) => {
                            console.log(fulfilled.ops)
                        })

                }
                // console.log(stringArray)
            })
        })
        .catch((rejection) => {
            console.log("Card import failed, reason follows")
            console.log(rejection)
        })
}