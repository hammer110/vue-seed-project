var gulp = require('gulp')
var sftp = require('gulp-sftp')
gulp.task('default', function () {
  return gulp.src('dist/**/*')
    .pipe(sftp({
      host: '.1.1.1.2',
      user: 'root',
      pass: 'root',
      remotePath: '/app/webroot/dingdang/'
    }))
})
