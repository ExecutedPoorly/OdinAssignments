const palindromes = function (PalindromeCheck) {
    const NewString = PalindromeCheck.toLowerCase().replace(/[^a-z]/g, "");
    return NewString.split("").reverse().join("") == NewString;
};

// Do not edit below this line
module.exports = palindromes;
