
# Vehicle Type

The type of vehicle used.

* `BUS` -	Bus.
* `CABLE_CAR` -	A vehicle that operates on a cable, usually on the ground. Aerial cable cars may be of the type GONDOLA_LIFT.
* `COMMUTER_TRAIN` -	Commuter rail.
* `FERRY` -	Ferry.
* `FUNICULAR` -	A vehicle that is pulled up a steep incline by a cable. A Funicular typically consists of two cars, with each car acting as a counterweight for the other.
* `GONDOLA_LIFT` -	An aerial cable car.
* `HEAVY_RAIL` -	Heavy rail.
* `HIGH_SPEED_TRAIN` -	High speed train.
* `INTERCITY_BUS` -	Intercity bus.
* `LONG_DISTANCE_TRAIN` -	Long distance train.
* `METRO_RAIL` -	Light rail transit.
* `MONORAIL` -	Monorail.
* `OTHER` -	All other vehicles will return this type.
* `RAIL` -	Rail.
* `SHARE_TAXI` -	Share taxi is a kind of bus with the ability to drop off and pick up passengers anywhere on its route.
* `SUBWAY` -	Underground light rail.
* `TRAM` -	Above ground light rail.
* `TROLLEYBUS` -	Trolleybus.

## Enumeration

`VehicleType`

## Fields

| Name |
|  --- |
| `Bus` |
| `CableCar` |
| `CommuterTrain` |
| `Ferry` |
| `Funicular` |
| `GondolaLift` |
| `HeavyRail` |
| `HighSpeedTrain` |
| `IntercityBus` |
| `LongDistanceTrain` |
| `MetroRail` |
| `Monorail` |
| `Other` |
| `Rail` |
| `ShareTaxi` |
| `Subway` |
| `Tram` |
| `Trolleybus` |

## Example

```ts
import { VehicleType } from 'google-maps-platformlib';

const vehicleType = VehicleType.CommuterTrain;
```

