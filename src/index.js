if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration =>{
        console.log("SW Registered!");
        console.log(registration);
    }).catch (error => {
        console.log("SW Registration Failed");
        console.log(error);
    });
} 

window.addEventListener('resize', r =>{


   var viewportWidth = $(screen).width();

   var viewportHeight = $(screen).height();

        document.body.width = viewportWidth;
        document.body.height =viewportHeight;

   //do your layout change here.

});

const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};