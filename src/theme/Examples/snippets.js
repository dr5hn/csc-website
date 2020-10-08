const snippets = [
  {
    label: "Countries",
    code: `var headers = new Headers();
headers.append("X-CSCAPI-KEY", "API_KEY");

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    `,
  },
  {
    label: "States of Country",
    code: `var headers = new Headers();
headers.append("X-CSCAPI-KEY", "API_KEY");

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

// Pass Country Code -- Eg: Country Code : IN
fetch("https://api.countrystatecity.in/v1/countries/IN/states", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));`,
  },
  {
    label: "Cities of State",
    code: `var headers = new Headers();
headers.append("X-CSCAPI-KEY", "API_KEY");

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

// Pass Country & State Code -- Eg: Country Code : IN & State Code : MH
fetch("https://api.countrystatecity.in/v1/countries/IN/states/MH/cities", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));`,
  }
];

export default snippets;
