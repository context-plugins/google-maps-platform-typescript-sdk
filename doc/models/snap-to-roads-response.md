
# Snap to Roads Response

*This model accepts additional fields of type unknown.*

## Structure

`SnapToRoadsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `snappedPoints` | [`SnappedPoint[] \| undefined`](../../doc/models/snapped-point.md) | Optional | An array of snapped points. |
| `warningMessage` | `string \| undefined` | Optional | A string containing a user-visible warning. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SnapToRoadsResponse } from 'google-maps-platformlib';

const snapToRoadsResponse: SnapToRoadsResponse = {
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
    }
  ],
  warningMessage: 'warningMessage2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

