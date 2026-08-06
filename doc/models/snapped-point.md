
# Snapped Point

*This model accepts additional fields of type unknown.*

## Structure

`SnappedPoint`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `location` | [`Location6`](../../doc/models/location-6.md) | Required | - |
| `originalIndex` | `number \| undefined` | Optional | An integer that indicates the corresponding value in the original request. Each value in the request should map to a snapped value in the response. However, if you've set interpolate=true or if you're using nearest roads, then it's possible that the response will contain more coordinates than the request. Interpolated values will not have an `originalIndex`. These values are indexed from `0`, so a point with an originalIndex of `4` will be the snapped value of the 5th latitude/longitude passed to the path parameter. Nearest Roads points may contain several points for single coordinates with differing location or placeId. |
| `placeId` | `string` | Required | A unique identifier for a place. All place IDs returned by the Roads API correspond to road segments. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SnappedPoint } from 'googlemapsplatform';

const snappedPoint: SnappedPoint = {
  location: {
    latitude: 194.62,
    longitude: 59.18,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  placeId: 'placeId2',
  originalIndex: 209.16,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

