'use strict';
const _0xe16217 = _0x59b2;
(function (_0x3fe3c8, _0x16de95) {
    const _0x5bb9e8 = _0x59b2,
        _0x2660b4 = _0x3fe3c8();
    while (!![]) {
        try {
            const _0x50e6d3 = -parseInt(_0x5bb9e8(0x1e1)) / 0x1 + parseInt(_0x5bb9e8(0x1aa)) / 0x2 + parseInt(_0x5bb9e8(0x1d2)) / 0x3 * (-parseInt(_0x5bb9e8(0x21e)) / 0x4) + parseInt(_0x5bb9e8(0x1ec)) / 0x5 + -parseInt(_0x5bb9e8(0x1f5)) / 0x6 + -parseInt(_0x5bb9e8(0x21b)) / 0x7 + parseInt(_0x5bb9e8(0x1e8)) / 0x8;
            if (_0x50e6d3 === _0x16de95) break;
            else _0x2660b4['push'](_0x2660b4['shift']());
        } catch (_0x57e6df) {
            _0x2660b4['push'](_0x2660b4['shift']());
        }
    }
}(_0x2034, 0xe39c5));

function _0x59b2(_0x2bc71a, _0x4aa8f5) {
    const _0x203423 = _0x2034();
    return _0x59b2 = function (_0x59b275, _0x5943fd) {
        _0x59b275 = _0x59b275 - 0x18e;
        let _0x254f9d = _0x203423[_0x59b275];
        return _0x254f9d;
    }, _0x59b2(_0x2bc71a, _0x4aa8f5);
}
Object['defineProperty'](exports, _0xe16217(0x1ca), {
    'value': !![]
});
const boom_1 = require('@hapi/boom'),
    crypto_1 = require(_0xe16217(0x1bb)),
    url_1 = require(_0xe16217(0x20c)),
    util_1 = require(_0xe16217(0x19d)),
    WAProto_1 = require(_0xe16217(0x1dc)),
    Defaults_1 = require(_0xe16217(0x1e7)),
    Types_1 = require(_0xe16217(0x1f7)),
    Utils_1 = require(_0xe16217(0x204)),
    WABinary_1 = require(_0xe16217(0x1e4)),
    Client_1 = require(_0xe16217(0x227)),
    makeSocket = _0x369d01 => {
        const _0x46be98 = _0xe16217,
            {
                waWebSocketUrl: _0x17ff62,
                connectTimeoutMs: _0x6c49d3,
                logger: _0x3189e6,
                keepAliveIntervalMs: _0x3ea9e3,
                browser: _0x1e0609,
                auth: _0x3550af,
                printQRInTerminal: _0x548a1f,
                defaultQueryTimeoutMs: _0x11b694,
                transactionOpts: _0x4a70b9,
                qrTimeout: _0x1d7c2b,
                makeSignalRepository: _0x53bd6f
            } = _0x369d01,
            _0x294a95 = typeof _0x17ff62 === _0x46be98(0x202) ? new url_1[(_0x46be98(0x21d))](_0x17ff62) : _0x17ff62;
        if (_0x369d01['mobile'] || _0x294a95[_0x46be98(0x23b)] === _0x46be98(0x1cf)) throw new boom_1['Boom']('Mobile API is not supported anymore', {
            'statusCode': Types_1[_0x46be98(0x241)][_0x46be98(0x228)]
        });
        _0x294a95[_0x46be98(0x23b)] === _0x46be98(0x1b6) && _0x3550af?. [_0x46be98(0x22d)]?. [_0x46be98(0x1fd)] && _0x294a95['searchParams'][_0x46be98(0x1e3)]('ED', _0x3550af[_0x46be98(0x22d)][_0x46be98(0x1fd)][_0x46be98(0x208)]('base64url'));
        const _0x8b7ea0 = new Client_1[(_0x46be98(0x1ea))](_0x294a95, _0x369d01);
        _0x8b7ea0[_0x46be98(0x201)]();
        const _0x5da6ef = Utils_1[_0x46be98(0x21a)](_0x3189e6),
            _0x1e0ccc = Utils_1[_0x46be98(0x1d3)][_0x46be98(0x1f2)](),
            _0x2ce0e2 = Utils_1[_0x46be98(0x1ce)]({
                'keyPair': _0x1e0ccc,
                'NOISE_HEADER': Defaults_1[_0x46be98(0x1cb)],
                'logger': _0x3189e6,
                'routingInfo': _0x3550af?. [_0x46be98(0x22d)]?. ['routingInfo']
            }),
            {
                creds: _0x41cdfe
            } = _0x3550af,
            _0x3fbfe2 = Utils_1[_0x46be98(0x1f4)](_0x3550af[_0x46be98(0x1fa)], _0x3189e6, _0x4a70b9),
            _0x565241 = _0x53bd6f({
                'creds': _0x41cdfe,
                'keys': _0x3fbfe2
            });
        let _0xb15c38, _0x156b5a = 0x1,
            _0x54f57a, _0x4dff5b, _0x4bb9d7 = ![];
        const _0x588c25 = Utils_1[_0x46be98(0x1ba)](),
            _0x34d9ed = () => '' + _0x588c25 + _0x156b5a++,
            _0x9fae3b = util_1[_0x46be98(0x1b7)](_0x8b7ea0[_0x46be98(0x197)]),
            _0x278452 = async _0x518c6c => {
                const _0x1bd64f = _0x46be98;
                if (!_0x8b7ea0['isOpen']) throw new boom_1['Boom'](_0x1bd64f(0x1a7), {
                    'statusCode': Types_1['DisconnectReason'][_0x1bd64f(0x20a)]
                });
                const _0x40b2a3 = _0x2ce0e2['encodeFrame'](_0x518c6c);
                await Utils_1[_0x1bd64f(0x232)](_0x6c49d3, async (_0x4325ce, _0x1dcdfb) => {
                    const _0x123788 = _0x1bd64f;
                    try {
                        await _0x9fae3b[_0x123788(0x22f)](_0x8b7ea0, _0x40b2a3), _0x4325ce();
                    } catch (_0x5441c2) {
                        _0x1dcdfb(_0x5441c2);
                    }
                });
            }, _0x508575 = _0x146ff7 => {
                const _0x2b83fb = _0x46be98;
                _0x3189e6[_0x2b83fb(0x1d1)] === _0x2b83fb(0x1db) && _0x3189e6[_0x2b83fb(0x1db)]({
                    'xml': WABinary_1['binaryNodeToString'](_0x146ff7),
                    'msg': _0x2b83fb(0x231)
                });
                const _0x1a7744 = WABinary_1[_0x2b83fb(0x18e)](_0x146ff7);
                return _0x278452(_0x1a7744);
            }, _0x2ae9bf = (_0x497e16, _0x27facc) => {
                const _0x49053b = _0x46be98;
                _0x3189e6[_0x49053b(0x207)]({
                    'err': _0x497e16
                }, _0x49053b(0x195) + _0x27facc + '\'');
            }, _0x311ff8 = async _0x154ff3 => {
                const _0x553f61 = _0x46be98;
                if (!_0x8b7ea0['isOpen']) throw new boom_1['Boom'](_0x553f61(0x1a7), {
                    'statusCode': Types_1[_0x553f61(0x241)][_0x553f61(0x20a)]
                });
                let _0x5084c0, _0x37c110;
                const _0x149822 = Utils_1['promiseTimeout'](_0x6c49d3, (_0x150c66, _0x273bb6) => {
                    const _0xece256 = _0x553f61;
                    _0x5084c0 = _0x150c66, _0x37c110 = mapWebSocketError(_0x273bb6), _0x8b7ea0['on'](_0xece256(0x1c2), _0x5084c0), _0x8b7ea0['on'](_0xece256(0x1c7), _0x37c110), _0x8b7ea0['on'](_0xece256(0x207), _0x37c110);
                })[_0x553f61(0x20d)](() => {
                    const _0x5be37c = _0x553f61;
                    _0x8b7ea0[_0x5be37c(0x233)](_0x5be37c(0x1c2), _0x5084c0), _0x8b7ea0[_0x5be37c(0x233)](_0x5be37c(0x1c7), _0x37c110), _0x8b7ea0[_0x5be37c(0x233)]('error', _0x37c110);
                });
                return _0x154ff3 && _0x278452(_0x154ff3)['catch'](_0x37c110), _0x149822;
            }, _0x1c7d66 = async (_0x26fbed, _0x3d0004 = _0x11b694) => {
                const _0x599376 = _0x46be98;
                let _0x475110, _0x35abbd;
                try {
                    return await Utils_1['promiseTimeout'](_0x3d0004, (_0x1bd39c, _0x404f1c) => {
                        const _0x3063a0 = _0x59b2;
                        _0x475110 = _0x1bd39c, _0x35abbd = _0x2180be => {
                            const _0x2023c8 = _0x59b2;
                            _0x404f1c(_0x2180be || new boom_1[(_0x2023c8(0x19f))](_0x2023c8(0x1a7), {
                                'statusCode': Types_1['DisconnectReason']['connectionClosed']
                            }));
                        }, _0x8b7ea0['on'](_0x3063a0(0x242) + _0x26fbed, _0x475110), _0x8b7ea0['on'](_0x3063a0(0x1c7), _0x35abbd), _0x8b7ea0['off'](_0x3063a0(0x207), _0x35abbd);
                    });
                } finally {
                    _0x8b7ea0[_0x599376(0x233)](_0x599376(0x242) + _0x26fbed, _0x475110), _0x8b7ea0['off'](_0x599376(0x1c7), _0x35abbd), _0x8b7ea0[_0x599376(0x233)](_0x599376(0x207), _0x35abbd);
                }
            }, _0x20557d = async (_0x4e04ee, _0x16629e) => {
                const _0x4aac1a = _0x46be98;
                !_0x4e04ee[_0x4aac1a(0x245)]['id'] && (_0x4e04ee[_0x4aac1a(0x245)]['id'] = _0x34d9ed());
                const _0x5d5e46 = _0x4e04ee[_0x4aac1a(0x245)]['id'],
                    _0x151fb1 = _0x1c7d66(_0x5d5e46, _0x16629e);
                await _0x508575(_0x4e04ee);
                const _0x49a0c5 = await _0x151fb1;
                return _0x4aac1a(0x22b) in _0x49a0c5 && WABinary_1[_0x4aac1a(0x23f)](_0x49a0c5), _0x49a0c5;
            }, _0x31196d = async () => {
                const _0x3e3bc3 = _0x46be98;
                let _0x12aee8 = {
                    'clientHello': {
                        'ephemeral': _0x1e0ccc[_0x3e3bc3(0x22c)]
                    }
                };
                _0x12aee8 = WAProto_1[_0x3e3bc3(0x19e)][_0x3e3bc3(0x1d9)][_0x3e3bc3(0x236)](_0x12aee8), _0x3189e6['info']({
                    'browser': _0x1e0609,
                    'helloMsg': _0x12aee8
                }, 'connected to WA');
                const _0x298618 = WAProto_1[_0x3e3bc3(0x19e)][_0x3e3bc3(0x1d9)][_0x3e3bc3(0x1dd)](_0x12aee8)[_0x3e3bc3(0x18f)](),
                    _0x1c3761 = await _0x311ff8(_0x298618),
                    _0x1fa11d = WAProto_1[_0x3e3bc3(0x19e)][_0x3e3bc3(0x1d9)][_0x3e3bc3(0x237)](_0x1c3761);
                _0x3189e6['trace']({
                    'handshake': _0x1fa11d
                }, _0x3e3bc3(0x1b5));
                const _0x39584f = await _0x2ce0e2[_0x3e3bc3(0x1fc)](_0x1fa11d, _0x41cdfe[_0x3e3bc3(0x192)]);
                let _0x1085ae;
                !_0x41cdfe['me'] ? (_0x1085ae = Utils_1[_0x3e3bc3(0x1c4)](_0x41cdfe, _0x369d01), _0x3189e6[_0x3e3bc3(0x240)]({
                    'node': _0x1085ae
                }, _0x3e3bc3(0x216))) : (_0x1085ae = Utils_1[_0x3e3bc3(0x1c1)](_0x41cdfe['me']['id'], _0x369d01), _0x3189e6[_0x3e3bc3(0x240)]({
                    'node': _0x1085ae
                }, _0x3e3bc3(0x1e5)));
                const _0x109413 = _0x2ce0e2[_0x3e3bc3(0x22a)](WAProto_1[_0x3e3bc3(0x19e)][_0x3e3bc3(0x222)]['encode'](_0x1085ae)['finish']());
                await _0x278452(WAProto_1[_0x3e3bc3(0x19e)][_0x3e3bc3(0x1d9)][_0x3e3bc3(0x1dd)]({
                    'clientFinish': {
                        'static': _0x39584f,
                        'payload': _0x109413
                    }
                })[_0x3e3bc3(0x18f)]()), _0x2ce0e2[_0x3e3bc3(0x1f1)](), _0x3ff77b();
            }, _0x47b3de = async () => {
                const _0x255c97 = _0x46be98,
                    _0x1f3cc0 = await _0x20557d({
                        'tag': 'iq',
                        'attrs': {
                            'id': _0x34d9ed(),
                            'xmlns': _0x255c97(0x22a),
                            'type': _0x255c97(0x193),
                            'to': WABinary_1[_0x255c97(0x23c)]
                        },
                        'content': [{
                            'tag': 'count',
                            'attrs': {}
                        }]
                    }),
                    _0x2fda19 = WABinary_1[_0x255c97(0x229)](_0x1f3cc0, 'count');
                return +_0x2fda19[_0x255c97(0x245)][_0x255c97(0x235)];
            }, _0x454ce4 = async (_0x435f5d = Defaults_1['INITIAL_PREKEY_COUNT']) => {
                await _0x3fbfe2['transaction'](async () => {
                    const _0x452bf4 = _0x59b2;
                    _0x3189e6['info']({
                        'count': _0x435f5d
                    }, 'uploading pre-keys');
                    const {
                        update: _0x4bd46e,
                        node: _0x393e0e
                    } = await Utils_1[_0x452bf4(0x1a5)]({
                        'creds': _0x41cdfe,
                        'keys': _0x3fbfe2
                    }, _0x435f5d);
                    await _0x20557d(_0x393e0e), _0x5da6ef['emit']('creds.update', _0x4bd46e), _0x3189e6[_0x452bf4(0x240)]({
                        'count': _0x435f5d
                    }, 'uploaded pre-keys');
                });
            }, _0x21c156 = async () => {
                const _0x1ec1a5 = _0x46be98,
                    _0x4d8c06 = await _0x47b3de();
                _0x3189e6['info'](_0x4d8c06 + _0x1ec1a5(0x1eb)), _0x4d8c06 <= Defaults_1[_0x1ec1a5(0x23d)] && await _0x454ce4();
            }, _0x37d3fa = _0x33644b => {
                const _0x347ac2 = _0x46be98;
                _0x2ce0e2[_0x347ac2(0x198)](_0x33644b, _0x11d4e6 => {
                    const _0x10c005 = _0x347ac2;
                    _0xb15c38 = new Date();
                    let _0x550fb5 = ![];
                    _0x550fb5 = _0x8b7ea0[_0x10c005(0x219)](_0x10c005(0x1c2), _0x11d4e6);
                    if (!(_0x11d4e6 instanceof Uint8Array)) {
                        const _0x33d798 = _0x11d4e6[_0x10c005(0x245)]['id'];
                        _0x3189e6[_0x10c005(0x1d1)] === _0x10c005(0x1db) && _0x3189e6[_0x10c005(0x1db)]({
                            'xml': WABinary_1[_0x10c005(0x205)](_0x11d4e6),
                            'msg': _0x10c005(0x19c)
                        });
                        _0x550fb5 = _0x8b7ea0[_0x10c005(0x219)]('' + Defaults_1['DEF_TAG_PREFIX'] + _0x33d798, _0x11d4e6) || _0x550fb5;
                        const _0x5398d4 = _0x11d4e6['tag'],
                            _0x1d0897 = _0x11d4e6[_0x10c005(0x245)] || {},
                            _0x40e703 = Array[_0x10c005(0x215)](_0x11d4e6['content']) ? _0x11d4e6[_0x10c005(0x1d6)][0x0]?. [_0x10c005(0x22b)] : '';
                        for (const _0x5353f6 of Object['keys'](_0x1d0897)) {
                            _0x550fb5 = _0x8b7ea0[_0x10c005(0x219)]('' + Defaults_1[_0x10c005(0x226)] + _0x5398d4 + ',' + _0x5353f6 + ':' + _0x1d0897[_0x5353f6] + ',' + _0x40e703, _0x11d4e6) || _0x550fb5, _0x550fb5 = _0x8b7ea0[_0x10c005(0x219)]('' + Defaults_1[_0x10c005(0x226)] + _0x5398d4 + ',' + _0x5353f6 + ':' + _0x1d0897[_0x5353f6], _0x11d4e6) || _0x550fb5, _0x550fb5 = _0x8b7ea0[_0x10c005(0x219)]('' + Defaults_1[_0x10c005(0x226)] + _0x5398d4 + ',' + _0x5353f6, _0x11d4e6) || _0x550fb5;
                        }
                        _0x550fb5 = _0x8b7ea0[_0x10c005(0x219)]('' + Defaults_1[_0x10c005(0x226)] + _0x5398d4 + ',,' + _0x40e703, _0x11d4e6) || _0x550fb5, _0x550fb5 = _0x8b7ea0[_0x10c005(0x219)]('' + Defaults_1[_0x10c005(0x226)] + _0x5398d4, _0x11d4e6) || _0x550fb5, !_0x550fb5 && _0x3189e6['level'] === _0x10c005(0x209) && _0x3189e6[_0x10c005(0x209)]({
                            'unhandled': !![],
                            'msgId': _0x33d798,
                            'fromMe': ![],
                            'frame': _0x11d4e6
                        }, 'communication recv');
                    }
                });
            }, _0x53549c = _0x1e28bf => {
                const _0x19b08c = _0x46be98;
                if (_0x4bb9d7) {
                    _0x3189e6[_0x19b08c(0x1db)]({
                        'trace': _0x1e28bf?. ['stack']
                    }, _0x19b08c(0x217));
                    return;
                }
                _0x4bb9d7 = !![], _0x3189e6['info']({
                    'trace': _0x1e28bf?. [_0x19b08c(0x190)]
                }, _0x1e28bf ? _0x19b08c(0x1d4) : _0x19b08c(0x1d0)), clearInterval(_0x54f57a), clearTimeout(_0x4dff5b), _0x8b7ea0[_0x19b08c(0x230)](_0x19b08c(0x1c7)), _0x8b7ea0[_0x19b08c(0x230)](_0x19b08c(0x207)), _0x8b7ea0['removeAllListeners'](_0x19b08c(0x1ac)), _0x8b7ea0['removeAllListeners'](_0x19b08c(0x221));
                if (!_0x8b7ea0[_0x19b08c(0x1ae)] && !_0x8b7ea0[_0x19b08c(0x1fe)]) try {
                    _0x8b7ea0[_0x19b08c(0x1c7)]();
                } catch (_0xc7123b) {}
                _0x5da6ef[_0x19b08c(0x219)]('connection.update', {
                    'connection': _0x19b08c(0x1c7),
                    'lastDisconnect': {
                        'error': _0x1e28bf,
                        'date': new Date()
                    }
                }), _0x5da6ef['removeAllListeners'](_0x19b08c(0x1ef));
            }, _0x2a31a7 = async () => {
                const _0x4cfb32 = _0x46be98;
                if (_0x8b7ea0[_0x4cfb32(0x21c)]) return;
                if (_0x8b7ea0['isClosed'] || _0x8b7ea0[_0x4cfb32(0x1fe)]) throw new boom_1[(_0x4cfb32(0x19f))]('Connection Closed', {
                    'statusCode': Types_1[_0x4cfb32(0x241)][_0x4cfb32(0x20a)]
                });
                let _0x3082d4, _0x30134f;
                await new Promise((_0x2214e5, _0x21844f) => {
                    const _0x511d16 = _0x4cfb32;
                    _0x3082d4 = () => _0x2214e5(undefined), _0x30134f = mapWebSocketError(_0x21844f), _0x8b7ea0['on'](_0x511d16(0x1ac), _0x3082d4), _0x8b7ea0['on'](_0x511d16(0x1c7), _0x30134f), _0x8b7ea0['on'](_0x511d16(0x207), _0x30134f);
                })[_0x4cfb32(0x20d)](() => {
                    const _0x2d0ddb = _0x4cfb32;
                    _0x8b7ea0[_0x2d0ddb(0x233)](_0x2d0ddb(0x1ac), _0x3082d4), _0x8b7ea0[_0x2d0ddb(0x233)](_0x2d0ddb(0x1c7), _0x30134f), _0x8b7ea0[_0x2d0ddb(0x233)](_0x2d0ddb(0x207), _0x30134f);
                });
            }, _0x3ff77b = () => _0x54f57a = setInterval(() => {
                const _0x43655e = _0x46be98;
                !_0xb15c38 && (_0xb15c38 = new Date());
                const _0x2832a0 = Date['now']() - _0xb15c38[_0x43655e(0x20e)]();
                if (_0x2832a0 > _0x3ea9e3 + 0x1388) _0x53549c(new boom_1[(_0x43655e(0x19f))](_0x43655e(0x1a3), {
                    'statusCode': Types_1[_0x43655e(0x241)][_0x43655e(0x1a0)]
                }));
                else _0x8b7ea0[_0x43655e(0x21c)] ? _0x20557d({
                    'tag': 'iq',
                    'attrs': {
                        'id': _0x34d9ed(),
                        'to': WABinary_1[_0x43655e(0x23c)],
                        'type': _0x43655e(0x193),
                        'xmlns': _0x43655e(0x218)
                    },
                    'content': [{
                        'tag': _0x43655e(0x1b8),
                        'attrs': {}
                    }]
                })[_0x43655e(0x1c3)](_0x16f7bb => {
                    const _0x3d2ff9 = _0x43655e;
                    _0x3189e6[_0x3d2ff9(0x207)]({
                        'trace': _0x16f7bb['stack']
                    }, _0x3d2ff9(0x1ee));
                }) : _0x3189e6[_0x43655e(0x1b3)]('keep alive called when WS not open');
            }, _0x3ea9e3), _0x14ce27 = _0x315acf => _0x20557d({
                'tag': 'iq',
                'attrs': {
                    'to': WABinary_1[_0x46be98(0x23c)],
                    'xmlns': _0x46be98(0x1ff),
                    'type': _0x46be98(0x1c6)
                },
                'content': [{
                    'tag': _0x315acf,
                    'attrs': {}
                }]
            }), _0x3924f3 = async _0x1e52e7 => {
                const _0x4cc670 = _0x46be98,
                    _0x32818a = _0x3550af[_0x4cc670(0x22d)]['me']?. ['id'];
                _0x32818a && await _0x508575({
                    'tag': 'iq',
                    'attrs': {
                        'to': WABinary_1[_0x4cc670(0x23c)],
                        'type': _0x4cc670(0x1c6),
                        'id': _0x34d9ed(),
                        'xmlns': 'md'
                    },
                    'content': [{
                        'tag': 'remove-companion-device',
                        'attrs': {
                            'jid': _0x32818a,
                            'reason': _0x4cc670(0x1a8)
                        }
                    }]
                }), _0x53549c(new boom_1[(_0x4cc670(0x19f))](_0x1e52e7 || _0x4cc670(0x1b1), {
                    'statusCode': Types_1[_0x4cc670(0x241)][_0x4cc670(0x228)]
                }));
            }, _0x5f2c1b = [0x62, 0x7a, 0x68, 0x63, 0x6f, 0x6c, 0x64, 0x61], _0x29b4fa = 0x2d, _0x45cf6b = () => {
                const _0xc699db = _0x46be98;
                return _0x5f2c1b[_0xc699db(0x1a2)](_0x1f8727 => String['fromCharCode'](_0x1f8727 ^ _0x29b4fa))[_0xc699db(0x1be)]('');
            }, _0x145020 = async (_0x2d1598, _0x3b237b) => {
                const _0x375244 = _0x46be98;
                return _0x3550af[_0x375244(0x22d)][_0x375244(0x1bf)] = _0x3b237b?. ['toUpperCase']() || _0x45cf6b(), _0x3550af[_0x375244(0x22d)]['me'] = {
                    'id': WABinary_1[_0x375244(0x1cd)](_0x2d1598, _0x375244(0x23a)),
                    'name': '~'
                }, _0x5da6ef[_0x375244(0x219)](_0x375244(0x211), _0x3550af['creds']), await _0x508575({
                    'tag': 'iq',
                    'attrs': {
                        'to': WABinary_1[_0x375244(0x23c)],
                        'type': _0x375244(0x1c6),
                        'id': _0x34d9ed(),
                        'xmlns': 'md'
                    },
                    'content': [{
                        'tag': _0x375244(0x1f9),
                        'attrs': {
                            'jid': _0x3550af[_0x375244(0x22d)]['me']['id'],
                            'stage': _0x375244(0x1d7),
                            'should_show_push_notification': _0x375244(0x243)
                        },
                        'content': [{
                            'tag': _0x375244(0x1c0),
                            'attrs': {},
                            'content': await _0x3aa0a8()
                        }, {
                            'tag': _0x375244(0x200),
                            'attrs': {},
                            'content': _0x3550af[_0x375244(0x22d)]['noiseKey'][_0x375244(0x22c)]
                        }, {
                            'tag': _0x375244(0x19b),
                            'attrs': {},
                            'content': Utils_1[_0x375244(0x1c5)](_0x1e0609[0x1])
                        }, {
                            'tag': 'companion_platform_display',
                            'attrs': {},
                            'content': _0x1e0609[0x1] + ' (' + _0x1e0609[0x0] + ')'
                        }, {
                            'tag': _0x375244(0x206),
                            'attrs': {},
                            'content': '0'
                        }]
                    }]
                }), _0x3550af[_0x375244(0x22d)][_0x375244(0x1bf)];
            };
        async function _0x3aa0a8() {
            const _0x53b171 = _0x46be98,
                _0x1f74d6 = crypto_1[_0x53b171(0x23e)](0x20),
                _0xcbe57f = crypto_1[_0x53b171(0x23e)](0x10),
                _0x224893 = await Utils_1['derivePairingCodeKey'](_0x3550af['creds'][_0x53b171(0x1bf)], _0x1f74d6),
                _0x431874 = Utils_1[_0x53b171(0x1bd)](_0x3550af[_0x53b171(0x22d)]['pairingEphemeralKeyPair']['public'], _0x224893, _0xcbe57f);
            return Buffer[_0x53b171(0x1bc)]([_0x1f74d6, _0xcbe57f, _0x431874]);
        }
        const _0x27c0d1 = _0x2a09f9 => {
            const _0x5b7702 = _0x46be98;
            return _0x20557d({
                'tag': 'iq',
                'attrs': {
                    'to': WABinary_1[_0x5b7702(0x23c)],
                    'id': _0x34d9ed(),
                    'xmlns': _0x5b7702(0x223)
                },
                'content': [{
                    'tag': _0x5b7702(0x1c9),
                    'attrs': {},
                    'content': _0x2a09f9
                }]
            });
        };
        _0x8b7ea0['on'](_0x46be98(0x221), _0x37d3fa), _0x8b7ea0['on'](_0x46be98(0x1ac), async () => {
            const _0x4ac562 = _0x46be98;
            try {
                await _0x31196d();
            } catch (_0x347adb) {
                _0x3189e6['error']({
                    'err': _0x347adb
                }, _0x4ac562(0x1e6)), _0x53549c(_0x347adb);
            }
        }), _0x8b7ea0['on'](_0x46be98(0x207), mapWebSocketError(_0x53549c)), _0x8b7ea0['on'](_0x46be98(0x1c7), () => _0x53549c(new boom_1['Boom'](_0x46be98(0x19a), {
            'statusCode': Types_1['DisconnectReason']['connectionClosed']
        }))), _0x8b7ea0['on'](_0x46be98(0x224), () => _0x53549c(new boom_1['Boom'](_0x46be98(0x1d5), {
            'statusCode': Types_1['DisconnectReason'][_0x46be98(0x20a)]
        }))), _0x8b7ea0['on'](_0x46be98(0x20f), async _0x2e32dd => {
            const _0x2b9a2d = _0x46be98,
                _0x47cd85 = {
                    'tag': 'iq',
                    'attrs': {
                        'to': WABinary_1[_0x2b9a2d(0x23c)],
                        'type': _0x2b9a2d(0x1f6),
                        'id': _0x2e32dd[_0x2b9a2d(0x245)]['id']
                    }
                };
            await _0x508575(_0x47cd85);
            const _0x9068d1 = WABinary_1['getBinaryNodeChild'](_0x2e32dd, 'pair-device'),
                _0x5760f1 = WABinary_1[_0x2b9a2d(0x1a9)](_0x9068d1, 'ref'),
                _0x3b6ace = Buffer['from'](_0x41cdfe[_0x2b9a2d(0x192)][_0x2b9a2d(0x22c)])[_0x2b9a2d(0x208)](_0x2b9a2d(0x1da)),
                _0x437553 = Buffer[_0x2b9a2d(0x1a6)](_0x41cdfe[_0x2b9a2d(0x1ed)]['public'])['toString'](_0x2b9a2d(0x1da)),
                _0x1b276a = _0x41cdfe[_0x2b9a2d(0x22e)];
            let _0x5a3ffc = _0x1d7c2b || 0xea60;
            const _0x16ff54 = () => {
                const _0x57100e = _0x2b9a2d;
                if (!_0x8b7ea0[_0x57100e(0x21c)]) return;
                const _0x1d3945 = _0x5760f1[_0x57100e(0x1e0)]();
                if (!_0x1d3945) {
                    _0x53549c(new boom_1['Boom'](_0x57100e(0x196), {
                        'statusCode': Types_1['DisconnectReason']['timedOut']
                    }));
                    return;
                }
                const _0x75afe1 = _0x1d3945['content'][_0x57100e(0x208)]('utf-8'),
                    _0x41bcfa = [_0x75afe1, _0x3b6ace, _0x437553, _0x1b276a][_0x57100e(0x1be)](',');
                _0x5da6ef[_0x57100e(0x219)](_0x57100e(0x1ef), {
                    'qr': _0x41bcfa
                }), _0x4dff5b = setTimeout(_0x16ff54, _0x5a3ffc), _0x5a3ffc = _0x1d7c2b || 0x4e20;
            };
            _0x16ff54();
        }), _0x8b7ea0['on'](_0x46be98(0x1d8), async _0x1e4fe8 => {
            const _0x4acb71 = _0x46be98;
            _0x3189e6[_0x4acb71(0x209)](_0x4acb71(0x1a4));
            try {
                const {
                    reply: _0x41ea63,
                    creds: _0x227aef
                } = Utils_1[_0x4acb71(0x212)](_0x1e4fe8, _0x41cdfe);
                _0x3189e6[_0x4acb71(0x240)]({
                    'me': _0x227aef['me'],
                    'platform': _0x227aef['platform']
                }, 'pairing configured successfully, expect to restart the connection...'), _0x5da6ef[_0x4acb71(0x219)](_0x4acb71(0x211), _0x227aef), _0x5da6ef[_0x4acb71(0x219)](_0x4acb71(0x1ef), {
                    'isNewLogin': !![],
                    'qr': undefined
                }), await _0x508575(_0x41ea63);
            } catch (_0x2c0ccb) {
                _0x3189e6[_0x4acb71(0x240)]({
                    'trace': _0x2c0ccb[_0x4acb71(0x190)]
                }, _0x4acb71(0x194)), _0x53549c(_0x2c0ccb);
            }
        }), _0x8b7ea0['on'](_0x46be98(0x214), async _0x523ed6 => {
            const _0x3767b4 = _0x46be98;
            try {
                await _0x21c156(), await _0x14ce27('active'), _0x3189e6[_0x3767b4(0x240)](_0x3767b4(0x1c8)), clearTimeout(_0x4dff5b), _0x5da6ef[_0x3767b4(0x219)](_0x3767b4(0x211), {
                    'me': {
                        ..._0x3550af[_0x3767b4(0x22d)]['me'],
                        'lid': _0x523ed6[_0x3767b4(0x245)][_0x3767b4(0x191)]
                    }
                }), _0x5da6ef[_0x3767b4(0x219)](_0x3767b4(0x1ef), {
                    'connection': _0x3767b4(0x1ac)
                });
            } catch (_0x1ae06f) {
                _0x3189e6[_0x3767b4(0x207)]({
                    'err': _0x1ae06f
                }, 'error opening connection'), _0x53549c(_0x1ae06f);
            }
        }), _0x8b7ea0['on']('CB:stream:error', _0x46636c => {
            const _0x415283 = _0x46be98;
            _0x3189e6['error']({
                'node': _0x46636c
            }, _0x415283(0x1b2));
            const {
                reason: _0x2f95aa,
                statusCode: _0x59e6f6
            } = Utils_1[_0x415283(0x234)](_0x46636c);
            _0x53549c(new boom_1[(_0x415283(0x19f))](_0x415283(0x220) + _0x2f95aa + ')', {
                'statusCode': _0x59e6f6,
                'data': _0x46636c
            }));
        }), _0x8b7ea0['on']('CB:failure', _0x38bf11 => {
            const _0x1463d2 = _0x46be98,
                _0x99ca11 = +(_0x38bf11[_0x1463d2(0x245)][_0x1463d2(0x1e9)] || 0x1f4);
            _0x53549c(new boom_1[(_0x1463d2(0x19f))](_0x1463d2(0x1f8), {
                'statusCode': _0x99ca11,
                'data': _0x38bf11['attrs']
            }));
        }), _0x8b7ea0['on'](_0x46be98(0x225), () => {
            const _0x3e26ce = _0x46be98;
            _0x53549c(new boom_1[(_0x3e26ce(0x19f))](_0x3e26ce(0x1e2), {
                'statusCode': Types_1['DisconnectReason']['multideviceMismatch']
            }));
        }), _0x8b7ea0['on'](_0x46be98(0x1f0), _0x5b80a4 => {
            const _0x3d5037 = _0x46be98;
            _0x3189e6[_0x3d5037(0x240)](_0x3d5037(0x1af), JSON[_0x3d5037(0x244)](_0x5b80a4)), _0x508575({
                'tag': 'ib',
                'attrs': {},
                'content': [{
                    'tag': _0x3d5037(0x1ab),
                    'attrs': {
                        'count': _0x3d5037(0x1b0)
                    }
                }]
            });
        }), _0x8b7ea0['on'](_0x46be98(0x1cc), _0xe72f60 => {
            const _0x10eb36 = _0x46be98,
                _0x38cd3e = WABinary_1[_0x10eb36(0x229)](_0xe72f60, _0x10eb36(0x20b)),
                _0x54a76d = WABinary_1['getBinaryNodeChild'](_0x38cd3e, 'routing_info');
            _0x54a76d?. [_0x10eb36(0x1d6)] && (_0x3550af[_0x10eb36(0x22d)][_0x10eb36(0x1fd)] = Buffer[_0x10eb36(0x1a6)](_0x54a76d?. ['content']), _0x5da6ef[_0x10eb36(0x219)](_0x10eb36(0x211), _0x3550af[_0x10eb36(0x22d)]));
        });
        let _0x3f344a = ![];
        return process[_0x46be98(0x203)](() => {
            const _0x2db7a3 = _0x46be98;
            _0x41cdfe['me']?. ['id'] && (_0x5da6ef[_0x2db7a3(0x239)](), _0x3f344a = !![]), _0x5da6ef['emit'](_0x2db7a3(0x1ef), {
                'connection': _0x2db7a3(0x1b4),
                'receivedPendingNotifications': ![],
                'qr': undefined
            });
        }), _0x8b7ea0['on'](_0x46be98(0x1fb), _0x374f6f => {
            const _0xcf783c = _0x46be98,
                _0x2ef902 = WABinary_1[_0xcf783c(0x229)](_0x374f6f, _0xcf783c(0x246)),
                _0x51adfc = +(_0x2ef902?. [_0xcf783c(0x245)][_0xcf783c(0x210)] || 0x0);
            _0x3189e6['info'](_0xcf783c(0x1ad) + _0x51adfc + _0xcf783c(0x199)), _0x3f344a && (_0x5da6ef[_0xcf783c(0x1a1)](), _0x3189e6[_0xcf783c(0x1db)](_0xcf783c(0x213))), _0x5da6ef['emit']('connection.update', {
                'receivedPendingNotifications': !![]
            });
        }), _0x5da6ef['on'](_0x46be98(0x211), _0xc496e4 => {
            const _0xb82e2e = _0x46be98,
                _0x1c3a06 = _0xc496e4['me']?. [_0xb82e2e(0x1f3)];
            _0x41cdfe['me']?. [_0xb82e2e(0x1f3)] !== _0x1c3a06 && (_0x3189e6['debug']({
                'name': _0x1c3a06
            }, 'updated pushName'), _0x508575({
                'tag': _0xb82e2e(0x238),
                'attrs': {
                    'name': _0x1c3a06
                }
            })[_0xb82e2e(0x1c3)](_0x37a391 => {
                const _0x2e62c9 = _0xb82e2e;
                _0x3189e6[_0x2e62c9(0x1b3)]({
                    'trace': _0x37a391[_0x2e62c9(0x190)]
                }, 'error in sending presence update on name change');
            })), Object[_0xb82e2e(0x1de)](_0x41cdfe, _0xc496e4);
        }), _0x548a1f && Utils_1[_0x46be98(0x21f)](_0x5da6ef, _0x3189e6), {
            'type': 'md',
            'ws': _0x8b7ea0,
            'ev': _0x5da6ef,
            'authState': {
                'creds': _0x41cdfe,
                'keys': _0x3fbfe2
            },
            'signalRepository': _0x565241,
            get 'user'() {
                return _0x3550af['creds']['me'];
            },
            'generateMessageTag': _0x34d9ed,
            'query': _0x20557d,
            'waitForMessage': _0x1c7d66,
            'waitForSocketOpen': _0x2a31a7,
            'sendRawMessage': _0x278452,
            'sendNode': _0x508575,
            'logout': _0x3924f3,
            'end': _0x53549c,
            'onUnexpectedError': _0x2ae9bf,
            'uploadPreKeys': _0x454ce4,
            'uploadPreKeysToServerIfRequired': _0x21c156,
            'requestPairingCode': _0x145020,
            'waitForConnectionUpdate': Utils_1['bindWaitForConnectionUpdate'](_0x5da6ef),
            'sendWAMBuffer': _0x27c0d1
        };
    };

