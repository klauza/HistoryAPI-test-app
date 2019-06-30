## About
This is a project created for learning purposes. The main idea of this website was to build it with **Module State Pattern** (SPA) and **History API**, but later on I decided to also store in here some of my minor ideas/projects. 
<hr/>

## Dependencies
| Name  | version |
| ------------- | ------------- |
| **gulp** | [![npm version](https://badge.fury.io/js/gulp.svg)](https://badge.fury.io/js/gulp)  |
| **gulp-sass** | [![npm version](https://badge.fury.io/js/gulp-sass.svg)](https://badge.fury.io/js/gulp-sass)  |
| **gulp-autoprefixer** | [![npm version](https://badge.fury.io/js/gulp-autoprefixer.svg)](https://badge.fury.io/js/gulp-autoprefixer)  |
| **browser-sync** | [![npm version](https://badge.fury.io/js/browser-sync.svg)](https://badge.fury.io/js/browser-sync)  |
<hr/>

## Installation
- `npm install` - gets all the necessary packages for project

- `gulp watch` - starts continuous Sass compiler in background. Also provides **local server** and **browser sync**
<hr/>

## Deployment
There is no build script in this project. To deploy, simply copy paste.
<hr/>
## Issues
The back/forward button works correct and website is moving onto indicated direction, but when the page is being refreshed by the user, it firstly goes to previous created empty sub page which is redirecting to the ./home url.