const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
await p.goto('file://'+process.cwd()+'/reel.html');await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(800);
const mode=process.argv[2];
if(mode==='prev'){for(const t of [1.5,4,12]){await p.evaluate(t=>render(t),t);await p.screenshot({path:`prev_${t}.png`});}}
else{const fps=30,T=14;for(let i=0;i<fps*T;i++){await p.evaluate(t=>render(t),i/fps);await p.screenshot({path:`frames/f${String(i).padStart(4,'0')}.png`});}}
await b.close();})();
