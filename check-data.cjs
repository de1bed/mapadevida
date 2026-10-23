const fs=require('fs'),vm=require('vm'),assert=require('assert');
const app=fs.readFileSync('app.js','utf8'),data=JSON.parse(fs.readFileSync('dist/data.json','utf8'));
const start=app.indexOf('function validate('),end=app.indexOf('\nfunction save(',start),ctx={};
vm.createContext(ctx);vm.runInContext(app.slice(start,end),ctx);ctx.validate(data);assert.deepStrictEqual(JSON.parse(JSON.stringify(data)),data);
let bad=structuredClone(data);bad.links[0].target='missing';assert.throws(()=>ctx.validate(bad));bad=structuredClone(data);bad.nodes[0].id='unsafe"id';assert.throws(()=>ctx.validate(bad));bad=structuredClone(data);bad.projects[0].tasks[0].done='yes';assert.throws(()=>ctx.validate(bad));
const ids=new Set(data.nodes.map(n=>n.id));assert.equal(ids.size,data.nodes.length);for(const p of data.projects){assert(data.prompts.some(x=>x.project===p.id));assert(p.tasks.length>0)}
for(const x of ['city','nexa','prepiq','migracion','tempaltes','essilor-sap','coaching','ventas-web','canales','red-cine','cine-moon','agentes-mexico','chick-moon','contenido','newsletter','minilibros','gta','mexpaths-plan'])assert(ids.has(x));
console.log(JSON.stringify({valid:true,roundtrip:true,invalidImportsRejected:3,nodes:data.nodes.length,links:data.links.length,projects:data.projects.length,prompts:data.prompts.length,contacts:data.contacts.length,tasks:data.projects.reduce((n,p)=>n+p.tasks.length,0)}));
