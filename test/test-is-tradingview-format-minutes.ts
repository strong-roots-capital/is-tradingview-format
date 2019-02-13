import test, { Macro } from 'ava'

/**
 * Library under test
 */

import isTradingviewFormat, { isTradingviewFormatMinutes } from '../src/is-tradingview-format'

const checkTradingviewFormatMinutes: Macro<[string, boolean]> = (t: any, session: string, valid: boolean) => {
    t.is(isTradingviewFormatMinutes(session), valid)
    t.is(isTradingviewFormat(session), valid)
}
checkTradingviewFormatMinutes.title = (_ = '', session: string, valid: boolean) => `Is ${valid ? 'valid' : 'invalid'} Trading View format: ${session}`

test(checkTradingviewFormatMinutes,'m', false)
test(checkTradingviewFormatMinutes,'0', false)
for (let i = 1; i < 1440; ++i) {
    test(checkTradingviewFormatMinutes, `${i}`, true)
}
test(checkTradingviewFormatMinutes,'1441', false)
