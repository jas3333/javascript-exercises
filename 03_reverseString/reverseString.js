const reverseString = function (string) {
    let new_string = '';
    let string_length = string.length - 1;

    for (string_length; string_length >= 0; string_length--) {
        new_string += string[string_length];
    }

    return new_string;
};

// Do not edit below this line
module.exports = reverseString;
