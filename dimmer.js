(function(){

    var styleEl = document.querySelector("style#dim-fb")
    if ( styleEl === null ){
        var rules = "#pagelet_bluebar,#pagelet_sidebar,#rightCol,#leftCol{opacity:0.2;}";
        var s=document.createElement("style");
            s.type = 'text/css';
            s.setAttribute("id","dim-fb");
        if (s.styleSheet){
          s.styleSheet.cssText = rules;
        } else {
          s.appendChild(document.createTextNode(rules));

        }
        var head = document.head || document.getElementsByTagName('head')[0];
            head.appendChild(s);
    } else {
        styleEl.remove();
    }

}())


