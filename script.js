const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim() {
    var t1 = gsap.timeline();

    t1.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 1,
            delay: -1,
            stagger: .2
        })
        .from('#herofooter', {
            y: 0,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut

        })
}
// mouse move animation
var timeout;

function circleChaptaKaro() {
    //define scale value
    var xscale = 1;
    var yscale = 1;


    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);
        // var xdiff ;
        // var ydiff ;
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        // console.log(xdiff, ydiff);
        circleMouseFollwer(xscale, yscale);

        timeout = this.setTimeout(function () {
            document.querySelector("#minecircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;


        }, 100)


    });

}
circleChaptaKaro();


function circleMouseFollwer(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        this.document.querySelector("#minecircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;

    })
}
circleMouseFollwer();
firstPageAnim();
// window.addEventListener("load", firstPageAnim);

// teno element select kiya uske baad teeno element per ex mousemove lagao
// jab mousemove ho to ye pata karo ki mouse kaha per hai jiske matlab hai
// mouse ki x or y postion pata karo ab mouse ki x y pastion ke badale us 
// image ko show karo and us image ko move karte time rotate karo 


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mouseleave", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;

        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,

        });

    });
    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    });

});