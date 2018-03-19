//require the request package
const request = require('request');

//pass in a url and request returns a callback function with 3 arguments
request(url, function (err, response, body) {
  //check for an error
  if(err){
    console.log('error:', error);
  // if no error, log the entire contents of the response body
  } else {
    console.log('body:', body);
  }
})
