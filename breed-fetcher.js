const input = process.argv.slice(2);
const request = require("request");
const url = "https://api.thecatapi.com/v1/breeds/search?q="+input;
request(url, (error, res, body) => {
    const data = JSON.parse(body);
    const breed = data[0];
    if (error) {
      console.log('error');
    } else if (breed == null) {
      console.log('This breed does not exist');
    } else {
      console.log(breed.description);
    }
});