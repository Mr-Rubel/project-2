function date(){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	var ss ="AM";
	if(h>10){
		h=h-12;
		ss="PM";
	}
	if(h==00){
		h=12;
	}
	if(h<10){
		h="0"+h;
	}
	if(m<10){
		m="0"+m;
	}
	if(s<10){
		s="0"+s;
	}
	document.querySelector(".clock").innerHTML= h+" : "+m+" : "+s+" "+ss;
}
setInterval(date,1000);
function dd(){
var cd= new Date();
var nd= new Date("2020-12-24 11:59:00");
var td = nd - cd;
var s = Math.floor(td/1000);
var m = Math.floor(s/60);
var h = Math.floor(m/60);
var d = Math.floor(h/24);
h %= 24;
m %= 60;
s %= 60;
if (d<10){
	d="0"+d;
}
if (h<10){
	h="0"+h;
}
if (m<10){
	m="0"+m;
}

if(s<10){
	s="0"+s;
}
document.querySelector(".countdown").innerHTML = d+" : "+ h+" : "+ m+" : "+ s;

}
setInterval(dd,1000);