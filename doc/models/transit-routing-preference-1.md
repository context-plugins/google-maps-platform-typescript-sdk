
# Transit Routing Preference 1

Specifies preferences for transit routes. Using this parameter, you can bias the options returned, rather than accepting the default best route chosen by the API. This parameter may only be specified for transit directions. The parameter supports the following arguments:

* `less_walking` indicates that the calculated route should prefer limited amounts of walking.
* `fewer_transfers` indicates that the calculated route should prefer a limited number of transfers.

## Enumeration

`TransitRoutingPreference1`

## Fields

| Name |
|  --- |
| `LessWalking` |
| `FewerTransfers` |

## Example

```ts
import { TransitRoutingPreference1 } from 'googlemapsplatform';

const transitRoutingPreference1 = TransitRoutingPreference1.LessWalking;
```

