Function.prototype.bind = function (ctx) {
  const originalFunc = this

  const boundFunc = function () {
    return originalFunc.apply(ctx)
  }

  return boundFunc
};