function x(){
	console.log(11);
	$(".JDnews .center .text").css({"transform":"translateY(-16px)","transition":"1s"})
}
function c(){
	console.log(12);
    $(".JDnews .center .text").css({"teransform":"translateY(0px)","transition":"0s"});
	$(".JDnews .center .text").eq(0).appendTo($(".JDnews .center"));
}
function v(){
	console.log(13);
	
}
setInterval(function(){
	x();
	setTimeout(function(){
        c();
	
    },2000);
},3000);


//首页京东秒杀部分的效果（倒计时）
function countTime() {
    //获取当前时间
    var date = new Date();
    var now = date.getTime();
    //设置截止时间
    var str = "2018/6/31 20:00:00";
    var endDate = new Date(str);
    var end = endDate.getTime();

    //时间差
    var leftTime = end - now;
    //定义变量 d,h,m,s保存倒计时的时间
    var d, h, m, s;
    if (leftTime >= 0) {
        d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
    }
    //将倒计时赋值到div中
    //document.getElementById("_d").innerHTML = d + "天";
    document.getElementById("_h").innerHTML = h;
    document.getElementById("_m").innerHTML = m;
    document.getElementById("_s").innerHTML = s;
    //递归每秒调用countTime方法，显示动态时间效果
    setTimeout(countTime, 1000);

}

countTime();

var search=document.querySelector(".search");
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>100){
			search.style.background="#E4B9B9";
		}else{
			search.style.background=""
		}
	})
})

new Vue({
    el:"#z",
    data:{
        arrs:[
            {span:"自营",name:"[京东超市]e洁 自动收口垃圾袋加厚手提式 45c....................",img:"img/102.png",price:"￥21.00",jiang:"￥19.80"},
            {name:"安昕 良选男士船袜5双装 中筒棉袜商务男袜子吸汗透气短袜船...",img:"img/103.png",price:"￥38.00"},
            {name:"苹果原装数据线/6P/iPadpro手机USB线",img:"img/105.png",price:"￥155.00"},
            {name:"真皮多卡位零钱包女式卡夹信用卡包头层牛皮驾驶证皮套风琴",img:"img/106.png",price:"￥59.00"},
            {name:"[京东超市]e洁 自动收口垃圾袋加厚手提式 45c................................",img:"img/104.png",price:"￥21.00"},
            {span:"自营",name:"安昕 良选男士船袜5双装 中筒棉袜商务男袜子吸汗透气短袜船...",img:"img/107.png",price:"￥38.00"},
            {h4:"全球购",name:"苹果原装数据线iPhone7Plus//6P/5SE/iPadpro手机USB线",img:"img/108.png",price:"￥155.00"},
            {span:"自营",name:"真皮多卡位零钱包女式卡夹信用卡包头层牛皮驾驶证皮套风琴",img:"img/109.png",price:"￥59.00"},{name:"[京东超市]e洁 自动收口垃圾袋加厚手提式 45c....................",img:"img/120.png",price:"￥21.00"},
            {name:"安昕 良选男士船袜5双装 中筒棉袜商务男袜子吸汗透气短袜船...",img:"img/121.png",price:"￥38.00"},
            {name:"苹果原装数据线iPhone7Plus//6P/5SE/iPadpro手机USB线",img:"img/124.png",price:"￥155.00"},
            {h4:"全球购",name:"真皮多卡位零钱包女式卡夹信用卡包头层牛皮驾驶证皮套风琴",img:"img/123.png",price:"￥59.00"}
        ]
    }
})

var tops=document.querySelector(".fanhui");
    tops.style.display="none";
    window.onscroll = function(){
        var juli1=document.documentElement.scrollTop||document.body.scrollTop;
        if(juli1<600){
                 tops.style.display="none";
            }else{
                  tops.style.display="block";
            }
    }
    
   tops.onclick=function(){
       timer=setInterval(function(){
           var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
           var ispeed=Math.floor(-scrollTop/6);
           if(scrollTop==0){
               clearInterval(timer);
           }
           document.documentElement.scrollTop=document.body.scrollTop=scrollTop+ispeed;
       },30)
   };