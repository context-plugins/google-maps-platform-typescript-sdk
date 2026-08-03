
# V1 Nearest Roads 400 Error

*This model accepts additional fields of type unknown.*

## Structure

`V1NearestRoads400Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `error` | [`NearestRoadsError \| undefined`](../../doc/models/nearest-roads-error.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof V1NearestRoads400Error) {
    console.log(error.result);
  }
}
```

