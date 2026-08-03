
# Latitude Longitude Literal

An object describing a specific location with Latitude and Longitude in decimal degrees.

*This model accepts additional fields of type unknown.*

## Structure

`LatitudeLongitudeLiteral`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `latitude` | `number` | Required | Latitude in decimal degrees |
| `longitude` | `number` | Required | Longitude in decimal degrees |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { LatitudeLongitudeLiteral } from 'google-maps-platformlib';

const latitudeLongitudeLiteral: LatitudeLongitudeLiteral = {
  latitude: 52.42,
  longitude: 201.38,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

