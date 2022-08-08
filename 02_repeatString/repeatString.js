const repeatString = function (string, repeats) {

    let updated_string = '';

    if (repeats < 0)
        return 'ERROR';

    for (let i = 0; i < repeats; i++) {
        updated_string += string;
    }

    return updated_string;
};

// Do not edit below this line
module.exports = repeatString;
