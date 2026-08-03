
# Result

*This model accepts additional fields of type unknown.*

## Structure

`Result`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `elevation` | `number \| undefined` | Optional | - |
| `resolution` | `number \| undefined` | Optional | - |
| `location` | [`Location \| undefined`](../../doc/models/location.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Result } from 'google-maps-platformlib';

const result: Result = {
  elevation: 224.48,
  resolution: 35.9,
  location: {
    lat: 205.22,
    lng: 218.24,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

