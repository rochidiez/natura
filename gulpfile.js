var gulp = require('gulp');
var zetan = require('zetan');

zetan.debug(true);

gulp.task('default',function(){
	zetan.gulp.browserify({ 
		watch:true,
		src:'./src/index.js',
		cb:function(bundle){
			bundle.pipe(gulp.dest('./js/dist'))
		}
	})
});

