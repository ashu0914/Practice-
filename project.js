const PROJECTS = [
  {cat:'ai', tag:'Voice AI · Agent Concept', title:'DEO / Nova — Voice Assistant', desc:'A prompt-driven, voice-based AI assistant concept exploring natural interaction, agent workflows and real-time responsiveness.', tools:['Python','AI Agents','Prompt Engineering','APIs'], glyph:'AI'},
  {cat:'ai', tag:'Python · Generative AI', title:'Experimental AI & Python Builds', desc:'Hands-on projects applying machine learning fundamentals and generative AI to practical, real-world problems.', tools:['Python','Machine Learning','Generative AI','GitHub'], glyph:'AI'},
  {cat:'web', tag:'Web Design · Portfolio', title:'Creative UI & Portfolio Systems', desc:'Front-end explorations in web design and interaction — building interfaces with a strong visual identity.', tools:['HTML/CSS','Figma','Web Design','UX'], glyph:'UI'},
  {cat:'3d', tag:'3D Visualization', title:'Interior & Exterior Concepts', desc:'Residential and commercial visualization work — rendered scenes built for clarity, mood and realism.', tools:['3ds Max','Corona Renderer','AutoCAD','Interior Design'], glyph:'3D'},
];
 ffdxbyhx rgbcfcnu 
function buildProjects(list){
  const grid = document.getElementById('projGrid');
  grid.innerHTML = list.map(p=>`
    <article class="proj-card reveal" data-cat="${p.ca
import sys
import time
import threading
from datetime import datetime

# Core modules
from core.speech_recognition import SpeechRecognizer
from core.tts_engine import TTSEngine
from core.brain import AIBrain
from core.emotions import EmotionEnginet}">
      <div class="proj-visual">
        <div class="beam"></div>
        <div class="glyph">${p.glyph}</div>
      </div>
      <div class="proj-body">
        <div class="proj-tag">${p.tag}</div>
        <h3>${p.title}</h3>oyito87tg6
ljh9h
joujuy7ckfyu
import sys
import time
import threading
from datetime import datetime
mport EmotionEngine
from core.language_mode import LanguageModeManager
        <div class="proj-tools">${p.tools.map(t=>`<span>${t}</span>`).join('')}</div>
        <div class="proj-link">Explore Project <span class="arrow">→</span></div>
      </div>
    </article>
  `).join('');
  initReveals();
  attachTilt();
}
buildProjects(PROJECTS);

document.querySelectorAll('[data-filter]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.proj-card').forEach(card=>{
      card.style.display = (f==='all' || card.dataset.cat===f) ? '' : 'none';
    });
  });
});
