
# Departure Time

*This model accepts additional fields of type unknown.*

## Structure

`DepartureTime`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string` | Required | The time specified as a string in the time zone. |
| `value` | `number` | Required | The time specified as Unix time, or seconds since midnight, January 1, 1970 UTC. |
| `timeZone` | `string` | Required | Contains the time zone. The value is the name of the time zone as defined in the [IANA Time Zone Database](http://www.iana.org/time-zones), e.g. "America/New_York". |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DepartureTime } from 'googlemapsplatform';

const departureTime: DepartureTime = {
  text: 'text6',
  value: 184.16,
  timeZone: 'time_zone6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

