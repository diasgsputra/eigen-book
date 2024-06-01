function reverseAlphabet(str) {
    let letters = str.match(/[a-zA-Z]/g).reverse().join('');
    let digits = str.match(/\d+/g).join('');
    return letters + digits;
}

console.log(reverseAlphabet("NEGIE1")); // Output: "EIGEN1"