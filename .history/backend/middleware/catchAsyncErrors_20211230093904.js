//ĂĐiền thiếu vào ô ví dụ tao product thiếu name
module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
