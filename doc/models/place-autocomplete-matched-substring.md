
# Place Autocomplete Matched Substring

*This model accepts additional fields of type unknown.*

## Structure

`PlaceAutocompleteMatchedSubstring`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `length` | `number` | Required | Length of the matched substring in the prediction result text. |
| `offset` | `number` | Required | Start location of the matched substring in the prediction result text. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlaceAutocompleteMatchedSubstring } from 'googlemapsplatform';

const placeAutocompleteMatchedSubstring: PlaceAutocompleteMatchedSubstring = {
  length: 242.24,
  offset: 138.34,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

