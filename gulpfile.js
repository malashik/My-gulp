const gulp = require('gulp');
const pug = require('gulp-pug');
const del = require('del');
const notify = require('gulp-notify');
// const imagemin = require('gulp-imagemin');
// const cache = require('gulp-cache');
const browserSync = require('browser-sync').create();

const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');


const paths = {
	root: './build',
	templates: {
		pages: 'src/templates/**/*.pug',
		dest: 'build/pages'
	},
	styles: {
		src: 'src/styles/common/menu.scss',
		dest: 'build/assets/styles/common/'
	},
	images: {
		src: 'src/images/**/*.*',
		dest: 'build/assets/images/'
	}
	scripts: {
		src: 'src/js/**/*.js',
		dest: 'build/assets/js/'
	}
}


//очистка +
gulp.task('clean', function() {
	return del(paths.root);
})

//webpack +
gulp.task('webpack', function() {
	return gulp.src(paths.scripts.src)
		.pipe(gulpWebpack(webpackConfig,webpack))
		.pipe(gulp.dest(paths.scripts.dest));
})


//pug + 
gulp.task('templates', function() {
	return gulp.src(paths.templates.pages)
		.pipe(pug({ pretty: true }))
		.pipe(gulp.dest(paths.root));
})

//css +
gulp.task('styles', function(){
	return gulp.src(paths.styles.src)
		// .pipe(wait(600))
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(sourcemaps.write())
		.on('error', notify.onError())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(paths.styles.dest))
})

// перенос fonts +
gulp.task('fonts', function() {
	return gulp.src('src/fonts/**/*.*')
		   .pipe(gulp.dest('build/assets/fonts/'))
});

// js
gulp.task('js', function() {
	return gulp.src('src/js/**/*.js')
		   .pipe(gulp.dest('build/assets/js/'))
});

//кеширование и сжатие картинок +
gulp.task('images', function(){
	return gulp.src(paths.images.src)
		.pipe(gulp.dest(paths.images.dest));    		
});


gulp.task('watch', function(){
    gulp.watch("src/templates/**/*.*", gulp.series('templates'));
    // gulp.watch(paths.styles.src, ['styles']);
    gulp.watch("src/styles/**/*.scss", gulp.series('styles'));
    gulp.watch("src/images/**/*.*", gulp.series('images'));
    gulp.watch("src/fonts/**/*.*", gulp.series('fonts'));
    gulp.watch("src/js/**/*.*", gulp.series('js'));
})

// следим за build и релоадим браузер  
gulp.task('server', function(){     
	// function server() {
		browserSync.init({
			server: paths.root
			});
		browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
	})
	
// Для работы    
gulp.task('default', gulp.series(
	gulp.parallel('styles','templates','images','fonts','js'),
	gulp.parallel('watch','server')
));
// сборка на продакшн
gulp.task('build', gulp.series(
	'clean',
	gulp.parallel('styles','templates','images','fonts','js')
));								