
# Error Object

*This model accepts additional fields of type unknown.*

## Structure

`ErrorObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `number` | Required | This is the same as the HTTP status of the response. |
| `message` | `string` | Required | A short description of the error. |
| `errors` | [`ErrorDetail[]`](../../doc/models/error-detail.md) | Required | A list of errors which occurred. Each error contains an identifier for the type of error and a short description. |
| `status` | `string \| undefined` | Optional | A status code that indicates the error type. |
| `details` | [`ErrorDetail[] \| undefined`](../../doc/models/error-detail.md) | Optional | Additional details about the error. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ErrorObject } from 'google-maps-platformlib';

const errorObject: ErrorObject = {
  code: 56.8,
  message: 'message2',
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
  status: 'status4',
  details: [
    {
      mType: '@type2',
      message: 'message0',
      reason: 'reason6',
      domain: 'domain6',
      metadata: { 'key1': 'val1', 'key2': 'val2' },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

