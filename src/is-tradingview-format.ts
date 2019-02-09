/**
 * is-tradingview-format
 * Test to determine if session is denoted in valid Trading View format
 */


/**
 * Return true if `session` is a timeframe expressed in valid Trading
 * View format.
 *
 * @param session - Timeframe under test
 * @returns True if `session` is expressed in valid Trading View format.
 */
export default function isTradingviewFormat(session: string): boolean {

    const tests: [RegExp, (s: string) => boolean][] = [
        [/^[1-9][0-9]*$/, (s: string) => 1 <= parseInt(s) && parseInt(s) <= 1440],
        [/^[1-9][0-9]*H$/, (s: string) => 1 <= parseInt(s) && parseInt(s) <= 24],
        [/^[1-9][0-9]*D$/, (s: string) => 1 <= parseInt(s) && parseInt(s) <= 365],
        [/^[1-9][0-9]*W$/, (s: string) => 1 <= parseInt(s) && parseInt(s) <= 52],
        [/^[1-9][0-9]*M$/, (s: string) => 1 <= parseInt(s) && parseInt(s) <= 12],
        [/^H$/, () => true],
        [/^D$/, () => true],
        [/^W$/, () => true],
        [/^M$/, () => true],
        ]

    for (const [regex, isValid] of tests) {
        if (regex.test(session))
            return isValid(session)
    }

    return false
}
