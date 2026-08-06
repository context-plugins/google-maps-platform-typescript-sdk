
# Text Value Object

An object containing a numeric value and its formatted text representation.

*This model accepts additional fields of type unknown.*

## Structure

`TextValueObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string` | Required | String value. |
| `value` | `number` | Required | Numeric value. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TextValueObject } from 'googlemapsplatform';

const textValueObject: TextValueObject = {
  text: 'text4',
  value: 124.46,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

