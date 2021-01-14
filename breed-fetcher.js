const request = require("request");


const fetchBreedDescription = function(breedName, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q="+breedName;
    request(url, (error, res, body) => {
        const data = JSON.parse(body);
        breedName = data[0];
        if (error) {
          callback(error,null);
        } else if (breedName == null) {
          callback('This breed does not exist',null);
        } else {
          callback(null,breedName.description);
        }
    });
};
module.exports = { fetchBreedDescription };
