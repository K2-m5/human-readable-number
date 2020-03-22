module.exports = function toReadable(number) {

    const nums = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
    };

    let strNums = number + '';
    let newArray = [];

    if (strNums.length === 3) {
        newArray.push(nums[strNums[0]]);
        newArray.push(nums['100']);

        if (number % 100) {
            number = number % 100;
            strNums = number + '';
        }
    }

    if (strNums.length === 2 && number > 20) {
        newArray.push(nums[strNums[0] + '0']);

        if (number % 10) {
            newArray.push(nums[strNums[1]]);
        }
    }

    if (strNums.length === 1 || number <= 20) {
        newArray.push(nums[number]);
    }

    return newArray.join(' ');
}