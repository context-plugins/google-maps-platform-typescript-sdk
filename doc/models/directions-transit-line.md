
# Directions Transit Line

*This model accepts additional fields of type unknown.*

## Structure

`DirectionsTransitLine`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `agencies` | [`DirectionsTransitAgency[]`](../../doc/models/directions-transit-agency.md) | Required | The transit agency (or agencies) that operates this transit line. |
| `color` | `string \| undefined` | Optional | The color commonly used in signage for this line. |
| `name` | `string` | Required | The full name of this transit line, e.g. "8 Avenue Local". |
| `shortName` | `string \| undefined` | Optional | The short name of this transit line. This will normally be a line number, such as "M7" or "355". |
| `textColor` | `string \| undefined` | Optional | The color commonly used in signage for this line. |
| `url` | `string \| undefined` | Optional | Contains the URL for this transit line as provided by the transit agency. |
| `icon` | `string \| undefined` | Optional | Contains the URL for the icon associated with this line. |
| `vehicle` | [`DirectionsTransitVehicle \| undefined`](../../doc/models/directions-transit-vehicle.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DirectionsTransitLine } from 'google-maps-platformlib';

const directionsTransitLine: DirectionsTransitLine = {
  agencies: [
    {
      name: 'name8',
      phone: 'phone2',
      url: 'url2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  name: 'name6',
  color: '#ce8e00',
  shortName: 'short_name2',
  textColor: '#121212',
  url: 'url0',
  icon: 'icon8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

