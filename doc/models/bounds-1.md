
# Bounds 1

*This model accepts additional fields of type unknown.*

## Structure

`Bounds1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `northeast` | [`Northeast`](../../doc/models/northeast.md) | Required | - |
| `southwest` | [`Southwest`](../../doc/models/southwest.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Bounds1 } from 'googlemapsplatform';

const bounds1: Bounds1 = {
  northeast: {
    lat: 194.96,
    lng: 27.5,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  southwest: {
    lat: 1.22,
    lng: 166.24,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

