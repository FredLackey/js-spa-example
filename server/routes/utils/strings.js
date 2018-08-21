const DEFAULT_DELIMS = '_. ';

const getDelims = (value, delims = DEFAULT_DELIMS) => {
  return delims.split('').filter((char) => (value.indexOf(char) >= 0));
};
const getDelim = (value, delims = DEFAULT_DELIMS) => {
  const result = getDelims(value, delims);
  return (result.length === 1) ? result[0] : undefined;
};
const hasDelim = (value, delims = DEFAULT_DELIMS) => {
  return getDelims(value, delims).length > 0;
};
const isValid = (value, isEmptyOkay = false) => {
  if (typeof value !== 'string') { return false; }
  return (isEmptyOkay || value.trim().length > 0);
};

const toTitleCase = (value, delim = ' ') => {
  return value.split(delim).filter(isValid).map((word) => {
    return word.length === 1 
      ? word.toUpperCase() 
      : word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  }).join(delim);
};


export {
  getDelims,
  getDelim,
  hasDelim,
  toTitleCase
};

export default {
  getDelims,
  getDelim,
  hasDelim,
  isValid,
  toTitleCase
};