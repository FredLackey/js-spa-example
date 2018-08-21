const isValid = (value, isEmptyOkay = false) => {
  return (typeof value === 'object' && value instanceof Array && 
    (isEmptyOkay || value.length > 0));
};

const count = (value) => (isValid(value, true) ? value.length : -1);
const first = (value) => (count(value) > 0 ? value[0] : undefined);
const single = (value) => (count(value) === 1 ? value[0] : undefined);

export default {
  count,
  first,
  single,
  isValid
};
