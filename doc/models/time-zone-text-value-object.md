
# Time Zone Text Value Object

An object containing Unix time, a time zone, and its formatted text representation.

*This model accepts additional fields of type unknown.*

## Structure

`TimeZoneTextValueObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string` | Required | The time specified as a string in the time zone. |
| `value` | `number` | Required | The time specified as Unix time, or seconds since midnight, January 1, 1970 UTC. |
| `timeZone` | `string` | Required | Contains the time zone. The value is the name of the time zone as defined in the [IANA Time Zone Database](http://www.iana.org/time-zones), e.g. "America/New_York". |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TimeZoneTextValueObject } from 'google-maps-platformlib';

const timeZoneTextValueObject: TimeZoneTextValueObject = {
  text: 'text6',
  value: 178.38,
  timeZone: 'time_zone8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

