
# Distance Matrix Element

*This model accepts additional fields of type unknown.*

## Structure

`DistanceMatrixElement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fare` | [`Fare1 \| undefined`](../../doc/models/fare-1.md) | Optional | - |
| `distance` | [`Distance \| undefined`](../../doc/models/distance.md) | Optional | - |
| `durationInTraffic` | [`DurationInTraffic \| undefined`](../../doc/models/duration-in-traffic.md) | Optional | - |
| `duration` | [`Duration \| undefined`](../../doc/models/duration.md) | Optional | - |
| `status` | [`DistanceMatrixElementStatus`](../../doc/models/distance-matrix-element-status.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  DistanceMatrixElement,
  DistanceMatrixElementStatus,
} from 'google-maps-platformlib';

const distanceMatrixElement: DistanceMatrixElement = {
  status: DistanceMatrixElementStatus.ZeroResults,
  fare: {
    currency: 'currency0',
    value: 12.62,
    text: 'text0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  distance: {
    text: 'text0',
    value: 142.22,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  durationInTraffic: {
    text: 'text6',
    value: 178.58,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  duration: {
    text: 'text6',
    value: 224.48,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

