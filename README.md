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

Generate the required files by running the following command:

```shell
npm run build
```

A `__MIRRORS__` placeholder value is used in `dist/451-tools-configuration.json`. This placeholder can be used to dynamically replace the mirrors after build time. You must replace this placeholder with the actual mirror URLs at a later moment, using a value like this: `"https://example.com/", "https://example.two.com/"`.

This command will generate the following files:

- `dist/451-tools.js`
- `dist/451-tools-registration.js`
- `dist/451-tools-configuration.json`

Make sure to serve all files in the website's root. Import `451-tools-registration.js` in every page, either inline it or use a script tag.
