
# Place Opening Hours Period Detail

*This model accepts additional fields of type unknown.*

## Structure

`PlaceOpeningHoursPeriodDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string \| undefined` | Optional | A date expressed in RFC3339 format in the local timezone for the place, for example 2010-12-31. |
| `day` | `number` | Required | A number from 0–6, corresponding to the days of the week, starting on Sunday. For example, 2 means Tuesday. |
| `time` | `string` | Required | May contain a time of day in 24-hour hhmm format. Values are in the range 0000–2359. The time will be reported in the place’s time zone. |
| `truncated` | `boolean \| undefined` | Optional | True if a given period was truncated due to a seven-day cutoff, where the period starts before midnight on the date of the request and/or ends at or after  midnight on the last day. This property indicates that the period for open or close can extend past this seven-day cutoff. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlaceOpeningHoursPeriodDetail } from 'google-maps-platformlib';

const placeOpeningHoursPeriodDetail: PlaceOpeningHoursPeriodDetail = {
  day: 154.72,
  time: '1700',
  date: 'date2',
  truncated: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

