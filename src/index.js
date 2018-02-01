function $asyncbind(self, catcher) {
  const resolver = this
  switch (catcher) {
    case true:
    case 0:
      return new $asyncbind.Promise(self)
    case undefined:
      return function boundThen() {
        return resolver.apply(self, arguments)
      }
    default:
      return function() {
        try {
          return resolver.apply(self, arguments)
        } catch (ex) {
          return catcher(ex)
        }
      }
  }
}

function trampoline(t, x, s, e, u) {
  return function b(q) {
    while (q) {
      if (q.then) {
        q = q.then(b, e)
        return u ? undefined : q
      }
      try {
        if (q.pop) {
          if (q.length) return q.pop() ? x.call(t) : q
          q = s
        } else q = q.call(t)
      } catch (r) {
        return e(r)
      }
    }
  }
}

$asyncbind.Promise = Promise
$asyncbind.trampoline = trampoline

if (!Function.prototype.$asyncbind) {
  Object.defineProperty(Function.prototype, "$asyncbind", {
    value: $asyncbind,
    enumerable: false,
    configurable: true,
    writable: true
  })
}
