import {readFileSync,writeFileSync} from 'node:fs';
const data=JSON.parse(readFileSync('dist/data.json','utf8'));
const html=readFileSync('shell.html','utf8').replace('__CSS__',readFileSync('style.css','utf8')).replace('__DATA__',JSON.stringify(data).replaceAll('<','\\u003c')).replace('__JS__',readFileSync('app.js','utf8'));
writeFileSync('dist/index.html',html);console.log('Built dist/index.html');
