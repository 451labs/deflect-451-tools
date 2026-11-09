var ne = (e) => {
  throw TypeError(e);
};
var oe = (e, t, r) => t.has(e) || ne("Cannot " + r);
var q = (e, t, r) => (oe(e, t, "read from private field"), r ? r.call(e) : t.get(e)), ae = (e, t, r) => t.has(e) ? ne("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), O = (e, t, r, n) => (oe(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
try {
  self["workbox:core:7.4.0"] && _();
} catch {
}
const $e = {
  "invalid-value": ({ paramName: e, validValueDescription: t, value: r }) => {
    if (!e || !t)
      throw new Error("Unexpected input to 'invalid-value' error.");
    return `The '${e}' parameter was given a value with an unexpected value. ${t} Received a value of ${JSON.stringify(r)}.`;
  },
  "not-an-array": ({ moduleName: e, className: t, funcName: r, paramName: n }) => {
    if (!e || !t || !r || !n)
      throw new Error("Unexpected input to 'not-an-array' error.");
    return `The parameter '${n}' passed into '${e}.${t}.${r}()' must be an array.`;
  },
  "incorrect-type": ({ expectedType: e, paramName: t, moduleName: r, className: n, funcName: o }) => {
    if (!e || !t || !r || !o)
      throw new Error("Unexpected input to 'incorrect-type' error.");
    const a = n ? `${n}.` : "";
    return `The parameter '${t}' passed into '${r}.${a}${o}()' must be of type ${e}.`;
  },
  "incorrect-class": ({ expectedClassName: e, paramName: t, moduleName: r, className: n, funcName: o, isReturnValueProblem: a }) => {
    if (!e || !r || !o)
      throw new Error("Unexpected input to 'incorrect-class' error.");
    const s = n ? `${n}.` : "";
    return a ? `The return value from '${r}.${s}${o}()' must be an instance of class ${e}.` : `The parameter '${t}' passed into '${r}.${s}${o}()' must be an instance of class ${e}.`;
  },
  "missing-a-method": ({ expectedMethod: e, paramName: t, moduleName: r, className: n, funcName: o }) => {
    if (!e || !t || !r || !n || !o)
      throw new Error("Unexpected input to 'missing-a-method' error.");
    return `${r}.${n}.${o}() expected the '${t}' parameter to expose a '${e}' method.`;
  },
  "add-to-cache-list-unexpected-type": ({ entry: e }) => `An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(e)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`,
  "add-to-cache-list-conflicting-entries": ({ firstEntry: e, secondEntry: t }) => {
    if (!e || !t)
      throw new Error("Unexpected input to 'add-to-cache-list-duplicate-entries' error.");
    return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${e} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`;
  },
  "plugin-error-request-will-fetch": ({ thrownErrorMessage: e }) => {
    if (!e)
      throw new Error("Unexpected input to 'plugin-error-request-will-fetch', error.");
    return `An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${e}'.`;
  },
  "invalid-cache-name": ({ cacheNameId: e, value: t }) => {
    if (!e)
      throw new Error("Expected a 'cacheNameId' for error 'invalid-cache-name'");
    return `You must provide a name containing at least one character for setCacheDetails({${e}: '...'}). Received a value of '${JSON.stringify(t)}'`;
  },
  "unregister-route-but-not-found-with-method": ({ method: e }) => {
    if (!e)
      throw new Error("Unexpected input to 'unregister-route-but-not-found-with-method' error.");
    return `The route you're trying to unregister was not  previously registered for the method type '${e}'.`;
  },
  "unregister-route-route-not-registered": () => "The route you're trying to unregister was not previously registered.",
  "queue-replay-failed": ({ name: e }) => `Replaying the background sync queue '${e}' failed.`,
  "duplicate-queue-name": ({ name: e }) => `The Queue name '${e}' is already being used. All instances of backgroundSync.Queue must be given unique names.`,
  "expired-test-without-max-age": ({ methodName: e, paramName: t }) => `The '${e}()' method can only be used when the '${t}' is used in the constructor.`,
  "unsupported-route-type": ({ moduleName: e, className: t, funcName: r, paramName: n }) => `The supplied '${n}' parameter was an unsupported type. Please check the docs for ${e}.${t}.${r} for valid input types.`,
  "not-array-of-class": ({ value: e, expectedClass: t, moduleName: r, className: n, funcName: o, paramName: a }) => `The supplied '${a}' parameter must be an array of '${t}' objects. Received '${JSON.stringify(e)},'. Please check the call to ${r}.${n}.${o}() to fix the issue.`,
  "max-entries-or-age-required": ({ moduleName: e, className: t, funcName: r }) => `You must define either config.maxEntries or config.maxAgeSecondsin ${e}.${t}.${r}`,
  "statuses-or-headers-required": ({ moduleName: e, className: t, funcName: r }) => `You must define either config.statuses or config.headersin ${e}.${t}.${r}`,
  "invalid-string": ({ moduleName: e, funcName: t, paramName: r }) => {
    if (!r || !e || !t)
      throw new Error("Unexpected input to 'invalid-string' error.");
    return `When using strings, the '${r}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${e}.${t}() for more info.`;
  },
  "channel-name-required": () => "You must provide a channelName to construct a BroadcastCacheUpdate instance.",
  "invalid-responses-are-same-args": () => "The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.",
  "expire-custom-caches-only": () => "You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.",
  "unit-must-be-bytes": ({ normalizedRangeHeader: e }) => {
    if (!e)
      throw new Error("Unexpected input to 'unit-must-be-bytes' error.");
    return `The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${e}"`;
  },
  "single-range-only": ({ normalizedRangeHeader: e }) => {
    if (!e)
      throw new Error("Unexpected input to 'single-range-only' error.");
    return `Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${e}"`;
  },
  "invalid-range-values": ({ normalizedRangeHeader: e }) => {
    if (!e)
      throw new Error("Unexpected input to 'invalid-range-values' error.");
    return `The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${e}"`;
  },
  "no-range-header": () => "No Range header was found in the Request provided.",
  "range-not-satisfiable": ({ size: e, start: t, end: r }) => `The start (${t}) and end (${r}) values in the Range are not satisfiable by the cached response, which is ${e} bytes.`,
  "attempt-to-cache-non-get-request": ({ url: e, method: t }) => `Unable to cache '${e}' because it is a '${t}' request and only 'GET' requests can be cached.`,
  "cache-put-with-no-response": ({ url: e }) => `There was an attempt to cache '${e}' but the response was not defined.`,
  "no-response": ({ url: e, error: t }) => {
    let r = `The strategy could not generate a response for '${e}'.`;
    return t && (r += ` The underlying error is ${t}.`), r;
  },
  "bad-precaching-response": ({ url: e, status: t }) => `The precaching request for '${e}' failed` + (t ? ` with an HTTP status of ${t}.` : "."),
  "non-precached-url": ({ url: e }) => `createHandlerBoundToURL('${e}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`,
  "add-to-cache-list-conflicting-integrities": ({ url: e }) => `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${e} with different integrity values. Please remove one of them.`,
  "missing-precache-entry": ({ cacheName: e, url: t }) => `Unable to find a precached response in ${e} for ${t}.`,
  "cross-origin-copy-response": ({ origin: e }) => `workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${e}.`,
  "opaque-streams-source": ({ type: e }) => {
    const t = `One of the workbox-streams sources resulted in an '${e}' response.`;
    return e === "opaqueredirect" ? `${t} Please do not use a navigation request that results in a redirect as a source.` : `${t} Please ensure your sources are CORS-enabled.`;
  }
}, Ce = (e, ...t) => {
  let r = e;
  return t.length > 0 && (r += ` :: ${JSON.stringify(t)}`), r;
}, Ne = (e, t = {}) => {
  const r = $e[e];
  if (!r)
    throw new Error(`Unable to find message for code '${e}'.`);
  return r(t);
}, Ae = process.env.NODE_ENV === "production" ? Ce : Ne;
let E = class extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(t, r) {
    const n = Ae(t, r);
    super(n), this.name = t, this.details = r;
  }
};
const Me = (e, t) => {
  if (!Array.isArray(e))
    throw new E("not-an-array", t);
}, Le = (e, t, r) => {
  if (typeof e[t] !== "function")
    throw r.expectedMethod = t, new E("missing-a-method", r);
}, _e = (e, t, r) => {
  if (typeof e !== t)
    throw r.expectedType = t, new E("incorrect-type", r);
}, De = (e, t, r) => {
  if (!(e instanceof t))
    throw r.expectedClassName = t.name, new E("incorrect-class", r);
}, Pe = (e, t, r) => {
  if (!t.includes(e))
    throw r.validValueDescription = `Valid values are ${JSON.stringify(t)}.`, new E("invalid-value", r);
}, qe = (e, t, r) => {
  const n = new E("not-array-of-class", r);
  if (!Array.isArray(e))
    throw n;
  for (const o of e)
    if (!(o instanceof t))
      throw n;
}, H = process.env.NODE_ENV === "production" ? null : {
  hasMethod: Le,
  isArray: Me,
  isInstance: De,
  isOneOf: Pe,
  isType: _e,
  isArrayOfClass: qe
};
function Oe(e) {
  e.then(() => {
  });
}
const N = process.env.NODE_ENV === "production" ? null : (() => {
  "__WB_DISABLE_DEV_LOGS" in globalThis || (self.__WB_DISABLE_DEV_LOGS = !1);
  let e = !1;
  const t = {
    debug: "#7f8c8d",
    log: "#2ecc71",
    warn: "#f39c12",
    error: "#c0392b",
    groupCollapsed: "#3498db",
    groupEnd: null
    // No colored prefix on groupEnd
  }, r = function(a, s) {
    if (self.__WB_DISABLE_DEV_LOGS)
      return;
    if (a === "groupCollapsed" && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      console[a](...s);
      return;
    }
    const i = [
      `background: ${t[a]}`,
      "border-radius: 0.5em",
      "color: white",
      "font-weight: bold",
      "padding: 2px 0.5em"
    ], c = e ? [] : ["%cworkbox", i.join(";")];
    console[a](...c, ...s), a === "groupCollapsed" && (e = !0), a === "groupEnd" && (e = !1);
  }, n = {}, o = Object.keys(t);
  for (const a of o) {
    const s = a;
    n[s] = (...i) => {
      r(s, i);
    };
  }
  return n;
})(), He = (e, t) => t.some((r) => e instanceof r);
let se, ie;
function Ue() {
  return se || (se = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Be() {
  return ie || (ie = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const pe = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap(), fe = /* @__PURE__ */ new WeakMap(), V = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap();
function Se(e) {
  const t = new Promise((r, n) => {
    const o = () => {
      e.removeEventListener("success", a), e.removeEventListener("error", s);
    }, a = () => {
      r(x(e.result)), o();
    }, s = () => {
      n(e.error), o();
    };
    e.addEventListener("success", a), e.addEventListener("error", s);
  });
  return t.then((r) => {
    r instanceof IDBCursor && pe.set(r, e);
  }).catch(() => {
  }), Q.set(t, e), t;
}
function Ie(e) {
  if (Y.has(e))
    return;
  const t = new Promise((r, n) => {
    const o = () => {
      e.removeEventListener("complete", a), e.removeEventListener("error", s), e.removeEventListener("abort", s);
    }, a = () => {
      r(), o();
    }, s = () => {
      n(e.error || new DOMException("AbortError", "AbortError")), o();
    };
    e.addEventListener("complete", a), e.addEventListener("error", s), e.addEventListener("abort", s);
  });
  Y.set(e, t);
}
let z = {
  get(e, t, r) {
    if (e instanceof IDBTransaction) {
      if (t === "done")
        return Y.get(e);
      if (t === "objectStoreNames")
        return e.objectStoreNames || fe.get(e);
      if (t === "store")
        return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0]);
    }
    return x(e[t]);
  },
  set(e, t, r) {
    return e[t] = r, !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e;
  }
};
function Fe(e) {
  z = e(z);
}
function je(e) {
  return e === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(t, ...r) {
    const n = e.call(G(this), t, ...r);
    return fe.set(n, t.sort ? t.sort() : [t]), x(n);
  } : Be().includes(e) ? function(...t) {
    return e.apply(G(this), t), x(pe.get(this));
  } : function(...t) {
    return x(e.apply(G(this), t));
  };
}
function Ve(e) {
  return typeof e == "function" ? je(e) : (e instanceof IDBTransaction && Ie(e), He(e, Ue()) ? new Proxy(e, z) : e);
}
function x(e) {
  if (e instanceof IDBRequest)
    return Se(e);
  if (V.has(e))
    return V.get(e);
  const t = Ve(e);
  return t !== e && (V.set(e, t), Q.set(t, e)), t;
}
const G = (e) => Q.get(e);
function Ge(e, t, { blocked: r, upgrade: n, blocking: o, terminated: a } = {}) {
  const s = indexedDB.open(e, t), i = x(s);
  return n && s.addEventListener("upgradeneeded", (c) => {
    n(x(s.result), c.oldVersion, c.newVersion, x(s.transaction), c);
  }), r && s.addEventListener("blocked", (c) => r(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    c.oldVersion,
    c.newVersion,
    c
  )), i.then((c) => {
    a && c.addEventListener("close", () => a()), o && c.addEventListener("versionchange", (u) => o(u.oldVersion, u.newVersion, u));
  }).catch(() => {
  }), i;
}
function Je(e, { blocked: t } = {}) {
  const r = indexedDB.deleteDatabase(e);
  return t && r.addEventListener("blocked", (n) => t(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    n.oldVersion,
    n
  )), x(r).then(() => {
  });
}
const We = ["get", "getKey", "getAll", "getAllKeys", "count"], Ye = ["put", "add", "delete", "clear"], J = /* @__PURE__ */ new Map();
function ce(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string"))
    return;
  if (J.get(t))
    return J.get(t);
  const r = t.replace(/FromIndex$/, ""), n = t !== r, o = Ye.includes(r);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(r in (n ? IDBIndex : IDBObjectStore).prototype) || !(o || We.includes(r))
  )
    return;
  const a = async function(s, ...i) {
    const c = this.transaction(s, o ? "readwrite" : "readonly");
    let u = c.store;
    return n && (u = u.index(i.shift())), (await Promise.all([
      u[r](...i),
      o && c.done
    ]))[0];
  };
  return J.set(t, a), a;
}
Fe((e) => ({
  ...e,
  get: (t, r, n) => ce(t, r) || e.get(t, r, n),
  has: (t, r) => !!ce(t, r) || e.has(t, r)
}));
try {
  self["workbox:expiration:7.4.0"] && _();
} catch {
}
const ze = "workbox-expiration", A = "cache-entries", le = (e) => {
  const t = new URL(e, location.href);
  return t.hash = "", t.href;
};
class Ke {
  /**
   *
   * @param {string} cacheName
   *
   * @private
   */
  constructor(t) {
    this._db = null, this._cacheName = t;
  }
  /**
   * Performs an upgrade of indexedDB.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDb(t) {
    const r = t.createObjectStore(A, { keyPath: "id" });
    r.createIndex("cacheName", "cacheName", { unique: !1 }), r.createIndex("timestamp", "timestamp", { unique: !1 });
  }
  /**
   * Performs an upgrade of indexedDB and deletes deprecated DBs.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDbAndDeleteOldDbs(t) {
    this._upgradeDb(t), this._cacheName && Je(this._cacheName);
  }
  /**
   * @param {string} url
   * @param {number} timestamp
   *
   * @private
   */
  async setTimestamp(t, r) {
    t = le(t);
    const n = {
      url: t,
      timestamp: r,
      cacheName: this._cacheName,
      // Creating an ID from the URL and cache name won't be necessary once
      // Edge switches to Chromium and all browsers we support work with
      // array keyPaths.
      id: this._getId(t)
    }, a = (await this.getDb()).transaction(A, "readwrite", {
      durability: "relaxed"
    });
    await a.store.put(n), await a.done;
  }
  /**
   * Returns the timestamp stored for a given URL.
   *
   * @param {string} url
   * @return {number | undefined}
   *
   * @private
   */
  async getTimestamp(t) {
    const n = await (await this.getDb()).get(A, this._getId(t));
    return n == null ? void 0 : n.timestamp;
  }
  /**
   * Iterates through all the entries in the object store (from newest to
   * oldest) and removes entries once either `maxCount` is reached or the
   * entry's timestamp is less than `minTimestamp`.
   *
   * @param {number} minTimestamp
   * @param {number} maxCount
   * @return {Array<string>}
   *
   * @private
   */
  async expireEntries(t, r) {
    const n = await this.getDb();
    let o = await n.transaction(A).store.index("timestamp").openCursor(null, "prev");
    const a = [];
    let s = 0;
    for (; o; ) {
      const c = o.value;
      c.cacheName === this._cacheName && (t && c.timestamp < t || r && s >= r ? a.push(o.value) : s++), o = await o.continue();
    }
    const i = [];
    for (const c of a)
      await n.delete(A, c.id), i.push(c.url);
    return i;
  }
  /**
   * Takes a URL and returns an ID that will be unique in the object store.
   *
   * @param {string} url
   * @return {string}
   *
   * @private
   */
  _getId(t) {
    return this._cacheName + "|" + le(t);
  }
  /**
   * Returns an open connection to the database.
   *
   * @private
   */
  async getDb() {
    return this._db || (this._db = await Ge(ze, 1, {
      upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
    })), this._db;
  }
}
class Z {
  /**
   * To construct a new CacheExpiration instance you must provide at least
   * one of the `config` properties.
   *
   * @param {string} cacheName Name of the cache to apply restrictions to.
   * @param {Object} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   */
  constructor(t, r = {}) {
    if (this._isRunning = !1, this._rerunRequested = !1, process.env.NODE_ENV !== "production") {
      if (H.isType(t, "string", {
        moduleName: "workbox-expiration",
        className: "CacheExpiration",
        funcName: "constructor",
        paramName: "cacheName"
      }), !(r.maxEntries || r.maxAgeSeconds))
        throw new E("max-entries-or-age-required", {
          moduleName: "workbox-expiration",
          className: "CacheExpiration",
          funcName: "constructor"
        });
      r.maxEntries && H.isType(r.maxEntries, "number", {
        moduleName: "workbox-expiration",
        className: "CacheExpiration",
        funcName: "constructor",
        paramName: "config.maxEntries"
      }), r.maxAgeSeconds && H.isType(r.maxAgeSeconds, "number", {
        moduleName: "workbox-expiration",
        className: "CacheExpiration",
        funcName: "constructor",
        paramName: "config.maxAgeSeconds"
      });
    }
    this._maxEntries = r.maxEntries, this._maxAgeSeconds = r.maxAgeSeconds, this._matchOptions = r.matchOptions, this._cacheName = t, this._timestampModel = new Ke(t);
  }
  /**
   * Expires entries for the given cache and given criteria.
   */
  async expireEntries() {
    if (this._isRunning) {
      this._rerunRequested = !0;
      return;
    }
    this._isRunning = !0;
    const t = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1e3 : 0, r = await this._timestampModel.expireEntries(t, this._maxEntries), n = await self.caches.open(this._cacheName);
    for (const o of r)
      await n.delete(o, this._matchOptions);
    process.env.NODE_ENV !== "production" && (r.length > 0 ? (N.groupCollapsed(`Expired ${r.length} ${r.length === 1 ? "entry" : "entries"} and removed ${r.length === 1 ? "it" : "them"} from the '${this._cacheName}' cache.`), N.log(`Expired the following ${r.length === 1 ? "URL" : "URLs"}:`), r.forEach((o) => N.log(`    ${o}`)), N.groupEnd()) : N.debug("Cache expiration ran and found no entries to remove.")), this._isRunning = !1, this._rerunRequested && (this._rerunRequested = !1, Oe(this.expireEntries()));
  }
  /**
   * Update the timestamp for the given URL. This ensures the when
   * removing entries based on maximum entries, most recently used
   * is accurate or when expiring, the timestamp is up-to-date.
   *
   * @param {string} url
   */
  async updateTimestamp(t) {
    process.env.NODE_ENV !== "production" && H.isType(t, "string", {
      moduleName: "workbox-expiration",
      className: "CacheExpiration",
      funcName: "updateTimestamp",
      paramName: "url"
    }), await this._timestampModel.setTimestamp(t, Date.now());
  }
  /**
   * Can be used to check if a URL has expired or not before it's used.
   *
   * This requires a look up from IndexedDB, so can be slow.
   *
   * Note: This method will not remove the cached entry, call
   * `expireEntries()` to remove indexedDB and Cache entries.
   *
   * @param {string} url
   * @return {boolean}
   */
  async isURLExpired(t) {
    if (this._maxAgeSeconds) {
      const r = await this._timestampModel.getTimestamp(t), n = Date.now() - this._maxAgeSeconds * 1e3;
      return r !== void 0 ? r < n : !0;
    } else {
      if (process.env.NODE_ENV !== "production")
        throw new E("expired-test-without-max-age", {
          methodName: "isURLExpired",
          paramName: "maxAgeSeconds"
        });
      return !1;
    }
  }
  /**
   * Removes the IndexedDB object store used to keep track of cache expiration
   * metadata.
   */
  async delete() {
    this._rerunRequested = !1, await this._timestampModel.expireEntries(1 / 0);
  }
}
typeof registration < "u" && registration.scope;
const l = "451-tools", K = ["network-only", "network-first", "stale-while-revalidate"], ge = {
  "network-only": Xe,
  "network-first": ee,
  "stale-while-revalidate": Qe
};
function Xe({ event: e, fetcher: t = fetch }) {
  const { request: r } = e;
  return t(r);
}
function ee({
  cacheName: e,
  event: t,
  expirationManager: r,
  fetcher: n = fetch
}) {
  const { request: o } = t;
  return n(o).then((a) => {
    const s = a.clone();
    return a.ok && caches.open(e).then((i) => i.put(o, s)).then(async () => {
      r && (await r.updateTimestamp(o.url), await r.expireEntries());
    }), a;
  }).catch(
    () => caches.open(e).then((a) => a.match(o, { ignoreSearch: !0 }))
  );
}
function Qe({
  cacheName: e,
  event: t,
  expirationManager: r,
  fetcher: n = fetch
}) {
  const { request: o } = t;
  return caches.open(e).then((a) => a.match(o, { ignoreSearch: !0 })).then(async (a) => a ? (t.waitUntil(
    n(o).then(async (s) => {
      if (s.ok) {
        const i = s.clone();
        caches.open(e).then((c) => c.put(o.url, i)).then(async () => {
          r && (await r.updateTimestamp(o.url), await r.expireEntries());
        });
      }
      return s;
    })
  ), a) : n(o).then((s) => s.ok ? caches.open(e).then((i) => i.put(o, s.clone())).then(() => s) : s));
}
function Ze(e) {
  const t = JSON.stringify(e);
  return self.clients.matchAll().then((r) => Promise.all(
    r.map((n) => (n.postMessage(t), Promise.resolve("postMessage sent, ", t)))
  ));
}
const be = "mirrors", we = "/mirrors.json", et = 10 * 60 * 1e3, b = "up", R = "down";
async function D() {
  return caches.open(be).then((e) => e.match(we)).then((e) => e.json());
}
async function F(e) {
  await caches.open(be).then((t) => t.put(
    we,
    new Response(
      JSON.stringify(e),
      { headers: { "Content-Type": "application/json" } }
    )
  ));
}
async function B(e, t) {
  const r = await D(), n = r.find((s) => s.url === e), o = {
    ...n,
    lastModified: Date.now(),
    status: t
  }, a = [
    ...r.filter((s) => s.url !== e),
    o
  ];
  await F(a).then(() => {
    n.status !== t && Ze({
      type: "mirror-status-changed",
      mirror: e,
      status: t
    });
  });
}
async function tt() {
  const e = Date.now(), t = await D(), r = t.every((o) => o.status === R);
  let n;
  r ? n = t.map((o) => ({
    ...o,
    lastModified: e,
    status: b
  })) : n = t.map((o) => o.lastModified < e - et ? {
    ...o,
    lastModified: e,
    status: b
  } : o), await F(n);
}
async function ue() {
  const t = (await D()).filter((r) => r.status === b);
  return t.find((r) => r.isPrimary) || t[0];
}
function rt({ url: e, request: t, mirroringConfig: r }) {
  return ke({ url: e, request: t, mirroringConfig: r }).then(async (n) => (await B(e, b), n)).catch(async (n) => (await B(e, R), Promise.reject(n)));
}
function de(e, t) {
  e && fetch(e, {
    method: "POST",
    keepalive: !0,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  }).catch(() => {
  });
}
let nt = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", ot = (e = 21) => {
  let t = "", r = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    t += nt[r[e] & 63];
  return t;
};
const at = "deflect-challenge-v1", ye = at, X = {
  "x-repress": {
    challenge: "X-RePress-Challenge",
    response: "X-RePress-Challenge-Response",
    keyId: "X-RePress-Challenge-Key-ID"
  },
  "451-tools": {
    challenge: "451-Tools-Mirror-Challenge",
    response: "451-Tools-Mirror-Challenge-Response",
    keyId: "451-Tools-Mirror-Challenge-Key-ID"
  }
}, st = "x-repress";
async function it({ origin: e, challenge: t }) {
  const r = ot(), n = X[t.headerFormat], o = await lt({
    origin: e,
    challenge: r,
    challengePath: t.path,
    challengeHeader: n.challenge
  });
  return o.ok ? ct({
    host: new URL(e).host.toLowerCase(),
    challenge: r,
    response: o,
    responseHeader: n.response,
    publicKey: t.publicKey,
    context: t.context || ye
  }) : !1;
}
async function ct({ host: e, challenge: t, response: r, responseHeader: n, publicKey: o, context: a }) {
  const s = r.headers.get(n);
  if (!s)
    return !1;
  const i = await ut({ base64PublicKey: o }), c = Uint8Array.fromBase64(s), u = dt({ host: e, challenge: t, context: a });
  return crypto.subtle.verify(
    { name: "Ed25519" },
    i,
    c,
    u
  );
}
function lt({ origin: e, challenge: t, challengePath: r, challengeHeader: n }) {
  return fetch(new URL(r, e), {
    method: "POST",
    headers: {
      [n]: t
    },
    cache: "no-store"
  });
}
function ut({ base64PublicKey: e }) {
  const t = Uint8Array.fromBase64(e);
  if (t.length !== 32)
    throw new Error(`Expected 32-byte Ed25519 public key, got ${t.length} bytes`);
  return crypto.subtle.importKey(
    "raw",
    t,
    { name: "Ed25519" },
    !0,
    ["verify"]
  );
}
function dt({ host: e, challenge: t, context: r }) {
  const n = `${r}
${e.toLowerCase()}
${t}`;
  return new TextEncoder().encode(n);
}
async function v(e, t) {
  var p;
  const r = new URL(e.url), n = r.pathname, o = r.searchParams, a = e.destination === "document", { mirroring: s } = await t.getConfiguration(), i = (p = s.telemetry) == null ? void 0 : p.endpoint, c = a && !!i, u = n.replace(/^\//, ""), d = [];
  a && await tt();
  let w = await ue();
  for (; w; ) {
    const m = w.url, P = new URL(u, m);
    P.search = o.toString();
    try {
      if (a && s.challenge) {
        const C = await it({
          origin: m,
          challenge: s.challenge
        });
        if (t.logger(
          `(mirroring) Mirror challenge ${C ? "passed" : "failed"} for: ${m}`
        ), !C)
          throw new Error(`Mirror challenge failed for: ${m}`);
      }
      const f = await ke({
        url: P.href,
        request: e,
        mirroringConfig: s
      }).catch((C) => C.name === "TimeoutError" ? Promise.reject(
        Object.assign(
          new Response("", {
            status: 408,
            statusText: "Request Timeout"
          }),
          { telemetryReason: "TIMEOUT" }
        )
      ) : Promise.reject(C));
      c && de(i, {
        "mirror-status": b,
        mirror: m,
        reason: f.ok ? "OK" : "HTTP_ERROR",
        ...f.ok ? {} : { status: f.status }
      });
      const j = new Headers(f.headers);
      return j.append("x-mirror", m), j.append("x-time-cached", Date.now()), await B(m, b), t.logger(
        `(mirroring) Request successful on mirror: ${m}, URL: ${P}`
      ), new Response(f.body, { ...f, headers: j });
    } catch (f) {
      d.push(f), c && de(i, {
        "mirror-status": R,
        mirror: m,
        reason: (f == null ? void 0 : f.telemetryReason) || "ERROR"
      }), await B(m, R), t.logger(
        `(mirroring) Request failed on mirror: ${m}, URL: ${P}`
      );
    }
    w = await ue();
  }
  return Promise.reject(
    new Error("networking.js (fetchFromMirrors): Out of mirrors.", {
      cause: d
    })
  );
}
function ke({ url: e, request: t, mirroringConfig: r }) {
  const n = r.urls.find((o) => o.isPrimary);
  return fetch(
    new Request(e, {
      ...t,
      headers: {
        ...t.headers,
        ...r.setRepressHeaders && {
          "X-Repress-Mode": "mirror",
          "X-Repress": n.url
        }
      },
      signal: AbortSignal.timeout(r.timeout)
    })
  );
}
function Rr({ serviceWorkerController: e } = {}) {
  if (!e)
    throw new Error("You must pass a serviceWorkerController plugin to registerBookmarkApi");
  e.modules.push("bookmark");
  const t = ({ event: o }) => new RegExp(`/${l}/bookmark/?$`).test(o.request.url), r = ({ event: o }) => xe(l).test(o.request.url), n = new Z(`${l}-bookmarks`, {
    maxEntries: 100
  });
  e.logger("(bookmark) Module registered."), e.addRoute(t, ht, "GET"), e.logger(`(bookmark) GET "/${l}/bookmark/" endpoint registered.`), e.addRoute(r, mt, "GET"), e.logger(`(bookmark) GET "/${l}/bookmark/:path" endpoint registered.`), e.addRoute(r, (o) => pt({ ...o, expirationManager: n }), "POST"), e.logger(`(bookmark) POST "/${l}/bookmark/:path" endpoint registered.`), e.addRoute(r, ft, "DELETE"), e.logger(`(bookmark) DELETE "/${l}/bookmark/:path" endpoint registered.`), e.addRoute(gt, (o) => bt({ ...o, expirationManager: n }), "GET");
}
async function ht() {
  const e = `${l}-bookmarks`, t = await caches.open(e), n = (await t.keys()).map((o) => t.match(o).then(async (a) => {
    const s = await a.text(), i = a.headers.get("X-metadata");
    return {
      url: o.url,
      path: new URL(o.url).pathname,
      html: s,
      metadata: i ? JSON.parse(i) : null
    };
  }));
  return Promise.all(n).then((o) => new Response(JSON.stringify(o), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  })).catch((o) => new Response(null, {
    status: 500,
    statusText: o.message
  }));
}
async function mt({ event: e }) {
  const t = new URL(e.request.url), r = `${l}-bookmarks`, n = await caches.open(r), o = te(l, t);
  return o ? n.match(o).then(async (a) => {
    if (!a)
      return new Response(null, {
        status: 404,
        statusText: "Not Found"
      });
    const s = await a.text(), i = a.headers.get("X-metadata"), c = JSON.stringify({
      url: e.request.url,
      path: o,
      html: s,
      metadata: i ? JSON.parse(i) : null
    });
    return new Response(c, {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }) : new Response(null, {
    status: 400,
    statusText: "Not a valid bookmark path"
  });
}
async function pt({ event: e, serviceWorkerController: t, expirationManager: r }) {
  const n = new URL(e.request.url), o = `${l}-bookmarks`, a = te(l, n);
  if (!a)
    return new Response(JSON.stringify({}), {
      status: 400,
      statusText: "Not a valid bookmark path"
    });
  const s = new Request(a), i = await t.fetcher(s);
  if (!i.ok)
    return i;
  let c;
  try {
    const { metadata: u } = await e.request.json();
    c = new Response(i.body, { ...i }), c.headers.set("x-metadata", JSON.stringify(u));
  } catch {
    c = i;
  }
  return caches.open(o).then((u) => u.put(a, c)).then(async () => (await r.updateTimestamp(a), await r.expireEntries(), new Response(null, {
    status: 200
  }))).catch((u) => new Response(null, {
    status: 500,
    statusText: u.message
  }));
}
async function ft({ event: e }) {
  const t = new URL(e.request.url), r = `${l}-bookmarks`, n = te(l, t);
  return n ? caches.open(r).then((o) => o.delete(n)).then(() => new Response(null, {
    status: 200
  })).catch((o) => new Response(null, {
    status: 500,
    statusText: o.message
  })) : new Response(JSON.stringify({}), {
    status: 400,
    statusText: "Not a valid bookmark path"
  });
}
function xe(e) {
  return new RegExp(`/${e}/bookmark/(.{1,})`);
}
function te(e, t) {
  const r = xe(e);
  return decodeURIComponent(t.pathname.match(r)[1]);
}
async function gt({ event: e }) {
  return caches.open(`${l}-bookmarks`).then((t) => t.match(e.request));
}
async function bt({
  serviceWorkerController: e,
  expirationManager: t,
  event: r
}) {
  const o = e.modules.includes("mirroring") ? (a) => v(a, e) : fetch;
  return ee({
    cacheName: `${l}-bookmarks`,
    expirationManager: t,
    fetcher: o,
    event: r
  });
}
const wt = () => ({});
function $(e, t) {
  return t ? `${e}?revision=${t}` : e;
}
const vr = (e = {}) => {
  const { serviceWorkerController: t } = e;
  if (!t)
    throw new Error("You must pass a serviceWorkerController plugin to registerContentBundles");
  t.modules.push("content-bundles"), t.logger("(content-bundles) Module registered."), t.addInstallHandler(yt), t.addActivateHandler(kt);
  const r = ({ event: n }) => new RegExp(`/${l}/content-bundles/?$`).test(n.request.url);
  t.addRoute(r, xt, "GET"), t.logger(`(content-bundles) GET "/${l}/content-bundles/" endpoint registered.`), t.addRoute(Tt, Et, "GET");
};
async function yt({ serviceWorkerController: e }) {
  const { contentBundles: t } = await e.getConfiguration();
  return t.pages.map((r) => {
    const { metadata: n = {} } = r, o = new Request(r.url);
    return e.fetcher(o).then((a) => {
      if (!a.ok)
        throw new Error(`Failed to fetch ${r.url}`);
      let s;
      try {
        s = new Response(a.body, { ...a }), s.headers.set("x-metadata", JSON.stringify(n));
      } catch {
        s = a;
      }
      return s;
    }).then((a) => {
      const s = $(r.url, r.revision);
      return caches.open(`${l}-content-bundles`).then((i) => i.put(s, a));
    }).catch((a) => (console.info(a.message, ", skipping caching content bundle"), Promise.resolve()));
  });
}
async function kt({ serviceWorkerController: e }) {
  const { contentBundles: t } = await e.getConfiguration(), r = t.pages.map((n) => $(n.url, n.revision));
  return caches.open(`${l}-content-bundles`).then((n) => n.keys().then((o) => {
    o.forEach((a) => {
      const s = a.url.replace(self.location.origin, "");
      if (!r.includes(s))
        return n.delete(a);
    });
  }));
}
const xt = async () => {
  try {
    const e = await caches.open(`${l}-content-bundles`), t = await e.keys(), r = await Promise.all(t.map(async (n) => {
      const o = await e.match(n), a = o.headers.get("Content-Type"), s = o.headers.get("X-metadata"), i = await o.text();
      return {
        url: n.url,
        path: new URL(n.url).pathname,
        metadata: s ? JSON.parse(s) : null,
        contentType: a,
        content: i
      };
    }));
    return new Response(JSON.stringify(r), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (e) {
    return new Response(null, {
      status: 500,
      statusText: e.message
    });
  }
};
async function Tt({ event: e }) {
  return caches.open(`${l}-content-bundles`).then((t) => t.match(e.request, { ignoreSearch: !0 }));
}
async function Et({
  serviceWorkerController: e,
  event: t
}) {
  const n = e.modules.includes("mirroring") ? (o) => v(o, e) : fetch;
  return ee({
    cacheName: `${l}-content-bundles`,
    fetcher: n,
    event: t
  });
}
const Rt = (e) => !e || !e.pages ? (console.warn("[content-bundles]: No configuration provided"), { pages: [] }) : {
  pages: (Array.isArray(e.pages) ? e.pages : [e.pages]).map((n) => {
    const { metadata: o = {} } = n;
    return typeof n == "string" ? { url: n, revision: null, metadata: o } : { url: n.url, revision: n.revision || null, metadata: o };
  })
}, $r = (e = {}) => {
  const { serviceWorkerController: t } = e;
  if (!t)
    throw new Error("You must pass a serviceWorkerController plugin to registerOfflineAssets");
  t.modules.push("offline-assets"), t.logger("(offline-assets) Module registered."), t.addInstallHandler(vt), t.addActivateHandler($t), t.addRoute(Ct, Nt, "GET");
};
async function vt({ serviceWorkerController: e }) {
  const { offlineAssets: t = {} } = await e.getConfiguration();
  return t.assets.map((r) => {
    const n = $(r.url, r.revision);
    return Promise.all([
      caches.open(`${l}-offline-assets`).then((o) => {
        const a = new Request(n);
        return e.fetcher(a).then((s) => {
          if (s.ok)
            return o.put(n, s);
        });
      })
    ]);
  });
}
async function $t({ serviceWorkerController: e }) {
  const { offlineAssets: t } = await e.getConfiguration(), r = t.assets.map((n) => $(n.url, n.revision));
  return caches.open(`${l}-offline-assets`).then((n) => n.keys().then((o) => {
    o.forEach((a) => {
      const s = a.url.replace(self.location.origin, "");
      if (!r.includes(s))
        return n.delete(a);
    });
  }));
}
async function Ct({ event: e }) {
  return caches.open(`${l}-offline-assets`).then((t) => t.match(e.request, { ignoreSearch: !0 }));
}
function Nt({ event: e, serviceWorkerController: t }) {
  return caches.open(`${l}-offline-assets`).then((r) => r.match(e.request, { ignoreSearch: !0 }).then((n) => (n && t.logger(
    `(offline-assets) Match found. Returning cached response for URL path: ${e.request.url}`
  ), n)));
}
const At = (e) => {
  if (!e || !e.assets)
    throw new Error("Missing offlineAssets.assets in configuration.");
  return {
    assets: (Array.isArray(e.assets) ? e.assets : [e.assets]).map((n) => typeof n == "string" ? { url: n, revision: null } : { url: n.url, revision: n.revision || null })
  };
}, Mt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><path fill="#7A7D95" d="M0 0h640v360H0z"/><g fill="#FFF"><path d="M258.649 118.314v122.223h122.223V118.314H258.649zm119.723 2.5v81.901l-33.228-32.793-25.763 24.932-16.711-16.614-41.521 41.038v-98.464h117.223zM261.149 238.037v-15.245l41.517-41.033 33.458 33.265 1.762-1.773-16.73-16.634 23.972-23.2 33.245 32.81v31.81H261.149z"/><path d="M294.185 165.228c8.089 0 14.67-6.581 14.67-14.669s-6.581-14.669-14.67-14.669-14.669 6.581-14.669 14.669 6.58 14.669 14.669 14.669zm0-26.839c6.71 0 12.17 5.459 12.17 12.169s-5.459 12.169-12.17 12.169-12.169-5.459-12.169-12.169 5.458-12.169 12.169-12.169z"/></g></svg>
`, Cr = (e = {}) => {
  const { serviceWorkerController: t } = e;
  if (!t)
    throw new Error(
      "You must pass a serviceWorkerController plugin to registerFallbackImage"
    );
  t.modules.push("fallback-image"), t.logger("(fallback-image) Module registered."), t.addFallbackHandler(
    ({ event: r }) => r.request.destination === "image",
    ({ event: r, serviceWorkerController: n }) => (n.logger(`(fallback-image) Returning fallback image for URL: ${r.request.url}`), new Response(Mt, {
      headers: { "Content-Type": "image/svg+xml" }
    }))
  );
}, Lt = () => ({});
function _t({
  language: e,
  textDirection: t,
  templateStrings: r,
  mainCSS: n,
  mainJS: o
}) {
  return {
    // Core
    "{{ language }}": e,
    "{{ textDirection }}": t,
    "{{ mainCSS }}": n,
    "{{ mainJS }}": o,
    // Template strings
    "{{ pageTitle }}": (r == null ? void 0 : r.pageTitle) || "451 Tools",
    "{{ pageDescription }}": (r == null ? void 0 : r.pageDescription) || "Censorship Resilient and Distributed Publishing",
    "{{ homeLinkText }}": (r == null ? void 0 : r.homeLinkText) || "Home",
    "{{ bookmarksTabTitle }}": (r == null ? void 0 : r.bookmarksTabTitle) || "Bookmarks",
    "{{ editorialTabTitle }}": (r == null ? void 0 : r.editorialTabTitle) || "Editorial",
    "{{ aboutTabTitle }}": (r == null ? void 0 : r.aboutTabTitle) || "About",
    "{{ mirrorsTabTitle }}": (r == null ? void 0 : r.mirrorsTabTitle) || "Mirrors",
    "{{ mirrorsLoadingText }}": (r == null ? void 0 : r.mirrorsLoadingText) || "Loading mirror status…",
    "{{ mirrorsRetryButtonText }}": (r == null ? void 0 : r.mirrorsRetryButtonText) || "Retry",
    "{{ mirrorsRetryAllButtonText }}": (r == null ? void 0 : r.mirrorsRetryAllButtonText) || "Retry all mirrors",
    "{{ mirrorsUrlHeaderText }}": (r == null ? void 0 : r.mirrorsUrlHeaderText) || "URL",
    "{{ mirrorsStatusHeaderText }}": (r == null ? void 0 : r.mirrorsStatusHeaderText) || "Status",
    "{{ mirrorsLastCheckedHeaderText }}": (r == null ? void 0 : r.mirrorsLastCheckedHeaderText) || "Last checked",
    "{{ copyright }}": (r == null ? void 0 : r.copyright) || `Copyright © ${(/* @__PURE__ */ new Date()).getFullYear()}, Zamaneh Media. All rights reserved.`,
    "{{ aboutInnerHTML }}": (r == null ? void 0 : r.aboutInnerHTML) || `
      <p>You are on the 451 Tools offline dashboard. This could be because you are experiencing an internet shutdown or your device is not connected to the internet. 451 Tools keeps information available even when the website is censored or when the internet is down.</p>
      <p>451 Tools helps publishers maintain reach and readership under the most adversarial circumstances. Find out more at <a href="https://451.tools/" target="_blank">https://451.tools/</a>.</p>
    `
  };
}
const Dt = '<!doctypehtml><html lang="{{ language }}"dir="{{ textDirection }}"><meta charset="UTF-8"><meta name="viewport"content="width=device-width,initial-scale=1"><meta name="description"content="{{ pageDescription }}"><title>{{ pageTitle }}</title><style>{{ mainCSS }}</style><div class="container"><header class="header"><a class="home-link"href="/"><svg xmlns="http://www.w3.org/2000/svg"fill="currentColor"viewBox="0 0 16 16"width="28"height="28"><path d="M8 1.32.66 8.133l.68.734.66-.613V14h5V9h2v5h5V8.254l.66.613.68-.734Zm0 1.36 5 4.648V13h-3V8H6v5H3V7.328Z"/></svg> <span class="link-text">{{ homeLinkText }}</span></a><h1 class="title">{{ pageTitle }}</h1><p class="description">{{ pageDescription }}</p><svg class="offline-icon"xmlns="http://www.w3.org/2000/svg"viewBox="0 0 500 500"aria-hidden="true"><path d="M355.5 105.5c11.4 36.1 17.7 73.6 18.7 111.4 4.3.5 8.5 1.1 12.6 2h69.8c-3.2-52.6-25.4-102.2-62.1-139.9-12.2 10-25.3 18.9-39 26.5M99 405.2c.7.7 1.5 1.3 2.1 1.8 2.1 1.6 4.4 3.1 6.5 4.7 3.2 2.3 6.5 4.5 9.7 6.6 2.3 1.5 4.7 2.8 6.9 4.2 3.4 1.9 6.6 3.9 10 5.6 2.4 1.3 4.9 2.5 7.4 3.7 3.2 1.6 6.8 3.1 10 4.7 2.4 1 4.7 2 7.1 2.8-12.9-16.2-23.6-34.1-31.5-53.4-10 5.7-19.3 12.1-28.2 19.3m171.2-158.9h-19.9v19.2c6-7 12.7-13.4 19.9-19.2m175.6.2c3.6 2.8 7 5.8 10.2 9 .3-3 .6-6 .8-9h-11M250.3 13.8v94.1c24.3-1.5 48-6.9 70.4-16.3-17.6-41.8-42.6-70.5-70.4-77.8m123.9 46.4-2.1-1.8c-2.1-1.6-4.4-3.1-6.5-4.7-3.2-2.3-6.5-4.5-9.7-6.6-2.3-1.5-4.7-2.7-6.9-4.2-3.4-1.9-6.6-3.9-10-5.7-2.5-1.3-4.9-2.5-7.4-3.7-3.2-1.6-6.8-3.2-10-4.7-2.4-1-4.7-1.9-7.1-2.7 13 16.2 23.6 34.1 31.5 53.4 9.9-5.7 19.3-12.2 28.2-19.3M250.3 218.8h78.8c5.7-1.2 11.5-2 17.4-2.4-1.2-33.5-6.6-66.7-16.4-98.8-25.4 10.3-52.4 16.3-79.7 17.8l-.1 83.4m-27.5 232.6v-51.7c-4.1-13.1-6.3-26.7-6.4-40.4V358c-22 2-43.5 7.2-63.9 15.7 17.6 41.6 42.5 70.4 70.3 77.7m-105.1-91.5c-11.6-36.7-18-74.9-18.7-113.4H16.6c3.2 52.6 25.4 102.2 62.1 139.9 12.2-10 25.3-18.9 39-26.5M16.3 218.8h82.5c1-38.5 7.1-76.7 18.7-113.4-13.8-7.6-26.8-16.5-39-26.5-36.7 37.7-58.6 87.4-62.2 139.9m235.3 232.1c-.4-.5-.8-1-1.3-1.5v2c.5-.1.9-.3 1.4-.4 0-.1-.1-.1-.1-.1m-125-204.4c1 34.3 6.5 68.4 16.5 101.3 24.2-9.9 49.9-15.7 75.9-17.5.2-1.2.4-2.4.7-3.5.9-3.9 1.9-7.8 3.1-11.6v-68.7h-96.2M159 26.2c-2.4.8-4.7 1.8-7.1 2.7-3.5 1.5-6.9 2.9-10.3 4.5-2.5 1.2-5 2.4-7.4 3.7-3.4 1.6-6.6 3.6-9.9 5.5-2.4 1.5-4.9 2.9-7.1 4.4-3.3 2.1-6.4 4.3-9.6 6.6-2.1 1.6-4.4 3.2-6.5 4.9-.6.5-1.3 1.1-1.9 1.8 8.9 7.3 18.4 13.6 28.3 19.2 7.8-19.1 18.5-37.1 31.5-53.3m-6.5 65.5c22.4 9.2 46.2 14.7 70.3 16.2v-94c-27.8 7.3-52.7 36.3-70.3 77.8m70.3 43.7c-27.5-1.5-54.3-7.4-79.7-17.8-10 32.8-15.5 66.9-16.5 101.2h96.2v-83.4m246.4 163.3c-6.1-11.7-14-22.4-23.3-31.7-10.7-10.7-23.3-19.4-37.1-25.7l-2.1-.9c-15.7-6.8-33-10.6-51.2-10.6-18.1 0-35.3 3.7-50.9 10.5-37.3 16.1-65.4 49.4-74.3 89.9-2.1 9.7-3.2 19.6-3 29.5.2 13.2 2.4 26.4 6.6 39 5.4 16.2 14 31.2 25.3 44 12.7 14.5 28.5 25.9 46.3 33.5 15.4 6.5 32.3 10.1 50.1 10.1 70.8 0 128.2-57.4 128.2-128.2-.1-21.5-5.3-41.6-14.6-59.4zm-43.9 107-22.1 22.1-47.7-47.7-47.7 47.7-22.1-22.1 47.7-47.7-47.7-47.7 22.1-22.1 47.7 47.7 47.7-47.7 22.1 22.1-47.7 47.7 47.7 47.7z"/></svg></header><main class="main-content"><div class="tabs"role="tablist"><button aria-controls="panel--bookmarks"aria-selected="false"class="tab tab__hidden"id="tab--bookmarks"role="tab"tabindex="-1"disabled="disabled">{{ bookmarksTabTitle }}</button> <button aria-controls="panel--editorial"aria-selected="false"class="tab tab__hidden"id="tab--editorial"role="tab"tabindex="-1"disabled="disabled">{{ editorialTabTitle }}</button> <button aria-controls="panel--mirrors"aria-selected="false"class="tab tab__hidden"id="tab--mirrors"role="tab"tabindex="-1"disabled="disabled">{{ mirrorsTabTitle }}</button> <button aria-controls="panel--about"aria-selected="false"class="tab"id="tab--about"role="tab"tabindex="-1">{{ aboutTabTitle }}</button></div><section aria-labelledby="tab--bookmarks"class="tab-content"data-bookmarks hidden id="panel--bookmarks"role="tabpanel"tabindex="0"></section><section aria-labelledby="tab--editorial"class="tab-content"data-editorial hidden id="panel--editorial"role="tabpanel"tabindex="0"></section><section aria-labelledby="tab--about"class="tab-content rich-text"hidden id="panel--about"role="tabpanel"tabindex="0">{{ aboutInnerHTML }}</section><section aria-labelledby="tab--mirrors"class="tab-content"hidden id="panel--mirrors"role="tabpanel"tabindex="0"><div data-mirrors><p class="loading-message">{{ mirrorsLoadingText }}<div class="mirrors"><button class="button"data-mirrors-retry-all>{{ mirrorsRetryAllButtonText }}</button><table class="mirror-table"><thead><tr><th>{{ mirrorsUrlHeaderText }}<th>{{ mirrorsStatusHeaderText }}<th>{{ mirrorsLastCheckedHeaderText }}<th><tbody data-mirrors-body></table></div><template data-mirror-row-template><tr><td><code data-mirror-url></code><td class="mirror-status"data-mirror-status><td class="mirror-last-checked"data-mirror-last-checked><td><button class="button"data-mirror-retry>{{ mirrorsRetryButtonText }}</button></template></div></section></main><footer><p class="copyright">{{ copyright }}</footer></div><script>{{ mainJS }}<\/script>', he = '*,::after,::before{box-sizing:border-box}*{margin:0}body,html{height:100%}body{-webkit-font-smoothing:antialiased;background-color:var(--background-color,#f9fbfc);color:var(--text-color,#2d2d3b);font-family:system-ui,sans-serif;line-height:1.4}.container{display:flex;flex-direction:column;height:100%;margin:0 auto;max-width:var(--container-width,1200px);padding:0 2rem;width:100%}.header{margin:4rem 0 2.5rem;position:relative}.home-link{display:flex;align-items:center;gap:.5rem;color:var(--primary-color,#1993f6);margin-block-end:1rem;text-decoration:none}.home-link:hover .link-text{text-decoration:underline}.home-link svg{width:28px;height:28px}.title{font-size:2.75rem;line-height:1;margin-block-end:1.5rem}@media screen and (min-width:960px){.title{font-size:5rem}}.description{font-size:1.25rem;max-width:40rem}.offline-icon{display:none;fill:var(--icon-color,#e6e8ec);height:100%;position:absolute;inset-inline-end:0;inset-block-start:0;z-index:-1}@media screen and (min-width:960px){.offline-icon{display:initial}}.main-content{flex-grow:1}.tabs{display:flex;flex-direction:row;flex-wrap:wrap;list-style:none;margin-block-end:2rem;padding:0}@media screen and (min-width:485px){.tabs{border-block-end:1px solid var(--border-color,#e6e8ec);flex-wrap:nowrap;overflow:auto}}.tab{appearance:none;background:0 0;border:none;border-block-end:2px solid transparent;box-shadow:0 1px 0 0 var(--border-color,#e6e8ec);color:var(--tab-text-color,#7a7d95);cursor:pointer;font:inherit;font-size:1.25rem;font-weight:700;padding:.5rem 1rem;transition:border-color .2s ease-in-out;width:50%}@media screen and (min-width:485px){.tab{box-shadow:none;width:initial}}.tab__hidden{display:none}.tab:disabled{cursor:not-allowed;opacity:.5;order:1}.tab:disabled::before{content:"🔒";margin-inline-end:.25rem}.tab[aria-selected=true]{border-color:var(--primary-color,#1993f6);color:var(--primary-color,#1993f6)}.tab:hover:not(:disabled){border-color:var(--primary-color,#1993f6)}.rich-text{max-width:40rem}.rich-text>*+*{margin-block-start:1.5rem}.rich-text h2,.rich-text h3{line-height:1.25}.rich-text h2{font-size:2.25rem}@media screen and (min-width:960px){.rich-text h2{font-size:2.75rem}}.rich-text h3{font-size:1.75rem}@media screen and (min-width:960px){.rich-text h3{font-size:2.25rem}}.rich-text a{color:var(--primary-color,#1993f6)}.rich-text blockquote{border-inline-start:0.25rem solid var(--primary-color,#1993f6);padding-inline-start:1rem}.rich-text cite,.rich-text figcaption{display:block;font-style:italic;margin-block-start:0.5rem}.rich-text figcaption{text-align:center}.rich-text img{display:block;margin-inline-start:auto;margin-inline-end:auto;max-width:100%}.rich-text ol,.rich-text ul{list-style-position:inside;padding:0}.bookmarks,.content-bundles{display:flex;flex-wrap:wrap;gap:1.5rem;list-style:none;padding:0}.card{background-color:var(--card-background-color,#fff);border-radius:.5rem;border:1px solid var(--border-color,#e6e8ec);box-shadow:var(--card-box-shadow,0 8px 24px rgba(149,157,165,.2));width:100%}@media screen and (min-width:960px){.card{width:calc(50% - .75rem)}}.card-link{border-radius:.5rem;color:inherit;display:flex;height:100%;overflow:hidden;text-decoration:none;transition:box-shadow .2s ease-in-out}.card-link:hover{box-shadow:0 0 0 2px var(--primary-color,#1993f6)}.card-image{flex-shrink:0;height:100%;min-height:100px;object-fit:cover;width:100px}.card-image[src=""]{display:none}.card-content{padding:1rem}.card-title{font-size:1.25rem}.card-description,.card-title{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;overflow-wrap:break-word;overflow:hidden;word-break:break-word}.card-description:not(:empty){-webkit-line-clamp:3;margin-block-start:0.5rem}.copyright{margin:2rem 0;text-align:center}.loading-message{color:var(--tab-text-color,#7a7d95)}.button{background-color:var(--primary-color,#1993f6);color:contrast-color(var(--primary-color,#1993f6));border:none;border-radius:.25rem;cursor:pointer;font:inherit;padding:.5rem 1rem}.button:focus,.button:hover{filter:brightness(1.2)}.button:disabled{cursor:wait;opacity:.7}.mirrors{display:flex;flex-direction:column;align-items:flex-start;gap:1rem}.mirror-table{border-collapse:collapse;width:100%}.mirror-table td,.mirror-table th{border-block-end:1px solid var(--border-color,#e6e8ec);padding:.75rem .5rem;text-align:start}.mirror-table th{color:var(--tab-text-color,#7a7d95);font-weight:400;text-transform:uppercase;font-size:.75rem}.mirror-table td code{word-break:break-all}.mirror-status{font-weight:700;width:8rem;text-transform:capitalize}.mirror-last-checked{font-family:monospace}.mirror-status[data-status=up]{color:#2e7d32}.mirror-status[data-status=down]{color:#c62828}.mirror-status[data-status=unknown]{color:var(--tab-text-color,#7a7d95)}', Pt = `(async function(){const bookmarksPlaceholder=document.querySelector("[data-bookmarks]");const serviceWorkerRegistration=await navigator.serviceWorker.getRegistration();if(!serviceWorkerRegistration){return}let configuration;try{configuration=await caches.open("configuration").then((cache=>cache.match("/configuration.json"))).then((res=>res.json()))}catch{configuration={}}if(configuration.bookmark){const bookmarks=await fetch("/451-tools/bookmark/").then((res=>res.json())).catch((()=>[]));if(bookmarks.length<1){renderNoBookmarks()}else{const bookmarksList=document.createElement("ul");const bookmarksHtml=bookmarks.map(generateCardHtml).join("");bookmarksList.innerHTML=bookmarksHtml;bookmarksList.classList.add("bookmarks");bookmarksPlaceholder.appendChild(bookmarksList)}const bookmarksTab=document.querySelector("#tab--bookmarks");bookmarksTab.classList.remove("tab__hidden");bookmarksTab.removeAttribute("disabled")}else if(configuration.fallbackPages.showHiddenTabs){const bookmarksTab=document.querySelector("#tab--bookmarks");bookmarksTab.classList.remove("tab__hidden")}function renderNoBookmarks(){const noBookmarksMessage=document.createElement("p");noBookmarksMessage.innerText="You have no bookmarks.";bookmarksPlaceholder.appendChild(noBookmarksMessage)}const contentBundlesPlaceholder=document.querySelector("[data-editorial]");const isContentBundlesUsed=await caches.has("451-tools-content-bundles");if(isContentBundlesUsed){const contentBundles=await caches.open("451-tools-content-bundles").then((cache=>cache.keys())).then((requests=>Promise.all(requests.map((async request=>{const response=await caches.match(request);const html=await response.text();return{path:new URL(request.url).pathname,url:request.url.split("?")[0],html:html}})))));if(contentBundles.length<1){renderNoContentBundles()}else{const contentBundlesList=document.createElement("ul");const contentBundlesHtml=contentBundles.reverse().map(generateCardHtml).join("");contentBundlesList.innerHTML=contentBundlesHtml;contentBundlesList.classList.add("content-bundles");contentBundlesPlaceholder.appendChild(contentBundlesList)}const contentBundlesTab=document.querySelector("#tab--editorial");contentBundlesTab.classList.remove("tab__hidden");contentBundlesTab.removeAttribute("disabled")}else if(configuration.fallbackPages.showHiddenTabs){const contentBundlesTab=document.querySelector("#tab--editorial");contentBundlesTab.classList.remove("tab__hidden")}function renderNoContentBundles(){const noContentBundlesMessage=document.createElement("p");noContentBundlesMessage.innerText="You have no content bundles.";contentBundlesPlaceholder.appendChild(noContentBundlesMessage)}function generateCardHtml(response){const cardItem=document.createElement("li");const cardLink=document.createElement("a");const cardImage=document.createElement("img");const cardContent=document.createElement("div");const cardTitle=document.createElement("h2");const cardDescription=document.createElement("p");const html=document.createElement("html");html.innerHTML=response.html;const title=response.metadata?.title||html.querySelector("title")?.innerText||response.url;const description=response.metadata?.description||html.querySelector('meta[name="description"]')?.content||"";const imageSrc=response.metadata?.image?.src||html.querySelector('meta[property="og:image"]')?.content||"";cardItem.classList.add("card");cardLink.classList.add("card-link");cardLink.href=response.path;cardImage.classList.add("card-image");cardImage.src=imageSrc;if(Number.isInteger(response.metadata?.image?.height)){cardImage.height=response.metadata.image.height}if(Number.isInteger(response.metadata?.image?.width)){cardImage.width=response.metadata.image.width}cardImage.alt="";cardContent.classList.add("card-content");cardTitle.classList.add("card-title");cardTitle.innerText=title;cardDescription.classList.add("card-description");cardDescription.innerText=description;cardContent.appendChild(cardTitle);cardContent.appendChild(cardDescription);cardLink.appendChild(cardImage);cardLink.appendChild(cardContent);cardItem.appendChild(cardLink);return cardItem.outerHTML}const mirrorsPlaceholder=document.querySelector("[data-mirrors]");if(configuration.mirroring){const mirrorsTab=document.querySelector("#tab--mirrors");mirrorsTab.classList.remove("tab__hidden");mirrorsTab.removeAttribute("disabled");const mirrorsWrapper=document.querySelector(".mirrors");const mirrorsBody=document.querySelector("[data-mirrors-body]");const mirrorRowTemplate=document.querySelector("[data-mirror-row-template]");function formatDate(timestamp){if(!timestamp){return"—"}const date=new Date(timestamp);const locale=document.documentElement.lang||"en";return new Intl.DateTimeFormat(locale,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(date)}function createMirrorRow(mirror){const row=mirrorRowTemplate.content.cloneNode(true).firstElementChild;row.dataset.url=mirror.url;row.querySelector("[data-mirror-url]").textContent=mirror.url;const statusCell=row.querySelector("[data-mirror-status]");statusCell.dataset.status=mirror.status||"unknown";statusCell.textContent=mirror.status||"unknown";row.querySelector("[data-mirror-last-checked]").textContent=formatDate(mirror.lastModified);const retryButton=row.querySelector("[data-mirror-retry]");retryButton.addEventListener("click",(()=>retryMirror(mirror.url,row)));return row}async function renderMirrors(){const mirrors=await fetch("/451-tools/mirror-status/").then((response=>response.json())).then((data=>data?.mirrors||[])).catch((()=>[]));if(mirrors.length<1){mirrorsWrapper.hidden=true;mirrorsPlaceholder.querySelector(".loading-message").textContent="No mirrors configured.";return}mirrorsBody.innerHTML="";mirrors.forEach((mirror=>mirrorsBody.appendChild(createMirrorRow(mirror))));mirrorsWrapper.hidden=false;mirrorsPlaceholder.querySelector(".loading-message").hidden=true}async function retryMirror(url,row){const statusCell=row.querySelector("[data-mirror-status]");const lastCheckedCell=row.querySelector("[data-mirror-last-checked]");const retryButton=row.querySelector("[data-mirror-retry]");retryButton.disabled=true;statusCell.dataset.status="unknown";statusCell.textContent="checking…";try{const response=await fetch(\`/451-tools/mirror-retry/?url=\${encodeURIComponent(url)}\`);const data=await response.json();statusCell.dataset.status=data.status;statusCell.textContent=data.status;lastCheckedCell.textContent=formatDate(Date.now())}catch{statusCell.dataset.status="unknown";statusCell.textContent="unknown"}finally{retryButton.disabled=false}}async function retryAllMirrors(){const rows=mirrorsBody.querySelectorAll("tr");await Promise.all(Array.from(rows).map((row=>retryMirror(row.dataset.url,row))))}function updateMirrorRow(mirror){const row=mirrorsBody.querySelector(\`tr[data-url="\${mirror.url}"]\`);if(!row){return}const statusCell=row.querySelector("[data-mirror-status]");const lastCheckedCell=row.querySelector("[data-mirror-last-checked]");statusCell.dataset.status=mirror.status;statusCell.textContent=mirror.status;lastCheckedCell.textContent=formatDate(mirror.lastModified)}const retryAllButton=document.querySelector("[data-mirrors-retry-all]");retryAllButton.addEventListener("click",retryAllMirrors);renderMirrors();navigator.serviceWorker.addEventListener("message",(event=>{const payload=JSON.parse(event.data);if(payload.type==="mirror-status-changed"){updateMirrorRow({url:payload.mirror,status:payload.status,lastModified:Date.now()})}}))}const activeTabs=Array.from(document.querySelectorAll('[role="tab"]')).filter((tab=>!tab.classList.contains("tab__hidden")&&!tab.hasAttribute("disabled")));const firstActiveTab=activeTabs[0];const firstActivePanel=document.querySelector(\`#\${firstActiveTab.getAttribute("aria-controls")}\`);const tabList=document.querySelector('[role="tablist"]');firstActiveTab.setAttribute("aria-selected",true);firstActiveTab.setAttribute("tabindex",0);firstActivePanel.removeAttribute("hidden");activeTabs.forEach((tab=>tab.addEventListener("click",changeTabs)));let currentTabIndex=0;tabList.addEventListener("keydown",(e=>{if(e.key==="ArrowRight"||e.key==="ArrowLeft"){activeTabs[currentTabIndex].setAttribute("tabindex",-1);if(e.key==="ArrowRight"){currentTabIndex++;if(currentTabIndex>=activeTabs.length){currentTabIndex=0}}else if(e.key==="ArrowLeft"){currentTabIndex--;if(currentTabIndex<0){currentTabIndex=activeTabs.length-1}}activeTabs[currentTabIndex].setAttribute("tabindex",0);activeTabs[currentTabIndex].focus()}}));function changeTabs(e){const target=e.target;const parent=target.parentNode;const grandparent=parent.parentNode;parent.querySelectorAll('[aria-selected="true"]').forEach((t=>t.setAttribute("aria-selected",false)));target.setAttribute("aria-selected",true);grandparent.querySelectorAll('[role="tabpanel"]').forEach((p=>p.setAttribute("hidden",true)));grandparent.parentNode.querySelector(\`#\${target.getAttribute("aria-controls")}\`).removeAttribute("hidden")}})();
`;
async function re({ request: e, configuration: { excludeByPath: t, excludeByCookieName: r } }) {
  return qt({ request: e, excludeByPath: t }) || await Ot({ excludeByCookieName: r });
}
function qt({ request: e, excludeByPath: t }) {
  const r = new URL(e.url).pathname;
  return t.some((n) => {
    try {
      return new RegExp(n).test(r);
    } catch {
      return !1;
    }
  });
}
async function Ot({ excludeByCookieName: e = [] }) {
  if (e.length === 0 || !self.cookieStore)
    return !1;
  try {
    const r = (await self.cookieStore.getAll()).map((n) => n.name);
    return e.some((n) => r.includes(n));
  } catch {
    return !1;
  }
}
const Nr = async (e = {}) => {
  const { serviceWorkerController: t } = e;
  if (!t)
    throw new Error("You must pass a serviceWorkerController plugin to registerFallbackPages");
  t.modules.push("fallback-pages"), t.logger("(fallback-pages) Module registered."), t.addInstallHandler(Ht), t.addActivateHandler(Ut), t.addFallbackHandler(({ event: n }) => n.request.destination === "document", Bt);
  const r = ({ event: n }) => new RegExp(`/${l}/dashboard/?$`).test(n.request.url);
  t.addRoute(
    r,
    async (n) => {
      const { fallbackPages: o } = await t.getConfiguration(), { language: a, textDirection: s, customProperties: i, templateStrings: c } = o;
      return new Response(
        Te({ language: a, textDirection: s, customProperties: i, templateStrings: c }),
        { headers: { "Content-Type": "text/html" } }
      );
    },
    "GET"
  );
};
async function Ht({ serviceWorkerController: e }) {
  const { fallbackPages: t } = await e.getConfiguration();
  if (t)
    return t.pages.map((r) => {
      const n = $(r.url, r.revision);
      return Promise.all([
        caches.open(`${l}-fallback-pages`).then((o) => o.add(n))
      ]);
    });
}
async function Ut({ serviceWorkerController: e }) {
  const { fallbackPages: t } = await e.getConfiguration(), r = t == null ? void 0 : t.pages.map((n) => $(n.url, n.revision));
  return caches.open(`${l}-fallback-pages`).then((n) => n.keys().then((o) => {
    o.forEach((a) => {
      const s = a.url.replace(self.location.origin, "");
      if (!r.includes(s))
        return n.delete(a);
    });
  }));
}
async function Bt({ event: e, serviceWorkerController: t }) {
  const { fallbackPages: r } = await t.getConfiguration(), {
    customProperties: n,
    language: o,
    pages: a,
    templateStrings: s,
    textDirection: i
  } = r;
  if (await re({ request: e.request, configuration: r }))
    return;
  if (a.length < 1)
    return t.logger("(fallback-pages) No custom fallback pages configured. Returning the default fallback page."), new Response(
      Te({ language: o, textDirection: i, customProperties: n, templateStrings: s }),
      { headers: { "Content-Type": "text/html" } }
    );
  const c = a.find(
    (d) => d.refererRegex ? new RegExp(d.refererRegex).test(e.request.headers.get("referer")) : !1
  ), u = c ? c.url : a.find((d) => !d.refererRegex).url;
  return caches.open(`${l}-fallback-pages`).then((d) => d.match(u, { ignoreSearch: !0 }).then((w) => (w && t.logger("(fallback-pages) Custom fallback page found. Returning cached response."), w)));
}
function Te({ language: e, textDirection: t, customProperties: r, templateStrings: n }) {
  const o = r ? `:root { ${Object.entries(r).map(([s, i]) => `--${s}: ${i};`).join(" ")} } ${he}` : he, a = _t({
    language: e,
    textDirection: t,
    templateStrings: n,
    mainCSS: o,
    mainJS: Pt
  });
  return Dt.replace(
    /{{\s?(.*?)\s?}}/g,
    (s, i) => a[s] || s
  );
}
const St = (e) => {
  const t = (e == null ? void 0 : e.customProperties) || {}, r = (e == null ? void 0 : e.templateStrings) || {}, n = (e == null ? void 0 : e.language) || "en", o = (e == null ? void 0 : e.textDirection) || "ltr", a = (e == null ? void 0 : e.showHiddenTabs) || !1, s = (e == null ? void 0 : e.excludeByPath) || [], i = e == null ? void 0 : e.excludeByCookieName, u = (e != null && e.pages ? Array.isArray(e.pages) ? e.pages : [e.pages] : []).map((d) => typeof d == "string" ? { url: d, revision: null, refererRegex: null } : {
    url: d.url,
    revision: d.revision || null,
    refererRegex: d.refererRegex || null
  });
  return {
    language: n,
    textDirection: o,
    customProperties: t,
    templateStrings: r,
    showHiddenTabs: a,
    excludeByPath: s,
    excludeByCookieName: i,
    pages: u
  };
};
try {
  self["workbox:core:7.0.0"] && _();
} catch {
}
const It = {
  "invalid-value": ({ paramName: e, validValueDescription: t, value: r }) => {
    if (!e || !t)
      throw new Error("Unexpected input to 'invalid-value' error.");
    return `The '${e}' parameter was given a value with an unexpected value. ${t} Received a value of ${JSON.stringify(r)}.`;
  },
  "not-an-array": ({ moduleName: e, className: t, funcName: r, paramName: n }) => {
    if (!e || !t || !r || !n)
      throw new Error("Unexpected input to 'not-an-array' error.");
    return `The parameter '${n}' passed into '${e}.${t}.${r}()' must be an array.`;
  },
  "incorrect-type": ({ expectedType: e, paramName: t, moduleName: r, className: n, funcName: o }) => {
    if (!e || !t || !r || !o)
      throw new Error("Unexpected input to 'incorrect-type' error.");
    const a = n ? `${n}.` : "";
    return `The parameter '${t}' passed into '${r}.${a}${o}()' must be of type ${e}.`;
  },
  "incorrect-class": ({ expectedClassName: e, paramName: t, moduleName: r, className: n, funcName: o, isReturnValueProblem: a }) => {
    if (!e || !r || !o)
      throw new Error("Unexpected input to 'incorrect-class' error.");
    const s = n ? `${n}.` : "";
    return a ? `The return value from '${r}.${s}${o}()' must be an instance of class ${e}.` : `The parameter '${t}' passed into '${r}.${s}${o}()' must be an instance of class ${e}.`;
  },
  "missing-a-method": ({ expectedMethod: e, paramName: t, moduleName: r, className: n, funcName: o }) => {
    if (!e || !t || !r || !n || !o)
      throw new Error("Unexpected input to 'missing-a-method' error.");
    return `${r}.${n}.${o}() expected the '${t}' parameter to expose a '${e}' method.`;
  },
  "add-to-cache-list-unexpected-type": ({ entry: e }) => `An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(e)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`,
  "add-to-cache-list-conflicting-entries": ({ firstEntry: e, secondEntry: t }) => {
    if (!e || !t)
      throw new Error("Unexpected input to 'add-to-cache-list-duplicate-entries' error.");
    return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${e} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`;
  },
  "plugin-error-request-will-fetch": ({ thrownErrorMessage: e }) => {
    if (!e)
      throw new Error("Unexpected input to 'plugin-error-request-will-fetch', error.");
    return `An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${e}'.`;
  },
  "invalid-cache-name": ({ cacheNameId: e, value: t }) => {
    if (!e)
      throw new Error("Expected a 'cacheNameId' for error 'invalid-cache-name'");
    return `You must provide a name containing at least one character for setCacheDetails({${e}: '...'}). Received a value of '${JSON.stringify(t)}'`;
  },
  "unregister-route-but-not-found-with-method": ({ method: e }) => {
    if (!e)
      throw new Error("Unexpected input to 'unregister-route-but-not-found-with-method' error.");
    return `The route you're trying to unregister was not  previously registered for the method type '${e}'.`;
  },
  "unregister-route-route-not-registered": () => "The route you're trying to unregister was not previously registered.",
  "queue-replay-failed": ({ name: e }) => `Replaying the background sync queue '${e}' failed.`,
  "duplicate-queue-name": ({ name: e }) => `The Queue name '${e}' is already being used. All instances of backgroundSync.Queue must be given unique names.`,
  "expired-test-without-max-age": ({ methodName: e, paramName: t }) => `The '${e}()' method can only be used when the '${t}' is used in the constructor.`,
  "unsupported-route-type": ({ moduleName: e, className: t, funcName: r, paramName: n }) => `The supplied '${n}' parameter was an unsupported type. Please check the docs for ${e}.${t}.${r} for valid input types.`,
  "not-array-of-class": ({ value: e, expectedClass: t, moduleName: r, className: n, funcName: o, paramName: a }) => `The supplied '${a}' parameter must be an array of '${t}' objects. Received '${JSON.stringify(e)},'. Please check the call to ${r}.${n}.${o}() to fix the issue.`,
  "max-entries-or-age-required": ({ moduleName: e, className: t, funcName: r }) => `You must define either config.maxEntries or config.maxAgeSecondsin ${e}.${t}.${r}`,
  "statuses-or-headers-required": ({ moduleName: e, className: t, funcName: r }) => `You must define either config.statuses or config.headersin ${e}.${t}.${r}`,
  "invalid-string": ({ moduleName: e, funcName: t, paramName: r }) => {
    if (!r || !e || !t)
      throw new Error("Unexpected input to 'invalid-string' error.");
    return `When using strings, the '${r}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${e}.${t}() for more info.`;
  },
  "channel-name-required": () => "You must provide a channelName to construct a BroadcastCacheUpdate instance.",
  "invalid-responses-are-same-args": () => "The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.",
  "expire-custom-caches-only": () => "You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.",
  "unit-must-be-bytes": ({ normalizedRangeHeader: e }) => {
    if (!e)
      throw new Error("Unexpected input to 'unit-must-be-bytes' error.");
    return `The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${e}"`;
  },
  "single-range-only": ({ normalizedRangeHeader: e }) => {
    if (!e)
      throw new Error("Unexpected input to 'single-range-only' error.");
    return `Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${e}"`;
  },
  "invalid-range-values": ({ normalizedRangeHeader: e }) => {
    if (!e)
      throw new Error("Unexpected input to 'invalid-range-values' error.");
    return `The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${e}"`;
  },
  "no-range-header": () => "No Range header was found in the Request provided.",
  "range-not-satisfiable": ({ size: e, start: t, end: r }) => `The start (${t}) and end (${r}) values in the Range are not satisfiable by the cached response, which is ${e} bytes.`,
  "attempt-to-cache-non-get-request": ({ url: e, method: t }) => `Unable to cache '${e}' because it is a '${t}' request and only 'GET' requests can be cached.`,
  "cache-put-with-no-response": ({ url: e }) => `There was an attempt to cache '${e}' but the response was not defined.`,
  "no-response": ({ url: e, error: t }) => {
    let r = `The strategy could not generate a response for '${e}'.`;
    return t && (r += ` The underlying error is ${t}.`), r;
  },
  "bad-precaching-response": ({ url: e, status: t }) => `The precaching request for '${e}' failed` + (t ? ` with an HTTP status of ${t}.` : "."),
  "non-precached-url": ({ url: e }) => `createHandlerBoundToURL('${e}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`,
  "add-to-cache-list-conflicting-integrities": ({ url: e }) => `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${e} with different integrity values. Please remove one of them.`,
  "missing-precache-entry": ({ cacheName: e, url: t }) => `Unable to find a precached response in ${e} for ${t}.`,
  "cross-origin-copy-response": ({ origin: e }) => `workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${e}.`,
  "opaque-streams-source": ({ type: e }) => {
    const t = `One of the workbox-streams sources resulted in an '${e}' response.`;
    return e === "opaqueredirect" ? `${t} Please do not use a navigation request that results in a redirect as a source.` : `${t} Please ensure your sources are CORS-enabled.`;
  }
}, Ft = (e, ...t) => {
  let r = e;
  return t.length > 0 && (r += ` :: ${JSON.stringify(t)}`), r;
}, jt = (e, t = {}) => {
  const r = It[e];
  if (!r)
    throw new Error(`Unable to find message for code '${e}'.`);
  return r(t);
}, Vt = process.env.NODE_ENV === "production" ? Ft : jt;
class y extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(t, r) {
    const n = Vt(t, r);
    super(n), this.name = t, this.details = r;
  }
}
const Gt = (e, t) => {
  if (!Array.isArray(e))
    throw new y("not-an-array", t);
}, Jt = (e, t, r) => {
  if (typeof e[t] !== "function")
    throw r.expectedMethod = t, new y("missing-a-method", r);
}, Wt = (e, t, r) => {
  if (typeof e !== t)
    throw r.expectedType = t, new y("incorrect-type", r);
}, Yt = (e, t, r) => {
  if (!(e instanceof t))
    throw r.expectedClassName = t.name, new y("incorrect-class", r);
}, zt = (e, t, r) => {
  if (!t.includes(e))
    throw r.validValueDescription = `Valid values are ${JSON.stringify(t)}.`, new y("invalid-value", r);
}, Kt = (e, t, r) => {
  const n = new y("not-array-of-class", r);
  if (!Array.isArray(e))
    throw n;
  for (const o of e)
    if (!(o instanceof t))
      throw n;
}, g = process.env.NODE_ENV === "production" ? null : {
  hasMethod: Jt,
  isArray: Gt,
  isInstance: Yt,
  isOneOf: zt,
  isType: Wt,
  isArrayOfClass: Kt
}, h = process.env.NODE_ENV === "production" ? null : (() => {
  "__WB_DISABLE_DEV_LOGS" in globalThis || (self.__WB_DISABLE_DEV_LOGS = !1);
  let e = !1;
  const t = {
    debug: "#7f8c8d",
    log: "#2ecc71",
    warn: "#f39c12",
    error: "#c0392b",
    groupCollapsed: "#3498db",
    groupEnd: null
    // No colored prefix on groupEnd
  }, r = function(a, s) {
    if (self.__WB_DISABLE_DEV_LOGS)
      return;
    if (a === "groupCollapsed" && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      console[a](...s);
      return;
    }
    const i = [
      `background: ${t[a]}`,
      "border-radius: 0.5em",
      "color: white",
      "font-weight: bold",
      "padding: 2px 0.5em"
    ], c = e ? [] : ["%cworkbox", i.join(";")];
    console[a](...c, ...s), a === "groupCollapsed" && (e = !0), a === "groupEnd" && (e = !1);
  }, n = {}, o = Object.keys(t);
  for (const a of o) {
    const s = a;
    n[s] = (...i) => {
      r(s, i);
    };
  }
  return n;
})();
try {
  self["workbox:routing:7.0.0"] && _();
} catch {
}
const Ee = "GET", Xt = [
  "DELETE",
  "GET",
  "HEAD",
  "PATCH",
  "POST",
  "PUT"
], S = (e) => e && typeof e == "object" ? (process.env.NODE_ENV !== "production" && g.hasMethod(e, "handle", {
  moduleName: "workbox-routing",
  className: "Route",
  funcName: "constructor",
  paramName: "handler"
}), e) : (process.env.NODE_ENV !== "production" && g.isType(e, "function", {
  moduleName: "workbox-routing",
  className: "Route",
  funcName: "constructor",
  paramName: "handler"
}), { handle: e });
class U {
  /**
   * Constructor for Route class.
   *
   * @param {workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(t, r, n = Ee) {
    process.env.NODE_ENV !== "production" && (g.isType(t, "function", {
      moduleName: "workbox-routing",
      className: "Route",
      funcName: "constructor",
      paramName: "match"
    }), n && g.isOneOf(n, Xt, { paramName: "method" })), this.handler = S(r), this.match = t, this.method = n;
  }
  /**
   *
   * @param {workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */
  setCatchHandler(t) {
    this.catchHandler = S(t);
  }
}
class Qt extends U {
  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * {@link workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(t, r, n) {
    process.env.NODE_ENV !== "production" && g.isInstance(t, RegExp, {
      moduleName: "workbox-routing",
      className: "RegExpRoute",
      funcName: "constructor",
      paramName: "pattern"
    });
    const o = ({ url: a }) => {
      const s = t.exec(a.href);
      if (s) {
        if (a.origin !== location.origin && s.index !== 0) {
          process.env.NODE_ENV !== "production" && h.debug(`The regular expression '${t.toString()}' only partially matched against the cross-origin URL '${a.toString()}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`);
          return;
        }
        return s.slice(1);
      }
    };
    super(o, r, n);
  }
}
const M = (e) => new URL(String(e), location.href).href.replace(new RegExp(`^${location.origin}`), "");
class Zt {
  /**
   * Initializes a new Router.
   */
  constructor() {
    this._routes = /* @__PURE__ */ new Map(), this._defaultHandlerMap = /* @__PURE__ */ new Map();
  }
  /**
   * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */
  get routes() {
    return this._routes;
  }
  /**
   * Adds a fetch event listener to respond to events when a route matches
   * the event's request.
   */
  addFetchListener() {
    self.addEventListener("fetch", (t) => {
      const { request: r } = t, n = this.handleRequest({ request: r, event: t });
      n && t.respondWith(n);
    });
  }
  /**
   * Adds a message event listener for URLs to cache from the window.
   * This is useful to cache resources loaded on the page prior to when the
   * service worker started controlling it.
   *
   * The format of the message data sent from the window should be as follows.
   * Where the `urlsToCache` array may consist of URL strings or an array of
   * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
   *
   * ```
   * {
   *   type: 'CACHE_URLS',
   *   payload: {
   *     urlsToCache: [
   *       './script1.js',
   *       './script2.js',
   *       ['./script3.js', {mode: 'no-cors'}],
   *     ],
   *   },
   * }
   * ```
   */
  addCacheListener() {
    self.addEventListener("message", (t) => {
      if (t.data && t.data.type === "CACHE_URLS") {
        const { payload: r } = t.data;
        process.env.NODE_ENV !== "production" && h.debug("Caching URLs from the window", r.urlsToCache);
        const n = Promise.all(r.urlsToCache.map((o) => {
          typeof o == "string" && (o = [o]);
          const a = new Request(...o);
          return this.handleRequest({ request: a, event: t });
        }));
        t.waitUntil(n), t.ports && t.ports[0] && n.then(() => t.ports[0].postMessage(!0));
      }
    });
  }
  /**
   * Apply the routing rules to a FetchEvent object to get a Response from an
   * appropriate Route's handler.
   *
   * @param {Object} options
   * @param {Request} options.request The request to handle.
   * @param {ExtendableEvent} options.event The event that triggered the
   *     request.
   * @return {Promise<Response>|undefined} A promise is returned if a
   *     registered route can handle the request. If there is no matching
   *     route and there's no `defaultHandler`, `undefined` is returned.
   */
  handleRequest({ request: t, event: r }) {
    process.env.NODE_ENV !== "production" && g.isInstance(t, Request, {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "handleRequest",
      paramName: "options.request"
    });
    const n = new URL(t.url, location.href);
    if (!n.protocol.startsWith("http")) {
      process.env.NODE_ENV !== "production" && h.debug("Workbox Router only supports URLs that start with 'http'.");
      return;
    }
    const o = n.origin === location.origin, { params: a, route: s } = this.findMatchingRoute({
      event: r,
      request: t,
      sameOrigin: o,
      url: n
    });
    let i = s && s.handler;
    const c = [];
    process.env.NODE_ENV !== "production" && i && (c.push(["Found a route to handle this request:", s]), a && c.push([
      "Passing the following params to the route's handler:",
      a
    ]));
    const u = t.method;
    if (!i && this._defaultHandlerMap.has(u) && (process.env.NODE_ENV !== "production" && c.push(`Failed to find a matching route. Falling back to the default handler for ${u}.`), i = this._defaultHandlerMap.get(u)), !i) {
      process.env.NODE_ENV !== "production" && h.debug(`No route found for: ${M(n)}`);
      return;
    }
    process.env.NODE_ENV !== "production" && (h.groupCollapsed(`Router is responding to: ${M(n)}`), c.forEach((p) => {
      Array.isArray(p) ? h.log(...p) : h.log(p);
    }), h.groupEnd());
    let d;
    try {
      d = i.handle({ url: n, request: t, event: r, params: a });
    } catch (p) {
      d = Promise.reject(p);
    }
    const w = s && s.catchHandler;
    return d instanceof Promise && (this._catchHandler || w) && (d = d.catch(async (p) => {
      if (w) {
        process.env.NODE_ENV !== "production" && (h.groupCollapsed(`Error thrown when responding to:  ${M(n)}. Falling back to route's Catch Handler.`), h.error("Error thrown by:", s), h.error(p), h.groupEnd());
        try {
          return await w.handle({ url: n, request: t, event: r, params: a });
        } catch (m) {
          m instanceof Error && (p = m);
        }
      }
      if (this._catchHandler)
        return process.env.NODE_ENV !== "production" && (h.groupCollapsed(`Error thrown when responding to:  ${M(n)}. Falling back to global Catch Handler.`), h.error("Error thrown by:", s), h.error(p), h.groupEnd()), this._catchHandler.handle({ url: n, request: t, event: r });
      throw p;
    })), d;
  }
  /**
   * Checks a request and URL (and optionally an event) against the list of
   * registered routes, and if there's a match, returns the corresponding
   * route along with any params generated by the match.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {boolean} options.sameOrigin The result of comparing `url.origin`
   *     against the current origin.
   * @param {Request} options.request The request to match.
   * @param {Event} options.event The corresponding event.
   * @return {Object} An object with `route` and `params` properties.
   *     They are populated if a matching route was found or `undefined`
   *     otherwise.
   */
  findMatchingRoute({ url: t, sameOrigin: r, request: n, event: o }) {
    const a = this._routes.get(n.method) || [];
    for (const s of a) {
      let i;
      const c = s.match({ url: t, sameOrigin: r, request: n, event: o });
      if (c)
        return process.env.NODE_ENV !== "production" && c instanceof Promise && h.warn(`While routing ${M(t)}, an async matchCallback function was used. Please convert the following route to use a synchronous matchCallback function:`, s), i = c, (Array.isArray(i) && i.length === 0 || c.constructor === Object && // eslint-disable-line
        Object.keys(c).length === 0 || typeof c == "boolean") && (i = void 0), { route: s, params: i };
    }
    return {};
  }
  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to associate with this
   * default handler. Each method has its own default.
   */
  setDefaultHandler(t, r = Ee) {
    this._defaultHandlerMap.set(r, S(t));
  }
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(t) {
    this._catchHandler = S(t);
  }
  /**
   * Registers a route with the router.
   *
   * @param {workbox-routing.Route} route The route to register.
   */
  registerRoute(t) {
    process.env.NODE_ENV !== "production" && (g.isType(t, "object", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route"
    }), g.hasMethod(t, "match", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route"
    }), g.isType(t.handler, "object", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route"
    }), g.hasMethod(t.handler, "handle", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route.handler"
    }), g.isType(t.method, "string", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route.method"
    })), this._routes.has(t.method) || this._routes.set(t.method, []), this._routes.get(t.method).push(t);
  }
  /**
   * Unregisters a route with the router.
   *
   * @param {workbox-routing.Route} route The route to unregister.
   */
  unregisterRoute(t) {
    if (!this._routes.has(t.method))
      throw new y("unregister-route-but-not-found-with-method", {
        method: t.method
      });
    const r = this._routes.get(t.method).indexOf(t);
    if (r > -1)
      this._routes.get(t.method).splice(r, 1);
    else
      throw new y("unregister-route-route-not-registered");
  }
}
let L;
const er = () => (L || (L = new Zt(), L.addFetchListener(), L.addCacheListener()), L);
function T(e, t, r) {
  let n;
  if (typeof e == "string") {
    const a = new URL(e, location.href);
    if (process.env.NODE_ENV !== "production") {
      if (!(e.startsWith("/") || e.startsWith("http")))
        throw new y("invalid-string", {
          moduleName: "workbox-routing",
          funcName: "registerRoute",
          paramName: "capture"
        });
      const i = e.startsWith("http") ? a.pathname : e, c = "[*:?+]";
      new RegExp(`${c}`).exec(i) && h.debug(`The '$capture' parameter contains an Express-style wildcard character (${c}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`);
    }
    const s = ({ url: i }) => (process.env.NODE_ENV !== "production" && i.pathname === a.pathname && i.origin !== a.origin && h.debug(`${e} only partially matches the cross-origin URL ${i.toString()}. This route will only handle cross-origin requests if they match the entire URL.`), i.href === a.href);
    n = new U(s, t, r);
  } else if (e instanceof RegExp)
    n = new Qt(e, t, r);
  else if (typeof e == "function")
    n = new U(e, t, r);
  else if (e instanceof U)
    n = e;
  else
    throw new y("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture"
    });
  return er().registerRoute(n), n;
}
function tr(e) {
  return new Uint8Array(
    atob(e).split("").map((t) => t.charCodeAt(0))
  );
}
function rr(e) {
  const t = e.length / 2, r = new Uint8Array(t);
  for (let n = 0; n < t; n++)
    r[n] = parseInt(e.slice(n * 2, n * 2 + 2), 16);
  return r;
}
async function nr(e, t, r) {
  const n = Object.entries(e).sort(([i], [c]) => i.localeCompare(c)), o = new TextEncoder().encode(JSON.stringify(n)), a = await or(r), s = rr(t);
  return crypto.subtle.verify(
    {
      name: "ECDSA",
      hash: { name: "SHA-256" }
    },
    a,
    s,
    o
  );
}
async function or(e) {
  const t = tr(e);
  return crypto.subtle.importKey(
    "spki",
    t,
    {
      name: "ECDSA",
      namedCurve: "P-256"
    },
    !0,
    ["verify"]
  );
}
const Ar = async (e = {}) => {
  const { serviceWorkerController: t } = e;
  if (!t)
    throw new Error("You must pass a serviceWorkerController plugin to registerMirroring");
  t.modules.push("mirroring");
  const r = new Z(`${l}-mirroring`, {
    maxEntries: 20
  }), n = ({ event: s }) => new URL(s.request.url).pathname === `/${l}/add-mirror/`, o = ({ event: s }) => new URL(s.request.url).pathname === `/${l}/mirror-status/`, a = ({ event: s }) => new URL(s.request.url).pathname === `/${l}/mirror-retry/`;
  t.logger("(mirroring) Module registered"), t.addInstallHandler(ar), t.addRoute(n, mr, "GET"), t.logger(`(mirroring) GET "/${l}/add-mirror/" endpoint registered.`), t.addRoute(o, dr, "GET"), t.logger(`(mirroring) GET "/${l}/mirror-status/" endpoint registered.`), t.addRoute(a, hr, "GET"), t.logger(`(mirroring) GET "/${l}/mirror-retry/" endpoint registered.`), t.addRoute(ir, (s) => lr({ ...s, expirationManager: r }), "GET"), t.addRoute(cr, ur, "GET");
};
async function ar({ serviceWorkerController: e }) {
  const { mirroring: t } = await e.getConfiguration(), { urls: r } = t, n = r.map((o) => {
    const a = Date.now();
    return {
      url: o.url,
      lastModified: a,
      status: b,
      isPrimary: o.isPrimary
    };
  });
  return F(n);
}
const sr = (e) => {
  var a, s, i, c;
  const t = self.location.origin, r = (e == null ? void 0 : e.urls) || [], n = [
    {
      url: t,
      isPrimary: !0
    },
    ...r.map((u) => ({
      url: u,
      isPrimary: !1
    }))
  ], o = e != null && e.strategy && K.includes(e.strategy) ? e.strategy : "network-only";
  if (e != null && e.challenge) {
    if (!((a = e == null ? void 0 : e.challenge) != null && a.publicKey))
      throw new Error("[mirroring]: challenge.publicKey is required when challenge is configured");
    if (!((s = e == null ? void 0 : e.challenge) != null && s.path))
      throw new Error("[mirroring]: challenge.path is required when challenge is configured");
    if ((i = e == null ? void 0 : e.challenge) != null && i.headerFormat && !X[e.challenge.headerFormat])
      throw new Error(
        `[mirroring]: unknown challenge.headerFormat "${e.challenge.headerFormat}", expected one of: ${Object.keys(X).join(", ")}`
      );
    if ((c = e == null ? void 0 : e.challenge) != null && c.context && /[\n\r]/.test(e.challenge.context))
      throw new Error("[mirroring]: challenge.context must not contain newlines");
  }
  return {
    urls: n,
    excludeByPath: (e == null ? void 0 : e.excludeByPath) || [],
    excludeByCookieName: e == null ? void 0 : e.excludeByCookieName,
    timeout: (e == null ? void 0 : e.timeout) || 3e3,
    strategy: o,
    setRepressHeaders: (e == null ? void 0 : e.setRepressHeaders) || !1,
    ...(e == null ? void 0 : e.challenge) && {
      challenge: {
        ...e.challenge,
        headerFormat: e.challenge.headerFormat || st,
        context: e.challenge.context || ye
      }
    }
  };
};
function ir({ event: e }) {
  return e.request.destination === "document";
}
function cr({ event: e }) {
  const t = new URL(e.request.url).pathname;
  return e.request.method === "GET" && new URL(e.request.url).origin === new URL(self.registration.scope).origin && !t.startsWith(`/${l}`);
}
async function lr({ event: e, serviceWorkerController: t, expirationManager: r }) {
  const n = await t.getConfiguration(), { mirroring: o } = n, { strategy: a } = o, { request: s } = e;
  if (await re({ request: s, configuration: o }))
    return fetch(s);
  const i = ge[a];
  return i({ event: e, cacheName: `${l}-mirroring`, fetcher: (c) => v(c, t), expirationManager: r });
}
async function ur({ event: e, serviceWorkerController: t }) {
  const { request: r } = e, { mirroring: n } = await t.getConfiguration();
  return await re({ request: r, configuration: n }) ? fetch(r) : v(r, t).catch(async () => {
    t.logger(`(mirroring) All mirrors failed. Reverting to offline fallback handling for URL: ${r.url}`);
    const o = await t.handlerDidError({ event: e, request: r });
    if (o)
      return o;
  });
}
async function dr() {
  let e = "unknown";
  const t = await D(), r = t.find((a) => a.isPrimary && a.status === b), n = t.find((a) => a.status === b), o = t.every((a) => a.status === R);
  return r ? e = "up" : n ? e = "low" : o && (e = "down"), new Response(JSON.stringify({
    status: e,
    mirrors: t
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
async function hr({ event: e, serviceWorkerController: t }) {
  const n = new URL(e.request.url).searchParams.get("url");
  if (!n)
    return new Response(JSON.stringify({ error: "Missing url parameter" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  const { mirroring: o } = await t.getConfiguration();
  return rt({ url: n, request: e.request, mirroringConfig: o }).then(() => new Response(JSON.stringify({ status: b }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  })).catch(() => new Response(JSON.stringify({ status: R }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  }));
}
async function mr({ event: e, serviceWorkerController: t }) {
  try {
    const { publicKey: r } = await t.getConfiguration(), { signature: n, ...o } = Object.fromEntries(
      new URL(e.request.url).searchParams.entries()
    );
    if (!n)
      return new Response(null, {
        status: 400,
        statusText: "Bad Request: Missing signature"
      });
    if (!o.url)
      return new Response(null, {
        status: 400,
        statusText: "Bad Request: Missing URL parameter"
      });
    if (!await nr(
      o,
      n,
      r
    ))
      return new Response(null, {
        status: 401,
        statusText: "Unauthorized: Invalid signature"
      });
    const s = await D();
    return s.some((i) => i.url === o.url) ? new Response(null, {
      status: 409,
      statusText: "Conflict: Mirror already exists"
    }) : (s.push({
      lastModified: Date.now(),
      status: b,
      isPrimary: !1,
      ...o
    }), await F(s), new Response(null, {
      status: 302,
      headers: { Location: "/" }
    }));
  } catch {
    return new Response(null, {
      status: 500,
      statusText: "Internal Server Error"
    });
  }
}
const W = /* @__PURE__ */ new Map(), Mr = (e = {}) => {
  const { serviceWorkerController: t } = e;
  if (!t)
    throw new Error("You must pass a serviceWorkerController plugin to registerCachingStrategies");
  t.modules.push("caching-strategies"), t.addActivateHandler(pr), t.logger("(caching-strategies) Module registered."), t.addRoute(fr, gr, "GET");
};
async function pr({ serviceWorkerController: e }) {
  const t = await e.getConfiguration(), { cachingStrategies: r } = t, n = await caches.keys(), o = new Set(r.map(
    ({ urlPattern: s }) => `${l}-caching-strategies--${s}`
  )), a = n.filter(
    (s) => s.startsWith(`${l}-caching-strategies--`) && !o.has(s)
  );
  await Promise.all(a.map((s) => caches.delete(s)));
}
function fr({ event: e, configuration: t }) {
  const { cachingStrategies: r } = t;
  return Re(r, e.request.url);
}
async function gr({ event: e, serviceWorkerController: t }) {
  const r = await t.getConfiguration(), { cachingStrategies: n } = r, { strategy: o, urlPattern: a } = Re(n, e.request.url), i = t.modules.includes("mirroring") ? (c) => v(c, t) : fetch;
  return W.has(a) || W.set(a, new Z(`${l}-caching-strategies--${a}`, {
    maxEntries: 20
  })), ge[o]({
    cacheName: `${l}-caching-strategies--${a}`,
    event: e,
    expirationManager: W.get(a),
    fetcher: i
  });
}
function Re(e, t) {
  return e.find(({ urlPattern: r }) => new RegExp(r).test(t));
}
function br(e) {
  return e ? e.map(({ urlPattern: t, strategy: r }) => {
    try {
      new RegExp(t);
    } catch {
      throw new Error(`[caching-strategies]: Invalid regex for URL pattern: ${t}`);
    }
    if (!K.includes(r))
      throw new Error(`[caching-strategies]: Invalid strategy: ${r}, must be one of: ${K.join(", ")}`);
    return {
      urlPattern: t,
      strategy: r
    };
  }) : (console.warn("[caching-strategies]: No configuration provided"), []);
}
const wr = "configuration", yr = 24 * 60 * 60 * 1e3;
async function I({ configurationFilePath: e, serviceWorkerController: t }) {
  const r = new Request(e, { cache: "no-store" });
  return t.fetcher(r).then(async (n) => {
    if (n.ok) {
      const o = await n.json();
      return ve({ configuration: o, serviceWorkerController: t });
    }
  }).catch((n) => {
    console.error("Failed to fetch configuration:", n);
  });
}
async function ve({ configuration: e, serviceWorkerController: t }) {
  const { modules: r } = t;
  return caches.open(wr).then(async (n) => {
    const o = {
      ...e,
      ...r.includes("bookmark") && { bookmark: wt() },
      ...r.includes("fallback-pages") && { fallbackPages: St(e.fallbackPages) },
      ...r.includes("fallback-image") && { fallbackImage: Lt() },
      ...r.includes("offline-assets") && { offlineAssets: At(e.offlineAssets) },
      ...r.includes("content-bundles") && { contentBundles: Rt(e.contentBundles) },
      ...r.includes("caching-strategies") && { cachingStrategies: br(e.cachingStrategies) },
      ...r.includes("mirroring") && { mirroring: sr(e.mirroring) },
      debugMode: !0,
      publicKey: e.publicKey || ""
    }, a = new Response(
      JSON.stringify(o),
      {
        headers: {
          "Content-Type": "application/json",
          "Last-Modified": (/* @__PURE__ */ new Date()).toUTCString()
        }
      }
    );
    return await n.put("/configuration.json", a.clone()), t.setConfiguration(o), a;
  });
}
async function kr(e) {
  const t = await caches.open("configuration").then((o) => o.match("/configuration.json")).then((o) => o ? o.headers.get("Last-Modified") : null);
  if (!t)
    return I({ configurationFilePath: this.configurationFilePath, serviceWorkerController: e });
  const n = new Date(t).getTime() + yr;
  return Date.now() > n && (e.logger("(service-worker-controller) Configuration expired, fetching new configuration."), await I({ configurationFilePath: e.configurationFilePath, serviceWorkerController: e }).then(() => e.onInstall()).then(() => e.onActivate())), Promise.resolve();
}
async function me(e, t) {
  for (const [r, n] of e.entries())
    if (await t(n, r, e))
      return n;
}
var k;
class xr {
  constructor() {
    ae(this, k, {});
    this.configurationFilePath = new URL(self.location).searchParams.get("configuration"), this.modules = [], this.installHandlers = [], this.activateHandlers = [], this.fallbackHandlers = [], this.routes = [], this.init();
  }
  fetcher(t) {
    return (this.modules.includes("mirroring") && self.serviceWorker.state === "activated" ? (n) => v(n, this) : fetch)(t);
  }
  async getConfiguration() {
    return Object.entries(q(this, k)).length ? q(this, k) : caches.open("configuration").then((t) => t.match("/configuration.json")).then(async (t) => t ? (O(this, k, await t.json()), q(this, k)) : Promise.reject(new Error("Configuration not found")));
  }
  setConfiguration(t) {
    O(this, k, t);
  }
  addInstallHandler(t) {
    this.installHandlers.push(t);
  }
  addActivateHandler(t) {
    this.activateHandlers.push(t);
  }
  addRoute(t, r, n = "GET") {
    this.routes.push({ matcher: t, handler: r, method: n });
  }
  addFallbackHandler(t, r) {
    this.fallbackHandlers.push({ matcher: t, handler: r });
  }
  async handlerDidError(t) {
    const r = await this.getConfiguration(), n = await me(this.fallbackHandlers, async ({ matcher: o }) => await o({ event: t, configuration: r }));
    return n ? n.handler({ event: t, serviceWorkerController: this }) : Response.error();
  }
  async cleanupUnusedCaches() {
    const r = (await caches.keys()).filter(
      (n) => n.startsWith(`${l}-`) && !this.modules.some((o) => n.slice(`${l}-`.length).startsWith(o))
    );
    await Promise.all(r.map((n) => caches.delete(n))), r.length > 0 && this.logger(`(service-worker-controller) Cleaned up ${r.length} unused cache(s): ${r.join(", ")}`);
  }
  onInstall() {
    return Promise.all(
      this.installHandlers.map((t) => t({
        serviceWorkerController: this
      }))
    );
  }
  onActivate() {
    return Promise.all([
      this.cleanupUnusedCaches(),
      ...this.activateHandlers.map((t) => t({
        serviceWorkerController: this
      }))
    ]);
  }
  async init() {
    self.serviceWorker.state === "activated" && kr(this), self.addEventListener("install", (t) => {
      this.configurationFilePath ? t.waitUntil(
        I({ configurationFilePath: this.configurationFilePath, serviceWorkerController: this }).then(() => this.onInstall()).then(() => self.skipWaiting())
      ) : t.waitUntil(
        this.onInstall().then(() => self.skipWaiting())
      );
    }), self.addEventListener("activate", (t) => {
      t.waitUntil(
        this.onActivate().then(() => self.clients.claim())
      );
    }), T(
      `/${l}/configuration/`,
      async ({ request: t }) => {
        try {
          const r = await t.json(), n = await ve({ configuration: r, serviceWorkerController: this }).then((o) => o.json());
          return await this.onInstall().then(this.onActivate()), O(this, k, n), new Response(null, {
            status: 200,
            statusText: "Configuration saved."
          });
        } catch {
          return new Response(null, {
            status: 500,
            statusText: "Failed to save configuration."
          });
        }
      },
      "PUT"
    ), this.logger(`(service-worker-controller) PUT "/${l}/configuration/" endpoint registered.`), T(
      `/${l}/configuration/update/`,
      async () => I({ configurationFilePath: this.configurationFilePath, serviceWorkerController: this }).then(() => this.onInstall()).then(() => this.onActivate()).then(() => new Response(null, {
        status: 200,
        statusText: "Configuration updated."
      })).catch((t) => (console.error("Failed to update configuration: ", t), new Response(null, {
        status: 500,
        statusText: "Failed to update configuration."
      }))),
      "GET"
    ), this.logger(`(service-worker-controller) GET "/${l}/configuration/update/" endpoint registered.`), T(() => !0, this.routeHandler.bind(this), "GET"), T(() => !0, this.routeHandler.bind(this), "POST"), T(() => !0, this.routeHandler.bind(this), "DELETE"), T(() => !0, this.routeHandler.bind(this), "PUT"), T(() => !0, this.routeHandler.bind(this), "PATCH"), T(() => !0, this.routeHandler.bind(this), "HEAD");
  }
  async routeHandler({ event: t }) {
    const r = await this.getConfiguration(), n = await me(this.routes, async ({ matcher: o, method: a }) => await o({ event: t, configuration: r }) && a === t.request.method);
    return n ? n.handler({ event: t, serviceWorkerController: this }).catch(() => this.handlerDidError(t)) : fetch(t.request).catch(() => this.handlerDidError(t));
  }
  /**
   * Logs a message to the console if the configuration.debugMode flag is set to true.
   *
   * @param {string} message - The message to log.
   */
  async logger(t) {
    const { debugMode: r } = await this.getConfiguration().catch(() => !1);
    r && console.info(`[451 Tools] ${t}`);
  }
}
k = new WeakMap();
const Lr = () => new xr();
export {
  Rr as registerBookmarkApi,
  Mr as registerCachingStrategies,
  vr as registerContentBundles,
  Cr as registerFallbackImage,
  Nr as registerFallbackPages,
  Ar as registerMirroring,
  $r as registerOfflineAssets,
  Lr as registerServiceWorkerController
};
