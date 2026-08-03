
# Directions Route

Routes consist of nested `legs` and `steps`.

*This model accepts additional fields of type unknown.*

## Structure

`DirectionsRoute`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `legs` | [`DirectionsLeg[]`](../../doc/models/directions-leg.md) | Required | An array which contains information about a leg of the route, between two locations within the given route. A separate leg will be present for each waypoint or destination specified. (A route with no waypoints will contain exactly one leg within the legs array.) Each leg consists of a series of steps. |
| `bounds` | [`Bounds1`](../../doc/models/bounds-1.md) | Required | - |
| `copyrights` | `string` | Required | Contains the copyright notices to be displayed for this route. You must handle and display this information yourself. This content is meant to be read as-is. Do not programmatically parse this display-only content. |
| `summary` | `string` | Required | Contains a short textual description for the route, suitable for naming and disambiguating the route from alternatives. |
| `waypointOrder` | `number[]` | Required | An array indicating the order of any waypoints in the calculated route. This waypoints may be reordered if the request was passed optimize:true within its waypoints parameter. |
| `warnings` | `string[]` | Required | Contains an array of warnings to be displayed when showing these directions. You must handle and display these warnings yourself. |
| `overviewPolyline` | [`OverviewPolyline`](../../doc/models/overview-polyline.md) | Required | - |
| `fare` | [`Fare1 \| undefined`](../../doc/models/fare-1.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  DirectionsRoute,
  Maneuver,
  TravelMode,
} from 'google-maps-platformlib';

const directionsRoute: DirectionsRoute = {
  legs: [
    {
      endAddress: 'end_address8',
      endLocation: {
        lat: 207.76,
        lng: 215.7,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      startAddress: 'start_address0',
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
    }
  ],
  bounds: {
    northeast: {
      lat: 194.96,
      lng: 27.5,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    southwest: {
      lat: 1.22,
      lng: 166.24,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  copyrights: 'copyrights8',
  summary: 'summary2',
  waypointOrder: [
    55
  ],
  warnings: [
    'warnings6'
  ],
  overviewPolyline: {
    points: 'chnwEbderQ?XR@D?@?',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  fare: {
    currency: 'currency0',
    value: 12.62,
    text: 'text0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

