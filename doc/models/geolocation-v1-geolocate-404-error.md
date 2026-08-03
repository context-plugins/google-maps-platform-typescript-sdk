
# Geolocation V1 Geolocate 404 Error

*This model accepts additional fields of type unknown.*

## Structure

`GeolocationV1Geolocate404Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `error` | [`ErrorObject`](../../doc/models/error-object.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof GeolocationV1Geolocate404Error) {
    console.log(error.result);
  }
}
```

