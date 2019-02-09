import test from 'ava'

/**
 * Library under test
 */

import isTradingviewFormat from '../src/is-tradingview-format'

test('minutes are valid up to 1440', t => {
    for (let duration = 1; duration <= 1440; duration++)
        t.true(isTradingviewFormat(duration.toString()))
})

test('minutes above 1440 are invalid', t => {
    for (let duration = 1441; duration <= 2000; duration++)
        t.false(isTradingviewFormat(duration.toString()))
})

test('zero minutes is invalid', t => {
    t.false(isTradingviewFormat('0'))
})

test('negative minutes are invalid', t => {
    for (let duration = 1; duration <= 1440; duration++)
        t.false(isTradingviewFormat((-1*duration).toString()))
})

test('hours are valid from one to twenty-four', t => {
    for (let duration = 1; duration <= 24; duration++)
        t.true(isTradingviewFormat(`${duration}H`))
})

test('hours above twenty-four are invalid', t => {
    for (let duration = 25; duration <= 2000; duration++)
        t.false(isTradingviewFormat(`${duration}H`))
})

test('zero hours is invalid', t => {
    t.false(isTradingviewFormat('0H'))
})

test('negative hours are invalid', t => {
    for (let duration = 1; duration <= 1440; duration++)
        t.false(isTradingviewFormat(`${(-1*duration)}H`))
})

test('days are valid from one to three-hundred sixty-five', t => {
    for (let duration = 1; duration <= 365; duration++)
        t.true(isTradingviewFormat(`${duration}D`))
})

test('days above three-hundred sixty-five are invalid', t => {
    for (let duration = 366; duration <= 4000; duration++)
        t.false(isTradingviewFormat(`${duration}D`))
})

test('zero days is invalid', t => {
    t.false(isTradingviewFormat('0D'))
})

test('negative days is invalid', t => {
    for (let duration = 1; duration <= 1440; duration++)
        t.false(isTradingviewFormat(`${(-1*duration)}D`))
})

test('weeks are valid from one to fifty-two', t => {
    for (let duration = 1; duration <= 52; duration++)
        t.true(isTradingviewFormat(`${duration}W`))
})

test('weeks above fifty-two are invalid', t => {
    for (let duration = 53; duration <= 4000; duration++)
        t.false(isTradingviewFormat(`${duration}W`))
})

test('zero weeks is invalid', t => {
    t.false(isTradingviewFormat('0W'))
})

test('negative weeks is invalid', t => {
    for (let duration = 1; duration <= 1440; duration++)
        t.false(isTradingviewFormat(`${(-1*duration)}W`))
})

test('months are valid from one to twelve', t => {
    for (let duration = 1; duration <= 12; duration++)
        t.true(isTradingviewFormat(`${duration}M`))
})

test('months above twelve are invalid', t => {
    for (let duration = 13; duration <= 4000; duration++)
        t.false(isTradingviewFormat(`${duration}M`))
})

test('zero months is invalid', t => {
    t.false(isTradingviewFormat('0M'))
})

test('negative months is invalid', t => {
    for (let duration = 1; duration <= 1440; duration++)
        t.false(isTradingviewFormat(`${(-1*duration)}M`))
})

test('years are invalid', t => {
    for (let duration = 1; duration <= 12; duration++)
        t.false(isTradingviewFormat(`${duration}Y`))
})

test('zero years is invalid', t => {
    t.false(isTradingviewFormat('0Y'))
})

test('negative years is invalid', t => {
    for (let duration = 1; duration <= 1440; duration++)
        t.false(isTradingviewFormat(`${(-1*duration)}Y`))
})

test('H is valid', t => {
    t.true(isTradingviewFormat('H'))
})

test('D is valid', t => {
    t.true(isTradingviewFormat('D'))
})

test('W is valid', t => {
    t.true(isTradingviewFormat('W'))
})

test('M is valid', t => {
    t.true(isTradingviewFormat('M'))
})
