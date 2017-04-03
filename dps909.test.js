// First require (e.g., load) our seneca.js module
var seneca = require('./dps909');

/**
 * Tests for seneca.isValidEmail()
 */
describe('seneca.isValidEmail()', function() {

  test('returns true for simple myseneca address', function() {
    var simpleEmail = 'someone@myseneca.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

  test('returns false for a non-myseneca address', function() {
    var gmailAddress = 'someone@gmail.com';
    expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });

  test('throws when user passes something other than a String to your function', () => {
    expect(() => {
      seneca.isValidEmail(123) 
    }).toThrow();
  });

  test('throws when user passes a variable which is actually null', () => {
    expect(() => {
      seneca.isValidEmail()
    }).toThrow();
  });

  test('returns false for email address contains leading whitespace', function() {
    var simpleEmail = ' someone@myseneca.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(false);
  });

  test('returns true for simple myseneca address', function() {
    var profEmail = 'someone@senecacollege.ca';
    expect(seneca.isValidEmail(profEmail)).toBe(true);
  });

   test('returns true for simple senecac.on.ca address', function() {
    var oldEmail = 'someone@senecac.on.ca';
    expect(seneca.isValidEmail(oldEmail)).toBe(true);
  });
});

/**
 * Tests for seneca.formatSenecaEmail()
 */
describe('seneca.formatSenecaEmail()', function() {

  test('adds @myseneca.ca to the end of name', function() {
    var name = "mshaw";
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });

  test('adds @myseneca.ca to the end of integer', function() {
    var name = "123";
    expect(seneca.formatSenecaEmail(name)).toBe('123@myseneca.ca');
  });

  test('adds @myseneca.ca to white space and removes whitespace', function() {
    var name = " someone";
    expect(seneca.formatSenecaEmail(name)).toBe('someone@myseneca.ca');
  });

  test('throws when user passes a variable which is actually null', () => {
    expect(() => {
      seneca.formatSenecaEmail()
    }).toThrow();
  });
});


