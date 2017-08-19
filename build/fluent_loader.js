module.exports = function (source) {
  const localeExp = this.options.locale || /([^\/]+)\/[^\/]+\.ftl$/;
  const result = localeExp.exec(this.resourcePath)
  const locale = result && result[1]
  if (!locale) {
    throw new Error(`couldn't find locale in: ${this.resourcePath}`)
  }
  // TODO escape ` in source?
  return `
module.exports = \`
if (typeof window === 'undefined') {
  var MessageContext = require('fluent').MessageContext;
}
const ctx = new MessageContext('${locale}');
ctx.addMessages(\\\`${source}\\\`);
function translate(id, data) {
  const msg = ctx.getMessage(id);
  return ctx.format(msg, data);
}
if (typeof window === 'undefined') {
  module.exports = translate;
}
else {
  window.translate = translate;
}
\``
}
