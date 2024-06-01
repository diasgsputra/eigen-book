function wordFrequency(INPUT, QUERY) {
    return QUERY.map(q => INPUT.filter(word => word === q).length);
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

console.log(wordFrequency(INPUT, QUERY)); // Output: [1, 0, 2]
