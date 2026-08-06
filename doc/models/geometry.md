
# Geometry

An object describing the location.

*This model accepts additional fields of type unknown.*

## Structure

`Geometry`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `location` | [`Location`](../../doc/models/location.md) | Required | - |
| `viewport` | [`Viewport`](../../doc/models/viewport.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Geometry } from 'googlemapsplatform';

const geometry: Geometry = {
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
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

