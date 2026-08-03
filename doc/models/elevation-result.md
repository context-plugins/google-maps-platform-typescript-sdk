
# Elevation Result

*This model accepts additional fields of type unknown.*

## Structure

`ElevationResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `elevation` | `number` | Required | The elevation of the location in meters. |
| `resolution` | `number \| undefined` | Optional | The value indicating the maximum distance between data points from which the elevation was interpolated, in meters. This property will be missing if the resolution is not known. Note that elevation data becomes more coarse (larger resolution values) when multiple points are passed. To obtain the most accurate elevation value for a point, it should be queried independently. |
| `location` | [`Location`](../../doc/models/location.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ElevationResult } from 'google-maps-platformlib';

const elevationResult: ElevationResult = {
  elevation: 112.66,
  location: {
    lat: 205.22,
    lng: 218.24,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  resolution: 75.92,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

