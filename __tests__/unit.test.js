// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// isPhoneNumber tests
it('check isPhoneNumber for true', async () => {
    let hi = functions.isPhoneNumber('(123) 456-7890');
    expect(hi).toBe(true);
});

it('check isPhoneNumber for true', async () => {
    let hi = functions.isPhoneNumber('(123) 324-7890');
    expect(hi).toBe(true);
});

it('check isPhoneNumber for false', async () => {
    let hi = functions.isPhoneNumber('(123 56-7890');
    expect(hi).toBe(false);
});

it('check isPhoneNumber for false', async () => {
    let hi = functions.isPhoneNumber('123');
    expect(hi).toBe(false);
});


// isEmail tests
it('check isEmail for true', async () => {
    let hi = functions.isEmail('jimmycho@gmail.com');
    expect(hi).toBe(true);
});

it('check isEmail for true', async () => {
    let hi = functions.isEmail('jicho@gmail.com');
    expect(hi).toBe(true);
});

it('check isEmail for false', async () => {
    let hi = functions.isEmail('jimmy');
    expect(hi).toBe(false);
});

it('check isEmail for false', async () => {
    let hi = functions.isEmail('(123) 456-7890');
    expect(hi).toBe(false);
});


// isStrongPassword tests
it('check isStrongPassword for true', async () => {
    let hi = functions.isStrongPassword('abcsdd');
    expect(hi).toBe(true);
});

it('check isStrongPassword for true', async () => {
    let hi = functions.isStrongPassword('a123_fjdf3');
    expect(hi).toBe(true);
});

it('check isStrongPassword for false', async () => {
    let hi = functions.isStrongPassword('12345');
    expect(hi).toBe(false);
});

it('check isStrongPassword for false', async () => {
    let hi = functions.isStrongPassword('dfk(093=_');
    expect(hi).toBe(false);
});



// isDate tests
it('check isDate for true', async () => {
    let hi = functions.isDate('12/25/2022');
    expect(hi).toBe(true);
});

it('check isDate for true', async () => {
    let hi = functions.isDate('11/09/2022');
    expect(hi).toBe(true);
});

it('check isDate for false', async () => {
    let hi = functions.isDate('10.12.1999');
    expect(hi).toBe(false);
});

it('check isDate for false', async () => {
    let hi = functions.isDate('1/3/12');
    expect(hi).toBe(false);
});


// isHexColor tests
it('check isHexColor for true', async () => {
    let hi = functions.isHexColor('#ff0000');
    expect(hi).toBe(true);
});

it('check isHexColor for true', async () => {
    let hi = functions.isHexColor('#63979e');
    expect(hi).toBe(true);
});

it('check isHexColor for false', async () => {
    let hi = functions.isHexColor('98752');
    expect(hi).toBe(false);
});

it('check isHexColor for false', async () => {
    let hi = functions.isHexColor('blue');
    expect(hi).toBe(false);
});