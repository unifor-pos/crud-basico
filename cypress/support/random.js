const generateByPattern = (length, charset) => {
    return Array.from({ length }, () =>
        charset.charAt(Math.floor(Math.random() * charset.length))
    ).join('');
};

const generateCredentials = () => {
    const name = generateByPattern(1, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
        + generateByPattern(5, 'abcdefghijklmnopqrstuvwxyz');

    const email = name
        + "@gmail.com";

    const password = generateByPattern(12, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*');

    return { name, password, email };
};

module.exports = { generateCredentials };
