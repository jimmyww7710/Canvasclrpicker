function docanvas() {
    document.getElementById("myCanvas").style.cursor='pointer';
    console.log('docanvas');
    var canvas = document.getElementById("myCanvas");
    let vm=this;
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

        })
    }