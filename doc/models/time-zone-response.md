
# Time Zone Response

*This model accepts additional fields of type unknown.*

## Structure

`TimeZoneResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dstOffset` | `number \| undefined` | Optional | The offset for daylight-savings time in seconds. This will be zero if the time zone is not in Daylight Savings Time during the specified `timestamp`. |
| `rawOffset` | `number \| undefined` | Optional | The offset from UTC (in seconds) for the given location. This does not take into effect daylight savings. |
| `timeZoneId` | `string \| undefined` | Optional | a string containing the ID of the time zone, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR) project](http://cldr.unicode.org/), and currently available in file timezone.xml. When a timezone has several IDs, the canonical one is returned. In xml responses, this is the first alias of each timezone. For example, "Asia/Calcutta" is returned, not "Asia/Kolkata". |
| `timeZoneName` | `string \| undefined` | Optional | The long form name of the time zone. This field will be localized if the language parameter is set. eg. `Pacific Daylight Time` or `Australian Eastern Daylight Time`. |
| `status` | [`TimeZoneStatus`](../../doc/models/time-zone-status.md) | Required | - |
| `errorMessage` | `string \| undefined` | Optional | Detailed information about the reasons behind the given status code. Included if status other than `Ok`. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TimeZoneResponse, TimeZoneStatus } from 'google-maps-platformlib';

const timeZoneResponse: TimeZoneResponse = {
  status: TimeZoneStatus.InvalidRequest,
  dstOffset: 222.82,
  rawOffset: 51.94,
  timeZoneId: 'timeZoneId0',
  timeZoneName: 'timeZoneName2',
  errorMessage: 'errorMessage2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

