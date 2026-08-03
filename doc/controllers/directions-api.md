# Directions API

```ts
const directionsApi = new DirectionsApi(client);
```

## Class Name

`DirectionsApi`


# Directions

The Directions API is a web service that uses an HTTP request to return JSON or XML-formatted directions between locations. You can receive directions for several modes of transportation, such as transit, driving, walking, or cycling.

```ts
async directions(
  destination: string,
  origin: string,
  arrivalTime?: number,
  departureTime?: number,
  alternatives?: boolean,
  avoid?: string,
  units?: Units1,
  waypoints?: string,
  language?: Language1,
  mode?: Mode1,
  region?: Region1,
  trafficModel?: TrafficModel1,
  transitMode?: string,
  transitRoutingPreference?: TransitRoutingPreference1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DirectionsResponse>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-query-parameter.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `destination` | `string` | Query, Required | The place ID, address, or textual latitude/longitude value to which you wish to calculate directions. The options for the destination parameter are the same as for the origin parameter. |
| `origin` | `string` | Query, Required | The place ID, address, or textual latitude/longitude value from which you wish to calculate directions.<br><br>* Place IDs must be prefixed with `place_id:`. You can retrieve place IDs from the Geocoding API and the Places API (including Place Autocomplete). For an example using place IDs from Place Autocomplete, see [Place Autocomplete and Directions](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-directions). For more about place IDs, see the [Place ID overview](https://developers.google.com/maps/documentation/places/web-service/place-id).<br>  <br>  ```<br>  origin=place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE<br>  ```<br><br>* If you pass an address, the Directions service geocodes the string and converts it to a latitude/longitude coordinate to calculate directions. This coordinate may be different from that returned by the Geocoding API, for example a building entrance rather than its center.<br>  <br>  ```<br>  origin=24+Sussex+Drive+Ottawa+ON<br>  ```<br>  <br>  Using place IDs is preferred over using addresses or latitude/longitude coordinates. Using coordinates will always result in the point being snapped to the road nearest to those coordinates - which may not be an access point to the property, or even a road that will quickly or safely lead to the destination.<br><br>* If you pass coordinates, the point will snap to the nearest road. Passing a place ID is preferred. If you do pass coordinates, ensure that no space exists between the latitude and longitude values.<br>  <br>  ```<br>  origin=41.43206,-81.38992<br>  ```<br><br>* Plus codes must be formatted as a global code or a compound code. Format plus codes as shown here (plus signs are url-escaped to `%2B` and spaces are url-escaped to `%20`).<br>  <br>  * **Global code** is a 4 character area code and 6 character or longer local code (849VCWC8+R9 is `849VCWC8%2BR9`).<br>  * **Compound code** is a 6 character or longer local code with an explicit location (CWC8+R9 Mountain View, CA, USA is `CWC8%2BR9%20Mountain%20View%20CA%20USA`).<br><br><div class="note">Note: For efficiency and accuracy, use place ID's when possible. These ID's are uniquely explicit like a lat/lng value pair and provide geocoding benefits for routing such as access points and traffic variables. Unlike an address, ID's do not require the service to perform a search or an intermediate request for place details; therefore, performance is better.</div><br> |
| `arrivalTime` | `number \| undefined` | Query, Optional | Specifies the desired time of arrival for transit directions, in seconds since midnight, January 1, 1970 UTC. You can specify either `departure_time` or `arrival_time`, but not both. Note that `arrival_time` must be specified as an integer. |
| `departureTime` | `number \| undefined` | Query, Optional | Specifies the desired time of departure. You can specify the time as an integer in seconds since midnight, January 1, 1970 UTC. If a `departure_time` later than 9999-12-31T23:59:59.999999999Z is specified, the API will fall back the `departure_time` to 9999-12-31T23:59:59.999999999Z. Alternatively, you can specify a value of now, which sets the departure time to the current time (correct to the nearest second). The departure time may be specified in two cases:<br><br>* For requests where the travel mode is transit: You can optionally specify one of `departure_time` or `arrival_time`. If neither time is specified, the `departure_time` defaults to now (that is, the departure time defaults to the current time).<br>* For requests where the travel mode is driving: You can specify the `departure_time` to receive a route and trip duration (response field: duration_in_traffic) that take traffic conditions into account. The `departure_time` must be set to the current time or some time in the future. It cannot be in the past.<br><br><div class="note">Note: If departure time is not specified, choice of route and duration are based on road network and average time-independent traffic conditions. Results for a given request may vary over time due to changes in the road network, updated average traffic conditions, and the distributed nature of the service. Results may also vary between nearly-equivalent routes at any time or frequency.</div><br><div class="note">Note: Distance Matrix requests specifying `departure_time` when `mode=driving` are limited to a maximum of 100 elements per request. The number of origins times the number of destinations defines the number of elements.</div><br> |
| `alternatives` | `boolean \| undefined` | Query, Optional | If set to `true`, specifies that the Directions service may provide more than one route alternative in the response. Note that providing route alternatives may increase the response time from the server. This is only available for requests without intermediate waypoints. For more information, see the [guide to waypoints](https://developers.google.com/maps/documentation/directions/get-directions#Waypoints). |
| `avoid` | `string \| undefined` | Query, Optional | Indicates that the calculated route(s) should avoid the indicated features. This parameter supports the following arguments:<br><br>* `tolls` indicates that the calculated route should avoid toll roads/bridges.<br>* `highways` indicates that the calculated route should avoid highways.<br>* `ferries` indicates that the calculated route should avoid ferries.<br>* `indoor` indicates that the calculated route should avoid indoor steps for walking and transit directions.<br><br>It's possible to request a route that avoids any combination of tolls, highways and ferries by passing multiple restrictions to the avoid parameter. For example:<br><br>```<br>avoid=tolls\|highways\|ferries.<br>``` |
| `units` | [`Units1 \| undefined`](../../doc/models/units-1.md) | Query, Optional | Specifies the unit system to use when displaying results.<br><br>Directions results contain text within distance fields that may be displayed to the user to indicate the distance of a particular "step" of the route. By default, this text uses the unit system of the origin's country or region.<br><br>For example, a route from "Chicago, IL" to "Toronto, ONT" will display results in miles, while the reverse route will display results in kilometers. You may override this unit system by setting one explicitly within the request's units parameter, passing one of the following values:<br><br>* `metric` specifies usage of the metric system. Textual distances are returned using kilometers and meters.<br>* `imperial` specifies usage of the Imperial (English) system. Textual distances are returned using miles and feet.<br><br><div class="note">Note: this unit system setting only affects the text displayed within distance fields. The distance fields also contain values which are always expressed in meters.</div><br> |
| `waypoints` | `string \| undefined` | Query, Optional | <div class="caution">Caution: Requests using more than 10 waypoints (between 11 and 25), or waypoint optimization, are billed at a higher rate. <a href="https://developers.google.com/maps/billing-and-pricing/pricing#directions-advanced">Learn more about billing</a> for Google Maps Platform products.</div><br>Specifies an array of intermediate locations to include along the route between the origin and destination points as pass through or stopover locations. Waypoints alter a route by directing it through the specified location(s). The API supports waypoints for these travel modes: driving, walking and bicycling; not transit.   You can supply one or more locations separated by the pipe character (`\|` or `%7C`), in the form of a place ID, an address, or latitude/longitude coordinates. By default, the Directions service calculates a route using the waypoints in the order they are given. The precedence for parsing the value of the waypoint is place ID, latitude/longitude coordinates, then address.<br>* If you pass a place ID, you must prefix it with `place_id:`. You can retrieve place IDs from the Geocoding API and the Places API (including Place Autocomplete). For an example using place IDs from Place Autocomplete, see [Place Autocomplete and Directions](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-directions). For more about place IDs, see the [Place ID overview](https://developers.google.com/maps/documentation/places/web-service/place-id).<br>  <div class="note">For efficiency and accuracy, use place ID's when possible. These ID's are uniquely explicit like a lat/lng value pair and provide geocoding benefits for routing such as access points and traffic variables. Unlike an address, ID's do not require the service to perform a search or an intermediate request for place details; therefore, performance is better.</div><br>* If you pass latitude/longitude coordinates, the values go directly to the front-end server to calculate directions without geocoding. The points are snapped to roads and might not provide the accuracy your app needs. Use coordinates when you are confident the values truly specify the points your app needs for routing without regard to possible access points or additional geocoding details. Ensure that a comma (`%2C`) and not a space (`%20`) separates the latitude and longitude values.<br>* If you pass an address, the Directions service will geocode the string and convert it into latitude/longitude coordinates to calculate directions. If the address value is ambiguous, the value might evoke a search to disambiguate from similar addresses. For example, "1st Street" could be a complete value or a partial value for "1st street NE" or "1st St SE". This result may be different from that returned by the Geocoding API. You can avoid possible misinterpretations using place IDs.<br>* Alternatively, you can supply an encoded set of points using the [Encoded Polyline Algorithm](https://developers.google.com/maps/documentation/utilities/polylinealgorithm). You will find an encoded set is useful for a large number of waypoints, because the URL is significantly shorter. All web services have a URL limit of 8192 characters.<br>  * Encoded polylines must be prefixed with `enc:` and followed by a colon (`:`). For example: `waypoints=enc:gfo}EtohhU:`.<br>  * You can also include multiple encoded polylines, separated by the pipe character (`\|`). For example, `waypoints=via:enc:wc~oAwquwMdlTxiKtqLyiK:\|enc:c~vnAamswMvlTortjGi}L:\| via:enc:udymA{~bxM:`<br><br>##### Influence routes with stopover and pass through points<br><br>For each waypoint in the request, the directions response appends an entry to the `legs` array to provide the details for stopovers on that leg of the journey.<br><br>If you'd like to influence the route using waypoints without adding a stopover, add the prefix `via:` to the waypoint. Waypoints prefixed with `via:` will not add an entry to the `legs` array, but will route the journey through the waypoint.<br><br>The following URL modifies the previous request such that the journey is routed through Lexington without stopping:<br><br>```<br>https://maps.googleapis.com/maps/api/directions/json?<br>origin=Boston,MA&destination=Concord,MA<br>&waypoints=Charlestown,MA\|via:Lexington,MA  <br>```<br><br>The `via:` prefix is most effective when creating routes in response to the user dragging the waypoints on the map. Doing so allows the user to see how the final route may look in real-time and helps ensure that waypoints are placed in locations that are accessible to the Directions API.<br><br><div class="caution">Caution: Using the `via:` prefix to avoid stopovers results in directions that are strict in their interpretation of the waypoint. This interpretation may result in severe detours on the route or `ZERO_RESULTS` in the response status code if the Directions API is unable to create directions through that point.</div><br>##### Optimize your waypoints<br>By default, the Directions service calculates a route through the provided waypoints in their given order. Optionally, you may pass `optimize:true` as the first argument within the waypoints parameter to allow the Directions service to optimize the provided route by rearranging the waypoints in a more efficient order. (This optimization is an application of the traveling salesperson problem.) Travel time is the primary factor which is optimized, but other factors such as distance, number of turns and many more may be taken into account when deciding which route is the most efficient. All waypoints must be stopovers for the Directions service to optimize their route.<br><br>If you instruct the Directions service to optimize the order of its waypoints, their order will be returned in the `waypoint_order` field within the routes object. The `waypoint_order` field returns values which are zero-based.<br><br>The following example calculates a road journey from Adelaide, South Australia to each of South Australia's main wine regions using route optimization.<br><br>```<br>https://maps.googleapis.com/maps/api/directions/json?<br>origin=Adelaide,SA&destination=Adelaide,SA<br>&waypoints=optimize:true\|Barossa+Valley,SA\|Clare,SA\|Connawarra,SA\|McLaren+Vale,SA<br>```<br><br>Inspection of the calculated route will indicate that calculation uses waypoints in the following waypoint order:<br><br>```<br>"waypoint_order": [ 3, 2, 0, 1 ]<br>```<br><br><div class="caution">Caution: Requests using waypoint optimization are billed at a higher rate. <a href="https://developers.google.com/maps/billing-and-pricing/pricing#directions-advanced">Learn more about how Google Maps Platform products are billed.</a></div><br> |
| `language` | [`Language1 \| undefined`](../../doc/models/language-1.md) | Query, Optional | The language in which to return results.<br><br>* See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.<br>* If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.<br>* The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.<br>* If a name is not available in the preferred language, the API uses the closest match.<br>* The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian. |
| `mode` | [`Mode1 \| undefined`](../../doc/models/mode-1.md) | Query, Optional | For the calculation of distances and directions, you may specify the transportation mode to use. By default, `DRIVING` mode is used. By default, directions are calculated as driving directions. The following travel modes are supported:<br><br>* `driving` (default) indicates standard driving directions or distance using the road network.<br>* `walking` requests walking directions or distance via pedestrian paths & sidewalks (where available).<br>* `bicycling` requests bicycling directions or distance via bicycle paths & preferred streets (where available).<br>* `transit` requests directions or distance via public transit routes (where available). Transit trips are available for up to 7 days in the past or 100 days in the future. If you set the mode to transit, you can optionally specify either a `departure_time` or an `arrival_time`. If neither time is specified, the `departure_time` defaults to now (that is, the departure time defaults to the current time). You can also optionally include a `transit_mode` and/or a `transit_routing_preference`.<br><br><div class="note">Note: Both walking and bicycling directions may sometimes not include clear pedestrian or bicycling paths, so these directions will return warnings in the returned result which you must display to the user.</div><br> |
| `region` | [`Region1 \| undefined`](../../doc/models/region-1.md) | Query, Optional | The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland"). |
| `trafficModel` | [`TrafficModel1 \| undefined`](../../doc/models/traffic-model-1.md) | Query, Optional | Specifies the assumptions to use when calculating time in traffic. This setting affects the value returned in the duration_in_traffic field in the response, which contains the predicted time in traffic based on historical averages. The `traffic_model` parameter may only be specified for driving directions where the request includes a `departure_time`. The available values for this parameter are:<br><br>* `best_guess` (default) indicates that the returned duration_in_traffic should be the best estimate of travel time given what is known about both historical traffic conditions and live traffic. Live traffic becomes more important the closer the `departure_time` is to now.<br>* `pessimistic` indicates that the returned duration_in_traffic should be longer than the actual travel time on most days, though occasional days with particularly bad traffic conditions may exceed this value.<br>* `optimistic` indicates that the returned duration_in_traffic should be shorter than the actual travel time on most days, though occasional days with particularly good traffic conditions may be faster than this value.<br>  The default value of `best_guess` will give the most useful predictions for the vast majority of use cases. It is possible the `best_guess` travel time prediction may be shorter than `optimistic`, or alternatively, longer than `pessimistic`, due to the way the `best_guess` prediction model integrates live traffic information. |
| `transitMode` | `string \| undefined` | Query, Optional | Specifies one or more preferred modes of transit. This parameter may only be specified for transit directions. The parameter supports the following arguments:<br><br>* `bus` indicates that the calculated route should prefer travel by bus.<br>* `subway` indicates that the calculated route should prefer travel by subway.<br>* `train` indicates that the calculated route should prefer travel by train.<br>* `tram` indicates that the calculated route should prefer travel by tram and light rail.<br>* `rail` indicates that the calculated route should prefer travel by train, tram, light rail, and subway. This is equivalent to `transit_mode=train\|tram\|subway`. |
| `transitRoutingPreference` | [`TransitRoutingPreference1 \| undefined`](../../doc/models/transit-routing-preference-1.md) | Query, Optional | Specifies preferences for transit routes. Using this parameter, you can bias the options returned, rather than accepting the default best route chosen by the API. This parameter may only be specified for transit directions. The parameter supports the following arguments:<br><br>* `less_walking` indicates that the calculated route should prefer limited amounts of walking.<br>* `fewer_transfers` indicates that the calculated route should prefer a limited number of transfers. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: 200 OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DirectionsResponse`](../../doc/models/directions-response.md).

## Example Usage

```ts
const destination = 'Victoria, BC';

const origin = 'Vancouver, BC';

const avoid = 'highways';

const waypoints = 'MA|Lexington,MA';

const transitMode = 'train|tram|subway';

try {
  const response = await directionsApi.directions(
    destination,
    origin,
    undefined,
    undefined,
    undefined,
    avoid,
    undefined,
    waypoints,
    undefined,
    undefined,
    undefined,
    undefined,
    transitMode
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
  "geocoded_waypoints": [
    {
      "geocoder_status": "OK",
      "place_id": "ChIJwZNMti1fawwRO2aVVVX2yKg",
      "types": [
        "locality",
        "political"
      ]
    },
    {
      "geocoder_status": "OK",
      "place_id": "ChIJ3aPgQGtXawwRLYeiBMUi7bM",
      "types": [
        "locality",
        "political"
      ]
    }
  ],
  "routes": [
    {
      "bounds": {
        "northeast": {
          "lat": 27.7564327,
          "lng": -17.9710024
        },
        "southwest": {
          "lat": 27.6411131,
          "lng": -18.0481367
        }
      },
      "copyrights": "Map data ©2022 Inst. Geogr. Nacional",
      "legs": [
        {
          "distance": {
            "text": "38.5 km",
            "value": 38482
          },
          "duration": {
            "text": "55 mins",
            "value": 3312
          },
          "end_address": "38917 La Restinga, Santa Cruz de Tenerife, Spain",
          "end_location": {
            "lat": 27.6412095,
            "lng": -17.9818845
          },
          "start_address": "38911 La Frontera, Santa Cruz de Tenerife, Santa Cruz de Tenerife, Spain",
          "start_location": {
            "lat": 27.7548015,
            "lng": -18.0095701
          },
          "steps": [
            {
              "distance": {
                "text": "64 m",
                "value": 64
              },
              "duration": {
                "text": "1 min",
                "value": 9
              },
              "end_location": {
                "lat": 27.7550564,
                "lng": -18.0089896
              },
              "html_instructions": "Head <b>northeast</b> on <b>C. el Rumbaso</b> toward <b>C. Cruz Alta</b>/<wbr/><b>C. Frontera Dos</b>",
              "polyline": {
                "points": "ozkhDxn|lBIWi@{A"
              },
              "start_location": {
                "lat": 27.7548015,
                "lng": -18.0095701
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "0.3 km",
                "value": 302
              },
              "duration": {
                "text": "1 min",
                "value": 54
              },
              "end_location": {
                "lat": 27.7531414,
                "lng": -18.0093196
              },
              "html_instructions": "Turn <b>right</b> onto <b>C. Cruz Alta</b>/<wbr/><b>C. Frontera Dos</b><div style=\"font-size:0.9em\">Continue to follow C. Frontera Dos</div>",
              "maneuver": "turn-right",
              "polyline": {
                "points": "c|khDdk|lBJE^Q`@Q~@a@z@]BA\\OZO^QLd@V|@Rp@\\hA"
              },
              "start_location": {
                "lat": 27.7550564,
                "lng": -18.0089896
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "50 m",
                "value": 50
              },
              "duration": {
                "text": "1 min",
                "value": 15
              },
              "end_location": {
                "lat": 27.7530963,
                "lng": -18.0088163
              },
              "html_instructions": "Sharp <b>left</b> onto <b>C. Amador</b>",
              "maneuver": "turn-sharp-left",
              "polyline": {
                "points": "cpkhDfm|lBBE?C?C@E@g@?g@"
              },
              "start_location": {
                "lat": 27.7531414,
                "lng": -18.0093196
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "61 m",
                "value": 61
              },
              "duration": {
                "text": "1 min",
                "value": 13
              },
              "end_location": {
                "lat": 27.7525596,
                "lng": -18.0089335
              },
              "html_instructions": "Turn <b>right</b> onto <b>C. Constitución</b>/<wbr/><b>Tr.ª Amador</b>",
              "maneuver": "turn-right",
              "polyline": {
                "points": "{okhDbj|lBfALb@F"
              },
              "start_location": {
                "lat": 27.7530963,
                "lng": -18.0088163
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "16.7 km",
                "value": 16666
              },
              "duration": {
                "text": "23 mins",
                "value": 1363
              },
              "end_location": {
                "lat": 27.7372254,
                "lng": -17.9937641
              },
              "html_instructions": "Turn <b>left</b> onto <b>C. el Congreso</b>/<wbr/><b>HI-1</b><div style=\"font-size:0.9em\">Continue to follow HI-1</div>",
              "maneuver": "turn-left",
              "polyline": {
                "points": "olkhDxj|lBCu@QkC?AGo@?AE[Ie@CIACKa@IUEMOe@Mc@Oc@Oc@Mc@Oe@}@qCEMYy@Uq@IOAECCMUOOCCOIICGACAWCG?EA[ESESEQGIECCMMCCKKMQW]KO}BkDCCGKOSGKGOEMCMCM?K?IBK@GBGFKJONKLIVK`@O@?RGDABAB?FAFAL?@?D@H@H@HB^NLVDFPXh@fAPZRb@BBHLJHJJh@d@NLf@d@@@XTZXXTX`@V^JLl@|@`@j@LPJLTVRL@@NJDBdB|@p@^JF^Ph@XZN`@TTLHDFDHFDDDB@@JLHJRXBD@@NVJLJNBDHJJTFNDJRh@@D\\`ANd@Nb@Nb@^fANb@\\bAb@lANb@BJVt@@FN`@@@P`@Pb@N^Pd@DHLVLVFHDFPPf@d@NRDHHNFPDRFx@?@Df@Bn@F^F`@BDLb@FTPj@FLDJLRHJTNTLRJJFd@RXRLNFHJPDL@BJTDLNb@HVJVP`@PTFJNPV\\RXBBV\\BBNTBBDHFNDVBT@VARABKh@ENALAR?P?T?T@J@V?BFf@LrADb@BNBVHdARxA@NBTFf@?BHv@@R@H?R?J?LCTKv@[tACNWfAABG^AFALAR@TF|@@@Df@NpAJlABT@PBV?R?JCRARE`@Ef@KdACTIx@MnAGd@Ef@Gf@ANCVGd@Ef@Gf@CZAJGf@Ef@Eb@AB?NAT?@?N@R@BBRDR?@Jb@Ld@Ld@Jd@H\\BFJd@Lb@DPDRZjADTHZDX@PPlD@JBf@?FB^Bj@FlAHbBNlC?FB^@VFv@ThE@f@Bf@?BBZ@T?RAPCRCLCPENYz@ELIXCHKXAFA@?F?H?L@J@FBFDBBBD?F?F?DADCBA@A@ABIBK@UBg@@]@KBOBM@EDKHM@AHMJQJOFQF]FWb@kC@KRqAJq@@M?E@M?}@@oA?[@K?k@@a@BsB?S@M@KBQDULi@Lm@b@gBBGLi@T_ANq@F]D]DW@U?A@[?Y?Y?M@Y?CBUBQF[Lg@\\kAd@sALY`@aAL]FOBEDGDEDC?AFENGRGPEHCJGFCBE@?LQFK@Cp@uADMDKBS@E?I?MAKCQCOMg@EWAIAG?C?M?O@M@UBSBODQDY\\mBJq@Ha@DSHUFODMHSHQLYDIRe@P]FOFKBEFGTOJIFGDIBKFYJe@R{@R_ATaA@I^cBDYBO?C?K?GACAICICGs@sAa@u@CKAECI?I?G@C@CBGDCBEBAD?BAD?D@FBDBDBFFNVR`@Zp@HNBFTf@FTDRBRBNBZ@\\?VAXCRCREPCPEV?NAB?R@Z?T?Z@\\?TARAZCRCPETERIZYpAKb@ADERGV?H?F@NDZRnBBf@BP?D?F?FCJAFCFGJQZORGFCDCFADABAFAFAL@J@FBFBFDFDFPNf@f@XVZXHHDFBDBDBJ@F@H?R@V?XGtFA^?HAJAB?@A@ADA@CDGBEDE@C@M?I@WAcAEQAGA[AK?O?E@A?I@EBIDEDEDGHINWl@ADCDAHAHAFAB?D?D?F@L@R@L@Z?J?L?DAJAHCLALA@Y~AShAG^AJAFAF?J?L@P@T@RBXBTBL@JDPBLFRDJDJFHNXLPRTNLVTd@`@NLJJDDJPPXJPDJDP?@@L@V?VAPANAVC`@Ef@ADANKh@K^Kn@Gh@CNAFEZ?BCRAR?HA\\?FA^?JAZAVEj@Ch@?JEv@AZ?PAL@D?HBXD`@BFBNFT@DDLBBBDDDHFh@`@BBd@`@LFXNZLLFDDDD@F@F?H?@?FCJINIVADADABAH?F@H@D@FBDDFDDJNLXBJDT?@?H?PCXAJEJCNKTM^ABGRM^GTCHALCL?BCT?LANCPCTCNEJGRKVELAHAB?H?DBP?@BP?H@J?@?N?X?H@HBHFLFHHJ@BTX@DDH@H@L?JCPGJGFMPGNCLCJ?L?JAPAPERAFEHEHILGHGHEJCHGb@CLOx@In@In@G^Gp@?@ANETAFGPAHEHGLGNEH?DAB?D?FFLHDF@HC@ADEBIDQ?AHg@@c@@C@WBO@GBMBO@EDSDKBGN[FOLSLUDENQFIHKLIDCDCDCHEFEHIHKDKLUBGBILWL[FMDOFMDIDIDM?ADW@M?S?S?]AWAOC]AUAECa@?CAa@AO?O?Q@M@OBKBIBKBG@CFQDKDILW?AFKFKBIBEBEFEDCBC^QB?\\ONGNGf@SXMPINIHGHIFC?AVQZYJKHMDGDGBKDQ@IG[GMGMAKCIAU@C?CDKFIDC@C@C@E@GAM?U?QASEe@AY?ACe@Ec@AQEOCUKy@AIGc@AAKi@AMAU?ACOCSAQAQ?O?O@Q@S@M@C@GBQBUH[L[DGFMNM@Ar@[j@WLINKVSBAFGHGDODSDQ@ADSBMDSFKDIFGJKTOJIx@m@@?ZW\\UDERUHINQV]DGRUX[f@s@DGFKFS@CLa@@CDWBM@KBUJi@?AD]@IFUFMFQDSFQDSBMBWBW@O@K?Q?c@AQAWAMCQCOESCKCI?ACOAW?IAY?SAY?Y?M?AAa@?U?Y@_@@Q@S@EHWFMH]@E@MDW@AHk@Fc@H_@D[@O?A?M?O?I?E?OAOAM?O@E?E?E@G@GBK@C@CFMJO@CNW@CLQHMHKJOFGBGBIBI?CLa@Lc@Nc@Le@Ne@LYPe@BELYDM?E?EAGACAGCGGKCEEGCECGCGCGAE?A?C?G?K?GBE@EDIFGDEDEHEJILOJMDQDU?MA[?C?QCYCYAEE[GYG[GUCIA?AEAGAEAGAG?A?G?E@I@G@IDIHWBKBO@G@KAK?K?W?M?A@G@M@EBEDKDEHK@CFMHUHUFKJSFM@GDM@M@S?U?AAg@AIA]AYCMAIG]?EGa@Mu@CWMs@CICGUg@KYEIi@aAQ]AAU]IQIQGOCQACAKCU?EGm@Gk@E]?KUyBKy@G]AKACCIGOEGEGKQcB_CEGYe@i@u@_@i@MSGKEKACAGCKCMCSCQ?EAUE[E}@ASAS?GAGCMGOAGQYGKKSGMIMCMCMESEQCQAAEKMOOQGGIGEIEGCKEQCK?EE_@AKCKGOSYEGUWCCKQ[_@IMGIEGCGEKCIEOAAISEOACKYGSCIAK?A?G@I@IBK@GBQDUDS@IBGFU@EFO`@eAFYJa@BKDS?G?E?SAQGi@Ga@CUIi@EMIa@ACCGCKIK?AEIMMKIIGIEIEMGGCEEEIAEAG?I?C?K?Q?G?O?W?SAS?AEe@Cc@Gk@AMGU?CCGCGEIEEEGEIEIAECMCYCU?QASAS?U@S@k@@Y@]@_@A}@?sBAqA?MEoB?ICc@?CAQEYCSCOIe@ACMa@?AGOGQGOESMe@U}@c@sBKe@CKGY_@gBCIwAuFGQKc@?AMe@Me@"
              },
              "start_location": {
                "lat": 27.7525596,
                "lng": -18.0089335
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "4.1 km",
                "value": 4058
              },
              "duration": {
                "text": "6 mins",
                "value": 370
              },
              "end_location": {
                "lat": 27.7196513,
                "lng": -17.9933045
              },
              "html_instructions": "Turn <b>right</b> onto <b>HI-40</b>",
              "maneuver": "turn-right",
              "polyline": {
                "points": "ulhhD~kylB\\EFAXEPCPAFAD?D?D?F@@?@?B@DBFDHF@@\\P^RJDHBD@D@D?Z?X?Z@P@B?NDLB@@LDF@HD?@JFLHBBFHJJDDDDDJBDDHBNBJ?L@L?F?H?BAHCLAFAF?F@D@F@BBBBDDFDBJHHDJBJBDAD?JALC@?`@M@?JKJK@APWDEDEPGF?B?h@Bn@?LATAL?^ARCXEZKZMBADAH?H?D@B@D@B@PRRR~@v@RNBDB@B@D@D@D?DADCBCDILc@FWHe@?ADU@M@Q@O?G?C@a@B[?M?GASASCOI[GOAIAC?C?QAKAAAQCKESUs@CG?A?G?M@Q?ADe@@AFo@B]@K?U@E?GAM?IAE?ACMEMCGGOCGAE?I?C@E@EBEBEDCDCDAHCJC@?LAP?@?NBNDLFNH`@X`@ZDBHDD@F?B@BCDABE@I?A?C@MAKAMCYEo@M_AAECGCECECCOOQQGG[Wq@o@ECAACCACCCAEGKCIIWAAOc@Uk@Se@Yk@GKQa@uAuCKSGQCIAI?E?G@G?G@EBIFGBG^i@FILUT_@HMn@cAj@_ATc@FIDGBC@CBA@ADADAHAF?D@HBHDHHFFFFVTLLDDDHHRBFDLJTFLBFBFHFLJb@Z^R`@RDBZJHDF@NDZHf@HB@f@BZ@F@R?h@Bb@Bx@BJ@\\DD?TBTDJDB?@@@@@@@@BDBJDR@@FXBD@@B@@@B@B?D?BABCFELONQFKDE@C@AJGFCHANAP@@?`@?@?d@D^DfAJ`@D@?^BB?LBD@D@FBBBDDHJHJFLNVNRLPHJHHh@b@DBZTZXDDRVNNHLJFRDLQBI?K@C?U?WA]C}@AOAGACCECEAC?EAE?A?E?I@G@EDCFCFAJ@D@B?FBB@NLRPV^BHHPDN?@FP?F@DAD?JAV?B?B@DBDBDBBB@D@D@XHL@D@B@FF?@FFNT@BZp@Th@Vv@Xv@BBR`@R`@@@Tf@BLBN@?@Z@JBf@Df@@FD^D^@FBLDNBDBJBFFFDB\\TDDTPVRBDDBDHDLBL@PBPBV@HBH@HBD@B\\b@"
              },
              "start_location": {
                "lat": 27.7372254,
                "lng": -17.9937641
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "1.3 km",
                "value": 1327
              },
              "duration": {
                "text": "2 mins",
                "value": 129
              },
              "end_location": {
                "lat": 27.7192528,
                "lng": -17.9809011
              },
              "html_instructions": "Turn <b>left</b> to stay on <b>HI-40</b>",
              "maneuver": "turn-left",
              "polyline": {
                "points": "y~dhDbiylBh@_@BC?A@E@C?A?C@E?A?CO_@EOCGAC?AAC?C?EAa@C_@?GEqA?u@AOAIEQIQOa@GOGQEKAEAE?GAE?I?IBW@K?MAKAIAGCGGUCKEQESAI?I?C@MBQ?CFUDQDKBEFK@?NQVWlAuAFK@CDGTq@BIDODYFm@Ba@?]?ICg@AMCYEc@?CGg@[qCEa@AM?EAG?C@C?C@GNq@@E?C@E?G?EAIW}@Oq@CIMq@EQy@}DCKAMA]?Q@]Di@Fu@HaA@OBQBQ@CDKHOBEDGRSXa@"
              },
              "start_location": {
                "lat": 27.7196513,
                "lng": -17.9933045
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "2.4 km",
                "value": 2418
              },
              "duration": {
                "text": "3 mins",
                "value": 209
              },
              "end_location": {
                "lat": 27.7098322,
                "lng": -17.977762
              },
              "html_instructions": "Turn <b>right</b> onto <b>HI-4</b>",
              "maneuver": "turn-right",
              "polyline": {
                "points": "i|dhDr{vlBNZLVJZDRb@xBDNFTH\\FLFNDFFFPHFBJDNBJ?J?JGJGl@o@HKFGDCBA@ALGNI\\St@_@^QHAJ?J@HFj@ZHDrAv@HBFBLDL@P?VCXGHARELAJ@H@JDFBHFb@XbBhAZRVHPBN@N?VE`@IfB]b@ITEj@KVEF?J?H@B?\\Jb@J`@J@?^JRFLB^H@?b@J`@Hb@HD@ZF`@Hb@J`@H`@H@?`@HL@H?FCFCBCDEDQBO?E?ECGEOQUGIEIGOEGAEEOAOAII{@Gq@AIEeACi@Ae@Aa@CKCGEIIICESSY[m@q@QUKQM]EWKm@CKE_@ESK_@KSGKSSSQa@_@UYAAWY[_@MIMIi@YSK_B}@KIKOA?EMCI?K@E@GBEDEFEHEFAN?nAZTRNHH@J@^E\\CJAB?L?P?JBr@PxA^`@JfB`@"
              },
              "start_location": {
                "lat": 27.7192528,
                "lng": -17.9809011
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "0.9 km",
                "value": 890
              },
              "duration": {
                "text": "2 mins",
                "value": 108
              },
              "end_location": {
                "lat": 27.7035054,
                "lng": -17.9812712
              },
              "html_instructions": "Turn <b>left</b> onto <b>C. Tr.ª del Pino</b>/<wbr/><b>HI-4</b>",
              "maneuver": "turn-left",
              "polyline": {
                "points": "machD~gvlB\\_@z@cAd@i@RUHGJEH?J?VFf@T`A`@`Bp@`@Pp@XTJHFHFPRT^lA|ANHLF\\JFBJFDD~@t@z@p@NNBB`@l@JPHJPVLLRPRLTRDBVRdAt@TRZXBBZ^TZNT"
              },
              "start_location": {
                "lat": 27.7098322,
                "lng": -17.977762
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "0.2 km",
                "value": 232
              },
              "duration": {
                "text": "1 min",
                "value": 47
              },
              "end_location": {
                "lat": 27.7022429,
                "lng": -17.9794795
              },
              "html_instructions": "Turn <b>left</b> onto <b>C. el Chamorro</b>",
              "maneuver": "turn-left",
              "polyline": {
                "points": "}yahD|}vlBVQDELMJK@?BCDCTGDCBCBEFQNc@Pc@@E@CD[@GFSDGR_@@AHOFKPU@CTY"
              },
              "start_location": {
                "lat": 27.7035054,
                "lng": -17.9812712
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "7 m",
                "value": 7
              },
              "duration": {
                "text": "1 min",
                "value": 2
              },
              "end_location": {
                "lat": 27.7021815,
                "lng": -17.9794959
              },
              "html_instructions": "Turn <b>right</b> onto <b>C. San Antón</b>",
              "maneuver": "turn-right",
              "polyline": {
                "points": "_rahDvrvlBJB"
              },
              "start_location": {
                "lat": 27.7022429,
                "lng": -17.9794795
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "0.1 km",
                "value": 137
              },
              "duration": {
                "text": "1 min",
                "value": 26
              },
              "end_location": {
                "lat": 27.7011231,
                "lng": -17.9790166
              },
              "html_instructions": "Turn <b>left</b> onto <b>C. D. Eloy Quintero</b>",
              "maneuver": "turn-left",
              "polyline": {
                "points": "sqahDzrvlBTUFEDCLAD@\\@B?@?BADABABGDKFKFKDC@AHALAZCRA"
              },
              "start_location": {
                "lat": 27.7021815,
                "lng": -17.9794959
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "1.3 km",
                "value": 1312
              },
              "duration": {
                "text": "2 mins",
                "value": 148
              },
              "end_location": {
                "lat": 27.6926438,
                "lng": -17.9724029
              },
              "html_instructions": "Continue onto <b>C. la Goronita</b>",
              "polyline": {
                "points": "_kahDzovlBRGJGPKb@WFCDCFENMBCHIBGDG@CHQDKRa@@?HKFGHEj@Y~Aq@JCHAb@Cz@An@ETALCHAHCBCDC?A@CTi@DIFI@AZYd@a@n@g@VSDCZUROBCb@WNKHKHMHMPUDGTY@CDIJUFKJYFIDEFCDAx@Gl@IFAFCBCBGDGBCFODMDKFGDEBALGXMZKTMFEZYd@_@FGDG@C@G@G@I?KCi@Cc@Ae@?GAg@AACKCEECIGEGAGBGBCBA?AD?D?F?FBF@HBBBFDFDJHJBJBP?tA@h@@F?HAHELMJMFILQVU"
              },
              "start_location": {
                "lat": 27.7011231,
                "lng": -17.9790166
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "10.6 km",
                "value": 10604
              },
              "duration": {
                "text": "12 mins",
                "value": 739
              },
              "end_location": {
                "lat": 27.6422902,
                "lng": -17.9796272
              },
              "html_instructions": "Continue onto <b>HI-4</b>",
              "polyline": {
                "points": "_v_hDnfulB?KDMFIFGFEF?F?HBFDPLLLXVZZDDPXZd@h@r@d@n@p@bAFD@@HDFBF@D?@AHAHEDE@CBCBE@I?I?GAIEKEMEIU_@Ye@KQU_@EGMWAEO_@EUCUCOCOAIO]o@gAMUEIEKEK?A?E?EBGBIBCDCBAD?B?FBFB\\RBB~@r@f@^HDl@Xd@RXHf@Nl@XRJJFjAl@HFHFHJHPNXDHDFFDJFRHLDLDh@PHBNFNJHD\\Tf@\\b@VDB^RVRBBDDRV@B^p@FJFJDLDLHZLd@Rn@P`@PZLP^b@JLJJBDJPFNDFHLJHPLRLZPVLz@b@B@VNRNNJBBTVHH`@d@^f@TVPRVTNLHHNL^TVJVHNBB?NBRBB?T?TARCBALCREHCJG\\OPIFCLEJ?F?F?H@HBHBJFFFFFPJJDJBL?H?JALC\\KDAVKLELGRIFELEHCF?D?H@HFFDTXRZLXDFBFJT@BFPJZHZ?@Jb@BHLj@FJBFDHLR@@LJLJPHVHLDj@Hj@HvATl@J@?^BZBV?LAJ?ZCREPARCR@H?LBL@NFVHTHTFJBRFF?j@HJ@\\@X?V?L?J?TAZ?Z@ZBPBXFFBJDRH`@Tb@TFD`@TJHNJTJXJHBJBJ@H?@?\\?B?b@AHAP?RBNBLDJFPNRR@@LJHDLDNDF@ZHHBJDFFDDDH@D@F@F?FAD?DKXGPCF?HAH?F@F?B?BBHBHLPHJ\\d@Z`@LNf@p@DBDFFDFFDBFBFBB@D@PF^XDFDDh@|@NXBDv@rALTLPHHNLFD@@JDLDx@NFBF@FBJHDBBB@@HLj@`AV`@LVFNBJ@H@JFt@Bj@D|@@N?J?PALAJCL?@CJIREHYd@CHAFCN?J?N@N@HBH@BBFVz@Z~@Tn@Rn@Lb@Nd@L`@h@|ADPh@|ANb@Tp@HVn@bBr@rBTp@HTLXBHDJFLl@hAJRFLFLLRR^?@pAbCBD~@dBR^NXR`@BDNXT`@LXLXFPb@pARh@HR^lADNBPBL@R?LALALABKp@CPU`BG\\G\\?BADCR?H?H@@BJDJFFDBFDD@J@JAFAFCDC@ADGDGFSDSFOBIFMBG@AFKHK~@aARS^_@X[RY\\e@NUP[P[LSPQTSNITM\\O@AZQ\\UPMRSPQBEPW?ALSFKBGHSBEDIDOBK@EDUBI@GDW@G@IBS@GBIBQBK@EBQBM@ADMDM@EDGHMFIHIHKDCDEJILGNGJCBADAJEJEJENILGHELMNMFKHILSLUFK@CHSFQDUFWP}@Je@F[@KLs@N{@Jg@Hg@@AH]@EDQLa@Rm@r@{BHUDMPi@Nc@J_@F_@@GBO@Y@[?WAY?ECWAICUCQEUCQE]AGWaBWaBAOAEG_@AGCQCM?GCOCOAECUCIAGAIAO?E?G?KBMBI@ABEBEHIFEBCJCHAJ?F?B?HBHBFDJHFDLHNLJHJFRPRLRLBBXLb@NXHTBNBH@@?J@N@L?F?P?@?N?FA\\CTCTGTGRGZMPMJGRMLKBCFGNOBCRWDELSNSXa@n@{@PUBAHIDC@AHE@ADCDABA@?HAPEF?J?J?L?J@NDJBHDHDJDDD@?FHBDDBDFDDNNNNPHNJLDDBF@HBH@@?F@ZBH?B@D?@?F@F@F@NDFDFBHFFBHHHJJNJVJTN^HZF`@@@@L@FBRBRDd@Jv@VfAVv@Xv@@@DLBDP\\\\h@f@p@^b@DHDDDJDFJXHXHVFP@FLb@FPRZd@p@f@l@HL@@FHDFBBFLHLFLDNBLDNBRFTDL@H@@HRh@`ABDb@r@Xd@b@r@d@v@HLPZFFFFB@FBDBBBLB@?F@D?D?N?LCLELGLIDGBCDGDKDIBK@IBIBI@IBKBG@KBEDQFMHOLOLKBCNMVYLOJKHQHSFODUBQBU@Q@SDu@?E@QDg@HsAF_A@K@W@C@KBUD_@F]D[Lo@J_@Rw@Ng@Vo@JYTi@Vi@Te@Ve@DIFMDGJQDMDK?A@K?E@A?M?G?E?MCICQGa@Ie@Kk@AGGQAAOc@KWAMAA?I?I?G?E@I@ODQFYDa@B[@[?W?[E]Ii@ESCOCGKk@Km@Ie@ACE]?ECSEo@@[?Y@UBWBWHa@J]r@}A~@oB`@y@NYLS@ADEVWHIDEDCBAFC@AB?B?DAB?D@D@D@B@DBDB"
              },
              "start_location": {
                "lat": 27.6926438,
                "lng": -17.9724029
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "0.1 km",
                "value": 118
              },
              "duration": {
                "text": "1 min",
                "value": 19
              },
              "end_location": {
                "lat": 27.642195,
                "lng": -17.9808183
              },
              "html_instructions": "Turn <b>right</b> onto <b>C. las Calmas</b>",
              "maneuver": "turn-right",
              "polyline": {
                "points": "i{ugDtsvlB@J@`@@^D|@?NFpA"
              },
              "start_location": {
                "lat": 27.6422902,
                "lng": -17.9796272
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "0.1 km",
                "value": 106
              },
              "duration": {
                "text": "1 min",
                "value": 34
              },
              "end_location": {
                "lat": 27.6412427,
                "lng": -17.9807285
              },
              "html_instructions": "Turn <b>left</b> onto <b>C. Juan Gutiérrez Monteverde</b>",
              "maneuver": "turn-left",
              "polyline": {
                "points": "uzugDb{vlBRA`@Ct@CD?\\CJ?`@C"
              },
              "start_location": {
                "lat": 27.642195,
                "lng": -17.9808183
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "0.1 km",
                "value": 115
              },
              "duration": {
                "text": "1 min",
                "value": 18
              },
              "end_location": {
                "lat": 27.6410709,
                "lng": -17.9818738
              },
              "html_instructions": "Turn <b>right</b> onto <b>C. el Carmen</b>",
              "maneuver": "turn-right",
              "polyline": {
                "points": "wtugDpzvlBDl@?T?L@FDj@Jr@BT?DBL"
              },
              "start_location": {
                "lat": 27.6412427,
                "lng": -17.9807285
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "15 m",
                "value": 15
              },
              "duration": {
                "text": "1 min",
                "value": 9
              },
              "end_location": {
                "lat": 27.6412095,
                "lng": -17.9818845
              },
              "html_instructions": "Turn <b>right</b> onto <b>C. el Rancho</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
              "maneuver": "turn-right",
              "polyline": {
                "points": "usugDtawlB[@"
              },
              "start_location": {
                "lat": 27.6410709,
                "lng": -17.9818738
              },
              "travel_mode": "DRIVING"
            }
          ],
          "traffic_speed_entry": [],
          "via_waypoint": []
        }
      ],
      "overview_polyline": {
        "points": "ozkhDxn|lBs@sBj@W`DsAx@_@l@RlArD@M@oAjBT]sFSmA{A{E}CkJgA}@_Ca@qGoJX{AvB}@|@@~CtEfJbKfLbHpCrDpGfR`F`JhB`KbDxBjAdCdEnHDbKbAvMqA~Gn@fIkAfPs@|J|CrMlBb^HjD_ApDKvAn@H~@qEtAaGd@oINmG|ByJtA_LzBqFxAm@|AoC@kBUaChAgHhDyGlCoMiBaETm@|CtEEjIuAhLb@lFs@fBY|@pAjBrAbBGzJqDXyAJ}@hBAjDy@rJf@zBvC~CfAnBK`EeAhJCxJxEbEUpCr@`Bi@rCiAbGI~D|@zAe@jBcA~DiBpKPv@f@uBlBmF`CyCz@oF@kGtBsCfGsDL}DmAeQZcCzC_CvB}DbHqGzBwHh@sH]wGpAcJFkDlBiDvBkIWuBhAsACiCm@uDb@_E~AgEeAsJkDkJ{@wHgDiFmBcD[}DaBsFeBiEyCcFBgEpAmE_@_E}B}C]sG}@yDGiSoC{LgDiNMg@Nk@dAMh@@lBbAxDb@vA|Cd@jB`BMjAeAzHi@pDbC`AsGcAcGRqFEwBnAGfCxAZY_@_E_DeDmFqMhFaJh@QjAz@`AjBjCjBvKjAfB`BfBkA`If@|EdFx@|@d@a@IiDKm@n@SzApBDnA~A`AfE|Kb@|DrArAv@fBJt@DHfABFO@M]iAgAkJ_@gEPcBpCiDx@aEO_DUuIaAmEaAuFNoCh@{CX[h@EbA`EfAzBn@LpA_AxAaAjBs@jAj@rBdApAI~AJzD`ChA?zGiAbJpBdEt@b@_Ay@_Bg@qGs@iCiCeFuByDeDoCaCaCt@a@~Bz@tAIfIbB~DqDvIpDrKdKdC|BzBfBp@z@f@B`@_@^Oz@qB|@}BfBqAz@IpAq@~BcAx@mAhEkCfEUzFsFxDaFlCi@n@eAjDwBD_C]uBN_@|Fl@pA_B~@[tHpIf@g@cAeCuD_JJs@~@\\tHzDbDhC|GtD~BjCbBvEbB~BnDxBjH|GjB`@zB]jBa@xAt@jEgA|AnBz@rCjAvBvGnAzHXhId@dH|CxBArBfAhBn@Nx@WzAfBlCzEbFzB`D|Br@lBjDVbFw@zEhIrVtHrPpHhQ{@bJr@n@v@q@rGaJtG{FrAsEhAcDnDoBpAqBjA_GtEaQo@_KeAoHLy@bA_@bEfC`G\\zCuAvAeBrD}ClC~@pDtAbA\\xArCf@~DdCtG`GpK|A`EnGlJnAOl@_AxBeEbAoCb@oH^cDnCmI|AwEqAyG\\wDu@iFYgEtDmKxBiB`@zA`@|CzBKl@CDbARtBSj@"
      },
      "summary": "HI-1 and HI-4",
      "warnings": [],
      "waypoint_order": []
    }
  ],
  "status": "OK"
}
```

