
# Geocoding Response

*This model accepts additional fields of type unknown.*

## Structure

`GeocodingResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `plusCode` | [`PlusCode1 \| undefined`](../../doc/models/plus-code-1.md) | Optional | - |
| `results` | [`GeocodingResult[]`](../../doc/models/geocoding-result.md) | Required | - |
| `status` | [`GeocodingStatus`](../../doc/models/geocoding-status.md) | Required | - |
| `errorMessage` | `string \| undefined` | Optional | A short description of the error. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GeocodingResponse, GeocodingStatus } from 'google-maps-platformlib';

const geocodingResponse: GeocodingResponse = {
  results: [
    {
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
      formattedAddress: 'formatted_address8',
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
      placeId: 'place_id0',
      types: [
        'types5',
        'types6',
        'types7'
      ],
      plusCode: {
        globalCode: 'global_code4',
        compoundCode: 'compound_code2',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      postcodeLocalities: [
        'postcode_localities9'
      ],
      partialMatch: false,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  status: GeocodingStatus.OverQueryLimit,
  plusCode: {
    globalCode: 'global_code4',
    compoundCode: 'compound_code2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  errorMessage: 'Invalid request. Missing the `address`, `components`, `latlng` or `place_id` parameter.',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

