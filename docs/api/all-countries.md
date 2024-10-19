---
id: all-countries
title: Get a list of Countries
sidebar_label: All Countries
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
| Code | Description                |
| ---- | -------------------------- |
| 200  | Return a list of countries |
| 401  | Unauthorized.              |

## Example Usage
<Tabs>
  <TabItem value="js" label="Javascript" default>

   ```jsx title="countries-states-cities.js"
var headers = new Headers();
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
```

  </TabItem>

  <TabItem value="php" label="PHP">

```php title="countries-states-cities.php"
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.countrystatecity.in/v1/countries',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => array(
    'X-CSCAPI-KEY: API_KEY'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```

  </TabItem>

  <TabItem value="py" label="Python">

```py title="countries-states-cities.py"
import requests

url = "https://api.countrystatecity.in/v1/countries"

headers = {
  'X-CSCAPI-KEY': 'API_KEY'
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

  </TabItem>

  <TabItem value="axios" label="Axios">

```jsx title="countries-states-cities.js"
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.countrystatecity.in/v1/countries',
  headers: {
    'X-CSCAPI-KEY': 'API_KEY'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

  </TabItem>

  <TabItem value="dart" label="Dart">

```dart title="countries-states-cities.dart"
var headers = {
  'X-CSCAPI-KEY': 'API_KEY'
};

var request = http.Request('GET', Uri.parse('https://api.countrystatecity.in/v1/countries'));

request.headers.addAll(headers);

http.StreamedResponse response = await request.send();

if (response.statusCode == 200) {
  print(await response.stream.bytesToString());
} else {
  print(response.reasonPhrase);
}
```

  </TabItem>

  <TabItem value="jquery" label="jQuery">

```jsx title="countries-states-cities.js"
var settings = {
  "url": "https://api.countrystatecity.in/v1/countries",
  "method": "GET",
  "headers": {
    "X-CSCAPI-KEY": "API_KEY"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

  </TabItem>

  <TabItem value="go" label="Go">

```go title="countries-states-cities.go"
url:="https://api.countrystatecity.in/v1/countries"

client := &http.Client{}
req, _ := http.NewRequest("GET", url, nil)
req.Header.Add("X-CSCAPI-KEY", "API_KEY")
res, _ := client.Do(req)
defer res.Body.Close()

bytes ,err := ioutil.ReadAll(res.Body)
if err != nil {
  fmt.Println(err.Error())
}
fmt.Println(string(bytes))
```

  </TabItem>

  <TabItem value="ruby" label="Ruby">

  ```ruby title="countries-states-cities.ruby"
  require 'net/http'
  require 'json'

  uri = URI('https://api.countrystatecity.in/v1/countries')
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true

  request = Net::HTTP::Get.new(uri)
  request['X-CSCAPI-KEY'] = 'API_KEY'

  response = http.request(request)
  countries = JSON.parse(response.body)
  p countries
  ```

  </TabItem>

  <TabItem value="csharp" label="C#">

  ```csharp title="countries-states-cities.cs"
  using System;
  using System.Net.Http;
  using System.Threading.Tasks;

  class Program
  {
      static async Task Main(string[] args)
      {
          var client = new HttpClient();
          var request = new HttpRequestMessage
          {
              Method = HttpMethod.Get,
              RequestUri = new Uri("https://api.countrystatecity.in/v1/countries"),
              Headers =
              {
                  { "X-CSCAPI-KEY", "API_KEY" },
              },
          };
          using (var response = await client.SendAsync(request))
          {
              response.EnsureSuccessStatusCode();
              var body = await response.Content.ReadAsStringAsync();
              Console.WriteLine(body);
          }
      }
  }
  ```

  </TabItem>

  <TabItem value="java" label="Java">

  ```java title="countries-states-cities.java"
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;

  public class Main {
      public static void main(String[] args) throws Exception {
          HttpClient client = HttpClient.newHttpClient();
          HttpRequest request = HttpRequest.newBuilder()
              .uri(URI.create("https://api.countrystatecity.in/v1/countries"))
              .header("X-CSCAPI-KEY", "API_KEY")
              .build();

          HttpResponse<String> response = client.send(request,
              HttpResponse.BodyHandlers.ofString());
          System.out.println(response.body());
      }
  }
  ```

  </TabItem>

  <TabItem value="swift" label="Swift">

  ```swift title="countries-states-cities.swift"
  import Foundation

  let headers = [
    "X-CSCAPI-KEY": "API_KEY"
  ]

  let request = NSMutableURLRequest(url: NSURL(string: "https://api.countrystatecity.in/v1/countries")! as URL,
      cachePolicy: .useProtocolCachePolicy,
  timeoutInterval: 10.0)
  request.httpMethod = "GET"
  request.allHTTPHeaderFields = headers

  let session = URLSession.shared
  let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
    if (error != nil) {
      print(error)
    } else {
      let httpResponse = response as? HTTPURLResponse
      print(httpResponse)
    }
  })

  dataTask.resume()
  ```

  </TabItem>

</Tabs>


## Example Success Response
```json
[
  {
    "id": 101,
    "name": "India",
    "iso2": "IN",
    "iso3": "IND",
    "phonecode": "91",
    "capital": "New Delhi",
    "currency": "INR",
    "native": "भारत",
    "emoji": "🇮🇳"
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
