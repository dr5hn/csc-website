---
id: state
title: Get the state details from ISO2 Code
sidebar_label: State Details
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

<Highlight color="#25c2a0">GET</Highlight> https://api.countrystatecity.in/v1/countries/[ciso]/states/[siso]

## Security
This api use API KEY as an authentication method.
* Name: <Highlight color="#1877F2">X-CSCAPI-KEY</Highlight>
* In: header

## Request Parameters
| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| [ciso] | URL | ISO2 Code of Country | <Highlight color="#d73232">Required</Highlight> | string |
| [siso] | URL | ISO2 Code of State | <Highlight color="#d73232">Required</Highlight> | string |

## Response
| Code | Description |
| ---- | ----------- |
| 200 | Return a details of state |
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

fetch("https://api.countrystatecity.in/v1/countries/IN/states/MH", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

## Example Success Response
```json
{
  "id": "4008,",
  "name": "Maharashtra,",
  "country_id": "101,",
  "country_code": "IN,",
  "iso2": "MH"
}
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
  "error'": "No State/Region found."
}
```
