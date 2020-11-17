function capitalize(str) {
  const upperCaseLetter = str.toUpperCase().charAt(0);
  const slicedString = str.slice(1);
  return upperCaseLetter + slicedString;
}

export default capitalize;
