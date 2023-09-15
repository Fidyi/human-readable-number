module.exports = function toReadable(number) {
    const arrZeroNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const arrTenNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arrDecade = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let a = number.toString().split('');
    if (number === 0) {
        return "zero";
    }
    if (a.length === 1) {
        return `${arrZeroNine[number]}`;
    }
    if (a.length === 2 && a[0] === '1') {
        return `${arrTenNineteen[a[1]]}`;
    }
    if (a.length === 2 && a[0] > '1') {
        if (a[1] === '0') {
            return `${arrDecade[a[0]]}`;
        } else {
            return `${arrDecade[a[0]]} ${arrZeroNine[a[1]]}`;
        }
    }
    if (a.length === 3) {
        let result = `${arrZeroNine[a[0]]} hundred`;
        if (a[1] !== '0') {
            if (a[1] === '1') {
                result += ` ${arrTenNineteen[a[2]]}`;
            } else {
                result += ` ${arrDecade[a[1]]}`;
                if (a[2] !== '0') {
                    result += ` ${arrZeroNine[a[2]]}`;
                }
            }
        } else if (a[2] !== '0') {
            result += ` ${arrZeroNine[a[2]]}`;
        }
        return result;
    }
}


  







