---
id: country
title: Get the country details from ISO2 Code
sidebar_label: Country Details
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

<Highlight color="#25c2a0">GET</Highlight> /countries/[ciso]

## Security
This api use API KEY as an authentication method.
* Name: <Highlight color="#1877F2">X-CSCAPI-KEY</Highlight>
* In: header

## Request Parameters
| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| ciso | URL | ISO2 Code of Country | <Highlight color="#d73232">Required</Highlight> | string |

## Response
| Code | Description |
| ---- | ----------- |
| 200 | Return a details of country |
| 401 | Unauthorized. |
| 404 | Not Found. |

## Example Success Response
```json
{
  "id": 101,
  "name": "India",
  "iso3": "IND",
  "iso2": "IN",
  "phonecode": "91",
  "capital": "New Delhi",
  "currency": "INR",
  "native": "भारत",
  "emoji": "🇮🇳",
  "emojiU": "U+1F1EE U+1F1F3"
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
  "error'": "Country not found."
}
```
