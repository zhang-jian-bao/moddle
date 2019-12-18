		function rem(){
			document.documentElement.style.fontSize=document.documentElement.clientWidth/4.0+"px"
		}
		rem();
		window.onresize=rem;