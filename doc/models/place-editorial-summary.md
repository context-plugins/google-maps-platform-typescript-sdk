
# Place Editorial Summary

Contains a summary of the place. A summary is comprised of a textual overview, and also includes the language code for these if applicable. Summary text must be presented as-is and can not be modified or altered.

*This model accepts additional fields of type unknown.*

## Structure

`PlaceEditorialSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `overview` | `string \| undefined` | Optional | A medium-length textual summary of the place. |
| `language` | `string \| undefined` | Optional | The language of the previous fields. May not always be present. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlaceEditorialSummary } from 'google-maps-platformlib';

const placeEditorialSummary: PlaceEditorialSummary = {
  overview: 'overview2',
  language: 'language2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

