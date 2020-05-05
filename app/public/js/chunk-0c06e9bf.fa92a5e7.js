(window.webpackJsonp = window.webpackJsonp || []).push([[ 'chunk-0c06e9bf' ], { '162e': function(t, e, a) {
  'use strict'; a.r(e); const n = function() {
      const t = this,
        e = t.$createElement,
        a = t._self._c || e; return a('div', { staticClass: 'page-layout' }, [ a('nav', [ a('el-menu', { staticClass: 'nav-menu', attrs: { 'default-active': t.onRoutes, router: '', mode: 'horizontal' } }, [ a('el-menu-item', { attrs: { index: 'userPage' } }, [ t._v('用户管理') ]), a('el-menu-item', { staticClass: 'right-nav', on: { click: t.logout } }, [ t._v('退出登录') ]), a('el-menu-item', { staticClass: 'right-nav' }, [ t._v(t._s(t.$store.state.user.username)) ]) ], 1) ], 1), a('main', { staticClass: 'main-content' }, [ a('router-view') ], 1) ]);
    },
    s = [],
    u = { name: 'Layout', data() { return { defaultActive: 'dataPage' }; }, computed: { onRoutes() { const t = { '/': 'dataPage', '/dataPage': 'dataPage', '/userPage': 'userPage' }; return t[this.$route.path]; } }, methods: { logout() { this.$store.dispatch('LOG_OUT'), this.$router.push('/login'); } } },
    i = u,
    o = (a('5e47'), a('2877')),
    r = Object(o.a)(i, n, s, !1, null, null, null); e.default = r.exports;
}, '5e47': function(t, e, a) {
  'use strict'; const n = a('cca6b'),
    s = a.n(n); s.a;
}, cca6b(t, e, a) {} }]);