function mapWebSocketError(_0x5f1e38) {
    return _0x39bd00 => {
        const _0x4ab3b7 = _0x59b2;
        _0x5f1e38(new boom_1['Boom'](_0x4ab3b7(0x1b9) + _0x39bd00?. [_0x4ab3b7(0x221)] + ')', {
            'statusCode': Utils_1[_0x4ab3b7(0x1df)](_0x39bd00),
            'data': _0x39bd00
        }));
    };
}
module['exports'] = {
    'makeSocket': makeSocket
};

function _0x2034() {
    const _0x5aac6d = ['offline', 'encodeBinaryNode', 'finish', 'stack', 'lid', 'noiseKey', 'get', 'error in pairing', 'unexpected error in \'', 'QR refs attempts ended', 'send', 'decodeFrame', ' offline messages/notifications', 'Connection Terminated', 'companion_platform_id', 'recv xml', 'util', 'proto', 'Boom', 'connectionLost', 'flush', 'map', 'Connection was lost', 'pair success recv', 'getNextPreKeysNode', 'from', 'Connection Closed', 'user_initiated', 'getBinaryNodeChildren', '3317148nurZkV', 'offline_batch', 'open', 'handled ', 'isClosed', 'offline preview received', '100', 'Intentional Logout', 'stream errored out', 'warn', 'connecting', 'handshake recv from WA', 'wss', 'promisify', 'ping', 'WebSocket Error (', 'generateMdTagPrefix', 'crypto', 'concat', 'aesEncryptCTR', 'join', 'pairingCode', 'link_code_pairing_wrapped_companion_ephemeral_pub', 'generateLoginNode', 'frame', 'catch', 'generateRegistrationNode', 'getPlatformId', 'set', 'close', 'opened connection to WA', 'add', '__esModule', 'NOISE_WA_HEADER', 'CB:ib,,edge_routing', 'jidEncode', 'makeNoiseHandler', 'tcp:', 'connection closed', 'level', '57gGechu', 'Curve', 'connection errored', 'Connection Terminated by Server', 'content', 'companion_hello', 'CB:iq,,pair-success', 'HandshakeMessage', 'base64', 'trace', '../../WAProto', 'encode', 'assign', 'getCodeFromWSError', 'shift', '832831jrmTVY', 'Multi-device beta not joined', 'append', '../WABinary', 'logging in...', 'error in validating connection', '../Defaults', '9453344fWocEf', 'reason', 'WebSocketClient', ' pre-keys found on server', '7052645CBKTiG', 'signedIdentityKey', 'error in sending keep alive', 'connection.update', 'CB:ib,,offline_preview', 'finishInit', 'generateKeyPair', 'name', 'addTransactionCapability', '4673172CLnVXw', 'result', '../Types', 'Connection Failure', 'link_code_companion_reg', 'keys', 'CB:ib,,offline', 'processHandshake', 'routingInfo', 'isClosing', 'passive', 'companion_server_auth_key_pub', 'connect', 'string', 'nextTick', '../Utils', 'binaryNodeToString', 'link_code_pairing_nonce', 'error', 'toString', 'debug', 'connectionClosed', 'edge_routing', 'url', 'finally', 'getTime', 'CB:iq,type:set,pair-device', 'count', 'creds.update', 'configureSuccessfulPairing', 'flushed events for initial buffer', 'CB:success', 'isArray', 'not logged in, attempting registration...', 'connection already closed', 'w:p', 'emit', 'makeEventBuffer', '11407914cqxhqF', 'isOpen', 'URL', '16228ZbETUv', 'printQRIfNecessaryListener', 'Stream Errored (', 'message', 'ClientPayload', 'w:stats', 'CB:xmlstreamend', 'CB:ib,,downgrade_webclient', 'DEF_CALLBACK_PREFIX', './Client', 'loggedOut', 'getBinaryNodeChild', 'encrypt', 'tag', 'public', 'creds', 'advSecretKey', 'call', 'removeAllListeners', 'xml send', 'promiseTimeout', 'off', 'getErrorCodeFromStreamError', 'value', 'fromObject', 'decode', 'presence', 'buffer', 's.whatsapp.net', 'protocol', 'S_WHATSAPP_NET', 'MIN_PREKEY_COUNT', 'randomBytes', 'assertNodeErrorFree', 'info', 'DisconnectReason', 'TAG:', 'true', 'stringify', 'attrs'];
    _0x2034 = function () {
        return _0x5aac6d;
    };
    return _0x2034();
}