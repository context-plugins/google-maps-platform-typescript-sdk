
# Directions Transit Vehicle

*This model accepts additional fields of type unknown.*

## Structure

`DirectionsTransitVehicle`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `icon` | `string \| undefined` | Optional | Contains the URL for an icon associated with this vehicle type. |
| `localIcon` | `string \| undefined` | Optional | Contains the URL for the icon associated with this vehicle type, based on the local transport signage. |
| `name` | `string` | Required | The name of this vehicle, capitalized. |
| `vehicleType` | [`VehicleType \| undefined`](../../doc/models/vehicle-type.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  DirectionsTransitVehicle,
  VehicleType,
} from 'google-maps-platformlib';

const directionsTransitVehicle: DirectionsTransitVehicle = {
  name: 'Train',
  icon: 'icon8',
  localIcon: 'local_icon4',
  vehicleType: VehicleType.Bus,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

