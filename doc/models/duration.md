
# Duration

*This model accepts additional fields of type unknown.*

## Structure

`Duration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string` | Required | String value. |
| `value` | `number` | Required | Numeric value. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Duration } from 'googlemapsplatform';

const duration: Duration = {
  text: 'text6',
  value: 224.48,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

