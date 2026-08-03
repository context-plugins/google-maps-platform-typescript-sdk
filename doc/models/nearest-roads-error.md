
# Nearest Roads Error

*This model accepts additional fields of type unknown.*

## Structure

`NearestRoadsError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `number` | Required | This is the same as the HTTP status of the response. |
| `message` | `string` | Required | A short description of the error. |
| `status` | `string` | Required | An error such as `INVALID_ARGUMENT`. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NearestRoadsError } from 'google-maps-platformlib';

const nearestRoadsError: NearestRoadsError = {
  code: 161.28,
  message: 'message0',
  status: 'status2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

