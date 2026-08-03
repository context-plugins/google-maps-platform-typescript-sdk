
# Bounds

A rectangle in geographical coordinates from points at the southwest and northeast corners.

*This model accepts additional fields of type unknown.*

## Structure

`Bounds`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `northeast` | [`Northeast`](../../doc/models/northeast.md) | Required | - |
| `southwest` | [`Southwest`](../../doc/models/southwest.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Bounds } from 'google-maps-platformlib';

const bounds: Bounds = {
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

