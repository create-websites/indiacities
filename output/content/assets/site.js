
(function(){
  const pages = [
    {title:"Lohri Festival", url:"/lohri-festival/"},
    {title:"Lohri Date", url:"/lohri/date/"},
    {title:"Lohri Date 2026", url:"/lohri/date/2026/"},
    {title:"Lohri Wishes", url:"/lohri/wishes/"},
    {title:"Lohri Wishes in English", url:"/lohri/wishes/english/"},
    {title:"Lohri Wishes in Punjabi", url:"/lohri/wishes/punjabi/"},
    {title:"Lohri Wishes in Hindi", url:"/lohri/wishes/hindi/"},
    {title:"Lohri WhatsApp Status", url:"/lohri/whatsapp-status/"},
    {title:"Lohri Quotes", url:"/lohri/quotes/"},
    {title:"Lohri Rituals", url:"/lohri/rituals/"},
    {title:"Lohri Puja Vidhi", url:"/lohri/puja-vidhi/"},
    {title:"Lohri Bonfire Significance", url:"/lohri/bonfire-significance/"},
    {title:"Lohri Food & Prasad", url:"/lohri/food/"},
    {title:"Lohri Food Items", url:"/lohri/food-items/"},
    {title:"Lohri Prasad", url:"/lohri/prasad/"},
    {title:"Til-Gud Recipe", url:"/lohri/til-gud-recipe/"},
    {title:"Rewri & Gajak Recipe", url:"/lohri/rewri-gajak/"},
    {title:"Lohri Essay", url:"/lohri/essay/"},
    {title:"Lohri Essay 10 Lines", url:"/lohri/essay/10-lines/"},
    {title:"Lohri Speech", url:"/lohri/speech/"}
  ];

  const input = document.querySelector('[data-site-search]');
  const results = document.querySelector('[data-site-results]');
  if(input && results){
    const render = (items) => {
      results.innerHTML = items.length ? items.map(p =>
        `<li><a href="${p.url}">${p.title}</a></li>`
      ).join('') : `<li class="copyhint">No matches. Try “wishes”, “date”, “rituals”, “food”.</li>`;
    };
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if(!q){ results.innerHTML = ""; return; }
      const hits = pages.filter(p => p.title.toLowerCase().includes(q) || p.url.toLowerCase().includes(q)).slice(0,8);
      render(hits);
    });
  }

  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-copy]');
    if(!btn) return;
    const sel = btn.getAttribute('data-copy');
    const el = document.querySelector(sel);
    if(!el) return;
    const txt = el.innerText.trim();
    try{
      await navigator.clipboard.writeText(txt);
      btn.innerText = "Copied";
      setTimeout(()=> btn.innerText="Copy", 1200);
    }catch(err){
      alert("Copy failed. Please select and copy manually.");
    }
  });
})();
