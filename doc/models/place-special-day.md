
# Place Special Day

*This model accepts additional fields of type unknown.*

## Structure

`PlaceSpecialDay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string \| undefined` | Optional | A date expressed in RFC3339 format in the local timezone for the place, for example 2010-12-31. |
| `exceptionalHours` | `boolean \| undefined` | Optional | True if there are exceptional hours for this day. If `true`, this means that there is at least one exception for this day. Exceptions cause different values to occur in the subfields of `current_opening_hours` and `secondary_opening_hours` such as `periods`, `weekday_text`, `open_now`. The exceptions apply to the hours, and the hours are used to generate the other fields. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlaceSpecialDay } from 'googlemapsplatform';

const placeSpecialDay: PlaceSpecialDay = {
  date: 'date2',
  exceptionalHours: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

