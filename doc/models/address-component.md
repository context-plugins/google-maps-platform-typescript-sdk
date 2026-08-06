
# Address Component

*This model accepts additional fields of type unknown.*

## Structure

`AddressComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `longName` | `string` | Required | The full text description or name of the address component as returned by the Geocoder. |
| `shortName` | `string` | Required | An abbreviated textual name for the address component, if available. For example, an address component for the state of Alaska may have a long_name of "Alaska" and a short_name of "AK" using the 2-letter postal abbreviation. |
| `types` | `string[]` | Required | An array indicating the type of the address component. See the list of [supported types](https://developers.google.com/maps/documentation/places/web-service/supported_types). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AddressComponent } from 'googlemapsplatform';

const addressComponent: AddressComponent = {
  longName: 'Council of the City of Sydney',
  shortName: 'Sydney',
  types: [
    'administrative_area_level_2',
    'political'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

