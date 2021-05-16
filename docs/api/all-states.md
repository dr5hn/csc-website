---
id: all-states
title: Get a list of States
sidebar_label: All States
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">GET</Highlight> https://api.countrystatecity.in/v1/states

## Security
This api use API KEY as an authentication method.
* Name: <Highlight color="#1877F2">X-CSCAPI-KEY</Highlight>
* In: header

## Request Parameters
No parameters

## Response
| Code | Description |
| ---- | ----------- |
| 200 | Return a list of states |
| 401 | Unauthorized. |

## Example Usage
```jsx title="countries-states-cities.js"
var headers = new Headers();
headers.append("X-CSCAPI-KEY", "API_KEY");

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

fetch("https://api.countrystatecity.in/v1/states", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

## Example Success Response
```json
[
  {
    "id": 4008,
    "name": "Maharashtra",
    "country_id": 101,
    "country_code": "IN",
    "iso2": "MH"
  },
  ...
]
```

## Example Error Response
```json
{
  "error'": "Unauthorized. You shouldn't be here."
}
```
