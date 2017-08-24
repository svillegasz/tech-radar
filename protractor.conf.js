exports.config = {
    specs: [
        'tests/**/*.js',
    ],
    capabilities: {
        browserName: 'chrome',

        chromeOptions: {
            args: ['--headless'],
        }
    }
}