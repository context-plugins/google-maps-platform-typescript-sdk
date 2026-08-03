
# Business Status

Indicates the operational status of the place, if it is a business. If no data exists, `business_status` is not returned.

## Enumeration

`BusinessStatus`

## Fields

| Name |
|  --- |
| `Operational` |
| `ClosedTemporarily` |
| `ClosedPermanently` |

## Example

```ts
import { BusinessStatus } from 'google-maps-platformlib';

const businessStatus = BusinessStatus.Operational;
```

