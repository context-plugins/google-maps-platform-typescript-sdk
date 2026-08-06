
# Place Photo

A photo of a Place. The photo can be accesed via the [Place Photo](https://developers.google.com/places/web-service/photos) API using an url in the following pattern:

```
https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=photo_reference&key=YOUR_API_KEY
```

See [Place Photos](https://developers.google.com/places/web-service/photos) for more information.

*This model accepts additional fields of type unknown.*

## Structure

`PlacePhoto`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `height` | `number` | Required | The height of the photo. |
| `width` | `number` | Required | The width of the photo. |
| `htmlAttributions` | `string[]` | Required | The HTML attributions for the photo. |
| `photoReference` | `string` | Required | A string used to identify the photo when you perform a Photo request. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlacePhoto } from 'googlemapsplatform';

const placePhoto: PlacePhoto = {
  height: 249.02,
  width: 70.9,
  htmlAttributions: [
    'html_attributions3',
    'html_attributions4'
  ],
  photoReference: 'Aap_uEDY1GahdnFHaMArH3g6W4bELCIn9yaZ0XGqh1-G2lX3OwzTExM6g-_0U8qedk5o3R1SmtMK-NMt34dDMcCNnc4DWREX0vQEH9DjvfF70ZPHo3IFbT-TU_oCNCCB3kxe36EsdXeoKEtRH74NueUIeslebZuVeteDpKvpwVqxRpZFVSjS',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

