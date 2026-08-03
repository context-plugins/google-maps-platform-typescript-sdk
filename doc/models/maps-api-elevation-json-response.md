
# Maps Api Elevation Json Response

*This model accepts additional fields of type unknown.*

## Structure

`MapsApiElevationJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorMessage` | `string \| undefined` | Optional | When the service returns a status code other than `OK<`, there may be an additional `error_message` field within the response object. This field contains more detailed information about thereasons behind the given status code. This field is not always returned, and its content is subject to change. |
| `status` | [`ElevationStatus`](../../doc/models/elevation-status.md) | Required | - |
| `results` | [`Result[]`](../../doc/models/result.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ElevationStatus,
  MapsApiElevationJsonResponse,
} from 'google-maps-platformlib';

const mapsApiElevationJsonResponse: MapsApiElevationJsonResponse = {
  status: ElevationStatus.DataNotAvailable,
  results: [
    {
      elevation: 164.98,
      resolution: 23.6,
      location: {
        lat: 205.22,
        lng: 218.24,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
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

