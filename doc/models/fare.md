
# Fare

The total fare for the route.

```
{
  "currency" : "USD",
  "value" : 6,
  "text" : "$6.00"
}
```

*This model accepts additional fields of type unknown.*

## Structure

`Fare`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | An [ISO 4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) indicating the currency that the amount is expressed in. |
| `value` | `number` | Required | The total fare amount, in the currency specified. |
| `text` | `string` | Required | The total fare amount, formatted in the requested language. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Fare } from 'googlemapsplatform';

const fare: Fare = {
  currency: 'USD',
  value: 12.62,
  text: '$6.00',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

