
# Current Opening Hours

*This model accepts additional fields of type unknown.*

## Structure

`CurrentOpeningHours`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `openNow` | `boolean \| undefined` | Optional | A boolean value indicating if the place is open at the current time. |
| `periods` | [`PlaceOpeningHoursPeriod[] \| undefined`](../../doc/models/place-opening-hours-period.md) | Optional | An array of opening periods covering seven days, starting from Sunday, in chronological order. |
| `specialDays` | [`PlaceSpecialDay[] \| undefined`](../../doc/models/place-special-day.md) | Optional | An array of up to seven entries corresponding to the next seven days. |
| `type` | `string \| undefined` | Optional | A type string used to identify the type of secondary hours (for example, `DRIVE_THROUGH`, `HAPPY_HOUR`, `DELIVERY`, `TAKEOUT`, `KITCHEN`, `BREAKFAST`, `LUNCH`, `DINNER`, `BRUNCH`, `PICKUP`, `SENIOR_HOURS`). Set for `secondary_opening_hours` only. |
| `weekdayText` | `string[] \| undefined` | Optional | An array of strings describing in human-readable text the hours of the place. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CurrentOpeningHours } from 'google-maps-platformlib';

const currentOpeningHours: CurrentOpeningHours = {
  openNow: false,
  periods: [
    {
      open: {
        day: 0.52,
        time: 'time4',
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
    },
    {
      open: {
        day: 0.52,
        time: 'time4',
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
    }
  ],
  specialDays: [
    {
      date: 'date4',
      exceptionalHours: false,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      date: 'date4',
      exceptionalHours: false,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      date: 'date4',
      exceptionalHours: false,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  type: 'type8',
  weekdayText: [
    'Monday: 9:00 AM – 5:00 PM',
    'Tuesday: 9:00 AM – 5:00 PM',
    'Wednesday: 9:00 AM – 5:00 PM',
    'Thursday: 9:00 AM – 5:00 PM',
    'Friday: 9:00 AM – 5:00 PM',
    'Saturday: Closed',
    'Sunday: Closed'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

