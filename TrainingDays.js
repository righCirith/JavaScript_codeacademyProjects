const getRandEvent = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'Marathon';
    } else if (randomNumber === 1) {
        return 'Triathlon';
    } else if (randomNumber === 2) {
        return 'Pentathlon';
    }
};


const getTrainingDays = event => {
    let days;

    if (event === 'Marathon') {
        days = 50;
    } else if (event === 'Triathlon') {
        days = 100;
    } else if (event === 'Pentathlon') {
        days = 200;
    }

    return days;
};

// the scope of 'name' is too tight
const name = 'Nala';

const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
};


const event = getRandEvent();
const days = getTrainingDays(event);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren'

logEvent(name, event);
logTime(name, days);

console.log('------------------------------')

logEvent(name2, event2);
logTime(name2, days2)