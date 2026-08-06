
# Directions Step

Each element in the steps array defines a single step of the calculated directions. A step is the most atomic unit of a direction's route, containing a single step describing a specific, single instruction on the journey. E.g. "Turn left at W. 4th St." The step not only describes the instruction but also contains distance and duration information relating to how this step relates to the following step. For example, a step denoted as "Merge onto I-80 West" may contain a duration of "37 miles" and "40 minutes," indicating that the next step is 37 miles/40 minutes from this step.

When using the Directions API to search for transit directions, the steps array will include additional transit details in the form of a transit_details array. If the directions include multiple modes of transportation, detailed directions will be provided for walking or driving steps in an inner steps array. For example, a walking step will include directions from the start and end locations: "Walk to Innes Ave & Fitch St". That step will include detailed walking directions for that route in the inner steps array, such as: "Head north-west", "Turn left onto Arelious Walker", and "Turn left onto Innes Ave".

*This model accepts additional fields of type unknown.*

## Structure

`DirectionsStep`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `distance` | [`Distance \| undefined`](../../doc/models/distance.md) | Optional | - |
| `duration` | [`Duration`](../../doc/models/duration.md) | Required | - |
| `endLocation` | [`EndLocation`](../../doc/models/end-location.md) | Required | - |
| `htmlInstructions` | `string` | Required | Contains formatted instructions for this step, presented as an HTML text string. This content is meant to be read as-is. Do not programmatically parse this display-only content. |
| `maneuver` | [`Maneuver \| undefined`](../../doc/models/maneuver.md) | Optional | - |
| `polyline` | [`Polyline`](../../doc/models/polyline.md) | Required | - |
| `startLocation` | [`StartLocation`](../../doc/models/start-location.md) | Required | - |
| `transitDetails` | [`TransitDetails \| undefined`](../../doc/models/transit-details.md) | Optional | - |
| `travelMode` | [`TravelMode`](../../doc/models/travel-mode.md) | Required | - |
| `steps` | `unknown \| undefined` | Optional | Contains detailed directions for walking or driving steps in transit directions. Substeps are only available when travel_mode is set to "transit". The inner steps array is of the same type as steps. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DirectionsStep, Maneuver, TravelMode } from 'googlemapsplatform';

const directionsStep: DirectionsStep = {
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
  htmlInstructions: 'html_instructions8',
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
  travelMode: TravelMode.Driving,
  distance: {
    text: 'text0',
    value: 142.22,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  maneuver: Maneuver.Roundaboutleft,
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
};
```

