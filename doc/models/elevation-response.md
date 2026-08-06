
# Elevation Response

*This model accepts additional fields of type unknown.*

## Structure

`ElevationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorMessage` | `string \| undefined` | Optional | When the service returns a status code other than `OK`, there may be an additional `error_message` field within the response object. This field contains more detailed information about thereasons behind the given status code. This field is not always returned, and its content is subject to change. |
| `status` | [`ElevationStatus`](../../doc/models/elevation-status.md) | Required | - |
| `results` | [`ElevationResult[]`](../../doc/models/elevation-result.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ElevationResponse, ElevationStatus } from 'googlemapsplatform';

const elevationResponse: ElevationResponse = {
  status: ElevationStatus.OverDailyLimit,
  results: [
    {
      elevation: 164.98,
      location: {
        lat: 205.22,
        lng: 218.24,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      resolution: 23.6,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  errorMessage: 'Invalid request. Invalid \'locations\' parameter.',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

