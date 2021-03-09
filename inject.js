var a = document.querySelector("video");
if (a) {
    a.setAttribute("preload", "auto");
    a.addEventListener('canplaythrough', (event) => {
        console.log('1');
    });
    a.oncanplaythrough = (event) => {
        console.log('2');
    };
}
if (window == top) {
    window.addEventListener('keyup', doKeyPress, false); //add the keyboard handler
    }
    
    function doKeyPress(e){
        if(e.shiftKey) {
            switch (e.keyCode) {
                case 71:
                    var g = document.querySelector("div.vjs-overlay-skip-intro.vjs-overlay-bottom-left")
                    g.click()
                    console.log('shift + g');
                    break;
                case 72:
                    var h = document.querySelector("div.vjs-overlay-skip-intro.vjs-overlay-bottom-right")
                    h.click()
                    console.log('shift + h')
                    break;
                default:
                    break;
            }
        }
    }