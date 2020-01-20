import test from 'ava'
import ow from 'ow'
import listTradingviewFormats from '@strong-roots-capital/list-tradingview-formats'

/**
 * Library under test
 */

import { inTradingviewFormat } from '../src/is-tradingview-format'

const isInTradingviewFormat = (t: any, timeframe: string) => t.true(inTradingviewFormat(timeframe))
isInTradingviewFormat.title = (_ = '', timeframe: string) => `should recognize ${timeframe} as valid Trading View format`

const isNotInTradingviewFormat = (t: any, timeframe: string) => {
    const error = t.throws(
        () => ow(timeframe, ow.string.is(inTradingviewFormat))
    )
    t.is(error.name, 'ArgumentError')
}
isNotInTradingviewFormat.title = (_ = '', timeframe: string) => `should not recognize ${timeframe} as valid Trading View format`

for (const format of listTradingviewFormats()) {
    test(isInTradingviewFormat, format)
}

for (const format of ['!!', '0', '1Y', ',']) {
    test(isNotInTradingviewFormat, format)
}
