(()=>{"use strict";var t={334:(s,e,t)=>{var i=t(558);const a=[{name:"Website 1",logo:"https://via.placeholder.com/50"},{name:"Website 2",logo:"https://via.placeholder.com/50"},{name:"Website 3",logo:"https://via.placeholder.com/50"}];window.onload=()=>{const e=new i.A;e.duration=2e3,e.gap=250,e.position="bottom-right",a.forEach(s=>{e.show(`
        <div class="d-flex align-items-center gap-2">
            <img src="${s.logo}" alt="" srcset="" class="rounded">
            <div class="d-flex flex-col">
                <span>${s.name}</span>
            </div>
        </div>
        `,{isHTML:!0,type:"success"})})}},558:(s,e,t)=>{t.d(e,{A:()=>i});class i{constructor(){this.view=document.body.appendChild(document.createElement("div")),this.view.classList.add("snackbar"),this.isActive=!1,this.queue=[],this.currentIndex=0,this.gap=250,this.duration=5e3,this.position="bottom-left"}show(s,{type:e="normal",isHTML:t=!1}){this.queue.push({message:s,type:e,isHTML:t}),this.isActive||(this.isActive=!0,this.displayNextSnackbar())}hide(){this.isActive=!1,this.view.classList.remove("snackbar--visible"),this.displayNextSnackbar()}displayNextSnackbar(){var s,e,t;0<this.queue.length&&({message:s,type:e,isHTML:t}=this.queue[this.currentIndex],t?this.view.innerHTML=s:this.view.textContent=s,this.view.classList.add("snackbar--"+this.position),this.view.classList.add("snackbar--"+e),this.view.classList.add("snackbar--visible"),setTimeout(()=>{this.view.classList.remove("snackbar--visible"),this.currentIndex=(this.currentIndex+1)%this.queue.length,setTimeout(()=>this.displayNextSnackbar(),this.gap)},this.duration))}stop(){this.queue=[],this.isActive=!1,this.view.classList.remove("snackbar--visible")}}}},i={};function a(s){var e=i[s];return void 0!==e||(e=i[s]={exports:{}},t[s](e,e.exports,a)),e.exports}a.d=(s,e)=>{for(var t in e)a.o(e,t)&&!a.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:e[t]})},a.o=(s,e)=>Object.prototype.hasOwnProperty.call(s,e),a(558);a(334)})();