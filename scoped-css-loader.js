const qs = require('qs')

module.exports = function (source) {
  // @ts-ignore
  const resourceQuery = qs.parse(this.resource.split('?')[1])
  if (resourceQuery.scopeId) {

    const tmp = source.split('');
    let isClassName = false;

    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i] === '.') {
        isClassName = true;
        continue;
      }

      if (isClassName && (tmp[i] === '{' || tmp[i] === '[' || tmp[i] === ':' || tmp[i] === ' ' || tmp[i] === '.' || tmp[i] === '#')) {
        i = i - 1;
        tmp[i] = tmp[i] + '__' + resourceQuery.scopeId;
        isClassName = false;
      }
    }

    source = tmp.join('');
    console.log(source)
  }
  return source
}

