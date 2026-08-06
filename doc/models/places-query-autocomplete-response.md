
# Places Query Autocomplete Response

*This model accepts additional fields of type unknown.*

## Structure

`PlacesQueryAutocompleteResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `predictions` | [`PlaceAutocompletePrediction[]`](../../doc/models/place-autocomplete-prediction.md) | Required | Contains an array of predictions. |
| `status` | [`PlacesAutocompleteStatus`](../../doc/models/places-autocomplete-status.md) | Required | - |
| `errorMessage` | `string \| undefined` | Optional | When the service returns a status code other than `OK`, there may be an additional `error_message` field within the response object. This field contains more detailed information about thereasons behind the given status code. This field is not always returned, and its content is subject to change. |
| `infoMessages` | `string[] \| undefined` | Optional | When the service returns additional information about the request specification, there may be an additional `info_messages` field within the response object. This field is only returned for successful requests. It may not always be returned, and its content is subject to change. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  PlacesAutocompleteStatus,
  PlacesQueryAutocompleteResponse,
} from 'googlemapsplatform';

const placesQueryAutocompleteResponse: PlacesQueryAutocompleteResponse = {
  predictions: [
    {
      description: 'Paris, France',
      matchedSubstrings: [
        {
          length: 200.82,
          offset: 96.92,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      structuredFormatting: {
        mainText: 'main_text6',
        mainTextMatchedSubstrings: [
          {
            length: 174.72,
            offset: 22.62,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        ],
        secondaryText: 'secondary_text2',
        secondaryTextMatchedSubstrings: [
          {
            length: 26.26,
            offset: 178.36,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          {
            length: 26.26,
            offset: 178.36,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        ],
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      terms: [
        {
          value: 'value0',
          offset: 246.22,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      placeId: 'place_id8',
      reference: 'reference6',
      types: [
        'types7',
        'types8',
        'types9'
      ],
      distanceMeters: 202,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  status: PlacesAutocompleteStatus.Ok,
  errorMessage: 'error_message6',
  infoMessages: [
    'info_messages0'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

