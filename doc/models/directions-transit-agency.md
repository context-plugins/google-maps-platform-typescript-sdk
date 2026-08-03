
# Directions Transit Agency

*This model accepts additional fields of type unknown.*

## Structure

`DirectionsTransitAgency`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of this transit agency. |
| `phone` | `string \| undefined` | Optional | The transit agency's phone number. |
| `url` | `string \| undefined` | Optional | The transit agency's URL. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DirectionsTransitAgency } from 'google-maps-platformlib';

const directionsTransitAgency: DirectionsTransitAgency = {
  name: 'name8',
  phone: 'phone2',
  url: 'url2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

