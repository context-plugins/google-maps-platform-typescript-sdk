
# Field Violation

*This model accepts additional fields of type unknown.*

## Structure

`FieldViolation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `field` | `string` | Required | The name of the invalid field. |
| `description` | `string` | Required | A short description of the error. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FieldViolation } from 'googlemapsplatform';

const fieldViolation: FieldViolation = {
  field: 'field2',
  description: 'description8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

