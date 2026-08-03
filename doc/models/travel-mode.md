
# Travel Mode

- `DRIVING` (default) indicates calculation using the road network.
- `BICYCLING` requests calculation for bicycling via bicycle paths & preferred streets (where available).
- `TRANSIT` requests calculation via public transit routes (where available).
- `WALKING` requests calculation for walking via pedestrian paths & sidewalks (where available).

## Enumeration

`TravelMode`

## Fields

| Name |
|  --- |
| `Driving` |
| `Bicycling` |
| `Transit` |
| `Walking` |

## Example

```ts
import { TravelMode } from 'google-maps-platformlib';

const travelMode = TravelMode.Transit;
```

