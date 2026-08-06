
# Fare 1

*This model accepts additional fields of type unknown.*

## Structure

`Fare1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | An [ISO 4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) indicating the currency that the amount is expressed in. |
| `value` | `number` | Required | The total fare amount, in the currency specified. |
| `text` | `string` | Required | The total fare amount, formatted in the requested language. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Fare1 } from 'googlemapsplatform';

const fare1: Fare1 = {
  currency: 'USD',
  value: 89.3,
  text: '$6.00',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

