
# Distance Matrix Response

*This model accepts additional fields of type unknown.*

## Structure

`DistanceMatrixResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `originAddresses` | `string[]` | Required | An array of addresses as returned by the API from your original request. These are formatted by the geocoder and localized according to the language parameter passed with the request. This content is meant to be read as-is. Do not programatically parse the formatted addresses. |
| `destinationAddresses` | `string[]` | Required | An array of addresses as returned by the API from your original request. As with `origin_addresses`, these are localized if appropriate. This content is meant to be read as-is. Do not programatically parse the formatted addresses. |
| `rows` | [`DistanceMatrixRow[]`](../../doc/models/distance-matrix-row.md) | Required | An array of elements, which in turn each contain a `status`, `duration`, and `distance` element. |
| `status` | [`DistanceMatrixStatus`](../../doc/models/distance-matrix-status.md) | Required | - |
| `errorMessage` | `string \| undefined` | Optional | A string containing the human-readable text of any errors encountered while the request was being processed. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  DistanceMatrixElementStatus,
  DistanceMatrixResponse,
  DistanceMatrixStatus,
} from 'googlemapsplatform';

const distanceMatrixResponse: DistanceMatrixResponse = {
  originAddresses: [
    'origin_addresses3',
    'origin_addresses2',
    'origin_addresses1'
  ],
  destinationAddresses: [
    'destination_addresses8',
    'destination_addresses9',
    'destination_addresses0'
  ],
  rows: [
    {
      elements: [
        {
          status: DistanceMatrixElementStatus.Ok,
          fare: {
            currency: 'currency0',
            value: 12.62,
            text: 'text0',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          distance: {
            text: 'text0',
            value: 142.22,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          durationInTraffic: {
            text: 'text6',
            value: 178.58,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          duration: {
            text: 'text6',
            value: 224.48,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  status: DistanceMatrixStatus.RequestDenied,
  errorMessage: 'You have exceeded your rate-limit for this API.',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

