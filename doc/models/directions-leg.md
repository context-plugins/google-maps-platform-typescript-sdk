
# Directions Leg

*This model accepts additional fields of type unknown.*

## Structure

`DirectionsLeg`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `arrivalTime` | [`ArrivalTime \| undefined`](../../doc/models/arrival-time.md) | Optional | - |
| `departureTime` | [`DepartureTime \| undefined`](../../doc/models/departure-time.md) | Optional | - |
| `distance` | [`Distance \| undefined`](../../doc/models/distance.md) | Optional | - |
| `duration` | [`Duration \| undefined`](../../doc/models/duration.md) | Optional | - |
| `durationInTraffic` | [`DurationInTraffic \| undefined`](../../doc/models/duration-in-traffic.md) | Optional | - |
| `endAddress` | `string` | Required | Contains the human-readable address (typically a street address) from reverse geocoding the `end_location` of this leg. This content is meant to be read as-is. Do not programmatically parse the formatted address. |
| `endLocation` | [`EndLocation`](../../doc/models/end-location.md) | Required | - |
| `startAddress` | `string` | Required | Contains the human-readable address (typically a street address) resulting from reverse geocoding the `start_location` of this leg. This content is meant to be read as-is. Do not programmatically parse the formatted address. |
| `startLocation` | [`StartLocation`](../../doc/models/start-location.md) | Required | - |
| `steps` | [`DirectionsStep[]`](../../doc/models/directions-step.md) | Required | An array of steps denoting information about each separate step of the leg of the journey. |
| `trafficSpeedEntry` | [`DirectionsTrafficSpeedEntry[]`](../../doc/models/directions-traffic-speed-entry.md) | Required | Information about traffic speed along the leg. |
| `viaWaypoint` | [`DirectionsViaWaypoint[]`](../../doc/models/directions-via-waypoint.md) | Required | The locations of via waypoints along this leg. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DirectionsLeg, Maneuver, TravelMode } from 'googlemapsplatform';

const directionsLeg: DirectionsLeg = {
  endAddress: 'end_address0',
  endLocation: {
    lat: 207.76,
    lng: 215.7,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  startAddress: 'start_address2',
  startLocation: {
    lat: 108.44,
    lng: 59.02,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  steps: [
    {
      duration: {
        text: 'text6',
        value: 224.48,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      endLocation: {
        lat: 207.76,
        lng: 215.7,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      htmlInstructions: 'html_instructions6',
      polyline: {
        points: 'chnwEbderQ?XR@D?@?',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      startLocation: {
        lat: 108.44,
        lng: 59.02,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      travelMode: TravelMode.Transit,
      distance: {
        text: 'text0',
        value: 142.22,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      maneuver: Maneuver.Turnslightleft,
      transitDetails: {
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
        headsign: 'headsign6',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      steps: { 'key1': 'val1', 'key2': 'val2' },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  trafficSpeedEntry: [
    {
      speedCategory: 'speed_category6',
      offsetMeters: 59.06,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  viaWaypoint: [
    {
      location: {
        lat: 205.22,
        lng: 218.24,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      stepIndex: 140,
      stepInterpolation: 36.54,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  arrivalTime: {
    text: 'text4',
    value: 165.86,
    timeZone: 'time_zone6',
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
  distance: {
    text: 'text0',
    value: 142.22,
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
  durationInTraffic: {
    text: 'text6',
    value: 178.58,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

