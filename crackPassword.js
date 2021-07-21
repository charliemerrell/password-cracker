/*
Find the 4-letter string of lowercase letters (i.e. a-z) 
which produces the md5 digest dbfcafe986040cc10ada1a4314c436db
*/
const crypto = require("crypto");

function hash(word) {
    return crypto.createHash("md5").update(word).digest("hex");
}

const chars = "abcdefghijklmnopqrstuvwxyz";
const targetHash = "dbfcafe986040cc10ada1a4314c436db";

for (let char1 of chars) {
    for (let char2 of chars) {
        for (let char3 of chars) {
            for (let char4 of chars) {
                const guess = char1 + char2 + char3 + char4;
                if (hash(guess) === targetHash) {
                    console.log(guess);
                    process.exit(0);
                }
            }
        }
    }
}
