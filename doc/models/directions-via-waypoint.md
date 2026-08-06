
# Directions via Waypoint

*This model accepts additional fields of type unknown.*

## Structure

`DirectionsViaWaypoint`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `location` | [`Location \| undefined`](../../doc/models/location.md) | Optional | - |
| `stepIndex` | `number \| undefined` | Optional | The index of the step containing the waypoint. |
| `stepInterpolation` | `number \| undefined` | Optional | The position of the waypoint along the step's polyline, expressed as a ratio from 0 to 1. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DirectionsViaWaypoint } from 'googlemapsplatform';

const directionsViaWaypoint: DirectionsViaWaypoint = {
  location: {
    lat: 205.22,
    lng: 218.24,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  stepIndex: 94,
  stepInterpolation: 33.76,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

