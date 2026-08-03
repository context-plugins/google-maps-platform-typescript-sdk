
# Directions Response

*This model accepts additional fields of type unknown.*

## Structure

`DirectionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `geocodedWaypoints` | [`DirectionsGeocodedWaypoint[] \| undefined`](../../doc/models/directions-geocoded-waypoint.md) | Optional | Contains an array with details about the geocoding of origin, destination and waypoints. Elements in the geocoded_waypoints array correspond, by their zero-based position, to the origin, the waypoints in the order they are specified, and the destination.<br><br>These details will not be present for waypoints specified as textual latitude/longitude values if the service returns no results. This is because such waypoints are only reverse geocoded to obtain their representative address after a route has been found. An empty JSON object will occupy the corresponding places in the geocoded_waypoints array. |
| `routes` | [`DirectionsRoute[]`](../../doc/models/directions-route.md) | Required | Contains an array of routes from the origin to the destination. Routes consist of nested Legs and Steps. |
| `status` | [`DirectionsStatus`](../../doc/models/directions-status.md) | Required | - |
| `availableTravelModes` | [`TravelMode[] \| undefined`](../../doc/models/travel-mode.md) | Optional | Contains an array of available travel modes. This field is returned when a request specifies a travel mode and gets no results. The array contains the available travel modes in the countries of the given set of waypoints. This field is not returned if one or more of the waypoints are 'via waypoints'. |
| `errorMessage` | `string \| undefined` | Optional | When the service returns a status code other than `OK`, there may be an additional `error_message` field within the response object. This field contains more detailed information about the reasons behind the given status code. This field is not always returned, and its content is subject to change. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AreaType,
  DirectionsResponse,
  DirectionsStatus,
  GeocoderStatus,
  Maneuver,
  TravelMode,
} from 'google-maps-platformlib';

const directionsResponse: DirectionsResponse = {
  routes: [
    {
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
      copyrights: 'copyrights4',
      summary: 'summary8',
      waypointOrder: [
        97
      ],
      warnings: [
        'warnings2'
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
    }
  ],
  status: DirectionsStatus.OverDailyLimit,
  geocodedWaypoints: [
    {
      geocoderStatus: GeocoderStatus.Ok,
      partialMatch: { 'key1': 'val1', 'key2': 'val2' },
      placeId: 'place_id4',
      areaType: [
        AreaType.AmusementPark
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      geocoderStatus: GeocoderStatus.Ok,
      partialMatch: { 'key1': 'val1', 'key2': 'val2' },
      placeId: 'place_id4',
      areaType: [
        AreaType.AmusementPark
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      geocoderStatus: GeocoderStatus.Ok,
      partialMatch: { 'key1': 'val1', 'key2': 'val2' },
      placeId: 'place_id4',
      areaType: [
        AreaType.AmusementPark
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  availableTravelModes: [
    TravelMode.Bicycling,
    TravelMode.Transit,
    TravelMode.Walking
  ],
  errorMessage: 'error_message6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

