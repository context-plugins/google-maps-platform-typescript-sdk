
# Location 6

*This model accepts additional fields of type unknown.*

## Structure

`Location6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `latitude` | `number` | Required | Latitude in decimal degrees |
| `longitude` | `number` | Required | Longitude in decimal degrees |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Location6 } from 'googlemapsplatform';

const location6: Location6 = {
  latitude: 248.24,
  longitude: 5.56,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

