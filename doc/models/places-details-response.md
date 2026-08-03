
# Places Details Response

*This model accepts additional fields of type unknown.*

## Structure

`PlacesDetailsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `htmlAttributions` | `string[]` | Required | May contain a set of attributions about this listing which must be displayed to the user (some listings may not have attribution). |
| `result` | [`Result2`](../../doc/models/result-2.md) | Required | - |
| `status` | [`PlacesDetailsStatus`](../../doc/models/places-details-status.md) | Required | - |
| `infoMessages` | `string[] \| undefined` | Optional | When the service returns additional information about the request specification, there may be an additional `info_messages` field within the response object. This field is only returned for successful requests. It may not always be returned, and its content is subject to change. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  BusinessStatus,
  PlacesDetailsResponse,
  PlacesDetailsStatus,
} from 'google-maps-platformlib';

const placesDetailsResponse: PlacesDetailsResponse = {
  htmlAttributions: [
    'html_attributions9',
    'html_attributions0'
  ],
  result: {
    addressComponents: [
      {
        longName: 'long_name4',
        shortName: 'short_name0',
        types: [
          'types7',
          'types8'
        ],
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        longName: 'long_name4',
        shortName: 'short_name0',
        types: [
          'types7',
          'types8'
        ],
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    adrAddress: '<span class="street-address">48 Pirrama Rd</span>, <span class="locality">Pyrmont</span> <span class="region">NSW</span> <span class="postal-code">2009</span>, <span class="country-name">Australia</span>',
    businessStatus: BusinessStatus.Operational,
    curbsidePickup: false,
    currentOpeningHours: {
      openNow: false,
      periods: [
        {
          open: {
            day: 0.52,
            time: 'time4',
            date: 'date8',
            truncated: false,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          close: {
            day: 26.5,
            time: 'time8',
            date: 'date4',
            truncated: false,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      specialDays: [
        {
          date: 'date4',
          exceptionalHours: false,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          date: 'date4',
          exceptionalHours: false,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      type: 'type0',
      weekdayText: [
        'weekday_text5',
        'weekday_text6',
        'weekday_text7'
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    formattedAddress: '48 Pirrama Rd, Pyrmont NSW 2009, Australia',
    formattedPhoneNumber: '(02) 9374 4000',
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png',
    internationalPhoneNumber: '+61 2 9374 4000',
    name: 'Google Workplace 6',
    placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
    rating: 4.1,
    types: [
      'point_of_interest',
      'establishment'
    ],
    url: 'https://maps.google.com/?cid=10281119596374313554',
    userRatingsTotal: 931,
    utcOffset: 600,
    vicinity: '48 Pirrama Road, Pyrmont',
    website: 'http://google.com',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  status: PlacesDetailsStatus.NotFound,
  infoMessages: [
    'info_messages8',
    'info_messages9'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

