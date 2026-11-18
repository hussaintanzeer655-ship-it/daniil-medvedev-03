(function(){const btn=document.getElementById('themeBtn');const root=document.documentElement;const items=[
  '2008: Pro career start',
  '2013: Breakthrough',
  '2019: Grand Slam final',
  '2021: Consistent top-10',
  '2024: Peak performance'
];
  const ol=document.querySelector('.timeline');
  items.forEach((t)=>{const li=document.createElement('li');li.textContent=t;ol.appendChild(li);});
  const saved=localStorage.getItem('theme'); if(saved==='dark') root.classList.add('dark');
  btn.addEventListener('click',()=>{root.classList.toggle('dark'); const isDark=root.classList.contains('dark'); localStorage.setItem('theme', isDark?'dark':'light'); btn.textContent=isDark?'Light':'Dark';});
})();