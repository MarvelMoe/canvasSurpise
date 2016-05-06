(function() {
    function start() {
        var theCanvas = document.getElementById('canvas1');
        theCanvas.width = window.innerWidth;
        theCanvas.height = window.innerHeight;
        var ctx = theCanvas.getContext("2d");
        var r = 0
//Function increases radius size by .04 frame 
        function animate() {
            ctx.beginPath()
            ctx.arc(400, 250, r, 0, 2 * Math.PI, false)
            r = r + 0.4;
            ctx.save()
            ctx.clip()
            var img = document.getElementsByTagName("img")[0]
            var imgX = document.getElementsByTagName("img")[1]
            ctx.drawImage(img, 100, 100)
            ctx.restore()

//Here we do the image swap 
            function switchAroo() {
             ctx.drawImage(imgX, 100, 100)
             var sound = document.createElement("audio")
             sound.setAttribute("src", "sound.mp3")
             sound.autoplay = true
            }
//Increases arc size until it hits 260 radius
            if (r < 260) {
                requestAnimationFrame(animate)
            }
//When radius reaches 259, big surprise
            if (r > 259) {
                switchAroo()
            }

        }

        requestAnimationFrame(animate)

    }
    window.addEventListener("load", start, false)
}())
//self-executing function on load
