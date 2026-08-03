# Geolocation API

```ts
const geolocationApi = new GeolocationApi(client);
```

## Class Name

`GeolocationApi`


# Geolocate

Geolocation API returns a location and accuracy radius based on information about cell towers and WiFi nodes that the mobile client can detect. This document describes the protocol used to send this data to the server and to return a response to the client.

Communication is done over HTTPS using POST. Both request and response are formatted as JSON, and the content type of both is `application/json`.

You must specify a key in your request, included as the value of a`key` parameter. A `key` is your application's  API key. This key identifies your application for purposes of quota management. Learn how to [get a key](https://developers.google.com/maps/documentation/geolocation/get-api-key).

```ts
async geolocate(
  body?: GeolocationV1GeolocateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GeolocationV1GeolocateResponse>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-query-parameter.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GeolocationV1GeolocateRequest \| undefined`](../../doc/models/geolocation-v1-geolocate-request.md) | Body, Optional | The request body must be formatted as JSON. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: 200 OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GeolocationV1GeolocateResponse`](../../doc/models/geolocation-v1-geolocate-response.md).

## Example Usage

```ts
const body: GeolocationV1GeolocateRequest = {
  considerIp: 'false',
  wifiAccessPoints: [
    {
      macAddress: '84:d4:7e:09:a5:f1',
      signalStrength: -43,
      signalToNoiseRatio: 0,
    },
    {
      macAddress: '44:48:c1:a6:f3:d0',
      signalStrength: -55,
      signalToNoiseRatio: 0,
    }
  ],
};

try {
  const response = await geolocationApi.geolocate(body);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof GeolocationV1Geolocate400Error) {
      console.log(error.result);
    } else if (error instanceof GeolocationV1Geolocate404Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "location": {
    "lat": 37.421925,
    "lng": -122.0841293
  },
  "accuracy": 30
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | 400 BAD REQUEST | [`GeolocationV1Geolocate400Error`](../../doc/models/geolocation-v1-geolocate-400-error.md) |
| 404 | 404 NOT FOUND | [`GeolocationV1Geolocate404Error`](../../doc/models/geolocation-v1-geolocate-404-error.md) |

