
# Place Autocomplete Term

*This model accepts additional fields of type unknown.*

## Structure

`PlaceAutocompleteTerm`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `value` | `string` | Required | The text of the term. |
| `offset` | `number` | Required | Defines the start position of this term in the description, measured in Unicode characters |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlaceAutocompleteTerm } from 'googlemapsplatform';

const placeAutocompleteTerm: PlaceAutocompleteTerm = {
  value: 'value0',
  offset: 30.12,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

