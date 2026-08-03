
# Location

*This model accepts additional fields of type unknown.*

## Structure

`Location`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lat` | `number` | Required | Latitude in decimal degrees |
| `lng` | `number` | Required | Longitude in decimal degrees |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Location } from 'google-maps-platformlib';

const location: Location = {
  lat: 205.22,
  lng: 218.24,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

