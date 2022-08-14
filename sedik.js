let countdate= new Date('april 13,2022 00:00:00').getTime();


function cut() {
    let now=new Date().getTime();
    gap=countdate-now;
    let second=1000 ;
    let minute=second*60;
    let hour=minute*60;
    let day=hour*24;

    let d=Math.floor(gap / (day));
    let h=Math.floor((gap %(day)/ (hour)))
    let m=Math.floor((gap % (hour)/(minute)))
    let s=Math.floor((gap % (minute)/(second)))

    document.getElementById("day").innerText=d
    document.getElementById("hour").innerText=h
    document.getElementById("minute").innerText=m
    document.getElementById("second").innerText=s
}
setInterval(function(){
cut()
},1000);

let ratinga=[...document.querySelectorAll(".ratea")]

ratinga.map((item,star)=>{
    item.addEventListener("click",()=>{
        for(let i=0;i<5;i++){
            if(i<=star){
                ratinga[i].src="images/fill star.png"
            }else{
                ratinga[i].src="images/no fill star.png"
            }
        }
    })
})
;
let ratingb=[...document.querySelectorAll(".rateb")]

ratingb.map((item,star)=>{
    item.addEventListener("click",()=>{
        for(let i=0;i<5;i++){
            if(i<=star){
                ratingb[i].src="images/fill star.png"
            }else{
                ratingb[i].src="images/no fill star.png"
            }
        }
    })
})
let ratingc=[...document.querySelectorAll(".ratec")]

ratingc.map((item,star)=>{
    item.addEventListener("click",()=>{
        for(let i=0;i<5;i++){
            if(i<=star){
                ratingc[i].src="images/fill star.png"
            }else{
                ratingc[i].src="images/no fill star.png"
            }
        }
    })
})
let ratingd=[...document.querySelectorAll(".rated")]

ratingd.map((item,star)=>{
    item.addEventListener("click",()=>{
        for(let i=0;i<5;i++){
            if(i<=star){
                ratingd[i].src="images/fill star.png"
            }else{
                ratingd[i].src="images/no fill star.png"
            }
        }
    })
})
let ratinge=[...document.querySelectorAll(".ratee")]

ratinge.map((item,star)=>{
    item.addEventListener("click",()=>{
        for(let i=0;i<5;i++){
            if(i<=star){
                ratinge[i].src="images/fill star.png"
            }else{
                ratinge[i].src="images/no fill star.png"
            }
        }
    })
})
let ratingf=[...document.querySelectorAll(".ratef")]

ratingf.map((item,star)=>{
    item.addEventListener("click",()=>{
        for(let i=0;i<5;i++){
            if(i<=star){
                ratingf[i].src="images/fill star.png"
            }else{
                ratingf[i].src="images/no fill star.png"
            }
        }
    })
})
let ratingg=[...document.querySelectorAll(".rateg")]

ratingg.map((item,star)=>{
    item.addEventListener("click",()=>{
        for(let i=0;i<5;i++){
            if(i<=star){
                ratingg[i].src="images/fill star.png"
            }else{
                ratingg[i].src="images/no fill star.png"
            }
        }
    })
})
;
let ratingh=[...document.querySelectorAll(".rateh")]

ratingh.map((item,star)=>{
    item.addEventListener("click",()=>{
        for(let i=0;i<5;i++){
            if(i<=star){
                ratingh[i].src="images/fill star.png"
            }else{
                ratingh[i].src="images/no fill star.png"
            }
        }
    })
})
;
let ratingi=[...document.querySelectorAll(".ratei")]

ratingi.map((item,star)=>{
    item.addEventListener("click",()=>{
        for(let i=0;i<5;i++){
            if(i<=star){
                ratingi[i].src="images/fill star.png"
            }else{
                ratingi[i].src="images/no fill star.png"
            }
        }
    })
})

//cart//
let close=document.querySelector(".x")
let open=document.querySelector(".shh")
let carte =document.querySelector(".cart");
let rub =document.querySelector(".trash")
let inpu =document.querySelector(".cart-quantity").value;

/*
close.onclick= () =>{
    carte.classList.remove("active")
}
*/



open.onclick= () => {
    carte.classList.add("active")
} 


    function ss() {
        close.onclick = () =>{
            carte.classList.remove("active")
        }
        
    }
    ss()
//total






// let count = 1

// function generateParagraphs() {
//     const fragment = document.createDocumentFragment();

//     for (let i = 1; i <= 500; i++) {
//         const newElement = document.createElement('p');
//         newElement.textContent = 'This is paragraph number '+count
//         count=count+1
      

//         fragment.appendChild(newElement);
//     }

//     document.body.appendChild(fragment);
// }

// if (count < 20000) {
//     setTimeout(generateParagraphs, 3000);
// }



/*setTimeout(function() {
    console.log("third")
},3000)

function aa() {
    console.log("first")
}
aa();
console.log("second")*/


// console.log(date.getMonth()+1)

// var req=new XMLHttpRequest();
// req.open("get","https://www.youtube.com");
// req.send();
// console.log(req);

// async  function get() {
//     let user=[];
//     if(user.length>0) {
//         return "user found"
//     }else {
//         return Error("user not found")
//     }
// }
// console.log(get())

// get().then(
//     (res)=>console.log(res),
//     (rej)=>console.log("rejected"+rej)
// )

let f=fetch('http://example.com/movies.json')
.then((response) => response.json())
.then((data) => console.log(data));

console.log(F)
