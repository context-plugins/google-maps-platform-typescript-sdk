
# Polyline

*This model accepts additional fields of type unknown.*

## Structure

`Polyline`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `points` | `string` | Required | A single string representation of the polyline. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Polyline } from 'google-maps-platformlib';

const polyline: Polyline = {
  points: 'chnwEbderQ?XR@D?@?',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

