
# Wi Fi Access Point

Attributes used to describe a WiFi access point.

*This model accepts additional fields of type unknown.*

## Structure

`WiFiAccessPoint`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `macAddress` | `string` | Required | The MAC address of the WiFi node. It's typically called a BSS, BSSID or MAC address. Separators must be `:` (colon). |
| `signalStrength` | `number \| undefined` | Optional | The current signal strength measured in dBm. |
| `signalToNoiseRatio` | `number \| undefined` | Optional | The current signal to noise ratio measured in dB. |
| `age` | `number \| undefined` | Optional | The number of milliseconds since this access point was detected. |
| `channel` | `number \| undefined` | Optional | The channel over which the client is communication with the access point. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { WiFiAccessPoint } from 'google-maps-platformlib';

const wiFiAccessPoint: WiFiAccessPoint = {
  macAddress: 'macAddress6',
  signalStrength: 54,
  signalToNoiseRatio: 180,
  age: 118,
  channel: 252,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

