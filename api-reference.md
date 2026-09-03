# Reference

> Source: [GoogleMapsPlatformClient](src/client.ts)

## GeolocationApi

> Source: [GeolocationApi](src/resources/geolocation-api.ts)

<details>
<summary><code>geolocate(request: GeolocationApi.GeolocateRequest, options?: RequestOptions): ApiPromise&lt;GeolocationV1GeolocateResponse, GeolocationApi.GeolocateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Geolocation API returns a location and accuracy radius based on information about cell towers and WiFi nodes that the mobile client can detect. This document describes the protocol used to send this data to the server and to return a response to the client.

Communication is done over HTTPS using POST. Both request and response are formatted as JSON, and the content type of both is `application/json`.

You must specify a key in your request, included as the value of a`key` parameter. A `key` is your application's  API key. This key identifies your application for purposes of quota management. Learn how to [get a key](https://developers.google.com/maps/documentation/geolocation/get-api-key).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.geolocationApi.geolocate();
  // TODO: Handle 'response' of type GeolocationV1GeolocateResponse
} catch (err) {
  if (
    err instanceof GeolocationApi.GeolocateError && err.payload.kind === "geolocationV1Geolocate400Error1"
  ) {
    // TODO: Handle 'err.payload.body' of type GeolocationV1Geolocate400Error1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[GeolocationV1GeolocateRequest](src/models/geolocation-v1-geolocate-request.ts)</code> | The request body must be formatted as JSON. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeolocationV1GeolocateResponse](src/models/geolocation-v1-geolocate-response.ts)</code>

**OnError**: <code>[GeolocationApi.GeolocateError](src/resources/geolocation-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DirectionsApi

> Source: [DirectionsApi](src/resources/directions-api.ts)

<details>
<summary><code>directions(request: DirectionsApi.DirectionsRequest, options?: RequestOptions): ApiPromise&lt;DirectionsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Directions API is a web service that uses an HTTP request to return JSON or XML-formatted directions between locations. You can receive directions for several modes of transportation, such as transit, driving, walking, or cycling.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.directionsApi.directions({ destination, origin });
  // TODO: Handle 'response' of type DirectionsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>destination</code> | <code>string</code> | The place ID, address, or textual latitude/longitude value to which you wish to calculate directions. The options for the destination parameter are the same as for the origin parameter. |
| <code>origin</code> | <code>string</code> | The place ID, address, or textual latitude/longitude value from which you wish to calculate directions.<br>* Place IDs must be prefixed with `place_id:`. You can retrieve place IDs from the Geocoding API and the Places API (including Place Autocomplete). For an example using place IDs from Place Autocomplete, see [Place Autocomplete and Directions](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-directions). For more about place IDs, see the [Place ID overview](https://developers.google.com/maps/documentation/places/web-service/place-id).<br>  <br>  ```<br>  origin=place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE<br>  ```<br>  <br>* If you pass an address, the Directions service geocodes the string and converts it to a latitude/longitude coordinate to calculate directions. This coordinate may be different from that returned by the Geocoding API, for example a building entrance rather than its center.<br>  <br>  ```<br>  origin=24+Sussex+Drive+Ottawa+ON<br>  ```<br>  <br>  Using place IDs is preferred over using addresses or latitude/longitude coordinates. Using coordinates will always result in the point being snapped to the road nearest to those coordinates - which may not be an access point to the property, or even a road that will quickly or safely lead to the destination.<br>* If you pass coordinates, the point will snap to the nearest road. Passing a place ID is preferred. If you do pass coordinates, ensure that no space exists between the latitude and longitude values.<br>  <br>  ```<br>  origin=41.43206,-81.38992<br>  ```<br><br>* Plus codes must be formatted as a global code or a compound code. Format plus codes as shown here (plus signs are url-escaped to `%2B` and spaces are url-escaped to `%20`). <br>  <br>  * **Global code** is a 4 character area code and 6 character or longer local code (849VCWC8+R9 is `849VCWC8%2BR9`). <br>  * **Compound code** is a 6 character or longer local code with an explicit location (CWC8+R9 Mountain View, CA, USA is `CWC8%2BR9%20Mountain%20View%20CA%20USA`).<br><br><div class="note">Note: For efficiency and accuracy, use place ID's when possible. These ID's are uniquely explicit like a lat/lng value pair and provide geocoding benefits for routing such as access points and traffic variables. Unlike an address, ID's do not require the service to perform a search or an intermediate request for place details; therefore, performance is better.</div> |
| <code>arrivalTime?</code> | <code>number</code> | Specifies the desired time of arrival for transit directions, in seconds since midnight, January 1, 1970 UTC. You can specify either `departure_time` or `arrival_time`, but not both. Note that `arrival_time` must be specified as an integer. |
| <code>departureTime?</code> | <code>number</code> | Specifies the desired time of departure. You can specify the time as an integer in seconds since midnight, January 1, 1970 UTC. If a `departure_time` later than 9999-12-31T23:59:59.999999999Z is specified, the API will fall back the `departure_time` to 9999-12-31T23:59:59.999999999Z. Alternatively, you can specify a value of now, which sets the departure time to the current time (correct to the nearest second). The departure time may be specified in two cases:<br>* For requests where the travel mode is transit: You can optionally specify one of `departure_time` or `arrival_time`. If neither time is specified, the `departure_time` defaults to now (that is, the departure time defaults to the current time).<br>* For requests where the travel mode is driving: You can specify the `departure_time` to receive a route and trip duration (response field: duration_in_traffic) that take traffic conditions into account. The `departure_time` must be set to the current time or some time in the future. It cannot be in the past.<br><br><div class="note">Note: If departure time is not specified, choice of route and duration are based on road network and average time-independent traffic conditions. Results for a given request may vary over time due to changes in the road network, updated average traffic conditions, and the distributed nature of the service. Results may also vary between nearly-equivalent routes at any time or frequency.</div><br><div class="note">Note: Distance Matrix requests specifying `departure_time` when `mode=driving` are limited to a maximum of 100 elements per request. The number of origins times the number of destinations defines the number of elements.</div> |
| <code>alternatives?</code> | <code>boolean</code> | If set to `true`, specifies that the Directions service may provide more than one route alternative in the response. Note that providing route alternatives may increase the response time from the server. This is only available for requests without intermediate waypoints. For more information, see the [guide to waypoints](https://developers.google.com/maps/documentation/directions/get-directions#Waypoints). |
| <code>avoid?</code> | <code>string</code> | Indicates that the calculated route(s) should avoid the indicated features. This parameter supports the following arguments:<br>* `tolls` indicates that the calculated route should avoid toll roads/bridges.<br>* `highways` indicates that the calculated route should avoid highways.<br>* `ferries` indicates that the calculated route should avoid ferries.<br>* `indoor` indicates that the calculated route should avoid indoor steps for walking and transit directions.<br><br>It's possible to request a route that avoids any combination of tolls, highways and ferries by passing multiple restrictions to the avoid parameter. For example: <br><br>```<br>avoid=tolls\|highways\|ferries.<br>``` |
| <code>units?</code> | <code>[Units1](src/models/units1.ts)</code> | Specifies the unit system to use when displaying results.<br><br>Directions results contain text within distance fields that may be displayed to the user to indicate the distance of a particular "step" of the route. By default, this text uses the unit system of the origin's country or region.<br><br>For example, a route from "Chicago, IL" to "Toronto, ONT" will display results in miles, while the reverse route will display results in kilometers. You may override this unit system by setting one explicitly within the request's units parameter, passing one of the following values:<br><br>* `metric` specifies usage of the metric system. Textual distances are returned using kilometers and meters.<br>* `imperial` specifies usage of the Imperial (English) system. Textual distances are returned using miles and feet.<br><br><div class="note">Note: this unit system setting only affects the text displayed within distance fields. The distance fields also contain values which are always expressed in meters.</div> |
| <code>waypoints?</code> | <code>string</code> | <div class="caution">Caution: Requests using more than 10 waypoints (between 11 and 25), or waypoint optimization, are billed at a higher rate. <a href="https://developers.google.com/maps/billing-and-pricing/pricing#directions-advanced">Learn more about billing</a> for Google Maps Platform products.</div><br><br>Specifies an array of intermediate locations to include along the route between the origin and destination points as pass through or stopover locations. Waypoints alter a route by directing it through the specified location(s). The API supports waypoints for these travel modes: driving, walking and bicycling; not transit.   You can supply one or more locations separated by the pipe character (`\|` or `%7C`), in the form of a place ID, an address, or latitude/longitude coordinates. By default, the Directions service calculates a route using the waypoints in the order they are given. The precedence for parsing the value of the waypoint is place ID, latitude/longitude coordinates, then address.<br>* If you pass a place ID, you must prefix it with `place_id:`. You can retrieve place IDs from the Geocoding API and the Places API (including Place Autocomplete). For an example using place IDs from Place Autocomplete, see [Place Autocomplete and Directions](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-directions). For more about place IDs, see the [Place ID overview](https://developers.google.com/maps/documentation/places/web-service/place-id).<br>  <div class="note">For efficiency and accuracy, use place ID's when possible. These ID's are uniquely explicit like a lat/lng value pair and provide geocoding benefits for routing such as access points and traffic variables. Unlike an address, ID's do not require the service to perform a search or an intermediate request for place details; therefore, performance is better.</div><br>* If you pass latitude/longitude coordinates, the values go directly to the front-end server to calculate directions without geocoding. The points are snapped to roads and might not provide the accuracy your app needs. Use coordinates when you are confident the values truly specify the points your app needs for routing without regard to possible access points or additional geocoding details. Ensure that a comma (`%2C`) and not a space (`%20`) separates the latitude and longitude values.<br>* If you pass an address, the Directions service will geocode the string and convert it into latitude/longitude coordinates to calculate directions. If the address value is ambiguous, the value might evoke a search to disambiguate from similar addresses. For example, "1st Street" could be a complete value or a partial value for "1st street NE" or "1st St SE". This result may be different from that returned by the Geocoding API. You can avoid possible misinterpretations using place IDs.<br>* Alternatively, you can supply an encoded set of points using the [Encoded Polyline Algorithm](https://developers.google.com/maps/documentation/utilities/polylinealgorithm). You will find an encoded set is useful for a large number of waypoints, because the URL is significantly shorter. All web services have a URL limit of 8192 characters.<br>  * Encoded polylines must be prefixed with `enc:` and followed by a colon (`:`). For example: `waypoints=enc:gfo}EtohhU:`.<br>  * You can also include multiple encoded polylines, separated by the pipe character (`\|`). For example, `waypoints=via:enc:wc~oAwquwMdlTxiKtqLyiK:\|enc:c~vnAamswMvlTortjGi}L:\| via:enc:udymA{~bxM:`<br><br>##### Influence routes with stopover and pass through points<br><br>For each waypoint in the request, the directions response appends an entry to the `legs` array to provide the details for stopovers on that leg of the journey.<br><br>If you'd like to influence the route using waypoints without adding a stopover, add the prefix `via:` to the waypoint. Waypoints prefixed with `via:` will not add an entry to the `legs` array, but will route the journey through the waypoint.<br><br>The following URL modifies the previous request such that the journey is routed through Lexington without stopping:<br><br>```<br>https://maps.googleapis.com/maps/api/directions/json?<br>origin=Boston,MA&destination=Concord,MA<br>&waypoints=Charlestown,MA\|via:Lexington,MA  <br>```<br><br>The `via:` prefix is most effective when creating routes in response to the user dragging the waypoints on the map. Doing so allows the user to see how the final route may look in real-time and helps ensure that waypoints are placed in locations that are accessible to the Directions API.<br><br><div class="caution">Caution: Using the `via:` prefix to avoid stopovers results in directions that are strict in their interpretation of the waypoint. This interpretation may result in severe detours on the route or `ZERO_RESULTS` in the response status code if the Directions API is unable to create directions through that point.</div><br><br><br>##### Optimize your waypoints<br><br>By default, the Directions service calculates a route through the provided waypoints in their given order. Optionally, you may pass `optimize:true` as the first argument within the waypoints parameter to allow the Directions service to optimize the provided route by rearranging the waypoints in a more efficient order. (This optimization is an application of the traveling salesperson problem.) Travel time is the primary factor which is optimized, but other factors such as distance, number of turns and many more may be taken into account when deciding which route is the most efficient. All waypoints must be stopovers for the Directions service to optimize their route.<br><br>If you instruct the Directions service to optimize the order of its waypoints, their order will be returned in the `waypoint_order` field within the routes object. The `waypoint_order` field returns values which are zero-based.<br><br>The following example calculates a road journey from Adelaide, South Australia to each of South Australia's main wine regions using route optimization.<br><br>```<br>https://maps.googleapis.com/maps/api/directions/json?<br>origin=Adelaide,SA&destination=Adelaide,SA<br>&waypoints=optimize:true\|Barossa+Valley,SA\|Clare,SA\|Connawarra,SA\|McLaren+Vale,SA<br>```<br><br>Inspection of the calculated route will indicate that calculation uses waypoints in the following waypoint order:<br><br>```<br>"waypoint_order": [ 3, 2, 0, 1 ]<br>```<br><br><div class="caution">Caution: Requests using waypoint optimization are billed at a higher rate. <a href="https://developers.google.com/maps/billing-and-pricing/pricing#directions-advanced">Learn more about how Google Maps Platform products are billed.</a></div> |
| <code>language?</code> | <code>[Language1](src/models/language1.ts)</code> | The language in which to return results.<br><br>* See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.<br>* If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.<br>* The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.<br>* If a name is not available in the preferred language, the API uses the closest match.<br>* The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian. |
| <code>mode?</code> | <code>[Mode1](src/models/mode1.ts)</code> | For the calculation of distances and directions, you may specify the transportation mode to use. By default, `DRIVING` mode is used. By default, directions are calculated as driving directions. The following travel modes are supported:<br><br>* `driving` (default) indicates standard driving directions or distance using the road network.<br>* `walking` requests walking directions or distance via pedestrian paths & sidewalks (where available).<br>* `bicycling` requests bicycling directions or distance via bicycle paths & preferred streets (where available).<br>* `transit` requests directions or distance via public transit routes (where available). Transit trips are available for up to 7 days in the past or 100 days in the future. If you set the mode to transit, you can optionally specify either a `departure_time` or an `arrival_time`. If neither time is specified, the `departure_time` defaults to now (that is, the departure time defaults to the current time). You can also optionally include a `transit_mode` and/or a `transit_routing_preference`. <br><br><div class="note">Note: Both walking and bicycling directions may sometimes not include clear pedestrian or bicycling paths, so these directions will return warnings in the returned result which you must display to the user.</div> |
| <code>region?</code> | <code>[Region1](src/models/region1.ts)</code> | The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland"). |
| <code>trafficModel?</code> | <code>[TrafficModel1](src/models/traffic-model1.ts)</code> | Specifies the assumptions to use when calculating time in traffic. This setting affects the value returned in the duration_in_traffic field in the response, which contains the predicted time in traffic based on historical averages. The `traffic_model` parameter may only be specified for driving directions where the request includes a `departure_time`. The available values for this parameter are:<br>* `best_guess` (default) indicates that the returned duration_in_traffic should be the best estimate of travel time given what is known about both historical traffic conditions and live traffic. Live traffic becomes more important the closer the `departure_time` is to now.<br>* `pessimistic` indicates that the returned duration_in_traffic should be longer than the actual travel time on most days, though occasional days with particularly bad traffic conditions may exceed this value.<br>* `optimistic` indicates that the returned duration_in_traffic should be shorter than the actual travel time on most days, though occasional days with particularly good traffic conditions may be faster than this value.<br>The default value of `best_guess` will give the most useful predictions for the vast majority of use cases. It is possible the `best_guess` travel time prediction may be shorter than `optimistic`, or alternatively, longer than `pessimistic`, due to the way the `best_guess` prediction model integrates live traffic information. |
| <code>transitMode?</code> | <code>string</code> | Specifies one or more preferred modes of transit. This parameter may only be specified for transit directions. The parameter supports the following arguments:<br>* `bus` indicates that the calculated route should prefer travel by bus.<br>* `subway` indicates that the calculated route should prefer travel by subway.<br>* `train` indicates that the calculated route should prefer travel by train.<br>* `tram` indicates that the calculated route should prefer travel by tram and light rail.<br>* `rail` indicates that the calculated route should prefer travel by train, tram, light rail, and subway. This is equivalent to `transit_mode=train\|tram\|subway`. |
| <code>transitRoutingPreference?</code> | <code>[TransitRoutingPreference1](src/models/transit-routing-preference1.ts)</code> | Specifies preferences for transit routes. Using this parameter, you can bias the options returned, rather than accepting the default best route chosen by the API. This parameter may only be specified for transit directions. The parameter supports the following arguments:<br>* `less_walking` indicates that the calculated route should prefer limited amounts of walking.<br>* `fewer_transfers` indicates that the calculated route should prefer a limited number of transfers. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DirectionsResponse](src/models/directions-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ElevationApi

> Source: [ElevationApi](src/resources/elevation-api.ts)

<details>
<summary><code>elevation(request: ElevationApi.ElevationRequest, options?: RequestOptions): ApiPromise&lt;MapsApiElevationJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Elevation API provides a simple interface to query locations on the earth for elevation data. Additionally, you may request sampled elevation data along paths, allowing you to calculate elevation changes along routes. With the Elevation API, you can develop hiking and biking applications, positioning applications, or low resolution surveying applications.

Elevation data is available for all locations on the surface of the earth, including depth locations on the ocean floor (which return negative values). In those cases where Google does not possess exact elevation measurements at the precise location you request, the service interpolates and returns an averaged value using the four nearest locations. Elevation values are expressed relative to local mean sea level (LMSL).

Requests to the Elevation API utilize different parameters based on whether the request is for discrete locations or for an ordered path. For discrete locations, requests for elevation return data on the specific locations passed in the request; for paths, elevation requests are instead sampled along the given path.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.elevationApi.elevation();
  // TODO: Handle 'response' of type MapsApiElevationJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locations?</code> | <code>string[]</code> | Positional requests are indicated through use of the locations parameter, indicating elevation requests for the specific locations passed as latitude/longitude values.<br><br>The locations parameter may take the following arguments:<br><br>- A single coordinate: `locations=40.714728,-73.998672`<br>- An array of coordinates separated using the pipe ('\|') character: <br>  ```<br>  locations=40.714728,-73.998672\|-34.397,150.644<br>  ```<br>- A set of encoded coordinates using the [Encoded Polyline Algorithm](https://developers.google.com/maps/documentation/utilities/polylinealgorithm): <br>  ```<br>  locations=enc:gfo}EtohhU<br>  ```<br><br>Latitude and longitude coordinate strings are defined using numerals within a comma-separated text string. For example, "40.714728,-73.998672" is a valid locations value. Latitude and longitude values must correspond to a valid location on the face of the earth. Latitudes can take any value between -90 and 90 while longitude values can take any value between -180 and 180. If you specify an invalid latitude or longitude value, your request will be rejected as a bad request.<br><br>You may pass any number of multiple coordinates within an array or encoded polyline, while still constructing a valid URL. Note that when passing multiple coordinates, the accuracy of any returned data may be of lower resolution than when requesting data for a single coordinate. |
| <code>path?</code> | <code>string[]</code> | An array of comma separated `latitude,longitude` strings. |
| <code>samples?</code> | <code>number</code> | Required if path parameter is set. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MapsApiElevationJsonResponse](src/models/maps-api-elevation-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GeocodingApi

> Source: [GeocodingApi](src/resources/geocoding-api.ts)

<details>
<summary><code>geocode(request: GeocodingApi.GeocodeRequest, options?: RequestOptions): ApiPromise&lt;GeocodingResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Geocoding API is a service that provides geocoding and reverse geocoding of addresses.

**Geocoding** is the process of converting addresses (like a street address) into geographic coordinates (like latitude and longitude), which you can use to place markers on a map, or position the map.

**Reverse geocoding** is the process of converting geographic coordinates into a human-readable address.

You can also use the Geocoding API to find the address for a given place ID.

To see countries currently supported by the Google Maps Platform Geocoding API, please consult the [Google Maps coverage data](https://developers.google.com/maps/coverage). The accuracy of geocoded locations may vary per country, so you should consider using the returned `location_type` field to determine if a good enough match has been found for the purposes of your application. Please note that the availability of geocoding data depends on our contracts with data providers, so it is subject to change.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.geocodingApi.geocode();
  // TODO: Handle 'response' of type GeocodingResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>address?</code> | <code>string</code> | The street address or plus code that you want to geocode. Specify addresses in accordance with the format used by the national postal service of the country concerned. Additional address elements such as business names and unit, suite or floor numbers should be avoided. Street address elements should be delimited by spaces (shown here as url-escaped to `%20`):<br><br>```<br>address=24%20Sussex%20Drive%20Ottawa%20ON<br>```<br><br>Format plus codes as shown here (plus signs are url-escaped to `%2B` and spaces are url-escaped to `%20`):<br>- global code is a 4 character area code and 6 character or longer local code (`849VCWC8+R9` is `849VCWC8%2BR9`).<br>- compound code is a 6 character or longer local code with an explicit location (`CWC8+R9 Mountain View, CA, USA` is `CWC8%2BR9%20Mountain%20View%20CA%20USA`).<br><br><div class="note">Note: At least one of `address` or `components` is required.</div> |
| <code>bounds?</code> | <code>string[]</code> | The bounding box of the viewport within which to bias geocode results more prominently. This parameter will only influence, not fully restrict, results from the geocoder. |
| <code>components?</code> | <code>string[]</code> | A components filter with elements separated by a pipe (\|). The components filter is also accepted as an optional parameter if an address is provided. Each element in the components filter consists of a `component:value` pair, and fully restricts the results from the geocoder.<br><br>The components that can be filtered include:<br><br>* `postal_code` matches `postal_code` and `postal_code_prefix`.<br>* `country` matches a country name or a two letter ISO 3166-1 country code. The API follows the ISO standard for defining countries, and the filtering works best when using the corresponding ISO code of the country.<br>  <aside class="note"><strong>Note</strong>: If you receive unexpected results with a country code, verify that you are using a code which includes the countries, dependent territories, and special areas of geographical interest you intend. You can find code information at Wikipedia: List of ISO 3166 country codes or the ISO Online Browsing Platform.</aside><br>  <br>The following components may be used to influence results, but will not be enforced:<br><br>* `route` matches the long or short name of a route.<br>* `locality` matches against `locality` and `sublocality` types.<br>* `administrative_area` matches all the `administrative_area` levels.<br>  <br>Notes about component filtering:<br><br>* Do not repeat these component filters in requests, or the API will return `INVALID_REQUEST`: <br>  * `country`<br>  * `postal_code`<br>  * `route`<br>* If the request contains repeated component filters, the API evaluates those filters as an AND, not an OR.<br>* Results are consistent with Google Maps, which occasionally yields unexpected `ZERO_RESULTS` responses. Using Place Autocomplete may provide better results in some use cases. To learn more, see [this FAQ](https://developers..google.com/maps/documentation/geocoding/faq#trbl_component_filtering).<br>* For each address component, either specify it in the address parameter or in a components filter, but not both. Specifying the same values in both may result in `ZERO_RESULTS`.<br><br><div class="note">Note: At least one of `address` or `components` is required.</div> |
| <code>latlng?</code> | <code>string</code> | The street address that you want to geocode, in the format used by the national postal service of the country concerned. Additional address elements such as business names and unit, suite or floor numbers should be avoided. |
| <code>locationType?</code> | <code>[LocationType](src/models/location-type.ts)[]</code> | A filter of one or more location types, separated by a pipe (`\|`). If the parameter contains multiple location types, the API returns all addresses that match any of the types. A note about processing: The `location_type` parameter does not restrict the search to the specified location type(s). Rather, the `location_type` acts as a post-search filter: the API fetches all results for the specified latlng, then discards those results that do not match the specified location type(s). The following values are supported:<br>* `APPROXIMATE` returns only the addresses that are characterized as approximate.<br>* `GEOMETRIC_CENTER` returns only geometric centers of a location such as a polyline (for example, a street) or polygon (region).<br>* `RANGE_INTERPOLATED` returns only the addresses that reflect an approximation (usually on a road) interpolated between two precise points (such as intersections). An interpolated range generally indicates that rooftop geocodes are unavailable for a street address.<br>* `ROOFTOP` returns only the addresses for which Google has location information accurate down to street address precision. |
| <code>placeId?</code> | <code>string</code> | A textual identifier that uniquely identifies a place, returned from a [Place Search](https://developers.google.com/maps/documentation/places/web-service/search).<br>For more information about place IDs, see the [place ID overview](https://developers.google.com/maps/documentation/places/web-service/place-id). |
| <code>resultType?</code> | <code>[ResultType](src/models/result-type.ts)[]</code> | A filter of one or more address types, separated by a pipe (\|). If the parameter contains multiple address types, the API returns all addresses that match any of the types. A note about processing: The `result_type` parameter does not restrict the search to the specified address type(s). Rather, the `result_type` acts as a post-search filter: the API fetches all results for the specified `latlng`, then discards those results that do not match the specified address type(s).The following values are supported:<br>* `administrative_area_level_1` indicates a first-order civil entity below the country level. Within the United States, these administrative levels are states. Not all nations exhibit these administrative levels. In most cases, administrative_area_level_1   * `short` names will closely match ISO 3166-2 subdivisions and other widely circulated lists; however this is not guaranteed as our geocoding results are based on a variety of signals and location data.<br>* `administrative_area_level_2` indicates a second-order civil entity below the country level. Within the United States, these administrative levels are counties. Not all nations exhibit these administrative levels.<br>* `administrative_area_level_3` indicates a third-order civil entity below the country level. This type indicates a minor civil division. Not all nations exhibit these administrative levels.<br>* `administrative_area_level_4` indicates a fourth-order civil entity below the country level. This type indicates a minor civil division. Not all nations exhibit these administrative levels.<br>* `administrative_area_level_5` indicates a fifth-order civil entity below the country level. This type indicates a minor civil division. Not all nations exhibit these administrative levels.<br>* `airport` indicates an airport.<br>* `colloquial_area` indicates a commonly-used alternative name for the entity.<br>* `country` indicates the national political entity, and is typically the highest order type returned by the Geocoder.<br>* `intersection` indicates a major intersection, usually of two major roads.<br>* `locality` indicates an incorporated city or town political entity.<br>* `natural_feature` indicates a prominent natural feature.<br>* `neighborhood` indicates a named neighborhood<br>* `park` indicates a named park.<br>* `plus_code` indicates an encoded location reference, derived from latitude and longitude. Plus codes can be used as a replacement for street addresses in places where they do not exist (where buildings are not numbered or streets are not named). See [https://plus.codes/](https://plus.codes/) for details.<br>* `point_of_interest` indicates a named point of interest. Typically, these "POI"s are prominent local entities that don't easily fit in another category, such as "Empire State Building" or "Eiffel Tower".<br>* `political` indicates a political entity. Usually, this type indicates a polygon of some civil administration.<br>* `postal_code` indicates a postal code as used to address postal mail within the country.<br>* `premise` indicates a named location, usually a building or collection of buildings with a common name<br>* `route` indicates a named route (such as "US 101").<br>* `street_address` indicates a precise street address.<br>* `sublocality` indicates a first-order civil entity below a locality. For some locations may receive one of the additional types: `sublocality_level_1` to `sublocality_level_5`. Each sublocality level is a civil entity. Larger numbers indicate a smaller geographic area.<br>* `subpremise` indicates a first-order entity below a named location, usually a singular building within a collection of buildings with a common name |
| <code>language?</code> | <code>[Language1](src/models/language1.ts)</code> | The language in which to return results.<br><br>* See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.<br>* If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.<br>* The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.<br>* If a name is not available in the preferred language, the API uses the closest match.<br>* The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian. |
| <code>region?</code> | <code>[Region1](src/models/region1.ts)</code> | The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland"). |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeocodingResponse](src/models/geocoding-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TimeZoneApi

> Source: [TimeZoneApi](src/resources/time-zone-api.ts)

<details>
<summary><code>timezone(request: TimeZoneApi.TimezoneRequest, options?: RequestOptions): ApiPromise&lt;TimeZoneResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Time Zone API provides a simple interface to request the time zone for locations on the surface of the earth, as well as the time offset from UTC for each of those locations. You request the time zone information for a specific latitude/longitude pair and date. The API returns the name of that time zone, the time offset from UTC, and the daylight savings offset.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.timeZoneApi.timezone({ location, timestamp });
  // TODO: Handle 'response' of type TimeZoneResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>location</code> | <code>string</code> | A comma-separated latitude,longitude tuple, `location=39.6034810,-119.6822510`, representing the location to look up. |
| <code>timestamp</code> | <code>number</code> | The desired time as seconds since midnight, January 1, 1970 UTC. The Time Zone API uses the `timestamp` to determine whether or not Daylight Savings should be applied, based on the time zone of the `location`. <br><br>Note that the API does not take historical time zones into account. That is, if you specify a past timestamp, the API does not take into account the possibility that the location was previously in a different time zone. |
| <code>language?</code> | <code>[Language1](src/models/language1.ts)</code> | The language in which to return results.<br><br>* See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.<br>* If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.<br>* The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.<br>* If a name is not available in the preferred language, the API uses the closest match.<br>* The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TimeZoneResponse](src/models/time-zone-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## RoadsApi

> Source: [RoadsApi](src/resources/roads-api.ts)

<details>
<summary><code>nearestRoads(request: RoadsApi.NearestRoadsRequest, options?: RequestOptions): ApiPromise&lt;NearestRoadsResponse, RoadsApi.NearestRoadsApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This service returns individual road segments for a given set of GPS coordinates. This services takes up to 100 GPS points and returns the closest road segments for each point. The points passed do not need to be part of a continuous path.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.roadsApi.nearestRoads({ points });
  // TODO: Handle 'response' of type NearestRoadsResponse
} catch (err) {
  if (err instanceof RoadsApi.NearestRoadsApiError && err.payload.kind === "nearestRoadsErrorResponse") {
    // TODO: Handle 'err.payload.body' of type NearestRoadsErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>points</code> | <code>string[]</code> | The points to be snapped. The points parameter accepts a list of latitude/longitude pairs. Separate latitude and longitude values with commas. Separate coordinates with the pipe character: "\|". For example: `points=60.170880,24.942795\|60.170879,24.942796\|60.170877,24.942796`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NearestRoadsResponse](src/models/nearest-roads-response.ts)</code>

**OnError**: <code>[RoadsApi.NearestRoadsApiError](src/resources/roads-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>snapToRoads(request: RoadsApi.SnapToRoadsRequest, options?: RequestOptions): ApiPromise&lt;SnapToRoadsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This service returns the best-fit road geometry for a given set of GPS coordinates. This service takes up to 100 GPS points collected along a route, and returns a similar set of data with the points snapped to the most likely roads the vehicle was traveling along. Optionally, you can request that the points be interpolated, resulting in a path that smoothly follows the geometry of the road.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.roadsApi.snapToRoads({ path });
  // TODO: Handle 'response' of type SnapToRoadsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>path</code> | <code>string[]</code> | The path to be snapped. The path parameter accepts a list of latitude/longitude pairs. Latitude and longitude values should be separated by commas. Coordinates should be separated by the pipe character: "\|". For example: `path=60.170880,24.942795\|60.170879,24.942796\|60.170877,24.942796`.<br><div class="note">Note: The snapping algorithm works best for points that are not too far apart. If you observe odd snapping behavior, try creating paths that have points closer together. To ensure the best snap-to-road quality, you should aim to provide paths on which consecutive pairs of points are within 300m of each other. This will also help in handling any isolated, long jumps between consecutive points caused by GPS signal loss, or noise.</div> |
| <code>interpolate?</code> | <code>boolean</code> | Whether to interpolate a path to include all points forming the full road-geometry. When true, additional interpolated points will also be returned, resulting in a path that smoothly follows the geometry of the road, even around corners and through tunnels. Interpolated paths will most likely contain more points than the original path. Defaults to `false`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnapToRoadsResponse](src/models/snap-to-roads-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DistanceMatrixApi

> Source: [DistanceMatrixApi](src/resources/distance-matrix-api.ts)

<details>
<summary><code>distanceMatrix(request: DistanceMatrixApi.DistanceMatrixRequest, options?: RequestOptions): ApiPromise&lt;DistanceMatrixResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Distance Matrix API is a service that provides travel distance and time for a matrix of origins and destinations. The API returns information based on the recommended route between start and end points, as calculated by the Google Maps API, and consists of rows containing duration and distance values for each pair.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.distanceMatrixApi.distanceMatrix({ destinations, origins });
  // TODO: Handle 'response' of type DistanceMatrixResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>destinations</code> | <code>string[]</code> | One or more locations to use as the finishing point for calculating travel distance and time. The options for the destinations parameter are the same as for the origins parameter. |
| <code>origins</code> | <code>string[]</code> | The starting point for calculating travel distance and time. You can supply one or more locations separated by the pipe character (\|), in the form of a place ID, an address, or latitude/longitude coordinates:<br>- **Place ID**: If you supply a place ID, you must prefix it with `place_id:`.<br>- **Address**: If you pass an address, the service geocodes the string and converts it to a latitude/longitude coordinate to calculate distance. This coordinate may be different from that returned by the Geocoding API, for example a building entrance rather than its center.<br>  <div class="note">Note: using place IDs is preferred over using addresses or latitude/longitude coordinates. Using coordinates will always result in the point being snapped to the road nearest to those coordinates - which may not be an access point to the property, or even a road that will quickly or safely lead to the destination. Using the address will provide the distance to the center of the building, as opposed to an entrance to the building.</div><br>- **Coordinates**: If you pass latitude/longitude coordinates, they they will snap to the nearest road. Passing a place ID is preferred. If you do pass coordinates, ensure that no space exists between the latitude and longitude values.<br>- **Plus codes** must be formatted as a global code or a compound code. Format plus codes as shown here (plus signs are url-escaped to %2B and spaces are url-escaped to %20):<br>  - **global code** is a 4 character area code and 6 character or longer local code (`849VCWC8+R9` is encoded to `849VCWC8%2BR9`).<br>  - **compound code** is a 6 character or longer local code with an explicit location (`CWC8+R9 Mountain View, CA, USA` is encoded to `CWC8%2BR9%20Mountain%20View%20CA%20USA`).<br>- **Encoded Polyline** Alternatively, you can supply an encoded set of coordinates using the [Encoded Polyline Algorithm](https://developers.google.com/maps/documentation/utilities/polylinealgorithm). This is particularly useful if you have a large number of origin points, because the URL is significantly shorter when using an encoded polyline.<br>  - Encoded polylines must be prefixed with `enc:` and followed by a colon `:`. For example: `origins=enc:gfo}EtohhU:`<br>  - You can also include multiple encoded polylines, separated by the pipe character `\|`. For example: <br>    ```<br>    origins=enc:wc~oAwquwMdlTxiKtqLyiK:\|enc:c~vnAamswMvlTortjGi}L:\|enc:udymA{~bxM:<br>    ``` |
| <code>arrivalTime?</code> | <code>number</code> | Specifies the desired time of arrival for transit directions, in seconds since midnight, January 1, 1970 UTC. You can specify either `departure_time` or `arrival_time`, but not both. Note that `arrival_time` must be specified as an integer. |
| <code>departureTime?</code> | <code>number</code> | Specifies the desired time of departure. You can specify the time as an integer in seconds since midnight, January 1, 1970 UTC. If a `departure_time` later than 9999-12-31T23:59:59.999999999Z is specified, the API will fall back the `departure_time` to 9999-12-31T23:59:59.999999999Z. Alternatively, you can specify a value of now, which sets the departure time to the current time (correct to the nearest second). The departure time may be specified in two cases:<br>* For requests where the travel mode is transit: You can optionally specify one of `departure_time` or `arrival_time`. If neither time is specified, the `departure_time` defaults to now (that is, the departure time defaults to the current time).<br>* For requests where the travel mode is driving: You can specify the `departure_time` to receive a route and trip duration (response field: duration_in_traffic) that take traffic conditions into account. The `departure_time` must be set to the current time or some time in the future. It cannot be in the past.<br><br><div class="note">Note: If departure time is not specified, choice of route and duration are based on road network and average time-independent traffic conditions. Results for a given request may vary over time due to changes in the road network, updated average traffic conditions, and the distributed nature of the service. Results may also vary between nearly-equivalent routes at any time or frequency.</div><br><div class="note">Note: Distance Matrix requests specifying `departure_time` when `mode=driving` are limited to a maximum of 100 elements per request. The number of origins times the number of destinations defines the number of elements.</div> |
| <code>avoid?</code> | <code>string</code> | Distances may be calculated that adhere to certain restrictions. Restrictions are indicated by use of the avoid parameter, and an argument to that parameter indicating the restriction to avoid. The following restrictions are supported:<br><br>* `tolls` indicates that the calculated route should avoid toll roads/bridges.<br>* `highways` indicates that the calculated route should avoid highways.<br>* `ferries` indicates that the calculated route should avoid ferries.<br>* `indoor` indicates that the calculated route should avoid indoor steps for walking and transit directions.<br><br><div class="note">Note: The addition of restrictions does not preclude routes that include the restricted feature; it biases the result to more favorable routes.</div> |
| <code>units?</code> | <code>[Units2](src/models/units2.ts)</code> | Specifies the unit system to use when displaying results.<br><br><div class="note">Note: this unit system setting only affects the text displayed within distance fields. The distance fields also contain values which are always expressed in meters.</div> |
| <code>language?</code> | <code>[Language1](src/models/language1.ts)</code> | The language in which to return results.<br><br>* See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.<br>* If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.<br>* The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.<br>* If a name is not available in the preferred language, the API uses the closest match.<br>* The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian. |
| <code>mode?</code> | <code>[Mode1](src/models/mode1.ts)</code> | For the calculation of distances and directions, you may specify the transportation mode to use. By default, `DRIVING` mode is used. By default, directions are calculated as driving directions. The following travel modes are supported:<br><br>* `driving` (default) indicates standard driving directions or distance using the road network.<br>* `walking` requests walking directions or distance via pedestrian paths & sidewalks (where available).<br>* `bicycling` requests bicycling directions or distance via bicycle paths & preferred streets (where available).<br>* `transit` requests directions or distance via public transit routes (where available). Transit trips are available for up to 7 days in the past or 100 days in the future. If you set the mode to transit, you can optionally specify either a `departure_time` or an `arrival_time`. If neither time is specified, the `departure_time` defaults to now (that is, the departure time defaults to the current time). You can also optionally include a `transit_mode` and/or a `transit_routing_preference`. <br><br><div class="note">Note: Both walking and bicycling directions may sometimes not include clear pedestrian or bicycling paths, so these directions will return warnings in the returned result which you must display to the user.</div> |
| <code>region?</code> | <code>[Region1](src/models/region1.ts)</code> | The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland"). |
| <code>trafficModel?</code> | <code>[TrafficModel1](src/models/traffic-model1.ts)</code> | Specifies the assumptions to use when calculating time in traffic. This setting affects the value returned in the duration_in_traffic field in the response, which contains the predicted time in traffic based on historical averages. The `traffic_model` parameter may only be specified for driving directions where the request includes a `departure_time`. The available values for this parameter are:<br>* `best_guess` (default) indicates that the returned duration_in_traffic should be the best estimate of travel time given what is known about both historical traffic conditions and live traffic. Live traffic becomes more important the closer the `departure_time` is to now.<br>* `pessimistic` indicates that the returned duration_in_traffic should be longer than the actual travel time on most days, though occasional days with particularly bad traffic conditions may exceed this value.<br>* `optimistic` indicates that the returned duration_in_traffic should be shorter than the actual travel time on most days, though occasional days with particularly good traffic conditions may be faster than this value.<br>The default value of `best_guess` will give the most useful predictions for the vast majority of use cases. It is possible the `best_guess` travel time prediction may be shorter than `optimistic`, or alternatively, longer than `pessimistic`, due to the way the `best_guess` prediction model integrates live traffic information. |
| <code>transitMode?</code> | <code>string</code> | Specifies one or more preferred modes of transit. This parameter may only be specified for transit directions. The parameter supports the following arguments:<br>* `bus` indicates that the calculated route should prefer travel by bus.<br>* `subway` indicates that the calculated route should prefer travel by subway.<br>* `train` indicates that the calculated route should prefer travel by train.<br>* `tram` indicates that the calculated route should prefer travel by tram and light rail.<br>* `rail` indicates that the calculated route should prefer travel by train, tram, light rail, and subway. This is equivalent to `transit_mode=train\|tram\|subway`. |
| <code>transitRoutingPreference?</code> | <code>[TransitRoutingPreference1](src/models/transit-routing-preference1.ts)</code> | Specifies preferences for transit routes. Using this parameter, you can bias the options returned, rather than accepting the default best route chosen by the API. This parameter may only be specified for transit directions. The parameter supports the following arguments:<br>* `less_walking` indicates that the calculated route should prefer limited amounts of walking.<br>* `fewer_transfers` indicates that the calculated route should prefer a limited number of transfers. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DistanceMatrixResponse](src/models/distance-matrix-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PlacesApi

> Source: [PlacesApi](src/resources/places-api.ts)

<details>
<summary><code>autocomplete(request: PlacesApi.AutocompleteRequest, options?: RequestOptions): ApiPromise&lt;PlacesAutocompleteResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Place Autocomplete service is a web service that returns place predictions in response to an HTTP request. The request specifies a textual search string and optional geographic bounds. The service can be used to provide autocomplete functionality for text-based geographic searches, by returning places such as businesses, addresses and points of interest as a user types.
<div class="note">Note: You can use Place Autocomplete even without a map. If you do show a map, it must be a Google map. When you display predictions from the Place Autocomplete service without a map, you must include the ['Powered by Google'](https://developers.google.com/maps/documentation/places/web-service/policies#logo_requirementshttps://developers.google.com/maps/documentation/places/web-service/policies#logo_requirements) logo.</div>

The Place Autocomplete service can match on full words and substrings, resolving place names, addresses, and plus codes. Applications can therefore send queries as the user types, to provide on-the-fly place predictions.

The returned predictions are designed to be presented to the user to aid them in selecting the desired place. You can send a [Place Details](https://developers.google.com/maps/documentation/places/web-service/details#PlaceDetailsRequests) request for more information about any of the places which are returned.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.placesApi.autocomplete({ input, radius });
  // TODO: Handle 'response' of type PlacesAutocompleteResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>input</code> | <code>string</code> | The text string on which to search. The Place Autocomplete service will return candidate matches based on this string and order results based on their perceived relevance. |
| <code>radius</code> | <code>number</code> | Defines the distance (in meters) within which to return place results. You may bias results to a specified circle by passing a `location` and a `radius` parameter. Doing so instructs the Places service to _prefer_ showing results within that circle; results outside of the defined area may still be displayed.<br><br>The radius will automatically be clamped to a maximum value depending on the type of search and other parameters.<br><br>* Autocomplete: 50,000 meters<br>* Nearby Search: <br>  * with `keyword` or `name`: 50,000 meters<br>  * without `keyword` or `name`<br>    * Up to 50,000 meters, adjusted dynamically based on area density, independent of `rankby` parameter.<br>    * When using `rankby=distance`, the radius parameter will not be accepted, and will result in an `INVALID_REQUEST`.<br>* Query Autocomplete: 50,000 meters<br>* Text Search: 50,000 meters |
| <code>sessiontoken?</code> | <code>string</code> | A random string which identifies an autocomplete [session](https://developers.google.com/maps/documentation/places/web-service/details#session_tokens) for billing purposes.<br><br>The session begins when the user starts typing a query, and concludes when they select a place and a call to Place Details is made. Each session can have multiple queries, followed by one place selection. The API key(s) used for each request within a session must belong to the same Google Cloud Console project. Once a session has concluded, the token is no longer valid; your app must generate a fresh token for each session. If the `sessiontoken` parameter is omitted, or if you reuse a session token, the session is charged as if no session token was provided (each request is billed separately).<br><br>We recommend the following guidelines:<br><br>- Use session tokens for all autocomplete sessions.<br>- Generate a fresh token for each session. Using a version 4 UUID is recommended.<br>- Ensure that the API key(s) used for all Place Autocomplete and Place Details requests within a session belong to the same Cloud Console project.<br>- Be sure to pass a unique session token for each new session. Using the same token for more than one session will result in each request being billed individually. |
| <code>components?</code> | <code>string</code> | A grouping of places to which you would like to restrict your results. Currently, you can use components to filter by up to 5 countries. Countries must be passed as a two character, ISO 3166-1 Alpha-2 compatible country code. For example: `components=country:fr` would restrict your results to places within France. Multiple countries must be passed as multiple `country:XX` filters, with the pipe character `\|` as a separator. For example: `components=country:us\|country:pr\|country:vi\|country:gu\|country:mp` would restrict your results to places within the United States and its unincorporated organized territories.<br><div class="note"><strong>Note:</strong> If you receive unexpected results with a country code, verify that you are using a code which includes the countries, dependent territories, and special areas of geographical interest you intend.  You can find code information at <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes" target="blank" class="external">Wikipedia: List of ISO 3166 country codes</a> or the <a href="https://www.iso.org/obp/ui/#search" target="blank" class="external">ISO Online Browsing Platform</a>.</div> |
| <code>strictbounds?</code> | <code>boolean</code> | Returns only those places that are strictly within the region defined by `location` and `radius`. This is a restriction, rather than a bias, meaning that results outside this region will not be returned even if they match the user input. |
| <code>offset?</code> | <code>number</code> | The position, in the input term, of the last character that the service uses to match predictions. For example, if the input is `Google` and the offset is 3, the service will match on `Goo`. The string determined by the offset is matched against the first word in the input term only. For example, if the input term is `Google abc` and the offset is 3, the service will attempt to match against `Goo abc`. If no offset is supplied, the service will use the whole term. The offset should generally be set to the position of the text caret. |
| <code>origin?</code> | <code>string</code> | The origin point from which to calculate straight-line distance to the destination (returned as `distance_meters`). If this value is omitted, straight-line distance will not be returned. Must be specified as `latitude,longitude`. |
| <code>location?</code> | <code>string</code> | The point around which to retrieve place information. This must be specified as `latitude,longitude`. The `radius` parameter must also be provided when specifying a location. If `radius` is not provided, the `location` parameter is ignored.<br><br><div class="note">When using the Text Search API, the `location` parameter may be overriden if the `query` contains an explicit location such as `Market in Barcelona`.</div> |
| <code>locationbias?</code> | <code>string</code> | Prefer results in a specified area, by specifying either a radius plus lat/lng, or two lat/lng pairs representing the points of a rectangle. If this parameter is not specified, the API uses IP address biasing by default.<br>- IP bias: Instructs the API to use IP address biasing. Pass the string `ipbias` (this option has no additional parameters).<br>- Circular: A string specifying radius in meters, plus lat/lng in decimal degrees. Use the following format: `circle:radiuslat,lng`.<br>- Rectangular: A string specifying two lat/lng pairs in decimal degrees, representing the south/west and north/east points of a rectangle. Use the following format:`rectangle:south,west\|north,east`. Note that east/west values are wrapped to the range -180, 180, and north/south values are clamped to the range -90, 90. |
| <code>locationrestriction?</code> | <code>string</code> | Restrict results to a specified area, by specifying either a radius plus lat/lng, or two lat/lng pairs representing the points of a rectangle.<br>- Circular: A string specifying radius in meters, plus lat/lng in decimal degrees. Use the following format: `circle:radiuslat,lng`.<br>- Rectangular: A string specifying two lat/lng pairs in decimal degrees, representing the south/west and north/east points of a rectangle. Use the following format:`rectangle:south,west\|north,east`. Note that east/west values are wrapped to the range -180, 180, and north/south values are clamped to the range -90, 90. |
| <code>types?</code> | <code>string</code> | You can restrict results from a Place Autocomplete request to be of a certain type by passing the `types` parameter. This parameter specifies a type or a type collection, as listed in [Place Types](https://developers.google.com/maps/documentation/places/web-service/supported_types). If nothing is specified, all types are returned.<br><br>For the value of the `types` parameter you can specify either:<br>* Up to five values from [Table 1](https://developers.google.com/maps/documentation/places/web-service/supported_types#table1) or [Table 2](https://developers.google.com/maps/documentation/places/web-service/supported_types#table2). For multiple values, separate each value with a `\|` (vertical bar). For example:<br><br>  `types=book_store\|cafe`<br><br>* Any supported filter in [Table 3](https://developers.google.com/maps/documentation/places/web-service/supported_types#table3). You can safely mix the `geocode` and `establishment` types. You cannot mix type collections (`address`, `(cities)` or `(regions)`) with any other type, or an error occurs.<br><br>The request will be rejected with an `INVALID_REQUEST` error if:<br><br>* More than five types are specified.<br>* Any unrecognized types are present.<br>* Any types from in [Table 1](https://developers.google.com/maps/documentation/places/web-service/supported_types#table1) or [Table 2](https://developers.google.com/maps/documentation/places/web-service/supported_types#table2) are mixed with any of the filters in [Table 3](https://developers.google.com/maps/documentation/places/web-service/supported_types#table3). |
| <code>language?</code> | <code>[Language1](src/models/language1.ts)</code> | The language in which to return results.<br><br>* See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.<br>* If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.<br>* The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.<br>* If a name is not available in the preferred language, the API uses the closest match.<br>* The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian. |
| <code>region?</code> | <code>[Region1](src/models/region1.ts)</code> | The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland"). |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlacesAutocompleteResponse](src/models/places-autocomplete-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>findPlaceFromText(request: PlacesApi.FindPlaceFromTextRequest, options?: RequestOptions): ApiPromise&lt;PlacesFindPlaceFromTextResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A Find Place request takes a text input and returns a place. The input can be any kind of Places text data, such as a name, address, or phone number. The request must be a string. A Find Place request using non-string data such as a lat/lng coordinate or plus code generates an error.
<div class="note">Note: If you omit the fields parameter from a Find Place request, only the place_id for the result will be returned.</div>


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.placesApi.findPlaceFromText({ input, inputtype });
  // TODO: Handle 'response' of type PlacesFindPlaceFromTextResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>input</code> | <code>string</code> | The text string on which to search, for example: "restaurant" or "123 Main Street". This must be a place name, address, or category of establishments. Any other types of input can generate errors<br>and are not guaranteed to return valid results. The Places API will return candidate matches based on this string and order the results based on their perceived relevance. |
| <code>inputtype</code> | <code>[Inputtype1](src/models/inputtype1.ts)</code> | The type of input. This can be one of either `textquery` or `phonenumber`. Phone numbers must be in international format (prefixed by a plus sign ("+"), followed by the country code, then the phone number itself). See [E.164 ITU recommendation](https://en.wikipedia.org/wiki/E.164) for more information. |
| <code>fields?</code> | <code>string[]</code> | <div class="caution"> Caution: Place Search requests and Place Details requests do not return the same fields. Place Search requests return a subset of the fields that are returned by Place Details requests. If the field you want is not returned by Place Search, you can use Place Search to get a <code>place_id</code>, then use that Place ID to make a Place Details request. For more information on the fields that are unavailable in a Place Search request, see <a href="https://developers.google.com/maps/documentation/places/web-service/place-data-fields#places-api-fields-support">Places API fields support</a>.</div><br><br>Use the fields parameter to specify a comma-separated list of place data types to return. For example: `fields=formatted_address,name,geometry`. Use a forward slash when specifying compound values. For example: `opening_hours/open_now`.<br><br>Fields are divided into three billing categories: Basic, Contact, and Atmosphere. Basic fields are billed at base rate, and incur no additional charges. Contact and Atmosphere fields are billed at a higher rate. See the [pricing sheet](https://developers.google.com/maps/documentation/places/web-service/usage-and-billing/) for more information. Attributions, `html_attributions`, are always returned with every call, regardless of whether the field has been requested.<br><br>**Basic**<br><br>The Basic category includes the following fields: `address_components`, `adr_address`, `business_status`, `formatted_address`, `geometry`, `icon`, `icon_mask_base_uri`, `icon_background_color`, `name`, `permanently_closed` ([deprecated](https://developers.google.com/maps/deprecations)), `photo`, `place_id`, `plus_code`, `type`, `url`, `utc_offset`, `vicinity`, `wheelchair_accessible_entrance`.<br><br>**Contact**<br><br>The Contact category includes the following fields: `current_opening_hours`, `formatted_phone_number`, `international_phone_number`, `opening_hours`, `secondary_opening_hours`, `website`<br><br>**Atmosphere**<br><br>The Atmosphere category includes the following fields: `curbside_pickup`, `delivery`, `dine_in`, `editorial_summary`, `price_level`, `rating`, `reservable`, `reviews`, `serves_beer`, `serves_breakfast`, `serves_brunch`, `serves_dinner`, `serves_lunch`, `serves_vegetarian_food`, `serves_wine`, `takeout`, `user_ratings_total`. |
| <code>locationbias?</code> | <code>string</code> | Prefer results in a specified area, by specifying either a radius plus lat/lng, or two lat/lng pairs representing the points of a rectangle. If this parameter is not specified, the API uses IP address biasing by default.<br>- IP bias: Instructs the API to use IP address biasing. Pass the string `ipbias` (this option has no additional parameters).<br>- Circular: A string specifying radius in meters, plus lat/lng in decimal degrees. Use the following format: `circle:radiuslat,lng`.<br>- Rectangular: A string specifying two lat/lng pairs in decimal degrees, representing the south/west and north/east points of a rectangle. Use the following format:`rectangle:south,west\|north,east`. Note that east/west values are wrapped to the range -180, 180, and north/south values are clamped to the range -90, 90. |
| <code>language?</code> | <code>[Language1](src/models/language1.ts)</code> | The language in which to return results.<br><br>* See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.<br>* If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.<br>* The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.<br>* If a name is not available in the preferred language, the API uses the closest match.<br>* The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlacesFindPlaceFromTextResponse](src/models/places-find-place-from-text-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>nearbySearch(request: PlacesApi.NearbySearchRequest, options?: RequestOptions): ApiPromise&lt;PlacesTextSearchResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A Nearby Search lets you search for places within a specified area. You can refine your search request by supplying keywords or specifying the type of place you are searching for.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.placesApi.nearbySearch({ location, radius });
  // TODO: Handle 'response' of type PlacesTextSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>location</code> | <code>string</code> | The point around which to retrieve place information. This must be specified as `latitude,longitude`. |
| <code>radius</code> | <code>number</code> | Defines the distance (in meters) within which to return place results. You may bias results to a specified circle by passing a `location` and a `radius` parameter. Doing so instructs the Places service to _prefer_ showing results within that circle; results outside of the defined area may still be displayed.<br><br>The radius will automatically be clamped to a maximum value depending on the type of search and other parameters.<br><br>* Autocomplete: 50,000 meters<br>* Nearby Search: <br>  * with `keyword` or `name`: 50,000 meters<br>  * without `keyword` or `name`<br>    * Up to 50,000 meters, adjusted dynamically based on area density, independent of `rankby` parameter.<br>    * When using `rankby=distance`, the radius parameter will not be accepted, and will result in an `INVALID_REQUEST`.<br>* Query Autocomplete: 50,000 meters<br>* Text Search: 50,000 meters |
| <code>keyword?</code> | <code>string</code> | The text string on which to search, for example: "restaurant" or "123 Main Street". This must be a place name, address, or category of establishments.<br>Any other types of input can generate errors and are not guaranteed to return valid results. The Google Places service will return candidate matches<br>based on this string and order the results based on their perceived relevance.<br><br>Explicitly including location information using this parameter may conflict with the location, radius, and rankby parameters, causing unexpected results.<br><br>If this parameter is omitted, places with a business_status of CLOSED_TEMPORARILY or CLOSED_PERMANENTLY will not be returned. |
| <code>maxprice?</code> | <code>[Maxprice1](src/models/maxprice1.ts)</code> | Restricts results to only those places within the specified range. Valid values range between 0 (most affordable) to 4 (most expensive), inclusive. The exact amount indicated by a specific value will vary from region to region. |
| <code>minprice?</code> | <code>[Minprice1](src/models/minprice1.ts)</code> | Restricts results to only those places within the specified range. Valid values range between 0 (most affordable) to 4 (most expensive), inclusive. The exact amount indicated by a specific value will vary from region to region. |
| <code>name?</code> | <code>string</code> | Equivalent to `keyword`. Values in this field are combined with values in the `keyword` field and passed as part of the same search string. |
| <code>opennow?</code> | <code>boolean</code> | Returns only those places that are open for business at the time the query is sent. Places that do not specify opening hours in the Google Places database will not be returned if you include this parameter in your query. |
| <code>pagetoken?</code> | <code>string</code> | Returns up to 20 results from a previously run search. Setting a `pagetoken` parameter will execute a search with the same parameters used previously — all parameters other than pagetoken will be ignored. |
| <code>rankby?</code> | <code>[Rankby1](src/models/rankby1.ts)</code> | Specifies the order in which results are listed. Possible values are:<br>- `prominence` (default). This option sorts results based on their importance. Ranking will favor prominent places within the set radius over nearby places that match but that are less prominent. Prominence can be affected by a place's ranking in Google's index, global popularity, and other factors. When prominence is specified, the `radius` parameter is required.<br>- `distance`. This option biases search results in ascending order by their distance from the specified location. When `distance` is specified, one or more of `keyword`, `name`, or `type` is required and `radius` is disallowed. |
| <code>type?</code> | <code>string</code> | Restricts the results to places matching the specified type. Only one type may be specified. If more than one type is provided, all types following the first entry are ignored.<br><br>* `type=hospital\|pharmacy\|doctor` becomes `type=hospital`<br>* `type=hospital,pharmacy,doctor` is ignored entirely<br><br>See the list of [supported types](https://developers.google.com/maps/documentation/places/web-service/supported_types).<br><div class="note">Note: Adding both `keyword` and `type` with the same value (`keyword=cafe&type=cafe` or `keyword=parking&type=parking`) can yield `ZERO_RESULTS`.</div> |
| <code>language?</code> | <code>[Language1](src/models/language1.ts)</code> | The language in which to return results.<br><br>* See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.<br>* If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.<br>* The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.<br>* If a name is not available in the preferred language, the API uses the closest match.<br>* The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlacesTextSearchResponse](src/models/places-text-search-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>placeDetails(request: PlacesApi.PlaceDetailsRequest, options?: RequestOptions): ApiPromise&lt;PlacesDetailsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Places API is a service that returns information about places using HTTP requests. Places are defined within this API as establishments, geographic locations, or prominent points of interest.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.placesApi.placeDetails({ placeId });
  // TODO: Handle 'response' of type PlacesDetailsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>placeId</code> | <code>string</code> | A textual identifier that uniquely identifies a place, returned from a [Place Search](https://developers.google.com/maps/documentation/places/web-service/search).<br>For more information about place IDs, see the [place ID overview](https://developers.google.com/maps/documentation/places/web-service/place-id). |
| <code>fields?</code> | <code>string[]</code> | <div class="caution"> Caution: Place Search requests and Place Details requests do not return the same fields. Place Search requests return a subset of the fields that are returned by Place Details requests. If the field you want is not returned by Place Search, you can use Place Search to get a <code>place_id</code>, then use that Place ID to make a Place Details request. For more information on the fields that are unavailable in a Place Search request, see <a href="https://developers.google.com/maps/documentation/places/web-service/place-data-fields#places-api-fields-support">Places API fields support</a>.</div><br><br>Use the fields parameter to specify a comma-separated list of place data types to return. For example: `fields=formatted_address,name,geometry`. Use a forward slash when specifying compound values. For example: `opening_hours/open_now`.<br><br>Fields are divided into three billing categories: Basic, Contact, and Atmosphere. Basic fields are billed at base rate, and incur no additional charges. Contact and Atmosphere fields are billed at a higher rate. See the [pricing sheet](https://developers.google.com/maps/documentation/places/web-service/usage-and-billing/) for more information. Attributions, `html_attributions`, are always returned with every call, regardless of whether the field has been requested.<br><br>**Basic**<br><br>The Basic category includes the following fields: `address_components`, `adr_address`, `business_status`, `formatted_address`, `geometry`, `icon`, `icon_mask_base_uri`, `icon_background_color`, `name`, `permanently_closed` ([deprecated](https://developers.google.com/maps/deprecations)), `photo`, `place_id`, `plus_code`, `type`, `url`, `utc_offset`, `vicinity`, `wheelchair_accessible_entrance`.<br><br>**Contact**<br><br>The Contact category includes the following fields: `current_opening_hours`, `formatted_phone_number`, `international_phone_number`, `opening_hours`, `secondary_opening_hours`, `website`<br><br>**Atmosphere**<br><br>The Atmosphere category includes the following fields: `curbside_pickup`, `delivery`, `dine_in`, `editorial_summary`, `price_level`, `rating`, `reservable`, `reviews`, `serves_beer`, `serves_breakfast`, `serves_brunch`, `serves_dinner`, `serves_lunch`, `serves_vegetarian_food`, `serves_wine`, `takeout`, `user_ratings_total`. |
| <code>sessiontoken?</code> | <code>string</code> | A random string which identifies an autocomplete [session](https://developers.google.com/maps/documentation/places/web-service/details#session_tokens) for billing purposes.<br><br>The session begins when the user starts typing a query, and concludes when they select a place and a call to Place Details is made. Each session can have multiple queries, followed by one place selection. The API key(s) used for each request within a session must belong to the same Google Cloud Console project. Once a session has concluded, the token is no longer valid; your app must generate a fresh token for each session. If the `sessiontoken` parameter is omitted, or if you reuse a session token, the session is charged as if no session token was provided (each request is billed separately).<br><br>We recommend the following guidelines:<br><br>- Use session tokens for all autocomplete sessions.<br>- Generate a fresh token for each session. Using a version 4 UUID is recommended.<br>- Ensure that the API key(s) used for all Place Autocomplete and Place Details requests within a session belong to the same Cloud Console project.<br>- Be sure to pass a unique session token for each new session. Using the same token for more than one session will result in each request being billed individually. |
| <code>language?</code> | <code>[Language1](src/models/language1.ts)</code> | The language in which to return results.<br><br>* See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.<br>* If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.<br>* The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.<br>* If a name is not available in the preferred language, the API uses the closest match.<br>* The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian. |
| <code>region?</code> | <code>[Region1](src/models/region1.ts)</code> | The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland"). |
| <code>reviewsSort?</code> | <code>string</code> | The sorting method to use when returning reviews. Can be set to `most_relevant` (default) or `newest`.<br><br>- For `most_relevant` (default), reviews are sorted by relevance; the service will bias the results to return reviews originally written in the preferred language.<br>- For `newest`, reviews are sorted in chronological order; the preferred language does not affect the sort order.<br><br>Google recommends that you display how the reviews are being sorted to the end user. |
| <code>reviewsNoTranslations?</code> | <code>boolean</code> | Specify `reviews_no_translations=true` to disable translation of reviews; specify `reviews_no_translations=false` to enable translation of reviews. Reviews are returned in their original language.<br><br>If omitted, or passed with no value, translation of reviews is enabled. If the `language` parameter was specified in the request, use the specified language as the preferred language for translation. If `language` is omitted, the API attempts to use the `Accept-Language` header as the preferred language. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlacesDetailsResponse](src/models/places-details-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>placePhoto(request: PlacesApi.PlacePhotoRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Place Photo service, part of the Places API, is a read- only API that allows you to add high quality photographic content to your application. The Place Photo service gives you access to the millions of photos stored in the Places database. When you get place information using a Place Details request, photo references will be returned for relevant photographic content. Find Place, Nearby Search, and Text Search requests also return a single photo reference per place, when relevant. Using the Photo service you can then access the referenced photos and resize the image to the optimal size for your application.

Photos returned by the Photo service are sourced from a variety of locations, including business owners and user contributed photos. In most cases, these photos can be used without attribution, or will have the required attribution included as a part of the image. However, if the returned photo element includes a value in the html_attributions field, you will have to include the additional attribution in your application wherever you display the image.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.placesApi.placePhoto({ photoReference });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>photoReference</code> | <code>string</code> | A string identifier that uniquely identifies a photo. Photo references are returned from either a Place Search or Place Details request. |
| <code>maxheight?</code> | <code>number</code> | Specifies the maximum desired height, in pixels, of the image. If the image is smaller than the values specified, the original image will be returned. If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions, restricted to its original aspect ratio. Both the `maxheight` and `maxwidth` properties accept an integer between `1` and `1600`. |
| <code>maxwidth?</code> | <code>number</code> | Specifies the maximum desired width, in pixels, of the image. If the image is smaller than the values specified, the original image will be returned. If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions, restricted to its original aspect ratio. Both the `maxheight` and `maxwidth` properties accept an integer between `1` and `1600`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryAutocomplete(request: PlacesApi.QueryAutocompleteRequest, options?: RequestOptions): ApiPromise&lt;PlacesQueryAutocompleteResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Query Autocomplete service can be used to provide a query prediction for text-based geographic searches, by returning suggested queries as you type.

The Query Autocomplete service allows you to add on-the-fly geographic query predictions to your application. Instead of searching for a specific location, a user can type in a categorical search, such as "pizza near New York" and the service responds with a list of suggested queries matching the string. As the Query Autocomplete service can match on both full words and substrings, applications can send queries as the user types to provide on-the-fly predictions.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.placesApi.queryAutocomplete({ input, radius });
  // TODO: Handle 'response' of type PlacesQueryAutocompleteResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>input</code> | <code>string</code> | The text string on which to search. The Place Autocomplete service will return candidate matches based on this string and order results based on their perceived relevance. |
| <code>radius</code> | <code>number</code> | Defines the distance (in meters) within which to return place results. You may bias results to a specified circle by passing a `location` and a `radius` parameter. Doing so instructs the Places service to _prefer_ showing results within that circle; results outside of the defined area may still be displayed.<br><br>The radius will automatically be clamped to a maximum value depending on the type of search and other parameters.<br><br>* Autocomplete: 50,000 meters<br>* Nearby Search: <br>  * with `keyword` or `name`: 50,000 meters<br>  * without `keyword` or `name`<br>    * Up to 50,000 meters, adjusted dynamically based on area density, independent of `rankby` parameter.<br>    * When using `rankby=distance`, the radius parameter will not be accepted, and will result in an `INVALID_REQUEST`.<br>* Query Autocomplete: 50,000 meters<br>* Text Search: 50,000 meters |
| <code>offset?</code> | <code>number</code> | The position, in the input term, of the last character that the service uses to match predictions. For example, if the input is `Google` and the offset is 3, the service will match on `Goo`. The string determined by the offset is matched against the first word in the input term only. For example, if the input term is `Google abc` and the offset is 3, the service will attempt to match against `Goo abc`. If no offset is supplied, the service will use the whole term. The offset should generally be set to the position of the text caret. |
| <code>location?</code> | <code>string</code> | The point around which to retrieve place information. This must be specified as `latitude,longitude`. <br><br><div class="note">The <code>location</code> parameter may be overriden if the <code>query</code> contains an explicit location such as <code>Market in Barcelona</code>. Using quotes around the query may also influence the weight given to the <code>location</code> and <code>radius</code>.</div> |
| <code>language?</code> | <code>[Language1](src/models/language1.ts)</code> | The language in which to return results.<br><br>* See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.<br>* If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.<br>* The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.<br>* If a name is not available in the preferred language, the API uses the closest match.<br>* The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlacesQueryAutocompleteResponse](src/models/places-query-autocomplete-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>textSearch(request: PlacesApi.TextSearchRequest, options?: RequestOptions): ApiPromise&lt;PlacesTextSearchResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Google Places API Text Search Service is a web service that returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street". The service responds with a list of places matching the text string and any location bias that has been set.

The service is especially useful for making [ambiguous address](https://developers.google.com/maps/documentation/geocoding/best-practices) queries in an automated system, and non-address components of the string may match businesses as well as addresses. Examples of ambiguous address queries are incomplete addresses, poorly formatted addresses, or a request that includes non-address components such as business names.

The search response will include a list of places. You can send a Place Details request for more information about any of the places in the response.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.placesApi.textSearch({ query, radius });
  // TODO: Handle 'response' of type PlacesTextSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>string</code> | The text string on which to search, for example: "restaurant" or "123 Main Street". This must a place name, address, or category of establishments. Any other types<br>of input can generate errors and are not guaranteed to return valid results. The Google Places service will return candidate matches based on this string and order<br>the results based on their perceived relevance. |
| <code>radius</code> | <code>number</code> | Defines the distance (in meters) within which to return place results. You may bias results to a specified circle by passing a `location` and a `radius` parameter. Doing so instructs the Places service to _prefer_ showing results within that circle; results outside of the defined area may still be displayed.<br><br>The radius will automatically be clamped to a maximum value depending on the type of search and other parameters.<br><br>* Autocomplete: 50,000 meters<br>* Nearby Search: <br>  * with `keyword` or `name`: 50,000 meters<br>  * without `keyword` or `name`<br>    * Up to 50,000 meters, adjusted dynamically based on area density, independent of `rankby` parameter.<br>    * When using `rankby=distance`, the radius parameter will not be accepted, and will result in an `INVALID_REQUEST`.<br>* Query Autocomplete: 50,000 meters<br>* Text Search: 50,000 meters |
| <code>location?</code> | <code>string</code> | The point around which to retrieve place information. This must be specified as `latitude,longitude`. <br><br><div class="note">The <code>location</code> parameter may be overriden if the <code>query</code> contains an explicit location such as <code>Market in Barcelona</code>. Using quotes around the query may also influence the weight given to the <code>location</code> and <code>radius</code>.</div> |
| <code>maxprice?</code> | <code>[Maxprice1](src/models/maxprice1.ts)</code> | Restricts results to only those places within the specified range. Valid values range between 0 (most affordable) to 4 (most expensive), inclusive. The exact amount indicated by a specific value will vary from region to region. |
| <code>minprice?</code> | <code>[Minprice1](src/models/minprice1.ts)</code> | Restricts results to only those places within the specified range. Valid values range between 0 (most affordable) to 4 (most expensive), inclusive. The exact amount indicated by a specific value will vary from region to region. |
| <code>opennow?</code> | <code>boolean</code> | Returns only those places that are open for business at the time the query is sent. Places that do not specify opening hours in the Google Places database will not be returned if you include this parameter in your query. |
| <code>pagetoken?</code> | <code>string</code> | Returns up to 20 results from a previously run search. Setting a `pagetoken` parameter will execute a search with the same parameters used previously — all parameters other than pagetoken will be ignored. |
| <code>type?</code> | <code>string</code> | Restricts the results to places matching the specified type. Only one type may be specified. If more than one type is provided, all types following the first entry are ignored.<br><br>* `type=hospital\|pharmacy\|doctor` becomes `type=hospital`<br>* `type=hospital,pharmacy,doctor` is ignored entirely<br><br>See the list of [supported types](https://developers.google.com/maps/documentation/places/web-service/supported_types).<br><div class="note">Note: Adding both `keyword` and `type` with the same value (`keyword=cafe&type=cafe` or `keyword=parking&type=parking`) can yield `ZERO_RESULTS`.</div> |
| <code>language?</code> | <code>[Language1](src/models/language1.ts)</code> | The language in which to return results.<br><br>* See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.<br>* If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.<br>* The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.<br>* If a name is not available in the preferred language, the API uses the closest match.<br>* The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian. |
| <code>region?</code> | <code>[Region1](src/models/region1.ts)</code> | The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland"). |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlacesTextSearchResponse](src/models/places-text-search-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## StreetViewApi

> Source: [StreetViewApi](src/resources/street-view-api.ts)

<details>
<summary><code>streetView(request: StreetViewApi.StreetViewRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Street View Static API lets you embed a static (non-interactive) Street View panorama or thumbnail into your web page, without the use of JavaScript. The viewport is defined with URL parameters sent through a standard HTTP request, and is returned as a static image.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.streetViewApi.streetView({ size });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>size</code> | <code>string</code> | Specifies the output size of the image in pixels. Must not exceed 640 pixels wide or high, anything over will default to 640 pixels. Size is specified as `{width}x{height}` - for example, `size=600x400` returns an image 600 pixels wide, and 400 high. |
| <code>fov?</code> | <code>number</code> | Determines the horizontal field of view of the image. The field of view is expressed in degrees, with a maximum allowed value of 120. When dealing with a fixed-size viewport, as with a Street View image of a set size, field of view in essence represents zoom, with smaller numbers indicating a higher level of zoom. Default is 90. |
| <code>heading?</code> | <code>number</code> | Indicates the compass heading of the camera. Accepted values are from 0 to 360 (both values indicating North, with 90 indicating East, and 180 South). If no heading is specified, a value will be calculated that directs the camera towards the specified location, from the point at which the closest photograph was taken. |
| <code>location?</code> | <code>string</code> | The point around which to retrieve place information. The Street View Static API will snap to the panorama photographed closest to this location. When an address text string is provided, the API may use a different camera location to better display the specified location. When a lat/lng is provided, the API searches a 50 meter radius for a photograph closest to this location. Because Street View imagery is periodically refreshed, and photographs may be taken from slightly different positions each time, it's possible that your `location` may snap to a different panorama when imagery is updated. |
| <code>pano?</code> | <code>string</code> | A specific panorama ID. These are generally stable, though panoramas may change ID over time as imagery is refreshed. |
| <code>pitch?</code> | <code>number</code> | Specifies the up or down angle of the camera relative to the Street View vehicle. This is often, but not always, flat horizontal. Positive values angle the camera up (with 90 degrees indicating straight up); negative values angle the camera down (with -90 indicating straight down). Default is 0. |
| <code>radius?</code> | <code>number</code> | Sets a radius, specified in meters, in which to search for a panorama, centered on the given latitude and longitude. Valid values are non-negative integers. Default is 50 meters. |
| <code>returnErrorCode?</code> | <code>boolean</code> | Indicates whether the API should return a non `200 Ok` HTTP status when no image is found (`404 NOT FOUND`), or in response to an invalid request (400 BAD REQUEST). Valid values are `true` and `false`. If set to `true`, an error message is returned in place of the generic gray image. This eliminates the need to make a separate call to check for image availability. |
| <code>signature?</code> | <code>string</code> | A digital signature used to verify that any site generating requests using your API key is authorized to do so. Requests that do not include a digital signature might fail. For more information, see [Get a Key and Signature](https://developers.google.com/maps/documentation/streetview/get-api-key). |
| <code>source?</code> | <code>[Source1](src/models/source1.ts)</code> | Limits Street View searches to selected sources. Valid values are:<br>* `default` uses the default sources for Street View; searches are not limited to specific sources.<br>* `outdoor` limits searches to outdoor collections. Indoor collections are not included in search results. Note that outdoor panoramas may not exist for the specified location. Also note that the search only returns panoramas where it's possible to determine whether they're indoors or outdoors. For example, PhotoSpheres are not returned because it's unknown whether they are indoors or outdoors. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>streetViewMetadata(request: StreetViewApi.StreetViewMetadataRequest, options?: RequestOptions): ApiPromise&lt;StreetViewResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Street View Static API metadata requests provide data about Street View panoramas. Using the metadata, you can find out if a Street View image is available at a given location, as well as getting programmatic access to the latitude and longitude, the panorama ID, the date the photo was taken, and the copyright information for the image. Accessing this metadata allows you to customize error behavior in your application.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.streetViewApi.streetViewMetadata();
  // TODO: Handle 'response' of type StreetViewResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>heading?</code> | <code>number</code> | Indicates the compass heading of the camera. Accepted values are from 0 to 360 (both values indicating North, with 90 indicating East, and 180 South). If no heading is specified, a value will be calculated that directs the camera towards the specified location, from the point at which the closest photograph was taken. |
| <code>location?</code> | <code>string</code> | The point around which to retrieve place information. The Street View Static API will snap to the panorama photographed closest to this location. When an address text string is provided, the API may use a different camera location to better display the specified location. When a lat/lng is provided, the API searches a 50 meter radius for a photograph closest to this location. Because Street View imagery is periodically refreshed, and photographs may be taken from slightly different positions each time, it's possible that your `location` may snap to a different panorama when imagery is updated. |
| <code>pano?</code> | <code>string</code> | A specific panorama ID. These are generally stable, though panoramas may change ID over time as imagery is refreshed. |
| <code>pitch?</code> | <code>number</code> | Specifies the up or down angle of the camera relative to the Street View vehicle. This is often, but not always, flat horizontal. Positive values angle the camera up (with 90 degrees indicating straight up); negative values angle the camera down (with -90 indicating straight down). Default is 0. |
| <code>radius?</code> | <code>number</code> | Sets a radius, specified in meters, in which to search for a panorama, centered on the given latitude and longitude. Valid values are non-negative integers. Default is 50 meters. |
| <code>returnErrorCode?</code> | <code>boolean</code> | Indicates whether the API should return a non `200 Ok` HTTP status when no image is found (`404 NOT FOUND`), or in response to an invalid request (400 BAD REQUEST). Valid values are `true` and `false`. If set to `true`, an error message is returned in place of the generic gray image. This eliminates the need to make a separate call to check for image availability. |
| <code>signature?</code> | <code>string</code> | A digital signature used to verify that any site generating requests using your API key is authorized to do so. Requests that do not include a digital signature might fail. For more information, see [Get a Key and Signature](https://developers.google.com/maps/documentation/streetview/get-api-key). |
| <code>size?</code> | <code>string</code> | Specifies the output size of the image in pixels. Size is specified as `{width}x{height}` - for example, `size=600x400` returns an image 600 pixels wide, and 400 high. |
| <code>source?</code> | <code>[Source1](src/models/source1.ts)</code> | Limits Street View searches to selected sources. Valid values are:<br>* `default` uses the default sources for Street View; searches are not limited to specific sources.<br>* `outdoor` limits searches to outdoor collections. Indoor collections are not included in search results. Note that outdoor panoramas may not exist for the specified location. Also note that the search only returns panoramas where it's possible to determine whether they're indoors or outdoors. For example, PhotoSpheres are not returned because it's unknown whether they are indoors or outdoors. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StreetViewResponse](src/models/street-view-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

