let input = 'i love computers';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] === 'e') {
        resultArray.push(input[i])
    }
    if (input[i] === 'u') {
        resultArray.push(input[i])
    }
    for (j = 0; j < vowels.length; j++) {
        // console.log('comparison')
        // console.log(`input=${input[i]} - vowel=${vowels[j]}`)
         // console.log(j);
        //console.log('--------------')
        if (input[i] === vowels[j]) {
            // console.log('!!!MATCH')
            // console.log(`input=${input[i]} - // vowels=${vowels[j]}`)
            // console.log(`----------------`)
        resultArray.push(input[i])
        }
    }
}
// console.log(resultArray)



function translateToWhaleTalk() {
    console.log(`Sentence to translate: ${input}`)
    const resultString = resultArray.join("")
    console.log(`Translation completed, your sentence is: ${resultString.toUpperCase()}`)
}

translateToWhaleTalk()
