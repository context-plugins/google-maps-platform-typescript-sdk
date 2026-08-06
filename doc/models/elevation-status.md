
# Elevation Status

Status codes returned by service.

- `OK` indicating the API request was successful.
- `DATA_NOT_AVAILABLE` indicating that there's no available data for the input locations.
- `INVALID_REQUEST` indicating the API request was malformed.
- `OVER_DAILY_LIMIT` indicating any of the following:
  - The API key is missing or invalid.
  - Billing has not been enabled on your account.
  - A self-imposed usage cap has been exceeded.
  - The provided method of payment is no longer valid (for example, a credit card has expired).
- `OVER_QUERY_LIMIT` indicating the requestor has exceeded quota.
- `REQUEST_DENIED` indicating the API did not complete the request.
- `UNKNOWN_ERROR` indicating an unknown error.

## Enumeration

`ElevationStatus`

## Fields

| Name |
|  --- |
| `Ok` |
| `DataNotAvailable` |
| `InvalidRequest` |
| `OverDailyLimit` |
| `OverQueryLimit` |
| `RequestDenied` |
| `UnknownError` |

## Example

```ts
import { ElevationStatus } from 'googlemapsplatform';

const elevationStatus = ElevationStatus.DataNotAvailable;
```

