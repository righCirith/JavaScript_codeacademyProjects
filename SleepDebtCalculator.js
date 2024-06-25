const getSleepHours = function(day) {
    day = day.toLowerCase()

    if(day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 8;
    } else if (day === 'wednesday') {
        return 8;
    } else if (day === 'thursday') {
        return 8;
    } else if (day === 'friday') {
        return 8;
    } else if (day === 'saturday') {
        return 8;
    } else if (day === 'sunday') {
        return 8;
    } else {
        console.log('Error');
    };
};

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

console.log(`Actual sleep hours are: ${getActualSleepHours()}`);


const getIdealSleepHours = idealHours => idealHours * 7;

console.log(`Ideal sleep hours are: ${getIdealSleepHours(8)}`);


const calculateSleepDebt = function() {
    const actualSleep = getActualSleepHours();
    const idealSleep = getIdealSleepHours(8);

    if (actualSleep === idealSleep) {
        console.log('User got the perfect amount of sleep');
    } else if (actualSleep > idealSleep) {
        console.log('User got more sleep than needed');
    } else if (actualSleep < idealSleep) {
        console.log('User need rest');
    } else {
        console.log('error');
    }
};

calculateSleepDebt();
