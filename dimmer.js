(function(){

    var styleEl = document.querySelector("style#dim-fb")
    if ( styleEl === null ){
        var s=document.createElement("style");
        s.setAttribute("id","dim-fb");
        s.innerText="#pagelet_bluebar,#pagelet_sidebar,#rightCol,#leftCol{opacity:0.2;}";
        document.body.appendChild(s);
    } else {
        styleEl.remove();
    }

}())


