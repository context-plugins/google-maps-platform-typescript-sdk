
# Nearest Roads Error Response

*This model accepts additional fields of type unknown.*

## Structure

`NearestRoadsErrorResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `error` | [`NearestRoadsError \| undefined`](../../doc/models/nearest-roads-error.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NearestRoadsErrorResponse } from 'googlemapsplatform';

const nearestRoadsErrorResponse: NearestRoadsErrorResponse = {
  error: {
    code: 238.32,
    message: 'message4',
    status: 'status6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

