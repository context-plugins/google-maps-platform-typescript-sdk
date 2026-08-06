
# Duration in Traffic

*This model accepts additional fields of type unknown.*

## Structure

`DurationInTraffic`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string` | Required | String value. |
| `value` | `number` | Required | Numeric value. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DurationInTraffic } from 'googlemapsplatform';

const durationInTraffic: DurationInTraffic = {
  text: 'text8',
  value: 78.6,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

