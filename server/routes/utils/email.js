import strings from './strings';

const getLocalPart = (value) => {
  if (!strings.isValid(value)) { return undefined; }
  const parts = value.split('@');
  return (parts.length === 2 && strings.isValid(parts[0]))
    ? parts[0] : undefined;
};

const getDomainPart = (value) => {
  if (!strings.isValid(value)) { return undefined; }
  const parts = value.split('@');
  return (parts.length === 2 && strings.isValid(parts[1]))
    ? parts[1] : undefined;
};
const getDomain = getDomainPart;

const isValid = (value) => (getLocalPart(value) && getDomainPart(value));

export {
  getLocalPart,
  getDomainPart,
  getDomain
};

export default {
  getLocalPart,
  getDomainPart,
  getDomain,
  isValid
};
