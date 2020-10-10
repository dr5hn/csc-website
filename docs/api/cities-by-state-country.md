---
id: cities-by-state-country
title: Get the list of cities in a state
sidebar_label: Cities By State & Country
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

<Highlight color="#25c2a0">GET</Highlight> /countries/[ciso]/states/[siso]/cities

## Security
This api use API KEY as an authentication method.
* Name: <Highlight color="#1877F2">X-CSCAPI-KEY</Highlight>
* In: header

## Request Parameters
| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| ciso | URL | ISO2 Code of Country | <Highlight color="#d73232">Required</Highlight> | string |
| siso | URL | ISO2 Code of State | <Highlight color="#d73232">Required</Highlight> | string |

## Response
| Code | Description |
| ---- | ----------- |
| 200 | Return a list of cities |
| 401 | Unauthorized. |
| 404 | Not Found. |

## Example Success Response
```json
[
  {
    "id": 133024,
    "name": "Mumbai"
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
  "error'": "No Cities found."
}
```
