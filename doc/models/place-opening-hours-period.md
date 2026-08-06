
# Place Opening Hours Period

*This model accepts additional fields of type unknown.*

## Structure

`PlaceOpeningHoursPeriod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `open` | [`PlaceOpeningHoursPeriodDetail`](../../doc/models/place-opening-hours-period-detail.md) | Required | - |
| `close` | [`PlaceOpeningHoursPeriodDetail \| undefined`](../../doc/models/place-opening-hours-period-detail.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlaceOpeningHoursPeriod } from 'googlemapsplatform';

const placeOpeningHoursPeriod: PlaceOpeningHoursPeriod = {
  open: {
    day: 0.52,
    time: '1700',
    date: 'date8',
    truncated: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  close: {
    day: 26.5,
    time: 'time8',
    date: 'date4',
    truncated: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

