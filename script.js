var fileChooser = document.getElementsByTagName('input')[0];
var content = document.getElementById('content');

if (typeof window.FileReader === 'undefined') {
    content.className = 'fail';
    content.innerHTML = 'File API &amp; FileReader API are not supported in your browser.  Try on a new-ish Android phone.';
}

fileChooser.onchange = function (e) {
    //e.preventDefault();

    var file = fileChooser.files[0],
        reader = new FileReader();
        
    reader.onerror = function (event) {
        content.innerHTML = "Error reading file";
    }

    reader.onload = function (event) {
        var img = new Image();

        // files from the Gallery need the URL adjusted
        if (event.target.result && event.target.result.match(/^data:base64/)) {
            img.src = event.target.result.replace(/^data:base64/, 'data:image/jpeg;base64');
        } else {
            img.src = event.target.result;
        }

        // Guess photo orientation based on device orientation, works when taking picture, fails when loading from gallery
        if (navigator.userAgent.match(/mobile/i) && window.orientation === 0) {
            img.height = 250;
            img.className = 'rotate';
        } else {
            img.width = 400;
        }

        content.innerHTML = '';
        content.appendChild(img);
    };
    
    reader.readAsDataURL(file);

    return false;
}
