
# Error Detail

*This model accepts additional fields of type unknown.*

## Structure

`ErrorDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mType` | `string \| undefined` | Optional | The type of error. |
| `message` | `string \| undefined` | Optional | A short description of the error. |
| `reason` | `string \| undefined` | Optional | A reason for the error. |
| `domain` | `string \| undefined` | Optional | The domain in which the error occurred. |
| `metadata` | `unknown \| undefined` | Optional | Additional metadata about the error. |
| `fieldViolations` | [`FieldViolation[] \| undefined`](../../doc/models/field-violation.md) | Optional | A list of field violations. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ErrorDetail } from 'google-maps-platformlib';

const errorDetail: ErrorDetail = {
  mType: '@type6',
  message: 'API key not valid. Please pass a valid API key.',
  reason: 'badRequest',
  domain: 'global',
  metadata: { 'key1': 'val1', 'key2': 'val2' },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

