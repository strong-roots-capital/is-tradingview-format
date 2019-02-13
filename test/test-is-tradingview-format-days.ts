import test, { Macro } from 'ava'

/**
 * Library under test
 */

import isTradingviewFormat, { isTradingviewFormatDays } from '../src/is-tradingview-format'

const checkTradingviewFormatDays: Macro<[string, boolean]> = (t: any, session: string, valid: boolean) => {
    t.is(isTradingviewFormatDays(session), valid)
    t.is(isTradingviewFormat(session), valid)
}
checkTradingviewFormatDays.title = (_ = '', session: string, valid: boolean) => `Is ${valid ? 'valid' : 'invalid'} Trading View format: ${session}`

test(checkTradingviewFormatDays,'D', true)
test(checkTradingviewFormatDays,'d', false)
test(checkTradingviewFormatDays,'0D', false)
for (let i = 1; i < 365; ++i) {
    test(checkTradingviewFormatDays, `${i}D`, true)
}
test(checkTradingviewFormatDays,'366D', false)
