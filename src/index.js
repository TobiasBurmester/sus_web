if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration =>{
        console.log("SW Registered!");
        console.log(registration);
    }).catch (error => {
        console.log("SW Registration Failed");
        console.log(error);
    });
} 

$(function() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    $("html, body").css({"width":w,"height":h});
});