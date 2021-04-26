**Note: This package is no longer maintained**


[![npm version](https://badge.fury.io/js/payment-icons.svg)](http://badge.fury.io/js/payment-icons)
[![Build Status](https://travis-ci.org/muffinresearch/payment-icons.svg?branch=master)](https://travis-ci.org/muffinresearch/payment-icons)

# Payment-icons

Payment related svg icons for use in fonts or spritesheets.

## Usage

The raw .svg output (from a mix of sketch and inkscape) is in the svg directory. The minified svg
output is in the min dir.

The easiest way to consume these icons is to npm install from github and use your favorite toolchain
to build fonts or sprites e.g.

`yarn add payment-icons`

or

`npm install payment-icons`

### How to use in something like react?

You'll need to use the svg like you do any other image asset. Exactly how will depend on what you're using in your build process. 

If you're using webpack for example, then as long as your loader config understands `svg` you can import like you would with any other image. [Here's an example for doing that (this is from create-react-app which uses webpack) ](https://github.com/facebook/create-react-app/blob/dfbc71ce2ae07547a8544cce14a1a23fac99e071/packages/react-scripts/template/README.md#adding-images-fonts-and-files)

Doing it that way you'll need to find the path from `node_modules/payment-icons/` so if you're looking for the flat visa icon that should be something like this:

```javascript
import visa from 'payment-icons/min/flat/visa.svg';
```

## Icon Demo

Examples generated with svg-sprite can be seen here: http://muffinresear.ch/payment-icons/

## Contributing icons

If you want to remix these icons, have at it. If you have additional icons you want to be included
then please follow the examples given and add your icon for each of the existing styles
and make a pull request.


## CLI

Note: This CLI is only relevant for development or maintenance purposes.

* `yarn run build` - creates minified SVG.
* `yarn run publish` - builds the sprite and publishes it to github pages.

##  License

Icon marks are copyright their respective owners.

The rest of the code here is MPL2.0.
