
# End Location

*This model accepts additional fields of type unknown.*

## Structure

`EndLocation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lat` | `number` | Required | Latitude in decimal degrees |
| `lng` | `number` | Required | Longitude in decimal degrees |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EndLocation } from 'googlemapsplatform';

const endLocation: EndLocation = {
  lat: 144.96,
  lng: 22.5,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

