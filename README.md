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

## Example

Examples generated with grunt-svg-sprite can be seen here: http://muffinresear.ch/payment-icons/

## Contributing icons

If you want to remix these icons, have at it. If you have additional icons you want to be included
then please follow the examples given and add your icon for each of the existing styles
and make a pull request.


## CLI

Note: This CLI is only relevant for development or maintenance purposes.

* `yarn build` - creates minified SVG.
* `yarn publish` - builds the sprite and publishes it to github pages.

##  License

Icon marks are copyright their respective owners.

The rest of the code here is MPL2.0.
