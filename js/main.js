
let img = document.querySelectorAll('.banner_img li');
let banner = document.querySelector('.banner');
let circle = document.querySelectorAll('.circle li');
let right = document.querySelector('.b_r');
let left = document.querySelector('.b_l')
let n = 0;

function move(){
	n++;
	if (n>=img.length) {
		n=0;
	}
	img.forEach(function(dom,index){
		animate(dom,{opacity:0},1000);
		circle[index].classList.remove('active');
	})
	animate(img[n],{opacity:1},1000);
	circle[n].classList.add('active');
}

let t=setInterval(move,3000);
banner.onmouseover=function(){
	clearInterval(t);
}
banner.onmouseout=function(){
	t=setInterval(move,3000);
}
right.onclick=function(){
	move();
}

left.onclick=function(){
	n--;
	if (n<0) {
		n=img.length-1;
	}
	img.forEach(function(val,index){
		animate(val,{opacity:0},1000);
		circle[index].classList.remove('active');
	})
	animate(img[n],{opacity:1},1000);
	circle[n].classList.add('active');
}

circle.forEach(function(val,index){
	val.onclick=function(){
		img.forEach(function(dom,i){
			animate(dom,{opacity:0},1000);
			circle[i].classList.remove('active');
	})
	animate(img[index],{opacity:1},1000);
	this.classList.add('active');
	n=index;
	}
})