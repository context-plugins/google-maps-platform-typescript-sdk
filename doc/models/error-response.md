
# Error Response

In the case of an error, a standard format error response body will be returned and the HTTP status code will be set to an error status. The response contains an object with a single error object.

*This model accepts additional fields of type unknown.*

## Structure

`ErrorResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `error` | [`ErrorObject`](../../doc/models/error-object.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ErrorResponse } from 'google-maps-platformlib';

const errorResponse: ErrorResponse = {
  error: {
    code: 400,
    message: 'API key not valid. Please pass a valid API key.',
    errors: [
      {
        mType: '@type2',
        message: 'API key not valid. Please pass a valid API key.',
        reason: 'badRequest',
        domain: 'global',
        metadata: { 'key1': 'val1', 'key2': 'val2' },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    status: 'INVALID_ARGUMENT',
    details: [
      {
        mType: 'type.googleapis.com/google.rpc.ErrorInfo',
        message: 'message0',
        reason: 'API_KEY_INVALID',
        domain: 'googleapis.com',
        metadata: { 'service': 'geolocation.googleapis.com' },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

