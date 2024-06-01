function longest(sentence) {
    let words = sentence.split(' ');
    let longestWord = '';

    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return `${longestWord}: ${longestWord.length} character`;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(longest(sentence)); // Output: "mengerjakan: 11 character"
