
# Distance Matrix Element Status

- `OK` indicates the response contains a valid result.
- `NOT_FOUND` indicates that the origin and/or destination of this pairing could not be geocoded.
- `ZERO_RESULTS` indicates no route could be found between the origin and destination.
- `MAX_ROUTE_LENGTH_EXCEEDED` indicates the requested route is too long and cannot be processed.

## Enumeration

`DistanceMatrixElementStatus`

## Fields

| Name |
|  --- |
| `Ok` |
| `NotFound` |
| `ZeroResults` |
| `MaxRouteLengthExceeded` |

## Example

```ts
import { DistanceMatrixElementStatus } from 'google-maps-platformlib';

const distanceMatrixElementStatus = DistanceMatrixElementStatus.Ok;
```

