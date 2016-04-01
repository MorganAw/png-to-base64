# png-to-base64

A simple app to convert a png image to a base64 URI.

### How to start
**Note: Make sure to have Node.js installed**

1. Clone the repository
`$ git clone https://github.com/MorganCAw/png-to-base64.git`

2. Move the desired image files into `./static/img/`

3. Change the url path in `./static/js/conversion.js`

4. Run the app
`$ npm  start`

### Credits
All the code was stolen from these posts:

1. [Canvas method - David Walsh's Blog](https://davidwalsh.name/convert-image-data-uri-javascript)

2. [Alternative method - Stackoverflow](http://stackoverflow.com/questions/32833797/convert-local-image-to-base64-string-in-javascript)

**Note:** I haven't actually ran the alternative method. I tried to run the
Canvas approach without a server and kept getting CORS errors so I made this
project to get what I needed
