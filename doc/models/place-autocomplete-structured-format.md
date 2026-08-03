
# Place Autocomplete Structured Format

*This model accepts additional fields of type unknown.*

## Structure

`PlaceAutocompleteStructuredFormat`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mainText` | `string` | Required | Contains the main text of a prediction, usually the name of the place. |
| `mainTextMatchedSubstrings` | [`PlaceAutocompleteMatchedSubstring[]`](../../doc/models/place-autocomplete-matched-substring.md) | Required | Contains an array with `offset` value and `length`. These describe the location of the entered term in the prediction result text, so that the term can be highlighted if desired. |
| `secondaryText` | `string \| undefined` | Optional | Contains the secondary text of a prediction, usually the location of the place. |
| `secondaryTextMatchedSubstrings` | [`PlaceAutocompleteMatchedSubstring[] \| undefined`](../../doc/models/place-autocomplete-matched-substring.md) | Optional | Contains an array with `offset` value and `length`. These describe the location of the entered term in the prediction result text, so that the term can be highlighted if desired. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlaceAutocompleteStructuredFormat } from 'google-maps-platformlib';

const placeAutocompleteStructuredFormat: PlaceAutocompleteStructuredFormat = {
  mainText: 'main_text4',
  mainTextMatchedSubstrings: [
    {
      length: 174.72,
      offset: 22.62,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  secondaryText: 'secondary_text0',
  secondaryTextMatchedSubstrings: [
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
};
```

