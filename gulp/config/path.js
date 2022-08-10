import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build:{
        js:`${buildFolder}/js/`,
        html:`${buildFolder}/`,
        files: `${buildFolder}/files/`,
        css: `${buildFolder}/css/`,
        images: `${buildFolder}/assets/`,
    },
    src:{
        html:`${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        scss: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/js/app.js`,
        images:`${srcFolder}/assets/**/*.{jpg,jpeg,png,gif}`,
        svg:`${srcFolder}/assets/**/*.svg`,
    },
    watch:{
        html:`${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        images:`${srcFolder}/assets/**/*.{jpg,jpeg,png,gif,svg,ico}`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp:''
}