
# Inputtype 1

The type of input. This can be one of either `textquery` or `phonenumber`. Phone numbers must be in international format (prefixed by a plus sign ("+"), followed by the country code, then the phone number itself). See [E.164 ITU recommendation](https://en.wikipedia.org/wiki/E.164) for more information.

## Enumeration

`Inputtype1`

## Fields

| Name |
|  --- |
| `Textquery` |
| `Phonenumber` |

## Example

```ts
import { Inputtype1 } from 'google-maps-platformlib';

const inputtype1 = Inputtype1.Textquery;
```

