
# Nearest Roads Response

*This model accepts additional fields of type unknown.*

## Structure

`NearestRoadsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `snappedPoints` | [`SnappedPoint[] \| undefined`](../../doc/models/snapped-point.md) | Optional | An array of snapped points. Sometimes containing several snapped points for the same point with differing placeId or location. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NearestRoadsResponse } from 'google-maps-platformlib';

const nearestRoadsResponse: NearestRoadsResponse = {
  snappedPoints: [
    {
      location: {
        latitude: 194.62,
        longitude: 59.18,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      placeId: 'placeId0',
      originalIndex: 33.24,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      location: {
        latitude: 194.62,
        longitude: 59.18,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      placeId: 'placeId0',
      originalIndex: 33.24,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      location: {
        latitude: 194.62,
        longitude: 59.18,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      placeId: 'placeId0',
      originalIndex: 33.24,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

