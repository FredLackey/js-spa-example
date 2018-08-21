import { toTitleCase, getDelim } from './strings';
import { getLocalPart, getDomainPart } from './email';

const DELIMS = '_.';

const toEmailPossibilities = (value) => {
  return toUsernamePossibilities(getLocalPart(value)).map((local) => {
    return local + '@' + getDomainPart(value).toLowerCase();
  });
};

const toUsernamePossibilities = (value) => {
  const delim = getDelim(value, DELIMS);
  if (!delim) { return [].concat(toTitleCase(value)); }
  return DELIMS.split('').map((char) => {
    return toTitleCase(value.split(delim).join(char), char);
  });
};

const formatUsername = (value) => {
  return toTitleCase(value, getDelim(value, DELIMS));
};
const formatEmail = (value) => {
  return formatUsername(getLocalPart(value)) + '@' + 
    getDomainPart(value).toLowerCase();
};

export {
  toEmailPossibilities,
  toUsernamePossibilities,
  formatUsername,
  formatEmail
};

export default {
  toEmailPossibilities,
  toUsernamePossibilities,
  formatUsername,
  formatEmail
};
