
# Directions Transit Stop

*This model accepts additional fields of type unknown.*

## Structure

`DirectionsTransitStop`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `location` | [`Location`](../../doc/models/location.md) | Required | - |
| `name` | `string` | Required | The name of the transit stop. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DirectionsTransitStop } from 'googlemapsplatform';

const directionsTransitStop: DirectionsTransitStop = {
  location: {
    lat: 205.22,
    lng: 218.24,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  name: 'name6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

