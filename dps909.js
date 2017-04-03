// [INFO] See discussion of node.js exports here:
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/

/**
 * Given a string `email`, return `true` if the string is in the form
 * of a valid Seneca College email address, `false` othewise.
 */
exports.isValidEmail = function (email) {
  if (!(typeof email === 'string')) {
    throw new Error('Contains non string');
  }

  if (!email) { // null
    throw new Error('Contains null');
  }

  if (/\s/.test(email)) { // whitespaces
    return false;
  }

    // TODO: needs to be implemented
  if (/@myseneca.ca$/.test(email)) { // @myseneca.ca
    return true;
  }

  if (/@senecacollege.ca$/.test(email)) { // @senecacollege.ca
    return true;
  }

  if (/@senecac.on.ca$/.test(email)) { // @someone@senecac.on.ca
    return true;
  }

  return false;
};

/**
 * Given a string `name`, return a formatted Seneca email address for
 * this person. NOTE: the email doesn't need to be real/valid/active.
 */
exports.formatSenecaEmail = function (name) {
    // TODO: needs to be implemented
  if (/\s/.test(name)) { // replace whitespaces
    return name.replace(/\s/g, '').concat('@myseneca.ca');
  }
  return name.concat('@myseneca.ca');
};
