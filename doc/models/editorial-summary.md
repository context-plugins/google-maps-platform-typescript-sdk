
# Editorial Summary

*This model accepts additional fields of type unknown.*

## Structure

`EditorialSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `overview` | `string \| undefined` | Optional | A medium-length textual summary of the place. |
| `language` | `string \| undefined` | Optional | The language of the previous fields. May not always be present. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EditorialSummary } from 'googlemapsplatform';

const editorialSummary: EditorialSummary = {
  overview: 'overview8',
  language: 'language8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

