import { testProp, fc } from 'ava-fast-check'
import { expect } from 'chai'
import listTradingviewFormats from '@strong-roots-capital/list-tradingview-formats'


/**
 * Library under test
 */

import isTradingviewFormat from '../src/is-tradingview-format'


testProp(
    'should consider all valid trading-view formats as valid',
    [
        fc.constantFrom(...listTradingviewFormats())
    ],
    (timeframe) => {

        const result = isTradingviewFormat(timeframe)
        expect(result).to.be.true
    }, {
        numRuns: 100
    }
)


function isInvalidTradingviewFormat(value: string): boolean {
    return !listTradingviewFormats().includes(value)
}

testProp(
    'should consider random strings as invalid',
    [
        fc.string().filter(isInvalidTradingviewFormat)
    ],
    (invalidTimeframe) => {

        const result = isTradingviewFormat(invalidTimeframe)
        expect(result).to.be.false
    },
    {
        numRuns: 100
    }
)
