var gulp = require('gulp');
var zetan = require('zetan');
var gls = require('gulp-live-server');

zetan.debug(true);

gulp.task('js',function(){
	zetan.gulp.browserify({ 
		watch:true,
		src:'./src/index.js',
		cb:function(bundle){
			bundle.pipe(gulp.dest('./js/dist'))
		}
	})
});


gulp.task('serve', function() {
    //1. serve with default settings 
    var server = gls.static('./', 8888);
    server.start();
 
    //use gulp.watch to trigger server actions(notify, start or stop) 
    gulp.watch(['js/**/*.js','**/*.html'], function () {
        server.notify.apply(server, arguments);
    });
});

gulp.task('default',['js','serve']);