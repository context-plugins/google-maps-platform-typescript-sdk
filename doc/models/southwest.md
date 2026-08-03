
# Southwest

*This model accepts additional fields of type unknown.*

## Structure

`Southwest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lat` | `number` | Required | Latitude in decimal degrees |
| `lng` | `number` | Required | Longitude in decimal degrees |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Southwest } from 'google-maps-platformlib';

const southwest: Southwest = {
  lat: 1.22,
  lng: 166.24,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

