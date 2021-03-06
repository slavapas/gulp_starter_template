let taskName = 'fonts';

let path = {
  src:  `${$.path.src}/fonts/**/*.{eot,otf,ttf,woff,woff2,svg}`,
  dest: `${$.path.assets}/fonts/`
};

$.watchs.push({
  src: path.src,
  task: taskName
});

module.exports = () => {
	$.gulp.task(taskName, () => {
		return $.gulp.src(path.src)
			.pipe($.gulp.dest(path.dest));
	});
};