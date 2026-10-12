/* Comportamento do manual: o mesmo do Manual do Head Turbo (copiar, ver o comando inteiro, abas Mac/Windows,
   menu do celular, tema claro/escuro), sem a ficha do convite, que o Squad Turbo não tem. */
(function(){
  "use strict";
  var $ = function(s,r){return (r||document).querySelector(s)};
  var $$ = function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};

  /* ---------- copiar */
  var avisoT;
  function avisar(msg){ var a = $("#avisos"); a.textContent = msg; a.classList.add("ver"); clearTimeout(avisoT); avisoT = setTimeout(function(){ a.classList.remove("ver"); }, 2600); }
  function copiaVelha(texto){
    var ta = document.createElement("textarea");
    ta.value = texto; ta.setAttribute("readonly",""); ta.setAttribute("aria-hidden","true");
    ta.style.cssText = "position:fixed;top:0;left:-9999px;opacity:0;font-size:16px";
    document.body.appendChild(ta); ta.focus(); ta.select(); ta.setSelectionRange(0, texto.length);
    var ok = false; try { ok = document.execCommand("copy"); } catch(e) { ok = false; }
    document.body.removeChild(ta); return ok;
  }
  function copiar(texto){
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(texto).then(function(){ return true; }, function(){ return copiaVelha(texto); });
    }
    return Promise.resolve(copiaVelha(texto));
  }
  function selecionar(el){ try { var r = document.createRange(); r.selectNodeContents(el); var s = getSelection(); s.removeAllRanges(); s.addRange(r); } catch(e){} }
  function textoFonte(bloco){ return $("template.cmd-fonte", bloco).content.textContent; }

  $$(".copiar").forEach(function(btn){
    btn.addEventListener("click", function(){
      var bloco = document.getElementById(btn.getAttribute("data-alvo"));
      copiar(textoFonte(bloco)).then(function(ok){
        if (ok) {
          btn.classList.add("ok");
          avisar(bloco.hasAttribute("data-inteiro") ? "Mensagem copiada inteira. Cole no Claude." : "Comando copiado. Cole e aperte Enter.");
          setTimeout(function(){ btn.classList.remove("ok"); }, 2200);
        } else {
          selecionar($(".cmd-texto code", bloco)); avisar("Não consegui copiar sozinho. O texto ficou selecionado: copie pelo teclado.");
        }
      });
    });
  });

  $$(".ver-tudo").forEach(function(b){
    b.addEventListener("click", function(){
      var bloco = b.closest(".cmd"), aberto = bloco.classList.toggle("aberto");
      b.setAttribute("aria-expanded", aberto ? "true" : "false");
      b.textContent = aberto ? "Recolher" : "Ver inteiro";
    });
  });

  /* ---------- abas (Mac / Windows), com #mac e #windows no endereço */
  var abas = { mac: [$("#aba-mac"), $("#painel-mac")], windows: [$("#aba-win"), $("#painel-win")] };
  function abrir(qual, foco, marcar){
    Object.keys(abas).forEach(function(k){
      var on = k === qual; abas[k][0].setAttribute("aria-selected", on ? "true" : "false");
      abas[k][0].tabIndex = on ? 0 : -1; abas[k][1].hidden = !on;
    });
    if (foco) abas[qual][0].focus();
    if (marcar) { try { history.replaceState(null, "", "#" + qual); } catch(e) {} }
  }
  abas.mac[0].addEventListener("click", function(){ abrir("mac", false, true); });
  abas.windows[0].addEventListener("click", function(){ abrir("windows", false, true); });
  [abas.mac[0], abas.windows[0]].forEach(function(b){
    b.addEventListener("keydown", function(ev){
      if (ev.key === "ArrowRight" || ev.key === "ArrowLeft") { ev.preventDefault(); abrir(b.id === "aba-mac" ? "windows" : "mac", true, true); }
    });
  });
  var h = (location.hash || "").replace("#","").toLowerCase();
  var ehWin = /win/i.test((navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || navigator.userAgent);
  abrir(h === "windows" || h === "win" ? "windows" : h === "mac" ? "mac" : (ehWin ? "windows" : "mac"), false, false);
  window.htAbrir = abrir;
})();
(function(){
  var cel=document.querySelector(".menu-cel");
  document.querySelectorAll(".menu-cel a").forEach(function(a){ a.addEventListener("click",function(){ cel.open=false; }); });
  function ir(){
    var h=(location.hash||"").slice(1);
    if(h==="menu" && cel && getComputedStyle(cel).display!=="none"){ cel.open=true; return; }
    if(!h || !window.htAbrir) return;
    var alvo=document.getElementById(h), qual=null;
    if(h==="mac") qual="mac"; else if(h==="windows"||h==="win") qual="windows";
    else if(alvo && alvo.closest){ var p=alvo.closest(".painel"); if(p) qual=(p.id==="painel-win")?"windows":"mac"; }
    if(qual){ window.htAbrir(qual,false,false); var ab=document.getElementById("b1"); if(h==="mac"||h==="windows"||h==="win") alvo=ab; }
    if(alvo) setTimeout(function(){ alvo.scrollIntoView(); },0);
  }
  window.addEventListener("hashchange",ir); ir();
})();
(function(){
  var b=document.getElementById("tema-bt"), r=document.documentElement;
  var nomes={"":"automático",light:"claro",dark:"escuro"};
  function mostra(){ b.textContent="Tema: "+nomes[r.getAttribute("data-theme")||""]; }
  b.addEventListener("click",function(){
    var a=r.getAttribute("data-theme")||"", n=a===""?"light":a==="light"?"dark":"";
    if(n) r.setAttribute("data-theme",n); else r.removeAttribute("data-theme");
    try{ if(n) localStorage.setItem("ht-tema",n); else localStorage.removeItem("ht-tema"); }catch(e){}
    mostra();
  });
  mostra();
})();
