
# Northeast

*This model accepts additional fields of type unknown.*

## Structure

`Northeast`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lat` | `number` | Required | Latitude in decimal degrees |
| `lng` | `number` | Required | Longitude in decimal degrees |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Northeast } from 'google-maps-platformlib';

const northeast: Northeast = {
  lat: 194.96,
  lng: 27.5,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

