
# Directions Traffic Speed Entry

*This model accepts additional fields of type unknown.*

## Structure

`DirectionsTrafficSpeedEntry`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `speedCategory` | `string` | Required | The current traffic/speed conditions on this portion of a path. |
| `offsetMeters` | `number` | Required | The offset along the path (in meters) up to which this speed category is valid. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DirectionsTrafficSpeedEntry } from 'google-maps-platformlib';

const directionsTrafficSpeedEntry: DirectionsTrafficSpeedEntry = {
  speedCategory: 'speed_category4',
  offsetMeters: 62.94,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

