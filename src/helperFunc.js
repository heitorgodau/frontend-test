const replaceAndFloat = (string) => {
  return parseFloat(string.replace(/,/, '.')).toFixed(2).toString().replace(/\./, ',');
};

export default replaceAndFloat;
