// Project Magic Eight Ball (Module = Conditionals)

let userName = 'ooes';
userName ? console.log(`Hello ${userName}!`) : (console.log('Hello'));

let userQuestion = "is the sky blue?";
console.log(`${userName} asks, ${userQuestion}`);

randomNumber = Math.floor(Math.random() * 8);
//console.log(`The random number is: ${randomNumber}`);

eightBall = '';

switch (randomNumber) {
    case 0:
        eightBall = 'Sings point yes';
    case 1:
        eightBall = 'It is certain';
        break;
    case 2:
        eightBall = 'It is decidely so';
        break;
    case 3:
        eightBall = 'Reply hazy, try again';
        break;
    case 4:
        eightBall = 'Can\'t predict now';
        break;
    case 5:
        eightBall = 'Do not count on it';
        break;
    case 6:
        eightBall = 'My source says not';
        break;
    case 7:
        eightBall = 'Outlook not so good';
        break;
    default:
}

console.log(`The Magic Eight Ball\'s answer is: ${eightBall}`);

