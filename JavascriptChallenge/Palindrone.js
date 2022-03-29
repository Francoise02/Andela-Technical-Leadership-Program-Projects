

function checkPalindrome(string) {

    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

    
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}


const string1 = ('madam');
const string2 = ('Mukantwari');

const value1 = checkPalindrome(string1);
const value2 = checkPalindrome(string2);

console.log(value1);
console.log(value2)