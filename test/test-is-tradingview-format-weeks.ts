import test, { Macro } from 'ava'

/**
 * Library under test
 */

import isTradingviewFormat, { isTradingviewFormatWeeks } from '../src/is-tradingview-format'

const checkTradingviewFormatWeeks: Macro<[string, boolean]> = (t: any, session: string, valid: boolean) => {
    t.is(isTradingviewFormatWeeks(session), valid)
    t.is(isTradingviewFormat(session), valid)
}
checkTradingviewFormatWeeks.title = (_ = '', session: string, valid: boolean) => `Is ${valid ? 'valid' : 'invalid'} Trading View format: ${session}`

test(checkTradingviewFormatWeeks,'W', true)
test(checkTradingviewFormatWeeks,'w', false)
test(checkTradingviewFormatWeeks,'0W', false)
for (let i = 1; i < 52; ++i) {
    test(checkTradingviewFormatWeeks, `${i}W`, true)
}
test(checkTradingviewFormatWeeks,'53W', false)
