---
id: all-countries
title: Get a list of Countries
sidebar_label: All Countries
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

<Highlight color="#25c2a0">GET</Highlight> https://api.countrystatecity.in/v1/countries

## Security
This api use API KEY as an authentication method.
* Name: <Highlight color="#1877F2">X-CSCAPI-KEY</Highlight>
* In: header

## Request Parameters
No parameters

## Response
| Code | Description |
| ---- | ----------- |
| 200 | Return a list of countries |
| 401 | Unauthorized. |

## Example Success Response
```json
[
  {
    "id": 101,
    "name": "India",
    "iso2": "IN"
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
