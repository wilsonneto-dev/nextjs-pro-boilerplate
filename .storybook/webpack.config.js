const {resolve} = require("path");

module.exports = ({ config }) => {
    config.resolve.alias['@'] = resolve(__dirname, '../src');
    return config;
};