
# Custom Query Parameter



Documentation for accessing and setting credentials for ApiKeyAuth.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| key | `string` | - | `key` |



**Note:** Auth credentials can be set using `customQueryAuthenticationCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
import { Client } from 'google-maps-platformlib';

const client = new Client({
  customQueryAuthenticationCredentials: {
    'key': 'key'
  },
});
```


