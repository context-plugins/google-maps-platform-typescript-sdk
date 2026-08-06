
# Transit Details

*This model accepts additional fields of type unknown.*

## Structure

`TransitDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `arrivalStop` | [`DirectionsTransitStop \| undefined`](../../doc/models/directions-transit-stop.md) | Optional | - |
| `arrivalTime` | [`ArrivalTime \| undefined`](../../doc/models/arrival-time.md) | Optional | - |
| `departureStop` | [`DirectionsTransitStop \| undefined`](../../doc/models/directions-transit-stop.md) | Optional | - |
| `departureTime` | [`DepartureTime \| undefined`](../../doc/models/departure-time.md) | Optional | - |
| `headsign` | `string \| undefined` | Optional | Specifies the direction in which to travel on this line, as it is marked on the vehicle or at the departure stop. This will often be the terminus station. |
| `headway` | `number \| undefined` | Optional | Specifies the expected number of seconds between departures from the same stop at this time. For example, with a `headway` value of 600, you would expect a ten minute wait if you should miss your bus. |
| `line` | [`DirectionsTransitLine \| undefined`](../../doc/models/directions-transit-line.md) | Optional | - |
| `numStops` | `number \| undefined` | Optional | The number of stops from the departure to the arrival stop. This includes the arrival stop, but not the departure stop. For example, if your directions involve leaving from Stop A, passing through stops B and C, and arriving at stop D, `num_stops` will return 3. |
| `tripShortName` | `string \| undefined` | Optional | The text that appears in schedules and sign boards to identify a transit trip to passengers. The text should uniquely identify a trip within a service day. For example, "538" is the `trip_short_name` of the Amtrak train that leaves San Jose, CA at 15:10 on weekdays to Sacramento, CA. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TransitDetails } from 'googlemapsplatform';

const transitDetails: TransitDetails = {
  arrivalStop: {
    location: {
      lat: 205.22,
      lng: 218.24,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    name: 'name8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  arrivalTime: {
    text: 'text4',
    value: 165.86,
    timeZone: 'time_zone6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  departureStop: {
    location: {
      lat: 205.22,
      lng: 218.24,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    name: 'name4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  departureTime: {
    text: 'text0',
    value: 77.12,
    timeZone: 'time_zone2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  headsign: 'headsign2',
  tripShortName: '538',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

