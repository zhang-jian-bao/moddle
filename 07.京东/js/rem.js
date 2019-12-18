function hxcRem(){
	document.documentElement.style.fontSize=document.documentElement.clientWidth/4+"px";
}
hxcRem();
window.onresize=hxcRem;
