function docanvas() {
    this.opening("myCanvas");
    document.getElementById("myCanvas").style.cursor='pointer';
    console.log('docanvas');
    var canvas = document.getElementById("myCanvas");
    
    // if (canvas && canvas.getContext('2d')) {
        console.log('canvas in ');
        var context = canvas.getContext('2d');
        var myImg = document.getElementById("Img");

        context.drawImage(myImg, 0, 0);
        
        document.addEventListener("click", function(event){
            var actualX = Math.floor(event.pageX-canvas.offsetLeft);
            var actualY = Math.floor(event.pageY-canvas.offsetTop);
            var pixelData = context.getImageData(actualX,actualY,1,1);
            var data = pixelData.data;
            console.log('R:',data[0]);
            console.log('G:',data[1]);
            console.log('B:',data[2]);
            console.log('A:',data[3]);
            // vm.Rclr=data[0];
            // vm.Gclr=data[1];
            // vm.Bclr=data[2];
            document.getElementById("Rclr").value=data[0];
            document.getElementById("Gclr").value=data[1];
            document.getElementById("Bclr").value=data[2];
            // rgba(0, 0, 0, 1)
            document.getElementById("showcolor").style.backgroundColor='rgba('+data[0]+','+data[1]+','+data[2]+','+data[3]+')';
            // console.log('x:',Math.floor(event.pageX-canvas.offsetLeft));
            // console.log('y:',Math.floor(event.pageY-canvas.offsetTop));
            clickAnimation("showcolor");
        })
    }


    function clickAnimation(el){
        var elem = document.getElementById(el);
        // elem.style.transition ='height 0.2s width 0.2s linear 0s';
        // var divheight=(elem.style.height).substring(1, divheight.length-2);
        // var divheight=parseInt(elem.style.height);
        // var divwidth=parseInt(elem.style.width);
        // console.log(divheight);
        
        // elem.style.transition ='height 0.2s width 0.2s ease 0s';
        elem.style.border='3px solid #E1E6E7';
        setTimeout(() => {
            elem.style.border='0px solid #E1E6E7';
        }, 100);

        
    }


    function opening(el){
        var elem = document.getElementById(el);
        elem.style.transition ='opacity 1s linear 0s';
        // var divheight=(elem.style.height).substring(1, divheight.length-2);
        // var divheight=parseInt(elem.style.height);
        // var divwidth=parseInt(elem.style.width);
        // console.log(divheight);
        
        // elem.style.transition ='height 0.2s width 0.2s ease 0s';
        elem.style.opacity='0.2';
        setTimeout(() => {
            elem.style.border='1';
            elem.style.opacity='1';
        }, 1000);

        
    }