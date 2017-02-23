//var httpRequest = require('http_request'); 

var request = require('request');


/*module.exports.createContact = function (req,res) { }*/
//POST Request:

module.exports.httpPost = function(url, body, callback){
  console.log("i am here .. ")
  request.post(
      url,
      { json: body,
        headers: {'Content-Type': 'application/json' }},
      function (error, response, data) {
          if (!error && response.statusCode == 201) {
              console.log("sucesss!!")
              console.log(data.data)
              callback(error, data.data)
          }
          else if(!error && response.statusCode == 422){
            console.log(response.body)
            callback(error, response.body)
          }
          else {
            callback(error, response)
          }
      }
  );

};



//GET Request:

module.exports.httpGet = function(url, callback){
  request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
          if (!error && response.statusCode == 201) {
              console.log("sucesss!!")
              //console.log(data.data)
              callback(error, body)
          }
          else {
            callback(error, response)
          }
});
};




