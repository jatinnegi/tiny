module.exports = function tiny(string) {
  if (typeof string !== "string") throw new Error("Tiny wants a string!");
  return string.replace(/\s/g, "");
};
