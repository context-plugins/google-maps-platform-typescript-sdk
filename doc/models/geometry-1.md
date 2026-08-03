
# Geometry 1

*This model accepts additional fields of type unknown.*

## Structure

`Geometry1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `location` | [`Location`](../../doc/models/location.md) | Required | - |
| `bounds` | [`Bounds1 \| undefined`](../../doc/models/bounds-1.md) | Optional | - |
| `viewport` | [`Viewport`](../../doc/models/viewport.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Geometry1 } from 'google-maps-platformlib';

const geometry1: Geometry1 = {
  location: {
    lat: 205.22,
    lng: 218.24,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  viewport: {
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
  },
  bounds: {
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
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

