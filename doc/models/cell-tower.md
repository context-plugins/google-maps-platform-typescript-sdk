
# Cell Tower

Attributes used to describe a cell tower. The following optional fields are not currently used, but may be included if values are available: `age`, `signalStrength`, `timingAdvance`.

*This model accepts additional fields of type unknown.*

## Structure

`CellTower`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cellId` | `number` | Required | Unique identifier of the cell. On GSM, this is the Cell ID (CID); CDMA networks use the Base Station ID (BID). WCDMA networks use the UTRAN/GERAN Cell Identity (UC-Id), which is a 32-bit value concatenating the Radio Network Controller (RNC) and Cell ID. Specifying only the 16-bit Cell ID value in WCDMA networks may return inaccurate results. |
| `locationAreaCode` | `number` | Required | The Location Area Code (LAC) for GSM and WCDMA networks. The Network ID (NID) for CDMA networks. |
| `mobileCountryCode` | `number` | Required | The cell tower's Mobile Country Code (MCC). |
| `mobileNetworkCode` | `number` | Required | The cell tower's Mobile Network Code. This is the MNC for GSM and WCDMA; CDMA uses the System ID (SID). |
| `age` | `number \| undefined` | Optional | The number of milliseconds since this cell was primary. If age is 0, the cellId represents a current measurement. |
| `signalStrength` | `number \| undefined` | Optional | Radio signal strength measured in dBm. |
| `timingAdvance` | `number \| undefined` | Optional | The timing advance value. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CellTower } from 'google-maps-platformlib';

const cellTower: CellTower = {
  cellId: 32,
  locationAreaCode: 126,
  mobileCountryCode: 100,
  mobileNetworkCode: 106,
  age: 242,
  signalStrength: 216.82,
  timingAdvance: 235.8,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

