(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();function N(){const t=document.querySelector("main");t.replaceChildren();const a=document.createElement("div");a.className="pDiv2",t.className="menuButtonDiv";const c=document.createElement("p");c.innerHTML="Phone: (123)456-7890 <br> Email: abc123@gmail.com";const i=document.createElement("h2");i.innerHTML="Contact Us";const e=document.createElement("div");e.className="pContainer",e.appendChild(i),e.appendChild(c),a.appendChild(e),t.appendChild(a);const n=document.createElement("div");n.className="menuDiv2";const o=document.createElement("div");t.appendChild(n),n.appendChild(o)}function D(){const t=document.querySelector("main");t.replaceChildren();const a=document.createElement("div");a.className="pDiv2",t.className="menuButtonDiv";let c=new Image;c.className="menuImg",c.src="./public/istockphoto-1388417457-612x612.jpg",c.alt="Image of pasta.";const i=document.createElement("p");i.innerHTML="Spaghetti topped with your choice of homemade marinara (V) or meat sauce prepared fresh daily.";const e=document.createElement("h2");e.innerHTML="Spaghetti";const n=document.createElement("div");n.className="pContainer",n.appendChild(e),n.appendChild(i),a.appendChild(c),a.appendChild(n),t.appendChild(a);const o=document.createElement("div");o.className="menuDiv2";const h=document.createElement("div");let l=new Image;l.className="menuImg2",l.src="./public/istockphoto-1325172440-612x612.jpg",l.alt="Image of pasta.";const v=document.createElement("p");v.innerHTML="Spaghetti topped with your choice of homemade marinara (V) or meat sauce prepared fresh daily.";const b=document.createElement("h2");b.innerHTML="Spaghetti",t.appendChild(o),h.appendChild(b),h.appendChild(v),o.appendChild(h),o.appendChild(l)}const M=document.querySelector("#app"),d=document.createElement("div"),s=document.createElement("header"),L=document.createElement("h1"),p=document.createElement("button"),m=document.createElement("button"),r=document.createElement("button");L.innerHTML="Restaurant";M.appendChild(d);d.appendChild(L);d.appendChild(s);const C=document.createElement("main"),y=document.createElement("h2");y.innerHTML="Best pasta in town. <br>Since 1992. ";C.appendChild(y);d.appendChild(C);let f=new Image;f.src="./public/pasta-kitchen_FFGSEEZ3OU.jpg";f.alt="Image of pasta.";C.appendChild(f);p.className="button-64";const u=document.createElement("span");u.className="text";u.innerHTML="Home";u.id="home";p.appendChild(u);s.appendChild(p);m.className="button-64";m.id="menu";const E=document.createElement("span");E.innerHTML="Menu";E.className="text";m.appendChild(E);s.appendChild(m);r.className="button-64";r.id="contact";const g=document.createElement("span");g.innerHTML="Contact";g.className="text";r.appendChild(g);s.appendChild(r);p.addEventListener("click",H);m.addEventListener("click",D);r.addEventListener("click",N);function H(){const t=document.querySelector("main");t.replaceChildren();const a=document.createElement("h2");a.innerHTML="Best pasta in town. <br>Since 1992. ",t.appendChild(a),d.appendChild(t);let c=new Image;c.src="./public/pasta-kitchen_FFGSEEZ3OU.jpg",c.alt="Image of pasta.",t.appendChild(c)}