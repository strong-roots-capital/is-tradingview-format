import test, { Macro } from 'ava'

/**
 * Library under test
 */

import isTradingviewFormat, { isTradingviewFormatMonths } from '../src/is-tradingview-format'

const checkTradingviewFormatMonths: Macro<[string, boolean]> = (t: any, session: string, valid: boolean) => {
    t.is(isTradingviewFormatMonths(session), valid)
    t.is(isTradingviewFormat(session), valid)
}
checkTradingviewFormatMonths.title = (_ = '', session: string, valid: boolean) => `Is ${valid ? 'valid' : 'invalid'} Trading View format: ${session}`

test(checkTradingviewFormatMonths,'M', true)
test(checkTradingviewFormatMonths,'m', false)
test(checkTradingviewFormatMonths,'0M', false)
for (let i = 1; i < 13; ++i) {
    test(checkTradingviewFormatMonths, `${i}M`, true)
}
test(checkTradingviewFormatMonths,'13M', false)
