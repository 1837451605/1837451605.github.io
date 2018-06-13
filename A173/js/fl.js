new Vue({
    el:"#z",
    data:{
        arrs:[
            {name:"风扇",img:"img/127.png"},
            {name:"加湿器",img:"img/128.png"},
            {name:"充电宝",img:"img/129.png"},
            {name:"蚊帐床",img:"img/130.png"},
            {name:"大床",img:"img/131.png"},
            {name:"耳机",img:"img/132.png"},
            {name:"空调",img:"img/133.png"},
            {name:"路由器",img:"img/134.png"},
            {name:"音箱",img:"img/135.png"},
            {name:"手机",img:"img/2.jpg"},
            {name:"蓝牙耳机",img:"img/3.jpg"},
            {name:"电饭锅",img:"img/4.jpg"}
        ],
        arrs1:[
            {name:"纸巾湿巾",img:"img/f1.jpg"},
            {name:"衣物清洁",img:"img/f2.jpg"},
            {name:"洗发护发",img:"img/f3.jpg"},
            {name:"家庭清洁",img:"img/f4.jpg"},
            {name:"空腔护理",img:"img/f5.jpg"},
            {name:"一次性用品",img:"img/f6.jpg"},
            {name:"清洁工具",img:"img/f7.jpg"},
            {name:"电动牙刷",img:"img/f8.jpg"},
            {name:"女性护理",img:"img/f9.jpg"},
            {name:"驱虫用品",img:"img/f10.jpg"},
            {name:"蓝牙耳机",img:"img/f11.jpg"},
            {name:"皮具护理",img:"img/f12.jpg"}
        ],
        arrs2:[
            {name:"风扇",img:"img/127.png"},
            {name:"加湿器",img:"img/128.png"},
            {name:"充电宝",img:"img/129.png"},
            {name:"蚊帐床",img:"img/130.png"},
            {name:"大床",img:"img/131.png"},
            {name:"耳机",img:"img/132.png"},
            {name:"空调",img:"img/133.png"},
            {name:"路由器",img:"img/134.png"},
            {name:"音箱",img:"img/135.png"},
            {name:"手机",img:"img/2.jpg"},
            {name:"蓝牙耳机",img:"img/3.jpg"},
            {name:"电饭锅",img:"img/4.jpg"}
        ],
        arrs3:[
            {name:"风扇",img:"img/127.png"},
            {name:"加湿器",img:"img/128.png"},
            {name:"充电宝",img:"img/129.png"},
            {name:"蚊帐床",img:"img/130.png"},
            {name:"大床",img:"img/131.png"},
            {name:"耳机",img:"img/132.png"},
            {name:"空调",img:"img/133.png"},
            {name:"路由器",img:"img/134.png"},
            {name:"音箱",img:"img/135.png"},
            {name:"手机",img:"img/2.jpg"},
            {name:"蓝牙耳机",img:"img/3.jpg"},
            {name:"电饭锅",img:"img/4.jpg"}
        ],
        arrs4:[
            {name:"风扇",img:"img/127.png"},
            {name:"加湿器",img:"img/128.png"},
            {name:"充电宝",img:"img/129.png"},
            {name:"蚊帐床",img:"img/130.png"},
            {name:"大床",img:"img/131.png"},
            {name:"耳机",img:"img/132.png"},
            {name:"空调",img:"img/133.png"},
            {name:"路由器",img:"img/134.png"},
            {name:"音箱",img:"img/135.png"},
            {name:"手机",img:"img/2.jpg"},
            {name:"蓝牙耳机",img:"img/3.jpg"},
            {name:"电饭锅",img:"img/4.jpg"}
        ],
        arrs5:[
            {name:"风扇",img:"img/127.png"},
            {name:"加湿器",img:"img/128.png"},
            {name:"充电宝",img:"img/129.png"},
            {name:"蚊帐床",img:"img/130.png"},
            {name:"大床",img:"img/131.png"},
            {name:"耳机",img:"img/132.png"},
            {name:"空调",img:"img/133.png"},
            {name:"路由器",img:"img/134.png"},
            {name:"音箱",img:"img/135.png"},
            {name:"手机",img:"img/2.jpg"},
            {name:"蓝牙耳机",img:"img/3.jpg"},
            {name:"电饭锅",img:"img/4.jpg"}
        ],
        arrs6:[
            {name:"风扇",img:"img/127.png"},
            {name:"加湿器",img:"img/128.png"},
            {name:"充电宝",img:"img/129.png"},
            {name:"蚊帐床",img:"img/130.png"},
            {name:"大床",img:"img/131.png"},
            {name:"耳机",img:"img/132.png"},
            {name:"空调",img:"img/133.png"},
            {name:"路由器",img:"img/134.png"},
            {name:"音箱",img:"img/135.png"},
            {name:"手机",img:"img/2.jpg"},
            {name:"蓝牙耳机",img:"img/3.jpg"},
            {name:"电饭锅",img:"img/4.jpg"}
        ],
        arrs7:[
            {name:"风扇",img:"img/127.png"},
            {name:"加湿器",img:"img/128.png"},
            {name:"充电宝",img:"img/129.png"},
            {name:"蚊帐床",img:"img/130.png"},
            {name:"大床",img:"img/131.png"},
            {name:"耳机",img:"img/132.png"},
            {name:"空调",img:"img/133.png"},
            {name:"路由器",img:"img/134.png"},
            {name:"音箱",img:"img/135.png"},
            {name:"手机",img:"img/2.jpg"},
            {name:"蓝牙耳机",img:"img/3.jpg"},
            {name:"电饭锅",img:"img/4.jpg"}
        ]
    }
})

var sortmainli=document.querySelectorAll(".sort-main .cbl li");
console.log(sortmainli);
var sortrow=document.querySelectorAll(".sort-main .col-xs-9 .fenlei");
console.log(sortrow);
for(var z=0;z<sortrow.length;z++){
    sortrow[z].setAttribute("class","disappear");
}
sortrow[0].setAttribute("class","appear");
sortmainli[0].style.backgroundColor="#f5f5f5";
sortmainli[0].style.color="red";
for(var i=0;i<sortmainli.length;i++){
    sortmainli[i].aa=i;
    sortmainli[i].onclick=function(){
        for(var j=0;j<sortrow.length;j++){
            sortrow[j].setAttribute("class","disappear");
            sortmainli[j].style.backgroundColor = "#fff";
            sortmainli[j].style.color = "#000";
        }
//        this.style.backgroundColor = "#fff";
        sortmainli[this.aa].style.backgroundColor = "#f5f5f5";
        this.style.color = "red";
        sortrow[this.aa].setAttribute("class","appear");
    } 
}

var topjd = document.querySelector(".top-jd");
var ca = document.querySelector(".ca");

if(sessionStorage.ca == "false"){
    topjd.style.display = "none";
}else{
    ca.style.display = "block";
}

topjd.onclick = function () {
    topjd.style.display = "none";
    sessionStorage.ca = "false";
}