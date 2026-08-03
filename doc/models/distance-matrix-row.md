
# Distance Matrix Row

*This model accepts additional fields of type unknown.*

## Structure

`DistanceMatrixRow`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `elements` | [`DistanceMatrixElement[]`](../../doc/models/distance-matrix-element.md) | Required | When the Distance Matrix API returns results, it places them within a JSON rows array. Even if no results are returned (such as when the origins and/or destinations don't exist), it still returns an empty array.<br><br>Rows are ordered according to the values in the origin parameter of the request. Each row corresponds to an origin, and each element within that row corresponds to a pairing of the origin with a destination value.<br><br>Each row array contains one or more element entries, which in turn contain the information about a single origin-destination pairing. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  DistanceMatrixElementStatus,
  DistanceMatrixRow,
} from 'google-maps-platformlib';

const distanceMatrixRow: DistanceMatrixRow = {
  elements: [
    {
      status: DistanceMatrixElementStatus.Ok,
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

