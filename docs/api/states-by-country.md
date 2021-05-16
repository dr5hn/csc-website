---
id: states-by-country
title: Get a list of States within country
sidebar_label: States By Country
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

<Highlight color="#25c2a0">GET</Highlight> https://api.countrystatecity.in/v1/countries/[ciso]/states

## Security
This api use API KEY as an authentication method.
* Name: <Highlight color="#1877F2">X-CSCAPI-KEY</Highlight>
* In: header

## Request Parameters
| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| [ciso] | URL | ISO2 Code of Country | <Highlight color="#d73232">Required</Highlight> | string |

## Response
| Code | Description |
| ---- | ----------- |
| 200 | Return a list of states |
| 401 | Unauthorized. |
| 404 | Not Found. |

## Example Usage
```jsx title="countries-states-cities.js"
var headers = new Headers();
headers.append("X-CSCAPI-KEY", "API_KEY");

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

fetch("https://api.countrystatecity.in/v1/countries/IN/states", requestOptions)
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

## Example Not Found Response
```json
{
  "error'": "No States/Regions found."
}
```
