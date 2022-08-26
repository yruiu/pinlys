const {src} = require('gulp');
const {dest}=require('gulp')
const sass = require('gulp-sass')(require('sass'));
const autoprefixer=require('gulp-autoprefixer')


function scss(){
    return src('./style.scss')
        .pipe(sass()).
    pipe(autoprefixer({
            cascade: false
    }))
    
        .pipe(dest('./'))
}
exports.scss=scss