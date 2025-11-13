/* ---------------------------------
   你的計算機原本的 JS 放這裡
---------------------------------- */
// ...（貼你的 script.js）...



/* ============================================================
   ⭐ 軌跡效果 A：漸隱光點（預設啟用）
=========================================================== */
window.addEventListener('mousemove', e=>{
  const d=document.createElement('div');
  d.className='trail-dot';
  d.style.left=e.clientX+'px';
  d.style.top =e.clientY+'px';
  document.body.appendChild(d);
  setTimeout(()=>d.remove(), 600);
});



/* ============================================================
   ⭐ 軌跡效果 B：柔順光線（開啟方法：移除註解）
=========================================================== */
/*
const cvs=document.createElement('canvas');
cvs.className='mouse-line';
document.body.appendChild(cvs);
const ctx=cvs.getContext('2d');
let w,h; const pts=[]; const MAX=24;

function resize(){ w=cvs.width=innerWidth; h=cvs.height=innerHeight; }
addEventListener('resize',resize); resize();

addEventListener('mousemove', e=>{
  pts.push({x:e.clientX,y:e.clientY});
  if(pts.length>MAX) pts.shift();
});

function draw(){
  ctx.clearRect(0,0,w,h);
  if(pts.length>1){
    for(let i=1;i<pts.length;i++){
      const p0=pts[i-1], p1=pts[i];
      const t=i/pts.length;
      ctx.strokeStyle=`rgba(0,255,255,${t*0.7})`;
      ctx.lineWidth = 8*t;
      ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(p0.x,p0.y); ctx.lineTo(p1.x,p1.y); ctx.stroke();
    }
  }
  requestAnimationFrame(draw);
}
draw();
*/


/* ============================================================
   ⭐ 軌跡效果 C：火花粒子（開啟方法：移除註解）
=========================================================== */
/*
const c=document.createElement('canvas');
c.className='spark';
document.body.appendChild(c);
const g=c.getContext('2d');
let W,H; const P=[];
function fit(){ W=c.width=innerWidth; H=c.height=innerHeight; }
addEventListener('resize',fit); fit();

function emit(x,y, n=16){
  for(let i=0;i<n;i++){
    const a=Math.random()*Math.PI*2, sp=1+Math.random()*3;
    P.push({x,y, vx:Math.cos(a)*sp, vy:Math.sin(a)*sp-0.5, life:1});
  }
}
addEventListener('mousemove', e=>emit(e.clientX,e.clientY,6));
addEventListener('click',    e=>emit(e.clientX,e.clientY,20));

function tick(){
  g.clearRect(0,0,W,H);
  for(let i=P.length-1;i>=0;i--){
    const p=P[i];
    p.x+=p.vx; p.y+=p.vy; p.vy+=0.03; p.life-=0.02;
    if(p.life<=0){ P.splice(i,1); continue; }
    g.fillStyle=`rgba(0,255,255,${p.life})`;
    g.shadowColor='rgba(0,255,255,.8)'; g.shadowBlur=12;
    g.beginPath(); g.arc(p.x,p.y,2.5,0,Math.PI*2); g.fill();
    g.shadowBlur=0;
  }
  requestAnimationFrame(tick);
}
tick();
*/


/* ============================================================
   ⭐ 軌跡效果 D：彗星跟隨（開啟方法：移除註解）
=========================================================== */
/*
const cv=document.createElement('canvas');
cv.className='comet';
document.body.appendChild(cv);
const cctx=cv.getContext('2d');
let CW,CH;

function fit2(){ CW=cv.width=innerWidth; CH=cv.height=innerHeight; }
addEventListener('resize',fit2); fit2();

let mx=innerWidth/2, my=innerHeight/2;
let x=mx, y=my;

addEventListener('mousemove', e=>{ mx=e.clientX; my=e.clientY; });

function loop2(){
  cctx.fillStyle='rgba(0,0,0,0.08)';
  cctx.fillRect(0,0,CW,CH);

  x += (mx - x) * 0.15;
  y += (my - y) * 0.15;

  const grd=cctx.createRadialGradient(x,y,0,x,y,30);
  grd.addColorStop(0,'rgba(0,255,255,0.9)');
  grd.addColorStop(1,'rgba(0,255,255,0)');
  cctx.fillStyle=grd; 
  cctx.beginPath(); cctx.arc(x,y,30,0,Math.PI*2); cctx.fill();

  cctx.shadowColor='rgba(0,255,255,.9
