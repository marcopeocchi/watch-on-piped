import babel from 'gulp-babel'
import gulp from 'gulp'
import fs from 'fs'

function clean(cb) {
  if (fs.existsSync('./dist')) {
    fs.rmSync('./dist', { recursive: true })
    cb()
  }
  cb()
}

function transpile() {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./dist/'))
}

function build() {
  return gulp
    .src([
      'src/**/*.png',
      'src/**/*.html',
      '!src/config*.json',
      'src/manifest*.json'
    ])
    .pipe(gulp.dest('./dist/'));
}

export default gulp.series(clean, transpile, build)