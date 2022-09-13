module.exports = {
    'process.env.BACKEND_URL':
        process.env.NODE_ENV === 'production'
            ? 'https://jiwooincludejeong.github.io/about-me'
            : '',
};
