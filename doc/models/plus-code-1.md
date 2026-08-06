
# Plus Code 1

*This model accepts additional fields of type unknown.*

## Structure

`PlusCode1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `compoundCode` | `string \| undefined` | Optional | The `compound_code` is a 6 character or longer local code with an explicit location (`CWC8+R9, Mountain View, CA, USA`). Some APIs may return an empty string if the `compound_code` is not available. |
| `globalCode` | `string` | Required | The `global_code` is a 4 character area code and 6 character or longer local code (`849VCWC8+R9`). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlusCode1 } from 'googlemapsplatform';

const plusCode1: PlusCode1 = {
  globalCode: 'global_code6',
  compoundCode: 'compound_code2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

