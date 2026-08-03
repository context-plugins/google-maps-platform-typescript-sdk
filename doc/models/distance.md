
# Distance

*This model accepts additional fields of type unknown.*

## Structure

`Distance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string` | Required | String value. |
| `value` | `number` | Required | Numeric value. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Distance } from 'google-maps-platformlib';

const distance: Distance = {
  text: 'text0',
  value: 142.22,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

