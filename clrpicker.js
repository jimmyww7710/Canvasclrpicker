var color;
var opacityValue=0.5;

function docanvas() {
   
    giveblack();

    this.opening("myCanvas");
    document.getElementById("myCanvas").style.cursor = 'pointer';
    console.log('docanvas');
    var canvas = document.getElementById("myCanvas");

    // if (canvas && canvas.getContext('2d')) {
    console.log('canvas in ');
    var context = canvas.getContext('2d');
    var myImg = document.getElementById("Img");

    context.drawImage(myImg, 0, 0);

    document.addEventListener("click", function (event) {
        var actualX = Math.floor(event.pageX - canvas.offsetLeft);
        var actualY = Math.floor(event.pageY - canvas.offsetTop);
        var pixelData = context.getImageData(actualX, actualY, 1, 1);
        var data = pixelData.data;
        console.log('R:', data[0]);
        console.log('G:', data[1]);
        console.log('B:', data[2]);
        console.log('A:', data[3]);
        // vm.Rclr=data[0];
        // vm.Gclr=data[1];
        // vm.Bclr=data[2];
        if (data[0] == 0 && data[1] == 0 && data[2] == 0) {
            return false;
        } else {
            document.getElementById("Rclr").value = data[0];
            document.getElementById("Gclr").value = data[1];
            document.getElementById("Bclr").value = data[2];
        }

        // rgba(0, 0, 0, 1)
        document.getElementById("showcolor").style.backgroundColor = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + data[3] + ')';
        color = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + data[3] + ')';






        // console.log('x:',Math.floor(event.pageX-canvas.offsetLeft));
        // console.log('y:',Math.floor(event.pageY-canvas.offsetTop));
        clickAnimation("showcolor");
        giveValue();

        document.getElementById('here').style.left = actualX.toString() + 'px';
        document.getElementById('here').style.top = actualY.toString() + 'px';
    })
}


function clickAnimation(el) {
    var elem = document.getElementById(el);
    // elem.style.transition ='height 0.2s width 0.2s linear 0s';
    // var divheight=(elem.style.height).substring(1, divheight.length-2);
    // var divheight=parseInt(elem.style.height);
    // var divwidth=parseInt(elem.style.width);
    // console.log(divheight);

    // elem.style.transition ='height 0.2s width 0.2s ease 0s';
    elem.style.border = '3px solid #E1E6E7';
    setTimeout(() => {
        elem.style.border = '0px solid #E1E6E7';
    }, 100);


}


function opening(el) {
    var elem = document.getElementById(el);
    elem.style.transition = 'opacity 1s linear 0s';
    // var divheight=(elem.style.height).substring(1, divheight.length-2);
    // var divheight=parseInt(elem.style.height);
    // var divwidth=parseInt(elem.style.width);
    // console.log(divheight);

    // elem.style.transition ='height 0.2s width 0.2s ease 0s';
    elem.style.opacity = '0.2';
    setTimeout(() => {
        elem.style.border = '1';
        elem.style.opacity = '1';
    }, 1000);


}

// function add() {

//     document.getElementById('c01').style.backgroundColor=document.getElementById("showcolor").style.backgroundColor;

// }

function getDiv(el) {
    console.log('123');
    var elem = document.getElementById(el);
    console.log(document.getElementById("showcolor").style.backgroundColor);

    elem.style.backgroundColor = document.getElementById("showcolor").style.backgroundColor;
}



function giveValue() {

    var inputRclr = document.getElementById('Rclr');
    var inputGclr = document.getElementById('Gclr');
    var inputBclr = document.getElementById('Bclr');
    inputRclr.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("showcolor").style.backgroundColor = 'rgba(' + inputRclr.value + ',' + inputGclr.value + ',' + inputBclr.value + ',1)';
        }
    });

    inputGclr.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("showcolor").style.backgroundColor = 'rgba(' + inputRclr.value + ',' + inputGclr.value + ',' + inputBclr.value + ',1)';
        }
    });

    inputBclr.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("showcolor").style.backgroundColor = 'rgba(' + inputRclr.value + ',' + inputGclr.value + ',' + inputBclr.value + ',1)';
        }
    });

    mixOpacity.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            opacityValue=this.value;
            document.getElementById("showcolor").style.backgroundColor = 'rgb(' + (parseInt(inputRclr.value)*opacityValue+parseInt(this.value)*opacityValue) + ',' + (parseInt(inputGclr.value)*opacityValue+parseInt(this.value)*opacityValue) + ',' + (parseInt(inputBclr.value)*opacityValue+parseInt(this.value)*opacityValue) + ')';
        }
    });

    
}

function giveblack(){
    var inputRclr = document.getElementById('Rclr');
    var inputGclr = document.getElementById('Gclr');
    var inputBclr = document.getElementById('Bclr');
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
        
        console.log('Rclr',(parseInt(inputRclr.value)+parseInt(this.value)));
        // console.log('');
        // console.log('');
        // console.log('');
        document.getElementById("showcolor").style.backgroundColor = 'rgb(' + (parseInt(inputRclr.value)*opacityValue+parseInt(this.value)*opacityValue) + ',' + (parseInt(inputGclr.value)*opacityValue+parseInt(this.value)*opacityValue) + ',' + (parseInt(inputBclr.value)*opacityValue+parseInt(this.value)*opacityValue) + ')';
    }
}

