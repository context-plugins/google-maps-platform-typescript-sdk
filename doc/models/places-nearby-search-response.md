
# Places Nearby Search Response

*This model accepts additional fields of type unknown.*

## Structure

`PlacesNearbySearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `htmlAttributions` | `string[]` | Required | May contain a set of attributions about this listing which must be displayed to the user (some listings may not have attribution). |
| `results` | [`Place[]`](../../doc/models/place.md) | Required | Contains an array of places.<br><br><div class="caution">Place Search requests return a subset of the fields that are returned by Place Details requests. If the field you want is not returned by Place Search, you can use Place Search to get a `place_id`, then use that Place ID to make a Place Details request.</div><br> |
| `status` | [`PlacesSearchStatus`](../../doc/models/places-search-status.md) | Required | - |
| `errorMessage` | `string \| undefined` | Optional | When the service returns a status code other than `OK<`, there may be an additional `error_message` field within the response object. This field contains more detailed information about thereasons behind the given status code. This field is not always returned, and its content is subject to change. |
| `infoMessages` | `string[] \| undefined` | Optional | When the service returns additional information about the request specification, there may be an additional `info_messages` field within the response object. This field is only returned for successful requests. It may not always be returned, and its content is subject to change. |
| `nextPageToken` | `string \| undefined` | Optional | Contains a token that can be used to return up to 20 additional results. A next_page_token will not be returned if there are no additional results to display. The maximum number of results that can be returned is 60. There is a short delay between when a next_page_token is issued, and when it will become valid. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  BusinessStatus,
  PlacesNearbySearchResponse,
  PlacesSearchStatus,
} from 'googlemapsplatform';

const placesNearbySearchResponse: PlacesNearbySearchResponse = {
  htmlAttributions: [
    'html_attributions7'
  ],
  results: [
    {
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
      businessStatus: BusinessStatus.ClosedPermanently,
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
    }
  ],
  status: PlacesSearchStatus.Ok,
  errorMessage: 'error_message2',
  infoMessages: [
    'info_messages6'
  ],
  nextPageToken: 'next_page_token6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

