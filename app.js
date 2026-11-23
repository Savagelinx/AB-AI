const form=document.getElementById('chatForm');
const input=document.getElementById('prompt');
const messages=document.getElementById('messages');
const welcome=document.getElementById('welcome');
const notice=document.getElementById('notice');

function addMessage(text,role){
  const el=document.createElement('div');
  el.className='bubble '+role;
  el.textContent=text;
  messages.appendChild(el);
  messages.scrollTop=messages.scrollHeight;
}
function send(text){
  const value=(text||'').trim(); if(!value)return;
  welcome.style.display='none'; notice.style.display='block';
  addMessage(value,'user');
  addMessage("I'm AB AI. The app interface is working, but the AI engine hasn't been connected yet. In the next setup step, we'll connect a free model so I can generate real answers. Your message stays on this device in this starter version.",'assistant');
  input.value=''; input.style.height='auto';
}
form.addEventListener('submit',e=>{e.preventDefault();send(input.value)});
input.addEventListener('input',()=>{input.style.height='auto';input.style.height=Math.min(input.scrollHeight,120)+'px'});
document.querySelectorAll('.suggestion').forEach(b=>b.addEventListener('click',()=>send(b.textContent)));
document.getElementById('clearBtn').addEventListener('click',()=>{messages.replaceChildren();welcome.style.display='block';});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}
