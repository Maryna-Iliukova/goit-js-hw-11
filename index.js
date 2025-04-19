import{a as p,S as f,i as l}from"./assets/vendor-Db2TdIkw.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="49742049-be694405c40ea2d5a3f5aa174",g="https://pixabay.com/api/";async function h(r){const a={key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(g,{params:a})}let L=new f(".gallery a",{captionsData:"alt",captionDelay:250});const c=document.querySelector(".gallery"),d=document.querySelector(".loader");function v(r){const a=r.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:i,comments:u,downloads:m})=>`
        <li class="gallery-item">
          <a href="${o}">
            <img src="${s}" class="img" alt="${e}" />
          <ul class="data-list">
      <li class="data-item">
        <p class="data-text">Likes</p>
        <p class="data-value">${t}</p>
      </li>
      <li class="data-item">
        <p class="data-text">Views</p>
        <p class="data-value">${i}</p>
      </li>
      <li class="data-item">
        <p class="data-text">Comments</p>
        <p class="data-value">${u}</p>
      </li>
      <li class="data-item">
        <p class="data-text">Downloads</p>
        <p class="data-value">${m}</p>
      </li>
    </ul>
            </a>

        </li>`).join("");c.insertAdjacentHTML("beforeend",a),L.refresh()}function b(){c.innerHTML=""}function x(){d.classList.remove("hidden")}function S(){d.classList.add("hidden")}const n=document.querySelector(".form");n.addEventListener("submit",async r=>{r.preventDefault();const a=r.target.elements.text.value.trim();if(!a){l.warning({message:"Enter search term!"});return}b(),x();try{const{data:s}=await h(a);s.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!"}):v(s.hits)}catch{l.error({message:"Error fetching images."})}finally{S(),n.reset()}});
//# sourceMappingURL=index.js.map
