function getDataUri(url, callback) {
  var image = new Image();
  image.onload = function () {
    var canvas = document.createElement('canvas');
    canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
    canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size
    canvas.getContext('2d').drawImage(image, 0, 0);
    // Get raw image data
    callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));
    // ... or get as Data URI
    callback(canvas.toDataURL('image/png'));
  };
  image.setAttribute('crossOrigin', 'Anonymous');
  image.src = url;
}

/* ---=== { Possible alternative method } ===---
function getDataUri(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';
  xhr.onload = function(error) {
    console.log(this.response);
  var reader = new FileReader();
  reader.onload = function(event) {
      var res = event.target.result;
    console.log(res);
  }
  var file = this.response;
  reader.readAsDataURL(file);
  }
  xhr.send();
}
*/

getDataUri('./img/image.png', function(dataUri) {
  console.log(dataUri);
});
