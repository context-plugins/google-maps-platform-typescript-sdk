
# Source 1

Limits Street View searches to selected sources. Valid values are:

* `default` uses the default sources for Street View; searches are not limited to specific sources.
* `outdoor` limits searches to outdoor collections. Indoor collections are not included in search results. Note that outdoor panoramas may not exist for the specified location. Also note that the search only returns panoramas where it's possible to determine whether they're indoors or outdoors. For example, PhotoSpheres are not returned because it's unknown whether they are indoors or outdoors.

## Enumeration

`Source1`

## Fields

| Name |
|  --- |
| `Default` |
| `Outdoor` |

## Example

```ts
import { Source1 } from 'google-maps-platformlib';

const source1 = Source1.Default;
```

