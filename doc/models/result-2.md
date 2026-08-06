
# Result 2

*This model accepts additional fields of type unknown.*

## Structure

`Result2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressComponents` | [`AddressComponent[] \| undefined`](../../doc/models/address-component.md) | Optional | An array containing the separate components applicable to this address. |
| `adrAddress` | `string \| undefined` | Optional | A representation of the place's address in the [adr microformat](http://microformats.org/wiki/adr). |
| `businessStatus` | [`BusinessStatus \| undefined`](../../doc/models/business-status.md) | Optional | - |
| `curbsidePickup` | `boolean \| undefined` | Optional | Specifies if the business supports curbside pickup. |
| `currentOpeningHours` | [`CurrentOpeningHours \| undefined`](../../doc/models/current-opening-hours.md) | Optional | - |
| `delivery` | `boolean \| undefined` | Optional | Specifies if the business supports delivery. |
| `dineIn` | `boolean \| undefined` | Optional | Specifies if the business supports indoor or outdoor seating options. |
| `editorialSummary` | [`EditorialSummary \| undefined`](../../doc/models/editorial-summary.md) | Optional | - |
| `formattedAddress` | `string \| undefined` | Optional | A string containing the human-readable address of this place.<br><br>Often this address is equivalent to the postal address. Note that some countries, such as the United Kingdom, do not allow distribution of true postal addresses due to licensing restrictions.<br><br>The formatted address is logically composed of one or more address components. For example, the address "111 8th Avenue, New York, NY" consists of the following components: "111" (the street number), "8th Avenue" (the route), "New York" (the city) and "NY" (the US state).<br><br>Do not parse the formatted address programmatically. Instead you should use the individual address components, which the API response includes in addition to the formatted address field. |
| `formattedPhoneNumber` | `string \| undefined` | Optional | Contains the place's phone number in its [local format](http://en.wikipedia.org/wiki/Local_conventions_for_writing_telephone_numbers). |
| `geometry` | [`Geometry2 \| undefined`](../../doc/models/geometry-2.md) | Optional | - |
| `icon` | `string \| undefined` | Optional | Contains the URL of a suggested icon which may be displayed to the user when indicating this result on a map. |
| `iconBackgroundColor` | `string \| undefined` | Optional | Contains the default HEX color code for the place's category. |
| `iconMaskBaseUri` | `string \| undefined` | Optional | Contains the URL of a recommended icon, minus the `.svg` or `.png` file type extension. |
| `internationalPhoneNumber` | `string \| undefined` | Optional | Contains the place's phone number in international format. International format includes the country code, and is prefixed with the plus, +, sign. For example, the international_phone_number for Google's Sydney, Australia office is `+61 2 9374 4000`. |
| `name` | `string \| undefined` | Optional | Contains the human-readable name for the returned result. For `establishment` results, this is usually the canonicalized business name. |
| `openingHours` | [`OpeningHours \| undefined`](../../doc/models/opening-hours.md) | Optional | - |
| `permanentlyClosed` | `boolean \| undefined` | Optional | Use `business_status` to get the operational status of businesses. |
| `photos` | [`PlacePhoto[] \| undefined`](../../doc/models/place-photo.md) | Optional | An array of photo objects, each containing a reference to an image. A request may return up to ten photos. More information about place photos and how you can use the images in your application can be found in the [Place Photos](https://developers.google.com/maps/documentation/places/web-service/photos) documentation. |
| `placeId` | `string \| undefined` | Optional | A textual identifier that uniquely identifies a place. To retrieve information about the place, pass this identifier in the `place_id` field of a Places API request. For more information about place IDs, see the [place ID overview](https://developers.google.com/maps/documentation/places/web-service/place-id). |
| `plusCode` | [`PlusCode1 \| undefined`](../../doc/models/plus-code-1.md) | Optional | - |
| `priceLevel` | `number \| undefined` | Optional | The price level of the place, on a scale of 0 to 4. The exact amount indicated by a specific value will vary from region to region. Price levels are interpreted as follows:<br><br>- 0 Free<br>- 1 Inexpensive<br>- 2 Moderate<br>- 3 Expensive<br>- 4 Very Expensive |
| `rating` | `number \| undefined` | Optional | Contains the place's rating, from 1.0 to 5.0, based on aggregated user reviews. |
| `reference` | `string \| undefined` | Optional | - |
| `reservable` | `boolean \| undefined` | Optional | Specifies if the place supports reservations. |
| `reviews` | [`PlaceReview[] \| undefined`](../../doc/models/place-review.md) | Optional | A JSON array of up to five reviews. By default, the reviews are sorted in order of relevance. Use the `reviews_sort` request parameter to control sorting.<br><br>- For `most_relevant` (default), reviews are sorted by relevance; the service will bias the results to return reviews originally written in the preferred language.<br>- For `newest`, reviews are sorted in chronological order; the preferred language does not affect the sort order.<br>  Google recommends indicating to users whether results are ordered by `most_relevant` or `newest`. |
| `servesBeer` | `boolean \| undefined` | Optional | Specifies if the place serves beer. |
| `servesBreakfast` | `boolean \| undefined` | Optional | Specifies if the place serves breakfast. |
| `servesBrunch` | `boolean \| undefined` | Optional | Specifies if the place serves brunch. |
| `servesDinner` | `boolean \| undefined` | Optional | Specifies if the place serves dinner. |
| `servesLunch` | `boolean \| undefined` | Optional | Specifies if the place serves lunch. |
| `servesVegetarianFood` | `boolean \| undefined` | Optional | Specifies if the place serves vegetarian food. |
| `servesWine` | `boolean \| undefined` | Optional | Specifies if the place serves wine. |
| `scope` | `string \| undefined` | Optional | - |
| `secondaryOpeningHours` | [`PlaceOpeningHours[] \| undefined`](../../doc/models/place-opening-hours.md) | Optional | Contains an array of entries for the next seven days including information about secondary hours of a business. Secondary hours are different from a business's main hours. For example, a restaurant can specify drive through hours or delivery hours as its secondary hours. This field populates the `type` subfield, which draws from a predefined list of opening hours types (such as `DRIVE_THROUGH`, `PICKUP`, or `TAKEOUT`) based on the types of the place. This field includes the `special_days` subfield of all hours, set for dates that have exceptional hours. |
| `takeout` | `boolean \| undefined` | Optional | Specifies if the business supports takeout. |
| `types` | `string[] \| undefined` | Optional | Contains an array of feature types describing the given result. See the list of [supported types](https://developers.google.com/maps/documentation/places/web-service/supported_types#table2). |
| `url` | `string \| undefined` | Optional | Contains the URL of the official Google page for this place. This will be the Google-owned page that contains the best available information about the place. Applications must link to or embed this page on any screen that shows detailed results about the place to the user. |
| `userRatingsTotal` | `number \| undefined` | Optional | The total number of reviews, with or without text, for this place. |
| `utcOffset` | `number \| undefined` | Optional | Contains the number of minutes this place’s current timezone is offset from UTC. For example, for places in Sydney, Australia during daylight saving time this would be 660 (+11 hours from UTC), and for places in California outside of daylight saving time this would be -480 (-8 hours from UTC). |
| `vicinity` | `string \| undefined` | Optional | For establishment (`types:["establishment", ...])` results only, the `vicinity` field contains a simplified address for the place, including the street name, street number, and locality, but not the province/state, postal code, or country.<br><br>For all other results, the `vicinity` field contains the name of the narrowest political (`types:["political", ...]`) feature that is present in the address of the result.<br><br>This content is meant to be read as-is. Do not programmatically parse the formatted address. |
| `website` | `string \| undefined` | Optional | The authoritative website for this place, such as a business' homepage. |
| `wheelchairAccessibleEntrance` | `boolean \| undefined` | Optional | Specifies if the place has an entrance that is wheelchair-accessible. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BusinessStatus, Result2 } from 'googlemapsplatform';

const result2: Result2 = {
  addressComponents: [
    {
      longName: 'long_name4',
      shortName: 'short_name0',
      types: [
        'types7',
        'types8'
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      longName: 'long_name4',
      shortName: 'short_name0',
      types: [
        'types7',
        'types8'
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  adrAddress: '<span class="street-address">48 Pirrama Rd</span>, <span class="locality">Pyrmont</span> <span class="region">NSW</span> <span class="postal-code">2009</span>, <span class="country-name">Australia</span>',
  businessStatus: BusinessStatus.Operational,
  curbsidePickup: false,
  currentOpeningHours: {
    openNow: false,
    periods: [
      {
        open: {
          day: 0.52,
          time: 'time4',
          date: 'date8',
          truncated: false,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        close: {
          day: 26.5,
          time: 'time8',
          date: 'date4',
          truncated: false,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    specialDays: [
      {
        date: 'date4',
        exceptionalHours: false,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        date: 'date4',
        exceptionalHours: false,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    type: 'type0',
    weekdayText: [
      'weekday_text5',
      'weekday_text6',
      'weekday_text7'
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  formattedAddress: '48 Pirrama Rd, Pyrmont NSW 2009, Australia',
  formattedPhoneNumber: '(02) 9374 4000',
  icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png',
  internationalPhoneNumber: '+61 2 9374 4000',
  name: 'Google Workplace 6',
  placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
  rating: 4.1,
  types: [
    'point_of_interest',
    'establishment'
  ],
  url: 'https://maps.google.com/?cid=10281119596374313554',
  userRatingsTotal: 931,
  utcOffset: 600,
  vicinity: '48 Pirrama Road, Pyrmont',
  website: 'http://google.com',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

