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

    const tests: ((s: string) => boolean)[] = [
        isTradingviewFormatMonths,
        isTradingviewFormatWeeks,
        isTradingviewFormatDays,
        isTradingviewFormatHours,
        isTradingviewFormatMinutes
    ]

    for (const isValid of tests) {
        if (isValid(session))
            return true
    }

    return false
}

/**
 * Return true if `session` is a monthly timeframe expressed in valid
 * Trading View format.
 *
 * @param session - Timeframe under test
 * @returns True if `session` is a monthly timeframe expressed in valid
 * Trading View format.
 */
export function isTradingviewFormatMonths(session: string): boolean {

    const tests: [RegExp, (s: string) => boolean][] = [
        [/^[1-9][0-9]*M$/, (s: string) => 1 <= parseInt(s) && parseInt(s) <= 12],
        [/^M$/, () => true]
    ]

    for (const [regex, isValid] of tests) {
        if (regex.test(session))
            return isValid(session)
    }

    return false
}

/**
 * Return true if `session` is a weekly timeframe expressed in valid
 * Trading View format.
 *
 * @param session - Timeframe under test
 * @returns True if `session` is a weekly timeframe expressed in valid
 * Trading View format.
 */
export function isTradingviewFormatWeeks(session: string): boolean {

    const tests: [RegExp, (s: string) => boolean][] = [
        [/^[1-9][0-9]*W$/, (s: string) => 1 <= parseInt(s) && parseInt(s) <= 52],
        [/^W$/, () => true]
    ]

    for (const [regex, isValid] of tests) {
        if (regex.test(session))
            return isValid(session)
    }

    return false
}

/**
 * Return true if `session` is a daily timeframe expressed in valid
 * Trading View format.
 *
 * @param session - Timeframe under test
 * @returns True if `session` is a daily timeframe expressed in valid
 * Trading View format.
 */
export function isTradingviewFormatDays(session: string): boolean {

    const tests: [RegExp, (s: string) => boolean][] = [
        [/^[1-9][0-9]*D$/, (s: string) => 1 <= parseInt(s) && parseInt(s) <= 365],
        [/^D$/, () => true]
    ]

    for (const [regex, isValid] of tests) {
        if (regex.test(session))
            return isValid(session)
    }

    return false
}

/**
 * Return true if `session` is an hourly timeframe expressed in valid
 * Trading View format.
 *
 * @param session - Timeframe under test
 * @returns True if `session` is an hourly timeframe expressed in valid
 * Trading View format.
 */
export function isTradingviewFormatHours(session: string): boolean {

    const tests: [RegExp, (s: string) => boolean][] = [
        [/^[1-9][0-9]*H$/, (s: string) => 1 <= parseInt(s) && parseInt(s) <= 24],
        [/^H$/, () => true]
    ]

    for (const [regex, isValid] of tests) {
        if (regex.test(session))
            return isValid(session)
    }

    return false
}

/**
 * Return true if `session` is a minutes-long timeframe expressed in
 * valid Trading View format.
 *
 * @param session - Timeframe under test
 * @returns True if `session` is a minutes-long timeframe expressed in
 * valid Trading View format.
 */
export function isTradingviewFormatMinutes(session: string): boolean {

    const tests: [RegExp, (s: string) => boolean][] = [
        [/^[1-9][0-9]*$/, (s: string) => 1 <= parseInt(s) && parseInt(s) <= 1440]
    ]

    for (const [regex, isValid] of tests) {
        if (regex.test(session))
            return isValid(session)
    }

    return false
}
