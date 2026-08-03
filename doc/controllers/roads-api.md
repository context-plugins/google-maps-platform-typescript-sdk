# Roads API

```ts
const roadsApi = new RoadsApi(client);
```

## Class Name

`RoadsApi`

## Methods

* [Snap to Roads](../../doc/controllers/roads-api.md#snap-to-roads)
* [Nearest Roads](../../doc/controllers/roads-api.md#nearest-roads)


# Snap to Roads

This service returns the best-fit road geometry for a given set of GPS coordinates. This service takes up to 100 GPS points collected along a route, and returns a similar set of data with the points snapped to the most likely roads the vehicle was traveling along. Optionally, you can request that the points be interpolated, resulting in a path that smoothly follows the geometry of the road.

```ts
async snapToRoads(
  path: string[],
  interpolate?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SnapToRoadsResponse>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-query-parameter.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `path` | `string[]` | Query, Required | The path to be snapped. The path parameter accepts a list of latitude/longitude pairs. Latitude and longitude values should be separated by commas. Coordinates should be separated by the pipe character: "\|". For example: `path=60.170880,24.942795\|60.170879,24.942796\|60.170877,24.942796`.<br><br><div class="note">Note: The snapping algorithm works best for points that are not too far apart. If you observe odd snapping behavior, try creating paths that have points closer together. To ensure the best snap-to-road quality, you should aim to provide paths on which consecutive pairs of points are within 300m of each other. This will also help in handling any isolated, long jumps between consecutive points caused by GPS signal loss, or noise.</div><br> |
| `interpolate` | `boolean \| undefined` | Query, Optional | Whether to interpolate a path to include all points forming the full road-geometry. When true, additional interpolated points will also be returned, resulting in a path that smoothly follows the geometry of the road, even around corners and through tunnels. Interpolated paths will most likely contain more points than the original path. Defaults to `false`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: 200 OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SnapToRoadsResponse`](../../doc/models/snap-to-roads-response.md).

## Example Usage

```ts
const path: string[] = [
  '60.170880,24.942795',
  '60.170879,24.942796',
  '60.170877,24.942796'
];

const interpolate = true;

try {
  const response = await roadsApi.snapToRoads(
    path,
    interpolate
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Example Response *(as JSON)*

```json
{
  "snappedPoints": [
    {
      "location": {
        "latitude": -35.27800489993019,
        "longitude": 149.129531998742
      },
      "originalIndex": 0,
      "placeId": "ChIJr_xl0GdNFmsRsUtUbW7qABM"
    },
    {
      "location": {
        "latitude": -35.280323564795005,
        "longitude": 149.1290903128365
      },
      "originalIndex": 1,
      "placeId": "ChIJOyypT2hNFmsRZBtscGL0htw"
    },
    {
      "location": {
        "latitude": -35.28101395754623,
        "longitude": 149.1292430025548
      },
      "originalIndex": 2,
      "placeId": "ChIJv5r0smlNFmsR5nunau79Fv4"
    },
    {
      "location": {
        "latitude": -35.28146506991143,
        "longitude": 149.12978858234607
      },
      "originalIndex": 3,
      "placeId": "ChIJ601MoWlNFmsR5mvkfPp2ovA"
    },
    {
      "location": {
        "latitude": -35.28194399606459,
        "longitude": 149.1299842294294
      },
      "originalIndex": 4,
      "placeId": "ChIJ601MoWlNFmsR5mvkfPp2ovA"
    },
    {
      "location": {
        "latitude": -35.28282136229385,
        "longitude": 149.12956142620385
      },
      "originalIndex": 5,
      "placeId": "ChIJaUpThGlNFmsRMHWxoH7EOsc"
    },
    {
      "location": {
        "latitude": -35.28313383700836,
        "longitude": 149.12893500604946
      },
      "originalIndex": 6,
      "placeId": "ChIJWSb8ImpNFmsRp_4JAxJFE1A"
    },
    {
      "location": {
        "latitude": -35.284728747199374,
        "longitude": 149.12834860726772
      },
      "originalIndex": 7,
      "placeId": "ChIJtWxAZmpNFmsRlbUCkc6VtnA"
    }
  ]
}
```


# Nearest Roads

This service returns individual road segments for a given set of GPS coordinates. This services takes up to 100 GPS points and returns the closest road segments for each point. The points passed do not need to be part of a continuous path.

```ts
async nearestRoads(
  points: string[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<NearestRoadsResponse>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-query-parameter.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `points` | `string[]` | Query, Required | The points to be snapped. The points parameter accepts a list of latitude/longitude pairs. Separate latitude and longitude values with commas. Separate coordinates with the pipe character: "\|". For example: `points=60.170880,24.942795\|60.170879,24.942796\|60.170877,24.942796`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: 200 OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`NearestRoadsResponse`](../../doc/models/nearest-roads-response.md).

## Example Usage

```ts
const points: string[] = [
  '60.170880,24.942795',
  '60.170879,24.942796',
  '60.170877,24.942796'
];

try {
  const response = await roadsApi.nearestRoads(points);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof V1NearestRoads400Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | 400 BAD REQUEST | [`V1NearestRoads400Error`](../../doc/models/v1-nearest-roads-400-error.md) |

