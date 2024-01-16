

let t1 = gsap.timeline({scrollTrigger:{
    trigger:".sec2",
    start:"20% 90%",
    end:"50% 50%",
    scrub:true,
    delay:8,
}})

t1.to('#fanta',{
    top:"150%",
    left:"20%",
    rotate:360,
    filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, .8))",

},'ani1')
t1.to('#leaf',{
    top:"105%",
    left:"2%",
    rotate:280
},'ani1')
t1.to('#leaf2',{
    top:"120%",
    right:"2%",
    rotate:150
},'ani1')
t1.to('#oslice',{
    top:"120%",
    left:"20%",
width:"25%",
    rotate:360,
    filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, .4))",

},'ani1')

let t3 = gsap.timeline({scrollTrigger:{
    trigger:".sec2",
    start:"20% 90%",
    end:"50% 50%",
    scrub:true,
    duration:6,
}})

t3.from('.sec2-right .text',{
    y:-600,
    opacity:0,
    duration:12,
    delay:15


},'ani1')


let t2 = gsap.timeline({scrollTrigger:{
    trigger:".sec3",
    start:"40% 90%",
    end:"50% 50%",
    scrub:true,
    duration:1,
}})

t2.from('.sec3 .title p',{
    // y:"100%",
    opacity:0,
    stagger:2,
    delay:1,
    duration:7,
    scale:0,
})