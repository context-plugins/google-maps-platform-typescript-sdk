
# Start Location

*This model accepts additional fields of type unknown.*

## Structure

`StartLocation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lat` | `number` | Required | Latitude in decimal degrees |
| `lng` | `number` | Required | Longitude in decimal degrees |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { StartLocation } from 'google-maps-platformlib';

const startLocation: StartLocation = {
  lat: 59.32,
  lng: 108.14,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

