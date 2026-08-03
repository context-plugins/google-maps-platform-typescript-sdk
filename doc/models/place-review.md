
# Place Review

A review of the place submitted by a user.

*This model accepts additional fields of type unknown.*

## Structure

`PlaceReview`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorName` | `string` | Required | The name of the user who submitted the review. Anonymous reviews are attributed to "A Google user". |
| `authorUrl` | `string \| undefined` | Optional | The URL to the user's Google Maps Local Guides profile, if available. |
| `profilePhotoUrl` | `string \| undefined` | Optional | The URL to the user's profile photo, if available. |
| `language` | `string \| undefined` | Optional | An IETF language code indicating the language of the returned review.<br>This field contains the main language tag only, and not the secondary tag indicating country or region. For example, all the English reviews are tagged as 'en', and not 'en-AU' or 'en-UK' and so on.<br>This field is empty if there is only a rating with no review text. |
| `originalLanguage` | `string \| undefined` | Optional | An IETF language code indicating the original language of the review. If the review has been translated, then `original_language` != `language`.<br>This field contains the main language tag only, and not the secondary tag indicating country or region. For example, all the English reviews are tagged as 'en', and not 'en-AU' or 'en-UK' and so on.<br>This field is empty if there is only a rating with no review text. |
| `rating` | `number` | Required | The user's overall rating for this place. This is a whole number, ranging from 1 to 5. |
| `relativeTimeDescription` | `string` | Required | The time that the review was submitted in text, relative to the current time. |
| `text` | `string \| undefined` | Optional | The user's review. When reviewing a location with Google Places, text reviews are considered optional. Therefore, this field may be empty. Note that this field may include simple HTML markup. For example, the entity reference `&amp;` may represent an ampersand character. |
| `time` | `number` | Required | The time that the review was submitted, measured in the number of seconds since since midnight, January 1, 1970 UTC. |
| `translated` | `boolean \| undefined` | Optional | A boolean value indicating if the review was translated from the original language it was written in.<br>If a review has been translated, corresponding to a value of true, Google recommends that you indicate this to your users. For example, you can add the following string, “Translated by Google”, to the review. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlaceReview } from 'google-maps-platformlib';

const placeReview: PlaceReview = {
  authorName: 'A Google User',
  rating: 252.04,
  relativeTimeDescription: 'relative_time_description0',
  time: 61.86,
  authorUrl: 'author_url2',
  profilePhotoUrl: 'profile_photo_url0',
  language: 'language8',
  originalLanguage: 'original_language4',
  text: 'text6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

