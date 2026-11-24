# Deflect 451 Tools

The Deflect 451 Tools package simplifies the process of integrating 451 Tools into Deflect. Follow the steps below to get started:

## Installation

1. Clone this repository:

```shell
git clone https://github.com/ZamanehMedia/deflect-451-tools.git
```

2. Install dependencies:

```shell
npm install
```

## Usage

### Build
Generate the required files by running the following command:

```shell
npm run build
```

This command will generate the following files:

- `dist/451-tools.js`
- `dist/451-tools-registration.js`
- `dist/451-tools-configuration.json`

Make sure to serve all files in the website's root. Import `451-tools-registration.js` in every page, either inline it or use a script tag.

### Replaceable strings
The following placeholders are replaced automatically during the build, or must be replaced manually/dynamically after build time:

| Placeholder | Replaced in | Replaced with | When |
| --- | --- | --- | --- |
| `__HASH__` | `dist/451-tools-registration.js` | The MD5 hash of `dist/451-tools-configuration.json`, used as a cache busting query string when fetching the configuration. | During the build. |
| `__MIRRORS__` | `dist/451-tools-configuration.json` (`mirroring.urls`) | A JSON array of mirror URL strings, like `"https://example.com/", "https://example.two.com/"`. | After the build. |
| `__TIMEOUT__` | `dist/451-tools-configuration.json` (`mirroring.timeout`) | A number of milliseconds for the mirroring timeout. | After the build. |
| `__CONTENT_BUNDLES_CONFIG__` | `dist/451-tools-configuration.json` (`contentBundles`) | A JSON object with the content bundles configuration. | After the build. |
