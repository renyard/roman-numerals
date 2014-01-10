module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		qunit: {
			all: ['test/*.html']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-qunit');

	grunt.registerTask('default', ['qunit']);
};
