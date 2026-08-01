const SKILLS = [
  {name:'Interior Design', cat:'Industry Knowledge', lvl:88},
  {name:'Artificial Intelligence (AI)', cat:'Industry Knowledge', lvl:82},
  {name:'Machine Learning', cat:'Industry Knowledge', lvl:75},
  {name:'Corona Renderer', cat:'Tools & Technologies', lvl:85},
  {name:'Autodesk 3ds Max', cat:'Tools & Technologies', lvl:87},
  {name:'GitHub', cat:'Tools & Technologies', lvl:80},
  {name:'Python (Programming Language)', cat:'Tools & Technologies', lvl:90},w wwbxdg h
  {name:'Application Programming Interfaces (API)', cat:'Tools & Technologies', lvl:74},
  {name:'AI Agents', cat:'Tools & Technologies', lvl:78},
  {name:'Prompt Engineering', cat:'Tools & Technologies', lvl:83},
  {name:'Generative AI for Web Developers', cat:'Tools & Technologies', lvl:76},
  {name:'Web Design', cat:'Other Skills', lvl:79},
  {name:'Web Development', cat:'Other Skills', lvl:77},
  {name:'Problem Solving', cat:'Interpersonal Skills', lvl:92},
];

function buildSkillList(){
  const wrap = document.getElementById('skillList');
  wrap.innerHTML = SKILLS.map(s=>`
    <div class="skill-item reveal" data-cat="${s.cat}">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span>${s.name}</span>
      </div>
      <div class="bar"><span data-target="${s.lvl}%"></span></div>
    </div>
  `).join('');
  initReveals();
  animateSkillBars();
}
buildSkillList();

function buildSkillRing(){
  const ring = document.getElementById('skillRing');
  const n = SKILLS.length;
  // radius sized so the chord between adjacent chips exceeds chip width (no overlap)
  const radius = window.innerWidth < 700 ? 300 : 420;
  ring.innerHTML = SKILLS.map((s,i)=>{
    const angle = (360/n)*i;
    return `<div class="skill-chip" style="transform:rotateY(${angle}deg) translateZ(${radius}px);">${s.name}<small>${s.cat.split(' ')[0]}</small></div>`;
  }).join('');
}
buildSkillRing();
window.addEventListener('resize', ()=>{
  clearTimeout(window.__ringResizeT);
  window.__ringResizeT = setTimeout(buildSkillRing, 200);
});

document.querySelectorAll('[data-cat]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('[data-cat]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const c = btn.dataset.cat;
    document.querySelectorAll('.skill-item').forEach(item=>{
      item.classList.toggle('hidden-cat', !(c==='all' || item.dataset.cat===c));
    });
  });
});
