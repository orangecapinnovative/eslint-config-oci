# ESLint OCI

## How to Install

1. adds `eslint` and `eslint-config-oci` into your `devDependencies`

    ```json
      "devDependencies": {
        ...
        "eslint": "^8.27.0",
        "eslint-config-oci": "https://github.com/orangecapinnovative/eslint-config-oci.git#v0.4.0",
        ...
      }
    ```

2. creates `.eslintrc.js` (if it doesn't exists) and extends this rule

    ```json
    {
      ...,
      "extends": "oci",
      ...
    }
    ```

3. installs

    ```bash
      npm install
    ```
