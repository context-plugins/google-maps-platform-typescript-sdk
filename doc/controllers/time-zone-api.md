# Time Zone API

```ts
const timeZoneApi = new TimeZoneApi(client);
```

## Class Name

`TimeZoneApi`


# Timezone

The Time Zone API provides a simple interface to request the time zone for locations on the surface of the earth, as well as the time offset from UTC for each of those locations. You request the time zone information for a specific latitude/longitude pair and date. The API returns the name of that time zone, the time offset from UTC, and the daylight savings offset.

```ts
async timezone(
  location: string,
  timestamp: number,
  language?: Language1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TimeZoneResponse>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-query-parameter.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `location` | `string` | Query, Required | A comma-separated latitude,longitude tuple, `location=39.6034810,-119.6822510`, representing the location to look up. |
| `timestamp` | `number` | Query, Required | The desired time as seconds since midnight, January 1, 1970 UTC. The Time Zone API uses the `timestamp` to determine whether or not Daylight Savings should be applied, based on the time zone of the `location`.<br><br>Note that the API does not take historical time zones into account. That is, if you specify a past timestamp, the API does not take into account the possibility that the location was previously in a different time zone. |
| `language` | [`Language1 \| undefined`](../../doc/models/language-1.md) | Query, Optional | The language in which to return results.<br><br>* See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.<br>* If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.<br>* The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.<br>* If a name is not available in the preferred language, the API uses the closest match.<br>* The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: 200 OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TimeZoneResponse`](../../doc/models/time-zone-response.md).

## Example Usage

```ts
const location = '39.6034810,-119.6822510';

const timestamp = 1331161200;

try {
  const response = await timeZoneApi.timezone(
    location,
    timestamp
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
  "dstOffset": 0,
  "rawOffset": -28800,
  "status": "OK",
  "timeZoneId": "America/Los_Angeles",
  "timeZoneName": "Pacific Standard Time"
}
```

