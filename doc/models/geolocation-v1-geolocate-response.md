
# Geolocation V1 Geolocate Response

*This model accepts additional fields of type unknown.*

## Structure

`GeolocationV1GeolocateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `location` | [`Location`](../../doc/models/location.md) | Required | - |
| `accuracy` | `number` | Required | The accuracy of the estimated location, in meters. This represents the radius of a circle around the given `location`. If your Geolocation response shows a very high value in the `accuracy` field, the service may be geolocating based on the  request IP, instead of WiFi points or cell towers. This can happen if no cell towers or access points are valid or recognized. To confirm that this is the issue, set `considerIp` to `false` in your request. If the response is a `404`, you've confirmed that your `wifiAccessPoints` and `cellTowers` objects could not be geolocated. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GeolocationV1GeolocateResponse } from 'googlemapsplatform';

const geolocationV1GeolocateResponse: GeolocationV1GeolocateResponse = {
  location: {
    lat: 205.22,
    lng: 218.24,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  accuracy: 20.5,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

