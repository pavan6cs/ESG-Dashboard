const toTitleCase = (str) => {
    return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

export const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

export default toTitleCase;
