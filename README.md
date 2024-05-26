# TOTP Generator
This is a simple TOTP (Time-based One-Time Password) generator that generates TOTP codes for multiple accounts.

## Usage
1. Create a settings.json file with your account tokens:

```json
{
  "keys": [
    {
      "account": "Email", 
      "token": "JBSWY3DPEHPK3PXP"
    },
    {
      "account": "GitHub",
      "token": "JBSWY3DPEHPK3PXP" 
    }
  ]
}
```
1. Run node index.js

It will generate and print the current TOTP codes for each account every 30 seconds.

## Dependencies

- totp-generator - Used to generate the TOTP codes
- fs - Used to read the settings file

## License
MIT