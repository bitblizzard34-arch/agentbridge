const panelMeta = {
  overview: ['Overview', 'Monitor your workstations and active agent tasks.'],
  agents: ['Agents', 'Manage provider adapters and agent availability.'],
  sessions: ['Sessions', 'Review active and recent agent sessions.'],
  approvals: ['Approvals', 'Review sensitive actions before agents proceed.'],
  workstations: ['Workstations', 'Manage local execution environments.'],
  settings: ['Settings', 'Configure workspace boundaries and provider status.']
};

document.querySelectorAll('[data-scroll]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector(btn.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelectorAll('.side-link').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.panel;
    document.querySelectorAll('.side-link').forEach(x => x.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`panel-${key}`)?.classList.add('active');
    document.getElementById('panelTitle').textContent = panelMeta[key][0];
    document.getElementById('panelSubtitle').textContent = panelMeta[key][1];
  });
});

const modal = document.getElementById('taskModal');
const openModal = () => { modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); };
const closeModal = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); };

document.getElementById('newTaskBtn')?.addEventListener('click', openModal);
document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));

document.getElementById('createTaskBtn')?.addEventListener('click', () => {
  const task = document.getElementById('taskInput').value.trim();
  if (!task) return;
  const terminal = document.getElementById('terminalBody');
  const now = new Date().toLocaleTimeString([], { hour12: false });
  terminal.insertAdjacentHTML('beforeend', `<div><span class="time">${now}</span> <span class="sys">[task]</span> ${task.replace(/</g,'&lt;')}</div>`);
  terminal.insertAdjacentHTML('beforeend', `<div><span class="time">${now}</span> <span class="agent">[agent]</span> Task queued in prototype UI.</div>`);
  document.getElementById('taskInput').value = '';
  closeModal();
});

document.querySelectorAll('.approve').forEach(btn => btn.addEventListener('click', () => {
  btn.textContent = 'Approved';
  btn.disabled = true;
  btn.style.opacity = '.65';
}));

document.querySelectorAll('.reject').forEach(btn => btn.addEventListener('click', () => {
  btn.textContent = 'Rejected';
  btn.disabled = true;
  btn.style.opacity = '.65';
}));
