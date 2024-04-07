(()=>{"use strict";var s={175:(t,e,s)=>{var i=s(558);const a=function(e){var s=[];for(let t=1;t<=e;t++){var i={name:"Website "+t,logo:"https://via.placeholder.com/50?text=Logo"+t};s.push(i)}return s}(100);window.onload=()=>{const e=new i.A("https://retoolapi.dev/ofcOdK/brand-notifier-allowed-websites");e.duration=2e3,e.gap=250,e.position="bottom-right",a.forEach(t=>{e.show(`
        <div class="d-flex align-items-center gap-2">
            <img src="${t.logo}" alt="" srcset="" class="rounded">
            <div class="d-flex flex-col">
                <span>${t.name}</span>
            </div>
        </div>
        `,{isHTML:!0,type:"success"})})}},558:(t,e,s)=>{s.d(e,{A:()=>i});class i{constructor(t){this.allowedWebsites=[],this.fetchAllowedWebsites(t).then(t=>{this.allowedWebsites=t.map(t=>t.allowedWebsites),this.initializeSnackbar()}).catch(t=>{console.error("Failed to fetch allowed websites:",t)})}async fetchAllowedWebsites(t){t=await fetch(t);if(t.ok)return await t.json()||[];throw new Error(`Failed to fetch allowed websites (status ${t.status})`)}initializeSnackbar(){var t;this.queue=[],this.isActive=!1,this.toastContainer=document.querySelector(".snackbar-container"),this.gap=250,this.duration=5e3,this.maxStacked=5,this.toastContainer?(t=window.location.href,this.allowedWebsites.includes(t)&&(this.isActive=!0,this.displayNextSnackbar())):console.error("Snackbar container not found.")}show(t,{type:e="normal",isHTML:s=!1}={}){this.isActive&&(this.queue.push({message:t,type:e,isHTML:s}),this.isActive||(this.isActive=!0,this.displayNextSnackbar()))}hide(){if(0<this.toastShowed.length){const t=this.toastShowed.shift();t&&(t.style.opacity="0",setTimeout(()=>{t.remove(),this.currentIndex=(this.currentIndex+1)%this.queue.length,setTimeout(()=>this.displayNextSnackbar(),this.gap)},300))}else this.currentIndex=(this.currentIndex+1)%this.queue.length,setTimeout(()=>this.displayNextSnackbar(),this.gap)}displayNextSnackbar(){if(0<this.queue.length){var{message:t,isHTML:e}=this.queue[this.currentIndex];const s=document.createElement("div");if(s.classList.add("snackbar"),s.classList.add("snackbar--visible"),s.classList.add("snackbar--fadeIn"),e?s.innerHTML=t:s.textContent=t,this.toastContainer.prepend(s),this.toastShowed.push(s),this.toastShowed.length>this.maxStacked){const i=this.toastShowed.shift();i.classList.add("snackbar--fadeOut"),i&&i.addEventListener("animationend",()=>{i.remove()})}setTimeout(()=>{s.classList.remove("snackbar--visible"),this.currentIndex=(this.currentIndex+1)%this.queue.length,setTimeout(()=>this.displayNextSnackbar(),this.gap)},this.duration)}}stop(){this.queue=[],this.isActive=!1,this.toastContainer.querySelectorAll(".snackbar--active").forEach(t=>t.remove())}}}},i={};function a(t){var e=i[t];return void 0!==e||(e=i[t]={exports:{}},s[t](e,e.exports,a)),e.exports}a.d=(t,e)=>{for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a(558);a(175)})();