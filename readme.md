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
