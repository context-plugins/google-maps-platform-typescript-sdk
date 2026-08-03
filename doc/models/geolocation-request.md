
# Geolocation Request

The request body must be formatted as JSON. The following fields are supported, and all fields are optional.

*This model accepts additional fields of type unknown.*

## Structure

`GeolocationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `homeMobileCountryCode` | `number \| undefined` | Optional | The cell tower's Mobile Country Code (MCC). |
| `homeMobileNetworkCode` | `number \| undefined` | Optional | The cell tower's Mobile Network Code. This is the MNC for GSM and WCDMA; CDMA uses the System ID (SID). |
| `radioType` | `string \| undefined` | Optional | The mobile radio type. Supported values are lte, gsm, cdma, and wcdma. While this field is optional, it should be included if a value is available, for more accurate results. |
| `carrier` | `string \| undefined` | Optional | The carrier name. |
| `considerIp` | `string \| undefined` | Optional | Specifies whether to fall back to IP geolocation if wifi and cell tower signals are not available. Defaults to true. Set considerIp to false to disable fall back. |
| `cellTowers` | [`CellTower[] \| undefined`](../../doc/models/cell-tower.md) | Optional | The request body's cellTowers array contains zero or more cell tower objects. |
| `wifiAccessPoints` | [`WiFiAccessPoint[] \| undefined`](../../doc/models/wi-fi-access-point.md) | Optional | An array of two or more WiFi access point objects. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GeolocationRequest } from 'google-maps-platformlib';

const geolocationRequest: GeolocationRequest = {
  homeMobileCountryCode: 98,
  homeMobileNetworkCode: 62,
  radioType: 'radioType0',
  carrier: 'carrier0',
  considerIp: 'considerIp2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

