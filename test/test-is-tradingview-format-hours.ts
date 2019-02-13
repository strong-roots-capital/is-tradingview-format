import test, { Macro } from 'ava'

/**
 * Library under test
 */

import isTradingviewFormat, { isTradingviewFormatHours } from '../src/is-tradingview-format'

const checkTradingviewFormatHours: Macro<[string, boolean]> = (t: any, session: string, valid: boolean) => {
    t.is(isTradingviewFormatHours(session), valid)
    t.is(isTradingviewFormat(session), valid)
}
checkTradingviewFormatHours.title = (_ = '', session: string, valid: boolean) => `Is ${valid ? 'valid' : 'invalid'} Trading View format: ${session}`

test(checkTradingviewFormatHours,'H', true)
test(checkTradingviewFormatHours,'h', false)
test(checkTradingviewFormatHours,'0H', false)
for (let i = 1; i < 25; ++i) {
    test(checkTradingviewFormatHours, `${i}H`, true)
}
test(checkTradingviewFormatHours,'25H', false)
