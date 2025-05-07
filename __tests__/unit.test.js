// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// Testing isPhoneNumber function
test('(123) 456-7890 is a phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('abc is not a phone number', () => {
  expect(isPhoneNumber('abc')).toBe(false);
});

test('123 is not a phone number', () => {
  expect(isPhoneNumber('123')).toBe(false);
});

test('(000) 000-000', () => {
  expect(isPhoneNumber('(000) 000-0000')).toBe(true);
});

// Testing isEmail function
test('test@ is not a valid email', () => {
  expect(isEmail('test@')).toBe(false);
});

test('testing@gmail.com is a valid email', () => {
  expect(isEmail('testing@gmail.com')).toBe(true);
});

test('abc123@ucsd.edu is a valid email', () => {
  expect(isEmail('abc123@ucsd.edu')).toBe(true);
});

test('iheartyou.com is not a valid email', () => {
  expect(isEmail('iheartyou.com')).toBe(false);
});

// Testing isStrongPassword function
test('12345678 is not a strong password', () => {
  expect(isStrongPassword('12345678')).toBe(false);
});

test('000 is not a strong password', () => {
  expect(isStrongPassword('000')).toBe(false);
});

test('UCSD2025 is a strong password', () => {
  expect(isStrongPassword('UCSD2025')).toBe(true);
});

test('Spring25 is a strong password', () => {
  expect(isStrongPassword('Spring25')).toBe(true);
});

// Testing isDate function
test('0/0 is not a date', () => {
  expect(isDate('0/0')).toBe(false);
});

test('2/14/2025 is a date', () => {
  expect(isDate('2/14/2025')).toBe(true);
});

test('123/2/2020 is not a date', () => {
  expect(isDate('123/2/2020')).toBe(false);
});

test('12/31/2024 is a date', () => {
  expect(isDate('12/31/2024')).toBe(true);
});

// Testing isHexColor function
test('FFF is a hex color', () => {
  expect(isHexColor('FFF')).toBe(true);
});

test('12AB34 is a hex color', () => {
  expect(isHexColor('12AB34')).toBe(true);
});

test('1230000 is not a hex color', () => {
  expect(isHexColor('1230000')).toBe(false);
});

test('128PCD is not a hex color', () => {
  expect(isHexColor('128PCD')).toBe(false);
});
