
# Place Autocomplete Prediction

*This model accepts additional fields of type unknown.*

## Structure

`PlaceAutocompletePrediction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string` | Required | Contains the human-readable name for the returned result. For `establishment` results, this is usually the business name. This content is meant to be read as-is. Do not programmatically parse the formatted address. |
| `matchedSubstrings` | [`PlaceAutocompleteMatchedSubstring[]`](../../doc/models/place-autocomplete-matched-substring.md) | Required | A list of substrings that describe the location of the entered term in the prediction result text, so that the term can be highlighted if desired. |
| `placeId` | `string \| undefined` | Optional | A textual identifier that uniquely identifies a place. To retrieve information about the place, pass this identifier in the placeId field of a Places API request. For more information about place IDs, see the [Place IDs](https://developers.google.com/maps/documentation/places/web-service/place-id) overview. |
| `reference` | `string \| undefined` | Optional | See place_id. |
| `structuredFormatting` | [`PlaceAutocompleteStructuredFormat`](../../doc/models/place-autocomplete-structured-format.md) | Required | - |
| `terms` | [`PlaceAutocompleteTerm[]`](../../doc/models/place-autocomplete-term.md) | Required | Contains an array of terms identifying each section of the returned description (a section of the description is generally terminated with a comma). Each entry in the array has a `value` field, containing the text of the term, and an `offset` field, defining the start position of this term in the description, measured in Unicode characters. |
| `types` | `string[] \| undefined` | Optional | Contains an array of types that apply to this place. For example: `[ "political", "locality" ]` or `[ "establishment", "geocode", "beauty_salon" ]`. The array can contain multiple values. Learn more about [Place types](https://developers.google.com/maps/documentation/places/web-service/supported_types). |
| `distanceMeters` | `number \| undefined` | Optional | The straight-line distance in meters from the origin. This field is only returned for requests made with an `origin`. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlaceAutocompletePrediction } from 'google-maps-platformlib';

const placeAutocompletePrediction: PlaceAutocompletePrediction = {
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
  placeId: 'place_id6',
  reference: 'reference4',
  types: [
    'types9',
    'types0',
    'types1'
  ],
  distanceMeters: 20,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

