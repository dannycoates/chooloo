var liner = (function(e) {
  function r(n) {
    if (t[n]) return t[n].exports;
    var a = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  var t = {};
  return (r.m = e), (r.c = t), (r.i = function(e) {
    return e;
  }), (r.d = function(e, t, n) {
    r.o(e, t) ||
      Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: n });
  }), (r.n = function(e) {
    var t =
      e && e.__esModule
        ? function() {
            return e.default;
          }
        : function() {
            return e;
          };
    return r.d(t, 'a', t), t;
  }), (r.o = function(e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }), (r.p = ''), r((r.s = 16));
})([
  function(e, r, t) {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 }), function(e) {
      function n(e) {
        for (var r = [], t = 1; t < arguments.length; t++)
          r[t - 1] = arguments[t];
        for (var n, a = e, o = /[^%](%\d+)/g, i = []; (n = o.exec(a)); )
          i.push({ arg: n[1], index: n.index });
        for (var s = i.length - 1; s >= 0; s--) {
          var c = i[s],
            u = c.arg.substring(1),
            h = c.index + 1;
          a = a.substring(0, h) + arguments[+u] + a.substring(h + 1 + u.length);
        }
        return (a = a.replace('%%', '%'));
      }
      function a(e) {
        var r;
        (r = 'string' == typeof e ? { name: e } : e), h.checkAlgorithm(r);
        var t = e;
        return t.hash && (t.hash = a(t.hash)), r;
      }
      function o(e, r) {
        if (!e)
          throw new s("Parameter '" + r + "' is required and cant be empty");
        if ('undefined' != typeof Buffer && Buffer.isBuffer(e))
          return new Uint8Array(e);
        if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer);
        if (e instanceof ArrayBuffer) return new Uint8Array(e);
        throw new s(
          "Incoming parameter '" +
            r +
            "' has wrong data type. Must be ArrayBufferView or ArrayBuffer"
        );
      }
      t.d(r, 'WebCryptoError', function() {
        return s;
      }), t.d(r, 'AlgorithmError', function() {
        return c;
      }), t.d(r, 'CryptoKeyError', function() {
        return u;
      }), t.d(r, 'PrepareAlgorithm', function() {
        return a;
      }), t.d(r, 'PrepareData', function() {
        return o;
      }), t.d(r, 'BaseCrypto', function() {
        return h;
      }), t.d(r, 'AlgorithmNames', function() {
        return p;
      }), t.d(r, 'Base64Url', function() {
        return l;
      }), t.d(r, 'SubtleCrypto', function() {
        return W;
      }), t.d(r, 'Aes', function() {
        return m;
      }), t.d(r, 'AesAlgorithmError', function() {
        return A;
      }), t.d(r, 'AesWrapKey', function() {
        return w;
      }), t.d(r, 'AesEncrypt', function() {
        return v;
      }), t.d(r, 'AesECB', function() {
        return g;
      }), t.d(r, 'AesCBC', function() {
        return C;
      }), t.d(r, 'AesCTR', function() {
        return d;
      }), t.d(r, 'AesGCM', function() {
        return E;
      }), t.d(r, 'AesKW', function() {
        return P;
      }), t.d(r, 'RsaKeyGenParamsError', function() {
        return N;
      }), t.d(r, 'RsaHashedImportParamsError', function() {
        return G;
      }), t.d(r, 'Rsa', function() {
        return M;
      }), t.d(r, 'RsaSSA', function() {
        return B;
      }), t.d(r, 'RsaPSSParamsError', function() {
        return T;
      }), t.d(r, 'RsaPSS', function() {
        return D;
      }), t.d(r, 'RsaOAEPParamsError', function() {
        return x;
      }), t.d(r, 'RsaOAEP', function() {
        return H;
      }), t.d(r, 'EcKeyGenParamsError', function() {
        return S;
      }), t.d(r, 'Ec', function() {
        return _;
      }), t.d(r, 'EcAlgorithmError', function() {
        return U;
      }), t.d(r, 'EcDSA', function() {
        return L;
      }), t.d(r, 'EcDH', function() {
        return R;
      }), t.d(r, 'ShaAlgorithms', function() {
        return k;
      }), t.d(r, 'Sha', function() {
        return b;
      });
      var i = t(6),
        s = (function(e) {
          function r(r) {
            for (var t = [], a = 1; a < arguments.length; a++)
              t[a - 1] = arguments[a];
            var o = e.call(this) || this;
            (o.code = 0), (o.message = n.apply(void 0, [r].concat(t)));
            var i = new Error(o.message);
            return (i.name = o.constructor.name), (o.stack = i.stack), o;
          }
          return t.i(i.a)(r, e), r;
        })(Error);
      s.NOT_SUPPORTED = 'Method is not supported';
      var c = (function(e) {
        function r() {
          var r = (null !== e && e.apply(this, arguments)) || this;
          return (r.code = 1), r;
        }
        return t.i(i.a)(r, e), r;
      })(s);
      (c.PARAM_REQUIRED =
        "Algorithm hasn't got required paramter '%1'"), (c.PARAM_WRONG_TYPE =
        "Algorithm has got wrong type for paramter '%1'. Must be %2"), (c.PARAM_WRONG_VALUE =
        "Algorithm has got wrong value for paramter '%1'. Must be %2"), (c.WRONG_ALG_NAME =
        "Algorithm has got wrong name '%1'. Must be '%2'"), (c.UNSUPPORTED_ALGORITHM =
        "Algorithm '%1' is not supported"), (c.WRONG_USAGE =
        "Algorithm doesn't support key usage '%1'");
      var u = (function(e) {
        function r() {
          var r = (null !== e && e.apply(this, arguments)) || this;
          return (r.code = 3), r;
        }
        return t.i(i.a)(r, e), r;
      })(s);
      (u.EMPTY_KEY = 'CryptoKey is empty'), (u.WRONG_KEY_ALG =
        "CryptoKey has wrong algorithm '%1'. Must be '%2'"), (u.WRONG_KEY_TYPE =
        "CryptoKey has wrong type '%1'. Must be '%2'"), (u.WRONG_KEY_USAGE =
        "CryptoKey has wrong key usage. Must be '%1'"), (u.NOT_EXTRACTABLE =
        'CryptoKey is not extractable'), (u.WRONG_FORMAT =
        "CryptoKey has '%1' type. It can be used with '%2' format"), (u.UNKNOWN_FORMAT =
        "Unknown format in use '%1'. Must be one of 'raw', 'pkcs8', 'spki'  or 'jwk'"), (u.ALLOWED_FORMAT =
        "Wrong format value '%1'. Must be %2");
      var h = (function() {
          function e() {}
          return (e.checkAlgorithm = function(e) {
            if ('object' != typeof e)
              throw new TypeError('Wrong algorithm data type. Must be Object');
            if (!('name' in e)) throw new c(c.PARAM_REQUIRED, 'name');
          }), (e.checkAlgorithmParams = function(e) {
            this.checkAlgorithm(e);
          }), (e.checkKey = function(e, r, t, n) {
            if ((void 0 === t && (t = null), void 0 === n && (n = null), !e))
              throw new u(u.EMPTY_KEY);
            var a = e.algorithm;
            if (
              (
                this.checkAlgorithm(a),
                r && a.name.toUpperCase() !== r.toUpperCase()
              )
            )
              throw new u(u.WRONG_KEY_ALG, a.name, r);
            if (t && (!e.type || e.type.toUpperCase() !== t.toUpperCase()))
              throw new u(u.WRONG_KEY_TYPE, e.type, t);
            if (
              n &&
              !e.usages.some(function(e) {
                return n.toUpperCase() === e.toUpperCase();
              })
            )
              throw new u(u.WRONG_KEY_USAGE, n);
          }), (e.checkWrappedKey = function(e) {
            if (!e.extractable) throw new u(u.NOT_EXTRACTABLE);
          }), (e.checkKeyUsages = function(e) {
            if (!e || !e.length)
              throw new s("Parameter 'keyUsages' cannot be empty.");
          }), (e.checkFormat = function(e, r) {
            switch (e.toLowerCase()) {
              case 'raw':
                if (
                  r &&
                  'secret' !== r.toLowerCase() &&
                  r &&
                  'public' !== r.toLowerCase()
                )
                  throw new u(u.WRONG_FORMAT, r, 'raw');
                break;
              case 'pkcs8':
                if (r && 'private' !== r.toLowerCase())
                  throw new u(u.WRONG_FORMAT, r, 'pkcs8');
                break;
              case 'spki':
                if (r && 'public' !== r.toLowerCase())
                  throw new u(u.WRONG_FORMAT, r, 'spki');
                break;
              case 'jwk':
                break;
              default:
                throw new u(u.UNKNOWN_FORMAT, e);
            }
          }), (e.generateKey = function(e, r, t) {
            return new Promise(function(e, r) {
              throw new s(s.NOT_SUPPORTED);
            });
          }), (e.digest = function(e, r) {
            return new Promise(function(e, r) {
              throw new s(s.NOT_SUPPORTED);
            });
          }), (e.sign = function(e, r, t) {
            return new Promise(function(e, r) {
              throw new s(s.NOT_SUPPORTED);
            });
          }), (e.verify = function(e, r, t, n) {
            return new Promise(function(e, r) {
              throw new s(s.NOT_SUPPORTED);
            });
          }), (e.encrypt = function(e, r, t) {
            return new Promise(function(e, r) {
              throw new s(s.NOT_SUPPORTED);
            });
          }), (e.decrypt = function(e, r, t) {
            return new Promise(function(e, r) {
              throw new s(s.NOT_SUPPORTED);
            });
          }), (e.deriveBits = function(e, r, t) {
            return new Promise(function(e, r) {
              throw new s(s.NOT_SUPPORTED);
            });
          }), (e.deriveKey = function(e, r, t, n, a) {
            return new Promise(function(e, r) {
              throw new s(s.NOT_SUPPORTED);
            });
          }), (e.exportKey = function(e, r) {
            return new Promise(function(e, r) {
              throw new s(s.NOT_SUPPORTED);
            });
          }), (e.importKey = function(e, r, t, n, a) {
            return new Promise(function(e, r) {
              throw new s(s.NOT_SUPPORTED);
            });
          }), (e.wrapKey = function(e, r, t, n) {
            return new Promise(function(e, r) {
              throw new s(s.NOT_SUPPORTED);
            });
          }), (e.unwrapKey = function(e, r, t, n, a, o, i) {
            return new Promise(function(e, r) {
              throw new s(s.NOT_SUPPORTED);
            });
          }), e;
        })(),
        p = {
          RsaSSA: 'RSASSA-PKCS1-v1_5',
          RsaPSS: 'RSA-PSS',
          RsaOAEP: 'RSA-OAEP',
          AesECB: 'AES-ECB',
          AesCTR: 'AES-CTR',
          AesCMAC: 'AES-CMAC',
          AesGCM: 'AES-GCM',
          AesCBC: 'AES-CBC',
          AesKW: 'AES-KW',
          Sha1: 'SHA-1',
          Sha256: 'SHA-256',
          Sha384: 'SHA-384',
          Sha512: 'SHA-512',
          EcDSA: 'ECDSA',
          EcDH: 'ECDH',
          Hmac: 'HMAC',
          Pbkdf2: 'PBKDF2'
        };
      if ('undefined' == typeof self) {
        var f = e;
        (f.btoa = function(e) {
          return new Buffer(e, 'binary').toString('base64');
        }), (f.atob = function(e) {
          return new Buffer(e, 'base64').toString('binary');
        });
      }
      var l = (function() {
          function e() {}
          return (e.encode = function(e) {
            var r = this.buffer2string(e);
            return btoa(r)
              .replace(/=/g, '')
              .replace(/\+/g, '-')
              .replace(/\//g, '_');
          }), (e.decode = function(e) {
            for (; e.length % 4; ) e += '=';
            var r = e.replace(/\-/g, '+').replace(/_/g, '/');
            return this.string2buffer(atob(r));
          }), (e.buffer2string = function(e) {
            for (var r = '', t = e.length, n = 0; n < t; n++)
              r += String.fromCharCode(e[n]);
            return r;
          }), (e.string2buffer = function(e) {
            for (
              var r = new Uint8Array(e.length), t = e.length, n = 0;
              n < t;
              n++
            )
              r[n] = e.charCodeAt(n);
            return r;
          }), e;
        })(),
        y = (function(e) {
          function r() {
            var r = (null !== e && e.apply(this, arguments)) || this;
            return (r.code = 7), r;
          }
          return t.i(i.a)(r, e), r;
        })(c),
        m = (function(e) {
          function r() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return t.i(i.a)(r, e), (r.checkKeyUsages = function(r) {
            var t = this;
            e.checkKeyUsages.call(this, r);
            var n = r.filter(function(e) {
              return -1 === t.KEY_USAGES.indexOf(e);
            });
            if (n.length) throw new c(c.WRONG_USAGE, n.join(', '));
          }), (r.checkAlgorithm = function(e) {
            if (e.name.toUpperCase() !== this.ALG_NAME.toUpperCase())
              throw new c(c.WRONG_ALG_NAME, e.name, this.ALG_NAME);
          }), (r.checkKeyGenParams = function(e) {
            switch (e.length) {
              case 128:
              case 192:
              case 256:
                break;
              default:
                throw new y(y.PARAM_WRONG_VALUE, 'length', '128, 192 or 256');
            }
          }), (r.generateKey = function(e, r, t) {
            var n = this;
            return new Promise(function(r, a) {
              n.checkAlgorithm(
                e
              ), n.checkKeyGenParams(e), n.checkKeyUsages(t), r(void 0);
            });
          }), (r.exportKey = function(e, r) {
            var t = this;
            return new Promise(function(n, a) {
              t.checkKey(r, t.ALG_NAME), t.checkFormat(e, r.type), n(void 0);
            });
          }), (r.importKey = function(e, r, t, n, a) {
            var o = this;
            return new Promise(function(r, n) {
              if (
                (
                  o.checkAlgorithm(t),
                  o.checkFormat(e),
                  'raw' !== e.toLowerCase() && 'jwk' !== e.toLowerCase()
                )
              )
                throw new u(u.ALLOWED_FORMAT, e, "'jwk' or 'raw'");
              o.checkKeyUsages(a), r(void 0);
            });
          }), r;
        })(h);
      (m.ALG_NAME = ''), (m.KEY_USAGES = []);
      var A = (function(e) {
          function r() {
            var r = (null !== e && e.apply(this, arguments)) || this;
            return (r.code = 8), r;
          }
          return t.i(i.a)(r, e), r;
        })(c),
        w = (function(e) {
          function r() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return t.i(i.a)(r, e), (r.wrapKey = function(e, r, t, n) {
            var a = this;
            return new Promise(function(o, i) {
              a.checkAlgorithmParams(
                n
              ), a.checkKey(t, a.ALG_NAME, 'secret', 'wrapKey'), a.checkWrappedKey(r), a.checkFormat(e, r.type), o(void 0);
            });
          }), (r.unwrapKey = function(e, r, t, n, a, o, i) {
            var s = this;
            return new Promise(function(r, a) {
              s.checkAlgorithmParams(
                n
              ), s.checkKey(t, s.ALG_NAME, 'secret', 'unwrapKey'), s.checkFormat(e), r(void 0);
            });
          }), r;
        })(m),
        v = (function(e) {
          function r() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return t.i(i.a)(r, e), (r.encrypt = function(e, r, t) {
            var n = this;
            return new Promise(function(t, a) {
              n.checkAlgorithmParams(
                e
              ), n.checkKey(r, n.ALG_NAME, 'secret', 'encrypt'), t(void 0);
            });
          }), (r.decrypt = function(e, r, t) {
            var n = this;
            return new Promise(function(t, a) {
              n.checkAlgorithmParams(
                e
              ), n.checkKey(r, n.ALG_NAME, 'secret', 'decrypt'), t(void 0);
            });
          }), r;
        })(w);
      v.KEY_USAGES = ['encrypt', 'decrypt', 'wrapKey', 'unwrapKey'];
      var g = (function(e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return t.i(i.a)(r, e), r;
      })(v);
      g.ALG_NAME = p.AesECB;
      var C = (function(e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return t.i(i.a)(r, e), (r.checkAlgorithmParams = function(e) {
          if ((this.checkAlgorithm(e), !e.iv))
            throw new A(A.PARAM_REQUIRED, 'iv');
          if (!(ArrayBuffer.isView(e.iv) || e.iv instanceof ArrayBuffer))
            throw new A(
              A.PARAM_WRONG_TYPE,
              'iv',
              'ArrayBufferView or ArrayBuffer'
            );
          if (16 !== e.iv.byteLength)
            throw new A(
              A.PARAM_WRONG_VALUE,
              'iv',
              'ArrayBufferView or ArrayBuffer with size 16'
            );
        }), r;
      })(v);
      C.ALG_NAME = p.AesCBC;
      var d = (function(e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return t.i(i.a)(r, e), (r.checkAlgorithmParams = function(e) {
          if (
            (
              this.checkAlgorithm(e),
              !e.counter ||
                !(
                  ArrayBuffer.isView(e.counter) ||
                  e.counter instanceof ArrayBuffer
                )
            )
          )
            throw new A(
              A.PARAM_WRONG_TYPE,
              'counter',
              'ArrayBufferView or ArrayBuffer'
            );
          if (16 !== e.counter.byteLength)
            throw new A(
              A.PARAM_WRONG_VALUE,
              'counter',
              'ArrayBufferView or ArrayBuffer with size 16'
            );
          if (!(e.length > 0 && e.length <= 128))
            throw new A(A.PARAM_WRONG_VALUE, 'length', 'number [1-128]');
        }), r;
      })(v);
      d.ALG_NAME = p.AesCTR;
      var E = (function(e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return t.i(i.a)(r, e), (r.checkAlgorithmParams = function(e) {
          if (
            (
              this.checkAlgorithm(e),
              e.additionalData &&
                !(
                  ArrayBuffer.isView(e.additionalData) ||
                  e.additionalData instanceof ArrayBuffer
                )
            )
          )
            throw new A(
              A.PARAM_WRONG_TYPE,
              'additionalData',
              'ArrayBufferView or ArrayBuffer'
            );
          if (!e.iv) throw new A(A.PARAM_REQUIRED, 'iv');
          if (!(ArrayBuffer.isView(e.iv) || e.iv instanceof ArrayBuffer))
            throw new A(
              A.PARAM_WRONG_TYPE,
              'iv',
              'ArrayBufferView or ArrayBuffer'
            );
          if (e.tagLength) {
            if (
              ![32, 64, 96, 104, 112, 120, 128].some(function(r) {
                return r === e.tagLength;
              })
            )
              throw new A(
                A.PARAM_WRONG_VALUE,
                'tagLength',
                '32, 64, 96, 104, 112, 120 or 128'
              );
          }
        }), r;
      })(v);
      E.ALG_NAME = p.AesGCM;
      var P = (function(e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return t.i(i.a)(r, e), (r.checkAlgorithmParams = function(e) {
          this.checkAlgorithm(e);
        }), r;
      })(w);
      (P.ALG_NAME = p.AesKW), (P.KEY_USAGES = ['wrapKey', 'unwrapKey']);
      var k = [p.Sha1, p.Sha256, p.Sha384, p.Sha512].join(' | '),
        b = (function(e) {
          function r() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return t.i(i.a)(r, e), (r.checkAlgorithm = function(r) {
            var t;
            switch ((
              (t = 'string' == typeof r ? { name: r } : r),
              e.checkAlgorithm.call(this, t),
              t.name.toUpperCase()
            )) {
              case p.Sha1:
              case p.Sha256:
              case p.Sha384:
              case p.Sha512:
                break;
              default:
                throw new c(c.WRONG_ALG_NAME, t.name, k);
            }
          }), (r.digest = function(e, r) {
            var t = this;
            return new Promise(function(r, n) {
              t.checkAlgorithm(e), r(void 0);
            });
          }), r;
        })(h),
        S = (function(e) {
          function r() {
            var r = (null !== e && e.apply(this, arguments)) || this;
            return (r.code = 9), r;
          }
          return t.i(i.a)(r, e), r;
        })(c),
        _ = (function(e) {
          function r() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return t.i(i.a)(r, e), (r.checkAlgorithm = function(e) {
            if (e.name.toUpperCase() !== this.ALG_NAME.toUpperCase())
              throw new c(c.WRONG_ALG_NAME, e.name, this.ALG_NAME);
          }), (r.checkKeyGenParams = function(e) {
            if (!e.namedCurve) throw new S(S.PARAM_REQUIRED, 'namedCurve');
            if ('string' != typeof e.namedCurve)
              throw new S(S.PARAM_WRONG_TYPE, 'namedCurve', 'string');
            switch (e.namedCurve.toUpperCase()) {
              case 'P-256':
              case 'P-384':
              case 'P-521':
                break;
              default:
                throw new S(
                  S.PARAM_WRONG_VALUE,
                  'namedCurve',
                  'P-256, P-384 or P-521'
                );
            }
          }), (r.checkKeyGenUsages = function(e) {
            var r = this;
            e.forEach(function(e) {
              var t = 0;
              for (
                t;
                t < r.KEY_USAGES.length &&
                r.KEY_USAGES[t].toLowerCase() !== e.toLowerCase();
                t++
              );
              if (t === r.KEY_USAGES.length)
                throw new s(
                  "Unsupported key usage '" +
                    e +
                    "'. Should be one of [" +
                    r.KEY_USAGES.join(', ') +
                    ']'
                );
            });
          }), (r.generateKey = function(e, r, t) {
            var n = this;
            return new Promise(function(r, a) {
              n.checkAlgorithm(
                e
              ), n.checkKeyGenParams(e), n.checkKeyGenUsages(t), r(void 0);
            });
          }), (r.exportKey = function(e, r) {
            var t = this;
            return new Promise(function(n, a) {
              t.checkKey(
                r,
                t.ALG_NAME
              ), (e && 'raw' === e.toLowerCase() && 'public' === r.type) || t.checkFormat(e, r.type), n(void 0);
            });
          }), (r.importKey = function(e, r, t, n, a) {
            var o = this;
            return new Promise(function(r, n) {
              o.checkKeyGenParams(
                t
              ), o.checkFormat(e), o.checkKeyGenUsages(a), r(void 0);
            });
          }), r;
        })(h);
      (_.ALG_NAME = ''), (_.KEY_USAGES = []);
      var U = (function(e) {
          function r() {
            var r = (null !== e && e.apply(this, arguments)) || this;
            return (r.code = 10), r;
          }
          return t.i(i.a)(r, e), r;
        })(c),
        L = (function(e) {
          function r() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return t.i(i.a)(r, e), (r.checkAlgorithmParams = function(e) {
            this.checkAlgorithm(e), b.checkAlgorithm(e.hash);
          }), (r.sign = function(e, r, t) {
            var n = this;
            return new Promise(function(t, a) {
              n.checkAlgorithmParams(
                e
              ), n.checkKey(r, n.ALG_NAME, 'private', 'sign'), t(void 0);
            });
          }), (r.verify = function(e, r, t, n) {
            var a = this;
            return new Promise(function(t, n) {
              a.checkAlgorithmParams(
                e
              ), a.checkKey(r, a.ALG_NAME, 'public', 'verify'), t(void 0);
            });
          }), r;
        })(_);
      (L.ALG_NAME = p.EcDSA), (L.KEY_USAGES = [
        'sign',
        'verify',
        'deriveKey',
        'deriveBits'
      ]);
      var R = (function(e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return t.i(i.a)(r, e), (r.checkDeriveParams = function(e) {
          if ((this.checkAlgorithm(e), !e.public))
            throw new U(U.PARAM_REQUIRED, 'public');
          this.checkKey(e.public, this.ALG_NAME, 'public');
        }), (r.deriveBits = function(e, r, t) {
          var n = this;
          return new Promise(function(t, a) {
            n.checkDeriveParams(
              e
            ), n.checkKey(r, n.ALG_NAME, 'private', 'deriveBits'), t(void 0);
          });
        }), (r.deriveKey = function(e, r, t, n, a) {
          var o = this;
          return new Promise(function(n, a) {
            switch ((
              o.checkDeriveParams(e),
              o.checkKey(r, o.ALG_NAME, 'private', 'deriveKey'),
              h.checkAlgorithm(t),
              t.name.toUpperCase()
            )) {
              case p.AesCBC:
                C.checkKeyGenParams(t);
                break;
              case p.AesCTR:
                d.checkKeyGenParams(t);
                break;
              case p.AesGCM:
                E.checkKeyGenParams(t);
                break;
              case p.AesKW:
                P.checkKeyGenParams(t);
                break;
              default:
                throw new U(
                  "Unsupported name '" +
                    t.name +
                    "' for algorithm in param 'derivedKeyType'"
                );
            }
            n(void 0);
          });
        }), r;
      })(_);
      (R.ALG_NAME = p.EcDH), (R.KEY_USAGES = ['deriveKey', 'deriveBits']);
      var K = (function(e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return t.i(i.a)(r, e), (r.checkAlgorithm = function(e) {
          if (e.name.toUpperCase() !== this.ALG_NAME.toUpperCase())
            throw new c(c.WRONG_ALG_NAME, e.name, this.ALG_NAME);
        }), (r.checkKeyGenParams = function(e) {
          if ('length' in e && !(e.length > 0 && e.length <= 512))
            throw new c(
              c.PARAM_WRONG_VALUE,
              'length',
              'more 0 and less than 512'
            );
        }), (r.checkKeyGenUsages = function(e) {
          var r = this;
          this.checkKeyUsages(e), e.forEach(function(e) {
            var t = 0;
            for (
              t;
              t < r.KEY_USAGES.length &&
              r.KEY_USAGES[t].toLowerCase() !== e.toLowerCase();
              t++
            );
            if (t === r.KEY_USAGES.length)
              throw new s(
                "Unsupported key usage '" +
                  e +
                  "'. Should be one of [" +
                  r.KEY_USAGES.join(', ') +
                  ']'
              );
          });
        }), (r.generateKey = function(e, r, t) {
          var n = this;
          return new Promise(function(r, a) {
            n.checkAlgorithm(
              e
            ), n.checkKeyGenParams(e), n.checkKeyGenUsages(t), r(void 0);
          });
        }), (r.exportKey = function(e, r) {
          var t = this;
          return new Promise(function(n, a) {
            t.checkKey(r, t.ALG_NAME), t.checkFormat(e, r.type), n(void 0);
          });
        }), (r.importKey = function(e, r, t, n, a) {
          var o = this;
          return new Promise(function(r, n) {
            if (
              (
                o.checkAlgorithm(t),
                o.checkFormat(e),
                'raw' !== e.toLowerCase() && 'jwk' !== e.toLowerCase()
              )
            )
              throw new u(u.ALLOWED_FORMAT, e, "'jwk' or 'raw'");
            o.checkKeyGenUsages(a), r(void 0);
          });
        }), (r.sign = function(e, r, t) {
          var n = this;
          return new Promise(function(t, a) {
            n.checkAlgorithmParams(
              e
            ), n.checkKey(r, n.ALG_NAME, 'secret', 'sign'), t(void 0);
          });
        }), (r.verify = function(e, r, t, n) {
          var a = this;
          return new Promise(function(t, n) {
            a.checkAlgorithmParams(
              e
            ), a.checkKey(r, a.ALG_NAME, 'secret', 'verify'), t(void 0);
          });
        }), r;
      })(h);
      (K.ALG_NAME = p.Hmac), (K.KEY_USAGES = ['sign', 'verify']);
      var O = (function(e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return t.i(i.a)(r, e), (r.checkAlgorithm = function(e) {
          if (e.name.toUpperCase() !== this.ALG_NAME.toUpperCase())
            throw new c(c.WRONG_ALG_NAME, e.name, this.ALG_NAME);
        }), (r.checkDeriveParams = function(e) {
          if ((this.checkAlgorithm(e), !e.salt))
            throw new c(c.PARAM_REQUIRED, 'salt');
          if (!(ArrayBuffer.isView(e.salt) || e.salt instanceof ArrayBuffer))
            throw new c(
              c.PARAM_WRONG_TYPE,
              'salt',
              'ArrayBuffer or ArrayBufferView'
            );
          if (!e.iterations) throw new c(c.PARAM_REQUIRED, 'iterations');
          if (!e.hash) throw new c(c.PARAM_REQUIRED, 'hash');
          var r = a(e.hash);
          b.checkAlgorithm(r);
        }), (r.importKey = function(e, r, t, n, a) {
          var o = this;
          return Promise.resolve().then(function() {
            if (n) throw new s('KDF keys must set extractable=false');
            if (
              (o.checkAlgorithm(t), o.checkFormat(e), 'raw' !== e.toLowerCase())
            )
              throw new u(u.ALLOWED_FORMAT, e, "'raw'");
            o.checkKeyUsages(a);
          });
        }), (r.deriveKey = function(e, r, t, n, a) {
          var o = this;
          return Promise.resolve().then(function() {
            switch ((
              o.checkDeriveParams(e),
              o.checkKey(r, o.ALG_NAME, 'secret', 'deriveKey'),
              h.checkAlgorithm(t),
              t.name.toUpperCase()
            )) {
              case p.AesCBC:
                C.checkKeyGenParams(t), C.checkKeyUsages(a);
                break;
              case p.AesCTR:
                d.checkKeyGenParams(t), d.checkKeyUsages(a);
                break;
              case p.AesGCM:
                E.checkKeyGenParams(t), E.checkKeyUsages(a);
                break;
              case p.AesKW:
                P.checkKeyGenParams(t), P.checkKeyUsages(a);
                break;
              case p.Hmac:
                K.checkKeyGenParams(t), K.checkKeyUsages(a);
                break;
              default:
                throw new c(c.UNSUPPORTED_ALGORITHM, t);
            }
          });
        }), (r.deriveBits = function(e, r, t) {
          var n = this;
          return Promise.resolve().then(function() {
            if (
              (
                n.checkDeriveParams(e),
                n.checkKey(r, n.ALG_NAME, 'secret', 'deriveBits'),
                !t || 'number' != typeof t
              )
            )
              throw new s("Parameter 'length' must be Number and more than 0");
          });
        }), r;
      })(h);
      (O.ALG_NAME = p.Pbkdf2), (O.KEY_USAGES = ['deriveKey', 'deriveBits']);
      var N = (function(e) {
          function r() {
            var r = (null !== e && e.apply(this, arguments)) || this;
            return (r.code = 2), r;
          }
          return t.i(i.a)(r, e), r;
        })(c),
        G = (function(e) {
          function r() {
            var r = (null !== e && e.apply(this, arguments)) || this;
            return (r.code = 6), r;
          }
          return t.i(i.a)(r, e), r;
        })(c),
        M = (function(e) {
          function r() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return t.i(i.a)(r, e), (r.checkAlgorithm = function(e) {
            if (e.name.toUpperCase() !== this.ALG_NAME.toUpperCase())
              throw new c(c.WRONG_ALG_NAME, e.name, this.ALG_NAME);
          }), (r.checkImportAlgorithm = function(e) {
            if ((this.checkAlgorithm(e), !e.hash))
              throw new G(G.PARAM_REQUIRED, 'hash');
            b.checkAlgorithm(e.hash);
          }), (r.checkKeyGenParams = function(e) {
            var r = e.modulusLength;
            if (!(r >= 256 && r <= 16384) || r % 8)
              throw new N(
                N.PARAM_WRONG_VALUE,
                'modulusLength',
                ' a multiple of 8 bits and >= 256 and <= 16384'
              );
            var t = e.publicExponent;
            if (!t) throw new N(N.PARAM_REQUIRED, 'publicExponent');
            if (!ArrayBuffer.isView(t))
              throw new N(
                N.PARAM_WRONG_TYPE,
                'publicExponent',
                'ArrayBufferView'
              );
            if (3 !== t[0] && (1 !== t[0] || 0 !== t[1] || 1 !== t[2]))
              throw new N(
                N.PARAM_WRONG_VALUE,
                'publicExponent',
                'Uint8Array([3]) | Uint8Array([1, 0, 1])'
              );
            if (!e.hash) throw new N(N.PARAM_REQUIRED, 'hash', k);
            b.checkAlgorithm(e.hash);
          }), (r.checkKeyGenUsages = function(e) {
            var r = this;
            this.checkKeyUsages(e), e.forEach(function(e) {
              var t = 0;
              for (
                t;
                t < r.KEY_USAGES.length &&
                r.KEY_USAGES[t].toLowerCase() !== e.toLowerCase();
                t++
              );
              if (t === r.KEY_USAGES.length)
                throw new s(
                  "Unsupported key usage '" +
                    e +
                    "'. Should be one of [" +
                    r.KEY_USAGES.join(', ') +
                    ']'
                );
            });
          }), (r.generateKey = function(e, r, t) {
            var n = this;
            return new Promise(function(r, a) {
              n.checkAlgorithm(
                e
              ), n.checkKeyGenParams(e), n.checkKeyGenUsages(t), r(void 0);
            });
          }), (r.exportKey = function(e, r) {
            var t = this;
            return new Promise(function(n, a) {
              t.checkKey(r, t.ALG_NAME), t.checkFormat(e, r.type), n(void 0);
            });
          }), (r.importKey = function(e, r, t, n, a) {
            var o = this;
            return new Promise(function(r, n) {
              if (
                (
                  o.checkImportAlgorithm(t),
                  o.checkFormat(e),
                  'raw' === e.toLowerCase()
                )
              )
                throw new u(
                  u.ALLOWED_FORMAT,
                  e,
                  "'JsonWebKey', 'pkcs8' or 'spki'"
                );
              o.checkKeyGenUsages(a), r(void 0);
            });
          }), r;
        })(h);
      (M.ALG_NAME = ''), (M.KEY_USAGES = []);
      var B = (function(e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return t.i(i.a)(r, e), (r.sign = function(e, r, t) {
          var n = this;
          return new Promise(function(t, a) {
            n.checkAlgorithmParams(
              e
            ), n.checkKey(r, n.ALG_NAME, 'private', 'sign'), t(void 0);
          });
        }), (r.verify = function(e, r, t, n) {
          var a = this;
          return new Promise(function(t, n) {
            a.checkAlgorithmParams(
              e
            ), a.checkKey(r, a.ALG_NAME, 'public', 'verify'), t(void 0);
          });
        }), r;
      })(M);
      (B.ALG_NAME = p.RsaSSA), (B.KEY_USAGES = ['sign', 'verify']);
      var T = (function(e) {
          function r() {
            var r = (null !== e && e.apply(this, arguments)) || this;
            return (r.code = 4), r;
          }
          return t.i(i.a)(r, e), r;
        })(c),
        D = (function(e) {
          function r() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return t.i(i.a)(r, e), (r.checkAlgorithmParams = function(r) {
            var t = r;
            if ((e.checkAlgorithmParams.call(this, t), !t.saltLength))
              throw new T(T.PARAM_REQUIRED, 'saltLength');
            if (t.saltLength < 0)
              throw new T("Parameter 'saltLength' is outside of numeric range");
          }), r;
        })(B);
      D.ALG_NAME = p.RsaPSS;
      var x = (function(e) {
          function r() {
            var r = (null !== e && e.apply(this, arguments)) || this;
            return (r.code = 5), r;
          }
          return t.i(i.a)(r, e), r;
        })(c),
        H = (function(e) {
          function r() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return t.i(i.a)(r, e), (r.checkAlgorithmParams = function(e) {
            if (
              e.label &&
              !(ArrayBuffer.isView(e.label) || e.label instanceof ArrayBuffer)
            )
              throw new x(
                x.PARAM_WRONG_TYPE,
                'label',
                'ArrayBufferView or ArrayBuffer'
              );
          }), (r.encrypt = function(e, r, t) {
            var n = this;
            return new Promise(function(t, a) {
              n.checkAlgorithmParams(
                e
              ), n.checkKey(r, n.ALG_NAME, 'public', 'encrypt'), t(void 0);
            });
          }), (r.decrypt = function(e, r, t) {
            var n = this;
            return new Promise(function(t, a) {
              n.checkAlgorithmParams(
                e
              ), n.checkKey(r, n.ALG_NAME, 'private', 'decrypt'), t(void 0);
            });
          }), (r.wrapKey = function(e, r, t, n) {
            var a = this;
            return new Promise(function(o, i) {
              a.checkAlgorithmParams(
                n
              ), a.checkKey(t, a.ALG_NAME, 'public', 'wrapKey'), a.checkWrappedKey(r), a.checkFormat(e, r.type), o(void 0);
            });
          }), (r.unwrapKey = function(e, r, t, n, a, o, i) {
            var s = this;
            return new Promise(function(r, a) {
              s.checkAlgorithmParams(
                n
              ), s.checkKey(t, s.ALG_NAME, 'private', 'unwrapKey'), s.checkFormat(e), r(void 0);
            });
          }), r;
        })(M);
      (H.ALG_NAME = p.RsaOAEP), (H.KEY_USAGES = [
        'encrypt',
        'decrypt',
        'wrapKey',
        'unwrapKey'
      ]);
      var W = (function() {
        function e() {}
        return (e.prototype.generateKey = function(e, r, t) {
          return new Promise(function(n, o) {
            var i = a(e),
              s = h;
            switch (i.name.toUpperCase()) {
              case p.RsaSSA.toUpperCase():
                s = B;
                break;
              case p.RsaOAEP.toUpperCase():
                s = H;
                break;
              case p.RsaPSS.toUpperCase():
                s = D;
                break;
              case p.AesECB.toUpperCase():
                s = g;
                break;
              case p.AesCBC.toUpperCase():
                s = C;
                break;
              case p.AesCTR.toUpperCase():
                s = d;
                break;
              case p.AesGCM.toUpperCase():
                s = E;
                break;
              case p.AesKW.toUpperCase():
                s = P;
                break;
              case p.EcDSA.toUpperCase():
                s = L;
                break;
              case p.EcDH.toUpperCase():
                s = R;
                break;
              case p.Hmac.toUpperCase():
                s = K;
                break;
              default:
                throw new c(c.UNSUPPORTED_ALGORITHM, i.name);
            }
            s.generateKey(i, r, t).then(n, o);
          });
        }), (e.prototype.digest = function(e, r) {
          return new Promise(function(t, n) {
            var i = a(e),
              s = o(r, 'data'),
              u = h;
            switch (i.name.toUpperCase()) {
              case p.Sha1.toUpperCase():
              case p.Sha256.toUpperCase():
              case p.Sha384.toUpperCase():
              case p.Sha512.toUpperCase():
                u = b;
                break;
              default:
                throw new c(c.UNSUPPORTED_ALGORITHM, i.name);
            }
            u.digest(i, s).then(t, n);
          });
        }), (e.prototype.sign = function(e, r, t) {
          return new Promise(function(n, i) {
            var s = a(e),
              u = o(t, 'data'),
              f = h;
            switch (s.name.toUpperCase()) {
              case p.RsaSSA.toUpperCase():
                f = B;
                break;
              case p.RsaPSS.toUpperCase():
                f = D;
                break;
              case p.EcDSA.toUpperCase():
                f = L;
                break;
              case p.Hmac.toUpperCase():
                f = K;
                break;
              default:
                throw new c(c.UNSUPPORTED_ALGORITHM, s.name);
            }
            f.sign(s, r, u).then(n, i);
          });
        }), (e.prototype.verify = function(e, r, t, n) {
          return new Promise(function(t, i) {
            var s = a(e),
              u = o(n, 'signature'),
              f = o(n, 'data'),
              l = h;
            switch (s.name.toUpperCase()) {
              case p.RsaSSA.toUpperCase():
                l = B;
                break;
              case p.RsaPSS.toUpperCase():
                l = D;
                break;
              case p.EcDSA.toUpperCase():
                l = L;
                break;
              case p.Hmac.toUpperCase():
                l = K;
                break;
              default:
                throw new c(c.UNSUPPORTED_ALGORITHM, s.name);
            }
            l.verify(s, r, u, f).then(t, i);
          });
        }), (e.prototype.encrypt = function(e, r, t) {
          return new Promise(function(n, i) {
            var s = a(e),
              u = o(t, 'data'),
              f = h;
            switch (s.name.toUpperCase()) {
              case p.RsaOAEP.toUpperCase():
                f = H;
                break;
              case p.AesECB.toUpperCase():
                f = g;
                break;
              case p.AesCBC.toUpperCase():
                f = C;
                break;
              case p.AesCTR.toUpperCase():
                f = d;
                break;
              case p.AesGCM.toUpperCase():
                f = E;
                break;
              default:
                throw new c(c.UNSUPPORTED_ALGORITHM, s.name);
            }
            f.encrypt(s, r, u).then(n, i);
          });
        }), (e.prototype.decrypt = function(e, r, t) {
          return new Promise(function(n, i) {
            var s = a(e),
              u = o(t, 'data'),
              f = h;
            switch (s.name.toUpperCase()) {
              case p.RsaOAEP.toUpperCase():
                f = H;
                break;
              case p.AesECB.toUpperCase():
                f = g;
                break;
              case p.AesCBC.toUpperCase():
                f = C;
                break;
              case p.AesCTR.toUpperCase():
                f = d;
                break;
              case p.AesGCM.toUpperCase():
                f = E;
                break;
              default:
                throw new c(c.UNSUPPORTED_ALGORITHM, s.name);
            }
            f.decrypt(s, r, u).then(n, i);
          });
        }), (e.prototype.deriveBits = function(e, r, t) {
          return new Promise(function(n, o) {
            var i = a(e),
              s = h;
            switch (i.name.toUpperCase()) {
              case p.EcDH.toUpperCase():
                s = R;
                break;
              case p.Pbkdf2.toUpperCase():
                s = O;
                break;
              default:
                throw new c(c.UNSUPPORTED_ALGORITHM, i.name);
            }
            s.deriveBits(i, r, t).then(n, o);
          });
        }), (e.prototype.deriveKey = function(e, r, t, n, o) {
          return new Promise(function(i, s) {
            var u = a(e),
              f = a(t),
              l = h;
            switch (u.name.toUpperCase()) {
              case p.EcDH.toUpperCase():
                l = R;
                break;
              case p.Pbkdf2.toUpperCase():
                l = O;
                break;
              default:
                throw new c(c.UNSUPPORTED_ALGORITHM, u.name);
            }
            l.deriveKey(u, r, f, n, o).then(i, s);
          });
        }), (e.prototype.exportKey = function(e, r) {
          return new Promise(function(t, n) {
            if ((h.checkKey(r), !r.extractable)) throw new u(u.NOT_EXTRACTABLE);
            var a = h;
            switch (r.algorithm.name.toUpperCase()) {
              case p.RsaSSA.toUpperCase():
                a = B;
                break;
              case p.RsaPSS.toUpperCase():
                a = D;
                break;
              case p.AesECB.toUpperCase():
                a = g;
                break;
              case p.RsaOAEP.toUpperCase():
                a = H;
                break;
              case p.AesCBC.toUpperCase():
                a = C;
                break;
              case p.AesCTR.toUpperCase():
                a = d;
                break;
              case p.AesGCM.toUpperCase():
                a = E;
                break;
              case p.AesKW.toUpperCase():
                a = P;
                break;
              case p.EcDSA.toUpperCase():
                a = L;
                break;
              case p.EcDH.toUpperCase():
                a = R;
                break;
              case p.Hmac.toUpperCase():
                a = K;
                break;
              default:
                throw new c(c.UNSUPPORTED_ALGORITHM, r.algorithm.name);
            }
            a.exportKey(e, r).then(t, n);
          });
        }), (e.prototype.importKey = function(e, r, t, n, o) {
          return new Promise(function(i, s) {
            var u = a(t),
              f = h;
            switch (u.name.toUpperCase()) {
              case p.RsaSSA.toUpperCase():
                f = B;
                break;
              case p.RsaPSS.toUpperCase():
                f = D;
                break;
              case p.RsaOAEP.toUpperCase():
                f = H;
                break;
              case p.AesECB.toUpperCase():
                f = g;
                break;
              case p.AesCBC.toUpperCase():
                f = C;
                break;
              case p.AesCTR.toUpperCase():
                f = d;
                break;
              case p.AesGCM.toUpperCase():
                f = E;
                break;
              case p.AesKW.toUpperCase():
                f = P;
                break;
              case p.EcDSA.toUpperCase():
                f = L;
                break;
              case p.EcDH.toUpperCase():
                f = R;
                break;
              case p.Hmac.toUpperCase():
                f = K;
                break;
              case p.Pbkdf2.toUpperCase():
                f = O;
                break;
              default:
                throw new c(c.UNSUPPORTED_ALGORITHM, u.name);
            }
            f.importKey(e, r, u, n, o).then(i, s);
          });
        }), (e.prototype.wrapKey = function(e, r, t, n) {
          return new Promise(function(o, i) {
            var s = a(n),
              u = h;
            switch (s.name.toUpperCase()) {
              case p.RsaOAEP.toUpperCase():
                u = H;
                break;
              case p.AesECB.toUpperCase():
                u = g;
                break;
              case p.AesCBC.toUpperCase():
                u = C;
                break;
              case p.AesCTR.toUpperCase():
                u = d;
                break;
              case p.AesGCM.toUpperCase():
                u = E;
                break;
              case p.AesKW.toUpperCase():
                u = P;
                break;
              default:
                throw new c(c.UNSUPPORTED_ALGORITHM, s.name);
            }
            u.wrapKey(e, r, t, s).then(o, i);
          });
        }), (e.prototype.unwrapKey = function(e, r, t, n, i, s, u) {
          return new Promise(function(f, l) {
            var y = a(n),
              m = a(i),
              A = o(r, 'wrappedKey'),
              w = h;
            switch (y.name.toUpperCase()) {
              case p.RsaOAEP.toUpperCase():
                w = H;
                break;
              case p.AesECB.toUpperCase():
                w = g;
                break;
              case p.AesCBC.toUpperCase():
                w = C;
                break;
              case p.AesCTR.toUpperCase():
                w = d;
                break;
              case p.AesGCM.toUpperCase():
                w = E;
                break;
              case p.AesKW.toUpperCase():
                w = P;
                break;
              default:
                throw new c(c.UNSUPPORTED_ALGORITHM, y.name);
            }
            w.unwrapKey(e, A, t, y, m, s, u).then(f, l);
          });
        }), e;
      })();
    }.call(r, t(13));
  },
  function(e, r, t) {
    'use strict';
    var n =
      (this && this.__extends) ||
      (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, r) {
              e.__proto__ = r;
            }) ||
          function(e, r) {
            for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t]);
          };
        return function(r, t) {
          function n() {
            this.constructor = r;
          }
          e(r, t), (r.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
        };
      })();
    Object.defineProperty(r, '__esModule', { value: !0 });
    var a = t(0),
      o = (function(e) {
        function r() {
          var r = (null !== e && e.apply(this, arguments)) || this;
          return (r.code = 10), r;
        }
        return n(r, e), r;
      })(a.WebCryptoError);
    (o.MODULE_NOT_FOUND =
      "Module '%1' is not found. Download it from %2"), (o.UNSUPPORTED_ALGORITHM =
      "Unsupported algorithm '%1'"), (r.LinerError = o);
  },
  function(e, r, t) {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = t(12),
      a = t(4),
      o = (function() {
        function e() {
          this.subtle = new n.SubtleCrypto();
        }
        return (e.prototype.getRandomValues = function(e) {
          return a.nativeCrypto.getRandomValues(e);
        }), e;
      })();
    r.Crypto = o;
  },
  function(e, r, t) {
    'use strict';
    function n() {
      var e,
        t = { name: 'Unknown', version: '0' },
        n = self.navigator.userAgent;
      return (e = /edge\/([\d\.]+)/i.exec(n))
        ? ((t.name = r.Browser.Edge), (t.version = e[1]))
        : /msie/i.test(n)
          ? (
              (t.name = r.Browser.IE),
              (t.version = /msie ([\d\.]+)/i.exec(n)[1])
            )
          : /Trident/i.test(n)
            ? (
                (t.name = r.Browser.IE),
                (t.version = /rv:([\d\.]+)/i.exec(n)[1])
              )
            : /mobile/i.test(n)
              ? (
                  (t.name = r.Browser.Mobile),
                  (t.version = /mobile\/([\w]+)/i.exec(n)[1])
                )
              : /chrome/i.test(n)
                ? (
                    (t.name = r.Browser.Chrome),
                    (t.version = /chrome\/([\d\.]+)/i.exec(n)[1])
                  )
                : /safari/i.test(n)
                  ? (
                      (t.name = r.Browser.Safari),
                      (t.version = /version\/([\d\.]+)/i.exec(n)[1])
                    )
                  : /firefox/i.test(n) &&
                    (
                      (t.name = r.Browser.Firefox),
                      (t.version = /firefox\/([\d\.]+)/i.exec(n)[1])
                    ), t;
    }
    function a(e) {
      for (var r = new Uint8Array(e.length), t = 0; t < e.length; t++)
        r[t] = e.charCodeAt(t);
      return r;
    }
    function o(e) {
      for (var r = '', t = 0; t < e.length; t++) r += String.fromCharCode(e[t]);
      return r;
    }
    function i() {
      for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
      var t = new Uint8Array(
          e
            .map(function(e) {
              return e.length;
            })
            .reduce(function(e, r) {
              return e + r;
            })
        ),
        n = 0;
      return e.forEach(function(e, r) {
        for (var a = 0; a < e.length; a++) t[n + a] = e[a];
        n += e.length;
      }), t;
    }
    function s(e) {
      for (var r = [], t = 1; t < arguments.length; t++)
        r[t - 1] = arguments[t];
      for (var n = arguments[0], a = 1; a < arguments.length; a++) {
        var o = arguments[a];
        for (var i in o) n[i] = o[i];
      }
      return n;
    }
    Object.defineProperty(r, '__esModule', { value: !0 }), (r.Browser = {
      IE: 'Internet Explorer',
      Safari: 'Safari',
      Edge: 'Edge',
      Chrome: 'Chrome',
      Firefox: 'Firefox Mozilla',
      Mobile: 'Mobile'
    }), (r.BrowserInfo = n), (r.string2buffer = a), (r.buffer2string = o), (r.concat = i), (r.assign = s);
  },
  function(e, r, t) {
    'use strict';
    function n(e, r) {
      var t = e[r];
      e[r] = function() {
        var n = arguments;
        return new Promise(function(a, o) {
          var i = t.apply(e, n);
          (i.oncomplete = function(e) {
            a(e.target.result);
          }), (i.onerror = function(e) {
            o("Error on running '" + r + "' function");
          });
        });
      };
    }
    Object.defineProperty(r, '__esModule', { value: !0 });
    var a,
      o = t(1);
    if ('undefined' == typeof self) {
      var i = t(14);
      a = {
        crypto: {
          subtle: {},
          getRandomValues: function(e) {
            var r = e.buffer,
              t = new Uint8Array(r);
            return i.randomBytes(t.length).forEach(function(e, r) {
              return (t[r] = e);
            }), e;
          }
        }
      };
    } else a = self;
    (r.nativeCrypto = a.msCrypto || a.crypto || {}), (r.nativeSubtle = null);
    try {
      r.nativeSubtle = r.nativeCrypto.subtle || r.nativeCrypto.webkitSubtle;
    } catch (e) {}
    if (a.msCrypto) {
      if (!a.Promise)
        throw new o.LinerError(
          o.LinerError.MODULE_NOT_FOUND,
          'Promise',
          'https://www.promisejs.org'
        );
      n(r.nativeSubtle, 'generateKey'), n(r.nativeSubtle, 'digest'), n(
        r.nativeSubtle,
        'sign'
      ), n(r.nativeSubtle, 'verify'), n(r.nativeSubtle, 'encrypt'), n(
        r.nativeSubtle,
        'decrypt'
      ), n(r.nativeSubtle, 'importKey'), n(r.nativeSubtle, 'exportKey'), n(
        r.nativeSubtle,
        'wrapKey'
      ), n(r.nativeSubtle, 'unwrapKey'), n(r.nativeSubtle, 'deriveKey'), n(
        r.nativeSubtle,
        'deriveBits'
      );
    }
    Math.imul ||
      (Math.imul = function(e, r) {
        var t = (e >>> 16) & 65535,
          n = 65535 & e,
          a = (r >>> 16) & 65535,
          o = 65535 & r;
        return (n * o + ((t * o + n * a) << 16 >>> 0)) | 0;
      });
  },
  function(e, r, t) {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = (function() {
      function e() {}
      return e;
    })();
    r.CryptoKey = n;
  },
  function(e, r, t) {
    'use strict';
    function n(e, r) {
      function t() {
        this.constructor = e;
      }
      a(e, r), (e.prototype =
        null === r ? Object.create(r) : ((t.prototype = r.prototype), new t()));
    }
    r.a = n; /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var a =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function(e, r) {
          e.__proto__ = r;
        }) ||
      function(e, r) {
        for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t]);
      };
    Object.assign;
  },
  function(e, r, t) {
    'use strict';
    function n(e) {
      for (var t in e) r.hasOwnProperty(t) || (r[t] = e[t]);
    }
    Object.defineProperty(r, '__esModule', { value: !0 }), n(t(4)), n(t(2));
  },
  function(e, r, t) {
    'use strict';
    var n =
      (this && this.__extends) ||
      (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, r) {
              e.__proto__ = r;
            }) ||
          function(e, r) {
            for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t]);
          };
        return function(r, t) {
          function n() {
            this.constructor = r;
          }
          e(r, t), (r.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
        };
      })();
    Object.defineProperty(r, '__esModule', { value: !0 });
    var a = t(0),
      o = t(1),
      i = t(5),
      s = t(3),
      c = t(4),
      u = (function(e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return n(r, e), (r.generateKey = function(e, r, t) {
          var n = this;
          return Promise.resolve().then(function() {
            n.checkModule();
            var a = c.nativeCrypto.getRandomValues(
                new Uint8Array(e.length / 8)
              ),
              o = new i.CryptoKey();
            return (o.key = a), (o.algorithm = e), (o.extractable = r), (o.type = 'secret'), (o.usages = t), o;
          });
        }), (r.encrypt = function(e, r, t) {
          return Promise.resolve().then(function() {
            var n;
            switch (e.name.toUpperCase()) {
              case a.AlgorithmNames.AesECB:
                n = asmCrypto.AES_ECB.encrypt(t, r.key, !0);
                break;
              case a.AlgorithmNames.AesCBC:
                var i = e;
                n = asmCrypto.AES_CBC.encrypt(
                  t,
                  r.key,
                  void 0,
                  a.PrepareData(i.iv, 'iv')
                );
                break;
              case a.AlgorithmNames.AesGCM:
                var s = e;
                s.tagLength = s.tagLength || 128;
                var c = void 0;
                s.additionalData &&
                  (c = a.PrepareData(
                    s.additionalData,
                    'additionalData'
                  )), (n = asmCrypto.AES_GCM.encrypt(t, r.key, s.iv, c, s.tagLength / 8));
                break;
              default:
                throw new o.LinerError(
                  a.AlgorithmError.UNSUPPORTED_ALGORITHM,
                  e.name
                );
            }
            return n.buffer;
          });
        }), (r.decrypt = function(e, r, t) {
          return Promise.resolve().then(function() {
            var n;
            switch (e.name.toUpperCase()) {
              case a.AlgorithmNames.AesECB:
                n = asmCrypto.AES_ECB.decrypt(t, r.key, !0);
                break;
              case a.AlgorithmNames.AesCBC:
                var i = e;
                n = asmCrypto.AES_CBC.decrypt(
                  t,
                  r.key,
                  void 0,
                  a.PrepareData(i.iv, 'iv')
                );
                break;
              case a.AlgorithmNames.AesGCM:
                var s = e;
                s.tagLength = s.tagLength || 128;
                var c = void 0;
                s.additionalData &&
                  (c = a.PrepareData(
                    s.additionalData,
                    'additionalData'
                  )), (n = asmCrypto.AES_GCM.decrypt(t, r.key, s.iv, c, s.tagLength / 8));
                break;
              default:
                throw new o.LinerError(
                  a.AlgorithmError.UNSUPPORTED_ALGORITHM,
                  e.name
                );
            }
            return n.buffer;
          });
        }), (r.wrapKey = function(e, r, t, n) {
          var a;
          return Promise.resolve()
            .then(function() {
              return (a = new h.Crypto()), a.subtle.exportKey(e, r);
            })
            .then(function(e) {
              var r;
              return (r =
                e instanceof ArrayBuffer
                  ? new Uint8Array(e)
                  : s.string2buffer(
                      JSON.stringify(e)
                    )), a.subtle.encrypt(n, t, r);
            });
        }), (r.unwrapKey = function(e, r, t, n, a, o, i) {
          var c;
          return Promise.resolve()
            .then(function() {
              return (c = new h.Crypto()), c.subtle.decrypt(n, t, r);
            })
            .then(function(r) {
              var t;
              return (t =
                'jwk' === e.toLowerCase()
                  ? JSON.parse(s.buffer2string(new Uint8Array(r)))
                  : new Uint8Array(r)), c.subtle.importKey(e, t, a, o, i);
            });
        }), (r.alg2jwk = function(e) {
          return 'A' + e.length + /-(\w+)/i.exec(e.name.toUpperCase())[1];
        }), (r.jwk2alg = function(e) {
          throw new Error('Not implemented');
        }), (r.exportKey = function(e, r) {
          var t = this;
          return Promise.resolve().then(function() {
            var n = r.key;
            if ('jwk' === e.toLowerCase()) {
              return {
                alg: t.alg2jwk(r.algorithm),
                ext: r.extractable,
                k: a.Base64Url.encode(n),
                key_ops: r.usages,
                kty: 'oct'
              };
            }
            return n.buffer;
          });
        }), (r.importKey = function(e, r, t, n, o) {
          return Promise.resolve().then(function() {
            var n;
            if ('jwk' === e.toLowerCase()) {
              var s = r;
              n = a.Base64Url.decode(s.k);
            } else n = new Uint8Array(r);
            var c = new i.CryptoKey();
            return (c.algorithm = t), (c.type = 'secret'), (c.usages = o), (c.key = n), c;
          });
        }), (r.checkModule = function() {
          if ('undefined' == typeof asmCrypto)
            throw new o.LinerError(
              o.LinerError.MODULE_NOT_FOUND,
              'asmCrypto',
              'https://github.com/vibornoff/asmcrypto.js'
            );
        }), r;
      })(a.BaseCrypto);
    r.AesCrypto = u;
    var h = t(2);
  },
  function(e, r, t) {
    'use strict';
    function n(e) {
      for (var r = new Uint8Array(e), t = [], n = 0; n < r.length; n++)
        t.push(r[n]);
      return t;
    }
    function a(e, r) {
      e.length % 2 && (e = '0' + e);
      for (var t = new Uint8Array(e.length / 2), n = 0; n < e.length; n++) {
        var a = e.slice(n, ++n + 1);
        t[(n - 1) / 2] = parseInt(a, 16);
      }
      if (r) {
        var o = t.length;
        (o = o > 32 ? (o > 48 ? 66 : 48) : 32), t.length < o &&
          (t = h.concat(new Uint8Array(o - t.length), t));
      }
      return t;
    }
    function o(e, r) {
      for (var t = '', n = 0; n < e.length; n++) {
        var a = e[n].toString(16);
        t += a.length % 2 ? '0' + a : a;
      }
      if (r) {
        var o = e.length;
        (o = o > 32 ? (o > 48 ? 66 : 48) : 32), t.length / 2 < o &&
          (t = new Array(2 * o - t.length + 1).join('0') + t);
      }
      return t;
    }
    var i =
      (this && this.__extends) ||
      (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, r) {
              e.__proto__ = r;
            }) ||
          function(e, r) {
            for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t]);
          };
        return function(r, t) {
          function n() {
            this.constructor = r;
          }
          e(r, t), (r.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
        };
      })();
    Object.defineProperty(r, '__esModule', { value: !0 });
    var s = t(0),
      c = t(1),
      u = t(5),
      h = t(3),
      p = (function(e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return i(r, e), (r.generateKey = function(e, r, t) {
          var n = this;
          return Promise.resolve().then(function() {
            n.checkModule();
            var t = e,
              a = new elliptic.ec(t.namedCurve.replace('-', '').toLowerCase()),
              o = new u.CryptoKey(),
              i = new u.CryptoKey();
            return (o.key = i.key = a.genKeyPair()), (o.algorithm = i.algorithm = t), (o.extractable = r), (i.extractable = !0), (o.type = 'private'), (i.type = 'public'), e.name === s.AlgorithmNames.EcDSA ? ((o.usages = ['sign']), (i.usages = ['verify'])) : e.name === s.AlgorithmNames.EcDH && ((o.usages = ['deriveKey', 'deriveBits']), (i.usages = [])), { privateKey: o, publicKey: i };
          });
        }), (r.sign = function(e, r, t) {
          return Promise.resolve()
            .then(function() {
              var r = e;
              return new f.Crypto().subtle.digest(r.hash, t);
            })
            .then(function(e) {
              var t = n(e),
                i = r.key.sign(t);
              return a(o(i.r.toArray(), !0) + o(i.s.toArray(), !0)).buffer;
            });
        }), (r.verify = function(e, r, t, a) {
          var o;
          return Promise.resolve()
            .then(function() {
              var r = e;
              return (o = {
                r: t.slice(0, t.byteLength / 2),
                s: t.slice(t.byteLength / 2)
              }), new f.Crypto().subtle.digest(r.hash, a);
            })
            .then(function(e) {
              var t = n(e);
              return r.key.verify(t, o);
            });
        }), (r.deriveKey = function(e, r, t, n, a) {
          var o = this;
          return Promise.resolve()
            .then(function() {
              return o.deriveBits(e, r, t.length);
            })
            .then(function(e) {
              return new f.Crypto().subtle.importKey(
                'raw',
                new Uint8Array(e),
                t,
                n,
                a
              );
            });
        }), (r.deriveBits = function(e, r, t) {
          return Promise.resolve().then(function() {
            var n = (
                Promise.resolve(null),
                r.key.derive(e.public.key.getPublic())
              ),
              a = new Uint8Array(n.toArray()),
              o = a.length;
            return (o =
              o > 32
                ? o > 48 ? 66 : 48
                : 32), a.length < o && (a = h.concat(new Uint8Array(o - a.length), a)), a.slice(0, t / 8).buffer;
          });
        }), (r.exportKey = function(e, r) {
          return Promise.resolve().then(function() {
            var t = r.key;
            if ('jwk' === e.toLowerCase()) {
              var n = t.getPublic('hex').slice(2),
                o = n.slice(0, n.length / 2),
                i = n.slice(n.length / 2, n.length);
              if ('public' === r.type) {
                var u = {
                  crv: r.algorithm.namedCurve,
                  ext: r.extractable,
                  x: s.Base64Url.encode(a(o, !0)),
                  y: s.Base64Url.encode(a(i, !0)),
                  key_ops: r.usages,
                  kty: 'EC'
                };
                return u;
              }
              var u = {
                crv: r.algorithm.namedCurve,
                ext: r.extractable,
                d: s.Base64Url.encode(a(t.getPrivate('hex'), !0)),
                x: s.Base64Url.encode(a(o, !0)),
                y: s.Base64Url.encode(a(i, !0)),
                key_ops: r.usages,
                kty: 'EC'
              };
              return u;
            }
            throw new c.LinerError("Format '" + e + "' is not implemented");
          });
        }), (r.importKey = function(e, r, t, n, a) {
          return Promise.resolve().then(function() {
            var i = new u.CryptoKey();
            if (((i.algorithm = t), 'jwk' !== e.toLowerCase()))
              throw new c.LinerError("Format '" + e + "' is not implemented");
            var p = new elliptic.ec(r.crv.replace('-', '').toLowerCase());
            if (r.d)
              (i.key = p.keyFromPrivate(s.Base64Url.decode(r.d))), (i.type =
                'private');
            else {
              var f = h.concat(
                  new Uint8Array([4]),
                  s.Base64Url.decode(r.x),
                  s.Base64Url.decode(r.y)
                ),
                l = o(f);
              (i.key = p.keyFromPublic(l, 'hex')), (i.type = 'public');
            }
            return (i.extractable = n), (i.usages = a), i;
          });
        }), (r.checkModule = function() {
          if ('undefined' == typeof elliptic)
            throw new c.LinerError(
              c.LinerError.MODULE_NOT_FOUND,
              'elliptic',
              'https://github.com/indutny/elliptic'
            );
        }), r;
      })(s.BaseCrypto);
    r.EcCrypto = p;
    var f = t(2);
  },
  function(e, r, t) {
    'use strict';
    function n(e) {
      var r = !0;
      return e.filter(function(e) {
        return (!r || 0 !== e) && ((r = !1), !0);
      });
    }
    var a =
      (this && this.__extends) ||
      (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, r) {
              e.__proto__ = r;
            }) ||
          function(e, r) {
            for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t]);
          };
        return function(r, t) {
          function n() {
            this.constructor = r;
          }
          e(r, t), (r.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
        };
      })();
    Object.defineProperty(r, '__esModule', { value: !0 });
    var o = t(0),
      i = t(1),
      s = t(3),
      c = t(5),
      u = (function(e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return a(r, e), (r.generateKey = function(e, r, t) {
          var n = this;
          return Promise.resolve().then(function() {
            n.checkModule();
            var a = 3 === e.publicExponent[0] ? 3 : 65537,
              s = asmCrypto.RSA.generateKey(e.modulusLength, a),
              u = new c.CryptoKey(),
              h = new c.CryptoKey();
            switch ((
              (u.key = h.key = s),
              (u.algorithm = h.algorithm = e),
              (u.extractable = r),
              (h.extractable = !0),
              (u.type = 'private'),
              (h.type = 'public'),
              e.name.toLowerCase()
            )) {
              case o.AlgorithmNames.RsaOAEP.toLowerCase():
                (u.usages = n.filterUsages(
                  ['decrypt', 'unwrapKey'],
                  t
                )), (h.usages = n.filterUsages(['encrypt', 'wrapKey'], t));
                break;
              case o.AlgorithmNames.RsaSSA.toLowerCase():
              case o.AlgorithmNames.RsaPSS.toLowerCase():
                (u.usages = n.filterUsages(
                  ['sign'],
                  t
                )), (h.usages = n.filterUsages(['verify'], t));
                break;
              default:
                throw new i.LinerError(
                  i.LinerError.UNSUPPORTED_ALGORITHM,
                  e.name
                );
            }
            return { privateKey: u, publicKey: h };
          });
        }), (r.sign = function(e, r, t) {
          return Promise.resolve().then(function() {
            switch (e.name.toLowerCase()) {
              case o.AlgorithmNames.RsaSSA.toLowerCase():
                var n = r.algorithm,
                  a = e,
                  s = void 0;
                switch (n.hash.name.toUpperCase()) {
                  case o.AlgorithmNames.Sha1:
                    s = asmCrypto.RSA_PKCS1_v1_5_SHA1.sign;
                    break;
                  case o.AlgorithmNames.Sha256:
                    s = asmCrypto.RSA_PKCS1_v1_5_SHA256.sign;
                    break;
                  case o.AlgorithmNames.Sha512:
                    s = asmCrypto.RSA_PKCS1_v1_5_SHA512.sign;
                    break;
                  default:
                    throw new i.LinerError(
                      i.LinerError.UNSUPPORTED_ALGORITHM,
                      r.algorithm.name
                    );
                }
                return s(t, r.key).buffer;
              case o.AlgorithmNames.RsaPSS.toLowerCase():
                var n = r.algorithm,
                  a = e,
                  s = void 0;
                switch (n.hash.name.toUpperCase()) {
                  case o.AlgorithmNames.Sha1:
                    s = asmCrypto.RSA_PSS_SHA1.sign;
                    break;
                  case o.AlgorithmNames.Sha256:
                    s = asmCrypto.RSA_PSS_SHA256.sign;
                    break;
                  case o.AlgorithmNames.Sha512:
                    s = asmCrypto.RSA_PSS_SHA512.sign;
                    break;
                  default:
                    throw new i.LinerError(
                      i.LinerError.UNSUPPORTED_ALGORITHM,
                      r.algorithm.name
                    );
                }
                return s(t, r.key, a.saltLength).buffer;
              default:
                throw new i.LinerError(
                  i.LinerError.UNSUPPORTED_ALGORITHM,
                  e.name
                );
            }
          });
        }), (r.verify = function(e, r, t, n) {
          return Promise.resolve().then(function() {
            switch (e.name.toLowerCase()) {
              case o.AlgorithmNames.RsaSSA.toLowerCase():
                var a,
                  s = r.algorithm;
                switch (s.hash.name.toUpperCase()) {
                  case o.AlgorithmNames.Sha1:
                    a = asmCrypto.RSA_PKCS1_v1_5_SHA1.verify;
                    break;
                  case o.AlgorithmNames.Sha256:
                    a = asmCrypto.RSA_PKCS1_v1_5_SHA256.verify;
                    break;
                  case o.AlgorithmNames.Sha512:
                    a = asmCrypto.RSA_PKCS1_v1_5_SHA512.verify;
                    break;
                  default:
                    throw new i.LinerError(
                      i.LinerError.UNSUPPORTED_ALGORITHM,
                      r.algorithm.name
                    );
                }
                try {
                  return a(t, n, r.key);
                } catch (e) {
                  return console.warn('Verify error: ' + e.message), !1;
                }
              case o.AlgorithmNames.RsaPSS.toLowerCase():
                var c = r.algorithm,
                  u = e,
                  h = void 0;
                switch (c.hash.name.toUpperCase()) {
                  case o.AlgorithmNames.Sha1:
                    h = asmCrypto.RSA_PSS_SHA1.verify;
                    break;
                  case o.AlgorithmNames.Sha256:
                    h = asmCrypto.RSA_PSS_SHA256.verify;
                    break;
                  case o.AlgorithmNames.Sha512:
                    h = asmCrypto.RSA_PSS_SHA512.verify;
                    break;
                  default:
                    throw new i.LinerError(
                      i.LinerError.UNSUPPORTED_ALGORITHM,
                      r.algorithm.name
                    );
                }
                try {
                  return h(t, n, r.key, u.saltLength);
                } catch (e) {
                  return console.warn('Verify error: ' + e.message), !1;
                }
              default:
                throw new i.LinerError(
                  i.LinerError.UNSUPPORTED_ALGORITHM,
                  e.name
                );
            }
          });
        }), (r.encrypt = function(e, r, t) {
          return Promise.resolve().then(function() {
            switch (e.name.toLowerCase()) {
              case o.AlgorithmNames.RsaOAEP.toLowerCase():
                var n = r.algorithm,
                  a = e,
                  s = void 0;
                switch (n.hash.name.toUpperCase()) {
                  case o.AlgorithmNames.Sha1:
                    s = asmCrypto.RSA_OAEP_SHA1.encrypt;
                    break;
                  case o.AlgorithmNames.Sha256:
                    s = asmCrypto.RSA_OAEP_SHA256.encrypt;
                    break;
                  case o.AlgorithmNames.Sha512:
                    s = asmCrypto.RSA_OAEP_SHA512.encrypt;
                    break;
                  default:
                    throw new i.LinerError(
                      i.LinerError.UNSUPPORTED_ALGORITHM,
                      n.name + ' ' + n.hash.name
                    );
                }
                var c = void 0;
                return a.label &&
                  (c = o.PrepareData(a.label, 'label')), s(t, r.key, c);
              default:
                throw new i.LinerError(
                  i.LinerError.UNSUPPORTED_ALGORITHM,
                  e.name
                );
            }
          });
        }), (r.decrypt = function(e, r, t) {
          return Promise.resolve().then(function() {
            switch (e.name.toLowerCase()) {
              case o.AlgorithmNames.RsaOAEP.toLowerCase():
                var n = r.algorithm,
                  a = e,
                  s = void 0;
                switch (n.hash.name.toUpperCase()) {
                  case o.AlgorithmNames.Sha1:
                    s = asmCrypto.RSA_OAEP_SHA1.decrypt;
                    break;
                  case o.AlgorithmNames.Sha256:
                    s = asmCrypto.RSA_OAEP_SHA256.decrypt;
                    break;
                  case o.AlgorithmNames.Sha512:
                    s = asmCrypto.RSA_OAEP_SHA512.decrypt;
                    break;
                  default:
                    throw new i.LinerError(
                      i.LinerError.UNSUPPORTED_ALGORITHM,
                      n.name + ' ' + n.hash.name
                    );
                }
                var c = void 0;
                return a.label &&
                  (c = o.PrepareData(a.label, 'label')), s(t, r.key, c);
              default:
                throw new i.LinerError(
                  i.LinerError.UNSUPPORTED_ALGORITHM,
                  e.name
                );
            }
          });
        }), (r.wrapKey = function(e, r, t, n) {
          var a;
          return Promise.resolve()
            .then(function() {
              return (a = new h.Crypto()), a.subtle.exportKey(e, r);
            })
            .then(function(e) {
              var r;
              return (r =
                e instanceof ArrayBuffer
                  ? new Uint8Array(e)
                  : s.string2buffer(
                      JSON.stringify(e)
                    )), a.subtle.encrypt(n, t, r);
            });
        }), (r.unwrapKey = function(e, r, t, n, a, o, i) {
          var c;
          return Promise.resolve()
            .then(function() {
              return (c = new h.Crypto()), c.subtle.decrypt(n, t, r);
            })
            .then(function(r) {
              var t;
              return (t =
                'jwk' === e.toLowerCase()
                  ? JSON.parse(s.buffer2string(new Uint8Array(r)))
                  : new Uint8Array(r)), c.subtle.importKey(e, t, a, o, i);
            });
        }), (r.alg2jwk = function(e) {
          var r = e.hash,
            t = /(\d+)/.exec(r.name)[1];
          switch (e.name.toUpperCase()) {
            case o.AlgorithmNames.RsaOAEP.toUpperCase():
              return 'RSA-OAEP' + ('1' === t ? '' : '-' + t);
            case o.AlgorithmNames.RsaPSS.toUpperCase():
              return 'PS' + t;
            case o.AlgorithmNames.RsaSSA.toUpperCase():
              return 'RS' + t;
            default:
              throw new o.AlgorithmError(
                o.AlgorithmError.UNSUPPORTED_ALGORITHM,
                e.name
              );
          }
        }), (r.jwk2alg = function(e) {
          throw new Error('Not implemented');
        }), (r.exportKey = function(e, r) {
          var t = this;
          return Promise.resolve().then(function() {
            if ('jwk' === e.toLowerCase()) {
              var a = { kty: 'RSA', ext: !0, key_ops: r.usages };
              return (a.alg = t.alg2jwk(
                r.algorithm
              )), (a.n = o.Base64Url.encode(
                n(r.key[0])
              )), (a.e = o.Base64Url.encode(n(r.key[1]))), 'private' ===
                r.type &&
                (
                  (a.d = o.Base64Url.encode(n(r.key[2]))),
                  (a.p = o.Base64Url.encode(n(r.key[3]))),
                  (a.q = o.Base64Url.encode(n(r.key[4]))),
                  (a.dp = o.Base64Url.encode(n(r.key[5]))),
                  (a.dq = o.Base64Url.encode(n(r.key[6]))),
                  (a.qi = o.Base64Url.encode(n(r.key[7])))
                ), a;
            }
            throw new i.LinerError(i.LinerError.NOT_SUPPORTED);
          });
        }), (r.importKey = function(e, r, t, n, a) {
          return Promise.resolve().then(function() {
            var n,
              s = new c.CryptoKey();
            if (
              (
                (s.algorithm = t),
                (s.usages = a),
                (s.key = []),
                'jwk' === e.toLowerCase()
              )
            )
              return (n = r), (s.key[0] = o.Base64Url.decode(n.n)), (s.key[1] =
                3 === o.Base64Url.decode(n.e)[0]
                  ? new Uint8Array([0, 0, 0, 3])
                  : new Uint8Array([0, 1, 0, 1])), n.d
                ? (
                    (s.type = 'private'),
                    (s.key[2] = o.Base64Url.decode(n.d)),
                    (s.key[3] = o.Base64Url.decode(n.p)),
                    (s.key[4] = o.Base64Url.decode(n.q)),
                    (s.key[5] = o.Base64Url.decode(n.dp)),
                    (s.key[6] = o.Base64Url.decode(n.dq)),
                    (s.key[7] = o.Base64Url.decode(n.qi))
                  )
                : (s.type = 'public'), s;
            throw new i.LinerError(i.LinerError.NOT_SUPPORTED);
          });
        }), (r.checkModule = function() {
          if ('undefined' == typeof asmCrypto)
            throw new i.LinerError(
              i.LinerError.MODULE_NOT_FOUND,
              'asmCrypto',
              'https://github.com/vibornoff/asmcrypto.js'
            );
        }), (r.filterUsages = function(e, r) {
          return e.filter(function(e) {
            return !!r.filter(function(r) {
              return e === r;
            }).length;
          });
        }), r;
      })(o.BaseCrypto);
    r.RsaCrypto = u;
    var h = t(2);
  },
  function(e, r, t) {
    'use strict';
    var n =
      (this && this.__extends) ||
      (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, r) {
              e.__proto__ = r;
            }) ||
          function(e, r) {
            for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t]);
          };
        return function(r, t) {
          function n() {
            this.constructor = r;
          }
          e(r, t), (r.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
        };
      })();
    Object.defineProperty(r, '__esModule', { value: !0 });
    var a = t(0),
      o = t(1),
      i = (function(e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return n(r, e), (r.digest = function(e, r) {
          return Promise.resolve().then(function() {
            if ('undefined' == typeof asmCrypto)
              throw new o.LinerError(
                o.LinerError.MODULE_NOT_FOUND,
                'asmCrypto',
                'https://github.com/vibornoff/asmcrypto.js'
              );
            switch (e.name.toUpperCase()) {
              case a.AlgorithmNames.Sha1:
                return asmCrypto.SHA1.bytes(r).buffer;
              case a.AlgorithmNames.Sha256:
                return asmCrypto.SHA256.bytes(r).buffer;
              case a.AlgorithmNames.Sha512:
                return asmCrypto.SHA512.bytes(r).buffer;
              default:
                throw new o.LinerError(
                  "Not supported algorithm '" + e.name + "'"
                );
            }
          });
        }), r;
      })(a.BaseCrypto);
    r.ShaCrypto = i;
  },
  function(e, r, t) {
    'use strict';
    function n(e, r) {
      return Promise.resolve().then(function() {
        if (e.key) return e;
        if (e.extractable) {
          return new y.Crypto().subtle.exportKey('jwk', e).then(function(t) {
            var n = o(e);
            return n &&
              (n = A.assign(
                n,
                e.algorithm
              )), r.importKey('jwk', t, n, !0, e.usages);
          });
        }
        throw new m.LinerError(
          "'key' is Native CryptoKey. It can't be converted to JS CryptoKey"
        );
      });
    }
    function a(e, r) {
      (A.BrowserInfo().name !== A.Browser.IE &&
        A.BrowserInfo().name !== A.Browser.Edge &&
        A.BrowserInfo().name !== A.Browser.Safari) ||
        !/^rsa/i.test(e.name) ||
        (r.privateKey
          ? (
              d.push({ hash: e.hash, key: r.privateKey }),
              d.push({ hash: e.hash, key: r.publicKey })
            )
          : d.push({ hash: e.hash, key: r }));
    }
    function o(e) {
      var r = null;
      return d.some(function(t) {
        return (
          t.key === e && ((r = A.assign({}, e.algorithm, { hash: t.hash })), !0)
        );
      }), r;
    }
    function i(e, r) {
      var t = [];
      e.privateKey
        ? (t.push(e.privateKey), t.push(e.publicKey))
        : t.push(e), t.forEach(function(e) {
        'keyUsage' in e &&
          (
            (e.usages = e.keyUsage || []),
            e.usages.length ||
              (
                ['verify', 'encrypt', 'wrapKey'].forEach(function(t) {
                  r.indexOf(t) > -1 &&
                    ('public' === e.type || 'secret' === e.type) &&
                    e.usages.push(t);
                }),
                [
                  'sign',
                  'decrypt',
                  'unwrapKey',
                  'deriveKey',
                  'deriveBits'
                ].forEach(function(t) {
                  r.indexOf(t) > -1 &&
                    ('private' === e.type || 'secret' === e.type) &&
                    e.usages.push(t);
                })
              )
          );
      });
    }
    function s(e, r, t) {
      if (r && A.BrowserInfo().name === A.Browser.IE) {
        'extractable' in e && ((e.ext = e.extractable), delete e.extractable);
        var n = null;
        switch (r.name.toUpperCase()) {
          case h.AlgorithmNames.RsaOAEP.toUpperCase():
          case h.AlgorithmNames.RsaPSS.toUpperCase():
          case h.AlgorithmNames.RsaSSA.toUpperCase():
            n = g.RsaCrypto;
            break;
          case h.AlgorithmNames.AesECB.toUpperCase():
          case h.AlgorithmNames.AesCBC.toUpperCase():
          case h.AlgorithmNames.AesGCM.toUpperCase():
            n = w.AesCrypto;
            break;
          default:
            throw new m.LinerError(
              m.LinerError.UNSUPPORTED_ALGORITHM,
              r.name.toUpperCase()
            );
        }
        n && !e.alg && (e.alg = n.alg2jwk(r)), 'key_ops' in e ||
          (e.key_ops = t);
      }
    }
    function c(e) {
      A.BrowserInfo().name === A.Browser.IE &&
        (
          'ext' in e && ((e.extractable = e.ext), delete e.ext),
          delete e.key_ops,
          delete e.alg
        );
    }
    var u =
      (this && this.__extends) ||
      (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, r) {
              e.__proto__ = r;
            }) ||
          function(e, r) {
            for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t]);
          };
        return function(r, t) {
          function n() {
            this.constructor = r;
          }
          e(r, t), (r.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
        };
      })();
    Object.defineProperty(r, '__esModule', { value: !0 });
    var h = t(0),
      p = t(0),
      f = t(0),
      l = t(4),
      y = t(2),
      m = t(1),
      A = t(3),
      w = t(8),
      v = t(11),
      g = t(10),
      C = t(9),
      d = [],
      E = (function(e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return u(r, e), (r.prototype.generateKey = function(r, t, n) {
          var o,
            s = arguments;
          return e.prototype.generateKey
            .apply(this, s)
            .then(function(e) {
              if (
                (
                  (o = f.PrepareAlgorithm(r)),
                  (A.BrowserInfo().name !== A.Browser.Edge ||
                    o.name.toUpperCase() !== h.AlgorithmNames.AesGCM) &&
                    l.nativeSubtle
                )
              )
                try {
                  return l.nativeSubtle.generateKey
                    .apply(l.nativeSubtle, s)
                    .catch(function(e) {
                      console.warn(
                        'WebCrypto: native generateKey for ' +
                          o.name +
                          " doesn't work.",
                        e.message || ''
                      );
                    });
                } catch (e) {
                  console.warn(
                    'WebCrypto: native generateKey for ' +
                      o.name +
                      " doesn't work.",
                    e.message || ''
                  );
                }
            })
            .then(function(e) {
              if (e) return i(e, n), a(o, e), e;
              var r;
              switch (o.name.toLowerCase()) {
                case h.AlgorithmNames.AesECB.toLowerCase():
                case h.AlgorithmNames.AesCBC.toLowerCase():
                case h.AlgorithmNames.AesGCM.toLowerCase():
                  r = w.AesCrypto;
                  break;
                case h.AlgorithmNames.EcDSA.toLowerCase():
                case h.AlgorithmNames.EcDH.toLowerCase():
                  r = C.EcCrypto;
                  break;
                case h.AlgorithmNames.RsaOAEP.toLowerCase():
                case h.AlgorithmNames.RsaPSS.toLowerCase():
                case h.AlgorithmNames.RsaSSA.toLowerCase():
                  r = g.RsaCrypto;
                  break;
                default:
                  throw new m.LinerError(
                    m.LinerError.UNSUPPORTED_ALGORITHM,
                    o.name.toLowerCase()
                  );
              }
              return r.generateKey(o, t, n);
            });
        }), (r.prototype.digest = function(r, t) {
          var n,
            a,
            o = arguments;
          return e.prototype.digest
            .apply(this, o)
            .then(function(e) {
              if (
                (
                  (n = f.PrepareAlgorithm(r)),
                  (a = f.PrepareData(t, 'data')),
                  l.nativeSubtle
                )
              )
                try {
                  return l.nativeSubtle.digest
                    .apply(l.nativeSubtle, o)
                    .catch(function(e) {
                      console.warn(
                        'WebCrypto: native digest for ' +
                          n.name +
                          " doesn't work.",
                        e.message || ''
                      );
                    });
                } catch (e) {
                  console.warn(
                    'WebCrypto: native digest for ' + n.name + " doesn't work.",
                    e.message || ''
                  );
                }
            })
            .then(function(e) {
              return e || v.ShaCrypto.digest(n, a);
            });
        }), (r.prototype.sign = function(r, t, a) {
          var i,
            s,
            c = arguments;
          return e.prototype.sign
            .apply(this, c)
            .then(function(e) {
              (i = f.PrepareAlgorithm(r)), (s = f.PrepareData(a, 'data'));
              var n = o(t);
              if ((n && (c[0] = A.assign(i, n)), l.nativeSubtle))
                try {
                  return l.nativeSubtle.sign
                    .apply(l.nativeSubtle, c)
                    .catch(function(e) {
                      console.warn(
                        'WebCrypto: native sign for ' +
                          i.name +
                          " doesn't work.",
                        e.message || ''
                      );
                    });
                } catch (e) {
                  console.warn(
                    'WebCrypto: native sign for ' + i.name + " doesn't work.",
                    e.message || ''
                  );
                }
            })
            .then(function(e) {
              if (e) return e;
              var r;
              switch (i.name.toLowerCase()) {
                case h.AlgorithmNames.EcDSA.toLowerCase():
                  r = C.EcCrypto;
                  break;
                case h.AlgorithmNames.RsaSSA.toLowerCase():
                case h.AlgorithmNames.RsaPSS.toLowerCase():
                  r = g.RsaCrypto;
                  break;
                default:
                  throw new m.LinerError(
                    m.LinerError.UNSUPPORTED_ALGORITHM,
                    i.name.toLowerCase()
                  );
              }
              return n(t, r).then(function(e) {
                return r.sign(i, e, s);
              });
            });
        }), (r.prototype.verify = function(r, t, a, i) {
          var s,
            c,
            u,
            p = arguments;
          return e.prototype.verify
            .apply(this, p)
            .then(function(e) {
              (s = f.PrepareAlgorithm(
                r
              )), (c = f.PrepareData(a, 'data')), (u = f.PrepareData(i, 'data'));
              var n = o(t);
              if ((n && (p[0] = A.assign(s, n)), l.nativeSubtle))
                try {
                  return l.nativeSubtle.verify
                    .apply(l.nativeSubtle, p)
                    .catch(function(e) {
                      console.warn(
                        'WebCrypto: native verify for ' +
                          s.name +
                          " doesn't work.",
                        e.message || ''
                      );
                    });
                } catch (e) {
                  console.warn(
                    'WebCrypto: native verify for ' + s.name + " doesn't work.",
                    e.message || ''
                  );
                }
            })
            .then(function(e) {
              if ('boolean' == typeof e) return e;
              var r;
              switch (s.name.toLowerCase()) {
                case h.AlgorithmNames.EcDSA.toLowerCase():
                  r = C.EcCrypto;
                  break;
                case h.AlgorithmNames.RsaSSA.toLowerCase():
                case h.AlgorithmNames.RsaPSS.toLowerCase():
                  r = g.RsaCrypto;
                  break;
                default:
                  throw new m.LinerError(
                    m.LinerError.UNSUPPORTED_ALGORITHM,
                    s.name.toLowerCase()
                  );
              }
              return n(t, r).then(function(e) {
                return r.verify(s, e, c, u);
              });
            });
        }), (r.prototype.deriveBits = function(r, t, n) {
          var a,
            o = arguments;
          return e.prototype.deriveBits
            .apply(this, o)
            .then(function(e) {
              if (((a = f.PrepareAlgorithm(r)), l.nativeSubtle))
                try {
                  return l.nativeSubtle.deriveBits
                    .apply(l.nativeSubtle, o)
                    .catch(function(e) {
                      console.warn(
                        'WebCrypto: native deriveBits for ' +
                          a.name +
                          " doesn't work.",
                        e.message || ''
                      );
                    });
                } catch (e) {
                  console.warn(
                    'WebCrypto: native deriveBits for ' +
                      a.name +
                      " doesn't work.",
                    e.message || ''
                  );
                }
            })
            .then(function(e) {
              if (e) return e;
              var r;
              switch (a.name.toLowerCase()) {
                case h.AlgorithmNames.EcDH.toLowerCase():
                  r = C.EcCrypto;
                  break;
                default:
                  throw new m.LinerError(
                    m.LinerError.NOT_SUPPORTED,
                    'deriveBits'
                  );
              }
              return r.deriveBits(a, t, n);
            });
        }), (r.prototype.deriveKey = function(r, t, n, a, o) {
          var s,
            c,
            u = arguments;
          return e.prototype.deriveKey
            .apply(this, u)
            .then(function(e) {
              if (
                (
                  (s = f.PrepareAlgorithm(r)),
                  (c = f.PrepareAlgorithm(n)),
                  l.nativeSubtle
                )
              )
                try {
                  return l.nativeSubtle.deriveKey
                    .apply(l.nativeSubtle, u)
                    .catch(function(e) {
                      console.warn(
                        'WebCrypto: native deriveKey for ' +
                          s.name +
                          " doesn't work.",
                        e.message || ''
                      );
                    });
                } catch (e) {
                  console.warn(
                    'WebCrypto: native deriveKey for ' +
                      s.name +
                      " doesn't work.",
                    e.message || ''
                  );
                }
            })
            .then(function(e) {
              if (e) return i(e, o), e;
              var r;
              switch (s.name.toLowerCase()) {
                case h.AlgorithmNames.EcDH.toLowerCase():
                  r = C.EcCrypto;
                  break;
                default:
                  throw new m.LinerError(
                    m.LinerError.NOT_SUPPORTED,
                    'deriveBits'
                  );
              }
              return r.deriveKey(s, t, c, a, o);
            });
        }), (r.prototype.encrypt = function(r, t, a) {
          var o,
            i,
            s = arguments;
          return e.prototype.encrypt
            .apply(this, s)
            .then(function(e) {
              if (
                (
                  (o = f.PrepareAlgorithm(r)),
                  (i = f.PrepareData(a, 'data')),
                  l.nativeSubtle
                )
              )
                try {
                  return l.nativeSubtle.encrypt
                    .apply(l.nativeSubtle, s)
                    .catch(function(e) {
                      console.warn(
                        "WebCrypto: native 'encrypt' for " +
                          o.name +
                          " doesn't work.",
                        e.message || ''
                      );
                    });
                } catch (e) {
                  console.warn(
                    "WebCrypto: native 'encrypt' for " +
                      o.name +
                      " doesn't work.",
                    e.message || ''
                  );
                }
            })
            .then(function(e) {
              if (e) {
                if (
                  A.BrowserInfo().name === A.Browser.IE &&
                  o.name.toUpperCase() === h.AlgorithmNames.AesGCM &&
                  e.ciphertext
                ) {
                  var r = new Uint8Array(
                      e.ciphertext.byteLength + e.tag.byteLength
                    ),
                    a = 0;
                  new Uint8Array(e.ciphertext).forEach(function(e) {
                    return (r[a++] = e);
                  }), new Uint8Array(e.tag).forEach(function(e) {
                    return (r[a++] = e);
                  }), (e = r.buffer);
                }
                return Promise.resolve(e);
              }
              var s;
              switch (o.name.toLowerCase()) {
                case h.AlgorithmNames.AesECB.toLowerCase():
                case h.AlgorithmNames.AesCBC.toLowerCase():
                case h.AlgorithmNames.AesGCM.toLowerCase():
                  s = w.AesCrypto;
                  break;
                case h.AlgorithmNames.RsaOAEP.toLowerCase():
                  s = g.RsaCrypto;
                  break;
                default:
                  throw new m.LinerError(m.LinerError.NOT_SUPPORTED, 'encrypt');
              }
              return n(t, s).then(function(e) {
                return s.encrypt(o, e, i);
              });
            });
        }), (r.prototype.decrypt = function(r, t, n) {
          var a,
            o,
            i = arguments;
          return e.prototype.decrypt.apply(this, i).then(function(e) {
            (a = f.PrepareAlgorithm(r)), (o = f.PrepareData(n, 'data'));
            var i = o;
            if (
              A.BrowserInfo().name === A.Browser.IE &&
              a.name.toUpperCase() === h.AlgorithmNames.AesGCM
            ) {
              var s = o.byteLength - a.tagLength / 8;
              i = {
                ciphertext: o.buffer.slice(0, s),
                tag: o.buffer.slice(s, o.byteLength)
              };
            }
            if (t.key) {
              var c = void 0;
              switch (a.name.toLowerCase()) {
                case h.AlgorithmNames.AesECB.toLowerCase():
                case h.AlgorithmNames.AesCBC.toLowerCase():
                case h.AlgorithmNames.AesGCM.toLowerCase():
                  c = w.AesCrypto;
                  break;
                case h.AlgorithmNames.RsaOAEP.toLowerCase():
                  c = g.RsaCrypto;
                  break;
                default:
                  throw new m.LinerError(m.LinerError.NOT_SUPPORTED, 'decrypt');
              }
              return c.decrypt(a, t, o);
            }
            return l.nativeSubtle.decrypt.call(l.nativeSubtle, a, t, i);
          });
        }), (r.prototype.wrapKey = function(r, t, n, a) {
          var o,
            i = arguments;
          return e.prototype.wrapKey
            .apply(this, i)
            .then(function(e) {
              if (((o = f.PrepareAlgorithm(a)), l.nativeSubtle))
                try {
                  return l.nativeSubtle.wrapKey
                    .apply(l.nativeSubtle, i)
                    .catch(function(e) {
                      console.warn(
                        "WebCrypto: native 'wrapKey' for " +
                          o.name +
                          " doesn't work.",
                        e.message || ''
                      );
                    });
                } catch (e) {
                  console.warn(
                    "WebCrypto: native 'wrapKey' for " +
                      o.name +
                      " doesn't work.",
                    e.message || ''
                  );
                }
            })
            .then(function(e) {
              if (e) return e;
              var a;
              switch (o.name.toLowerCase()) {
                case h.AlgorithmNames.AesECB.toLowerCase():
                case h.AlgorithmNames.AesCBC.toLowerCase():
                case h.AlgorithmNames.AesGCM.toLowerCase():
                  a = w.AesCrypto;
                  break;
                case h.AlgorithmNames.RsaOAEP.toLowerCase():
                  a = g.RsaCrypto;
                  break;
                default:
                  throw new m.LinerError(m.LinerError.NOT_SUPPORTED, 'wrapKey');
              }
              return a.wrapKey(r, t, n, o);
            });
        }), (r.prototype.unwrapKey = function(r, t, n, a, o, s, c) {
          var u,
            p,
            y,
            v = this,
            C = arguments;
          return e.prototype.unwrapKey.apply(this, C).then(function(e) {
            if (
              (
                (u = f.PrepareAlgorithm(a)),
                (p = f.PrepareAlgorithm(o)),
                (y = f.PrepareData(t, 'wrappedKey')),
                n.key
              )
            ) {
              var d = void 0;
              switch (u.name.toLowerCase()) {
                case h.AlgorithmNames.AesECB.toLowerCase():
                case h.AlgorithmNames.AesCBC.toLowerCase():
                case h.AlgorithmNames.AesGCM.toLowerCase():
                  d = w.AesCrypto;
                  break;
                case h.AlgorithmNames.RsaOAEP.toLowerCase():
                  d = g.RsaCrypto;
                  break;
                default:
                  throw new m.LinerError(
                    m.LinerError.NOT_SUPPORTED,
                    'unwrapKey'
                  );
              }
              return d.unwrapKey(r, y, n, u, p, s, c);
            }
            return l.nativeSubtle.unwrapKey
              .apply(l.nativeSubtle, C)
              .catch(function(e) {
                return v.decrypt(u, n, t).then(function(e) {
                  var t;
                  return (t =
                    'jwk' === r
                      ? JSON.parse(A.buffer2string(new Uint8Array(e)))
                      : e), v.importKey(r, t, p, s, c);
                });
              })
              .then(function(e) {
                if (e) return i(e, c), e;
              })
              .catch(function(e) {
                throw (
                  console.error(e),
                  new Error('Cannot unwrap key from incoming data')
                );
              });
          });
        }), (r.prototype.exportKey = function(r, t) {
          var n = arguments;
          return e.prototype.exportKey
            .apply(this, n)
            .then(function() {
              if (l.nativeSubtle)
                try {
                  return l.nativeSubtle.exportKey
                    .apply(l.nativeSubtle, n)
                    .catch(function(e) {
                      console.warn(
                        "WebCrypto: native 'exportKey' for " +
                          t.algorithm.name +
                          " doesn't work.",
                        e.message || ''
                      );
                    });
                } catch (e) {
                  console.warn(
                    "WebCrypto: native 'exportKey' for " +
                      t.algorithm.name +
                      " doesn't work.",
                    e.message || ''
                  );
                }
            })
            .then(function(e) {
              if (e) {
                'jwk' === r &&
                  e instanceof ArrayBuffer &&
                  (
                    (e = A.buffer2string(new Uint8Array(e))),
                    (e = JSON.parse(e))
                  );
                var n = o(t);
                return n || (n = A.assign({}, t.algorithm)), s(
                  e,
                  n,
                  t.usages
                ), Promise.resolve(e);
              }
              if (!t.key)
                throw new m.LinerError(
                  'Cannot export native CryptoKey from JS implementation'
                );
              var a;
              switch (t.algorithm.name.toLowerCase()) {
                case h.AlgorithmNames.AesECB.toLowerCase():
                case h.AlgorithmNames.AesCBC.toLowerCase():
                case h.AlgorithmNames.AesGCM.toLowerCase():
                  a = w.AesCrypto;
                  break;
                case h.AlgorithmNames.EcDH.toLowerCase():
                case h.AlgorithmNames.EcDSA.toLowerCase():
                  a = C.EcCrypto;
                  break;
                case h.AlgorithmNames.RsaSSA.toLowerCase():
                case h.AlgorithmNames.RsaPSS.toLowerCase():
                case h.AlgorithmNames.RsaOAEP.toLowerCase():
                  a = g.RsaCrypto;
                  break;
                default:
                  throw new m.LinerError(
                    m.LinerError.UNSUPPORTED_ALGORITHM,
                    t.algorithm.name.toLowerCase()
                  );
              }
              return a.exportKey(r, t);
            });
        }), (r.prototype.importKey = function(r, t, n, o, s) {
          var u,
            p,
            y = arguments;
          return e.prototype.importKey
            .apply(this, y)
            .then(function(e) {
              if (
                (
                  (u = f.PrepareAlgorithm(n)),
                  (p = t),
                  (A.BrowserInfo().name !== A.Browser.Safari &&
                    A.BrowserInfo().name !== A.Browser.IE) ||
                    (
                      A.BrowserInfo().name === A.Browser.IE &&
                        ((t = A.assign({}, t)), c(t)),
                      (y[1] = A.string2buffer(JSON.stringify(t)).buffer)
                    ),
                  ArrayBuffer.isView(t) && (p = f.PrepareData(t, 'keyData')),
                  l.nativeSubtle
                )
              )
                try {
                  return l.nativeSubtle.importKey
                    .apply(l.nativeSubtle, y)
                    .catch(function(e) {
                      console.warn(
                        "WebCrypto: native 'importKey' for " +
                          u.name +
                          " doesn't work.",
                        e.message || ''
                      );
                    });
                } catch (e) {
                  console.warn(
                    "WebCrypto: native 'importKey' for " +
                      u.name +
                      " doesn't work.",
                    e.message || ''
                  );
                }
            })
            .then(function(e) {
              if (e) return a(u, e), i(e, s), Promise.resolve(e);
              var t;
              switch (u.name.toLowerCase()) {
                case h.AlgorithmNames.AesECB.toLowerCase():
                case h.AlgorithmNames.AesCBC.toLowerCase():
                case h.AlgorithmNames.AesGCM.toLowerCase():
                  t = w.AesCrypto;
                  break;
                case h.AlgorithmNames.EcDH.toLowerCase():
                case h.AlgorithmNames.EcDSA.toLowerCase():
                  t = C.EcCrypto;
                  break;
                case h.AlgorithmNames.RsaSSA.toLowerCase():
                case h.AlgorithmNames.RsaPSS.toLowerCase():
                case h.AlgorithmNames.RsaOAEP.toLowerCase():
                  t = g.RsaCrypto;
                  break;
                default:
                  throw new m.LinerError(
                    m.LinerError.UNSUPPORTED_ALGORITHM,
                    u.name.toLowerCase()
                  );
              }
              return t.importKey(r, p, u, o, s);
            });
        }), r;
      })(p.SubtleCrypto);
    (r.SubtleCrypto = E), Uint8Array.prototype.forEach ||
      (Uint8Array.prototype.forEach = function(e) {
        for (var r = 0; r < this.length; r++) e(this[r], r, this);
      }), Uint8Array.prototype.slice ||
      (Uint8Array.prototype.slice = function(e, r) {
        return new Uint8Array(this.buffer.slice(e, r));
      }), Uint8Array.prototype.filter ||
      (Uint8Array.prototype.filter = function(e) {
        for (var r = [], t = 0; t < this.length; t++)
          e(this[t], t, this) && r.push(this[t]);
        return new Uint8Array(r);
      });
  },
  function(e, r) {
    var t;
    t = (function() {
      return this;
    })();
    try {
      t = t || Function('return this')() || (0, eval)('this');
    } catch (e) {
      'object' == typeof window && (t = window);
    }
    e.exports = t;
  },
  function(e, r) {
    e.exports = require('crypto');
  },
  ,
  function(e, r, t) {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = t(7),
      a = self;
    Object.freeze(Math), Object.freeze(Math.random), Object.freeze(
      Math.imul
    ), n.nativeCrypto &&
      Object.freeze(
        n.nativeCrypto.getRandomValues
      ), delete self.crypto, (a.crypto = new n.Crypto()), Object.freeze(
      a.crypto
    ), (r.crypto = a.crypto);
  }
]);
/*! asmCrypto, (c) 2013 Artem S Vybornov, opensource.org/licenses/MIT */
!(function(a, b) {
  function c() {
    var a = Error.apply(this, arguments);
    (this.message = a.message), (this.stack = a.stack);
  }
  function d() {
    var a = Error.apply(this, arguments);
    (this.message = a.message), (this.stack = a.stack);
  }
  function e() {
    var a = Error.apply(this, arguments);
    (this.message = a.message), (this.stack = a.stack);
  }
  function f(a, b) {
    b = !!b;
    for (
      var c = a.length, d = new Uint8Array(b ? 4 * c : c), e = 0, f = 0;
      c > e;
      e++
    ) {
      var g = a.charCodeAt(e);
      if (b && g >= 55296 && 56319 >= g) {
        if (++e >= c)
          throw new Error(
            'Malformed string, low surrogate expected at position ' + e
          );
        g = ((55296 ^ g) << 10) | 65536 | (56320 ^ a.charCodeAt(e));
      } else if (!b && g >>> 8)
        throw new Error('Wide characters are not allowed.');
      !b || 127 >= g
        ? (d[f++] = g)
        : 2047 >= g
          ? ((d[f++] = 192 | (g >> 6)), (d[f++] = 128 | (63 & g)))
          : 65535 >= g
            ? (
                (d[f++] = 224 | (g >> 12)),
                (d[f++] = 128 | ((g >> 6) & 63)),
                (d[f++] = 128 | (63 & g))
              )
            : (
                (d[f++] = 240 | (g >> 18)),
                (d[f++] = 128 | ((g >> 12) & 63)),
                (d[f++] = 128 | ((g >> 6) & 63)),
                (d[f++] = 128 | (63 & g))
              );
    }
    return d.subarray(0, f);
  }
  function g(a) {
    var b = a.length;
    1 & b && ((a = '0' + a), b++);
    for (var c = new Uint8Array(b >> 1), d = 0; b > d; d += 2)
      c[d >> 1] = parseInt(a.substr(d, 2), 16);
    return c;
  }
  function h(a) {
    return f(atob(a));
  }
  function i(a, b) {
    b = !!b;
    for (var c = a.length, d = new Array(c), e = 0, f = 0; c > e; e++) {
      var g = a[e];
      if (!b || 128 > g) d[f++] = g;
      else if (g >= 192 && 224 > g && c > e + 1)
        d[f++] = ((31 & g) << 6) | (63 & a[++e]);
      else if (g >= 224 && 240 > g && c > e + 2)
        d[f++] = ((15 & g) << 12) | ((63 & a[++e]) << 6) | (63 & a[++e]);
      else {
        if (!(g >= 240 && 248 > g && c > e + 3))
          throw new Error('Malformed UTF8 character at byte offset ' + e);
        var h =
          ((7 & g) << 18) |
          ((63 & a[++e]) << 12) |
          ((63 & a[++e]) << 6) |
          (63 & a[++e]);
        65535 >= h
          ? (d[f++] = h)
          : (
              (h ^= 65536),
              (d[f++] = 55296 | (h >> 10)),
              (d[f++] = 56320 | (1023 & h))
            );
      }
    }
    for (var i = '', j = 16384, e = 0; f > e; e += j)
      i += String.fromCharCode.apply(
        String,
        d.slice(e, f >= e + j ? e + j : f)
      );
    return i;
  }
  function j(a) {
    for (var b = '', c = 0; c < a.length; c++) {
      var d = (255 & a[c]).toString(16);
      d.length < 2 && (b += '0'), (b += d);
    }
    return b;
  }
  function k(a) {
    return btoa(i(a));
  }
  function l(a) {
    return (a -= 1), (a |= a >>> 1), (a |= a >>> 2), (a |= a >>> 4), (a |=
      a >>> 8), (a |= a >>> 16), (a += 1);
  }
  function m(a) {
    return 'number' == typeof a;
  }
  function n(a) {
    return 'string' == typeof a;
  }
  function o(a) {
    return a instanceof ArrayBuffer;
  }
  function p(a) {
    return a instanceof Uint8Array;
  }
  function q(a) {
    return (
      a instanceof Int8Array ||
      a instanceof Uint8Array ||
      a instanceof Int16Array ||
      a instanceof Uint16Array ||
      a instanceof Int32Array ||
      a instanceof Uint32Array ||
      a instanceof Float32Array ||
      a instanceof Float64Array
    );
  }
  function r(a, b) {
    var c = b.heap,
      d = c ? c.byteLength : b.heapSize || 65536;
    if (4095 & d || 0 >= d)
      throw new Error(
        'heap size must be a positive integer and a multiple of 4096'
      );
    return (c = c || new a(new ArrayBuffer(d)));
  }
  function s(a, b, c, d, e) {
    var f = a.length - b,
      g = e > f ? f : e;
    return a.set(c.subarray(d, d + g), b), g;
  }
  function t(a) {
    (a = a || {}), (this.heap = r(Uint8Array, a).subarray(
      Xa.HEAP_DATA
    )), (this.asm =
      a.asm ||
      Xa(
        b,
        null,
        this.heap.buffer
      )), (this.mode = null), (this.key = null), this.reset(a);
  }
  function u(a) {
    if (void 0 !== a) {
      if (o(a) || p(a)) a = new Uint8Array(a);
      else {
        if (!n(a)) throw new TypeError('unexpected key type');
        a = f(a);
      }
      var b = a.length;
      if (16 !== b && 24 !== b && 32 !== b) throw new d('illegal key size');
      var c = new DataView(a.buffer, a.byteOffset, a.byteLength);
      this.asm.set_key(
        b >> 2,
        c.getUint32(0),
        c.getUint32(4),
        c.getUint32(8),
        c.getUint32(12),
        b > 16 ? c.getUint32(16) : 0,
        b > 16 ? c.getUint32(20) : 0,
        b > 24 ? c.getUint32(24) : 0,
        b > 24 ? c.getUint32(28) : 0
      ), (this.key = a);
    } else if (!this.key) throw new Error('key is required');
  }
  function v(a) {
    if (void 0 !== a) {
      if (o(a) || p(a)) a = new Uint8Array(a);
      else {
        if (!n(a)) throw new TypeError('unexpected iv type');
        a = f(a);
      }
      if (16 !== a.length) throw new d('illegal iv size');
      var b = new DataView(a.buffer, a.byteOffset, a.byteLength);
      (this.iv = a), this.asm.set_iv(
        b.getUint32(0),
        b.getUint32(4),
        b.getUint32(8),
        b.getUint32(12)
      );
    } else (this.iv = null), this.asm.set_iv(0, 0, 0, 0);
  }
  function w(a) {
    void 0 !== a ? (this.padding = !!a) : (this.padding = !0);
  }
  function x(a) {
    return (a =
      a || {}), (this.result = null), (this.pos = 0), (this.len = 0), u.call(
      this,
      a.key
    ), this.hasOwnProperty('iv') && v.call(this, a.iv), this.hasOwnProperty(
      'padding'
    ) && w.call(this, a.padding), this;
  }
  function y(a) {
    if ((n(a) && (a = f(a)), o(a) && (a = new Uint8Array(a)), !p(a)))
      throw new TypeError("data isn't of expected type");
    for (
      var b = this.asm,
        c = this.heap,
        d = Xa.ENC[this.mode],
        e = Xa.HEAP_DATA,
        g = this.pos,
        h = this.len,
        i = 0,
        j = a.length || 0,
        k = 0,
        l = (h + j) & -16,
        m = 0,
        q = new Uint8Array(l);
      j > 0;

    )
      (m = s(c, g + h, a, i, j)), (h += m), (i += m), (j -= m), (m = b.cipher(
        d,
        e + g,
        h
      )), m && q.set(c.subarray(g, g + m), k), (k += m), h > m
        ? ((g += m), (h -= m))
        : ((g = 0), (h = 0));
    return (this.result = q), (this.pos = g), (this.len = h), this;
  }
  function z(a) {
    var b = null,
      c = 0;
    void 0 !== a && ((b = y.call(this, a).result), (c = b.length));
    var e = this.asm,
      f = this.heap,
      g = Xa.ENC[this.mode],
      h = Xa.HEAP_DATA,
      i = this.pos,
      j = this.len,
      k = 16 - j % 16,
      l = j;
    if (this.hasOwnProperty('padding')) {
      if (this.padding) {
        for (var m = 0; k > m; ++m) f[i + j + m] = k;
        (j += k), (l = j);
      } else if (j % 16)
        throw new d('data length must be a multiple of the block size');
    } else j += k;
    var n = new Uint8Array(c + l);
    return c && n.set(b), j && e.cipher(g, h + i, j), l &&
      n.set(
        f.subarray(i, i + l),
        c
      ), (this.result = n), (this.pos = 0), (this.len = 0), this;
  }
  function A(a) {
    (this.nonce = null), (this.counter = 0), (this.counterSize = 0), t.call(
      this,
      a
    ), (this.mode = 'CTR');
  }
  function B(a) {
    A.call(this, a);
  }
  function C(a, b, c) {
    if (void 0 !== c) {
      if (8 > c || c > 48) throw new d('illegal counter size');
      this.counterSize = c;
      var e = Math.pow(2, c) - 1;
      this.asm.set_mask(0, 0, (e / 4294967296) | 0, 0 | e);
    } else
      (this.counterSize = c = 48), this.asm.set_mask(0, 0, 65535, 4294967295);
    if (void 0 === a) throw new Error('nonce is required');
    if (o(a) || p(a)) a = new Uint8Array(a);
    else {
      if (!n(a)) throw new TypeError('unexpected nonce type');
      a = f(a);
    }
    var g = a.length;
    if (!g || g > 16) throw new d('illegal nonce size');
    this.nonce = a;
    var h = new DataView(new ArrayBuffer(16));
    if (
      (
        new Uint8Array(h.buffer).set(a),
        this.asm.set_nonce(
          h.getUint32(0),
          h.getUint32(4),
          h.getUint32(8),
          h.getUint32(12)
        ),
        void 0 !== b
      )
    ) {
      if (!m(b)) throw new TypeError('unexpected counter type');
      if (0 > b || b >= Math.pow(2, c)) throw new d('illegal counter value');
      (this.counter = b), this.asm.set_counter(
        0,
        0,
        (b / 4294967296) | 0,
        0 | b
      );
    } else this.counter = b = 0;
  }
  function D(a) {
    return (a = a || {}), x.call(this, a), C.call(
      this,
      a.nonce,
      a.counter,
      a.counterSize
    ), this;
  }
  function E(a) {
    for (
      var b = this.heap, c = this.asm, d = 0, e = a.length || 0, f = 0;
      e > 0;

    ) {
      for (f = s(b, 0, a, d, e), d += f, e -= f; 15 & f; ) b[f++] = 0;
      c.mac(Xa.MAC.GCM, Xa.HEAP_DATA, f);
    }
  }
  function F(a) {
    (this.nonce = null), (this.adata = null), (this.iv = null), (this.counter = 1), (this.tagSize = 16), t.call(
      this,
      a
    ), (this.mode = 'GCM');
  }
  function G(a) {
    F.call(this, a);
  }
  function H(a) {
    F.call(this, a);
  }
  function I(a) {
    (a = a || {}), x.call(this, a);
    var b = this.asm,
      c = this.heap;
    b.gcm_init();
    var e = a.tagSize;
    if (void 0 !== e) {
      if (!m(e)) throw new TypeError('tagSize must be a number');
      if (4 > e || e > 16) throw new d('illegal tagSize value');
      this.tagSize = e;
    } else this.tagSize = 16;
    var g = a.nonce;
    if (void 0 === g) throw new Error('nonce is required');
    if (p(g) || o(g)) g = new Uint8Array(g);
    else {
      if (!n(g)) throw new TypeError('unexpected nonce type');
      g = f(g);
    }
    this.nonce = g;
    var h = g.length || 0,
      i = new Uint8Array(16);
    12 !== h
      ? (
          E.call(this, g),
          (c[0] = c[1] = c[2] = c[3] = c[4] = c[5] = c[6] = c[7] = c[8] = c[9] = c[10] = 0),
          (c[11] = h >>> 29),
          (c[12] = (h >>> 21) & 255),
          (c[13] = (h >>> 13) & 255),
          (c[14] = (h >>> 5) & 255),
          (c[15] = (h << 3) & 255),
          b.mac(Xa.MAC.GCM, Xa.HEAP_DATA, 16),
          b.get_iv(Xa.HEAP_DATA),
          b.set_iv(),
          i.set(c.subarray(0, 16))
        )
      : (i.set(g), (i[15] = 1));
    var j = new DataView(i.buffer);
    (this.gamma0 = j.getUint32(12)), b.set_nonce(
      j.getUint32(0),
      j.getUint32(4),
      j.getUint32(8),
      0
    ), b.set_mask(0, 0, 0, 4294967295);
    var k = a.adata;
    if (void 0 !== k && null !== k) {
      if (p(k) || o(k)) k = new Uint8Array(k);
      else {
        if (!n(k)) throw new TypeError('unexpected adata type');
        k = f(k);
      }
      if (k.length > $a) throw new d('illegal adata length');
      k.length ? ((this.adata = k), E.call(this, k)) : (this.adata = null);
    } else this.adata = null;
    var l = a.counter;
    if (void 0 !== l) {
      if (!m(l)) throw new TypeError('counter must be a number');
      if (1 > l || l > 4294967295)
        throw new RangeError('counter must be a positive 32-bit integer');
      (this.counter = l), b.set_counter(0, 0, 0, (this.gamma0 + l) | 0);
    } else (this.counter = 1), b.set_counter(0, 0, 0, (this.gamma0 + 1) | 0);
    var q = a.iv;
    if (void 0 !== q) {
      if (!m(l)) throw new TypeError('counter must be a number');
      (this.iv = q), v.call(this, q);
    }
    return this;
  }
  function J(a) {
    if ((n(a) && (a = f(a)), o(a) && (a = new Uint8Array(a)), !p(a)))
      throw new TypeError("data isn't of expected type");
    var b = 0,
      c = a.length || 0,
      d = this.asm,
      e = this.heap,
      g = this.counter,
      h = this.pos,
      i = this.len,
      j = 0,
      k = (i + c) & -16,
      l = 0;
    if (((g - 1) << 4) + i + c > $a) throw new RangeError('counter overflow');
    for (var m = new Uint8Array(k); c > 0; )
      (l = s(e, h + i, a, b, c)), (i += l), (b += l), (c -= l), (l = d.cipher(
        Xa.ENC.CTR,
        Xa.HEAP_DATA + h,
        i
      )), (l = d.mac(Xa.MAC.GCM, Xa.HEAP_DATA + h, l)), l &&
        m.set(e.subarray(h, h + l), j), (g += l >>> 4), (j += l), i > l
        ? ((h += l), (i -= l))
        : ((h = 0), (i = 0));
    return (this.result = m), (this.counter = g), (this.pos = h), (this.len = i), this;
  }
  function K() {
    var a = this.asm,
      b = this.heap,
      c = this.counter,
      d = this.tagSize,
      e = this.adata,
      f = this.pos,
      g = this.len,
      h = new Uint8Array(g + d);
    a.cipher(Xa.ENC.CTR, Xa.HEAP_DATA + f, (g + 15) & -16), g &&
      h.set(b.subarray(f, f + g));
    for (var i = g; 15 & i; i++) b[f + i] = 0;
    a.mac(Xa.MAC.GCM, Xa.HEAP_DATA + f, i);
    var j = null !== e ? e.length : 0,
      k = ((c - 1) << 4) + g;
    return (b[0] = b[1] = b[2] = 0), (b[3] = j >>> 29), (b[4] =
      j >>> 21), (b[5] = (j >>> 13) & 255), (b[6] = (j >>> 5) & 255), (b[7] =
      (j << 3) & 255), (b[8] = b[9] = b[10] = 0), (b[11] = k >>> 29), (b[12] =
      (k >>> 21) & 255), (b[13] = (k >>> 13) & 255), (b[14] =
      (k >>> 5) & 255), (b[15] = (k << 3) & 255), a.mac(
      Xa.MAC.GCM,
      Xa.HEAP_DATA,
      16
    ), a.get_iv(Xa.HEAP_DATA), a.set_counter(0, 0, 0, this.gamma0), a.cipher(
      Xa.ENC.CTR,
      Xa.HEAP_DATA,
      16
    ), h.set(
      b.subarray(0, d),
      g
    ), (this.result = h), (this.counter = 1), (this.pos = 0), (this.len = 0), this;
  }
  function L(a) {
    var b = J.call(this, a).result,
      c = K.call(this).result,
      d = new Uint8Array(b.length + c.length);
    return b.length && d.set(b), c.length &&
      d.set(c, b.length), (this.result = d), this;
  }
  function M(a) {
    if ((n(a) && (a = f(a)), o(a) && (a = new Uint8Array(a)), !p(a)))
      throw new TypeError("data isn't of expected type");
    var b = 0,
      c = a.length || 0,
      d = this.asm,
      e = this.heap,
      g = this.counter,
      h = this.tagSize,
      i = this.pos,
      j = this.len,
      k = 0,
      l = j + c > h ? (j + c - h) & -16 : 0,
      m = j + c - l,
      q = 0;
    if (((g - 1) << 4) + j + c > $a) throw new RangeError('counter overflow');
    for (var r = new Uint8Array(l); c > m; )
      (q = s(e, i + j, a, b, c - m)), (j += q), (b += q), (c -= q), (q = d.mac(
        Xa.MAC.GCM,
        Xa.HEAP_DATA + i,
        q
      )), (q = d.cipher(Xa.DEC.CTR, Xa.HEAP_DATA + i, q)), q &&
        r.set(e.subarray(i, i + q), k), (g +=
        q >>> 4), (k += q), (i = 0), (j = 0);
    return c > 0 &&
      (j += s(
        e,
        0,
        a,
        b,
        c
      )), (this.result = r), (this.counter = g), (this.pos = i), (this.len = j), this;
  }
  function N() {
    var a = this.asm,
      b = this.heap,
      d = this.tagSize,
      f = this.adata,
      g = this.counter,
      h = this.pos,
      i = this.len,
      j = i - d,
      k = 0;
    if (d > i) throw new c('authentication tag not found');
    for (
      var l = new Uint8Array(j),
        m = new Uint8Array(b.subarray(h + j, h + i)),
        n = j;
      15 & n;
      n++
    )
      b[h + n] = 0;
    (k = a.mac(Xa.MAC.GCM, Xa.HEAP_DATA + h, n)), (k = a.cipher(
      Xa.DEC.CTR,
      Xa.HEAP_DATA + h,
      n
    )), j && l.set(b.subarray(h, h + j));
    var o = null !== f ? f.length : 0,
      p = ((g - 1) << 4) + i - d;
    (b[0] = b[1] = b[2] = 0), (b[3] = o >>> 29), (b[4] = o >>> 21), (b[5] =
      (o >>> 13) & 255), (b[6] = (o >>> 5) & 255), (b[7] =
      (o << 3) & 255), (b[8] = b[9] = b[10] = 0), (b[11] = p >>> 29), (b[12] =
      (p >>> 21) & 255), (b[13] = (p >>> 13) & 255), (b[14] =
      (p >>> 5) & 255), (b[15] = (p << 3) & 255), a.mac(
      Xa.MAC.GCM,
      Xa.HEAP_DATA,
      16
    ), a.get_iv(Xa.HEAP_DATA), a.set_counter(0, 0, 0, this.gamma0), a.cipher(
      Xa.ENC.CTR,
      Xa.HEAP_DATA,
      16
    );
    for (var q = 0, n = 0; d > n; ++n) q |= m[n] ^ b[n];
    if (q) throw new e('data integrity check failed');
    return (this.result = l), (this.counter = 1), (this.pos = 0), (this.len = 0), this;
  }
  function O(a) {
    var b = M.call(this, a).result,
      c = N.call(this).result,
      d = new Uint8Array(b.length + c.length);
    return b.length && d.set(b), c.length &&
      d.set(c, b.length), (this.result = d), this;
  }
  function P(a, b, c, d, e) {
    if (void 0 === a) throw new SyntaxError('data required');
    if (void 0 === b) throw new SyntaxError('key required');
    if (void 0 === c) throw new SyntaxError('nonce required');
    return new F({
      heap: cb,
      asm: db,
      key: b,
      nonce: c,
      adata: d,
      tagSize: e
    }).encrypt(a).result;
  }
  function Q(a, b, c, d, e) {
    if (void 0 === a) throw new SyntaxError('data required');
    if (void 0 === b) throw new SyntaxError('key required');
    if (void 0 === c) throw new SyntaxError('nonce required');
    return new F({
      heap: cb,
      asm: db,
      key: b,
      nonce: c,
      adata: d,
      tagSize: e
    }).decrypt(a).result;
  }
  function R() {
    return (this.result = null), (this.pos = 0), (this.len = 0), this.asm.reset(), this;
  }
  function S(a) {
    if (null !== this.result)
      throw new c('state must be reset before processing new data');
    if ((n(a) && (a = f(a)), o(a) && (a = new Uint8Array(a)), !p(a)))
      throw new TypeError("data isn't of expected type");
    for (
      var b = this.asm,
        d = this.heap,
        e = this.pos,
        g = this.len,
        h = 0,
        i = a.length,
        j = 0;
      i > 0;

    )
      (j = s(d, e + g, a, h, i)), (g += j), (h += j), (i -= j), (j = b.process(
        e,
        g
      )), (e += j), (g -= j), g || (e = 0);
    return (this.pos = e), (this.len = g), this;
  }
  function T() {
    if (null !== this.result)
      throw new c('state must be reset before processing new data');
    return this.asm.finish(
      this.pos,
      this.len,
      0
    ), (this.result = new Uint8Array(this.HASH_SIZE)), this.result.set(
      this.heap.subarray(0, this.HASH_SIZE)
    ), (this.pos = 0), (this.len = 0), this;
  }
  function U(a, b, c) {
    'use asm';
    var d = 0,
      e = 0,
      f = 0,
      g = 0,
      h = 0,
      i = 0,
      j = 0,
      k = 0,
      l = 0,
      m = 0;
    var n = 0,
      o = 0,
      p = 0,
      q = 0,
      r = 0,
      s = 0,
      t = 0,
      u = 0,
      v = 0,
      w = 0,
      x = 0,
      y = 0,
      z = 0,
      A = 0,
      B = 0,
      C = 0;
    var D = new a.Uint8Array(c);
    function E(Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da) {
      Q = Q | 0;
      R = R | 0;
      S = S | 0;
      T = T | 0;
      U = U | 0;
      V = V | 0;
      W = W | 0;
      X = X | 0;
      Y = Y | 0;
      Z = Z | 0;
      $ = $ | 0;
      _ = _ | 0;
      aa = aa | 0;
      ba = ba | 0;
      ca = ca | 0;
      da = da | 0;
      var ea = 0,
        fa = 0,
        ga = 0,
        ha = 0,
        ia = 0,
        ja = 0,
        ka = 0,
        la = 0,
        ma = 0;
      ea = d;
      fa = e;
      ga = f;
      ha = g;
      ia = h;
      ja = i;
      ka = j;
      la = k;
      ma =
        (Q +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          1116352408) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ma =
        (R +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          1899447441) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ma =
        (S +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          3049323471) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ma =
        (T +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          3921009573) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ma =
        (U +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          961987163) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ma =
        (V +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          1508970993) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ma =
        (W +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          2453635748) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ma =
        (X +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          2870763221) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ma =
        (Y +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          3624381080) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ma =
        (Z +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          310598401) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ma =
        ($ +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          607225278) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ma =
        (_ +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          1426881987) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ma =
        (aa +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          1925078388) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ma =
        (ba +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          2162078206) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ma =
        (ca +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          2614888103) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ma =
        (da +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          3248222580) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      Q = ma =
        (((R >>> 7) ^ (R >>> 18) ^ (R >>> 3) ^ (R << 25) ^ (R << 14)) +
          ((ca >>> 17) ^ (ca >>> 19) ^ (ca >>> 10) ^ (ca << 15) ^ (ca << 13)) +
          Q +
          Z) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          3835390401) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      R = ma =
        (((S >>> 7) ^ (S >>> 18) ^ (S >>> 3) ^ (S << 25) ^ (S << 14)) +
          ((da >>> 17) ^ (da >>> 19) ^ (da >>> 10) ^ (da << 15) ^ (da << 13)) +
          R +
          $) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          4022224774) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      S = ma =
        (((T >>> 7) ^ (T >>> 18) ^ (T >>> 3) ^ (T << 25) ^ (T << 14)) +
          ((Q >>> 17) ^ (Q >>> 19) ^ (Q >>> 10) ^ (Q << 15) ^ (Q << 13)) +
          S +
          _) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          264347078) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      T = ma =
        (((U >>> 7) ^ (U >>> 18) ^ (U >>> 3) ^ (U << 25) ^ (U << 14)) +
          ((R >>> 17) ^ (R >>> 19) ^ (R >>> 10) ^ (R << 15) ^ (R << 13)) +
          T +
          aa) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          604807628) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      U = ma =
        (((V >>> 7) ^ (V >>> 18) ^ (V >>> 3) ^ (V << 25) ^ (V << 14)) +
          ((S >>> 17) ^ (S >>> 19) ^ (S >>> 10) ^ (S << 15) ^ (S << 13)) +
          U +
          ba) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          770255983) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      V = ma =
        (((W >>> 7) ^ (W >>> 18) ^ (W >>> 3) ^ (W << 25) ^ (W << 14)) +
          ((T >>> 17) ^ (T >>> 19) ^ (T >>> 10) ^ (T << 15) ^ (T << 13)) +
          V +
          ca) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          1249150122) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      W = ma =
        (((X >>> 7) ^ (X >>> 18) ^ (X >>> 3) ^ (X << 25) ^ (X << 14)) +
          ((U >>> 17) ^ (U >>> 19) ^ (U >>> 10) ^ (U << 15) ^ (U << 13)) +
          W +
          da) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          1555081692) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      X = ma =
        (((Y >>> 7) ^ (Y >>> 18) ^ (Y >>> 3) ^ (Y << 25) ^ (Y << 14)) +
          ((V >>> 17) ^ (V >>> 19) ^ (V >>> 10) ^ (V << 15) ^ (V << 13)) +
          X +
          Q) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          1996064986) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      Y = ma =
        (((Z >>> 7) ^ (Z >>> 18) ^ (Z >>> 3) ^ (Z << 25) ^ (Z << 14)) +
          ((W >>> 17) ^ (W >>> 19) ^ (W >>> 10) ^ (W << 15) ^ (W << 13)) +
          Y +
          R) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          2554220882) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      Z = ma =
        ((($ >>> 7) ^ ($ >>> 18) ^ ($ >>> 3) ^ ($ << 25) ^ ($ << 14)) +
          ((X >>> 17) ^ (X >>> 19) ^ (X >>> 10) ^ (X << 15) ^ (X << 13)) +
          Z +
          S) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          2821834349) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      $ = ma =
        (((_ >>> 7) ^ (_ >>> 18) ^ (_ >>> 3) ^ (_ << 25) ^ (_ << 14)) +
          ((Y >>> 17) ^ (Y >>> 19) ^ (Y >>> 10) ^ (Y << 15) ^ (Y << 13)) +
          $ +
          T) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          2952996808) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      _ = ma =
        (((aa >>> 7) ^ (aa >>> 18) ^ (aa >>> 3) ^ (aa << 25) ^ (aa << 14)) +
          ((Z >>> 17) ^ (Z >>> 19) ^ (Z >>> 10) ^ (Z << 15) ^ (Z << 13)) +
          _ +
          U) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          3210313671) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      aa = ma =
        (((ba >>> 7) ^ (ba >>> 18) ^ (ba >>> 3) ^ (ba << 25) ^ (ba << 14)) +
          (($ >>> 17) ^ ($ >>> 19) ^ ($ >>> 10) ^ ($ << 15) ^ ($ << 13)) +
          aa +
          V) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          3336571891) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ba = ma =
        (((ca >>> 7) ^ (ca >>> 18) ^ (ca >>> 3) ^ (ca << 25) ^ (ca << 14)) +
          ((_ >>> 17) ^ (_ >>> 19) ^ (_ >>> 10) ^ (_ << 15) ^ (_ << 13)) +
          ba +
          W) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          3584528711) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ca = ma =
        (((da >>> 7) ^ (da >>> 18) ^ (da >>> 3) ^ (da << 25) ^ (da << 14)) +
          ((aa >>> 17) ^ (aa >>> 19) ^ (aa >>> 10) ^ (aa << 15) ^ (aa << 13)) +
          ca +
          X) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          113926993) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      da = ma =
        (((Q >>> 7) ^ (Q >>> 18) ^ (Q >>> 3) ^ (Q << 25) ^ (Q << 14)) +
          ((ba >>> 17) ^ (ba >>> 19) ^ (ba >>> 10) ^ (ba << 15) ^ (ba << 13)) +
          da +
          Y) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          338241895) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      Q = ma =
        (((R >>> 7) ^ (R >>> 18) ^ (R >>> 3) ^ (R << 25) ^ (R << 14)) +
          ((ca >>> 17) ^ (ca >>> 19) ^ (ca >>> 10) ^ (ca << 15) ^ (ca << 13)) +
          Q +
          Z) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          666307205) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      R = ma =
        (((S >>> 7) ^ (S >>> 18) ^ (S >>> 3) ^ (S << 25) ^ (S << 14)) +
          ((da >>> 17) ^ (da >>> 19) ^ (da >>> 10) ^ (da << 15) ^ (da << 13)) +
          R +
          $) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          773529912) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      S = ma =
        (((T >>> 7) ^ (T >>> 18) ^ (T >>> 3) ^ (T << 25) ^ (T << 14)) +
          ((Q >>> 17) ^ (Q >>> 19) ^ (Q >>> 10) ^ (Q << 15) ^ (Q << 13)) +
          S +
          _) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          1294757372) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      T = ma =
        (((U >>> 7) ^ (U >>> 18) ^ (U >>> 3) ^ (U << 25) ^ (U << 14)) +
          ((R >>> 17) ^ (R >>> 19) ^ (R >>> 10) ^ (R << 15) ^ (R << 13)) +
          T +
          aa) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          1396182291) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      U = ma =
        (((V >>> 7) ^ (V >>> 18) ^ (V >>> 3) ^ (V << 25) ^ (V << 14)) +
          ((S >>> 17) ^ (S >>> 19) ^ (S >>> 10) ^ (S << 15) ^ (S << 13)) +
          U +
          ba) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          1695183700) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      V = ma =
        (((W >>> 7) ^ (W >>> 18) ^ (W >>> 3) ^ (W << 25) ^ (W << 14)) +
          ((T >>> 17) ^ (T >>> 19) ^ (T >>> 10) ^ (T << 15) ^ (T << 13)) +
          V +
          ca) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          1986661051) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      W = ma =
        (((X >>> 7) ^ (X >>> 18) ^ (X >>> 3) ^ (X << 25) ^ (X << 14)) +
          ((U >>> 17) ^ (U >>> 19) ^ (U >>> 10) ^ (U << 15) ^ (U << 13)) +
          W +
          da) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          2177026350) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      X = ma =
        (((Y >>> 7) ^ (Y >>> 18) ^ (Y >>> 3) ^ (Y << 25) ^ (Y << 14)) +
          ((V >>> 17) ^ (V >>> 19) ^ (V >>> 10) ^ (V << 15) ^ (V << 13)) +
          X +
          Q) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          2456956037) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      Y = ma =
        (((Z >>> 7) ^ (Z >>> 18) ^ (Z >>> 3) ^ (Z << 25) ^ (Z << 14)) +
          ((W >>> 17) ^ (W >>> 19) ^ (W >>> 10) ^ (W << 15) ^ (W << 13)) +
          Y +
          R) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          2730485921) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      Z = ma =
        ((($ >>> 7) ^ ($ >>> 18) ^ ($ >>> 3) ^ ($ << 25) ^ ($ << 14)) +
          ((X >>> 17) ^ (X >>> 19) ^ (X >>> 10) ^ (X << 15) ^ (X << 13)) +
          Z +
          S) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          2820302411) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      $ = ma =
        (((_ >>> 7) ^ (_ >>> 18) ^ (_ >>> 3) ^ (_ << 25) ^ (_ << 14)) +
          ((Y >>> 17) ^ (Y >>> 19) ^ (Y >>> 10) ^ (Y << 15) ^ (Y << 13)) +
          $ +
          T) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          3259730800) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      _ = ma =
        (((aa >>> 7) ^ (aa >>> 18) ^ (aa >>> 3) ^ (aa << 25) ^ (aa << 14)) +
          ((Z >>> 17) ^ (Z >>> 19) ^ (Z >>> 10) ^ (Z << 15) ^ (Z << 13)) +
          _ +
          U) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          3345764771) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      aa = ma =
        (((ba >>> 7) ^ (ba >>> 18) ^ (ba >>> 3) ^ (ba << 25) ^ (ba << 14)) +
          (($ >>> 17) ^ ($ >>> 19) ^ ($ >>> 10) ^ ($ << 15) ^ ($ << 13)) +
          aa +
          V) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          3516065817) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ba = ma =
        (((ca >>> 7) ^ (ca >>> 18) ^ (ca >>> 3) ^ (ca << 25) ^ (ca << 14)) +
          ((_ >>> 17) ^ (_ >>> 19) ^ (_ >>> 10) ^ (_ << 15) ^ (_ << 13)) +
          ba +
          W) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          3600352804) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ca = ma =
        (((da >>> 7) ^ (da >>> 18) ^ (da >>> 3) ^ (da << 25) ^ (da << 14)) +
          ((aa >>> 17) ^ (aa >>> 19) ^ (aa >>> 10) ^ (aa << 15) ^ (aa << 13)) +
          ca +
          X) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          4094571909) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      da = ma =
        (((Q >>> 7) ^ (Q >>> 18) ^ (Q >>> 3) ^ (Q << 25) ^ (Q << 14)) +
          ((ba >>> 17) ^ (ba >>> 19) ^ (ba >>> 10) ^ (ba << 15) ^ (ba << 13)) +
          da +
          Y) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          275423344) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      Q = ma =
        (((R >>> 7) ^ (R >>> 18) ^ (R >>> 3) ^ (R << 25) ^ (R << 14)) +
          ((ca >>> 17) ^ (ca >>> 19) ^ (ca >>> 10) ^ (ca << 15) ^ (ca << 13)) +
          Q +
          Z) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          430227734) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      R = ma =
        (((S >>> 7) ^ (S >>> 18) ^ (S >>> 3) ^ (S << 25) ^ (S << 14)) +
          ((da >>> 17) ^ (da >>> 19) ^ (da >>> 10) ^ (da << 15) ^ (da << 13)) +
          R +
          $) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          506948616) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      S = ma =
        (((T >>> 7) ^ (T >>> 18) ^ (T >>> 3) ^ (T << 25) ^ (T << 14)) +
          ((Q >>> 17) ^ (Q >>> 19) ^ (Q >>> 10) ^ (Q << 15) ^ (Q << 13)) +
          S +
          _) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          659060556) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      T = ma =
        (((U >>> 7) ^ (U >>> 18) ^ (U >>> 3) ^ (U << 25) ^ (U << 14)) +
          ((R >>> 17) ^ (R >>> 19) ^ (R >>> 10) ^ (R << 15) ^ (R << 13)) +
          T +
          aa) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          883997877) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      U = ma =
        (((V >>> 7) ^ (V >>> 18) ^ (V >>> 3) ^ (V << 25) ^ (V << 14)) +
          ((S >>> 17) ^ (S >>> 19) ^ (S >>> 10) ^ (S << 15) ^ (S << 13)) +
          U +
          ba) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          958139571) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      V = ma =
        (((W >>> 7) ^ (W >>> 18) ^ (W >>> 3) ^ (W << 25) ^ (W << 14)) +
          ((T >>> 17) ^ (T >>> 19) ^ (T >>> 10) ^ (T << 15) ^ (T << 13)) +
          V +
          ca) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          1322822218) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      W = ma =
        (((X >>> 7) ^ (X >>> 18) ^ (X >>> 3) ^ (X << 25) ^ (X << 14)) +
          ((U >>> 17) ^ (U >>> 19) ^ (U >>> 10) ^ (U << 15) ^ (U << 13)) +
          W +
          da) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          1537002063) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      X = ma =
        (((Y >>> 7) ^ (Y >>> 18) ^ (Y >>> 3) ^ (Y << 25) ^ (Y << 14)) +
          ((V >>> 17) ^ (V >>> 19) ^ (V >>> 10) ^ (V << 15) ^ (V << 13)) +
          X +
          Q) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          1747873779) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      Y = ma =
        (((Z >>> 7) ^ (Z >>> 18) ^ (Z >>> 3) ^ (Z << 25) ^ (Z << 14)) +
          ((W >>> 17) ^ (W >>> 19) ^ (W >>> 10) ^ (W << 15) ^ (W << 13)) +
          Y +
          R) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          1955562222) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      Z = ma =
        ((($ >>> 7) ^ ($ >>> 18) ^ ($ >>> 3) ^ ($ << 25) ^ ($ << 14)) +
          ((X >>> 17) ^ (X >>> 19) ^ (X >>> 10) ^ (X << 15) ^ (X << 13)) +
          Z +
          S) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          2024104815) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      $ = ma =
        (((_ >>> 7) ^ (_ >>> 18) ^ (_ >>> 3) ^ (_ << 25) ^ (_ << 14)) +
          ((Y >>> 17) ^ (Y >>> 19) ^ (Y >>> 10) ^ (Y << 15) ^ (Y << 13)) +
          $ +
          T) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          2227730452) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      _ = ma =
        (((aa >>> 7) ^ (aa >>> 18) ^ (aa >>> 3) ^ (aa << 25) ^ (aa << 14)) +
          ((Z >>> 17) ^ (Z >>> 19) ^ (Z >>> 10) ^ (Z << 15) ^ (Z << 13)) +
          _ +
          U) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          2361852424) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      aa = ma =
        (((ba >>> 7) ^ (ba >>> 18) ^ (ba >>> 3) ^ (ba << 25) ^ (ba << 14)) +
          (($ >>> 17) ^ ($ >>> 19) ^ ($ >>> 10) ^ ($ << 15) ^ ($ << 13)) +
          aa +
          V) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          2428436474) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ba = ma =
        (((ca >>> 7) ^ (ca >>> 18) ^ (ca >>> 3) ^ (ca << 25) ^ (ca << 14)) +
          ((_ >>> 17) ^ (_ >>> 19) ^ (_ >>> 10) ^ (_ << 15) ^ (_ << 13)) +
          ba +
          W) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          2756734187) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      ca = ma =
        (((da >>> 7) ^ (da >>> 18) ^ (da >>> 3) ^ (da << 25) ^ (da << 14)) +
          ((aa >>> 17) ^ (aa >>> 19) ^ (aa >>> 10) ^ (aa << 15) ^ (aa << 13)) +
          ca +
          X) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          3204031479) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      da = ma =
        (((Q >>> 7) ^ (Q >>> 18) ^ (Q >>> 3) ^ (Q << 25) ^ (Q << 14)) +
          ((ba >>> 17) ^ (ba >>> 19) ^ (ba >>> 10) ^ (ba << 15) ^ (ba << 13)) +
          da +
          Y) |
        0;
      ma =
        (ma +
          la +
          ((ia >>> 6) ^
            (ia >>> 11) ^
            (ia >>> 25) ^
            (ia << 26) ^
            (ia << 21) ^
            (ia << 7)) +
          (ka ^ (ia & (ja ^ ka))) +
          3329325298) |
        0;
      la = ka;
      ka = ja;
      ja = ia;
      ia = (ha + ma) | 0;
      ha = ga;
      ga = fa;
      fa = ea;
      ea =
        (ma +
          ((fa & ga) ^ (ha & (fa ^ ga))) +
          ((fa >>> 2) ^
            (fa >>> 13) ^
            (fa >>> 22) ^
            (fa << 30) ^
            (fa << 19) ^
            (fa << 10))) |
        0;
      d = (d + ea) | 0;
      e = (e + fa) | 0;
      f = (f + ga) | 0;
      g = (g + ha) | 0;
      h = (h + ia) | 0;
      i = (i + ja) | 0;
      j = (j + ka) | 0;
      k = (k + la) | 0;
    }
    function F(Q) {
      Q = Q | 0;
      E(
        (D[Q | 0] << 24) | (D[Q | 1] << 16) | (D[Q | 2] << 8) | D[Q | 3],
        (D[Q | 4] << 24) | (D[Q | 5] << 16) | (D[Q | 6] << 8) | D[Q | 7],
        (D[Q | 8] << 24) | (D[Q | 9] << 16) | (D[Q | 10] << 8) | D[Q | 11],
        (D[Q | 12] << 24) | (D[Q | 13] << 16) | (D[Q | 14] << 8) | D[Q | 15],
        (D[Q | 16] << 24) | (D[Q | 17] << 16) | (D[Q | 18] << 8) | D[Q | 19],
        (D[Q | 20] << 24) | (D[Q | 21] << 16) | (D[Q | 22] << 8) | D[Q | 23],
        (D[Q | 24] << 24) | (D[Q | 25] << 16) | (D[Q | 26] << 8) | D[Q | 27],
        (D[Q | 28] << 24) | (D[Q | 29] << 16) | (D[Q | 30] << 8) | D[Q | 31],
        (D[Q | 32] << 24) | (D[Q | 33] << 16) | (D[Q | 34] << 8) | D[Q | 35],
        (D[Q | 36] << 24) | (D[Q | 37] << 16) | (D[Q | 38] << 8) | D[Q | 39],
        (D[Q | 40] << 24) | (D[Q | 41] << 16) | (D[Q | 42] << 8) | D[Q | 43],
        (D[Q | 44] << 24) | (D[Q | 45] << 16) | (D[Q | 46] << 8) | D[Q | 47],
        (D[Q | 48] << 24) | (D[Q | 49] << 16) | (D[Q | 50] << 8) | D[Q | 51],
        (D[Q | 52] << 24) | (D[Q | 53] << 16) | (D[Q | 54] << 8) | D[Q | 55],
        (D[Q | 56] << 24) | (D[Q | 57] << 16) | (D[Q | 58] << 8) | D[Q | 59],
        (D[Q | 60] << 24) | (D[Q | 61] << 16) | (D[Q | 62] << 8) | D[Q | 63]
      );
    }
    function G(Q) {
      Q = Q | 0;
      D[Q | 0] = d >>> 24;
      D[Q | 1] = (d >>> 16) & 255;
      D[Q | 2] = (d >>> 8) & 255;
      D[Q | 3] = d & 255;
      D[Q | 4] = e >>> 24;
      D[Q | 5] = (e >>> 16) & 255;
      D[Q | 6] = (e >>> 8) & 255;
      D[Q | 7] = e & 255;
      D[Q | 8] = f >>> 24;
      D[Q | 9] = (f >>> 16) & 255;
      D[Q | 10] = (f >>> 8) & 255;
      D[Q | 11] = f & 255;
      D[Q | 12] = g >>> 24;
      D[Q | 13] = (g >>> 16) & 255;
      D[Q | 14] = (g >>> 8) & 255;
      D[Q | 15] = g & 255;
      D[Q | 16] = h >>> 24;
      D[Q | 17] = (h >>> 16) & 255;
      D[Q | 18] = (h >>> 8) & 255;
      D[Q | 19] = h & 255;
      D[Q | 20] = i >>> 24;
      D[Q | 21] = (i >>> 16) & 255;
      D[Q | 22] = (i >>> 8) & 255;
      D[Q | 23] = i & 255;
      D[Q | 24] = j >>> 24;
      D[Q | 25] = (j >>> 16) & 255;
      D[Q | 26] = (j >>> 8) & 255;
      D[Q | 27] = j & 255;
      D[Q | 28] = k >>> 24;
      D[Q | 29] = (k >>> 16) & 255;
      D[Q | 30] = (k >>> 8) & 255;
      D[Q | 31] = k & 255;
    }
    function H() {
      d = 1779033703;
      e = 3144134277;
      f = 1013904242;
      g = 2773480762;
      h = 1359893119;
      i = 2600822924;
      j = 528734635;
      k = 1541459225;
      l = m = 0;
    }
    function I(Q, R, S, T, U, V, W, X, Y, Z) {
      Q = Q | 0;
      R = R | 0;
      S = S | 0;
      T = T | 0;
      U = U | 0;
      V = V | 0;
      W = W | 0;
      X = X | 0;
      Y = Y | 0;
      Z = Z | 0;
      d = Q;
      e = R;
      f = S;
      g = T;
      h = U;
      i = V;
      j = W;
      k = X;
      l = Y;
      m = Z;
    }
    function J(Q, R) {
      Q = Q | 0;
      R = R | 0;
      var S = 0;
      if (Q & 63) return -1;
      while ((R | 0) >= 64) {
        F(Q);
        Q = (Q + 64) | 0;
        R = (R - 64) | 0;
        S = (S + 64) | 0;
      }
      l = (l + S) | 0;
      if (l >>> 0 < S >>> 0) m = (m + 1) | 0;
      return S | 0;
    }
    function K(Q, R, S) {
      Q = Q | 0;
      R = R | 0;
      S = S | 0;
      var T = 0,
        U = 0;
      if (Q & 63) return -1;
      if (~S) if (S & 31) return -1;
      if ((R | 0) >= 64) {
        T = J(Q, R) | 0;
        if ((T | 0) == -1) return -1;
        Q = (Q + T) | 0;
        R = (R - T) | 0;
      }
      T = (T + R) | 0;
      l = (l + R) | 0;
      if (l >>> 0 < R >>> 0) m = (m + 1) | 0;
      D[Q | R] = 128;
      if ((R | 0) >= 56) {
        for (U = (R + 1) | 0; (U | 0) < 64; U = (U + 1) | 0) D[Q | U] = 0;
        F(Q);
        R = 0;
        D[Q | 0] = 0;
      }
      for (U = (R + 1) | 0; (U | 0) < 59; U = (U + 1) | 0) D[Q | U] = 0;
      D[Q | 56] = (m >>> 21) & 255;
      D[Q | 57] = (m >>> 13) & 255;
      D[Q | 58] = (m >>> 5) & 255;
      D[Q | 59] = ((m << 3) & 255) | (l >>> 29);
      D[Q | 60] = (l >>> 21) & 255;
      D[Q | 61] = (l >>> 13) & 255;
      D[Q | 62] = (l >>> 5) & 255;
      D[Q | 63] = (l << 3) & 255;
      F(Q);
      if (~S) G(S);
      return T | 0;
    }
    function L() {
      d = n;
      e = o;
      f = p;
      g = q;
      h = r;
      i = s;
      j = t;
      k = u;
      l = 64;
      m = 0;
    }
    function M() {
      d = v;
      e = w;
      f = x;
      g = y;
      h = z;
      i = A;
      j = B;
      k = C;
      l = 64;
      m = 0;
    }
    function N(Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da) {
      Q = Q | 0;
      R = R | 0;
      S = S | 0;
      T = T | 0;
      U = U | 0;
      V = V | 0;
      W = W | 0;
      X = X | 0;
      Y = Y | 0;
      Z = Z | 0;
      $ = $ | 0;
      _ = _ | 0;
      aa = aa | 0;
      ba = ba | 0;
      ca = ca | 0;
      da = da | 0;
      H();
      E(
        Q ^ 1549556828,
        R ^ 1549556828,
        S ^ 1549556828,
        T ^ 1549556828,
        U ^ 1549556828,
        V ^ 1549556828,
        W ^ 1549556828,
        X ^ 1549556828,
        Y ^ 1549556828,
        Z ^ 1549556828,
        $ ^ 1549556828,
        _ ^ 1549556828,
        aa ^ 1549556828,
        ba ^ 1549556828,
        ca ^ 1549556828,
        da ^ 1549556828
      );
      v = d;
      w = e;
      x = f;
      y = g;
      z = h;
      A = i;
      B = j;
      C = k;
      H();
      E(
        Q ^ 909522486,
        R ^ 909522486,
        S ^ 909522486,
        T ^ 909522486,
        U ^ 909522486,
        V ^ 909522486,
        W ^ 909522486,
        X ^ 909522486,
        Y ^ 909522486,
        Z ^ 909522486,
        $ ^ 909522486,
        _ ^ 909522486,
        aa ^ 909522486,
        ba ^ 909522486,
        ca ^ 909522486,
        da ^ 909522486
      );

      n = d;
      o = e;
      p = f;
      q = g;
      r = h;
      s = i;
      t = j;
      u = k;
      l = 64;
      m = 0;
    }
    function O(Q, R, S) {
      Q = Q | 0;
      R = R | 0;
      S = S | 0;
      var T = 0,
        U = 0,
        V = 0,
        W = 0,
        X = 0,
        Y = 0,
        Z = 0,
        $ = 0,
        _ = 0;
      if (Q & 63) return -1;
      if (~S) if (S & 31) return -1;
      _ = K(Q, R, -1) | 0;
      (T = d), (U = e), (V = f), (W = g), (X = h), (Y = i), (Z = j), ($ = k);
      M();
      E(T, U, V, W, X, Y, Z, $, 2147483648, 0, 0, 0, 0, 0, 0, 768);
      if (~S) G(S);
      return _ | 0;
    }
    function P(Q, R, S, T, U) {
      Q = Q | 0;
      R = R | 0;
      S = S | 0;
      T = T | 0;
      U = U | 0;
      var V = 0,
        W = 0,
        X = 0,
        Y = 0,
        Z = 0,
        $ = 0,
        _ = 0,
        aa = 0,
        ba = 0,
        ca = 0,
        da = 0,
        ea = 0,
        fa = 0,
        ga = 0,
        ha = 0,
        ia = 0;
      if (Q & 63) return -1;
      if (~U) if (U & 31) return -1;
      D[(Q + R) | 0] = S >>> 24;
      D[(Q + R + 1) | 0] = (S >>> 16) & 255;
      D[(Q + R + 2) | 0] = (S >>> 8) & 255;
      D[(Q + R + 3) | 0] = S & 255;
      O(Q, (R + 4) | 0, -1) | 0;
      (V = ba = d), (W = ca = e), (X = da = f), (Y = ea = g), (Z = fa = h), ($ = ga = i), (_ = ha = j), (aa = ia = k);
      T = (T - 1) | 0;
      while ((T | 0) > 0) {
        L();
        E(ba, ca, da, ea, fa, ga, ha, ia, 2147483648, 0, 0, 0, 0, 0, 0, 768);
        (ba = d), (ca = e), (da = f), (ea = g), (fa = h), (ga = i), (ha = j), (ia = k);
        M();
        E(ba, ca, da, ea, fa, ga, ha, ia, 2147483648, 0, 0, 0, 0, 0, 0, 768);
        (ba = d), (ca = e), (da = f), (ea = g), (fa = h), (ga = i), (ha = j), (ia = k);
        V = V ^ d;
        W = W ^ e;
        X = X ^ f;
        Y = Y ^ g;
        Z = Z ^ h;
        $ = $ ^ i;
        _ = _ ^ j;
        aa = aa ^ k;
        T = (T - 1) | 0;
      }
      d = V;
      e = W;
      f = X;
      g = Y;
      h = Z;
      i = $;
      j = _;
      k = aa;
      if (~U) G(U);
      return 0;
    }
    return {
      reset: H,
      init: I,
      process: J,
      finish: K,
      hmac_reset: L,
      hmac_init: N,
      hmac_finish: O,
      pbkdf2_generate_block: P
    };
  }
  function V(a) {
    (a = a || {}), (this.heap = r(Uint8Array, a)), (this.asm =
      a.asm ||
      U(
        { Uint8Array: Uint8Array },
        null,
        this.heap.buffer
      )), (this.BLOCK_SIZE = eb), (this.HASH_SIZE = fb), this.reset();
  }
  function W() {
    return null === hb && (hb = new V({ heapSize: 1048576 })), hb;
  }
  function X(a) {
    if (void 0 === a) throw new SyntaxError('data required');
    return W().reset().process(a).finish().result;
  }
  function Y(a) {
    var b = X(a);
    return j(b);
  }
  function Z(a) {
    var b = X(a);
    return k(b);
  }
  function $(a) {
    if (((a = a || {}), !a.hash))
      throw new SyntaxError("option 'hash' is required");
    if (!a.hash.HASH_SIZE)
      throw new SyntaxError(
        "option 'hash' supplied doesn't seem to be a valid hash function"
      );
    return (this.hash =
      a.hash), (this.BLOCK_SIZE = this.hash.BLOCK_SIZE), (this.HMAC_SIZE = this.hash.HASH_SIZE), (this.key = null), (this.verify = null), (this.result = null), (void 0 !==
      a.password ||
      void 0 !== a.verify) &&
      this.reset(a), this;
  }
  function _(a, b) {
    if ((o(b) && (b = new Uint8Array(b)), n(b) && (b = f(b)), !p(b)))
      throw new TypeError("password isn't of expected type");
    var c = new Uint8Array(a.BLOCK_SIZE);
    return c.set(
      b.length > a.BLOCK_SIZE ? a.reset().process(b).finish().result : b
    ), c;
  }
  function aa(a) {
    if (o(a) || p(a)) a = new Uint8Array(a);
    else {
      if (!n(a)) throw new TypeError("verify tag isn't of expected type");
      a = f(a);
    }
    if (a.length !== this.HMAC_SIZE)
      throw new d('illegal verification tag size');
    this.verify = a;
  }
  function ba(a) {
    a = a || {};
    var b = a.password;
    if (null === this.key && !n(b) && !b)
      throw new c('no key is associated with the instance');
    (this.result = null), this.hash.reset(), (b || n(b)) &&
      (this.key = _(this.hash, b));
    for (var d = new Uint8Array(this.key), e = 0; e < d.length; ++e) d[e] ^= 54;
    this.hash.process(d);
    var f = a.verify;
    return void 0 !== f ? aa.call(this, f) : (this.verify = null), this;
  }
  function ca(a) {
    if (null === this.key)
      throw new c('no key is associated with the instance');
    if (null !== this.result)
      throw new c('state must be reset before processing new data');
    return this.hash.process(a), this;
  }
  function da() {
    if (null === this.key)
      throw new c('no key is associated with the instance');
    if (null !== this.result)
      throw new c('state must be reset before processing new data');
    for (
      var a = this.hash.finish().result, b = new Uint8Array(this.key), d = 0;
      d < b.length;
      ++d
    )
      b[d] ^= 92;
    var e = this.verify,
      f = this.hash.reset().process(b).process(a).finish().result;
    if (e)
      if (e.length === f.length) {
        for (var g = 0, d = 0; d < e.length; d++) g |= e[d] ^ f[d];
        this.result = !g;
      } else this.result = !1;
    else this.result = f;
    return this;
  }
  function ea(a) {
    return (a = a || {}), a.hash instanceof V || (a.hash = W()), $.call(
      this,
      a
    ), this;
  }
  function fa(a) {
    (a = a || {}), (this.result = null), this.hash.reset();
    var b = a.password;
    if (void 0 !== b) {
      n(b) && (b = f(b));
      var c = (this.key = _(this.hash, b));
      this.hash
        .reset()
        .asm.hmac_init(
          (c[0] << 24) | (c[1] << 16) | (c[2] << 8) | c[3],
          (c[4] << 24) | (c[5] << 16) | (c[6] << 8) | c[7],
          (c[8] << 24) | (c[9] << 16) | (c[10] << 8) | c[11],
          (c[12] << 24) | (c[13] << 16) | (c[14] << 8) | c[15],
          (c[16] << 24) | (c[17] << 16) | (c[18] << 8) | c[19],
          (c[20] << 24) | (c[21] << 16) | (c[22] << 8) | c[23],
          (c[24] << 24) | (c[25] << 16) | (c[26] << 8) | c[27],
          (c[28] << 24) | (c[29] << 16) | (c[30] << 8) | c[31],
          (c[32] << 24) | (c[33] << 16) | (c[34] << 8) | c[35],
          (c[36] << 24) | (c[37] << 16) | (c[38] << 8) | c[39],
          (c[40] << 24) | (c[41] << 16) | (c[42] << 8) | c[43],
          (c[44] << 24) | (c[45] << 16) | (c[46] << 8) | c[47],
          (c[48] << 24) | (c[49] << 16) | (c[50] << 8) | c[51],
          (c[52] << 24) | (c[53] << 16) | (c[54] << 8) | c[55],
          (c[56] << 24) | (c[57] << 16) | (c[58] << 8) | c[59],
          (c[60] << 24) | (c[61] << 16) | (c[62] << 8) | c[63]
        );
    } else this.hash.asm.hmac_reset();
    var d = a.verify;
    return void 0 !== d ? aa.call(this, d) : (this.verify = null), this;
  }
  function ga() {
    if (null === this.key)
      throw new c('no key is associated with the instance');
    if (null !== this.result)
      throw new c('state must be reset before processing new data');
    var a = this.hash,
      b = this.hash.asm,
      d = this.hash.heap;
    b.hmac_finish(a.pos, a.len, 0);
    var e = this.verify,
      f = new Uint8Array(fb);
    if ((f.set(d.subarray(0, fb)), e))
      if (e.length === f.length) {
        for (var g = 0, h = 0; h < e.length; h++) g |= e[h] ^ f[h];
        this.result = !g;
      } else this.result = !1;
    else this.result = f;
    return this;
  }
  function ha() {
    return null === kb && (kb = new ea()), kb;
  }
  function ia(a, b) {
    if (void 0 === a) throw new SyntaxError('data required');
    if (void 0 === b) throw new SyntaxError('password required');
    return ha().reset({ password: b }).process(a).finish().result;
  }
  function ja(a, b) {
    var c = ia(a, b);
    return j(c);
  }
  function ka(a, b) {
    var c = ia(a, b);
    return k(c);
  }
  function la(a) {
    if (((a = a || {}), !a.hmac))
      throw new SyntaxError("option 'hmac' is required");
    if (!a.hmac.HMAC_SIZE)
      throw new SyntaxError(
        "option 'hmac' supplied doesn't seem to be a valid HMAC function"
      );
    (this.hmac = a.hmac), (this.count = a.count || 4096), (this.length =
      a.length || this.hmac.HMAC_SIZE), (this.result = null);
    var b = a.password;
    return (b || n(b)) && this.reset(a), this;
  }
  function ma(a) {
    return (this.result = null), this.hmac.reset(a), this;
  }
  function na(a, b, e) {
    if (null !== this.result)
      throw new c('state must be reset before processing new data');
    if (!a && !n(a)) throw new d("bad 'salt' value");
    (b = b || this.count), (e =
      e || this.length), (this.result = new Uint8Array(e));
    for (var f = Math.ceil(e / this.hmac.HMAC_SIZE), g = 1; f >= g; ++g) {
      var h = (g - 1) * this.hmac.HMAC_SIZE,
        i = (f > g ? 0 : e % this.hmac.HMAC_SIZE) || this.hmac.HMAC_SIZE,
        j = new Uint8Array(
          this.hmac
            .reset()
            .process(a)
            .process(
              new Uint8Array([
                (g >>> 24) & 255,
                (g >>> 16) & 255,
                (g >>> 8) & 255,
                255 & g
              ])
            )
            .finish().result
        );
      this.result.set(j.subarray(0, i), h);
      for (var k = 1; b > k; ++k) {
        j = new Uint8Array(this.hmac.reset().process(j).finish().result);
        for (var l = 0; i > l; ++l) this.result[h + l] ^= j[l];
      }
    }
    return this;
  }
  function oa(a) {
    return (a = a || {}), a.hmac instanceof ea || (a.hmac = ha()), la.call(
      this,
      a
    ), this;
  }
  function pa(a, b, e) {
    if (null !== this.result)
      throw new c('state must be reset before processing new data');
    if (!a && !n(a)) throw new d("bad 'salt' value");
    (b = b || this.count), (e =
      e || this.length), (this.result = new Uint8Array(e));
    for (var f = Math.ceil(e / this.hmac.HMAC_SIZE), g = 1; f >= g; ++g) {
      var h = (g - 1) * this.hmac.HMAC_SIZE,
        i = (f > g ? 0 : e % this.hmac.HMAC_SIZE) || this.hmac.HMAC_SIZE;
      this.hmac.reset().process(a), this.hmac.hash.asm.pbkdf2_generate_block(
        this.hmac.hash.pos,
        this.hmac.hash.len,
        g,
        b,
        0
      ), this.result.set(this.hmac.hash.heap.subarray(0, i), h);
    }
    return this;
  }
  function qa() {
    return null === ob && (ob = new oa()), ob;
  }
  function ra() {
    if (void 0 !== ub) (d = new Uint8Array(32)), nb.call(ub, d), xb(d);
    else {
      var a,
        c,
        d = new Wa(3);
      (d[0] = sb()), (d[1] = rb()), (d[2] = vb()), (d = new Uint8Array(
        d.buffer
      ));
      var e = '';
      void 0 !== b.location
        ? (e += b.location.href)
        : void 0 !== b.process && (e += b.process.pid + b.process.title);
      var f = qa();
      for (a = 0; 100 > a; a++)
        (d = f.reset({ password: d }).generate(e, 1e3, 32)
          .result), (c = vb()), (d[0] ^= c >>> 24), (d[1] ^= c >>> 16), (d[2] ^=
          c >>> 8), (d[3] ^= c);
      xb(d);
    }
    (yb = 0), (zb = !0);
  }
  function sa(a) {
    if (!o(a) && !q(a)) throw new TypeError('bad seed type');
    var b = a.byteOffset || 0,
      c = a.byteLength || a.length,
      d = new Uint8Array(a.buffer || a, b, c);
    xb(d), (yb = 0);
    for (var e = 0, f = 0; f < d.length; f++) (e |= d[f]), (d[f] = 0);
    return 0 !== e && (Bb += 4 * c), (Ab = Bb >= Cb);
  }
  function ta(a) {
    if ((zb || ra(), !Ab && void 0 === ub)) {
      if (!Db)
        throw new e('No strong PRNGs available. Use asmCrypto.random.seed().');
      void 0 !== qb &&
        qb.error(
          'No strong PRNGs available; your security is greatly lowered. Use asmCrypto.random.seed().'
        );
    }
    if (!Eb && !Ab && void 0 !== ub && void 0 !== qb) {
      var b = new Error().stack;
      (Fb[b] |= 0), Fb[b]++ ||
        qb.warn(
          'asmCrypto PRNG not seeded; your security relies on your system PRNG. If this is not acceptable, use asmCrypto.random.seed().'
        );
    }
    if (!o(a) && !q(a)) throw new TypeError('unexpected buffer type');
    var c,
      d,
      f = a.byteOffset || 0,
      g = a.byteLength || a.length,
      h = new Uint8Array(a.buffer || a, f, g);
    for (void 0 !== ub && nb.call(ub, h), c = 0; g > c; c++)
      0 === (3 & c) && (yb >= 1099511627776 && ra(), (d = wb()), yb++), (h[
        c
      ] ^= d), (d >>>= 8);
    return a;
  }
  function ua() {
    (!zb || yb >= 1099511627776) && ra();
    var a = (1048576 * wb() + (wb() >>> 12)) / 4503599627370496;
    return (yb += 2), a;
  }
  function va(a, b, c) {
    'use asm';
    var d = 0;
    var e = new a.Uint32Array(c);
    var f = a.Math.imul;
    function g(u) {
      u = u | 0;
      d = u = (u + 31) & -32;
      return u | 0;
    }
    function h(u) {
      u = u | 0;
      var v = 0;
      v = d;
      d = (v + ((u + 31) & -32)) | 0;
      return v | 0;
    }
    function i(u) {
      u = u | 0;
      d = (d - ((u + 31) & -32)) | 0;
    }
    function j(u, v, w) {
      u = u | 0;
      v = v | 0;
      w = w | 0;
      var x = 0;
      if ((v | 0) > (w | 0)) {
        for (; (x | 0) < (u | 0); x = (x + 4) | 0) {
          e[(w + x) >> 2] = e[(v + x) >> 2];
        }
      } else {
        for (x = (u - 4) | 0; (x | 0) >= 0; x = (x - 4) | 0) {
          e[(w + x) >> 2] = e[(v + x) >> 2];
        }
      }
    }
    function k(u, v, w) {
      u = u | 0;
      v = v | 0;
      w = w | 0;
      var x = 0;
      for (; (x | 0) < (u | 0); x = (x + 4) | 0) {
        e[(w + x) >> 2] = v;
      }
    }
    function l(u, v, w, x) {
      u = u | 0;
      v = v | 0;
      w = w | 0;
      x = x | 0;
      var y = 0,
        z = 0,
        A = 0,
        B = 0,
        C = 0;
      if ((x | 0) <= 0) x = v;
      if ((x | 0) < (v | 0)) v = x;
      z = 1;
      for (; (C | 0) < (v | 0); C = (C + 4) | 0) {
        y = ~e[(u + C) >> 2];
        A = ((y & 65535) + z) | 0;
        B = ((y >>> 16) + (A >>> 16)) | 0;
        e[(w + C) >> 2] = (B << 16) | (A & 65535);
        z = B >>> 16;
      }
      for (; (C | 0) < (x | 0); C = (C + 4) | 0) {
        e[(w + C) >> 2] = (z - 1) | 0;
      }
      return z | 0;
    }
    function m(u, v, w, x) {
      u = u | 0;
      v = v | 0;
      w = w | 0;
      x = x | 0;
      var y = 0,
        z = 0,
        A = 0;
      if ((v | 0) > (x | 0)) {
        for (A = (v - 4) | 0; (A | 0) >= (x | 0); A = (A - 4) | 0) {
          if (e[(u + A) >> 2] | 0) return 1;
        }
      } else {
        for (A = (x - 4) | 0; (A | 0) >= (v | 0); A = (A - 4) | 0) {
          if (e[(w + A) >> 2] | 0) return -1;
        }
      }
      for (; (A | 0) >= 0; A = (A - 4) | 0) {
        (y = e[(u + A) >> 2] | 0), (z = e[(w + A) >> 2] | 0);
        if (y >>> 0 < z >>> 0) return -1;
        if (y >>> 0 > z >>> 0) return 1;
      }
      return 0;
    }
    function n(u, v) {
      u = u | 0;
      v = v | 0;
      var w = 0;
      for (w = (v - 4) | 0; (w | 0) >= 0; w = (w - 4) | 0) {
        if (e[(u + w) >> 2] | 0) return (w + 4) | 0;
      }
      return 0;
    }
    function o(u, v, w, x, y, z) {
      u = u | 0;
      v = v | 0;
      w = w | 0;
      x = x | 0;
      y = y | 0;
      z = z | 0;
      var A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0;
      if ((v | 0) < (x | 0)) {
        (D = u), (u = w), (w = D);
        (D = v), (v = x), (x = D);
      }
      if ((z | 0) <= 0) z = (v + 4) | 0;
      if ((z | 0) < (x | 0)) v = x = z;
      for (; (F | 0) < (x | 0); F = (F + 4) | 0) {
        A = e[(u + F) >> 2] | 0;
        B = e[(w + F) >> 2] | 0;
        D = ((((A & 65535) + (B & 65535)) | 0) + C) | 0;
        E = ((((A >>> 16) + (B >>> 16)) | 0) + (D >>> 16)) | 0;
        e[(y + F) >> 2] = (D & 65535) | (E << 16);
        C = E >>> 16;
      }
      for (; (F | 0) < (v | 0); F = (F + 4) | 0) {
        A = e[(u + F) >> 2] | 0;
        D = ((A & 65535) + C) | 0;
        E = ((A >>> 16) + (D >>> 16)) | 0;
        e[(y + F) >> 2] = (D & 65535) | (E << 16);
        C = E >>> 16;
      }
      for (; (F | 0) < (z | 0); F = (F + 4) | 0) {
        e[(y + F) >> 2] = C | 0;
        C = 0;
      }
      return C | 0;
    }
    function p(u, v, w, x, y, z) {
      u = u | 0;
      v = v | 0;
      w = w | 0;
      x = x | 0;
      y = y | 0;
      z = z | 0;
      var A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0;
      if ((z | 0) <= 0) z = (v | 0) > (x | 0) ? (v + 4) | 0 : (x + 4) | 0;
      if ((z | 0) < (v | 0)) v = z;
      if ((z | 0) < (x | 0)) x = z;
      if ((v | 0) < (x | 0)) {
        for (; (F | 0) < (v | 0); F = (F + 4) | 0) {
          A = e[(u + F) >> 2] | 0;
          B = e[(w + F) >> 2] | 0;
          D = ((((A & 65535) - (B & 65535)) | 0) + C) | 0;
          E = ((((A >>> 16) - (B >>> 16)) | 0) + (D >> 16)) | 0;
          e[(y + F) >> 2] = (D & 65535) | (E << 16);
          C = E >> 16;
        }
        for (; (F | 0) < (x | 0); F = (F + 4) | 0) {
          B = e[(w + F) >> 2] | 0;
          D = (C - (B & 65535)) | 0;
          E = ((D >> 16) - (B >>> 16)) | 0;
          e[(y + F) >> 2] = (D & 65535) | (E << 16);
          C = E >> 16;
        }
      } else {
        for (; (F | 0) < (x | 0); F = (F + 4) | 0) {
          A = e[(u + F) >> 2] | 0;
          B = e[(w + F) >> 2] | 0;
          D = ((((A & 65535) - (B & 65535)) | 0) + C) | 0;
          E = ((((A >>> 16) - (B >>> 16)) | 0) + (D >> 16)) | 0;
          e[(y + F) >> 2] = (D & 65535) | (E << 16);
          C = E >> 16;
        }
        for (; (F | 0) < (v | 0); F = (F + 4) | 0) {
          A = e[(u + F) >> 2] | 0;
          D = ((A & 65535) + C) | 0;
          E = ((A >>> 16) + (D >> 16)) | 0;
          e[(y + F) >> 2] = (D & 65535) | (E << 16);
          C = E >> 16;
        }
      }
      for (; (F | 0) < (z | 0); F = (F + 4) | 0) {
        e[(y + F) >> 2] = C | 0;
      }
      return C | 0;
    }
    function q(u, v, w, x, y, z) {
      u = u | 0;
      v = v | 0;
      w = w | 0;
      x = x | 0;
      y = y | 0;
      z = z | 0;
      var A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0,
        G = 0,
        H = 0,
        I = 0,
        J = 0,
        K = 0,
        L = 0,
        M = 0,
        N = 0,
        O = 0,
        P = 0,
        Q = 0,
        R = 0,
        S = 0,
        T = 0,
        U = 0,
        V = 0,
        W = 0,
        X = 0,
        Y = 0,
        Z = 0,
        $ = 0,
        _ = 0,
        aa = 0,
        ba = 0,
        ca = 0,
        da = 0,
        ea = 0,
        fa = 0,
        ga = 0,
        ha = 0,
        ia = 0,
        ja = 0,
        ka = 0,
        la = 0,
        ma = 0,
        na = 0,
        oa = 0,
        pa = 0,
        qa = 0,
        ra = 0,
        sa = 0,
        ta = 0,
        ua = 0,
        va = 0,
        wa = 0,
        xa = 0,
        ya = 0,
        za = 0,
        Aa = 0,
        Ba = 0,
        Ca = 0;
      if ((v | 0) > (x | 0)) {
        (ua = u), (va = v);
        (u = w), (v = x);
        (w = ua), (x = va);
      }
      xa = (v + x) | 0;
      if (((z | 0) > (xa | 0)) | ((z | 0) <= 0)) z = xa;
      if ((z | 0) < (v | 0)) v = z;
      if ((z | 0) < (x | 0)) x = z;
      for (; (ya | 0) < (v | 0); ya = (ya + 32) | 0) {
        za = (u + ya) | 0;
        (I = e[(za | 0) >> 2] | 0), (J = e[(za | 4) >> 2] | 0), (K =
          e[(za | 8) >> 2] | 0), (L = e[(za | 12) >> 2] | 0), (M =
          e[(za | 16) >> 2] | 0), (N = e[(za | 20) >> 2] | 0), (O =
          e[(za | 24) >> 2] | 0), (P = e[(za | 28) >> 2] | 0), (A =
          I & 65535), (B = J & 65535), (C = K & 65535), (D = L & 65535), (E =
          M & 65535), (F = N & 65535), (G = O & 65535), (H = P & 65535), (I =
          I >>> 16), (J = J >>> 16), (K = K >>> 16), (L = L >>> 16), (M =
          M >>> 16), (N = N >>> 16), (O = O >>> 16), (P = P >>> 16);
        ma = na = oa = pa = qa = ra = sa = ta = 0;
        for (Aa = 0; (Aa | 0) < (x | 0); Aa = (Aa + 32) | 0) {
          Ba = (w + Aa) | 0;
          Ca = (y + ((ya + Aa) | 0)) | 0;
          (Y = e[(Ba | 0) >> 2] | 0), (Z = e[(Ba | 4) >> 2] | 0), ($ =
            e[(Ba | 8) >> 2] | 0), (_ = e[(Ba | 12) >> 2] | 0), (aa =
            e[(Ba | 16) >> 2] | 0), (ba = e[(Ba | 20) >> 2] | 0), (ca =
            e[(Ba | 24) >> 2] | 0), (da = e[(Ba | 28) >> 2] | 0), (Q =
            Y & 65535), (R = Z & 65535), (S = $ & 65535), (T = _ & 65535), (U =
            aa & 65535), (V = ba & 65535), (W = ca & 65535), (X =
            da & 65535), (Y = Y >>> 16), (Z = Z >>> 16), ($ = $ >>> 16), (_ =
            _ >>> 16), (aa = aa >>> 16), (ba = ba >>> 16), (ca =
            ca >>> 16), (da = da >>> 16);
          (ea = e[(Ca | 0) >> 2] | 0), (fa = e[(Ca | 4) >> 2] | 0), (ga =
            e[(Ca | 8) >> 2] | 0), (ha = e[(Ca | 12) >> 2] | 0), (ia =
            e[(Ca | 16) >> 2] | 0), (ja = e[(Ca | 20) >> 2] | 0), (ka =
            e[(Ca | 24) >> 2] | 0), (la = e[(Ca | 28) >> 2] | 0);
          ua = ((((f(A, Q) | 0) + (ma & 65535)) | 0) + (ea & 65535)) | 0;
          va = ((((f(I, Q) | 0) + (ma >>> 16)) | 0) + (ea >>> 16)) | 0;
          wa = ((((f(A, Y) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(I, Y) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ea = (wa << 16) | (ua & 65535);
          ua = ((((f(A, R) | 0) + (xa & 65535)) | 0) + (fa & 65535)) | 0;
          va = ((((f(I, R) | 0) + (xa >>> 16)) | 0) + (fa >>> 16)) | 0;
          wa = ((((f(A, Z) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(I, Z) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          fa = (wa << 16) | (ua & 65535);
          ua = ((((f(A, S) | 0) + (xa & 65535)) | 0) + (ga & 65535)) | 0;
          va = ((((f(I, S) | 0) + (xa >>> 16)) | 0) + (ga >>> 16)) | 0;
          wa = ((((f(A, $) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(I, $) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ga = (wa << 16) | (ua & 65535);
          ua = ((((f(A, T) | 0) + (xa & 65535)) | 0) + (ha & 65535)) | 0;
          va = ((((f(I, T) | 0) + (xa >>> 16)) | 0) + (ha >>> 16)) | 0;
          wa = ((((f(A, _) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(I, _) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ha = (wa << 16) | (ua & 65535);
          ua = ((((f(A, U) | 0) + (xa & 65535)) | 0) + (ia & 65535)) | 0;
          va = ((((f(I, U) | 0) + (xa >>> 16)) | 0) + (ia >>> 16)) | 0;
          wa = ((((f(A, aa) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(I, aa) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ia = (wa << 16) | (ua & 65535);
          ua = ((((f(A, V) | 0) + (xa & 65535)) | 0) + (ja & 65535)) | 0;
          va = ((((f(I, V) | 0) + (xa >>> 16)) | 0) + (ja >>> 16)) | 0;
          wa = ((((f(A, ba) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(I, ba) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ja = (wa << 16) | (ua & 65535);
          ua = ((((f(A, W) | 0) + (xa & 65535)) | 0) + (ka & 65535)) | 0;
          va = ((((f(I, W) | 0) + (xa >>> 16)) | 0) + (ka >>> 16)) | 0;
          wa = ((((f(A, ca) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(I, ca) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ka = (wa << 16) | (ua & 65535);
          ua = ((((f(A, X) | 0) + (xa & 65535)) | 0) + (la & 65535)) | 0;
          va = ((((f(I, X) | 0) + (xa >>> 16)) | 0) + (la >>> 16)) | 0;
          wa = ((((f(A, da) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(I, da) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          la = (wa << 16) | (ua & 65535);
          ma = xa;
          ua = ((((f(B, Q) | 0) + (na & 65535)) | 0) + (fa & 65535)) | 0;
          va = ((((f(J, Q) | 0) + (na >>> 16)) | 0) + (fa >>> 16)) | 0;
          wa = ((((f(B, Y) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(J, Y) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          fa = (wa << 16) | (ua & 65535);
          ua = ((((f(B, R) | 0) + (xa & 65535)) | 0) + (ga & 65535)) | 0;
          va = ((((f(J, R) | 0) + (xa >>> 16)) | 0) + (ga >>> 16)) | 0;
          wa = ((((f(B, Z) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(J, Z) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ga = (wa << 16) | (ua & 65535);
          ua = ((((f(B, S) | 0) + (xa & 65535)) | 0) + (ha & 65535)) | 0;
          va = ((((f(J, S) | 0) + (xa >>> 16)) | 0) + (ha >>> 16)) | 0;
          wa = ((((f(B, $) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(J, $) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ha = (wa << 16) | (ua & 65535);
          ua = ((((f(B, T) | 0) + (xa & 65535)) | 0) + (ia & 65535)) | 0;
          va = ((((f(J, T) | 0) + (xa >>> 16)) | 0) + (ia >>> 16)) | 0;
          wa = ((((f(B, _) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(J, _) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ia = (wa << 16) | (ua & 65535);
          ua = ((((f(B, U) | 0) + (xa & 65535)) | 0) + (ja & 65535)) | 0;
          va = ((((f(J, U) | 0) + (xa >>> 16)) | 0) + (ja >>> 16)) | 0;
          wa = ((((f(B, aa) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(J, aa) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ja = (wa << 16) | (ua & 65535);
          ua = ((((f(B, V) | 0) + (xa & 65535)) | 0) + (ka & 65535)) | 0;
          va = ((((f(J, V) | 0) + (xa >>> 16)) | 0) + (ka >>> 16)) | 0;
          wa = ((((f(B, ba) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(J, ba) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ka = (wa << 16) | (ua & 65535);
          ua = ((((f(B, W) | 0) + (xa & 65535)) | 0) + (la & 65535)) | 0;
          va = ((((f(J, W) | 0) + (xa >>> 16)) | 0) + (la >>> 16)) | 0;
          wa = ((((f(B, ca) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(J, ca) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          la = (wa << 16) | (ua & 65535);
          ua = ((((f(B, X) | 0) + (xa & 65535)) | 0) + (ma & 65535)) | 0;
          va = ((((f(J, X) | 0) + (xa >>> 16)) | 0) + (ma >>> 16)) | 0;
          wa = ((((f(B, da) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(J, da) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ma = (wa << 16) | (ua & 65535);
          na = xa;
          ua = ((((f(C, Q) | 0) + (oa & 65535)) | 0) + (ga & 65535)) | 0;
          va = ((((f(K, Q) | 0) + (oa >>> 16)) | 0) + (ga >>> 16)) | 0;
          wa = ((((f(C, Y) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(K, Y) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ga = (wa << 16) | (ua & 65535);
          ua = ((((f(C, R) | 0) + (xa & 65535)) | 0) + (ha & 65535)) | 0;
          va = ((((f(K, R) | 0) + (xa >>> 16)) | 0) + (ha >>> 16)) | 0;
          wa = ((((f(C, Z) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(K, Z) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ha = (wa << 16) | (ua & 65535);
          ua = ((((f(C, S) | 0) + (xa & 65535)) | 0) + (ia & 65535)) | 0;
          va = ((((f(K, S) | 0) + (xa >>> 16)) | 0) + (ia >>> 16)) | 0;
          wa = ((((f(C, $) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(K, $) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ia = (wa << 16) | (ua & 65535);
          ua = ((((f(C, T) | 0) + (xa & 65535)) | 0) + (ja & 65535)) | 0;
          va = ((((f(K, T) | 0) + (xa >>> 16)) | 0) + (ja >>> 16)) | 0;
          wa = ((((f(C, _) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(K, _) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ja = (wa << 16) | (ua & 65535);
          ua = ((((f(C, U) | 0) + (xa & 65535)) | 0) + (ka & 65535)) | 0;
          va = ((((f(K, U) | 0) + (xa >>> 16)) | 0) + (ka >>> 16)) | 0;
          wa = ((((f(C, aa) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(K, aa) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ka = (wa << 16) | (ua & 65535);
          ua = ((((f(C, V) | 0) + (xa & 65535)) | 0) + (la & 65535)) | 0;
          va = ((((f(K, V) | 0) + (xa >>> 16)) | 0) + (la >>> 16)) | 0;
          wa = ((((f(C, ba) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(K, ba) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          la = (wa << 16) | (ua & 65535);
          ua = ((((f(C, W) | 0) + (xa & 65535)) | 0) + (ma & 65535)) | 0;
          va = ((((f(K, W) | 0) + (xa >>> 16)) | 0) + (ma >>> 16)) | 0;
          wa = ((((f(C, ca) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(K, ca) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ma = (wa << 16) | (ua & 65535);
          ua = ((((f(C, X) | 0) + (xa & 65535)) | 0) + (na & 65535)) | 0;
          va = ((((f(K, X) | 0) + (xa >>> 16)) | 0) + (na >>> 16)) | 0;
          wa = ((((f(C, da) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(K, da) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          na = (wa << 16) | (ua & 65535);
          oa = xa;
          ua = ((((f(D, Q) | 0) + (pa & 65535)) | 0) + (ha & 65535)) | 0;
          va = ((((f(L, Q) | 0) + (pa >>> 16)) | 0) + (ha >>> 16)) | 0;
          wa = ((((f(D, Y) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(L, Y) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ha = (wa << 16) | (ua & 65535);
          ua = ((((f(D, R) | 0) + (xa & 65535)) | 0) + (ia & 65535)) | 0;
          va = ((((f(L, R) | 0) + (xa >>> 16)) | 0) + (ia >>> 16)) | 0;
          wa = ((((f(D, Z) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(L, Z) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ia = (wa << 16) | (ua & 65535);
          ua = ((((f(D, S) | 0) + (xa & 65535)) | 0) + (ja & 65535)) | 0;
          va = ((((f(L, S) | 0) + (xa >>> 16)) | 0) + (ja >>> 16)) | 0;
          wa = ((((f(D, $) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(L, $) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ja = (wa << 16) | (ua & 65535);
          ua = ((((f(D, T) | 0) + (xa & 65535)) | 0) + (ka & 65535)) | 0;
          va = ((((f(L, T) | 0) + (xa >>> 16)) | 0) + (ka >>> 16)) | 0;
          wa = ((((f(D, _) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(L, _) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ka = (wa << 16) | (ua & 65535);
          ua = ((((f(D, U) | 0) + (xa & 65535)) | 0) + (la & 65535)) | 0;
          va = ((((f(L, U) | 0) + (xa >>> 16)) | 0) + (la >>> 16)) | 0;
          wa = ((((f(D, aa) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(L, aa) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          la = (wa << 16) | (ua & 65535);
          ua = ((((f(D, V) | 0) + (xa & 65535)) | 0) + (ma & 65535)) | 0;
          va = ((((f(L, V) | 0) + (xa >>> 16)) | 0) + (ma >>> 16)) | 0;
          wa = ((((f(D, ba) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(L, ba) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ma = (wa << 16) | (ua & 65535);
          ua = ((((f(D, W) | 0) + (xa & 65535)) | 0) + (na & 65535)) | 0;
          va = ((((f(L, W) | 0) + (xa >>> 16)) | 0) + (na >>> 16)) | 0;
          wa = ((((f(D, ca) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(L, ca) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          na = (wa << 16) | (ua & 65535);
          ua = ((((f(D, X) | 0) + (xa & 65535)) | 0) + (oa & 65535)) | 0;
          va = ((((f(L, X) | 0) + (xa >>> 16)) | 0) + (oa >>> 16)) | 0;
          wa = ((((f(D, da) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(L, da) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          oa = (wa << 16) | (ua & 65535);
          pa = xa;
          ua = ((((f(E, Q) | 0) + (qa & 65535)) | 0) + (ia & 65535)) | 0;
          va = ((((f(M, Q) | 0) + (qa >>> 16)) | 0) + (ia >>> 16)) | 0;
          wa = ((((f(E, Y) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(M, Y) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ia = (wa << 16) | (ua & 65535);
          ua = ((((f(E, R) | 0) + (xa & 65535)) | 0) + (ja & 65535)) | 0;
          va = ((((f(M, R) | 0) + (xa >>> 16)) | 0) + (ja >>> 16)) | 0;
          wa = ((((f(E, Z) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(M, Z) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ja = (wa << 16) | (ua & 65535);
          ua = ((((f(E, S) | 0) + (xa & 65535)) | 0) + (ka & 65535)) | 0;
          va = ((((f(M, S) | 0) + (xa >>> 16)) | 0) + (ka >>> 16)) | 0;
          wa = ((((f(E, $) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(M, $) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ka = (wa << 16) | (ua & 65535);
          ua = ((((f(E, T) | 0) + (xa & 65535)) | 0) + (la & 65535)) | 0;
          va = ((((f(M, T) | 0) + (xa >>> 16)) | 0) + (la >>> 16)) | 0;
          wa = ((((f(E, _) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(M, _) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          la = (wa << 16) | (ua & 65535);
          ua = ((((f(E, U) | 0) + (xa & 65535)) | 0) + (ma & 65535)) | 0;
          va = ((((f(M, U) | 0) + (xa >>> 16)) | 0) + (ma >>> 16)) | 0;
          wa = ((((f(E, aa) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(M, aa) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ma = (wa << 16) | (ua & 65535);
          ua = ((((f(E, V) | 0) + (xa & 65535)) | 0) + (na & 65535)) | 0;
          va = ((((f(M, V) | 0) + (xa >>> 16)) | 0) + (na >>> 16)) | 0;
          wa = ((((f(E, ba) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(M, ba) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          na = (wa << 16) | (ua & 65535);
          ua = ((((f(E, W) | 0) + (xa & 65535)) | 0) + (oa & 65535)) | 0;
          va = ((((f(M, W) | 0) + (xa >>> 16)) | 0) + (oa >>> 16)) | 0;
          wa = ((((f(E, ca) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(M, ca) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          oa = (wa << 16) | (ua & 65535);
          ua = ((((f(E, X) | 0) + (xa & 65535)) | 0) + (pa & 65535)) | 0;
          va = ((((f(M, X) | 0) + (xa >>> 16)) | 0) + (pa >>> 16)) | 0;
          wa = ((((f(E, da) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(M, da) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          pa = (wa << 16) | (ua & 65535);
          qa = xa;
          ua = ((((f(F, Q) | 0) + (ra & 65535)) | 0) + (ja & 65535)) | 0;
          va = ((((f(N, Q) | 0) + (ra >>> 16)) | 0) + (ja >>> 16)) | 0;
          wa = ((((f(F, Y) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(N, Y) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ja = (wa << 16) | (ua & 65535);
          ua = ((((f(F, R) | 0) + (xa & 65535)) | 0) + (ka & 65535)) | 0;
          va = ((((f(N, R) | 0) + (xa >>> 16)) | 0) + (ka >>> 16)) | 0;
          wa = ((((f(F, Z) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(N, Z) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ka = (wa << 16) | (ua & 65535);
          ua = ((((f(F, S) | 0) + (xa & 65535)) | 0) + (la & 65535)) | 0;
          va = ((((f(N, S) | 0) + (xa >>> 16)) | 0) + (la >>> 16)) | 0;
          wa = ((((f(F, $) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(N, $) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          la = (wa << 16) | (ua & 65535);
          ua = ((((f(F, T) | 0) + (xa & 65535)) | 0) + (ma & 65535)) | 0;
          va = ((((f(N, T) | 0) + (xa >>> 16)) | 0) + (ma >>> 16)) | 0;
          wa = ((((f(F, _) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(N, _) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ma = (wa << 16) | (ua & 65535);
          ua = ((((f(F, U) | 0) + (xa & 65535)) | 0) + (na & 65535)) | 0;
          va = ((((f(N, U) | 0) + (xa >>> 16)) | 0) + (na >>> 16)) | 0;
          wa = ((((f(F, aa) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(N, aa) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          na = (wa << 16) | (ua & 65535);
          ua = ((((f(F, V) | 0) + (xa & 65535)) | 0) + (oa & 65535)) | 0;
          va = ((((f(N, V) | 0) + (xa >>> 16)) | 0) + (oa >>> 16)) | 0;
          wa = ((((f(F, ba) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(N, ba) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          oa = (wa << 16) | (ua & 65535);
          ua = ((((f(F, W) | 0) + (xa & 65535)) | 0) + (pa & 65535)) | 0;
          va = ((((f(N, W) | 0) + (xa >>> 16)) | 0) + (pa >>> 16)) | 0;
          wa = ((((f(F, ca) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(N, ca) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          pa = (wa << 16) | (ua & 65535);
          ua = ((((f(F, X) | 0) + (xa & 65535)) | 0) + (qa & 65535)) | 0;
          va = ((((f(N, X) | 0) + (xa >>> 16)) | 0) + (qa >>> 16)) | 0;
          wa = ((((f(F, da) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(N, da) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          qa = (wa << 16) | (ua & 65535);
          ra = xa;
          ua = ((((f(G, Q) | 0) + (sa & 65535)) | 0) + (ka & 65535)) | 0;
          va = ((((f(O, Q) | 0) + (sa >>> 16)) | 0) + (ka >>> 16)) | 0;
          wa = ((((f(G, Y) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(O, Y) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ka = (wa << 16) | (ua & 65535);
          ua = ((((f(G, R) | 0) + (xa & 65535)) | 0) + (la & 65535)) | 0;
          va = ((((f(O, R) | 0) + (xa >>> 16)) | 0) + (la >>> 16)) | 0;
          wa = ((((f(G, Z) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(O, Z) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          la = (wa << 16) | (ua & 65535);
          ua = ((((f(G, S) | 0) + (xa & 65535)) | 0) + (ma & 65535)) | 0;
          va = ((((f(O, S) | 0) + (xa >>> 16)) | 0) + (ma >>> 16)) | 0;
          wa = ((((f(G, $) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(O, $) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ma = (wa << 16) | (ua & 65535);
          ua = ((((f(G, T) | 0) + (xa & 65535)) | 0) + (na & 65535)) | 0;
          va = ((((f(O, T) | 0) + (xa >>> 16)) | 0) + (na >>> 16)) | 0;
          wa = ((((f(G, _) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(O, _) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          na = (wa << 16) | (ua & 65535);
          ua = ((((f(G, U) | 0) + (xa & 65535)) | 0) + (oa & 65535)) | 0;
          va = ((((f(O, U) | 0) + (xa >>> 16)) | 0) + (oa >>> 16)) | 0;
          wa = ((((f(G, aa) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(O, aa) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          oa = (wa << 16) | (ua & 65535);
          ua = ((((f(G, V) | 0) + (xa & 65535)) | 0) + (pa & 65535)) | 0;
          va = ((((f(O, V) | 0) + (xa >>> 16)) | 0) + (pa >>> 16)) | 0;
          wa = ((((f(G, ba) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(O, ba) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          pa = (wa << 16) | (ua & 65535);
          ua = ((((f(G, W) | 0) + (xa & 65535)) | 0) + (qa & 65535)) | 0;
          va = ((((f(O, W) | 0) + (xa >>> 16)) | 0) + (qa >>> 16)) | 0;
          wa = ((((f(G, ca) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(O, ca) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          qa = (wa << 16) | (ua & 65535);
          ua = ((((f(G, X) | 0) + (xa & 65535)) | 0) + (ra & 65535)) | 0;
          va = ((((f(O, X) | 0) + (xa >>> 16)) | 0) + (ra >>> 16)) | 0;
          wa = ((((f(G, da) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(O, da) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ra = (wa << 16) | (ua & 65535);
          sa = xa;
          ua = ((((f(H, Q) | 0) + (ta & 65535)) | 0) + (la & 65535)) | 0;
          va = ((((f(P, Q) | 0) + (ta >>> 16)) | 0) + (la >>> 16)) | 0;
          wa = ((((f(H, Y) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(P, Y) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          la = (wa << 16) | (ua & 65535);
          ua = ((((f(H, R) | 0) + (xa & 65535)) | 0) + (ma & 65535)) | 0;
          va = ((((f(P, R) | 0) + (xa >>> 16)) | 0) + (ma >>> 16)) | 0;
          wa = ((((f(H, Z) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(P, Z) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ma = (wa << 16) | (ua & 65535);
          ua = ((((f(H, S) | 0) + (xa & 65535)) | 0) + (na & 65535)) | 0;
          va = ((((f(P, S) | 0) + (xa >>> 16)) | 0) + (na >>> 16)) | 0;
          wa = ((((f(H, $) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(P, $) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          na = (wa << 16) | (ua & 65535);
          ua = ((((f(H, T) | 0) + (xa & 65535)) | 0) + (oa & 65535)) | 0;
          va = ((((f(P, T) | 0) + (xa >>> 16)) | 0) + (oa >>> 16)) | 0;
          wa = ((((f(H, _) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(P, _) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          oa = (wa << 16) | (ua & 65535);
          ua = ((((f(H, U) | 0) + (xa & 65535)) | 0) + (pa & 65535)) | 0;
          va = ((((f(P, U) | 0) + (xa >>> 16)) | 0) + (pa >>> 16)) | 0;
          wa = ((((f(H, aa) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(P, aa) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          pa = (wa << 16) | (ua & 65535);
          ua = ((((f(H, V) | 0) + (xa & 65535)) | 0) + (qa & 65535)) | 0;
          va = ((((f(P, V) | 0) + (xa >>> 16)) | 0) + (qa >>> 16)) | 0;
          wa = ((((f(H, ba) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(P, ba) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          qa = (wa << 16) | (ua & 65535);
          ua = ((((f(H, W) | 0) + (xa & 65535)) | 0) + (ra & 65535)) | 0;
          va = ((((f(P, W) | 0) + (xa >>> 16)) | 0) + (ra >>> 16)) | 0;
          wa = ((((f(H, ca) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(P, ca) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          ra = (wa << 16) | (ua & 65535);
          ua = ((((f(H, X) | 0) + (xa & 65535)) | 0) + (sa & 65535)) | 0;
          va = ((((f(P, X) | 0) + (xa >>> 16)) | 0) + (sa >>> 16)) | 0;
          wa = ((((f(H, da) | 0) + (va & 65535)) | 0) + (ua >>> 16)) | 0;
          xa = ((((f(P, da) | 0) + (va >>> 16)) | 0) + (wa >>> 16)) | 0;
          sa = (wa << 16) | (ua & 65535);
          ta = xa;
          (e[(Ca | 0) >> 2] = ea), (e[(Ca | 4) >> 2] = fa), (e[
            (Ca | 8) >> 2
          ] = ga), (e[(Ca | 12) >> 2] = ha), (e[(Ca | 16) >> 2] = ia), (e[
            (Ca | 20) >> 2
          ] = ja), (e[(Ca | 24) >> 2] = ka), (e[(Ca | 28) >> 2] = la);
        }
        Ca = (y + ((ya + Aa) | 0)) | 0;
        (e[(Ca | 0) >> 2] = ma), (e[(Ca | 4) >> 2] = na), (e[
          (Ca | 8) >> 2
        ] = oa), (e[(Ca | 12) >> 2] = pa), (e[(Ca | 16) >> 2] = qa), (e[
          (Ca | 20) >> 2
        ] = ra), (e[(Ca | 24) >> 2] = sa), (e[(Ca | 28) >> 2] = ta);
      }
    }
    function r(u, v, w) {
      u = u | 0;
      v = v | 0;
      w = w | 0;
      var x = 0,
        y = 0,
        z = 0,
        A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0,
        G = 0,
        H = 0,
        I = 0,
        J = 0,
        K = 0,
        L = 0,
        M = 0,
        N = 0,
        O = 0,
        P = 0,
        Q = 0,
        R = 0,
        S = 0,
        T = 0,
        U = 0,
        V = 0,
        W = 0,
        X = 0,
        Y = 0,
        Z = 0,
        $ = 0,
        _ = 0,
        aa = 0,
        ba = 0,
        ca = 0,
        da = 0,
        ea = 0,
        fa = 0,
        ga = 0,
        ha = 0,
        ia = 0,
        ja = 0,
        ka = 0,
        la = 0,
        ma = 0,
        na = 0,
        oa = 0,
        pa = 0,
        qa = 0,
        ra = 0,
        sa = 0,
        ta = 0,
        ua = 0,
        va = 0,
        wa = 0,
        xa = 0,
        ya = 0,
        za = 0,
        Aa = 0,
        Ba = 0,
        Ca = 0,
        Da = 0,
        Ea = 0,
        Fa = 0,
        Ga = 0;
      for (; (Ba | 0) < (v | 0); Ba = (Ba + 4) | 0) {
        Ga = (w + (Ba << 1)) | 0;
        (F = e[(u + Ba) >> 2] | 0), (x = F & 65535), (F = F >>> 16);
        ra = f(x, x) | 0;
        sa = ((f(x, F) | 0) + (ra >>> 17)) | 0;
        ta = ((f(F, F) | 0) + (sa >>> 15)) | 0;
        e[Ga >> 2] = (sa << 17) | (ra & 131071);
        e[(Ga | 4) >> 2] = ta;
      }
      for (Aa = 0; (Aa | 0) < (v | 0); Aa = (Aa + 8) | 0) {
        (Ea = (u + Aa) | 0), (Ga = (w + (Aa << 1)) | 0);
        (F = e[Ea >> 2] | 0), (x = F & 65535), (F = F >>> 16);
        (V = e[(Ea | 4) >> 2] | 0), (N = V & 65535), (V = V >>> 16);
        ra = f(x, N) | 0;
        sa = ((f(x, V) | 0) + (ra >>> 16)) | 0;
        ta = ((f(F, N) | 0) + (sa & 65535)) | 0;
        wa = ((((f(F, V) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        xa = e[(Ga | 4) >> 2] | 0;
        ra = ((xa & 65535) + ((ra & 65535) << 1)) | 0;
        ta = ((((xa >>> 16) + ((ta & 65535) << 1)) | 0) + (ra >>> 16)) | 0;
        e[(Ga | 4) >> 2] = (ta << 16) | (ra & 65535);
        ua = ta >>> 16;
        xa = e[(Ga | 8) >> 2] | 0;
        ra = ((((xa & 65535) + ((wa & 65535) << 1)) | 0) + ua) | 0;
        ta = ((((xa >>> 16) + (wa >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
        e[(Ga | 8) >> 2] = (ta << 16) | (ra & 65535);
        ua = ta >>> 16;
        if (ua) {
          xa = e[(Ga | 12) >> 2] | 0;
          ra = ((xa & 65535) + ua) | 0;
          ta = ((xa >>> 16) + (ra >>> 16)) | 0;
          e[(Ga | 12) >> 2] = (ta << 16) | (ra & 65535);
        }
      }
      for (Aa = 0; (Aa | 0) < (v | 0); Aa = (Aa + 16) | 0) {
        (Ea = (u + Aa) | 0), (Ga = (w + (Aa << 1)) | 0);
        (F = e[Ea >> 2] | 0), (x = F & 65535), (F = F >>> 16), (G =
          e[(Ea | 4) >> 2] | 0), (y = G & 65535), (G = G >>> 16);
        (V = e[(Ea | 8) >> 2] | 0), (N = V & 65535), (V = V >>> 16), (W =
          e[(Ea | 12) >> 2] | 0), (O = W & 65535), (W = W >>> 16);
        ra = f(x, N) | 0;
        sa = f(F, N) | 0;
        ta = ((((f(x, V) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
        wa = ((((f(F, V) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        ba = (ta << 16) | (ra & 65535);
        ra = ((f(x, O) | 0) + (wa & 65535)) | 0;
        sa = ((f(F, O) | 0) + (wa >>> 16)) | 0;
        ta = ((((f(x, W) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
        wa = ((((f(F, W) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        ca = (ta << 16) | (ra & 65535);
        da = wa;
        ra = ((f(y, N) | 0) + (ca & 65535)) | 0;
        sa = ((f(G, N) | 0) + (ca >>> 16)) | 0;
        ta = ((((f(y, V) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
        wa = ((((f(G, V) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        ca = (ta << 16) | (ra & 65535);
        ra = ((((f(y, O) | 0) + (da & 65535)) | 0) + (wa & 65535)) | 0;
        sa = ((((f(G, O) | 0) + (da >>> 16)) | 0) + (wa >>> 16)) | 0;
        ta = ((((f(y, W) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
        wa = ((((f(G, W) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        da = (ta << 16) | (ra & 65535);
        ea = wa;
        xa = e[(Ga | 8) >> 2] | 0;
        ra = ((xa & 65535) + ((ba & 65535) << 1)) | 0;
        ta = ((((xa >>> 16) + (ba >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
        e[(Ga | 8) >> 2] = (ta << 16) | (ra & 65535);
        ua = ta >>> 16;
        xa = e[(Ga | 12) >> 2] | 0;
        ra = ((((xa & 65535) + ((ca & 65535) << 1)) | 0) + ua) | 0;
        ta = ((((xa >>> 16) + (ca >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
        e[(Ga | 12) >> 2] = (ta << 16) | (ra & 65535);
        ua = ta >>> 16;
        xa = e[(Ga | 16) >> 2] | 0;
        ra = ((((xa & 65535) + ((da & 65535) << 1)) | 0) + ua) | 0;
        ta = ((((xa >>> 16) + (da >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
        e[(Ga | 16) >> 2] = (ta << 16) | (ra & 65535);
        ua = ta >>> 16;
        xa = e[(Ga | 20) >> 2] | 0;
        ra = ((((xa & 65535) + ((ea & 65535) << 1)) | 0) + ua) | 0;
        ta = ((((xa >>> 16) + (ea >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
        e[(Ga | 20) >> 2] = (ta << 16) | (ra & 65535);
        ua = ta >>> 16;
        for (Da = 24; !!ua & ((Da | 0) < 32); Da = (Da + 4) | 0) {
          xa = e[(Ga | Da) >> 2] | 0;
          ra = ((xa & 65535) + ua) | 0;
          ta = ((xa >>> 16) + (ra >>> 16)) | 0;
          e[(Ga | Da) >> 2] = (ta << 16) | (ra & 65535);
          ua = ta >>> 16;
        }
      }
      for (Aa = 0; (Aa | 0) < (v | 0); Aa = (Aa + 32) | 0) {
        (Ea = (u + Aa) | 0), (Ga = (w + (Aa << 1)) | 0);
        (F = e[Ea >> 2] | 0), (x = F & 65535), (F = F >>> 16), (G =
          e[(Ea | 4) >> 2] | 0), (y = G & 65535), (G = G >>> 16), (H =
          e[(Ea | 8) >> 2] | 0), (z = H & 65535), (H = H >>> 16), (I =
          e[(Ea | 12) >> 2] | 0), (A = I & 65535), (I = I >>> 16);
        (V = e[(Ea | 16) >> 2] | 0), (N = V & 65535), (V = V >>> 16), (W =
          e[(Ea | 20) >> 2] | 0), (O = W & 65535), (W = W >>> 16), (X =
          e[(Ea | 24) >> 2] | 0), (P = X & 65535), (X = X >>> 16), (Y =
          e[(Ea | 28) >> 2] | 0), (Q = Y & 65535), (Y = Y >>> 16);
        ra = f(x, N) | 0;
        sa = f(F, N) | 0;
        ta = ((((f(x, V) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
        wa = ((((f(F, V) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        ba = (ta << 16) | (ra & 65535);
        ra = ((f(x, O) | 0) + (wa & 65535)) | 0;
        sa = ((f(F, O) | 0) + (wa >>> 16)) | 0;
        ta = ((((f(x, W) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
        wa = ((((f(F, W) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        ca = (ta << 16) | (ra & 65535);
        ra = ((f(x, P) | 0) + (wa & 65535)) | 0;
        sa = ((f(F, P) | 0) + (wa >>> 16)) | 0;
        ta = ((((f(x, X) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
        wa = ((((f(F, X) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        da = (ta << 16) | (ra & 65535);
        ra = ((f(x, Q) | 0) + (wa & 65535)) | 0;
        sa = ((f(F, Q) | 0) + (wa >>> 16)) | 0;
        ta = ((((f(x, Y) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
        wa = ((((f(F, Y) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        ea = (ta << 16) | (ra & 65535);
        fa = wa;
        ra = ((f(y, N) | 0) + (ca & 65535)) | 0;
        sa = ((f(G, N) | 0) + (ca >>> 16)) | 0;
        ta = ((((f(y, V) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
        wa = ((((f(G, V) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        ca = (ta << 16) | (ra & 65535);
        ra = ((((f(y, O) | 0) + (da & 65535)) | 0) + (wa & 65535)) | 0;
        sa = ((((f(G, O) | 0) + (da >>> 16)) | 0) + (wa >>> 16)) | 0;
        ta = ((((f(y, W) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
        wa = ((((f(G, W) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        da = (ta << 16) | (ra & 65535);
        ra = ((((f(y, P) | 0) + (ea & 65535)) | 0) + (wa & 65535)) | 0;
        sa = ((((f(G, P) | 0) + (ea >>> 16)) | 0) + (wa >>> 16)) | 0;
        ta = ((((f(y, X) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
        wa = ((((f(G, X) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        ea = (ta << 16) | (ra & 65535);
        ra = ((((f(y, Q) | 0) + (fa & 65535)) | 0) + (wa & 65535)) | 0;
        sa = ((((f(G, Q) | 0) + (fa >>> 16)) | 0) + (wa >>> 16)) | 0;
        ta = ((((f(y, Y) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
        wa = ((((f(G, Y) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        fa = (ta << 16) | (ra & 65535);
        ga = wa;
        ra = ((f(z, N) | 0) + (da & 65535)) | 0;
        sa = ((f(H, N) | 0) + (da >>> 16)) | 0;
        ta = ((((f(z, V) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
        wa = ((((f(H, V) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        da = (ta << 16) | (ra & 65535);
        ra = ((((f(z, O) | 0) + (ea & 65535)) | 0) + (wa & 65535)) | 0;
        sa = ((((f(H, O) | 0) + (ea >>> 16)) | 0) + (wa >>> 16)) | 0;
        ta = ((((f(z, W) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
        wa = ((((f(H, W) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        ea = (ta << 16) | (ra & 65535);
        ra = ((((f(z, P) | 0) + (fa & 65535)) | 0) + (wa & 65535)) | 0;
        sa = ((((f(H, P) | 0) + (fa >>> 16)) | 0) + (wa >>> 16)) | 0;
        ta = ((((f(z, X) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
        wa = ((((f(H, X) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        fa = (ta << 16) | (ra & 65535);
        ra = ((((f(z, Q) | 0) + (ga & 65535)) | 0) + (wa & 65535)) | 0;
        sa = ((((f(H, Q) | 0) + (ga >>> 16)) | 0) + (wa >>> 16)) | 0;
        ta = ((((f(z, Y) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
        wa = ((((f(H, Y) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        ga = (ta << 16) | (ra & 65535);
        ha = wa;
        ra = ((f(A, N) | 0) + (ea & 65535)) | 0;
        sa = ((f(I, N) | 0) + (ea >>> 16)) | 0;
        ta = ((((f(A, V) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
        wa = ((((f(I, V) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        ea = (ta << 16) | (ra & 65535);
        ra = ((((f(A, O) | 0) + (fa & 65535)) | 0) + (wa & 65535)) | 0;
        sa = ((((f(I, O) | 0) + (fa >>> 16)) | 0) + (wa >>> 16)) | 0;
        ta = ((((f(A, W) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
        wa = ((((f(I, W) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        fa = (ta << 16) | (ra & 65535);
        ra = ((((f(A, P) | 0) + (ga & 65535)) | 0) + (wa & 65535)) | 0;
        sa = ((((f(I, P) | 0) + (ga >>> 16)) | 0) + (wa >>> 16)) | 0;
        ta = ((((f(A, X) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
        wa = ((((f(I, X) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        ga = (ta << 16) | (ra & 65535);
        ra = ((((f(A, Q) | 0) + (ha & 65535)) | 0) + (wa & 65535)) | 0;
        sa = ((((f(I, Q) | 0) + (ha >>> 16)) | 0) + (wa >>> 16)) | 0;
        ta = ((((f(A, Y) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
        wa = ((((f(I, Y) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
        ha = (ta << 16) | (ra & 65535);
        ia = wa;
        xa = e[(Ga | 16) >> 2] | 0;
        ra = ((xa & 65535) + ((ba & 65535) << 1)) | 0;
        ta = ((((xa >>> 16) + (ba >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
        e[(Ga | 16) >> 2] = (ta << 16) | (ra & 65535);
        ua = ta >>> 16;
        xa = e[(Ga | 20) >> 2] | 0;
        ra = ((((xa & 65535) + ((ca & 65535) << 1)) | 0) + ua) | 0;
        ta = ((((xa >>> 16) + (ca >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
        e[(Ga | 20) >> 2] = (ta << 16) | (ra & 65535);
        ua = ta >>> 16;
        xa = e[(Ga | 24) >> 2] | 0;
        ra = ((((xa & 65535) + ((da & 65535) << 1)) | 0) + ua) | 0;
        ta = ((((xa >>> 16) + (da >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
        e[(Ga | 24) >> 2] = (ta << 16) | (ra & 65535);
        ua = ta >>> 16;
        xa = e[(Ga | 28) >> 2] | 0;
        ra = ((((xa & 65535) + ((ea & 65535) << 1)) | 0) + ua) | 0;
        ta = ((((xa >>> 16) + (ea >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
        e[(Ga | 28) >> 2] = (ta << 16) | (ra & 65535);
        ua = ta >>> 16;
        xa = e[(Ga + 32) >> 2] | 0;
        ra = ((((xa & 65535) + ((fa & 65535) << 1)) | 0) + ua) | 0;
        ta = ((((xa >>> 16) + (fa >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
        e[(Ga + 32) >> 2] = (ta << 16) | (ra & 65535);
        ua = ta >>> 16;
        xa = e[(Ga + 36) >> 2] | 0;
        ra = ((((xa & 65535) + ((ga & 65535) << 1)) | 0) + ua) | 0;
        ta = ((((xa >>> 16) + (ga >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
        e[(Ga + 36) >> 2] = (ta << 16) | (ra & 65535);
        ua = ta >>> 16;
        xa = e[(Ga + 40) >> 2] | 0;
        ra = ((((xa & 65535) + ((ha & 65535) << 1)) | 0) + ua) | 0;
        ta = ((((xa >>> 16) + (ha >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
        e[(Ga + 40) >> 2] = (ta << 16) | (ra & 65535);
        ua = ta >>> 16;
        xa = e[(Ga + 44) >> 2] | 0;
        ra = ((((xa & 65535) + ((ia & 65535) << 1)) | 0) + ua) | 0;
        ta = ((((xa >>> 16) + (ia >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
        e[(Ga + 44) >> 2] = (ta << 16) | (ra & 65535);
        ua = ta >>> 16;
        for (Da = 48; !!ua & ((Da | 0) < 64); Da = (Da + 4) | 0) {
          xa = e[(Ga + Da) >> 2] | 0;
          ra = ((xa & 65535) + ua) | 0;
          ta = ((xa >>> 16) + (ra >>> 16)) | 0;
          e[(Ga + Da) >> 2] = (ta << 16) | (ra & 65535);
          ua = ta >>> 16;
        }
      }
      for (ya = 32; (ya | 0) < (v | 0); ya = ya << 1) {
        za = ya << 1;
        for (Aa = 0; (Aa | 0) < (v | 0); Aa = (Aa + za) | 0) {
          Ga = (w + (Aa << 1)) | 0;
          va = 0;
          for (Ba = 0; (Ba | 0) < (ya | 0); Ba = (Ba + 32) | 0) {
            Ea = (((u + Aa) | 0) + Ba) | 0;
            (F = e[Ea >> 2] | 0), (x = F & 65535), (F = F >>> 16), (G =
              e[(Ea | 4) >> 2] | 0), (y = G & 65535), (G = G >>> 16), (H =
              e[(Ea | 8) >> 2] | 0), (z = H & 65535), (H = H >>> 16), (I =
              e[(Ea | 12) >> 2] | 0), (A = I & 65535), (I = I >>> 16), (J =
              e[(Ea | 16) >> 2] | 0), (B = J & 65535), (J = J >>> 16), (K =
              e[(Ea | 20) >> 2] | 0), (C = K & 65535), (K = K >>> 16), (L =
              e[(Ea | 24) >> 2] | 0), (D = L & 65535), (L = L >>> 16), (M =
              e[(Ea | 28) >> 2] | 0), (E = M & 65535), (M = M >>> 16);
            ja = ka = la = ma = na = oa = pa = qa = ua = 0;
            for (Ca = 0; (Ca | 0) < (ya | 0); Ca = (Ca + 32) | 0) {
              Fa = (((((u + Aa) | 0) + ya) | 0) + Ca) | 0;
              (V = e[Fa >> 2] | 0), (N = V & 65535), (V = V >>> 16), (W =
                e[(Fa | 4) >> 2] | 0), (O = W & 65535), (W = W >>> 16), (X =
                e[(Fa | 8) >> 2] | 0), (P = X & 65535), (X = X >>> 16), (Y =
                e[(Fa | 12) >> 2] | 0), (Q = Y & 65535), (Y = Y >>> 16), (Z =
                e[(Fa | 16) >> 2] | 0), (R = Z & 65535), (Z = Z >>> 16), ($ =
                e[(Fa | 20) >> 2] | 0), (S = $ & 65535), ($ = $ >>> 16), (_ =
                e[(Fa | 24) >> 2] | 0), (T = _ & 65535), (_ = _ >>> 16), (aa =
                e[(Fa | 28) >> 2] | 0), (U = aa & 65535), (aa = aa >>> 16);
              ba = ca = da = ea = fa = ga = ha = ia = 0;
              ra = ((((f(x, N) | 0) + (ba & 65535)) | 0) + (ja & 65535)) | 0;
              sa = ((((f(F, N) | 0) + (ba >>> 16)) | 0) + (ja >>> 16)) | 0;
              ta = ((((f(x, V) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(F, V) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ba = (ta << 16) | (ra & 65535);
              ra = ((((f(x, O) | 0) + (ca & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(F, O) | 0) + (ca >>> 16)) | 0) + (wa >>> 16)) | 0;

              ta = ((((f(x, W) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(F, W) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ca = (ta << 16) | (ra & 65535);
              ra = ((((f(x, P) | 0) + (da & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(F, P) | 0) + (da >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(x, X) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(F, X) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              da = (ta << 16) | (ra & 65535);
              ra = ((((f(x, Q) | 0) + (ea & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(F, Q) | 0) + (ea >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(x, Y) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(F, Y) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ea = (ta << 16) | (ra & 65535);
              ra = ((((f(x, R) | 0) + (fa & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(F, R) | 0) + (fa >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(x, Z) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(F, Z) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              fa = (ta << 16) | (ra & 65535);
              ra = ((((f(x, S) | 0) + (ga & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(F, S) | 0) + (ga >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(x, $) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(F, $) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ga = (ta << 16) | (ra & 65535);
              ra = ((((f(x, T) | 0) + (ha & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(F, T) | 0) + (ha >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(x, _) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(F, _) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ha = (ta << 16) | (ra & 65535);
              ra = ((((f(x, U) | 0) + (ia & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(F, U) | 0) + (ia >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(x, aa) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(F, aa) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ia = (ta << 16) | (ra & 65535);
              ja = wa;
              ra = ((((f(y, N) | 0) + (ca & 65535)) | 0) + (ka & 65535)) | 0;
              sa = ((((f(G, N) | 0) + (ca >>> 16)) | 0) + (ka >>> 16)) | 0;
              ta = ((((f(y, V) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(G, V) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ca = (ta << 16) | (ra & 65535);
              ra = ((((f(y, O) | 0) + (da & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(G, O) | 0) + (da >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(y, W) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(G, W) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              da = (ta << 16) | (ra & 65535);
              ra = ((((f(y, P) | 0) + (ea & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(G, P) | 0) + (ea >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(y, X) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(G, X) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ea = (ta << 16) | (ra & 65535);
              ra = ((((f(y, Q) | 0) + (fa & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(G, Q) | 0) + (fa >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(y, Y) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(G, Y) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              fa = (ta << 16) | (ra & 65535);
              ra = ((((f(y, R) | 0) + (ga & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(G, R) | 0) + (ga >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(y, Z) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(G, Z) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ga = (ta << 16) | (ra & 65535);
              ra = ((((f(y, S) | 0) + (ha & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(G, S) | 0) + (ha >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(y, $) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(G, $) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ha = (ta << 16) | (ra & 65535);
              ra = ((((f(y, T) | 0) + (ia & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(G, T) | 0) + (ia >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(y, _) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(G, _) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ia = (ta << 16) | (ra & 65535);
              ra = ((((f(y, U) | 0) + (ja & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(G, U) | 0) + (ja >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(y, aa) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(G, aa) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ja = (ta << 16) | (ra & 65535);
              ka = wa;
              ra = ((((f(z, N) | 0) + (da & 65535)) | 0) + (la & 65535)) | 0;
              sa = ((((f(H, N) | 0) + (da >>> 16)) | 0) + (la >>> 16)) | 0;
              ta = ((((f(z, V) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(H, V) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              da = (ta << 16) | (ra & 65535);
              ra = ((((f(z, O) | 0) + (ea & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(H, O) | 0) + (ea >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(z, W) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(H, W) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ea = (ta << 16) | (ra & 65535);
              ra = ((((f(z, P) | 0) + (fa & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(H, P) | 0) + (fa >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(z, X) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(H, X) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              fa = (ta << 16) | (ra & 65535);
              ra = ((((f(z, Q) | 0) + (ga & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(H, Q) | 0) + (ga >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(z, Y) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(H, Y) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ga = (ta << 16) | (ra & 65535);
              ra = ((((f(z, R) | 0) + (ha & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(H, R) | 0) + (ha >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(z, Z) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(H, Z) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ha = (ta << 16) | (ra & 65535);
              ra = ((((f(z, S) | 0) + (ia & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(H, S) | 0) + (ia >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(z, $) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(H, $) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ia = (ta << 16) | (ra & 65535);
              ra = ((((f(z, T) | 0) + (ja & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(H, T) | 0) + (ja >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(z, _) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(H, _) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ja = (ta << 16) | (ra & 65535);
              ra = ((((f(z, U) | 0) + (ka & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(H, U) | 0) + (ka >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(z, aa) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(H, aa) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ka = (ta << 16) | (ra & 65535);
              la = wa;
              ra = ((((f(A, N) | 0) + (ea & 65535)) | 0) + (ma & 65535)) | 0;
              sa = ((((f(I, N) | 0) + (ea >>> 16)) | 0) + (ma >>> 16)) | 0;
              ta = ((((f(A, V) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(I, V) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ea = (ta << 16) | (ra & 65535);
              ra = ((((f(A, O) | 0) + (fa & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(I, O) | 0) + (fa >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(A, W) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(I, W) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              fa = (ta << 16) | (ra & 65535);
              ra = ((((f(A, P) | 0) + (ga & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(I, P) | 0) + (ga >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(A, X) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(I, X) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ga = (ta << 16) | (ra & 65535);
              ra = ((((f(A, Q) | 0) + (ha & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(I, Q) | 0) + (ha >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(A, Y) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(I, Y) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ha = (ta << 16) | (ra & 65535);
              ra = ((((f(A, R) | 0) + (ia & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(I, R) | 0) + (ia >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(A, Z) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(I, Z) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ia = (ta << 16) | (ra & 65535);
              ra = ((((f(A, S) | 0) + (ja & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(I, S) | 0) + (ja >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(A, $) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(I, $) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ja = (ta << 16) | (ra & 65535);
              ra = ((((f(A, T) | 0) + (ka & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(I, T) | 0) + (ka >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(A, _) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(I, _) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ka = (ta << 16) | (ra & 65535);
              ra = ((((f(A, U) | 0) + (la & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(I, U) | 0) + (la >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(A, aa) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(I, aa) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              la = (ta << 16) | (ra & 65535);
              ma = wa;
              ra = ((((f(B, N) | 0) + (fa & 65535)) | 0) + (na & 65535)) | 0;
              sa = ((((f(J, N) | 0) + (fa >>> 16)) | 0) + (na >>> 16)) | 0;
              ta = ((((f(B, V) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(J, V) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              fa = (ta << 16) | (ra & 65535);
              ra = ((((f(B, O) | 0) + (ga & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(J, O) | 0) + (ga >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(B, W) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(J, W) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ga = (ta << 16) | (ra & 65535);
              ra = ((((f(B, P) | 0) + (ha & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(J, P) | 0) + (ha >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(B, X) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(J, X) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ha = (ta << 16) | (ra & 65535);
              ra = ((((f(B, Q) | 0) + (ia & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(J, Q) | 0) + (ia >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(B, Y) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(J, Y) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ia = (ta << 16) | (ra & 65535);
              ra = ((((f(B, R) | 0) + (ja & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(J, R) | 0) + (ja >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(B, Z) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(J, Z) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ja = (ta << 16) | (ra & 65535);
              ra = ((((f(B, S) | 0) + (ka & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(J, S) | 0) + (ka >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(B, $) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(J, $) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ka = (ta << 16) | (ra & 65535);
              ra = ((((f(B, T) | 0) + (la & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(J, T) | 0) + (la >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(B, _) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(J, _) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              la = (ta << 16) | (ra & 65535);
              ra = ((((f(B, U) | 0) + (ma & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(J, U) | 0) + (ma >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(B, aa) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(J, aa) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ma = (ta << 16) | (ra & 65535);
              na = wa;
              ra = ((((f(C, N) | 0) + (ga & 65535)) | 0) + (oa & 65535)) | 0;
              sa = ((((f(K, N) | 0) + (ga >>> 16)) | 0) + (oa >>> 16)) | 0;
              ta = ((((f(C, V) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(K, V) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ga = (ta << 16) | (ra & 65535);
              ra = ((((f(C, O) | 0) + (ha & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(K, O) | 0) + (ha >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(C, W) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(K, W) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ha = (ta << 16) | (ra & 65535);
              ra = ((((f(C, P) | 0) + (ia & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(K, P) | 0) + (ia >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(C, X) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(K, X) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ia = (ta << 16) | (ra & 65535);
              ra = ((((f(C, Q) | 0) + (ja & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(K, Q) | 0) + (ja >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(C, Y) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(K, Y) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ja = (ta << 16) | (ra & 65535);
              ra = ((((f(C, R) | 0) + (ka & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(K, R) | 0) + (ka >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(C, Z) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(K, Z) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ka = (ta << 16) | (ra & 65535);
              ra = ((((f(C, S) | 0) + (la & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(K, S) | 0) + (la >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(C, $) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(K, $) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              la = (ta << 16) | (ra & 65535);
              ra = ((((f(C, T) | 0) + (ma & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(K, T) | 0) + (ma >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(C, _) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(K, _) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ma = (ta << 16) | (ra & 65535);
              ra = ((((f(C, U) | 0) + (na & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(K, U) | 0) + (na >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(C, aa) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(K, aa) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              na = (ta << 16) | (ra & 65535);
              oa = wa;
              ra = ((((f(D, N) | 0) + (ha & 65535)) | 0) + (pa & 65535)) | 0;
              sa = ((((f(L, N) | 0) + (ha >>> 16)) | 0) + (pa >>> 16)) | 0;
              ta = ((((f(D, V) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(L, V) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ha = (ta << 16) | (ra & 65535);
              ra = ((((f(D, O) | 0) + (ia & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(L, O) | 0) + (ia >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(D, W) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(L, W) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ia = (ta << 16) | (ra & 65535);
              ra = ((((f(D, P) | 0) + (ja & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(L, P) | 0) + (ja >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(D, X) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(L, X) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ja = (ta << 16) | (ra & 65535);
              ra = ((((f(D, Q) | 0) + (ka & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(L, Q) | 0) + (ka >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(D, Y) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(L, Y) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ka = (ta << 16) | (ra & 65535);
              ra = ((((f(D, R) | 0) + (la & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(L, R) | 0) + (la >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(D, Z) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(L, Z) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              la = (ta << 16) | (ra & 65535);
              ra = ((((f(D, S) | 0) + (ma & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(L, S) | 0) + (ma >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(D, $) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(L, $) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ma = (ta << 16) | (ra & 65535);
              ra = ((((f(D, T) | 0) + (na & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(L, T) | 0) + (na >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(D, _) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(L, _) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              na = (ta << 16) | (ra & 65535);
              ra = ((((f(D, U) | 0) + (oa & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(L, U) | 0) + (oa >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(D, aa) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(L, aa) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              oa = (ta << 16) | (ra & 65535);
              pa = wa;
              ra = ((((f(E, N) | 0) + (ia & 65535)) | 0) + (qa & 65535)) | 0;
              sa = ((((f(M, N) | 0) + (ia >>> 16)) | 0) + (qa >>> 16)) | 0;
              ta = ((((f(E, V) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(M, V) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ia = (ta << 16) | (ra & 65535);
              ra = ((((f(E, O) | 0) + (ja & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(M, O) | 0) + (ja >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(E, W) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(M, W) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ja = (ta << 16) | (ra & 65535);
              ra = ((((f(E, P) | 0) + (ka & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(M, P) | 0) + (ka >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(E, X) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(M, X) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ka = (ta << 16) | (ra & 65535);
              ra = ((((f(E, Q) | 0) + (la & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(M, Q) | 0) + (la >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(E, Y) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(M, Y) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              la = (ta << 16) | (ra & 65535);
              ra = ((((f(E, R) | 0) + (ma & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(M, R) | 0) + (ma >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(E, Z) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(M, Z) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              ma = (ta << 16) | (ra & 65535);
              ra = ((((f(E, S) | 0) + (na & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(M, S) | 0) + (na >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(E, $) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(M, $) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              na = (ta << 16) | (ra & 65535);
              ra = ((((f(E, T) | 0) + (oa & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(M, T) | 0) + (oa >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(E, _) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(M, _) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              oa = (ta << 16) | (ra & 65535);
              ra = ((((f(E, U) | 0) + (pa & 65535)) | 0) + (wa & 65535)) | 0;
              sa = ((((f(M, U) | 0) + (pa >>> 16)) | 0) + (wa >>> 16)) | 0;
              ta = ((((f(E, aa) | 0) + (sa & 65535)) | 0) + (ra >>> 16)) | 0;
              wa = ((((f(M, aa) | 0) + (sa >>> 16)) | 0) + (ta >>> 16)) | 0;
              pa = (ta << 16) | (ra & 65535);
              qa = wa;
              Da = (ya + ((Ba + Ca) | 0)) | 0;
              xa = e[(Ga + Da) >> 2] | 0;
              ra = ((((xa & 65535) + ((ba & 65535) << 1)) | 0) + ua) | 0;
              ta = ((((xa >>> 16) + (ba >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
              e[(Ga + Da) >> 2] = (ta << 16) | (ra & 65535);
              ua = ta >>> 16;
              Da = (Da + 4) | 0;
              xa = e[(Ga + Da) >> 2] | 0;
              ra = ((((xa & 65535) + ((ca & 65535) << 1)) | 0) + ua) | 0;
              ta = ((((xa >>> 16) + (ca >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
              e[(Ga + Da) >> 2] = (ta << 16) | (ra & 65535);
              ua = ta >>> 16;
              Da = (Da + 4) | 0;
              xa = e[(Ga + Da) >> 2] | 0;
              ra = ((((xa & 65535) + ((da & 65535) << 1)) | 0) + ua) | 0;
              ta = ((((xa >>> 16) + (da >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
              e[(Ga + Da) >> 2] = (ta << 16) | (ra & 65535);
              ua = ta >>> 16;
              Da = (Da + 4) | 0;
              xa = e[(Ga + Da) >> 2] | 0;
              ra = ((((xa & 65535) + ((ea & 65535) << 1)) | 0) + ua) | 0;
              ta = ((((xa >>> 16) + (ea >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
              e[(Ga + Da) >> 2] = (ta << 16) | (ra & 65535);
              ua = ta >>> 16;
              Da = (Da + 4) | 0;
              xa = e[(Ga + Da) >> 2] | 0;
              ra = ((((xa & 65535) + ((fa & 65535) << 1)) | 0) + ua) | 0;
              ta = ((((xa >>> 16) + (fa >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
              e[(Ga + Da) >> 2] = (ta << 16) | (ra & 65535);
              ua = ta >>> 16;
              Da = (Da + 4) | 0;
              xa = e[(Ga + Da) >> 2] | 0;
              ra = ((((xa & 65535) + ((ga & 65535) << 1)) | 0) + ua) | 0;
              ta = ((((xa >>> 16) + (ga >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
              e[(Ga + Da) >> 2] = (ta << 16) | (ra & 65535);
              ua = ta >>> 16;
              Da = (Da + 4) | 0;
              xa = e[(Ga + Da) >> 2] | 0;
              ra = ((((xa & 65535) + ((ha & 65535) << 1)) | 0) + ua) | 0;
              ta = ((((xa >>> 16) + (ha >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
              e[(Ga + Da) >> 2] = (ta << 16) | (ra & 65535);
              ua = ta >>> 16;
              Da = (Da + 4) | 0;
              xa = e[(Ga + Da) >> 2] | 0;
              ra = ((((xa & 65535) + ((ia & 65535) << 1)) | 0) + ua) | 0;
              ta = ((((xa >>> 16) + (ia >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
              e[(Ga + Da) >> 2] = (ta << 16) | (ra & 65535);
              ua = ta >>> 16;
            }
            Da = (ya + ((Ba + Ca) | 0)) | 0;
            xa = e[(Ga + Da) >> 2] | 0;
            ra =
              ((((((xa & 65535) + ((ja & 65535) << 1)) | 0) + ua) | 0) + va) |
              0;
            ta = ((((xa >>> 16) + (ja >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
            e[(Ga + Da) >> 2] = (ta << 16) | (ra & 65535);
            ua = ta >>> 16;
            Da = (Da + 4) | 0;
            xa = e[(Ga + Da) >> 2] | 0;
            ra = ((((xa & 65535) + ((ka & 65535) << 1)) | 0) + ua) | 0;
            ta = ((((xa >>> 16) + (ka >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
            e[(Ga + Da) >> 2] = (ta << 16) | (ra & 65535);
            ua = ta >>> 16;
            Da = (Da + 4) | 0;
            xa = e[(Ga + Da) >> 2] | 0;
            ra = ((((xa & 65535) + ((la & 65535) << 1)) | 0) + ua) | 0;
            ta = ((((xa >>> 16) + (la >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
            e[(Ga + Da) >> 2] = (ta << 16) | (ra & 65535);
            ua = ta >>> 16;
            Da = (Da + 4) | 0;
            xa = e[(Ga + Da) >> 2] | 0;
            ra = ((((xa & 65535) + ((ma & 65535) << 1)) | 0) + ua) | 0;
            ta = ((((xa >>> 16) + (ma >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
            e[(Ga + Da) >> 2] = (ta << 16) | (ra & 65535);
            ua = ta >>> 16;
            Da = (Da + 4) | 0;
            xa = e[(Ga + Da) >> 2] | 0;
            ra = ((((xa & 65535) + ((na & 65535) << 1)) | 0) + ua) | 0;
            ta = ((((xa >>> 16) + (na >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
            e[(Ga + Da) >> 2] = (ta << 16) | (ra & 65535);
            ua = ta >>> 16;
            Da = (Da + 4) | 0;
            xa = e[(Ga + Da) >> 2] | 0;
            ra = ((((xa & 65535) + ((oa & 65535) << 1)) | 0) + ua) | 0;
            ta = ((((xa >>> 16) + (oa >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
            e[(Ga + Da) >> 2] = (ta << 16) | (ra & 65535);
            ua = ta >>> 16;
            Da = (Da + 4) | 0;
            xa = e[(Ga + Da) >> 2] | 0;
            ra = ((((xa & 65535) + ((pa & 65535) << 1)) | 0) + ua) | 0;
            ta = ((((xa >>> 16) + (pa >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
            e[(Ga + Da) >> 2] = (ta << 16) | (ra & 65535);
            ua = ta >>> 16;
            Da = (Da + 4) | 0;
            xa = e[(Ga + Da) >> 2] | 0;
            ra = ((((xa & 65535) + ((qa & 65535) << 1)) | 0) + ua) | 0;
            ta = ((((xa >>> 16) + (qa >>> 16 << 1)) | 0) + (ra >>> 16)) | 0;
            e[(Ga + Da) >> 2] = (ta << 16) | (ra & 65535);
            va = ta >>> 16;
          }
          for (
            Da = (Da + 4) | 0;
            !!va & ((Da | 0) < za << 1);
            Da = (Da + 4) | 0
          ) {
            xa = e[(Ga + Da) >> 2] | 0;
            ra = ((xa & 65535) + va) | 0;
            ta = ((xa >>> 16) + (ra >>> 16)) | 0;
            e[(Ga + Da) >> 2] = (ta << 16) | (ra & 65535);
            va = ta >>> 16;
          }
        }
      }
    }
    function s(u, v, w, x, y) {
      u = u | 0;
      v = v | 0;
      w = w | 0;
      x = x | 0;
      y = y | 0;
      var z = 0,
        A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0,
        G = 0,
        H = 0,
        I = 0,
        J = 0,
        K = 0,
        L = 0,
        M = 0,
        N = 0,
        O = 0,
        P = 0,
        Q = 0,
        R = 0;
      for (P = (v - 1) & -4; (P | 0) >= 0; P = (P - 4) | 0) {
        z = e[(u + P) >> 2] | 0;
        if (z) {
          v = P;
          break;
        }
      }
      for (P = (x - 1) & -4; (P | 0) >= 0; P = (P - 4) | 0) {
        A = e[(w + P) >> 2] | 0;
        if (A) {
          x = P;
          break;
        }
      }
      while ((A & 2147483648) == 0) {
        A = A << 1;
        B = (B + 1) | 0;
      }
      D = e[(u + v) >> 2] | 0;
      if (B) {
        C = D >>> ((32 - B) | 0);
        for (P = (v - 4) | 0; (P | 0) >= 0; P = (P - 4) | 0) {
          z = e[(u + P) >> 2] | 0;
          e[(u + P + 4) >> 2] = (D << B) | (B ? z >>> ((32 - B) | 0) : 0);
          D = z;
        }
        e[u >> 2] = D << B;
      }
      if (B) {
        E = e[(w + x) >> 2] | 0;
        for (P = (x - 4) | 0; (P | 0) >= 0; P = (P - 4) | 0) {
          A = e[(w + P) >> 2] | 0;
          e[(w + P + 4) >> 2] = (E << B) | (A >>> ((32 - B) | 0));
          E = A;
        }
        e[w >> 2] = E << B;
      }
      E = e[(w + x) >> 2] | 0;
      (F = E >>> 16), (G = E & 65535);
      for (P = v; (P | 0) >= (x | 0); P = (P - 4) | 0) {
        Q = (P - x) | 0;
        D = e[(u + P) >> 2] | 0;
        (H = ((C >>> 0) / (F >>> 0)) | 0), (J =
          ((C >>> 0) % (F >>> 0)) | 0), (L = f(H, G) | 0);
        while (
          ((H | 0) == 65536) |
          (L >>> 0 > ((J << 16) | (D >>> 16)) >>> 0)
        ) {
          (H = (H - 1) | 0), (J = (J + F) | 0), (L = (L - G) | 0);
          if ((J | 0) >= 65536) break;
        }
        (N = 0), (O = 0);
        for (R = 0; (R | 0) <= (x | 0); R = (R + 4) | 0) {
          A = e[(w + R) >> 2] | 0;
          L = ((f(H, A & 65535) | 0) + (N >>> 16)) | 0;
          M = ((f(H, A >>> 16) | 0) + (L >>> 16)) | 0;
          A = (N & 65535) | (L << 16);
          N = M;
          z = e[(u + Q + R) >> 2] | 0;
          L = ((((z & 65535) - (A & 65535)) | 0) + O) | 0;
          M = ((((z >>> 16) - (A >>> 16)) | 0) + (L >> 16)) | 0;
          e[(u + Q + R) >> 2] = (M << 16) | (L & 65535);
          O = M >> 16;
        }
        L = ((((C & 65535) - (N & 65535)) | 0) + O) | 0;
        M = ((((C >>> 16) - (N >>> 16)) | 0) + (L >> 16)) | 0;
        C = (M << 16) | (L & 65535);
        O = M >> 16;
        if (O) {
          H = (H - 1) | 0;
          O = 0;
          for (R = 0; (R | 0) <= (x | 0); R = (R + 4) | 0) {
            A = e[(w + R) >> 2] | 0;
            z = e[(u + Q + R) >> 2] | 0;
            L = ((z & 65535) + O) | 0;
            M = ((z >>> 16) + A + (L >>> 16)) | 0;
            e[(u + Q + R) >> 2] = (M << 16) | (L & 65535);
            O = M >>> 16;
          }
          C = (C + O) | 0;
        }
        D = e[(u + P) >> 2] | 0;
        z = (C << 16) | (D >>> 16);
        (I = ((z >>> 0) / (F >>> 0)) | 0), (K =
          ((z >>> 0) % (F >>> 0)) | 0), (L = f(I, G) | 0);
        while (
          ((I | 0) == 65536) |
          (L >>> 0 > ((K << 16) | (D & 65535)) >>> 0)
        ) {
          (I = (I - 1) | 0), (K = (K + F) | 0), (L = (L - G) | 0);
          if ((K | 0) >= 65536) break;
        }
        (N = 0), (O = 0);
        for (R = 0; (R | 0) <= (x | 0); R = (R + 4) | 0) {
          A = e[(w + R) >> 2] | 0;
          L = ((f(I, A & 65535) | 0) + (N & 65535)) | 0;
          M = ((((f(I, A >>> 16) | 0) + (L >>> 16)) | 0) + (N >>> 16)) | 0;
          A = (L & 65535) | (M << 16);
          N = M >>> 16;
          z = e[(u + Q + R) >> 2] | 0;
          L = ((((z & 65535) - (A & 65535)) | 0) + O) | 0;
          M = ((((z >>> 16) - (A >>> 16)) | 0) + (L >> 16)) | 0;
          O = M >> 16;
          e[(u + Q + R) >> 2] = (M << 16) | (L & 65535);
        }
        L = ((((C & 65535) - (N & 65535)) | 0) + O) | 0;
        M = ((((C >>> 16) - (N >>> 16)) | 0) + (L >> 16)) | 0;
        O = M >> 16;
        if (O) {
          I = (I - 1) | 0;
          O = 0;
          for (R = 0; (R | 0) <= (x | 0); R = (R + 4) | 0) {
            A = e[(w + R) >> 2] | 0;
            z = e[(u + Q + R) >> 2] | 0;
            L = ((((z & 65535) + (A & 65535)) | 0) + O) | 0;
            M = ((((z >>> 16) + (A >>> 16)) | 0) + (L >>> 16)) | 0;
            O = M >>> 16;
            e[(u + Q + R) >> 2] = (L & 65535) | (M << 16);
          }
        }
        e[(y + Q) >> 2] = (H << 16) | I;
        C = e[(u + P) >> 2] | 0;
      }
      if (B) {
        D = e[u >> 2] | 0;
        for (P = 4; (P | 0) <= (x | 0); P = (P + 4) | 0) {
          z = e[(u + P) >> 2] | 0;
          e[(u + P - 4) >> 2] = (z << ((32 - B) | 0)) | (D >>> B);
          D = z;
        }
        e[(u + x) >> 2] = D >>> B;
      }
    }
    function t(u, v, w, x, y, z) {
      u = u | 0;
      v = v | 0;
      w = w | 0;
      x = x | 0;
      y = y | 0;
      z = z | 0;
      var A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0,
        G = 0,
        H = 0,
        I = 0,
        J = 0,
        K = 0,
        L = 0,
        M = 0,
        N = 0;
      A = h(x << 1) | 0;
      k(x << 1, 0, A);
      j(v, u, A);
      for (L = 0; (L | 0) < (x | 0); L = (L + 4) | 0) {
        (C = e[(A + L) >> 2] | 0), (D = C & 65535), (C = C >>> 16);
        (F = y >>> 16), (E = y & 65535);
        (G = f(D, E) | 0), (H =
          ((((f(D, F) | 0) + (f(C, E) | 0)) | 0) + (G >>> 16)) | 0);
        (D = G & 65535), (C = H & 65535);
        K = 0;
        for (M = 0; (M | 0) < (x | 0); M = (M + 4) | 0) {
          N = (L + M) | 0;
          (F = e[(w + M) >> 2] | 0), (E = F & 65535), (F = F >>> 16);
          J = e[(A + N) >> 2] | 0;
          G = ((((f(D, E) | 0) + (K & 65535)) | 0) + (J & 65535)) | 0;
          H = ((((f(D, F) | 0) + (K >>> 16)) | 0) + (J >>> 16)) | 0;
          I = ((((f(C, E) | 0) + (H & 65535)) | 0) + (G >>> 16)) | 0;
          K = ((((f(C, F) | 0) + (I >>> 16)) | 0) + (H >>> 16)) | 0;
          J = (I << 16) | (G & 65535);
          e[(A + N) >> 2] = J;
        }
        N = (L + M) | 0;
        J = e[(A + N) >> 2] | 0;
        G = ((((J & 65535) + (K & 65535)) | 0) + B) | 0;
        H = ((((J >>> 16) + (K >>> 16)) | 0) + (G >>> 16)) | 0;
        e[(A + N) >> 2] = (H << 16) | (G & 65535);
        B = H >>> 16;
      }
      j(x, (A + x) | 0, z);
      i(x << 1);
      if (B | ((m(w, x, z, x) | 0) <= 0)) {
        p(z, x, w, x, z, x) | 0;
      }
    }
    return {
      sreset: g,
      salloc: h,
      sfree: i,
      z: k,
      tst: n,
      neg: l,
      cmp: m,
      add: o,
      sub: p,
      mul: q,
      sqr: r,
      div: s,
      mredc: t
    };
  }
  function wa(a) {
    return a instanceof ya;
  }
  function xa(a, b) {
    return (a * b) | 0;
  }
  function ya(a) {
    var b = Kb,
      c = 0,
      d = 0;
    if ((n(a) && (a = f(a)), o(a) && (a = new Uint8Array(a)), void 0 === a));
    else if (m(a)) {
      var e = Math.abs(a);
      e > 4294967295
        ? (
            (b = new Uint32Array(2)),
            (b[0] = 0 | e),
            (b[1] = (e / 4294967296) | 0),
            (c = 52)
          )
        : e > 0
          ? ((b = new Uint32Array(1)), (b[0] = e), (c = 32))
          : ((b = Kb), (c = 0)), (d = 0 > a ? -1 : 1);
    } else if (p(a)) {
      for (var g = 0; !a[g]; g++);
      if (((c = 8 * (a.length - g)), !c)) return Mb;
      b = new Uint32Array((c + 31) >> 5);
      for (var h = a.length - 4; h >= g; h -= 4)
        b[(a.length - 4 - h) >> 2] =
          (a[h] << 24) | (a[h + 1] << 16) | (a[h + 2] << 8) | a[h + 3];
      g - h === 3
        ? (b[b.length - 1] = a[g])
        : g - h === 2
          ? (b[b.length - 1] = (a[g] << 8) | a[g + 1])
          : g - h === 1 &&
            (b[b.length - 1] =
              (a[g] << 16) | (a[g + 1] << 8) | a[g + 2]), (d = 1);
    } else {
      if ('object' != typeof a || null === a)
        throw new TypeError('number is of unexpected type');
      (b = new Uint32Array(a.limbs)), (c = a.bitLength), (d = a.sign);
    }
    (this.limbs = b), (this.bitLength = c), (this.sign = d);
  }
  function za(a) {
    a = a || 16;
    var b = this.limbs,
      c = this.bitLength,
      e = '';
    if (16 !== a) throw new d('bad radix');
    for (var f = ((c + 31) >> 5) - 1; f >= 0; f--) {
      var g = b[f].toString(16);
      (e += '00000000'.substr(g.length)), (e += g);
    }
    return (e = e.replace(/^0+/, '')), e.length || (e = '0'), this.sign < 0 &&
      (e = '-' + e), e;
  }
  function Aa() {
    var a = this.bitLength,
      b = this.limbs;
    if (0 === a) return new Uint8Array(0);
    for (var c = (a + 7) >> 3, d = new Uint8Array(c), e = 0; c > e; e++) {
      var f = c - e - 1;
      d[e] = b[f >> 2] >> ((3 & f) << 3);
    }
    return d;
  }
  function Ba() {
    var a = this.limbs,
      b = this.bitLength,
      c = this.sign;
    if (!c) return 0;
    if (32 >= b) return c * (a[0] >>> 0);
    if (52 >= b) return c * (4294967296 * (a[1] >>> 0) + (a[0] >>> 0));
    var d,
      e,
      f = 0;
    for (d = a.length - 1; d >= 0; d--)
      if (0 !== (e = a[d])) {
        for (; 0 === ((e << f) & 2147483648); ) f++;
        break;
      }
    return 0 === d
      ? c * (a[0] >>> 0)
      : c *
        (1048576 * (((a[d] << f) | (f ? a[d - 1] >>> (32 - f) : 0)) >>> 0) +
          (((a[d - 1] << f) | (f && d > 1 ? a[d - 2] >>> (32 - f) : 0)) >>>
            12)) *
        Math.pow(2, 32 * d - f - 52);
  }
  function Ca(a) {
    var b = this.limbs,
      c = this.bitLength;
    if (a >= c) return this;
    var d = new ya(),
      e = (a + 31) >> 5,
      f = a % 32;
    return (d.limbs = new Uint32Array(
      b.subarray(0, e)
    )), (d.bitLength = a), (d.sign = this.sign), f &&
      (d.limbs[e - 1] &= -1 >>> (32 - f)), d;
  }
  function Da(a, b) {
    if (!m(a)) throw new TypeError('TODO');
    if (void 0 !== b && !m(b)) throw new TypeError('TODO');
    var c = this.limbs,
      d = this.bitLength;
    if (0 > a) throw new RangeError('TODO');
    if (a >= d) return Mb;
    (void 0 === b || b > d - a) && (b = d - a);
    var e,
      f = new ya(),
      g = a >> 5,
      h = (a + b + 31) >> 5,
      i = (b + 31) >> 5,
      j = a % 32,
      k = b % 32;
    if (((e = new Uint32Array(i)), j)) {
      for (var l = 0; h - g - 1 > l; l++)
        e[l] = (c[g + l] >>> j) | (c[g + l + 1] << (32 - j));
      e[l] = c[g + l] >>> j;
    } else e.set(c.subarray(g, h));
    return k &&
      (e[i - 1] &=
        -1 >>>
        (32 - k)), (f.limbs = e), (f.bitLength = b), (f.sign = this.sign), f;
  }
  function Ea() {
    var a = new ya();
    return (a.limbs = this.limbs), (a.bitLength = this.bitLength), (a.sign =
      -1 * this.sign), a;
  }
  function Fa(a) {
    wa(a) || (a = new ya(a));
    var b = this.limbs,
      c = b.length,
      d = a.limbs,
      e = d.length,
      f = 0;
    return this.sign < a.sign
      ? -1
      : this.sign > a.sign
        ? 1
        : (
            Jb.set(b, 0),
            Jb.set(d, c),
            (f = Hb.cmp(0, c << 2, c << 2, e << 2)),
            f * this.sign
          );
  }
  function Ga(a) {
    if ((wa(a) || (a = new ya(a)), !this.sign)) return a;
    if (!a.sign) return this;
    var b,
      c,
      d,
      e,
      f = this.bitLength,
      g = this.limbs,
      h = g.length,
      i = this.sign,
      j = a.bitLength,
      k = a.limbs,
      l = k.length,
      m = a.sign,
      n = new ya();
    (b = (f > j ? f : j) + (i * m > 0 ? 1 : 0)), (c =
      (b + 31) >> 5), Hb.sreset();
    var o = Hb.salloc(h << 2),
      p = Hb.salloc(l << 2),
      q = Hb.salloc(c << 2);
    return Hb.z(q - o + (c << 2), 0, o), Jb.set(g, o >> 2), Jb.set(
      k,
      p >> 2
    ), i * m > 0
      ? (Hb.add(o, h << 2, p, l << 2, q, c << 2), (d = i))
      : i > m
        ? ((e = Hb.sub(o, h << 2, p, l << 2, q, c << 2)), (d = e ? m : i))
        : ((e = Hb.sub(p, l << 2, o, h << 2, q, c << 2)), (d = e ? i : m)), e &&
      Hb.neg(q, c << 2, q, c << 2), 0 === Hb.tst(q, c << 2)
      ? Mb
      : (
          (n.limbs = new Uint32Array(Jb.subarray(q >> 2, (q >> 2) + c))),
          (n.bitLength = b),
          (n.sign = d),
          n
        );
  }
  function Ha(a) {
    return wa(a) || (a = new ya(a)), this.add(a.negate());
  }
  function Ia(a) {
    if ((wa(a) || (a = new ya(a)), !this.sign || !a.sign)) return Mb;
    var b,
      c,
      d = this.bitLength,
      e = this.limbs,
      f = e.length,
      g = a.bitLength,
      h = a.limbs,
      i = h.length,
      j = new ya();
    (b = d + g), (c = (b + 31) >> 5), Hb.sreset();
    var k = Hb.salloc(f << 2),
      l = Hb.salloc(i << 2),
      m = Hb.salloc(c << 2);
    return Hb.z(m - k + (c << 2), 0, k), Jb.set(e, k >> 2), Jb.set(
      h,
      l >> 2
    ), Hb.mul(k, f << 2, l, i << 2, m, c << 2), (j.limbs = new Uint32Array(
      Jb.subarray(m >> 2, (m >> 2) + c)
    )), (j.sign = this.sign * a.sign), (j.bitLength = b), j;
  }
  function Ja() {
    if (!this.sign) return Mb;
    var a,
      b,
      c = this.bitLength,
      d = this.limbs,
      e = d.length,
      f = new ya();
    (a = c << 1), (b = (a + 31) >> 5), Hb.sreset();
    var g = Hb.salloc(e << 2),
      h = Hb.salloc(b << 2);
    return Hb.z(h - g + (b << 2), 0, g), Jb.set(d, g >> 2), Hb.sqr(
      g,
      e << 2,
      h
    ), (f.limbs = new Uint32Array(
      Jb.subarray(h >> 2, (h >> 2) + b)
    )), (f.bitLength = a), (f.sign = 1), f;
  }
  function Ka(a) {
    wa(a) || (a = new ya(a));
    var b,
      c,
      d = this.bitLength,
      e = this.limbs,
      f = e.length,
      g = a.bitLength,
      h = a.limbs,
      i = h.length,
      j = Mb,
      k = Mb;
    Hb.sreset();
    var l = Hb.salloc(f << 2),
      m = Hb.salloc(i << 2),
      n = Hb.salloc(f << 2);
    return Hb.z(n - l + (f << 2), 0, l), Jb.set(e, l >> 2), Jb.set(
      h,
      m >> 2
    ), Hb.div(l, f << 2, m, i << 2, n), (b = Hb.tst(n, f << 2) >> 2), b &&
      (
        (j = new ya()),
        (j.limbs = new Uint32Array(Jb.subarray(n >> 2, (n >> 2) + b))),
        (j.bitLength = b << 5 > d ? d : b << 5),
        (j.sign = this.sign * a.sign)
      ), (c = Hb.tst(l, i << 2) >> 2), c &&
      (
        (k = new ya()),
        (k.limbs = new Uint32Array(Jb.subarray(l >> 2, (l >> 2) + c))),
        (k.bitLength = c << 5 > g ? g : c << 5),
        (k.sign = this.sign)
      ), { quotient: j, remainder: k };
  }
  function La(a, b) {
    var c,
      d,
      e,
      f,
      g = 0 > a ? -1 : 1,
      h = 0 > b ? -1 : 1,
      i = 1,
      j = 0,
      k = 0,
      l = 1;
    for (
      a *= g, b *= h, f = b > a, f &&
        ((e = a), (a = b), (b = e), (e = g), (g = h), (h = e)), d = Math.floor(
        a / b
      ), c = a - d * b;
      c;

    )
      (e = i - d * j), (i = j), (j = e), (e =
        k - d * l), (k = l), (l = e), (a = b), (b = c), (d = Math.floor(
        a / b
      )), (c = a - d * b);
    return (j *= g), (l *= h), f && ((e = j), (j = l), (l = e)), {
      gcd: b,
      x: j,
      y: l
    };
  }
  function Ma(a, b) {
    wa(a) || (a = new ya(a)), wa(b) || (b = new ya(b));
    var c = a.sign,
      d = b.sign;
    0 > c && (a = a.negate()), 0 > d && (b = b.negate());
    var e = a.compare(b);
    if (0 > e) {
      var f = a;
      (a = b), (b = f), (f = c), (c = d), (d = f);
    }
    var g,
      h,
      i,
      j = Nb,
      k = Mb,
      l = b.bitLength,
      m = Mb,
      n = Nb,
      o = a.bitLength;
    for (g = a.divide(b); (h = g.remainder) !== Mb; )
      (i = g.quotient), (g = j
        .subtract(i.multiply(k).clamp(l))
        .clamp(l)), (j = k), (k = g), (g = m
        .subtract(i.multiply(n).clamp(o))
        .clamp(o)), (m = n), (n = g), (a = b), (b = h), (g = a.divide(b));
    if ((0 > c && (k = k.negate()), 0 > d && (n = n.negate()), 0 > e)) {
      var f = k;
      (k = n), (n = f);
    }
    return { gcd: b, x: k, y: n };
  }
  function Na() {
    if ((ya.apply(this, arguments), this.valueOf() < 1)) throw new RangeError();
    if (!(this.bitLength <= 32)) {
      var a;
      if (1 & this.limbs[0]) {
        var b = ((this.bitLength + 31) & -32) + 1,
          c = new Uint32Array((b + 31) >> 5);
        (c[
          c.length - 1
        ] = 1), (a = new ya()), (a.sign = 1), (a.bitLength = b), (a.limbs = c);
        var d = La(4294967296, this.limbs[0]).y;
        (this.coefficient =
          0 > d
            ? -d
            : 4294967296 -
              d), (this.comodulus = a), (this.comodulusRemainder = a.divide(
          this
        ).remainder), (this.comodulusRemainderSquare = a
          .square()
          .divide(this).remainder);
      }
    }
  }
  function Oa(a) {
    return wa(a) || (a = new ya(a)), a.bitLength <= 32 && this.bitLength <= 32
      ? new ya(a.valueOf() % this.valueOf())
      : a.compare(this) < 0 ? a : a.divide(this).remainder;
  }
  function Pa(a) {
    a = this.reduce(a);
    var b = Ma(this, a);
    return 1 !== b.gcd.valueOf()
      ? null
      : ((b = b.y), b.sign < 0 && (b = b.add(this).clamp(this.bitLength)), b);
  }
  function Qa(a, b) {
    wa(a) || (a = new ya(a)), wa(b) || (b = new ya(b));
    for (var c = 0, d = 0; d < b.limbs.length; d++)
      for (var e = b.limbs[d]; e; ) 1 & e && c++, (e >>>= 1);
    var f = 8;
    b.bitLength <= 4536 && (f = 7), b.bitLength <= 1736 &&
      (f = 6), b.bitLength <= 630 && (f = 5), b.bitLength <= 210 &&
      (f = 4), b.bitLength <= 60 && (f = 3), b.bitLength <= 12 && (f = 2), 1 <<
      (f - 1) >=
      c && (f = 1), (a = Ra(
      this.reduce(a).multiply(this.comodulusRemainderSquare),
      this
    ));
    var g = Ra(a.square(), this),
      h = new Array(1 << (f - 1));
    (h[0] = a), (h[1] = Ra(a.multiply(g), this));
    for (var d = 2; 1 << (f - 1) > d; d++)
      h[d] = Ra(h[d - 1].multiply(g), this);
    for (
      var i = this.comodulusRemainder, j = i, d = b.limbs.length - 1;
      d >= 0;
      d--
    )
      for (var e = b.limbs[d], k = 32; k > 0; )
        if (2147483648 & e) {
          for (var l = e >>> (32 - f), m = f; 0 === (1 & l); ) (l >>>= 1), m--;
          for (var n = h[l >>> 1]; l; )
            (l >>>= 1), j !== i && (j = Ra(j.square(), this));
          (j = j !== i ? Ra(j.multiply(n), this) : n), (e <<= m), (k -= m);
        } else j !== i && (j = Ra(j.square(), this)), (e <<= 1), k--;
    return (j = Ra(j, this));
  }
  function Ra(a, b) {
    var c = a.limbs,
      d = c.length,
      e = b.limbs,
      f = e.length,
      g = b.coefficient;
    Hb.sreset();
    var h = Hb.salloc(d << 2),
      i = Hb.salloc(f << 2),
      j = Hb.salloc(f << 2);
    Hb.z(j - h + (f << 2), 0, h), Jb.set(c, h >> 2), Jb.set(
      e,
      i >> 2
    ), Hb.mredc(h, d << 2, i, f << 2, g, j);
    var k = new ya();
    return (k.limbs = new Uint32Array(
      Jb.subarray(j >> 2, (j >> 2) + f)
    )), (k.bitLength = b.bitLength), (k.sign = 1), k;
  }
  function Sa(a) {
    var b = new ya(this),
      c = 0;
    for (b.limbs[0] -= 1; 0 === b.limbs[c >> 5]; ) c += 32;
    for (; 0 === ((b.limbs[c >> 5] >> (31 & c)) & 1); ) c++;
    b = b.slice(c);
    for (
      var d = new Na(this),
        e = this.subtract(Nb),
        f = new ya(this),
        g = this.limbs.length - 1;
      0 === f.limbs[g];

    )
      g--;
    for (; --a >= 0; ) {
      for (
        ta(f.limbs), f.limbs[0] < 2 && (f.limbs[0] += 2);
        f.compare(e) >= 0;

      )
        f.limbs[g] >>>= 1;
      var h = d.power(f, b);
      if (0 !== h.compare(Nb) && 0 !== h.compare(e)) {
        for (var i = c; --i > 0; ) {
          if (((h = h.square().divide(d).remainder), 0 === h.compare(Nb)))
            return !1;
          if (0 === h.compare(e)) break;
        }
        if (0 === i) return !1;
      }
    }
    return !0;
  }
  function Ta(a) {
    a = a || 80;
    var b = this.limbs,
      c = 0;
    if (0 === (1 & b[0])) return !1;
    if (1 >= a) return !0;
    var d = 0,
      e = 0,
      f = 0;
    for (c = 0; c < b.length; c++) {
      for (var g = b[c]; g; ) (d += 3 & g), (g >>>= 2);
      for (var h = b[c]; h; )
        (e += 3 & h), (h >>>= 2), (e -= 3 & h), (h >>>= 2);
      for (var i = b[c]; i; )
        (f += 15 & i), (i >>>= 4), (f -= 15 & i), (i >>>= 4);
    }
    return d % 3 && e % 5 && f % 17
      ? 2 >= a ? !0 : Sa.call(this, a >>> 1)
      : !1;
  }
  function Ua(a) {
    if (Pb.length >= a) return Pb.slice(0, a);
    for (var b = Pb[Pb.length - 1] + 2; Pb.length < a; b += 2) {
      for (var c = 0, d = Pb[c]; b >= d * d && b % d != 0; d = Pb[++c]);
      d * d > b && Pb.push(b);
    }
    return Pb;
  }
  function Va(a, c) {
    var d = (a + 31) >> 5,
      e = new ya({ sign: 1, bitLength: a, limbs: d }),
      f = e.limbs,
      g = 1e4;
    512 >= a && (g = 2200), 256 >= a && (g = 600);
    var h = Ua(g),
      i = new Uint32Array(g),
      j = (a * b.Math.LN2) | 0,
      k = 27;
    for (
      a >= 250 && (k = 12), a >= 450 && (k = 6), a >= 850 && (k = 3), a >=
        1300 && (k = 2);
      ;

    ) {
      ta(f), (f[0] |= 1), (f[d - 1] |= 1 << ((a - 1) & 31)), 31 & a &&
        (f[d - 1] &= l((a + 1) & 31) - 1), (i[0] = 1);
      for (var m = 1; g > m; m++) i[m] = e.divide(h[m]).remainder.valueOf();
      a: for (var n = 0; j > n; n += 2, f[0] += 2) {
        for (var m = 1; g > m; m++) if ((i[m] + n) % h[m] === 0) continue a;
        if (('function' != typeof c || c(e)) && Sa.call(e, k)) return e;
      }
    }
  }
  (c.prototype = Object.create(Error.prototype, {
    name: { value: 'IllegalStateError' }
  })), (d.prototype = Object.create(Error.prototype, {
    name: { value: 'IllegalArgumentError' }
  })), (e.prototype = Object.create(Error.prototype, {
    name: { value: 'SecurityError' }
  }));
  var Wa = b.Float64Array || b.Float32Array;
  (a.string_to_bytes = f), (a.hex_to_bytes = g), (a.base64_to_bytes = h), (a.bytes_to_string = i), (a.bytes_to_hex = j), (a.bytes_to_base64 = k), (b.IllegalStateError = c), (b.IllegalArgumentError = d), (b.SecurityError = e);
  var Xa = (function() {
      'use strict';
      function a() {
        (e = []), (f = []);
        var a,
          b,
          c = 1;
        for (a = 0; 255 > a; a++)
          (e[a] = c), (b = 128 & c), (c <<= 1), (c &= 255), 128 === b &&
            (c ^= 27), (c ^= e[a]), (f[e[a]] = a);
        (e[255] = e[0]), (f[0] = 0), (k = !0);
      }
      function b(a, b) {
        var c = e[(f[a] + f[b]) % 255];
        return (0 === a || 0 === b) && (c = 0), c;
      }
      function c(a) {
        var b = e[255 - f[a]];
        return 0 === a && (b = 0), b;
      }
      function d() {
        function d(a) {
          var b, d, e;
          for (d = e = c(a), b = 0; 4 > b; b++)
            (d = 255 & ((d << 1) | (d >>> 7))), (e ^= d);
          return (e ^= 99);
        }
        k || a(), (g = []), (h = []), (i = [[], [], [], []]), (j = [
          [],
          [],
          [],
          []
        ]);
        for (var e = 0; 256 > e; e++) {
          var f = d(e);
          (g[e] = f), (h[f] = e), (i[0][e] =
            (b(2, f) << 24) | (f << 16) | (f << 8) | b(3, f)), (j[0][f] =
            (b(14, e) << 24) | (b(9, e) << 16) | (b(13, e) << 8) | b(11, e));
          for (var l = 1; 4 > l; l++)
            (i[l][e] = (i[l - 1][e] >>> 8) | (i[l - 1][e] << 24)), (j[l][f] =
              (j[l - 1][f] >>> 8) | (j[l - 1][f] << 24));
        }
      }
      var e,
        f,
        g,
        h,
        i,
        j,
        k = !1,
        l = !1,
        m = function(a, b, c) {
          function e(a, b, c, d, e, h, i, k, l) {
            var m = f.subarray(0, 60),
              o = f.subarray(256, 316);
            m.set([b, c, d, e, h, i, k, l]);
            for (var p = a, q = 1; 4 * a + 28 > p; p++) {
              var r = m[p - 1];
              (p % a === 0 || (8 === a && p % a === 4)) &&
                (r =
                  (g[r >>> 24] << 24) ^
                  (g[(r >>> 16) & 255] << 16) ^
                  (g[(r >>> 8) & 255] << 8) ^
                  g[255 & r]), p % a === 0 &&
                (
                  (r = (r << 8) ^ (r >>> 24) ^ (q << 24)),
                  (q = (q << 1) ^ (128 & q ? 27 : 0))
                ), (m[p] = m[p - a] ^ r);
            }
            for (var s = 0; p > s; s += 4)
              for (var t = 0; 4 > t; t++) {
                var r = m[p - (4 + s) + (4 - t) % 4];
                4 > s || s >= p - 4
                  ? (o[s + t] = r)
                  : (o[s + t] =
                      j[0][g[r >>> 24]] ^
                      j[1][g[(r >>> 16) & 255]] ^
                      j[2][g[(r >>> 8) & 255]] ^
                      j[3][g[255 & r]]);
              }
            n.set_rounds(a + 5);
          }
          l || d();
          var f = new Uint32Array(c);
          f.set(g, 512), f.set(h, 768);
          for (var k = 0; 4 > k; k++)
            f.set(i[k], (4096 + 1024 * k) >> 2), f.set(
              j[k],
              (8192 + 1024 * k) >> 2
            );
          var m = { Uint8Array: Uint8Array, Uint32Array: Uint32Array },
            n = (function(a, b, c) {
              'use asm';
              var d = 0,
                e = 0,
                f = 0,
                g = 0,
                h = 0,
                i = 0,
                j = 0,
                k = 0,
                l = 0,
                m = 0,
                n = 0,
                o = 0,
                p = 0,
                q = 0,
                r = 0,
                s = 0,
                t = 0,
                u = 0,
                v = 0,
                w = 0,
                x = 0;
              var y = new a.Uint32Array(c),
                z = new a.Uint8Array(c);
              function A(X, Y, Z, $, _, aa, ba, ca) {
                X = X | 0;
                Y = Y | 0;
                Z = Z | 0;
                $ = $ | 0;
                _ = _ | 0;
                aa = aa | 0;
                ba = ba | 0;
                ca = ca | 0;
                var da = 0,
                  ea = 0,
                  fa = 0,
                  ga = 0,
                  ha = 0,
                  ia = 0,
                  ja = 0,
                  ka = 0;
                (da = Z | 1024), (ea = Z | 2048), (fa = Z | 3072);
                (_ = _ ^ y[(X | 0) >> 2]), (aa = aa ^ y[(X | 4) >> 2]), (ba =
                  ba ^ y[(X | 8) >> 2]), (ca = ca ^ y[(X | 12) >> 2]);
                for (ka = 16; (ka | 0) <= $ << 4; ka = (ka + 16) | 0) {
                  (ga =
                    y[(Z | ((_ >> 22) & 1020)) >> 2] ^
                    y[(da | ((aa >> 14) & 1020)) >> 2] ^
                    y[(ea | ((ba >> 6) & 1020)) >> 2] ^
                    y[(fa | ((ca << 2) & 1020)) >> 2] ^
                    y[(X | ka | 0) >> 2]), (ha =
                    y[(Z | ((aa >> 22) & 1020)) >> 2] ^
                    y[(da | ((ba >> 14) & 1020)) >> 2] ^
                    y[(ea | ((ca >> 6) & 1020)) >> 2] ^
                    y[(fa | ((_ << 2) & 1020)) >> 2] ^
                    y[(X | ka | 4) >> 2]), (ia =
                    y[(Z | ((ba >> 22) & 1020)) >> 2] ^
                    y[(da | ((ca >> 14) & 1020)) >> 2] ^
                    y[(ea | ((_ >> 6) & 1020)) >> 2] ^
                    y[(fa | ((aa << 2) & 1020)) >> 2] ^
                    y[(X | ka | 8) >> 2]), (ja =
                    y[(Z | ((ca >> 22) & 1020)) >> 2] ^
                    y[(da | ((_ >> 14) & 1020)) >> 2] ^
                    y[(ea | ((aa >> 6) & 1020)) >> 2] ^
                    y[(fa | ((ba << 2) & 1020)) >> 2] ^
                    y[(X | ka | 12) >> 2]);
                  (_ = ga), (aa = ha), (ba = ia), (ca = ja);
                }
                (d =
                  (y[(Y | ((_ >> 22) & 1020)) >> 2] << 24) ^
                  (y[(Y | ((aa >> 14) & 1020)) >> 2] << 16) ^
                  (y[(Y | ((ba >> 6) & 1020)) >> 2] << 8) ^
                  y[(Y | ((ca << 2) & 1020)) >> 2] ^
                  y[(X | ka | 0) >> 2]), (e =
                  (y[(Y | ((aa >> 22) & 1020)) >> 2] << 24) ^
                  (y[(Y | ((ba >> 14) & 1020)) >> 2] << 16) ^
                  (y[(Y | ((ca >> 6) & 1020)) >> 2] << 8) ^
                  y[(Y | ((_ << 2) & 1020)) >> 2] ^
                  y[(X | ka | 4) >> 2]), (f =
                  (y[(Y | ((ba >> 22) & 1020)) >> 2] << 24) ^
                  (y[(Y | ((ca >> 14) & 1020)) >> 2] << 16) ^
                  (y[(Y | ((_ >> 6) & 1020)) >> 2] << 8) ^
                  y[(Y | ((aa << 2) & 1020)) >> 2] ^
                  y[(X | ka | 8) >> 2]), (g =
                  (y[(Y | ((ca >> 22) & 1020)) >> 2] << 24) ^
                  (y[(Y | ((_ >> 14) & 1020)) >> 2] << 16) ^
                  (y[(Y | ((aa >> 6) & 1020)) >> 2] << 8) ^
                  y[(Y | ((ba << 2) & 1020)) >> 2] ^
                  y[(X | ka | 12) >> 2]);
              }
              function B(X, Y, Z, $) {
                X = X | 0;
                Y = Y | 0;
                Z = Z | 0;
                $ = $ | 0;
                A(0, 2048, 4096, x, X, Y, Z, $);
              }
              function C(X, Y, Z, $) {
                X = X | 0;
                Y = Y | 0;
                Z = Z | 0;
                $ = $ | 0;
                var _ = 0;
                A(1024, 3072, 8192, x, X, $, Z, Y);
                (_ = e), (e = g), (g = _);
              }
              function D(X, Y, Z, $) {
                X = X | 0;
                Y = Y | 0;
                Z = Z | 0;
                $ = $ | 0;
                A(0, 2048, 4096, x, h ^ X, i ^ Y, j ^ Z, k ^ $);
                (h = d), (i = e), (j = f), (k = g);
              }
              function E(X, Y, Z, $) {
                X = X | 0;
                Y = Y | 0;
                Z = Z | 0;
                $ = $ | 0;
                var _ = 0;
                A(1024, 3072, 8192, x, X, $, Z, Y);
                (_ = e), (e = g), (g = _);
                (d = d ^ h), (e = e ^ i), (f = f ^ j), (g = g ^ k);
                (h = X), (i = Y), (j = Z), (k = $);
              }
              function F(X, Y, Z, $) {
                X = X | 0;
                Y = Y | 0;
                Z = Z | 0;
                $ = $ | 0;
                A(0, 2048, 4096, x, h, i, j, k);
                (h = d = d ^ X), (i = e = e ^ Y), (j = f = f ^ Z), (k = g =
                  g ^ $);
              }
              function G(X, Y, Z, $) {
                X = X | 0;
                Y = Y | 0;
                Z = Z | 0;
                $ = $ | 0;
                A(0, 2048, 4096, x, h, i, j, k);
                (d = d ^ X), (e = e ^ Y), (f = f ^ Z), (g = g ^ $);
                (h = X), (i = Y), (j = Z), (k = $);
              }
              function H(X, Y, Z, $) {
                X = X | 0;
                Y = Y | 0;
                Z = Z | 0;
                $ = $ | 0;
                A(0, 2048, 4096, x, h, i, j, k);
                (h = d), (i = e), (j = f), (k = g);
                (d = d ^ X), (e = e ^ Y), (f = f ^ Z), (g = g ^ $);
              }
              function I(X, Y, Z, $) {
                X = X | 0;
                Y = Y | 0;
                Z = Z | 0;
                $ = $ | 0;
                A(0, 2048, 4096, x, l, m, n, o);
                (o = (~s & o) | (s & (o + 1))), (n =
                  (~r & n) | (r & (n + ((o | 0) == 0)))), (m =
                  (~q & m) | (q & (m + ((n | 0) == 0)))), (l =
                  (~p & l) | (p & (l + ((m | 0) == 0))));
                (d = d ^ X), (e = e ^ Y), (f = f ^ Z), (g = g ^ $);
              }
              function J(X, Y, Z, $) {
                X = X | 0;
                Y = Y | 0;
                Z = Z | 0;
                $ = $ | 0;
                var _ = 0,
                  aa = 0,
                  ba = 0,
                  ca = 0,
                  da = 0,
                  ea = 0,
                  fa = 0,
                  ga = 0,
                  ha = 0,
                  ia = 0;
                (X = X ^ h), (Y = Y ^ i), (Z = Z ^ j), ($ = $ ^ k);
                (_ = t | 0), (aa = u | 0), (ba = v | 0), (ca = w | 0);
                for (; (ha | 0) < 128; ha = (ha + 1) | 0) {
                  if (_ >>> 31) {
                    (da = da ^ X), (ea = ea ^ Y), (fa = fa ^ Z), (ga = ga ^ $);
                  }
                  (_ = (_ << 1) | (aa >>> 31)), (aa =
                    (aa << 1) | (ba >>> 31)), (ba =
                    (ba << 1) | (ca >>> 31)), (ca = ca << 1);
                  ia = $ & 1;
                  ($ = ($ >>> 1) | (Z << 31)), (Z = (Z >>> 1) | (Y << 31)), (Y =
                    (Y >>> 1) | (X << 31)), (X = X >>> 1);
                  if (ia) X = X ^ 3774873600;
                }
                (h = da), (i = ea), (j = fa), (k = ga);
              }
              function K(X) {
                X = X | 0;
                x = X;
              }
              function L(X, Y, Z, $) {
                X = X | 0;
                Y = Y | 0;
                Z = Z | 0;
                $ = $ | 0;
                (d = X), (e = Y), (f = Z), (g = $);
              }
              function M(X, Y, Z, $) {
                X = X | 0;
                Y = Y | 0;
                Z = Z | 0;
                $ = $ | 0;
                (h = X), (i = Y), (j = Z), (k = $);
              }
              function N(X, Y, Z, $) {
                X = X | 0;
                Y = Y | 0;
                Z = Z | 0;
                $ = $ | 0;
                (l = X), (m = Y), (n = Z), (o = $);
              }
              function O(X, Y, Z, $) {
                X = X | 0;
                Y = Y | 0;
                Z = Z | 0;
                $ = $ | 0;
                (p = X), (q = Y), (r = Z), (s = $);
              }
              function P(X, Y, Z, $) {
                X = X | 0;
                Y = Y | 0;
                Z = Z | 0;
                $ = $ | 0;
                (o = (~s & o) | (s & $)), (n = (~r & n) | (r & Z)), (m =
                  (~q & m) | (q & Y)), (l = (~p & l) | (p & X));
              }
              function Q(X) {
                X = X | 0;
                if (X & 15) return -1;
                (z[X | 0] = d >>> 24), (z[X | 1] = (d >>> 16) & 255), (z[
                  X | 2
                ] =
                  (d >>> 8) & 255), (z[X | 3] = d & 255), (z[X | 4] =
                  e >>> 24), (z[X | 5] = (e >>> 16) & 255), (z[X | 6] =
                  (e >>> 8) & 255), (z[X | 7] = e & 255), (z[X | 8] =
                  f >>> 24), (z[X | 9] = (f >>> 16) & 255), (z[X | 10] =
                  (f >>> 8) & 255), (z[X | 11] = f & 255), (z[X | 12] =
                  g >>> 24), (z[X | 13] = (g >>> 16) & 255), (z[X | 14] =
                  (g >>> 8) & 255), (z[X | 15] = g & 255);
                return 16;
              }
              function R(X) {
                X = X | 0;
                if (X & 15) return -1;
                (z[X | 0] = h >>> 24), (z[X | 1] = (h >>> 16) & 255), (z[
                  X | 2
                ] =
                  (h >>> 8) & 255), (z[X | 3] = h & 255), (z[X | 4] =
                  i >>> 24), (z[X | 5] = (i >>> 16) & 255), (z[X | 6] =
                  (i >>> 8) & 255), (z[X | 7] = i & 255), (z[X | 8] =
                  j >>> 24), (z[X | 9] = (j >>> 16) & 255), (z[X | 10] =
                  (j >>> 8) & 255), (z[X | 11] = j & 255), (z[X | 12] =
                  k >>> 24), (z[X | 13] = (k >>> 16) & 255), (z[X | 14] =
                  (k >>> 8) & 255), (z[X | 15] = k & 255);
                return 16;
              }
              function S() {
                B(0, 0, 0, 0);
                (t = d), (u = e), (v = f), (w = g);
              }
              function T(X, Y, Z) {
                X = X | 0;
                Y = Y | 0;
                Z = Z | 0;
                var $ = 0;
                if (Y & 15) return -1;
                while ((Z | 0) >= 16) {
                  V[X & 7](
                    (z[Y | 0] << 24) |
                      (z[Y | 1] << 16) |
                      (z[Y | 2] << 8) |
                      z[Y | 3],
                    (z[Y | 4] << 24) |
                      (z[Y | 5] << 16) |
                      (z[Y | 6] << 8) |
                      z[Y | 7],
                    (z[Y | 8] << 24) |
                      (z[Y | 9] << 16) |
                      (z[Y | 10] << 8) |
                      z[Y | 11],
                    (z[Y | 12] << 24) |
                      (z[Y | 13] << 16) |
                      (z[Y | 14] << 8) |
                      z[Y | 15]
                  );
                  (z[Y | 0] = d >>> 24), (z[Y | 1] = (d >>> 16) & 255), (z[
                    Y | 2
                  ] =
                    (d >>> 8) & 255), (z[Y | 3] = d & 255), (z[Y | 4] =
                    e >>> 24), (z[Y | 5] = (e >>> 16) & 255), (z[Y | 6] =
                    (e >>> 8) & 255), (z[Y | 7] = e & 255), (z[Y | 8] =
                    f >>> 24), (z[Y | 9] = (f >>> 16) & 255), (z[Y | 10] =
                    (f >>> 8) & 255), (z[Y | 11] = f & 255), (z[Y | 12] =
                    g >>> 24), (z[Y | 13] = (g >>> 16) & 255), (z[Y | 14] =
                    (g >>> 8) & 255), (z[Y | 15] = g & 255);
                  ($ = ($ + 16) | 0), (Y = (Y + 16) | 0), (Z = (Z - 16) | 0);
                }
                return $ | 0;
              }
              function U(X, Y, Z) {
                X = X | 0;
                Y = Y | 0;
                Z = Z | 0;
                var $ = 0;
                if (Y & 15) return -1;
                while ((Z | 0) >= 16) {
                  W[X & 1](
                    (z[Y | 0] << 24) |
                      (z[Y | 1] << 16) |
                      (z[Y | 2] << 8) |
                      z[Y | 3],
                    (z[Y | 4] << 24) |
                      (z[Y | 5] << 16) |
                      (z[Y | 6] << 8) |
                      z[Y | 7],
                    (z[Y | 8] << 24) |
                      (z[Y | 9] << 16) |
                      (z[Y | 10] << 8) |
                      z[Y | 11],
                    (z[Y | 12] << 24) |
                      (z[Y | 13] << 16) |
                      (z[Y | 14] << 8) |
                      z[Y | 15]
                  );
                  ($ = ($ + 16) | 0), (Y = (Y + 16) | 0), (Z = (Z - 16) | 0);
                }
                return $ | 0;
              }
              var V = [B, C, D, E, F, G, H, I];
              var W = [D, J];
              return {
                set_rounds: K,
                set_state: L,
                set_iv: M,
                set_nonce: N,
                set_mask: O,
                set_counter: P,
                get_state: Q,
                get_iv: R,
                gcm_init: S,
                cipher: T,
                mac: U
              };
            })(m, b, c);
          return (n.set_key = e), n;
        };
      return (m.ENC = { ECB: 0, CBC: 2, CFB: 4, OFB: 6, CTR: 7 }), (m.DEC = {
        ECB: 1,
        CBC: 3,
        CFB: 5,
        OFB: 6,
        CTR: 7
      }), (m.MAC = { CBC: 0, GCM: 1 }), (m.HEAP_DATA = 16384), m;
    })(),
    Ya = A.prototype;
  (Ya.BLOCK_SIZE = 16), (Ya.reset = D), (Ya.encrypt = z), (Ya.decrypt = z);
  var Za = B.prototype;
  (Za.BLOCK_SIZE = 16), (Za.reset = D), (Za.process = y), (Za.finish = z);
  var $a = 68719476704,
    _a = F.prototype;
  (_a.BLOCK_SIZE = 16), (_a.reset = I), (_a.encrypt = L), (_a.decrypt = O);
  var ab = G.prototype;
  (ab.BLOCK_SIZE = 16), (ab.reset = I), (ab.process = J), (ab.finish = K);
  var bb = H.prototype;
  (bb.BLOCK_SIZE = 16), (bb.reset = I), (bb.process = M), (bb.finish = N);
  var cb = new Uint8Array(1048576),
    db = Xa(b, null, cb.buffer);
  (a.AES_GCM = F), (a.AES_GCM.encrypt = P), (a.AES_GCM.decrypt = Q), (a.AES_GCM.Encrypt = G), (a.AES_GCM.Decrypt = H);
  var eb = 64,
    fb = 32;
  (V.BLOCK_SIZE = eb), (V.HASH_SIZE = fb);
  var gb = V.prototype;
  (gb.reset = R), (gb.process = S), (gb.finish = T);
  var hb = null;
  (V.bytes = X), (V.hex = Y), (V.base64 = Z), (a.SHA256 = V);
  var ib = $.prototype;
  (ib.reset = ba), (ib.process = ca), (ib.finish = da), (ea.BLOCK_SIZE =
    V.BLOCK_SIZE), (ea.HMAC_SIZE = V.HASH_SIZE);
  var jb = ea.prototype;
  (jb.reset = fa), (jb.process = ca), (jb.finish = ga);
  var kb = null;
  (ea.bytes = ia), (ea.hex = ja), (ea.base64 = ka), (a.HMAC_SHA256 = ea);
  var lb = la.prototype;
  (lb.reset = ma), (lb.generate = na);
  var mb = oa.prototype;
  (mb.reset = ma), (mb.generate = pa);
  var nb,
    ob = null,
    pb = (function() {
      function a() {
        function a() {
          (b ^= d << 11), (l = (l + b) | 0), (d = (d + f) | 0), (d ^=
            f >>> 2), (m = (m + d) | 0), (f = (f + l) | 0), (f ^= l << 8), (n =
            (n + f) | 0), (l = (l + m) | 0), (l ^= m >>> 16), (o =
            (o + l) | 0), (m = (m + n) | 0), (m ^= n << 10), (p =
            (p + m) | 0), (n = (n + o) | 0), (n ^= o >>> 4), (b =
            (b + n) | 0), (o = (o + p) | 0), (o ^= p << 8), (d =
            (d + o) | 0), (p = (p + b) | 0), (p ^= b >>> 9), (f =
            (f + p) | 0), (b = (b + d) | 0);
        }
        var b, d, f, l, m, n, o, p;
        (h = i = j = 0), (b = d = f = l = m = n = o = p = 2654435769);
        for (var q = 0; 4 > q; q++) a();
        for (var q = 0; 256 > q; q += 8)
          (b = (b + g[0 | q]) | 0), (d = (d + g[1 | q]) | 0), (f =
            (f + g[2 | q]) | 0), (l = (l + g[3 | q]) | 0), (m =
            (m + g[4 | q]) | 0), (n = (n + g[5 | q]) | 0), (o =
            (o + g[6 | q]) | 0), (p = (p + g[7 | q]) | 0), a(), e.set(
            [b, d, f, l, m, n, o, p],
            q
          );
        for (var q = 0; 256 > q; q += 8)
          (b = (b + e[0 | q]) | 0), (d = (d + e[1 | q]) | 0), (f =
            (f + e[2 | q]) | 0), (l = (l + e[3 | q]) | 0), (m =
            (m + e[4 | q]) | 0), (n = (n + e[5 | q]) | 0), (o =
            (o + e[6 | q]) | 0), (p = (p + e[7 | q]) | 0), a(), e.set(
            [b, d, f, l, m, n, o, p],
            q
          );
        c(1), (k = 256);
      }
      function b(b) {
        var c, d, e, h, i;
        if (q(b)) b = new Uint8Array(b.buffer);
        else if (m(b))
          (h = new Wa(1)), (h[0] = b), (b = new Uint8Array(h.buffer));
        else if (n(b)) b = f(b);
        else {
          if (!o(b)) throw new TypeError('bad seed type');
          b = new Uint8Array(b);
        }
        for (i = b.length, d = 0; i > d; d += 1024) {
          for (e = d, c = 0; 1024 > c && i > e; e = d | ++c)
            g[c >> 2] ^= b[e] << ((3 & c) << 3);
          a();
        }
      }
      function c(a) {
        a = a || 1;
        for (var b, c, d; a--; )
          for (j = (j + 1) | 0, i = (i + j) | 0, b = 0; 256 > b; b += 4)
            (h ^= h << 13), (h = (e[(b + 128) & 255] + h) | 0), (c =
              e[0 | b]), (e[0 | b] = d =
              (e[(c >>> 2) & 255] + ((h + i) | 0)) | 0), (g[0 | b] = i =
              (e[(d >>> 10) & 255] + c) | 0), (h ^= h >>> 6), (h =
              (e[(b + 129) & 255] + h) | 0), (c = e[1 | b]), (e[1 | b] = d =
              (e[(c >>> 2) & 255] + ((h + i) | 0)) | 0), (g[1 | b] = i =
              (e[(d >>> 10) & 255] + c) | 0), (h ^= h << 2), (h =
              (e[(b + 130) & 255] + h) | 0), (c = e[2 | b]), (e[2 | b] = d =
              (e[(c >>> 2) & 255] + ((h + i) | 0)) | 0), (g[2 | b] = i =
              (e[(d >>> 10) & 255] + c) | 0), (h ^= h >>> 16), (h =
              (e[(b + 131) & 255] + h) | 0), (c = e[3 | b]), (e[3 | b] = d =
              (e[(c >>> 2) & 255] + ((h + i) | 0)) | 0), (g[3 | b] = i =
              (e[(d >>> 10) & 255] + c) | 0);
      }
      function d() {
        return k-- || (c(1), (k = 255)), g[k];
      }
      var e = new Uint32Array(256),
        g = new Uint32Array(256),
        h = 0,
        i = 0,
        j = 0,
        k = 0;
      return { seed: b, prng: c, rand: d };
    })(),
    qb = b.console,
    rb = b.Date.now,
    sb = b.Math.random,
    tb = b.performance,
    ub = b.crypto || b.msCrypto;
  void 0 !== ub && (nb = ub.getRandomValues);
  var vb,
    wb = pb.rand,
    xb = pb.seed,
    yb = 0,
    zb = !1,
    Ab = !1,
    Bb = 0,
    Cb = 256,
    Db = !1,
    Eb = !1,
    Fb = {};
  if (void 0 !== tb)
    vb = function() {
      return (1e3 * tb.now()) | 0;
    };
  else {
    var Gb = (1e3 * rb()) | 0;
    vb = function() {
      return (1e3 * rb() - Gb) | 0;
    };
  }
  (a.random = ua), (a.random.seed = sa), Object.defineProperty(
    ua,
    'allowWeak',
    {
      get: function() {
        return Db;
      },
      set: function(a) {
        Db = a;
      }
    }
  ), Object.defineProperty(ua, 'skipSystemRNGWarning', {
    get: function() {
      return Eb;
    },
    set: function(a) {
      Eb = a;
    }
  }), (a.getRandomValues = ta), (a.getRandomValues.seed = sa), Object.defineProperty(
    ta,
    'allowWeak',
    {
      get: function() {
        return Db;
      },
      set: function(a) {
        Db = a;
      }
    }
  ), Object.defineProperty(ta, 'skipSystemRNGWarning', {
    get: function() {
      return Eb;
    },
    set: function(a) {
      Eb = a;
    }
  }), (b.Math.random = ua), void 0 === b.crypto &&
    (b.crypto = {}), (b.crypto.getRandomValues = ta);
  var Hb,
    Ib = { Uint32Array: Uint32Array, Math: b.Math },
    Jb = new Uint32Array(1048576);
  void 0 === Ib.Math.imul
    ? ((Ib.Math.imul = xa), (Hb = va(Ib, null, Jb.buffer)), delete Ib.Math.imul)
    : (Hb = va(Ib, null, Jb.buffer));
  var Kb = new Uint32Array(0),
    Lb = (ya.prototype = new Number());
  (Lb.toString = za), (Lb.toBytes = Aa), (Lb.valueOf = Ba), (Lb.clamp = Ca), (Lb.slice = Da), (Lb.negate = Ea), (Lb.compare = Fa), (Lb.add = Ga), (Lb.subtract = Ha), (Lb.multiply = Ia), (Lb.square = Ja), (Lb.divide = Ka);
  var Mb = new ya(0),
    Nb = new ya(1);
  Object.freeze(Mb), Object.freeze(Nb);
  var Ob = (Na.prototype = new ya());
  (Ob.reduce = Oa), (Ob.inverse = Pa), (Ob.power = Qa);
  var Pb = [2, 3];
  return (Lb.isProbablePrime = Ta), (ya.randomProbablePrime = Va), (ya.ZERO = Mb), (ya.ONE = Nb), (ya.extGCD = Ma), (a.BigNumber = ya), (a.Modulus = Na), 'function' ==
    typeof define && define.amd
    ? define([], function() {
        return a;
      })
    : 'object' == typeof module && module.exports
      ? (module.exports = a)
      : (b.asmCrypto = a), a;
})({}, this);
