module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-mocha');

    grunt.initConfig({
        uglify: {
            dist: {
                files: {
                    'dist/wallet-address-validator.min.js': [
                        'node_modules/jssha/src/sha256.js',
                        'src/base58.js',
                        'src/crypto_utils.js',
                        'src/currencies.js',
                        'src/wallet_address_validator.js'
                    ]
                }
            }
        },
        // running tests in node
        simplemocha: {
            options: {
                timeout: 3000,
                ignoreLeaks: false,
                ui: 'bdd',
                reporter: 'spec'
            },
            all: { src: ['test/**/*.js'] }
        },
        // running tests in browser
        mocha: {
            all: {
                src: ['test/runner.html'],
            },
            options: {
                run: true
            }
        }
    });

    grunt.registerTask('default', ['simplemocha', 'uglify', 'mocha']);
};