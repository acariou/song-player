'use strict';

module.exports = function (grunt) {

    // Charge Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({
        watch:{
            scripts: {
                files: ['**.*']
            }
        },
        connect: {
            dist:{
                options: {
                    base:__dirname,
                    port: 9000,
                    open: true,
                    livereload: 35729,
                    hostname: 'localhost',
                    keepalive: true,
                    middleware: function(connect) {
                        return [
                            connect.static('.tmp'),
                            connect().use('/medias', connect.static('./medias')),
                            connect.static(__dirname)
                        ];
                    }
                }
            }
        }
    });

    grunt.registerTask('serve', function (target) {
        grunt.task.run(['connect','watch']);
    });


    grunt.registerTask('default', ['serve']);
};
