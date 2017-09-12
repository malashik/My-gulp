const gulp = require('gulp');
const pug = require('gulp-pug');
const del = require('del');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const browserSync = require('browser-sync').create();

const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

const paths = {
	root: './build',
	templates: {
		pages: 'src/templates/pages/*.pug',
		src: 'src/templates/**/*.pug',
		dest: 'build/assets'
	},
	styles: {
		src: 'src/styles/**/*.scss',
		dest: 'build/assets/styles/'
	},
	images: {
		src: 'src/images/**/*.*',
		dest: 'build/assets/images/'
	}
}



//очистка +
gulp.task('clean', function() {
	return del(paths.root);
})


// //pug 
// gulp.task('templates', function() {
// 	return gulp.src(paths.templates.pages)
// 		.pipe(pug({ pretty: true }))
// 		.pipe(gulp.dest(paths.root));
// })

//html +
gulp.task('templates', function() {
	return gulp.src('src/templates/**/*.html')
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
		// pipe(browserSync.stream())
})

// перенос fonts +
gulp.task('fonts', function() {
	return gulp.src('src/fonts/**/*.*')
		   .pipe(gulp.dest('build/assets/fonts/'))
});

//кеширование и сжатие картинок +
gulp.task('images', function(){
	return gulp.src(paths.images.src)
		.pipe(cache(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))) 	
		.pipe(gulp.dest(paths.images.dest));    		
});

// следим за исходниками, папка src
gulp.task('watch', function(){
	gulp.watch('src/templates/pages/*.html', ['html']);
	gulp.watch(paths.styles.src, ['styles']);
	gulp.watch('src/images/**/*.*', ['images']);
})

// //запускаем сервер
// gulp.task('browserSync', ['templates', 'fonts', 'styles', 'images'], function(){
// 	browserSync.init ({
// 		server: paths.root
// 	});
// 	browserSync.watch(paths.root+'**/*.*', browserSync.reload);
// })


// следим за build и релоадим браузер       
function server() {
	browserSync.init({
		server: paths.root
		});
	browserSync.watch(paths.root+'**/*.*', browserSync.reload);
}

// Для работы    
gulp.task('default', gulp.series(
	gulp.parallel('styles','templates','images'),
	gulp.parallel('watch',server)
));
// сборка на продакшн
gulp.task('build', gulp.series(
	'clean',
	gulp.parallel('styles','templates','images')
));								



// // Запускаем сервер
// gulp.task('serve', gulp.series('styles'), function () {
//  browserSync.init({
//  server: "./src" // Базовая директория
//  });
// browserSync.watch('./src/ * */*.*').on('change',
// browserSync.reload); // Отслеживаем изменения и передаем на клиент
// });






