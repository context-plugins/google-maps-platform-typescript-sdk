# Places API

```ts
const placesApi = new PlacesApi(client);
```

## Class Name

`PlacesApi`

## Methods

* [Place Details](../../doc/controllers/places-api.md#place-details)
* [Find Place from Text](../../doc/controllers/places-api.md#find-place-from-text)
* [Nearby Search](../../doc/controllers/places-api.md#nearby-search)
* [Text Search](../../doc/controllers/places-api.md#text-search)
* [Place Photo](../../doc/controllers/places-api.md#place-photo)
* [Query Autocomplete](../../doc/controllers/places-api.md#query-autocomplete)
* [Autocomplete](../../doc/controllers/places-api.md#autocomplete)


# Place Details

The Places API is a service that returns information about places using HTTP requests. Places are defined within this API as establishments, geographic locations, or prominent points of interest.

```ts
async placeDetails(
  placeId: string,
  fields?: string[],
  sessiontoken?: string,
  language?: Language1,
  region?: Region1,
  reviewsSort?: string,
  reviewsNoTranslations?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PlacesDetailsResponse>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-query-parameter.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `placeId` | `string` | Query, Required | A textual identifier that uniquely identifies a place, returned from a [Place Search](https://developers.google.com/maps/documentation/places/web-service/search).<br>For more information about place IDs, see the [place ID overview](https://developers.google.com/maps/documentation/places/web-service/place-id). |
| `fields` | `string[] \| undefined` | Query, Optional | <div class="caution"> Caution: Place Search requests and Place Details requests do not return the same fields. Place Search requests return a subset of the fields that are returned by Place Details requests. If the field you want is not returned by Place Search, you can use Place Search to get a <code>place_id</code>, then use that Place ID to make a Place Details request. For more information on the fields that are unavailable in a Place Search request, see <a href="https://developers.google.com/maps/documentation/places/web-service/place-data-fields#places-api-fields-support">Places API fields support</a>.</div><br>Use the fields parameter to specify a comma-separated list of place data types to return. For example: `fields=formatted_address,name,geometry`. Use a forward slash when specifying compound values. For example: `opening_hours/open_now`.<br>Fields are divided into three billing categories: Basic, Contact, and Atmosphere. Basic fields are billed at base rate, and incur no additional charges. Contact and Atmosphere fields are billed at a higher rate. See the [pricing sheet](https://developers.google.com/maps/documentation/places/web-service/usage-and-billing/) for more information. Attributions, `html_attributions`, are always returned with every call, regardless of whether the field has been requested.<br><br>**Basic**<br><br>The Basic category includes the following fields: `address_components`, `adr_address`, `business_status`, `formatted_address`, `geometry`, `icon`, `icon_mask_base_uri`, `icon_background_color`, `name`, `permanently_closed` ([deprecated](https://developers.google.com/maps/deprecations)), `photo`, `place_id`, `plus_code`, `type`, `url`, `utc_offset`, `vicinity`, `wheelchair_accessible_entrance`.<br><br>**Contact**<br><br>The Contact category includes the following fields: `current_opening_hours`, `formatted_phone_number`, `international_phone_number`, `opening_hours`, `secondary_opening_hours`, `website`<br><br>**Atmosphere**<br><br>The Atmosphere category includes the following fields: `curbside_pickup`, `delivery`, `dine_in`, `editorial_summary`, `price_level`, `rating`, `reservable`, `reviews`, `serves_beer`, `serves_breakfast`, `serves_brunch`, `serves_dinner`, `serves_lunch`, `serves_vegetarian_food`, `serves_wine`, `takeout`, `user_ratings_total`.<br><br>**Constraints**: *Minimum Items*: `1` |
| `sessiontoken` | `string \| undefined` | Query, Optional | A random string which identifies an autocomplete [session](https://developers.google.com/maps/documentation/places/web-service/details#session_tokens) for billing purposes.<br><br>The session begins when the user starts typing a query, and concludes when they select a place and a call to Place Details is made. Each session can have multiple queries, followed by one place selection. The API key(s) used for each request within a session must belong to the same Google Cloud Console project. Once a session has concluded, the token is no longer valid; your app must generate a fresh token for each session. If the `sessiontoken` parameter is omitted, or if you reuse a session token, the session is charged as if no session token was provided (each request is billed separately).<br><br>We recommend the following guidelines:<br><br>- Use session tokens for all autocomplete sessions.<br>- Generate a fresh token for each session. Using a version 4 UUID is recommended.<br>- Ensure that the API key(s) used for all Place Autocomplete and Place Details requests within a session belong to the same Cloud Console project.<br>- Be sure to pass a unique session token for each new session. Using the same token for more than one session will result in each request being billed individually. |
| `language` | [`Language1 \| undefined`](../../doc/models/language-1.md) | Query, Optional | The language in which to return results.<br><br>* See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.<br>* If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.<br>* The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.<br>* If a name is not available in the preferred language, the API uses the closest match.<br>* The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian. |
| `region` | [`Region1 \| undefined`](../../doc/models/region-1.md) | Query, Optional | The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland"). |
| `reviewsSort` | `string \| undefined` | Query, Optional | The sorting method to use when returning reviews. Can be set to `most_relevant` (default) or `newest`.<br><br>- For `most_relevant` (default), reviews are sorted by relevance; the service will bias the results to return reviews originally written in the preferred language.<br>- For `newest`, reviews are sorted in chronological order; the preferred language does not affect the sort order.<br><br>Google recommends that you display how the reviews are being sorted to the end user. |
| `reviewsNoTranslations` | `boolean \| undefined` | Query, Optional | Specify `reviews_no_translations=true` to disable translation of reviews; specify `reviews_no_translations=false` to enable translation of reviews. Reviews are returned in their original language.<br><br>If omitted, or passed with no value, translation of reviews is enabled. If the `language` parameter was specified in the request, use the specified language as the preferred language for translation. If `language` is omitted, the API attempts to use the `Accept-Language` header as the preferred language. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: 200 OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PlacesDetailsResponse`](../../doc/models/places-details-response.md).

## Example Usage

```ts
const placeId = 'ChIJN1t_tDeuEmsRUsoyG83frY4';

const fields: string[] = [
  'formatted_address'
];

try {
  const response = await placesApi.placeDetails(
    placeId,
    fields
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
  "html_attributions": [],
  "result": {
    "address_components": [
      {
        "long_name": "48",
        "short_name": "48",
        "types": [
          "street_number"
        ]
      },
      {
        "long_name": "Pirrama Road",
        "short_name": "Pirrama Rd",
        "types": [
          "route"
        ]
      },
      {
        "long_name": "Pyrmont",
        "short_name": "Pyrmont",
        "types": [
          "locality",
          "political"
        ]
      },
      {
        "long_name": "City of Sydney",
        "short_name": "City of Sydney",
        "types": [
          "administrative_area_level_2",
          "political"
        ]
      },
      {
        "long_name": "New South Wales",
        "short_name": "NSW",
        "types": [
          "administrative_area_level_1",
          "political"
        ]
      },
      {
        "long_name": "Australia",
        "short_name": "AU",
        "types": [
          "country",
          "political"
        ]
      },
      {
        "long_name": "2009",
        "short_name": "2009",
        "types": [
          "postal_code"
        ]
      }
    ],
    "adr_address": "<span class=\"street-address\">48 Pirrama Rd</span>, <span class=\"locality\">Pyrmont</span> <span class=\"region\">NSW</span> <span class=\"postal-code\">2009</span>, <span class=\"country-name\">Australia</span>",
    "business_status": "OPERATIONAL",
    "formatted_address": "48 Pirrama Rd, Pyrmont NSW 2009, Australia",
    "formatted_phone_number": "(02) 9374 4000",
    "geometry": {
      "location": {
        "lat": -33.866489,
        "lng": 151.1958561
      },
      "viewport": {
        "northeast": {
          "lat": -33.8655112697085,
          "lng": 151.1971156302915
        },
        "southwest": {
          "lat": -33.86820923029149,
          "lng": 151.1944176697085
        }
      }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    "icon_background_color": "#7B9EB0",
    "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    "international_phone_number": "+61 2 9374 4000",
    "name": "Google Workplace 6",
    "opening_hours": {
      "open_now": false,
      "periods": [
        {
          "close": {
            "day": 1,
            "time": "1700"
          },
          "open": {
            "day": 1,
            "time": "0900"
          }
        },
        {
          "close": {
            "day": 2,
            "time": "1700"
          },
          "open": {
            "day": 2,
            "time": "0900"
          }
        },
        {
          "close": {
            "day": 3,
            "time": "1700"
          },
          "open": {
            "day": 3,
            "time": "0900"
          }
        },
        {
          "close": {
            "day": 4,
            "time": "1700"
          },
          "open": {
            "day": 4,
            "time": "0900"
          }
        },
        {
          "close": {
            "day": 5,
            "time": "1700"
          },
          "open": {
            "day": 5,
            "time": "0900"
          }
        }
      ],
      "weekday_text": [
        "Monday: 9:00 AM – 5:00 PM",
        "Tuesday: 9:00 AM – 5:00 PM",
        "Wednesday: 9:00 AM – 5:00 PM",
        "Thursday: 9:00 AM – 5:00 PM",
        "Friday: 9:00 AM – 5:00 PM",
        "Saturday: Closed",
        "Sunday: Closed"
      ]
    },
    "photos": [
      {
        "height": 3024,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/117600448889234589608\">Cynthia Wei</a>"
        ],
        "photo_reference": "Aap_uEC6jqtpflLS8GxQqPHBjlcwBf2sri0ZErk9q1ciHGZ6Zx5HBiiiEsPEO3emtB1PGyWbBQhgPL2r9CshoVlJEG4xzB71QMhGBTqqeaCNk1quO3vTTiP50aM1kmOaBQ-DF1ER7zpu6BQOEtnusKMul0m4KA45wfE3h6Xh2IxjLNzx-IiX",
        "width": 4032
      },
      {
        "height": 3264,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/102493344958625549078\">Heyang Li</a>"
        ],
        "photo_reference": "Aap_uECyRjHhOQgGaKTW6Z3ZfTEaDhNc44m0F6GrNSFIMffixwI5xqD35QhecdzVY-FUuDtVE1huu8-2HkxgI9Gwvy6W18fU-_E3UUkdSFBQqGK8_slKlT8BZZc66sTX53IEcTDrZfT-E5_YUBYBOm13yxOTOfWfEDABhaxCGC5Hu_XYh0fI",
        "width": 4912
      },
      {
        "height": 3036,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/104829437842034782235\">Anna Linetsky</a>"
        ],
        "photo_reference": "Aap_uEAumTzSdhRHDutPAj6wVPSZZmBV-brI6TPFwI0tcQlbSR74z44mUPr4aXMQKck_AzHaKmbfR3P2c1qsu45i1RQPHrcpIXxrA78FmDjCdWYYZWUnFozdcmEj9OQ_V0G08adpKivMKZyeaQ1NuwRy9GhSopeKpzkzkFZG5vXMYPPSgpa1",
        "width": 4048
      },
      {
        "height": 4016,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/107755640736541028674\">Jonah Dell</a>"
        ],
        "photo_reference": "Aap_uECC7cSbDkh-TdmXr6m5d5pgVXJmvXg8dF2jzhL0b0Ko4CtnVll6-tIvdz7vhbCsd3hl2u9EgZ4Y30FBxKmFcimfeYUgW2XJyv8JY5IYGuXsKkCLqpV3QH9dIGwoUv2uX0eosDsUsTN2DOlyOasUgVxcYqzIzEmrL5ofIssThQWZeozD",
        "width": 6016
      },
      {
        "height": 3024,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/115886271727815775491\">Anthony Huynh</a>"
        ],
        "photo_reference": "Aap_uEDTdw58CglFmZZAR9iZ05x3y2oK9r5_dRqKWnbZKSS9gs6gp9AeBa1QDvBL6dzZyQAZfN8H2Eppu6y4NBaPOp-GkulZYiKRM7Yww8sUEv-8dmcq35Tx38pe4LEX2wIicFkQHedRgMc0FfV9aFtgosQ5ps5-HCjJSApg8eLGyuxxqPm9",
        "width": 4032
      },
      {
        "height": 3024,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/102939237947063969663\">Jasen Baker</a>"
        ],
        "photo_reference": "Aap_uEAGqslqZPhZUk0T2Y6l7mkCYnY7JN9li4g5NkZsE0N4Cdy7_cZ-fZWyV02VhpQR4Ph4fLUL6_WTXrlGMXXzUJXUcSmSTs2d_Dzf3Q_A1y07Dm-vtv7pS3JXsWyrWETGIoT1pIj81PPdUc1vlR2i3GFMWAbx9rCC472ZJclY8JlvMg-x",
        "width": 4032
      },
      {
        "height": 3024,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/100678816592586275978\">Jeremy Hsiao</a>"
        ],
        "photo_reference": "Aap_uEBaGxeN90YFjD-AUjxZqM44kpMcICKKBBhb0RQQS7DHHFaay8RRAwjWsAt8GEmmB5QnxrbQWHU3TwhVXXHP0m-YNp9Ds3ihpiFan0moNv4QB7kern5cfjWhhrWe8B0dz_vYvmPssJE24P-24YfWWHubOo0L2MjQyueZfDv57N_RvDZk",
        "width": 4032
      },
      {
        "height": 1515,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/112343109286948028063\">Andrew W</a>"
        ],
        "photo_reference": "Aap_uEBDzJlmTeNUreMop6_hkC1HKTCRLyPs5fikJi58qCejtkWp5PIM6vzNN3HErkSWUwnamTr_WLyT7jXMAIdByR-hx8dG-OHjj5JxzmcPvuT_VeVLmdSbNPeIlpmp6EUcPOhaVrhEKojSd44QXkl0za29eZ0oj1KDOnAsGxmhanDFW7lI",
        "width": 2048
      },
      {
        "height": 3024,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/100678816592586275978\">Jeremy Hsiao</a>"
        ],
        "photo_reference": "Aap_uEBvYFpzCDQzvQ0kdBxxB70lTkLbTM0yH3xF-BCHsb7DQ63cuWnutvwv8oVLDSbA14_kns3WVlEInTyy2elvmH5lzQteb6zzRu3exkwE65_55TgJqdLO7RYYiPFliWk4ocszn9nn5ELv5uP2BQmqr9QET5vwgxR-0eshyVmcdM42jb39",
        "width": 4032
      },
      {
        "height": 4032,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/100678816592586275978\">Jeremy Hsiao</a>"
        ],
        "photo_reference": "Aap_uECQynuD_EnSnbz8sJQ6-B6uR-j2tuu4Z1tuGUjq8xnxFDk-W8OdeLzWBX8suNKTCsPlkzTqC22BXf_hX33XclGPL4SS9xnPmHcMrLoUl0H_xHYevFvT17Hgw5DZpSyVmLvDvxzzJ1rsZTh55QwopmAty083a1r1ZIfL32iXh_q8FUas",
        "width": 3024
      }
    ],
    "place_id": "ChIJN1t_tDeuEmsRUsoyG83frY4",
    "plus_code": {
      "compound_code": "45MW+C8 Pyrmont NSW, Australia",
      "global_code": "4RRH45MW+C8"
    },
    "rating": 4,
    "reference": "ChIJN1t_tDeuEmsRUsoyG83frY4",
    "reviews": [
      {
        "author_name": "Luke Archibald",
        "author_url": "https://www.google.com/maps/contrib/113389359827989670652/reviews",
        "language": "en",
        "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14GhGGmTmvtD34HiRgwHdXVJUTzVbxpsk5_JnNKM5MA=s128-c0x00000000-cc-rp-mo",
        "rating": 1,
        "relative_time_description": "a week ago",
        "text": "Called regarding paid advertising google pages to the top of its site of a scam furniture website misleading and taking peoples money without ever sending a product - explained the situation,  explained I'd spoken to an ombudsman regarding it.  Listed ticket numbers etc.\n\nThey left the advertisement running.",
        "time": 1652286798
      },
      {
        "author_name": "Tevita Taufoou",
        "author_url": "https://www.google.com/maps/contrib/105937236918123663309/reviews",
        "language": "en",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/AATXAJwZANdRSSg96QeZG--6BazG5uv_BJMIvpZGqwSz=s128-c0x00000000-cc-rp-mo",
        "rating": 1,
        "relative_time_description": "6 months ago",
        "text": "I need help.  Google Australia is taking my money. Money I don't have any I am having trouble sorting this issue out",
        "time": 1637215605
      },
      {
        "author_name": "Jordy Baker",
        "author_url": "https://www.google.com/maps/contrib/102582237417399865640/reviews",
        "language": "en",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/AATXAJwgg1tM4aVA4nJCMjlfJtHtFZuxF475Vb6tT74S=s128-c0x00000000-cc-rp-mo",
        "rating": 1,
        "relative_time_description": "4 months ago",
        "text": "I have literally never been here in my life, I am 17 and they are taking money I don't have for no reason.\n\nThis is not ok. I have rent to pay and my own expenses to deal with and now this.",
        "time": 1641389490
      },
      {
        "author_name": "Prem Rathod",
        "author_url": "https://www.google.com/maps/contrib/115981614018592114142/reviews",
        "language": "en",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/AATXAJyEQpqs4YvPPzMPG2dnnRTFPC4jxJfn8YXnm2gz=s128-c0x00000000-cc-rp-mo",
        "rating": 1,
        "relative_time_description": "4 months ago",
        "text": "Terrible service. all reviews are fake and irrelevant. This is about reviewing google as business not the building/staff etc.",
        "time": 1640159655
      },
      {
        "author_name": "Husuni Hamza",
        "author_url": "https://www.google.com/maps/contrib/102167316656574288776/reviews",
        "language": "en",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/AATXAJwRkyvoSlgd06ahkF9XI9D39o6Zc_Oycm5EKuRg=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "relative_time_description": "7 months ago",
        "text": "Nice site. Please I want to work with you. Am Alhassan Haruna, from Ghana. Contact me +233553851616",
        "time": 1633197305
      }
    ],
    "types": [
      "point_of_interest",
      "establishment"
    ],
    "url": "https://maps.google.com/?cid=10281119596374313554",
    "user_ratings_total": 939,
    "utc_offset": 600,
    "vicinity": "48 Pirrama Road, Pyrmont",
    "website": "http://google.com/"
  },
  "status": "OK"
}
```


# Find Place from Text

A Find Place request takes a text input and returns a place. The input can be any kind of Places text data, such as a name, address, or phone number. The request must be a string. A Find Place request using non-string data such as a lat/lng coordinate or plus code generates an error.

<div class="note">Note: If you omit the fields parameter from a Find Place request, only the place_id for the result will be returned.</div>


```ts
async findPlaceFromText(
  input: string,
  inputtype: Inputtype1,
  fields?: string[],
  locationbias?: string,
  language?: Language1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PlacesFindPlaceFromTextResponse>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-query-parameter.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `input` | `string` | Query, Required | The text string on which to search, for example: "restaurant" or "123 Main Street". This must be a place name, address, or category of establishments. Any other types of input can generate errors<br>and are not guaranteed to return valid results. The Places API will return candidate matches based on this string and order the results based on their perceived relevance. |
| `inputtype` | [`Inputtype1`](../../doc/models/inputtype-1.md) | Query, Required | The type of input. This can be one of either `textquery` or `phonenumber`. Phone numbers must be in international format (prefixed by a plus sign ("+"), followed by the country code, then the phone number itself). See [E.164 ITU recommendation](https://en.wikipedia.org/wiki/E.164) for more information. |
| `fields` | `string[] \| undefined` | Query, Optional | <div class="caution"> Caution: Place Search requests and Place Details requests do not return the same fields. Place Search requests return a subset of the fields that are returned by Place Details requests. If the field you want is not returned by Place Search, you can use Place Search to get a <code>place_id</code>, then use that Place ID to make a Place Details request. For more information on the fields that are unavailable in a Place Search request, see <a href="https://developers.google.com/maps/documentation/places/web-service/place-data-fields#places-api-fields-support">Places API fields support</a>.</div><br>Use the fields parameter to specify a comma-separated list of place data types to return. For example: `fields=formatted_address,name,geometry`. Use a forward slash when specifying compound values. For example: `opening_hours/open_now`.<br>Fields are divided into three billing categories: Basic, Contact, and Atmosphere. Basic fields are billed at base rate, and incur no additional charges. Contact and Atmosphere fields are billed at a higher rate. See the [pricing sheet](https://developers.google.com/maps/documentation/places/web-service/usage-and-billing/) for more information. Attributions, `html_attributions`, are always returned with every call, regardless of whether the field has been requested.<br><br>**Basic**<br><br>The Basic category includes the following fields: `address_components`, `adr_address`, `business_status`, `formatted_address`, `geometry`, `icon`, `icon_mask_base_uri`, `icon_background_color`, `name`, `permanently_closed` ([deprecated](https://developers.google.com/maps/deprecations)), `photo`, `place_id`, `plus_code`, `type`, `url`, `utc_offset`, `vicinity`, `wheelchair_accessible_entrance`.<br><br>**Contact**<br><br>The Contact category includes the following fields: `current_opening_hours`, `formatted_phone_number`, `international_phone_number`, `opening_hours`, `secondary_opening_hours`, `website`<br><br>**Atmosphere**<br><br>The Atmosphere category includes the following fields: `curbside_pickup`, `delivery`, `dine_in`, `editorial_summary`, `price_level`, `rating`, `reservable`, `reviews`, `serves_beer`, `serves_breakfast`, `serves_brunch`, `serves_dinner`, `serves_lunch`, `serves_vegetarian_food`, `serves_wine`, `takeout`, `user_ratings_total`.<br><br>**Constraints**: *Minimum Items*: `1` |
| `locationbias` | `string \| undefined` | Query, Optional | Prefer results in a specified area, by specifying either a radius plus lat/lng, or two lat/lng pairs representing the points of a rectangle. If this parameter is not specified, the API uses IP address biasing by default.<br><br>- IP bias: Instructs the API to use IP address biasing. Pass the string `ipbias` (this option has no additional parameters).<br>- Circular: A string specifying radius in meters, plus lat/lng in decimal degrees. Use the following format: `circle:radiuslat,lng`.<br>- Rectangular: A string specifying two lat/lng pairs in decimal degrees, representing the south/west and north/east points of a rectangle. Use the following format:`rectangle:south,west\|north,east`. Note that east/west values are wrapped to the range -180, 180, and north/south values are clamped to the range -90, 90. |
| `language` | [`Language1 \| undefined`](../../doc/models/language-1.md) | Query, Optional | The language in which to return results.<br><br>* See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.<br>* If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.<br>* The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.<br>* If a name is not available in the preferred language, the API uses the closest match.<br>* The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: 200 OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PlacesFindPlaceFromTextResponse`](../../doc/models/places-find-place-from-text-response.md).

## Example Usage

```ts
const input = 'Museum of Contemporary Art Australia';

const inputtype = Inputtype1.Textquery;

const fields: string[] = [
  'formatted_address'
];

const locationbias = 'ipbias';

try {
  const response = await placesApi.findPlaceFromText(
    input,
    inputtype,
    fields,
    locationbias
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
  "candidates": [
    {
      "formatted_address": "140 George St, The Rocks NSW 2000, Australia",
      "geometry": {
        "location": {
          "lat": -33.8599358,
          "lng": 151.2090295
        },
        "viewport": {
          "northeast": {
            "lat": -33.85824377010728,
            "lng": 151.2104386798927
          },
          "southwest": {
            "lat": -33.86094342989272,
            "lng": 151.2077390201073
          }
        }
      },
      "name": "Museum of Contemporary Art Australia",
      "opening_hours": {
        "open_now": false
      },
      "rating": 4.4
    }
  ],
  "status": "OK"
}
```


# Nearby Search

A Nearby Search lets you search for places within a specified area. You can refine your search request by supplying keywords or specifying the type of place you are searching for.

```ts
async nearbySearch(
  location: string,
  radius: number,
  keyword?: string,
  maxprice?: Maxprice1,
  minprice?: Minprice1,
  name?: string,
  opennow?: boolean,
  pagetoken?: string,
  rankby?: Rankby1,
  type?: string,
  language?: Language1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PlacesTextSearchResponse>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-query-parameter.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `location` | `string` | Query, Required | The point around which to retrieve place information. This must be specified as `latitude,longitude`. |
| `radius` | `number` | Query, Required | Defines the distance (in meters) within which to return place results. You may bias results to a specified circle by passing a `location` and a `radius` parameter. Doing so instructs the Places service to _prefer_ showing results within that circle; results outside of the defined area may still be displayed.<br><br>The radius will automatically be clamped to a maximum value depending on the type of search and other parameters.<br><br>* Autocomplete: 50,000 meters<br>* Nearby Search:<br>  * with `keyword` or `name`: 50,000 meters<br>  * without `keyword` or `name`<br>    * Up to 50,000 meters, adjusted dynamically based on area density, independent of `rankby` parameter.<br>    * When using `rankby=distance`, the radius parameter will not be accepted, and will result in an `INVALID_REQUEST`.<br>* Query Autocomplete: 50,000 meters<br>* Text Search: 50,000 meters |
| `keyword` | `string \| undefined` | Query, Optional | The text string on which to search, for example: "restaurant" or "123 Main Street". This must be a place name, address, or category of establishments.<br>Any other types of input can generate errors and are not guaranteed to return valid results. The Google Places service will return candidate matches<br>based on this string and order the results based on their perceived relevance.<br><br>Explicitly including location information using this parameter may conflict with the location, radius, and rankby parameters, causing unexpected results.<br><br>If this parameter is omitted, places with a business_status of CLOSED_TEMPORARILY or CLOSED_PERMANENTLY will not be returned. |
| `maxprice` | [`Maxprice1 \| undefined`](../../doc/models/maxprice-1.md) | Query, Optional | Restricts results to only those places within the specified range. Valid values range between 0 (most affordable) to 4 (most expensive), inclusive. The exact amount indicated by a specific value will vary from region to region. |
| `minprice` | [`Minprice1 \| undefined`](../../doc/models/minprice-1.md) | Query, Optional | Restricts results to only those places within the specified range. Valid values range between 0 (most affordable) to 4 (most expensive), inclusive. The exact amount indicated by a specific value will vary from region to region. |
| `name` | `string \| undefined` | Query, Optional | Equivalent to `keyword`. Values in this field are combined with values in the `keyword` field and passed as part of the same search string. |
| `opennow` | `boolean \| undefined` | Query, Optional | Returns only those places that are open for business at the time the query is sent. Places that do not specify opening hours in the Google Places database will not be returned if you include this parameter in your query. |
| `pagetoken` | `string \| undefined` | Query, Optional | Returns up to 20 results from a previously run search. Setting a `pagetoken` parameter will execute a search with the same parameters used previously — all parameters other than pagetoken will be ignored. |
| `rankby` | [`Rankby1 \| undefined`](../../doc/models/rankby-1.md) | Query, Optional | Specifies the order in which results are listed. Possible values are:<br><br>- `prominence` (default). This option sorts results based on their importance. Ranking will favor prominent places within the set radius over nearby places that match but that are less prominent. Prominence can be affected by a place's ranking in Google's index, global popularity, and other factors. When prominence is specified, the `radius` parameter is required.<br>- `distance`. This option biases search results in ascending order by their distance from the specified location. When `distance` is specified, one or more of `keyword`, `name`, or `type` is required and `radius` is disallowed. |
| `type` | `string \| undefined` | Query, Optional | Restricts the results to places matching the specified type. Only one type may be specified. If more than one type is provided, all types following the first entry are ignored.<br><br>* `type=hospital\|pharmacy\|doctor` becomes `type=hospital`<br>* `type=hospital,pharmacy,doctor` is ignored entirely<br><br>See the list of [supported types](https://developers.google.com/maps/documentation/places/web-service/supported_types).<br><br><div class="note">Note: Adding both `keyword` and `type` with the same value (`keyword=cafe&type=cafe` or `keyword=parking&type=parking`) can yield `ZERO_RESULTS`.</div><br> |
| `language` | [`Language1 \| undefined`](../../doc/models/language-1.md) | Query, Optional | The language in which to return results.<br><br>* See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.<br>* If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.<br>* The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.<br>* If a name is not available in the preferred language, the API uses the closest match.<br>* The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: 200 OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PlacesTextSearchResponse`](../../doc/models/places-text-search-response.md).

## Example Usage

```ts
const location = '40,-110';

const radius = 1000;

try {
  const response = await placesApi.nearbySearch(
    location,
    radius
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
  "html_attributions": [],
  "results": [
    {
      "business_status": "OPERATIONAL",
      "geometry": {
        "location": {
          "lat": -33.8587323,
          "lng": 151.2100055
        },
        "viewport": {
          "northeast": {
            "lat": -33.85739847010727,
            "lng": 151.2112436298927
          },
          "southwest": {
            "lat": -33.86009812989271,
            "lng": 151.2085439701072
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
      "name": "Cruise Bar",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 608,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/112582655193348962755\">A Google User</a>"
          ],
          "photo_reference": "Aap_uECvJIZuXT-uLDYm4DPbrV7gXVPeplbTWUgcOJ6rnfc4bUYCEAwPU_AmXGIaj0PDhWPbmrjQC8hhuXRJQjnA1-iREGEn7I0ZneHg5OP1mDT7lYVpa1hUPoz7cn8iCGBN9MynjOPSUe-UooRrFw2XEXOLgRJ-uKr6tGQUp77CWVocpcoG",
          "width": 1080
        }
      ],
      "place_id": "ChIJi6C1MxquEmsR9-c-3O48ykI",
      "plus_code": {
        "compound_code": "46R6+G2 The Rocks, New South Wales",
        "global_code": "4RRH46R6+G2"
      },
      "price_level": 2,
      "rating": 4,
      "reference": "ChIJi6C1MxquEmsR9-c-3O48ykI",
      "scope": "GOOGLE",
      "types": [
        "bar",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "user_ratings_total": 1269,
      "vicinity": "Level 1, 2 and 3, Overseas Passenger Terminal, Circular Quay W, The Rocks"
    },
    {
      "business_status": "OPERATIONAL",
      "geometry": {
        "location": {
          "lat": -33.8675219,
          "lng": 151.2016502
        },
        "viewport": {
          "northeast": {
            "lat": -33.86614532010728,
            "lng": 151.2031259298927
          },
          "southwest": {
            "lat": -33.86884497989272,
            "lng": 151.2004262701072
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
      "icon_background_color": "#7B9EB0",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
      "name": "Sydney Harbour Dinner Cruises",
      "opening_hours": {
        "open_now": true
      },
      "photos": [
        {
          "height": 835,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/109764923610545394994\">A Google User</a>"
          ],
          "photo_reference": "Aap_uEBVsYnNcrpRixtrlHBztigZh70CwYkNWZzQnqJ39SjeBo_wvgKf-kXc6tgaMLBdQrRKmxmSKjOezoZrv-sHKVbTX0OI48HBqYYVnQiZQ-WGeuQDsLEPwX7LaVPa68nUAxX114Zpqt7bryoO9wL4qXdgEnopbOp5WWLALhKEHoIEH7f7",
          "width": 1200
        }
      ],
      "place_id": "ChIJM1mOVTS6EmsRKaDzrTsgids",
      "plus_code": {
        "compound_code": "46J2+XM Sydney, New South Wales",
        "global_code": "4RRH46J2+XM"
      },
      "rating": 4.8,
      "reference": "ChIJM1mOVTS6EmsRKaDzrTsgids",
      "scope": "GOOGLE",
      "types": [
        "tourist_attraction",
        "travel_agency",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "user_ratings_total": 9,
      "vicinity": "32 The Promenade, Sydney"
    },
    {
      "business_status": "OPERATIONAL",
      "geometry": {
        "location": {
          "lat": -33.8676569,
          "lng": 151.2017213
        },
        "viewport": {
          "northeast": {
            "lat": -33.86629922010728,
            "lng": 151.2031712798927
          },
          "southwest": {
            "lat": -33.86899887989272,
            "lng": 151.2004716201073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
      "icon_background_color": "#7B9EB0",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
      "name": "Clearview Sydney Harbour Cruises",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 685,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/114394575270272775071\">Clearview Glass Boat Cruises</a>"
          ],
          "photo_reference": "Aap_uEAlExjnXA0VWyb_oYwCJ8utWG_Ennhwmn_xadpgenMNUgTuxrvgf1Xdw4bsbL6kFSWH7bhbpVHK1esdNY37ancJvbL_Gnsc7EZ5KEBNPvYZ_ZEyLco4a5v34LFkodxfFZbJ-ejO3zN4W_0C37P5jAmTnLWMNFYUPvoU3UMi70qHRNF5",
          "width": 1024
        }
      ],
      "place_id": "ChIJNQfwZTiuEmsR1m1x9w0E2V0",
      "plus_code": {
        "compound_code": "46J2+WM Sydney, New South Wales",
        "global_code": "4RRH46J2+WM"
      },
      "rating": 3.8,
      "reference": "ChIJNQfwZTiuEmsR1m1x9w0E2V0",
      "scope": "GOOGLE",
      "types": [
        "travel_agency",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "user_ratings_total": 49,
      "vicinity": "32 The Promenade King Street Wharf 5, Sydney"
    },
    {
      "business_status": "OPERATIONAL",
      "geometry": {
        "location": {
          "lat": -33.8677035,
          "lng": 151.2017297
        },
        "viewport": {
          "northeast": {
            "lat": -33.86634597010728,
            "lng": 151.2031781298927
          },
          "southwest": {
            "lat": -33.86904562989272,
            "lng": 151.2004784701072
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
      "icon_background_color": "#7B9EB0",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
      "name": "Sydney Harbour Lunch Cruise",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 545,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/102428257696490257922\">Sydney Harbour Lunch Cruise</a>"
          ],
          "photo_reference": "Aap_uEBFyQ2xDzHk7dGF_FTvNeJ01NQD6GROq89rufdGQl5Gi0zVfpnETBjPK2v7UEDl_6F-m8aR5FcEWJMqPaH4Oh_CQh2jaUAUAesUInucpCe7OFdleSYJ_8kgunhsIvGf1D1s_pes6Rk2JMVEs8rEs6ZHSTmUQXX2Yh-Gt9MuPQdYNuNv",
          "width": 969
        }
      ],
      "place_id": "ChIJUbf3iDiuEmsROJxXbhYO7cM",
      "plus_code": {
        "compound_code": "46J2+WM Sydney, New South Wales",
        "global_code": "4RRH46J2+WM"
      },
      "rating": 3.9,
      "reference": "ChIJUbf3iDiuEmsROJxXbhYO7cM",
      "scope": "GOOGLE",
      "types": [
        "travel_agency",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "user_ratings_total": 23,
      "vicinity": "5/32 The Promenade, Sydney"
    },
    {
      "business_status": "OPERATIONAL",
      "geometry": {
        "location": {
          "lat": -33.8675883,
          "lng": 151.2016452
        },
        "viewport": {
          "northeast": {
            "lat": -33.86623847010728,
            "lng": 151.2029950298927
          },
          "southwest": {
            "lat": -33.86893812989273,
            "lng": 151.2002953701073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
      "icon_background_color": "#7B9EB0",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
      "name": "Sydney Showboats - Dinner Cruise With Show",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 4912,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/105311284660389698992\">A Google User</a>"
          ],
          "photo_reference": "Aap_uED1aGaMs8xYfiuzeBqVcFsk3yguUujdE4S3rNThMpLtoU0RukF40KCt0CAxgHP1HoY8Z7NYcWvax6qmMMVPBbmzGhoaiwiAAyv2GGA9vhcgsJ5w0LweT0y1lgRGZxU3nZIdNLiYAp9JHM171UkN04H6UqYSxKVZ8N_f2aslkqOaBF_e",
          "width": 7360
        }
      ],
      "place_id": "ChIJjRuIiTiuEmsRCHhYnrWiSok",
      "plus_code": {
        "compound_code": "46J2+XM Sydney, New South Wales",
        "global_code": "4RRH46J2+XM"
      },
      "rating": 4.1,
      "reference": "ChIJjRuIiTiuEmsRCHhYnrWiSok",
      "scope": "GOOGLE",
      "types": [
        "travel_agency",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "user_ratings_total": 119,
      "vicinity": "32 The Promenade, King Street Wharf, 5, Sydney"
    },
    {
      "business_status": "OPERATIONAL",
      "geometry": {
        "location": {
          "lat": -33.8677035,
          "lng": 151.2017297
        },
        "viewport": {
          "northeast": {
            "lat": -33.86634597010728,
            "lng": 151.2031781298927
          },
          "southwest": {
            "lat": -33.86904562989272,
            "lng": 151.2004784701072
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
      "icon_background_color": "#7B9EB0",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
      "name": "Magistic Cruises",
      "opening_hours": {
        "open_now": true
      },
      "photos": [
        {
          "height": 1536,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/103073818292552522030\">A Google User</a>"
          ],
          "photo_reference": "Aap_uEC8bq-YphfIDcdxANBfgGMBIX2B0ggNep9ddVoePj6sfdcdusIn07x8biaxevZ_6BpzDDRsUL8No5P3ftI4on_pqbAbIEUL5gFGgezpVZ3M9GWvKdJm3njO_aJaghWl4_aQb75c0WGYDRFPhn6fWsLkD7KxodviJeCX4OCGt1eRJnlK",
          "width": 2048
        }
      ],
      "place_id": "ChIJxRjqYTiuEmsRGebAA_chDLE",
      "plus_code": {
        "compound_code": "46J2+WM Sydney, New South Wales",
        "global_code": "4RRH46J2+WM"
      },
      "rating": 3.9,
      "reference": "ChIJxRjqYTiuEmsRGebAA_chDLE",
      "scope": "GOOGLE",
      "types": [
        "tourist_attraction",
        "travel_agency",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "user_ratings_total": 99,
      "vicinity": "King Street Wharf, 32 The Promenade, Sydney"
    },
    {
      "business_status": "OPERATIONAL",
      "geometry": {
        "location": {
          "lat": -33.8609391,
          "lng": 151.2098735
        },
        "viewport": {
          "northeast": {
            "lat": -33.85958927010727,
            "lng": 151.2112233298927
          },
          "southwest": {
            "lat": -33.86228892989272,
            "lng": 151.2085236701072
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
      "icon_background_color": "#7B9EB0",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
      "name": "Australian Cruise Group",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 1536,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/113088009011192061895\">Keith Bauman</a>"
          ],
          "photo_reference": "Aap_uED7aBwIbN6iuoZi8e9xCrt6F_EhppGCBfzYCgypetw8cGn4Ui0Y3JZe3QJ0buf0zc54BtPz-SWXxecPd6kDvNNZD5Eu_ZzTP13rXMzSDJa6UcwFiXU4y3qYrWAyJ6mtYrd2PJgw0KzvYaZoPze7Ka6zG6k3IOjeSICDYH6YOzkXhelj",
          "width": 2048
        }
      ],
      "place_id": "ChIJpU8KgUKuEmsRKErVGEaa11w",
      "plus_code": {
        "compound_code": "46Q5+JW Sydney, New South Wales",
        "global_code": "4RRH46Q5+JW"
      },
      "rating": 4.4,
      "reference": "ChIJpU8KgUKuEmsRKErVGEaa11w",
      "scope": "GOOGLE",
      "types": [
        "travel_agency",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "user_ratings_total": 5,
      "vicinity": "6 Cirular Quay, Sydney"
    },
    {
      "business_status": "OPERATIONAL",
      "geometry": {
        "location": {
          "lat": -33.8686058,
          "lng": 151.2018206
        },
        "viewport": {
          "northeast": {
            "lat": -33.86730002010728,
            "lng": 151.2032717798927
          },
          "southwest": {
            "lat": -33.86999967989272,
            "lng": 151.2005721201073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
      "icon_background_color": "#7B9EB0",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
      "name": "Rhythmboat Cruises",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 2269,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/104066891898402903288\">Rhythmboat Sydney Harbour Cruises</a>"
          ],
          "photo_reference": "Aap_uEAT8eop-IsfSAQ3KP6YXRNRsFkESXDecsaPnaVhq5bZzny5guvhS4smciianRGbZgDtFtAcU-ZXTaBfuh80CFw8vpJyKaB4grgW_CW64rU1JF9FDy_M8HtEk3rOrMhPDiF8ns-mc16E4rWSuAQIc76Du_eCd63ofoErESOtSWAQVcew",
          "width": 4032
        }
      ],
      "place_id": "ChIJyWEHuEmuEmsRm9hTkapTCrk",
      "plus_code": {
        "compound_code": "46J2+HP Sydney, New South Wales",
        "global_code": "4RRH46J2+HP"
      },
      "rating": 3.9,
      "reference": "ChIJyWEHuEmuEmsRm9hTkapTCrk",
      "scope": "GOOGLE",
      "types": [
        "travel_agency",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "user_ratings_total": 30,
      "vicinity": "King Street Wharf, King St, Sydney"
    },
    {
      "business_status": "OPERATIONAL",
      "geometry": {
        "location": {
          "lat": -33.8712692,
          "lng": 151.1898651
        },
        "viewport": {
          "northeast": {
            "lat": -33.86952792010727,
            "lng": 151.1914560298927
          },
          "southwest": {
            "lat": -33.87222757989272,
            "lng": 151.1887563701073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
      "icon_background_color": "#7B9EB0",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
      "name": "Glass Island",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 4480,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/117745044320706972021\">A Google User</a>"
          ],
          "photo_reference": "Aap_uEAaToCBaHP7Gfdjc740gwIkQcjeUD97NO0TKXJ5IXB0CLGQA6slEpHn4k9LwyhoAzzbSTXJduYyFIkHVmQWGp34NggRxrtOWp7sJf5N6j0ASYlJPmAtWUaaCWnbx_pxdndsopeJ7PYn9kTiMgFcSs-GeipI8hDZgAJswMBnfsO0xWQ-",
          "width": 6720
        }
      ],
      "place_id": "ChIJnScuboavEmsRyh-FGxhc3pw",
      "plus_code": {
        "compound_code": "45HQ+FW Pyrmont, New South Wales",
        "global_code": "4RRH45HQ+FW"
      },
      "rating": 4.1,
      "reference": "ChIJnScuboavEmsRyh-FGxhc3pw",
      "scope": "GOOGLE",
      "types": [
        "bar",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "user_ratings_total": 90,
      "vicinity": "37 Bank St, Pyrmont"
    },
    {
      "business_status": "OPERATIONAL",
      "geometry": {
        "location": {
          "lat": -33.85876140000001,
          "lng": 151.2100004
        },
        "viewport": {
          "northeast": {
            "lat": -33.85737742010728,
            "lng": 151.2111319298927
          },
          "southwest": {
            "lat": -33.86007707989272,
            "lng": 151.2084322701072
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Junk Lounge",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 608,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/104473997089847488714\">A Google User</a>"
          ],
          "photo_reference": "Aap_uEDaHF9VZFV88tQqFyIgmPlcbCsK-ScCGuUVGh0mTAP4OzWh_0q0T5rPbeC7bas7vD5vC9oS95jtdr4oOnQmhGDAIbHkv4E6UHrQIl0f3XZ-3-RRDjn293w4qQb_BfhbPPO3nokU7npfMfVvCcelWf9WHiWNHT4EEHrFtvuhAWKobTnC",
          "width": 1080
        }
      ],
      "place_id": "ChIJq9W3HZOvEmsRYtKNTRmq34M",
      "plus_code": {
        "compound_code": "46R6+F2 The Rocks, New South Wales",
        "global_code": "4RRH46R6+F2"
      },
      "price_level": 2,
      "rating": 4.1,
      "reference": "ChIJq9W3HZOvEmsRYtKNTRmq34M",
      "scope": "GOOGLE",
      "types": [
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "user_ratings_total": 63,
      "vicinity": "Level 2, Overseas Passenger Terminal, Circular Quay W, The Rocks"
    },
    {
      "business_status": "OPERATIONAL",
      "geometry": {
        "location": {
          "lat": -33.8677035,
          "lng": 151.2017297
        },
        "viewport": {
          "northeast": {
            "lat": -33.86634597010728,
            "lng": 151.2031781298927
          },
          "southwest": {
            "lat": -33.86904562989272,
            "lng": 151.2004784701072
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
      "icon_background_color": "#7B9EB0",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
      "name": "Sydney New Year's Eve Cruises",
      "opening_hours": {
        "open_now": true
      },
      "photos": [
        {
          "height": 1600,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/115281801304517408477\">A Google User</a>"
          ],
          "photo_reference": "Aap_uEDceKHtQ9Hf2eHwnQYXLqrwZ1X2LYVhsfXbqrpIm3_lXZ9apURjAXtVgRVTGxJPD7BtaqR8C7bwaSTakmi0Pazn7g3suj8ZaQRBqheT3KVJDhZ9_GwVInLkWbxqnhivEXs1a-MC_J8XF1SL_5AQ3mAETgiLRQ04116IAEV5vHyIGRsa",
          "width": 2400
        }
      ],
      "place_id": "ChIJ__8_hziuEmsR27ucFXECfOg",
      "plus_code": {
        "compound_code": "46J2+WM Sydney, New South Wales",
        "global_code": "4RRH46J2+WM"
      },
      "rating": 5,
      "reference": "ChIJ__8_hziuEmsR27ucFXECfOg",
      "scope": "GOOGLE",
      "types": [
        "travel_agency",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "user_ratings_total": 5,
      "vicinity": "King Street Wharf 5, 32 The Promenade, Sydney"
    },
    {
      "business_status": "OPERATIONAL",
      "geometry": {
        "location": {
          "lat": -33.8669866,
          "lng": 151.2017231
        },
        "viewport": {
          "northeast": {
            "lat": -33.86563197010727,
            "lng": 151.2031347298927
          },
          "southwest": {
            "lat": -33.86833162989272,
            "lng": 151.2004350701073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
      "icon_background_color": "#13B5C7",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
      "name": "King Street Wharf Darling Harbour",
      "opening_hours": {
        "open_now": true
      },
      "photos": [
        {
          "height": 3024,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/101920674986627213698\">朱品貞</a>"
          ],
          "photo_reference": "Aap_uEDwKXVOjIaCj3LptOdd86B5umsdG7Z3jcvqcpUVLwHS6w8VGEkphgC8-shAx95CrsuXpnKz-XVIixVmgagQHKPH3vSLLqJ6LOAR7Q-_jiyx3ELXD0pm7AARiAtQAMBN9A-oqbtvGbE27yDpvBS1lKe9PCm-dMfrHIIcsS91Qeq2E4b6",
          "width": 4032
        }
      ],
      "place_id": "ChIJkfDzJ72vEmsR8xtYbk5f0p0",
      "plus_code": {
        "compound_code": "46M2+6M Sydney, New South Wales",
        "global_code": "4RRH46M2+6M"
      },
      "rating": 4.4,
      "reference": "ChIJkfDzJ72vEmsR8xtYbk5f0p0",
      "scope": "GOOGLE",
      "types": [
        "tourist_attraction",
        "convenience_store",
        "bowling_alley",
        "travel_agency",
        "bar",
        "restaurant",
        "food",
        "point_of_interest",
        "store",
        "establishment"
      ],
      "user_ratings_total": 3213,
      "vicinity": "The Promenade, Lime St, Sydney"
    },
    {
      "business_status": "OPERATIONAL",
      "geometry": {
        "location": {
          "lat": -33.870383,
          "lng": 151.1979245
        },
        "viewport": {
          "northeast": {
            "lat": -33.86901092010727,
            "lng": 151.1991702798927
          },
          "southwest": {
            "lat": -33.87171057989271,
            "lng": 151.1964706201073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "The Little Snail Restaurant",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 900,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/114727320476039103791\">The Little Snail</a>"
          ],
          "photo_reference": "Aap_uEA9aHKkB_6VoFx4VHRSp19PCwnTOuGfpmDYw1NdYNbzncfdjjfEmiiFz-E4tIJ6iGVZjR_bejX6wNr5thJjqlcdQ2PvPyTTo1jGtxk31JG9b6Vd0vu_v4Ep7yutzf3KTzBjYFBIGsYPf3Pj0DptMWPLP7fn33SBT7YmRqDEoGcUsBzw",
          "width": 1350
        }
      ],
      "place_id": "ChIJtwapWjeuEmsRcxV5JARHpSk",
      "plus_code": {
        "compound_code": "45HX+R5 Pyrmont, New South Wales",
        "global_code": "4RRH45HX+R5"
      },
      "price_level": 2,
      "rating": 4.5,
      "reference": "ChIJtwapWjeuEmsRcxV5JARHpSk",
      "scope": "GOOGLE",
      "types": [
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "user_ratings_total": 1916,
      "vicinity": "3/50 Murray St, Pyrmont"
    }
  ],
  "status": "OK"
}
```


# Text Search

The Google Places API Text Search Service is a web service that returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street". The service responds with a list of places matching the text string and any location bias that has been set.

The service is especially useful for making [ambiguous address](https://developers.google.com/maps/documentation/geocoding/best-practices) queries in an automated system, and non-address components of the string may match businesses as well as addresses. Examples of ambiguous address queries are incomplete addresses, poorly formatted addresses, or a request that includes non-address components such as business names.

The search response will include a list of places. You can send a Place Details request for more information about any of the places in the response.

```ts
async textSearch(
  query: string,
  radius: number,
  location?: string,
  maxprice?: Maxprice1,
  minprice?: Minprice1,
  opennow?: boolean,
  pagetoken?: string,
  type?: string,
  language?: Language1,
  region?: Region1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PlacesTextSearchResponse>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-query-parameter.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `query` | `string` | Query, Required | The text string on which to search, for example: "restaurant" or "123 Main Street". This must a place name, address, or category of establishments. Any other types<br>of input can generate errors and are not guaranteed to return valid results. The Google Places service will return candidate matches based on this string and order<br>the results based on their perceived relevance. |
| `radius` | `number` | Query, Required | Defines the distance (in meters) within which to return place results. You may bias results to a specified circle by passing a `location` and a `radius` parameter. Doing so instructs the Places service to _prefer_ showing results within that circle; results outside of the defined area may still be displayed.<br><br>The radius will automatically be clamped to a maximum value depending on the type of search and other parameters.<br><br>* Autocomplete: 50,000 meters<br>* Nearby Search:<br>  * with `keyword` or `name`: 50,000 meters<br>  * without `keyword` or `name`<br>    * Up to 50,000 meters, adjusted dynamically based on area density, independent of `rankby` parameter.<br>    * When using `rankby=distance`, the radius parameter will not be accepted, and will result in an `INVALID_REQUEST`.<br>* Query Autocomplete: 50,000 meters<br>* Text Search: 50,000 meters |
| `location` | `string \| undefined` | Query, Optional | The point around which to retrieve place information. This must be specified as `latitude,longitude`.<br><br><div class="note">The <code>location</code> parameter may be overriden if the <code>query</code> contains an explicit location such as <code>Market in Barcelona</code>. Using quotes around the query may also influence the weight given to the <code>location</code> and <code>radius</code>.</div><br> |
| `maxprice` | [`Maxprice1 \| undefined`](../../doc/models/maxprice-1.md) | Query, Optional | Restricts results to only those places within the specified range. Valid values range between 0 (most affordable) to 4 (most expensive), inclusive. The exact amount indicated by a specific value will vary from region to region. |
| `minprice` | [`Minprice1 \| undefined`](../../doc/models/minprice-1.md) | Query, Optional | Restricts results to only those places within the specified range. Valid values range between 0 (most affordable) to 4 (most expensive), inclusive. The exact amount indicated by a specific value will vary from region to region. |
| `opennow` | `boolean \| undefined` | Query, Optional | Returns only those places that are open for business at the time the query is sent. Places that do not specify opening hours in the Google Places database will not be returned if you include this parameter in your query. |
| `pagetoken` | `string \| undefined` | Query, Optional | Returns up to 20 results from a previously run search. Setting a `pagetoken` parameter will execute a search with the same parameters used previously — all parameters other than pagetoken will be ignored. |
| `type` | `string \| undefined` | Query, Optional | Restricts the results to places matching the specified type. Only one type may be specified. If more than one type is provided, all types following the first entry are ignored.<br><br>* `type=hospital\|pharmacy\|doctor` becomes `type=hospital`<br>* `type=hospital,pharmacy,doctor` is ignored entirely<br><br>See the list of [supported types](https://developers.google.com/maps/documentation/places/web-service/supported_types).<br><br><div class="note">Note: Adding both `keyword` and `type` with the same value (`keyword=cafe&type=cafe` or `keyword=parking&type=parking`) can yield `ZERO_RESULTS`.</div><br> |
| `language` | [`Language1 \| undefined`](../../doc/models/language-1.md) | Query, Optional | The language in which to return results.<br><br>* See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.<br>* If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.<br>* The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.<br>* If a name is not available in the preferred language, the API uses the closest match.<br>* The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian. |
| `region` | [`Region1 \| undefined`](../../doc/models/region-1.md) | Query, Optional | The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland"). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: 200 OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PlacesTextSearchResponse`](../../doc/models/places-text-search-response.md).

## Example Usage

```ts
const query = 'restaurants in Sydney';

const radius = 1000;

const location = '40,-110';

try {
  const response = await placesApi.textSearch(
    query,
    radius,
    location
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
  "html_attributions": [],
  "next_page_token": "Aap_uEAHsgFErpxZrytW1mgKsefD327VCf0OgNF9vpXPwTOG6AGhEZpGgMgofSzgCahevXhneCe9M9H24SOuE4ZcaE0ZR01gVykQZ6EoDnlWEQvXBXe6z0sgF5MQo7qBb6uD4VHKDLhgR59Lb86BzTHJzTzbm61OAPvyInZoaQxK8-oEf2PShZT7XRJKoF5nISbwvU_-RomwGDVi27oj0fToIyV-Vj2ftJw8ZUPbdGGCbcDolQyAwj11Dy2aaeK4SGwg2mO5Akxa7fCze2RJ0GCAvXXp7omTFDy_47OXsFgDPfzluc7mEb5VlzlIMZ0eWQ8VeNigtv-XZZG0f3HSo81Yeq3QhXedJ5oNE1XCwyMly3YVgw_h3amOzAOuDigF1pgFnfGyzxD8vr2bfbPTNvA9l7IJ8Q",
  "results": [
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "1 Macquarie St, Sydney NSW 2000, Australia",
      "geometry": {
        "location": {
          "lat": -33.8592041,
          "lng": 151.2132635
        },
        "viewport": {
          "northeast": {
            "lat": -33.85786707010728,
            "lng": 151.2147093298927
          },
          "southwest": {
            "lat": -33.86056672989272,
            "lng": 151.2120096701072
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Aria Restaurant Sydney",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 4032,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/112033760018394328606\">Dohyun Kim</a>"
          ],
          "photo_reference": "Aap_uED7B83PoQ1wNgzYcFZEOw1P2DqNjlaqiXxo-r4F_NaR27uV2OiIvijkI6RYyfiiHYo9UqjnZkRtZaNTk4C6Ickh3k3stsSvBU0KfLtFow-oRujSYYChYwiYhVyP27omLzQQjafhJ2N3LJbjcMxSePKXsQzYCqmOLWg0E9mSExMJ4aM",
          "width": 3024
        }
      ],
      "place_id": "ChIJdxxU1WeuEmsR11c4fswX-Io",
      "plus_code": {
        "compound_code": "46R7+88 Sydney, New South Wales, Australia",
        "global_code": "4RRH46R7+88"
      },
      "price_level": 4,
      "rating": 4.5,
      "reference": "ChIJdxxU1WeuEmsR11c4fswX-Io",
      "types": [
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      "user_ratings_total": 1681
    },
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "15 Bligh St, Sydney NSW 2000, Australia",
      "geometry": {
        "location": {
          "lat": -33.8651396,
          "lng": 151.2104533
        },
        "viewport": {
          "northeast": {
            "lat": -33.86384167010728,
            "lng": 151.2118993298927
          },
          "southwest": {
            "lat": -33.86654132989272,
            "lng": 151.2091996701073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Restaurant Hubert",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 683,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/113719639442868633401\">Ashley Hughes</a>"
          ],
          "photo_reference": "Aap_uEB41WOb_Nl8I8py4D6uXoLHzVYtFZZcucYdYAN1FtzXBnAu59xXrxk5tekoktAbklwmHeSFfdnTCWgHRZ1C5Azp9AMCP9GRGV1f2Z1-5kjsVgnYPiq82JoueSUdCSQJFabyL0cagtcGaFKetVi7DmUIHDQknEPCh_cpCbdOMw4Bkq5q",
          "width": 1024
        }
      ],
      "place_id": "ChIJF5-RdGquEmsR5rN_H74uSqQ",
      "plus_code": {
        "compound_code": "46M6+W5 Sydney, New South Wales, Australia",
        "global_code": "4RRH46M6+W5"
      },
      "price_level": 3,
      "rating": 4.6,
      "reference": "ChIJF5-RdGquEmsR5rN_H74uSqQ",
      "types": [
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      "user_ratings_total": 2393
    },
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "529 Kent St, Sydney NSW 2000, Australia",
      "geometry": {
        "location": {
          "lat": -33.8751241,
          "lng": 151.2049722
        },
        "viewport": {
          "northeast": {
            "lat": -33.87375712010727,
            "lng": 151.2065098798927
          },
          "southwest": {
            "lat": -33.87645677989271,
            "lng": 151.2038102201073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Tetsuya's Restaurant",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 1536,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/104244205094808346734\">A Google User</a>"
          ],
          "photo_reference": "Aap_uEABxcDNSMAz51CRsIr5ejvKYb61EQ94XxZTVO_mGdB8OcnoywPCx8f9e6xeAJjPzCcW_2ds6GfObP5l1gkq9lily-rVi5z2x2Ue7CvLwKyquIJnrF6offeY79I-jeiL153aXMNcunfpA2ERTkzl8SX9jSh7T5wZ49oSKL-0F8fh8kVF",
          "width": 2304
        }
      ],
      "place_id": "ChIJxXSgfDyuEmsR3X5VXGjBkFg",
      "plus_code": {
        "compound_code": "46F3+XX Sydney, New South Wales, Australia",
        "global_code": "4RRH46F3+XX"
      },
      "price_level": 4,
      "rating": 4.6,
      "reference": "ChIJxXSgfDyuEmsR3X5VXGjBkFg",
      "types": [
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      "user_ratings_total": 1127
    },
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "98 Clarence St, Sydney NSW 2000, Australia",
      "geometry": {
        "location": {
          "lat": -33.8679688,
          "lng": 151.2053027
        },
        "viewport": {
          "northeast": {
            "lat": -33.86662567010728,
            "lng": 151.2065763298927
          },
          "southwest": {
            "lat": -33.86932532989272,
            "lng": 151.2038766701073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Bistro Papillon",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 2880,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/115283784392961129380\">kate Kwak</a>"
          ],
          "photo_reference": "Aap_uEDTgSYN79L90iMhL-g9lZX-52myIvxBj82nYBA2MTVnSNbuqBwnDBkjHuiLHMG_0e4na2UxV8EpxZCHoisxLHRTFkr8ahDCVhgK9cxhnEgSjmqIPAQh7n23JqfHAzSp-2ksgg9FaK2NYNyAfhC_MtSFUXyVd0aNLdEsj95pWuFWlRyi",
          "width": 2160
        }
      ],
      "place_id": "ChIJywXDWT-uEmsRxyuZ0Inwi04",
      "plus_code": {
        "compound_code": "46J4+R4 Sydney, New South Wales, Australia",
        "global_code": "4RRH46J4+R4"
      },
      "price_level": 3,
      "rating": 4.5,
      "reference": "ChIJywXDWT-uEmsRxyuZ0Inwi04",
      "types": [
        "meal_takeaway",
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      "user_ratings_total": 498
    },
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "Ground Floor, 199 George St, Sydney NSW 2000, Australia",
      "geometry": {
        "location": {
          "lat": -33.8616781,
          "lng": 151.2077174
        },
        "viewport": {
          "northeast": {
            "lat": -33.86039142010728,
            "lng": 151.2091855798927
          },
          "southwest": {
            "lat": -33.86309107989273,
            "lng": 151.2064859201073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Mode Kitchen & Bar",
      "opening_hours": {
        "open_now": true
      },
      "photos": [
        {
          "height": 1536,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/104492734984758109746\">Mode Kitchen &amp; Bar</a>"
          ],
          "photo_reference": "Aap_uECCCAhdFqO1rCWXBXK2Ub1UloT6k5-VfS_J3HSNB_Znw1gEd78ltmokAt_g5kBa2dKrVKt_ob4rSJBvrREXUykDzRWChaXHIacM8KJix6J97T2P2WrzEP5FpNRsnfim8f4biVSNKSwmXGX_ZynFSmgBQOgDt1iVpdZ0IZ1beSPLHPL3",
          "width": 2048
        }
      ],
      "place_id": "ChIJL2r6S0KuEmsRxzk0sfWZYnU",
      "plus_code": {
        "compound_code": "46Q5+83 Sydney, New South Wales, Australia",
        "global_code": "4RRH46Q5+83"
      },
      "price_level": 2,
      "rating": 4.4,
      "reference": "ChIJL2r6S0KuEmsRxzk0sfWZYnU",
      "types": [
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      "user_ratings_total": 217
    },
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "Colonial Mutual Life Building, Angel Pl, Sydney NSW 2000, Australia",
      "geometry": {
        "location": {
          "lat": -33.8671138,
          "lng": 151.2083642
        },
        "viewport": {
          "northeast": {
            "lat": -33.86574872010727,
            "lng": 151.2097876798927
          },
          "southwest": {
            "lat": -33.86844837989272,
            "lng": 151.2070880201072
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Long Chim Sydney",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 4480,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/106160289014902493250\">Long Chim Sydney</a>"
          ],
          "photo_reference": "Aap_uECawW_4NulE_MO_wdqh5WwoX9oIMSVnhkjv73J87-xfYE0zYMeUX23RY3F45RPyREWucZeF5KY8Ty_Vir3uQ01EglcwQq_unavJ5wM1CUpLamMyuY4ifMisnNJcbDywnvlKUqcW8WfAD6fPIxeSKxVjsl6E9h9keqyy73DRRm3FuqMd",
          "width": 6720
        }
      ],
      "place_id": "ChIJ98SIQkCuEmsRQAStwDCAshw",
      "plus_code": {
        "compound_code": "46M5+58 Sydney, New South Wales, Australia",
        "global_code": "4RRH46M5+58"
      },
      "price_level": 3,
      "rating": 4.1,
      "reference": "ChIJ98SIQkCuEmsRQAStwDCAshw",
      "types": [
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      "user_ratings_total": 1234
    },
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "17-19 Alberta St, Sydney NSW 2000, Australia",
      "geometry": {
        "location": {
          "lat": -33.8777986,
          "lng": 151.2105307
        },
        "viewport": {
          "northeast": {
            "lat": -33.87646642010727,
            "lng": 151.2119536298927
          },
          "southwest": {
            "lat": -33.87916607989272,
            "lng": 151.2092539701073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Alberto's Lounge",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 4000,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/117499940191355312122\">Kreeson Naraidoo</a>"
          ],
          "photo_reference": "Aap_uEAKwkOCpQ5q8I0mLRMpDLfSe1E6g7umIx6QSy3GrWO-w6Yk533jOo0kCHi1LinjLzbFoSRxNcyvTk0RXj502jGe6VU__UOPjEB6GetV3Dpwgs_xR0Rb52wlx4BFMz8QbsIWOZNzF9Nutk_gLjCPKWk-A_eWjxmQerT7ZWG3OKhDkd_K",
          "width": 6000
        }
      ],
      "place_id": "ChIJU_xO9hOvEmsRERZv-itx524",
      "plus_code": {
        "compound_code": "46C6+V6 Sydney, New South Wales, Australia",
        "global_code": "4RRH46C6+V6"
      },
      "rating": 4.6,
      "reference": "ChIJU_xO9hOvEmsRERZv-itx524",
      "types": [
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      "user_ratings_total": 548
    },
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "25 Bligh St, Sydney NSW 2000, Australia",
      "geometry": {
        "location": {
          "lat": -33.8654401,
          "lng": 151.2101016
        },
        "viewport": {
          "northeast": {
            "lat": -33.86417187010728,
            "lng": 151.2115775298928
          },
          "southwest": {
            "lat": -33.86687152989273,
            "lng": 151.2088778701073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Chophouse Sydney",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 3550,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/106047480665428753229\">A Google User</a>"
          ],
          "photo_reference": "Aap_uEAWMbQLzK8Hf4k2UHZZ9bmXF6U8ghWjT4d3r6a3g6Jj0s4i3mDumwH49NWyAZe_gT6Dzmne8UoMPGYBSXDb8sKCUCGQRyMViMEWJCFDuT4Jvjwa_7JXsyj0_VEm9nmua4Sy39K9uk8ZQEUTMCqEIPlYzxRo3VXUm0KkM4TrPnJ8eDG9",
          "width": 5325
        }
      ],
      "place_id": "ChIJZ-VZ30GuEmsRwLVCmEo-B2I",
      "plus_code": {
        "compound_code": "46M6+R2 Sydney, New South Wales, Australia",
        "global_code": "4RRH46M6+R2"
      },
      "price_level": 3,
      "rating": 4.3,
      "reference": "ChIJZ-VZ30GuEmsRwLVCmEo-B2I",
      "types": [
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      "user_ratings_total": 1174
    },
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "46-52 Meagher St, Chippendale NSW 2008, Australia",
      "geometry": {
        "location": {
          "lat": -33.8874605,
          "lng": 151.2008331
        },
        "viewport": {
          "northeast": {
            "lat": -33.88617642010727,
            "lng": 151.2021869298927
          },
          "southwest": {
            "lat": -33.88887607989272,
            "lng": 151.1994872701073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Ester Restaurant",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 4032,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/105059859896721262581\">Angela Tong</a>"
          ],
          "photo_reference": "Aap_uEDAVR2ZbxrkwY2XIKsAO_K54A3sLZof-Cc8vjyqKVRXhwoOU8OkOpSG8dFFjJqD0EungtPoFuOAVmrZDA5sdUqgekvLTneFEWvQntR4zE0s8fuaVZf6nnl4FUnAalKWOQwEakMlAFT-PvqHzXaXfvuMJ69euepMNMJCWUCUz9HlzSuB",
          "width": 3024
        }
      ],
      "place_id": "ChIJ7WdhetixEmsRzIf7Q-q6ocY",
      "plus_code": {
        "compound_code": "4672+28 Chippendale, New South Wales, Australia",
        "global_code": "4RRH4672+28"
      },
      "price_level": 3,
      "rating": 4.5,
      "reference": "ChIJ7WdhetixEmsRzIf7Q-q6ocY",
      "types": [
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      "user_ratings_total": 956
    },
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "27 O'Connell St, Sydney NSW 2000, Australia",
      "geometry": {
        "location": {
          "lat": -33.8652017,
          "lng": 151.2088233
        },
        "viewport": {
          "northeast": {
            "lat": -33.86401937010727,
            "lng": 151.2103577298927
          },
          "southwest": {
            "lat": -33.86671902989272,
            "lng": 151.2076580701073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Bentley Restaurant + Bar",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 3024,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/110444118100375330898\">A Google User</a>"
          ],
          "photo_reference": "Aap_uEC2sk8YPyjk7yBwj6pWLHMjQea6HkLgzw2VTgxaU9GAR4Z7cKZ-XDixUWpcmtpyKPJzYoVlSv92kxGTOgkAGZEyDdXGJWT5RgLZRi_HOGVtWBrwYqD5IusdvQ4fBZj2j3yDOyM5Rw-fZpl-MiiSjhubuvR0Ra_x5PbDjVvYb5lgN_Yp",
          "width": 3024
        }
      ],
      "place_id": "ChIJybJExkGuEmsRmpbxj1gH_-U",
      "plus_code": {
        "compound_code": "46M5+WG Sydney, New South Wales, Australia",
        "global_code": "4RRH46M5+WG"
      },
      "price_level": 4,
      "rating": 4.3,
      "reference": "ChIJybJExkGuEmsRmpbxj1gH_-U",
      "types": [
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      "user_ratings_total": 606
    },
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "56 Pirrama Rd, Pyrmont NSW 2009, Australia",
      "geometry": {
        "location": {
          "lat": -33.8668159,
          "lng": 151.1973855
        },
        "viewport": {
          "northeast": {
            "lat": -33.86555562010727,
            "lng": 151.1990430798927
          },
          "southwest": {
            "lat": -33.86825527989272,
            "lng": 151.1963434201073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "LuMi Dining",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 3456,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/111354624612472023397\">Qing-Ling Tran</a>"
          ],
          "photo_reference": "Aap_uEBWfjS-8EN9i6bl8cflsqTawfHBVe2X7ZZ0BlJC0ri_MMEn-9k7oLhCq5gdozyhx-trWhl_FdrUdUPWerEW_MRa6eLD4cmLL1ZdF418ZtYSOnR3H1aIbmQpGNF7ltXrzaWVFI1MKYzJoat4WnyUyDUPPGx5dynj_rC4ufTTFTLqV2jb",
          "width": 4608
        }
      ],
      "place_id": "ChIJDZzo5DeuEmsRsi1wzrIp6HY",
      "plus_code": {
        "compound_code": "45MW+7X Pyrmont, New South Wales, Australia",
        "global_code": "4RRH45MW+7X"
      },
      "price_level": 4,
      "rating": 4.6,
      "reference": "ChIJDZzo5DeuEmsRsi1wzrIp6HY",
      "types": [
        "bar",
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      "user_ratings_total": 648
    },
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "39 Lime St, Sydney NSW 2000, Australia",
      "geometry": {
        "location": {
          "lat": -33.867806,
          "lng": 151.2017201
        },
        "viewport": {
          "northeast": {
            "lat": -33.86646482010728,
            "lng": 151.2031808298927
          },
          "southwest": {
            "lat": -33.86916447989272,
            "lng": 151.2004811701072
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "The Malaya",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 885,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/112797482079521405927\">The Malaya</a>"
          ],
          "photo_reference": "Aap_uEALKL4StbrRJxvVFBPP4bFq7exqB3GLs_qDheVF_MQD9mIq4XG2QeXc1WimxybYSkdl2sj1e9xXzR_ZTTaHC13faCQxY4t2BM2HMJ20sCZZoE2TKDRIwuQ4B7AxnMypKBTUXtkHTtsMJPI8nTIIKoa5b8rM9Pf3HnUacPUg0kKmlfqj",
          "width": 884
        }
      ],
      "place_id": "ChIJ4U8HhjiuEmsRyevJVTxWbFo",
      "plus_code": {
        "compound_code": "46J2+VM Sydney, New South Wales, Australia",
        "global_code": "4RRH46J2+VM"
      },
      "price_level": 3,
      "rating": 4.5,
      "reference": "ChIJ4U8HhjiuEmsRyevJVTxWbFo",
      "types": [
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      "user_ratings_total": 1344
    },
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "60 Carrington St, Sydney NSW 2000, Australia",
      "geometry": {
        "location": {
          "lat": -33.8668185,
          "lng": 151.2064637
        },
        "viewport": {
          "northeast": {
            "lat": -33.86546022010727,
            "lng": 151.2076971798927
          },
          "southwest": {
            "lat": -33.86815987989272,
            "lng": 151.2049975201073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Bopp & Tone",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 1179,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/103398240624630529212\">Md. Kurban Ali</a>"
          ],
          "photo_reference": "Aap_uEDb3R6906_imHTfBq-WvDVaUYWYletbwXZ_lk_pUmdZ6e_ldeX-kmVg470dN7kL0V7fmRlLwblKhEHpcwU9ryWE97boU0u021G9IybZSA7dzM07eUfMNbdBYAU9SJzUihkkKYHXRaGjUQah8hsQHRzoMe0fU6SUD5VJgdOiCfAg3jzA",
          "width": 1772
        }
      ],
      "place_id": "ChIJfTxskB6vEmsRXPSIwVlleUA",
      "plus_code": {
        "compound_code": "46M4+7H Sydney, New South Wales, Australia",
        "global_code": "4RRH46M4+7H"
      },
      "price_level": 1,
      "rating": 4.7,
      "reference": "ChIJfTxskB6vEmsRXPSIwVlleUA",
      "types": [
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      "user_ratings_total": 689
    },
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "17 Bligh St, Sydney NSW 2000, Australia",
      "geometry": {
        "location": {
          "lat": -33.8653056,
          "lng": 151.2103593
        },
        "viewport": {
          "northeast": {
            "lat": -33.86401087010728,
            "lng": 151.2117942798927
          },
          "southwest": {
            "lat": -33.86671052989272,
            "lng": 151.2090946201073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Balcón by Tapavino",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 2359,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/116762976445257331541\">A Google User</a>"
          ],
          "photo_reference": "Aap_uECptqTTZFSmP9ZQ6gZpwBUHd1oPYdpYimtZu0hPlQYsy2dwEirrOnIvzj-bytjVTXPps_462XYekZHVXtXcd68S4HVKcxGOODVskziJFnxqP-gR7ToqWHusnfVmzjeEip_ofrJwIRC9rIeQNfdDdY5bR3EHHg-RBifLT78Hgy_9AmDR",
          "width": 4192
        }
      ],
      "place_id": "ChIJTxj0dGquEmsR-6tLuaGJl_M",
      "plus_code": {
        "compound_code": "46M6+V4 Sydney, New South Wales, Australia",
        "global_code": "4RRH46M6+V4"
      },
      "price_level": 3,
      "rating": 4.4,
      "reference": "ChIJTxj0dGquEmsR-6tLuaGJl_M",
      "types": [
        "bar",
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      "user_ratings_total": 615
    },
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "Shop 100/412/414 George St, Sydney NSW 2000, Australia",
      "geometry": {
        "location": {
          "lat": -33.8694151,
          "lng": 151.2071166
        },
        "viewport": {
          "northeast": {
            "lat": -33.86806547010728,
            "lng": 151.2084946798927
          },
          "southwest": {
            "lat": -33.87076512989272,
            "lng": 151.2057950201073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "The Restaurant Pendolino",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 1365,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/115568244243208638832\">The Restaurant Pendolino</a>"
          ],
          "photo_reference": "Aap_uEDQIyh5y5AoYrcKQewc9VRhruEl5uP9RoCAvSNblDjgl4_noqxRu533JpHJ05JsHmFFGBstVK6VI3liXUT25hItj4XPWmgt82fAWtho-Ug0Y9L7csf2i2xdb28SK4NsyqHA4Vf-J6o2jxPDRu-UM_lPP_wrkCzHdl4owDtXSFB0Yv4T",
          "width": 2048
        }
      ],
      "place_id": "ChIJL1zhdD-uEmsRgDPXKOx1JyU",
      "plus_code": {
        "compound_code": "46J4+6R Sydney, New South Wales, Australia",
        "global_code": "4RRH46J4+6R"
      },
      "price_level": 3,
      "rating": 4.6,
      "reference": "ChIJL1zhdD-uEmsRgDPXKOx1JyU",
      "types": [
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      "user_ratings_total": 505
    },
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "4 Ash St, Sydney NSW 2000, Australia",
      "geometry": {
        "location": {
          "lat": -33.8669418,
          "lng": 151.2075261
        },
        "viewport": {
          "northeast": {
            "lat": -33.86557222010728,
            "lng": 151.2089249298927
          },
          "southwest": {
            "lat": -33.86827187989272,
            "lng": 151.2062252701072
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Mercado",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 3183,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/108000506056576855925\">Mercado</a>"
          ],
          "photo_reference": "Aap_uEA5WUv48wnMuPFig77wsLUcSSckmhgYcvkn3U0C6_VusopaQQYWMpWpi8r_mbwxDST8Y3eKHeqzSOTOy-6Xals5vXGxKM9QG8QloLN9zlk5FpfjCmRiXWFj2hGh5RTXumuBoq2WY5HmKgLXVK3Wa-59thWtv1o6bLJawqM1dad3rPIn",
          "width": 4774
        }
      ],
      "place_id": "ChIJCXaGXkCuEmsR_O_xTuWrmT8",
      "plus_code": {
        "compound_code": "46M5+62 Sydney, New South Wales, Australia",
        "global_code": "4RRH46M5+62"
      },
      "price_level": 3,
      "rating": 4.4,
      "reference": "ChIJCXaGXkCuEmsR_O_xTuWrmT8",
      "types": [
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      "user_ratings_total": 572
    },
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "1 Angel Pl, Sydney NSW 2000, Australia",
      "geometry": {
        "location": {
          "lat": -33.8670308,
          "lng": 151.208067
        },
        "viewport": {
          "northeast": {
            "lat": -33.86563237010727,
            "lng": 151.2094688798927
          },
          "southwest": {
            "lat": -33.86833202989272,
            "lng": 151.2067692201073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Ragazzi Wine and Pasta",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 1000,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/105392127649390940296\">A Google User</a>"
          ],
          "photo_reference": "Aap_uEDfY4kMWk39O1mGg8-nYtl970y3-sr7ex3F5EUu9aL-FL5MGigK4uWf45YFO1a2rF3uaUQ2VTT9W5GjpaTlljko5Brrm5h3XOkS5uPvuYba_mK_K_mx0Byz2WbXh9-7r9jlz075DJMiG7rs42aw26bwffF4aYZpBoQfxipXEMc4_92i",
          "width": 1500
        }
      ],
      "place_id": "ChIJTRnbxc6vEmsRnUOl_URYSvs",
      "plus_code": {
        "compound_code": "46M5+56 Sydney, New South Wales, Australia",
        "global_code": "4RRH46M5+56"
      },
      "rating": 4.4,
      "reference": "ChIJTRnbxc6vEmsRnUOl_URYSvs",
      "types": [
        "restaurant",
        "bar",
        "point_of_interest",
        "food",
        "establishment"
      ],
      "user_ratings_total": 433
    },
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "5 Kensington St, Chippendale NSW 2008, Australia",
      "geometry": {
        "location": {
          "lat": -33.8848073,
          "lng": 151.2015895
        },
        "viewport": {
          "northeast": {
            "lat": -33.88340327010728,
            "lng": 151.2029597798927
          },
          "southwest": {
            "lat": -33.88610292989272,
            "lng": 151.2002601201073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Automata Restaurant",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 3024,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/106155344778912457393\">IS L</a>"
          ],
          "photo_reference": "Aap_uEDo7q_kvvgqOXdvRb0Uu2Fa3V_UYYFeBq7V9xTwn4353OI9jzFxrCoJk63NUbUZPd4BFbK0dPXNjBZ_-5f9b-8Dh6IKkgW0ynExs4rsfjA5YxqkYKc2WKCAElKKrR8N7G0PfV-y4CqdYc9syC3bzC571VFna2ZUudx_ljlrHXL4jnOW",
          "width": 4032
        }
      ],
      "place_id": "ChIJhfcGASeuEmsRmj19JwYiqUo",
      "plus_code": {
        "compound_code": "4682+3J Chippendale, New South Wales, Australia",
        "global_code": "4RRH4682+3J"
      },
      "price_level": 3,
      "rating": 4.4,
      "reference": "ChIJhfcGASeuEmsRmj19JwYiqUo",
      "types": [
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      "user_ratings_total": 474
    },
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "Bennelong Point, Sydney NSW 2000, Australia",
      "geometry": {
        "location": {
          "lat": -33.8567498,
          "lng": 151.2152535
        },
        "viewport": {
          "northeast": {
            "lat": -33.85569109999999,
            "lng": 151.21607855
          },
          "southwest": {
            "lat": -33.8599259,
            "lng": 151.21277835
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Bennelong",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 3840,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/112111459665476218482\">A Google User</a>"
          ],
          "photo_reference": "Aap_uEDHg9QjKCjtzVDOOJtqOEHSp2iQ8rykuMNdHDFuviyfbJP9XfxM6x2TdxZYuu4kfSrn79o5DroGRG6NQR5pa3OVlFBVVfD88uUKBlhxnOlq4GqRbgk8W1xT0TxL7fjlKPPqa3hA0ZrweoOknLRDxv8zCKpPZu0gdlJfoKAG_VAnbUv-",
          "width": 5760
        }
      ],
      "place_id": "ChIJQcmNYGauEmsR84D5HAJJUhw",
      "plus_code": {
        "compound_code": "46V8+84 Sydney, New South Wales, Australia",
        "global_code": "4RRH46V8+84"
      },
      "price_level": 4,
      "rating": 4.5,
      "reference": "ChIJQcmNYGauEmsR84D5HAJJUhw",
      "types": [
        "bar",
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      "user_ratings_total": 1230
    },
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "123 Clarence St, Sydney NSW 2000, Australia",
      "geometry": {
        "location": {
          "lat": -33.8671505,
          "lng": 151.2049296
        },
        "viewport": {
          "northeast": {
            "lat": -33.86582657010727,
            "lng": 151.2063577298927
          },
          "southwest": {
            "lat": -33.86852622989272,
            "lng": 151.2036580701073
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Machiavelli",
      "opening_hours": {
        "open_now": false
      },
      "photos": [
        {
          "height": 605,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/110393729963013157229\">Nikhil Kuchroo</a>"
          ],
          "photo_reference": "Aap_uEBKwIZhaQQgPdMT72V5LBm4ELL7a9SZOtIObjmvn_mYzY1fFq3lIHrzg8NRas-h4fhWdNfC8QC4qVrPUP6VpnIRheN9jdBteNRjWiFRyCSQFEDsW2JUU3h4kCTnf90Uw0KcWyXPACm9ZXq1Wp-m2Dkx4AbSYpo17chLhDCQlLBmSDjP",
          "width": 1280
        }
      ],
      "place_id": "ChIJgVcAr0CuEmsRJjJm03tgFtE",
      "plus_code": {
        "compound_code": "46M3+4X Sydney, New South Wales, Australia",
        "global_code": "4RRH46M3+4X"
      },
      "price_level": 3,
      "rating": 4.5,
      "reference": "ChIJgVcAr0CuEmsRJjJm03tgFtE",
      "types": [
        "meal_takeaway",
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      "user_ratings_total": 529
    }
  ],
  "status": "OK"
}
```


# Place Photo

The Place Photo service, part of the Places API, is a read- only API that allows you to add high quality photographic content to your application. The Place Photo service gives you access to the millions of photos stored in the Places database. When you get place information using a Place Details request, photo references will be returned for relevant photographic content. Find Place, Nearby Search, and Text Search requests also return a single photo reference per place, when relevant. Using the Photo service you can then access the referenced photos and resize the image to the optimal size for your application.

Photos returned by the Photo service are sourced from a variety of locations, including business owners and user contributed photos. In most cases, these photos can be used without attribution, or will have the required attribution included as a part of the image. However, if the returned photo element includes a value in the html_attributions field, you will have to include the additional attribution in your application wherever you display the image.

```ts
async placePhoto(
  photoReference: string,
  maxheight?: number,
  maxwidth?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-query-parameter.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `photoReference` | `string` | Query, Required | A string identifier that uniquely identifies a photo. Photo references are returned from either a Place Search or Place Details request. |
| `maxheight` | `number \| undefined` | Query, Optional | Specifies the maximum desired height, in pixels, of the image. If the image is smaller than the values specified, the original image will be returned. If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions, restricted to its original aspect ratio. Both the `maxheight` and `maxwidth` properties accept an integer between `1` and `1600`. |
| `maxwidth` | `number \| undefined` | Query, Optional | Specifies the maximum desired width, in pixels, of the image. If the image is smaller than the values specified, the original image will be returned. If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions, restricted to its original aspect ratio. Both the `maxheight` and `maxwidth` properties accept an integer between `1` and `1600`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: 200 OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `unknown`.

## Example Usage

```ts
const photoReference = 'photo_reference2';

try {
  const response = await placesApi.placePhoto(photoReference);

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


# Query Autocomplete

The Query Autocomplete service can be used to provide a query prediction for text-based geographic searches, by returning suggested queries as you type.

The Query Autocomplete service allows you to add on-the-fly geographic query predictions to your application. Instead of searching for a specific location, a user can type in a categorical search, such as "pizza near New York" and the service responds with a list of suggested queries matching the string. As the Query Autocomplete service can match on both full words and substrings, applications can send queries as the user types to provide on-the-fly predictions.

```ts
async queryAutocomplete(
  input: string,
  radius: number,
  offset?: number,
  location?: string,
  language?: Language1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PlacesQueryAutocompleteResponse>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-query-parameter.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `input` | `string` | Query, Required | The text string on which to search. The Place Autocomplete service will return candidate matches based on this string and order results based on their perceived relevance. |
| `radius` | `number` | Query, Required | Defines the distance (in meters) within which to return place results. You may bias results to a specified circle by passing a `location` and a `radius` parameter. Doing so instructs the Places service to _prefer_ showing results within that circle; results outside of the defined area may still be displayed.<br><br>The radius will automatically be clamped to a maximum value depending on the type of search and other parameters.<br><br>* Autocomplete: 50,000 meters<br>* Nearby Search:<br>  * with `keyword` or `name`: 50,000 meters<br>  * without `keyword` or `name`<br>    * Up to 50,000 meters, adjusted dynamically based on area density, independent of `rankby` parameter.<br>    * When using `rankby=distance`, the radius parameter will not be accepted, and will result in an `INVALID_REQUEST`.<br>* Query Autocomplete: 50,000 meters<br>* Text Search: 50,000 meters |
| `offset` | `number \| undefined` | Query, Optional | The position, in the input term, of the last character that the service uses to match predictions. For example, if the input is `Google` and the offset is 3, the service will match on `Goo`. The string determined by the offset is matched against the first word in the input term only. For example, if the input term is `Google abc` and the offset is 3, the service will attempt to match against `Goo abc`. If no offset is supplied, the service will use the whole term. The offset should generally be set to the position of the text caret. |
| `location` | `string \| undefined` | Query, Optional | The point around which to retrieve place information. This must be specified as `latitude,longitude`.<br><br><div class="note">The <code>location</code> parameter may be overriden if the <code>query</code> contains an explicit location such as <code>Market in Barcelona</code>. Using quotes around the query may also influence the weight given to the <code>location</code> and <code>radius</code>.</div><br> |
| `language` | [`Language1 \| undefined`](../../doc/models/language-1.md) | Query, Optional | The language in which to return results.<br><br>* See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.<br>* If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.<br>* The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.<br>* If a name is not available in the preferred language, the API uses the closest match.<br>* The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: 200 OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PlacesQueryAutocompleteResponse`](../../doc/models/places-query-autocomplete-response.md).

## Example Usage

```ts
const input = 'input8';

const radius = 1000;

const offset = 3;

const location = '40,-110';

try {
  const response = await placesApi.queryAutocomplete(
    input,
    radius,
    offset,
    location
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
  "predictions": [
    {
      "description": "pizza near Paris, France",
      "matched_substrings": [
        {
          "length": 5,
          "offset": 0
        },
        {
          "length": 3,
          "offset": 11
        }
      ],
      "structured_formatting": {
        "main_text": "pizza",
        "main_text_matched_substrings": [
          {
            "length": 5,
            "offset": 0
          }
        ],
        "secondary_text": "near Paris, France",
        "secondary_text_matched_substrings": [
          {
            "length": 3,
            "offset": 5
          }
        ]
      },
      "terms": [
        {
          "offset": 0,
          "value": "pizza"
        },
        {
          "offset": 6,
          "value": "near"
        },
        {
          "offset": 11,
          "value": "Paris"
        },
        {
          "offset": 18,
          "value": "France"
        }
      ]
    },
    {
      "description": "pizza near Pari Chowk, NRI City, Omega II, Noida, Uttar Pradesh, India",
      "matched_substrings": [
        {
          "length": 5,
          "offset": 0
        },
        {
          "length": 3,
          "offset": 11
        }
      ],
      "structured_formatting": {
        "main_text": "pizza",
        "main_text_matched_substrings": [
          {
            "length": 5,
            "offset": 0
          }
        ],
        "secondary_text": "near Pari Chowk, NRI City, Omega II, Noida, Uttar Pradesh, India",
        "secondary_text_matched_substrings": [
          {
            "length": 3,
            "offset": 5
          }
        ]
      },
      "terms": [
        {
          "offset": 0,
          "value": "pizza"
        },
        {
          "offset": 6,
          "value": "near"
        },
        {
          "offset": 11,
          "value": "Pari Chowk"
        },
        {
          "offset": 23,
          "value": "NRI City"
        },
        {
          "offset": 33,
          "value": "Omega II"
        },
        {
          "offset": 43,
          "value": "Noida"
        },
        {
          "offset": 50,
          "value": "Uttar Pradesh"
        },
        {
          "offset": 65,
          "value": "India"
        }
      ]
    },
    {
      "description": "pizza near Disneyland Park, Disneyland Drive, Anaheim, CA, USA",
      "matched_substrings": [
        {
          "length": 5,
          "offset": 0
        },
        {
          "length": 3,
          "offset": 22
        }
      ],
      "structured_formatting": {
        "main_text": "pizza",
        "main_text_matched_substrings": [
          {
            "length": 5,
            "offset": 0
          }
        ],
        "secondary_text": "near Disneyland Park, Disneyland Drive, Anaheim, CA, USA",
        "secondary_text_matched_substrings": [
          {
            "length": 3,
            "offset": 16
          }
        ]
      },
      "terms": [
        {
          "offset": 0,
          "value": "pizza"
        },
        {
          "offset": 6,
          "value": "near"
        },
        {
          "offset": 11,
          "value": "Disneyland Park"
        },
        {
          "offset": 28,
          "value": "Disneyland Drive"
        },
        {
          "offset": 46,
          "value": "Anaheim"
        },
        {
          "offset": 55,
          "value": "CA"
        },
        {
          "offset": 59,
          "value": "USA"
        }
      ]
    },
    {
      "description": "pizza near Cathédrale Notre-Dame de Paris, Parvis Notre-Dame - place Jean-Paul-II, Paris, France",
      "matched_substrings": [
        {
          "length": 5,
          "offset": 0
        },
        {
          "length": 3,
          "offset": 36
        }
      ],
      "structured_formatting": {
        "main_text": "pizza",
        "main_text_matched_substrings": [
          {
            "length": 5,
            "offset": 0
          }
        ],
        "secondary_text": "near Cathédrale Notre-Dame de Paris, Parvis Notre-Dame - place Jean-Paul-II, Paris, France",
        "secondary_text_matched_substrings": [
          {
            "length": 3,
            "offset": 30
          }
        ]
      },
      "terms": [
        {
          "offset": 0,
          "value": "pizza"
        },
        {
          "offset": 6,
          "value": "near"
        },
        {
          "offset": 11,
          "value": "Cathédrale Notre-Dame de Paris"
        },
        {
          "offset": 43,
          "value": "Parvis Notre-Dame - place Jean-Paul-II"
        },
        {
          "offset": 83,
          "value": "Paris"
        },
        {
          "offset": 90,
          "value": "France"
        }
      ]
    },
    {
      "description": "pizza near Paris Beauvais Airport, Route de l'Aéroport, Tillé, France",
      "matched_substrings": [
        {
          "length": 5,
          "offset": 0
        },
        {
          "length": 3,
          "offset": 11
        }
      ],
      "structured_formatting": {
        "main_text": "pizza",
        "main_text_matched_substrings": [
          {
            "length": 5,
            "offset": 0
          }
        ],
        "secondary_text": "near Paris Beauvais Airport, Route de l'Aéroport, Tillé, France",
        "secondary_text_matched_substrings": [
          {
            "length": 3,
            "offset": 5
          }
        ]
      },
      "terms": [
        {
          "offset": 0,
          "value": "pizza"
        },
        {
          "offset": 6,
          "value": "near"
        },
        {
          "offset": 11,
          "value": "Paris Beauvais Airport"
        },
        {
          "offset": 35,
          "value": "Route de l'Aéroport"
        },
        {
          "offset": 56,
          "value": "Tillé"
        },
        {
          "offset": 63,
          "value": "France"
        }
      ]
    }
  ],
  "status": "OK"
}
```


# Autocomplete

The Place Autocomplete service is a web service that returns place predictions in response to an HTTP request. The request specifies a textual search string and optional geographic bounds. The service can be used to provide autocomplete functionality for text-based geographic searches, by returning places such as businesses, addresses and points of interest as a user types.

<div class="note">Note: You can use Place Autocomplete even without a map. If you do show a map, it must be a Google map. When you display predictions from the Place Autocomplete service without a map, you must include the ['Powered by Google'](https://developers.google.com/maps/documentation/places/web-service/policies#logo_requirementshttps://developers.google.com/maps/documentation/places/web-service/policies#logo_requirements) logo.</div>
The Place Autocomplete service can match on full words and substrings, resolving place names, addresses, and plus codes. Applications can therefore send queries as the user types, to provide on-the-fly place predictions.

The returned predictions are designed to be presented to the user to aid them in selecting the desired place. You can send a [Place Details](https://developers.google.com/maps/documentation/places/web-service/details#PlaceDetailsRequests) request for more information about any of the places which are returned.

```ts
async autocomplete(
  input: string,
  radius: number,
  sessiontoken?: string,
  components?: string,
  strictbounds?: boolean,
  offset?: number,
  origin?: string,
  location?: string,
  locationbias?: string,
  locationrestriction?: string,
  types?: string,
  language?: Language1,
  region?: Region1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PlacesAutocompleteResponse>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-query-parameter.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `input` | `string` | Query, Required | The text string on which to search. The Place Autocomplete service will return candidate matches based on this string and order results based on their perceived relevance. |
| `radius` | `number` | Query, Required | Defines the distance (in meters) within which to return place results. You may bias results to a specified circle by passing a `location` and a `radius` parameter. Doing so instructs the Places service to _prefer_ showing results within that circle; results outside of the defined area may still be displayed.<br><br>The radius will automatically be clamped to a maximum value depending on the type of search and other parameters.<br><br>* Autocomplete: 50,000 meters<br>* Nearby Search:<br>  * with `keyword` or `name`: 50,000 meters<br>  * without `keyword` or `name`<br>    * Up to 50,000 meters, adjusted dynamically based on area density, independent of `rankby` parameter.<br>    * When using `rankby=distance`, the radius parameter will not be accepted, and will result in an `INVALID_REQUEST`.<br>* Query Autocomplete: 50,000 meters<br>* Text Search: 50,000 meters |
| `sessiontoken` | `string \| undefined` | Query, Optional | A random string which identifies an autocomplete [session](https://developers.google.com/maps/documentation/places/web-service/details#session_tokens) for billing purposes.<br><br>The session begins when the user starts typing a query, and concludes when they select a place and a call to Place Details is made. Each session can have multiple queries, followed by one place selection. The API key(s) used for each request within a session must belong to the same Google Cloud Console project. Once a session has concluded, the token is no longer valid; your app must generate a fresh token for each session. If the `sessiontoken` parameter is omitted, or if you reuse a session token, the session is charged as if no session token was provided (each request is billed separately).<br><br>We recommend the following guidelines:<br><br>- Use session tokens for all autocomplete sessions.<br>- Generate a fresh token for each session. Using a version 4 UUID is recommended.<br>- Ensure that the API key(s) used for all Place Autocomplete and Place Details requests within a session belong to the same Cloud Console project.<br>- Be sure to pass a unique session token for each new session. Using the same token for more than one session will result in each request being billed individually. |
| `components` | `string \| undefined` | Query, Optional | A grouping of places to which you would like to restrict your results. Currently, you can use components to filter by up to 5 countries. Countries must be passed as a two character, ISO 3166-1 Alpha-2 compatible country code. For example: `components=country:fr` would restrict your results to places within France. Multiple countries must be passed as multiple `country:XX` filters, with the pipe character `\|` as a separator. For example: `components=country:us\|country:pr\|country:vi\|country:gu\|country:mp` would restrict your results to places within the United States and its unincorporated organized territories.<br><br><div class="note"><strong>Note:</strong> If you receive unexpected results with a country code, verify that you are using a code which includes the countries, dependent territories, and special areas of geographical interest you intend.  You can find code information at <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes" target="blank" class="external">Wikipedia: List of ISO 3166 country codes</a> or the <a href="https://www.iso.org/obp/ui/#search" target="blank" class="external">ISO Online Browsing Platform</a>.</div><br> |
| `strictbounds` | `boolean \| undefined` | Query, Optional | Returns only those places that are strictly within the region defined by `location` and `radius`. This is a restriction, rather than a bias, meaning that results outside this region will not be returned even if they match the user input. |
| `offset` | `number \| undefined` | Query, Optional | The position, in the input term, of the last character that the service uses to match predictions. For example, if the input is `Google` and the offset is 3, the service will match on `Goo`. The string determined by the offset is matched against the first word in the input term only. For example, if the input term is `Google abc` and the offset is 3, the service will attempt to match against `Goo abc`. If no offset is supplied, the service will use the whole term. The offset should generally be set to the position of the text caret. |
| `origin` | `string \| undefined` | Query, Optional | The origin point from which to calculate straight-line distance to the destination (returned as `distance_meters`). If this value is omitted, straight-line distance will not be returned. Must be specified as `latitude,longitude`. |
| `location` | `string \| undefined` | Query, Optional | The point around which to retrieve place information. This must be specified as `latitude,longitude`. The `radius` parameter must also be provided when specifying a location. If `radius` is not provided, the `location` parameter is ignored.<br><br><div class="note">When using the Text Search API, the `location` parameter may be overriden if the `query` contains an explicit location such as `Market in Barcelona`.</div><br> |
| `locationbias` | `string \| undefined` | Query, Optional | Prefer results in a specified area, by specifying either a radius plus lat/lng, or two lat/lng pairs representing the points of a rectangle. If this parameter is not specified, the API uses IP address biasing by default.<br><br>- IP bias: Instructs the API to use IP address biasing. Pass the string `ipbias` (this option has no additional parameters).<br>- Circular: A string specifying radius in meters, plus lat/lng in decimal degrees. Use the following format: `circle:radiuslat,lng`.<br>- Rectangular: A string specifying two lat/lng pairs in decimal degrees, representing the south/west and north/east points of a rectangle. Use the following format:`rectangle:south,west\|north,east`. Note that east/west values are wrapped to the range -180, 180, and north/south values are clamped to the range -90, 90. |
| `locationrestriction` | `string \| undefined` | Query, Optional | Restrict results to a specified area, by specifying either a radius plus lat/lng, or two lat/lng pairs representing the points of a rectangle.<br><br>- Circular: A string specifying radius in meters, plus lat/lng in decimal degrees. Use the following format: `circle:radiuslat,lng`.<br>- Rectangular: A string specifying two lat/lng pairs in decimal degrees, representing the south/west and north/east points of a rectangle. Use the following format:`rectangle:south,west\|north,east`. Note that east/west values are wrapped to the range -180, 180, and north/south values are clamped to the range -90, 90. |
| `types` | `string \| undefined` | Query, Optional | You can restrict results from a Place Autocomplete request to be of a certain type by passing the `types` parameter. This parameter specifies a type or a type collection, as listed in [Place Types](https://developers.google.com/maps/documentation/places/web-service/supported_types). If nothing is specified, all types are returned.<br><br>For the value of the `types` parameter you can specify either:<br><br>* Up to five values from [Table 1](https://developers.google.com/maps/documentation/places/web-service/supported_types#table1) or [Table 2](https://developers.google.com/maps/documentation/places/web-service/supported_types#table2). For multiple values, separate each value with a `\|` (vertical bar). For example:<br>  <br>  `types=book_store\|cafe`<br><br>* Any supported filter in [Table 3](https://developers.google.com/maps/documentation/places/web-service/supported_types#table3). You can safely mix the `geocode` and `establishment` types. You cannot mix type collections (`address`, `(cities)` or `(regions)`) with any other type, or an error occurs.<br><br>The request will be rejected with an `INVALID_REQUEST` error if:<br><br>* More than five types are specified.<br>* Any unrecognized types are present.<br>* Any types from in [Table 1](https://developers.google.com/maps/documentation/places/web-service/supported_types#table1) or [Table 2](https://developers.google.com/maps/documentation/places/web-service/supported_types#table2) are mixed with any of the filters in [Table 3](https://developers.google.com/maps/documentation/places/web-service/supported_types#table3). |
| `language` | [`Language1 \| undefined`](../../doc/models/language-1.md) | Query, Optional | The language in which to return results.<br><br>* See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.<br>* If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.<br>* The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.<br>* If a name is not available in the preferred language, the API uses the closest match.<br>* The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian. |
| `region` | [`Region1 \| undefined`](../../doc/models/region-1.md) | Query, Optional | The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland"). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: 200 OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PlacesAutocompleteResponse`](../../doc/models/places-autocomplete-response.md).

## Example Usage

```ts
const input = 'input8';

const radius = 1000;

const components = 'country:us|country:pr';

const offset = 3;

const origin = '40,-110';

const location = '40,-110';

const locationbias = 'ipbias';

const locationrestriction = 'circle:1000@37.781157,-122.398720';

try {
  const response = await placesApi.autocomplete(
    input,
    radius,
    undefined,
    components,
    undefined,
    offset,
    origin,
    location,
    locationbias,
    locationrestriction
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
  "predictions": [
    {
      "description": "Paris, France",
      "matched_substrings": [
        {
          "length": 5,
          "offset": 0
        }
      ],
      "place_id": "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
      "reference": "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
      "structured_formatting": {
        "main_text": "Paris",
        "main_text_matched_substrings": [
          {
            "length": 5,
            "offset": 0
          }
        ],
        "secondary_text": "France"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Paris"
        },
        {
          "offset": 7,
          "value": "France"
        }
      ],
      "types": [
        "locality",
        "political",
        "geocode"
      ]
    },
    {
      "description": "Paris, TX, USA",
      "matched_substrings": [
        {
          "length": 5,
          "offset": 0
        }
      ],
      "place_id": "ChIJmysnFgZYSoYRSfPTL2YJuck",
      "reference": "ChIJmysnFgZYSoYRSfPTL2YJuck",
      "structured_formatting": {
        "main_text": "Paris",
        "main_text_matched_substrings": [
          {
            "length": 5,
            "offset": 0
          }
        ],
        "secondary_text": "TX, USA"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Paris"
        },
        {
          "offset": 7,
          "value": "TX"
        },
        {
          "offset": 11,
          "value": "USA"
        }
      ],
      "types": [
        "locality",
        "political",
        "geocode"
      ]
    },
    {
      "description": "Paris, TN, USA",
      "matched_substrings": [
        {
          "length": 5,
          "offset": 0
        }
      ],
      "place_id": "ChIJ4zHP-Sije4gRBDEsVxunOWg",
      "reference": "ChIJ4zHP-Sije4gRBDEsVxunOWg",
      "structured_formatting": {
        "main_text": "Paris",
        "main_text_matched_substrings": [
          {
            "length": 5,
            "offset": 0
          }
        ],
        "secondary_text": "TN, USA"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Paris"
        },
        {
          "offset": 7,
          "value": "TN"
        },
        {
          "offset": 11,
          "value": "USA"
        }
      ],
      "types": [
        "locality",
        "political",
        "geocode"
      ]
    },
    {
      "description": "Paris, Brant, ON, Canada",
      "matched_substrings": [
        {
          "length": 5,
          "offset": 0
        }
      ],
      "place_id": "ChIJsamfQbVtLIgR-X18G75Hyi0",
      "reference": "ChIJsamfQbVtLIgR-X18G75Hyi0",
      "structured_formatting": {
        "main_text": "Paris",
        "main_text_matched_substrings": [
          {
            "length": 5,
            "offset": 0
          }
        ],
        "secondary_text": "Brant, ON, Canada"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Paris"
        },
        {
          "offset": 7,
          "value": "Brant"
        },
        {
          "offset": 14,
          "value": "ON"
        },
        {
          "offset": 18,
          "value": "Canada"
        }
      ],
      "types": [
        "neighborhood",
        "political",
        "geocode"
      ]
    },
    {
      "description": "Paris, KY, USA",
      "matched_substrings": [
        {
          "length": 5,
          "offset": 0
        }
      ],
      "place_id": "ChIJsU7_xMfKQ4gReI89RJn0-RQ",
      "reference": "ChIJsU7_xMfKQ4gReI89RJn0-RQ",
      "structured_formatting": {
        "main_text": "Paris",
        "main_text_matched_substrings": [
          {
            "length": 5,
            "offset": 0
          }
        ],
        "secondary_text": "KY, USA"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Paris"
        },
        {
          "offset": 7,
          "value": "KY"
        },
        {
          "offset": 11,
          "value": "USA"
        }
      ],
      "types": [
        "locality",
        "political",
        "geocode"
      ]
    }
  ],
  "status": "OK"
}
```

