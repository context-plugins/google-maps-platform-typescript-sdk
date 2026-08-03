
# Geocoding Result

*This model accepts additional fields of type unknown.*

## Structure

`GeocodingResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressComponents` | [`AddressComponent[]`](../../doc/models/address-component.md) | Required | An array containing the separate components applicable to this address. |
| `formattedAddress` | `string` | Required | The human-readable address of this location. |
| `geometry` | [`Geometry1`](../../doc/models/geometry-1.md) | Required | - |
| `placeId` | `string` | Required | A unique identifier that can be used with other Google APIs. For example, you can use the `place_id` in a Places API request to get details of a local business, such as phone number, opening hours, user reviews, and more. See the [place ID overview](https://developers.google.com/places/place-id). |
| `plusCode` | [`PlusCode1 \| undefined`](../../doc/models/plus-code-1.md) | Optional | - |
| `types` | `string[]` | Required | The `types[]` array indicates the type of the returned result. This array contains a set of zero or more tags identifying the type of feature returned in the result. For example, a geocode of "Chicago" returns "locality" which indicates that "Chicago" is a city, and also returns "political" which indicates it is a political entity. |
| `postcodeLocalities` | `string[] \| undefined` | Optional | An array denoting all the localities contained in a postal code. This is only present when the result is a postal code that contains multiple localities. |
| `partialMatch` | `boolean \| undefined` | Optional | Indicates that the geocoder did not return an exact match for the original request, though it was able to match part of the requested address. You may wish to examine the original request for misspellings and/or an incomplete address.<br><br>Partial matches most often occur for street addresses that do not exist within the locality you pass in the request. Partial matches may also be returned when a request matches two or more locations in the same locality. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GeocodingResult } from 'google-maps-platformlib';

const geocodingResult: GeocodingResult = {
  addressComponents: [
    {
      longName: 'Council of the City of Sydney',
      shortName: 'Sydney',
      types: [
        'administrative_area_level_2',
        'political'
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  formattedAddress: 'formatted_address0',
  geometry: {
    location: {
      lat: 205.22,
      lng: 218.24,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    viewport: {
      northeast: {
        lat: 194.96,
        lng: 27.5,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      southwest: {
        lat: 1.22,
        lng: 166.24,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    bounds: {
      northeast: {
        lat: 194.96,
        lng: 27.5,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      southwest: {
        lat: 1.22,
        lng: 166.24,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  placeId: 'place_id8',
  types: [
    'types7',
    'types8',
    'types9'
  ],
  plusCode: {
    globalCode: 'global_code4',
    compoundCode: 'compound_code2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  postcodeLocalities: [
    'postcode_localities1'
  ],
  partialMatch: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

