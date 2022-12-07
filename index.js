import data from './input.json' assert { type: 'json' };

function isUnique(input) {
    const set = new Set(input);
    return set.size === input.length;
}

function iterateThroughInput(input, startPos, uniqueCount) {
    for (let i = startPos; i < input.length; i++) {
        if (isUnique(input.substring(i - uniqueCount, i))) {
            return i;
        }
    }
    throw new Error(`No sequential unique characters of length ${uniqueCount} exist`);
}

const packetStart = iterateThroughInput(data.input, 4, 4);
console.log(iterateThroughInput(data.input, packetStart, 14));