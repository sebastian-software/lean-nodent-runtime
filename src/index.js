function $asyncbind(self, catcher) {
  const resolver = this
  switch (catcher) {
    case true:
    case 0:
      return new Promise(self)
    case undefined:
      return function boundThen() {
        return resolver.apply(self, arguments)
      }
    default:
      return function inner() {
        try {
          return resolver.apply(self, arguments)
        } catch (except) {
          return catcher(except)
        }
      }
  }
}

if (!Function.prototype.$asyncbind) {
  Object.defineProperty(Function.prototype, "$asyncbind", {
    value: $asyncbind,
    enumerable: false,
    configurable: true,
    writable: true
  })
}
