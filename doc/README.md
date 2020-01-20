
# is-tradingview-format

# is-tradingview-format
[![Build status][]](https://travis-ci.org/strong-roots-capital/is-tradingview-format)
[![NPM Package][]](https://npmjs.org/package/@strong-roots-capital/is-tradingview-format)
[![Code Coverage][]](https://codecov.io/gh/strong-roots-capital/is-tradingview-format)
[![Dependencies][]](https://david-dm.org/strong-roots-capital/is-tradingview-format/status.svg)

[Build Status]: https://travis-ci.org/strong-roots-capital/is-tradingview-format.svg?branch=master
[NPM Package]: https://img.shields.io/npm/v/@strong-roots-capital/is-tradingview-format.svg
[Code Coverage]: https://codecov.io/gh/strong-roots-capital/is-tradingview-format/branch/master/graph/badge.svg
[Dependencies]: https://david-dm.org/strong-roots-capital/is-tradingview-format

> Test to determine if session is denoted in valid Trading View format

`Trading View format` of timeframes is hereby defined as follows:

- Minutes are expressible by an integer from 1 to 1440
- Hours are expressible by an integer from 1 to 24, followed by a
  capital `H`
- Days are expressible by an integer from 1 to 365, followed by a
  capital `D`
- Weeks are expressible by an integer from 1 to 52, followed by a
  capital `W`
- Months expressible by an integer from 1 to 12, followed by a
  capital `M`
- Hours, Days, Weeks, Months may all have an implicit quantifier of
  `1`, e.g. `H` is equivalent to `1H`

Any other string is not a timeframe in `Trading View format`.

## Install

``` shell
npm install @strong-roots-capital/is-tradingview-format
```

## Use

### Binary validation

``` typescript
import isTradingviewFormat from '@strong-roots-capital/is-tradingview-format'

isTradingviewFormat('H')
//=> true

isTradingviewFormat('1H')
//=> true

isTradingviewFormat('25H')
//=> false
```

### Specific validation

Functions are also provided for testing if a session is a timeframe
expressed in minutes, in hours, in days, in weeks, or in months

``` typescript
import isTradingviewFormat, {
    isTradingviewFormatMonths,
    isTradingviewFormatWeeks,
    isTradingviewFormatDays,
    isTradingviewFormatHours,
    isTradingviewFormatMinutes
} from '@strong-roots-capital/is-tradingview-format'

isTradingviewFormatHours('H')
//=> true

isTradingviewFormatHours('10')
//=> false

isTradingviewFormatHours('1D')
//=> false
```

### Input validation with `ow`

A convenience function is provided for validating input with
[ow](https://github.com/sindresorhus/ow)

``` typescript
import ow from 'ow'
import { inTradingviewFormat } from '@strong-roots-capital/is-tradingview-format'

ow(session, ow.string.is(inTradingviewFormat))
```

If `session` is not in valid Trading View format, this line will throw
an error with a message like the following

```
ArgumentError: (string) Expected session `not-a-real-timeframe` to be in Trading View format
```

## Index

### Functions

* [checkTradingviewFormatDays](README.md#const-checktradingviewformatdays)
* [checkTradingviewFormatHours](README.md#const-checktradingviewformathours)
* [checkTradingviewFormatMinutes](README.md#const-checktradingviewformatminutes)
* [checkTradingviewFormatMonths](README.md#const-checktradingviewformatmonths)
* [checkTradingviewFormatWeeks](README.md#const-checktradingviewformatweeks)
* [inTradingviewFormat](README.md#const-intradingviewformat)
* [isInTradingviewFormat](README.md#const-isintradingviewformat)
* [isNotInTradingviewFormat](README.md#const-isnotintradingviewformat)
* [isTradingviewFormat](README.md#istradingviewformat)
* [isTradingviewFormatDays](README.md#istradingviewformatdays)
* [isTradingviewFormatHours](README.md#istradingviewformathours)
* [isTradingviewFormatMinutes](README.md#istradingviewformatminutes)
* [isTradingviewFormatMonths](README.md#istradingviewformatmonths)
* [isTradingviewFormatWeeks](README.md#istradingviewformatweeks)

## Functions

### `Const` checkTradingviewFormatDays

▸ **checkTradingviewFormatDays**(`t`: any, `session`: string, `valid`: boolean): *void*

*Defined in [test/test-is-tradingview-format-days.ts:9](https://github.com/strong-roots-capital/is-tradingview-format/blob/5043069/test/test-is-tradingview-format-days.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | any |
`session` | string |
`valid` | boolean |

**Returns:** *void*

___

### `Const` checkTradingviewFormatHours

▸ **checkTradingviewFormatHours**(`t`: any, `session`: string, `valid`: boolean): *void*

*Defined in [test/test-is-tradingview-format-hours.ts:9](https://github.com/strong-roots-capital/is-tradingview-format/blob/5043069/test/test-is-tradingview-format-hours.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | any |
`session` | string |
`valid` | boolean |

**Returns:** *void*

___

### `Const` checkTradingviewFormatMinutes

▸ **checkTradingviewFormatMinutes**(`t`: any, `session`: string, `valid`: boolean): *void*

*Defined in [test/test-is-tradingview-format-minutes.ts:9](https://github.com/strong-roots-capital/is-tradingview-format/blob/5043069/test/test-is-tradingview-format-minutes.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | any |
`session` | string |
`valid` | boolean |

**Returns:** *void*

___

### `Const` checkTradingviewFormatMonths

▸ **checkTradingviewFormatMonths**(`t`: any, `session`: string, `valid`: boolean): *void*

*Defined in [test/test-is-tradingview-format-months.ts:9](https://github.com/strong-roots-capital/is-tradingview-format/blob/5043069/test/test-is-tradingview-format-months.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | any |
`session` | string |
`valid` | boolean |

**Returns:** *void*

___

### `Const` checkTradingviewFormatWeeks

▸ **checkTradingviewFormatWeeks**(`t`: any, `session`: string, `valid`: boolean): *void*

*Defined in [test/test-is-tradingview-format-weeks.ts:9](https://github.com/strong-roots-capital/is-tradingview-format/blob/5043069/test/test-is-tradingview-format-weeks.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | any |
`session` | string |
`valid` | boolean |

**Returns:** *void*

___

### `Const` inTradingviewFormat

▸ **inTradingviewFormat**(`session`: string): *boolean | string*

*Defined in [src/is-tradingview-format.ts:162](https://github.com/strong-roots-capital/is-tradingview-format/blob/5043069/src/is-tradingview-format.ts#L162)*

Function for validating timeframes with `ow`.

This function can be used to validate input with `ow`

```ts
ow(session, ow.string.is(inTradingviewFormat))
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`session` | string | Timeframe under test |

**Returns:** *boolean | string*

True if timeframe is in valid Trading View format, else a
string to be used as an error message by `ow`

___

### `Const` isInTradingviewFormat

▸ **isInTradingviewFormat**(`t`: any, `timeframe`: string): *any*

*Defined in [test/test-in-tradingview-format.ts:11](https://github.com/strong-roots-capital/is-tradingview-format/blob/5043069/test/test-in-tradingview-format.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | any |
`timeframe` | string |

**Returns:** *any*

___

### `Const` isNotInTradingviewFormat

▸ **isNotInTradingviewFormat**(`t`: any, `timeframe`: string): *void*

*Defined in [test/test-in-tradingview-format.ts:14](https://github.com/strong-roots-capital/is-tradingview-format/blob/5043069/test/test-in-tradingview-format.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | any |
`timeframe` | string |

**Returns:** *void*

___

###  isTradingviewFormat

▸ **isTradingviewFormat**(`session`: string): *boolean*

*Defined in [src/is-tradingview-format.ts:14](https://github.com/strong-roots-capital/is-tradingview-format/blob/5043069/src/is-tradingview-format.ts#L14)*

Return true if `session` is a timeframe expressed in valid Trading
View format.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`session` | string | Timeframe under test |

**Returns:** *boolean*

True if `session` is expressed in valid Trading View format.

___

###  isTradingviewFormatDays

▸ **isTradingviewFormatDays**(`session`: string): *boolean*

*Defined in [src/is-tradingview-format.ts:86](https://github.com/strong-roots-capital/is-tradingview-format/blob/5043069/src/is-tradingview-format.ts#L86)*

Return true if `session` is a daily timeframe expressed in valid
Trading View format.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`session` | string | Timeframe under test |

**Returns:** *boolean*

True if `session` is a daily timeframe expressed in valid
Trading View format.

___

###  isTradingviewFormatHours

▸ **isTradingviewFormatHours**(`session`: string): *boolean*

*Defined in [src/is-tradingview-format.ts:109](https://github.com/strong-roots-capital/is-tradingview-format/blob/5043069/src/is-tradingview-format.ts#L109)*

Return true if `session` is an hourly timeframe expressed in valid
Trading View format.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`session` | string | Timeframe under test |

**Returns:** *boolean*

True if `session` is an hourly timeframe expressed in valid
Trading View format.

___

###  isTradingviewFormatMinutes

▸ **isTradingviewFormatMinutes**(`session`: string): *boolean*

*Defined in [src/is-tradingview-format.ts:132](https://github.com/strong-roots-capital/is-tradingview-format/blob/5043069/src/is-tradingview-format.ts#L132)*

Return true if `session` is a minutes-long timeframe expressed in
valid Trading View format.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`session` | string | Timeframe under test |

**Returns:** *boolean*

True if `session` is a minutes-long timeframe expressed in
valid Trading View format.

___

###  isTradingviewFormatMonths

▸ **isTradingviewFormatMonths**(`session`: string): *boolean*

*Defined in [src/is-tradingview-format.ts:40](https://github.com/strong-roots-capital/is-tradingview-format/blob/5043069/src/is-tradingview-format.ts#L40)*

Return true if `session` is a monthly timeframe expressed in valid
Trading View format.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`session` | string | Timeframe under test |

**Returns:** *boolean*

True if `session` is a monthly timeframe expressed in valid
Trading View format.

___

###  isTradingviewFormatWeeks

▸ **isTradingviewFormatWeeks**(`session`: string): *boolean*

*Defined in [src/is-tradingview-format.ts:63](https://github.com/strong-roots-capital/is-tradingview-format/blob/5043069/src/is-tradingview-format.ts#L63)*

Return true if `session` is a weekly timeframe expressed in valid
Trading View format.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`session` | string | Timeframe under test |

**Returns:** *boolean*

True if `session` is a weekly timeframe expressed in valid
Trading View format.
