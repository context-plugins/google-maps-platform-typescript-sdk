
# Lat Lng Literal

An object describing a specific location with Latitude and Longitude in decimal degrees.

*This model accepts additional fields of type unknown.*

## Structure

`LatLngLiteral`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lat` | `number` | Required | Latitude in decimal degrees |
| `lng` | `number` | Required | Longitude in decimal degrees |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { LatLngLiteral } from 'googlemapsplatform';

const latLngLiteral: LatLngLiteral = {
  lat: 112.84,
  lng: 54.62,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

