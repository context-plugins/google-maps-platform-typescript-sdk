
# Street View Response

*This model accepts additional fields of type unknown.*

## Structure

`StreetViewResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `copyright` | `string \| undefined` | Optional | Contains the copyright notices associated with this panorama. |
| `date` | `string \| undefined` | Optional | A string indicating year and month that the panorama was captured. |
| `location` | [`Location \| undefined`](../../doc/models/location.md) | Optional | - |
| `panoId` | `string \| undefined` | Optional | A specific panorama ID. These are generally stable, though panoramas may change ID over time as imagery is refreshed. |
| `status` | [`StreetViewStatus`](../../doc/models/street-view-status.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  StreetViewResponse,
  StreetViewStatus,
} from 'google-maps-platformlib';

const streetViewResponse: StreetViewResponse = {
  status: StreetViewStatus.InvalidRequest,
  copyright: 'copyright4',
  date: 'date2',
  location: {
    lat: 205.22,
    lng: 218.24,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  panoId: 'tu510ie_z4ptBZYo2BGEJg',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

