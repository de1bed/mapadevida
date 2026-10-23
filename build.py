from pathlib import Path
import json
p=Path(__file__).parent
d=json.loads((p/'dist/data.json').read_text())
s=(p/'shell.html').read_text().replace('__CSS__',(p/'style.css').read_text()).replace('__DATA__',json.dumps(d,ensure_ascii=False).replace('<','\\u003c')).replace('__JS__',(p/'app.js').read_text())
(p/'dist/index.html').write_text(s)
print('Built standalone HTML:',len(s.encode()),'bytes')
