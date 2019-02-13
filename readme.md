# is-tradingview-format [![Build status](https://travis-ci.org/strong-roots-capital/is-tradingview-format.svg?branch=master)](https://travis-ci.org/strong-roots-capital/is-tradingview-format) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/is-tradingview-format.svg)](https://npmjs.org/package/@strong-roots-capital/is-tradingview-format) [![codecov](https://codecov.io/gh/strong-roots-capital/is-tradingview-format/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/is-tradingview-format)

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

``` typescript
import isTradingviewFormat from '@strong-roots-capital/is-tradingview-format'

isTradingviewFormat('H')
//=> true

isTradingviewFormat('1H')
//=> true

isTradingviewFormat('25H')
//=> false
```

Functions are also provided for testing if a session is a timeframe
expressed in minutes, in hours, in days, in weeks, or in months

``` typescript
import isTradingviewFormat, {
    isTradingviewFormatMonths
    isTradingviewFormatWeeks
    isTradingviewFormatDays
    isTradingviewFormatHours
    isTradingviewFormatMinutes
} from '../src/is-tradingview-format'

isTradingviewFormatHours('H')
//=> true

isTradingviewFormatHours('10')
//=> false

isTradingviewFormat('1D')
//=> false
```
