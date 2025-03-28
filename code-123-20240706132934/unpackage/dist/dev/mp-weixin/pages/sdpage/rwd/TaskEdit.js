(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/sdpage/rwd/TaskEdit"],{

/***/ 92:
/*!***********************************************************************************************!*\
  !*** C:/erp/jhapp/code-123-20240706132934/main.js?{"page":"pages%2Fsdpage%2Frwd%2FTaskEdit"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _TaskEdit = _interopRequireDefault(__webpack_require__(/*! ./pages/sdpage/rwd/TaskEdit.vue */ 93));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_TaskEdit.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 93:
/*!**************************************************************************!*\
  !*** C:/erp/jhapp/code-123-20240706132934/pages/sdpage/rwd/TaskEdit.vue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskEdit_vue_vue_type_template_id_2237d605_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskEdit.vue?vue&type=template&id=2237d605&scoped=true& */ 94);
/* harmony import */ var _TaskEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskEdit.vue?vue&type=script&lang=js& */ 96);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _TaskEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _TaskEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _TaskEdit_vue_vue_type_style_index_0_id_2237d605_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskEdit.vue?vue&type=style&index=0&id=2237d605&scoped=true&lang=css& */ 98);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TaskEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskEdit_vue_vue_type_template_id_2237d605_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskEdit_vue_vue_type_template_id_2237d605_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2237d605",
  null,
  false,
  _TaskEdit_vue_vue_type_template_id_2237d605_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/sdpage/rwd/TaskEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 94:
/*!*********************************************************************************************************************!*\
  !*** C:/erp/jhapp/code-123-20240706132934/pages/sdpage/rwd/TaskEdit.vue?vue&type=template&id=2237d605&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_TaskEdit_vue_vue_type_template_id_2237d605_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./TaskEdit.vue?vue&type=template&id=2237d605&scoped=true& */ 95);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_TaskEdit_vue_vue_type_template_id_2237d605_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_TaskEdit_vue_vue_type_template_id_2237d605_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_TaskEdit_vue_vue_type_template_id_2237d605_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_TaskEdit_vue_vue_type_template_id_2237d605_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 95:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/erp/jhapp/code-123-20240706132934/pages/sdpage/rwd/TaskEdit.vue?vue&type=template&id=2237d605&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var m0 = _vm.getColor(_vm.phbsfsh)
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 96:
/*!***************************************************************************************************!*\
  !*** C:/erp/jhapp/code-123-20240706132934/pages/sdpage/rwd/TaskEdit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_TaskEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./TaskEdit.vue?vue&type=script&lang=js& */ 97);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_TaskEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_TaskEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_TaskEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_TaskEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_TaskEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 97:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/erp/jhapp/code-123-20240706132934/pages/sdpage/rwd/TaskEdit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 39));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 41));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _api = __webpack_require__(/*! @/request/api2.js */ 44);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  components: {},
  props: {},
  data: function data() {
    return {
      form2: {
        id: 0,
        pickerIndex: 0,
        jzfs: '',
        planDate: '',
        ghrq: '',
        rwdh: '',
        htbh: '',
        demander: '',
        yhdw: '',
        gcmc: '',
        gcdz: '',
        gcbw: '',
        jhfl: '',
        yj: '',
        qddj: '',
        tld: '',
        zdlj: '',
        bz: ''
      },
      yhdws: [],
      gcmcs: [],
      gcdzs: [],
      gcbws: [],
      qddjs: [],
      tlds: [],
      zdljs: [],
      jzfsList: [],
      yhdwIndex: -1,
      gcmcIndex: -1,
      gcdzIndex: -1,
      gcbwIndex: -1,
      qddjIndex: -1,
      tldIndex: -1,
      zdljIndex: -1,
      jzfsIndex: -1,
      jhflError: '',
      yjError: '',
      ghrqError: '',
      zdljError: '',
      isPickerOpen: {
        yhdw: false,
        gcmc: false,
        gcdz: false,
        gcbw: false,
        qddj: false,
        jzfs: false,
        tld: false,
        zdlj: false
      }
    };
  },
  onLoad: function onLoad(query) {
    if (query.data) {
      var res = JSON.parse(query.data);
      if (res.ghrq && res.ghrq.includes('T')) {
        res.ghrq = res.ghrq.split('T')[0];
      }
      this.form2 = _objectSpread(_objectSpread({}, this.form2), res);
      this.initPickerIndex();
    }
    this.getDictValues();
  },
  methods: {
    getColor: function getColor(score) {
      if (score == 0 || score == null) {
        return 'red';
      } else {
        return 'green';
      }
    },
    initPickerIndex: function initPickerIndex() {
      var _this = this;
      this.yhdwIndex = this.yhdws.findIndex(function (item) {
        return item === _this.form2.yhdw;
      });
      this.gcmcIndex = this.gcmcs.findIndex(function (item) {
        return item === _this.form2.gcmc;
      });
      this.gcdzIndex = this.gcdzs.findIndex(function (item) {
        return item === _this.form2.gcdz;
      });
      this.gcbwIndex = this.gcbws.findIndex(function (item) {
        return item === _this.form2.gcbw;
      });
      this.qddjIndex = this.qddjs.findIndex(function (item) {
        return item === _this.form2.qddj;
      });
      this.tldIndex = this.tlds.findIndex(function (item) {
        return item === _this.form2.tld;
      });
      this.zdljIndex = this.zdljs.findIndex(function (item) {
        return item === _this.form2.zdlj;
      });
      this.jzfsIndex = this.jzfsList.findIndex(function (item) {
        return item === _this.form2.jzfs;
      });
      console.log('this.jzfsIndex ', this.jzfsIndex);
      console.log('this.jzfsList ', this.jzfsList);
    },
    getDictValues: function getDictValues() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var res;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _api.SysDictQueryValue)();
              case 3:
                res = _context.sent;
                _this2.yhdws = res.data.yhdws || [];
                _this2.gcmcs = res.data.gcmcs || [];
                _this2.gcdzs = res.data.gcdzs || [];
                _this2.gcbws = res.data.gcbws || [];
                _this2.qddjs = res.data.qddjs || [];
                _this2.tlds = res.data.tlds || [];
                _this2.zdljs = res.data.zdljs || [];
                _this2.jzfsList = res.data.jzfss || [];
                _context.next = 18;
                break;
              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);
                console.error('获取字典值失败', _context.t0);
                uni.showToast({
                  title: '获取下拉选项数据失败',
                  icon: 'none'
                });
              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 14]]);
      }))();
    },
    handleYhdwChange: function handleYhdwChange(e) {
      this.yhdwIndex = e.detail.value;
      this.form2.yhdw = this.yhdws[this.yhdwIndex];
    },
    handleYhdwInput: function handleYhdwInput(e) {
      this.form2.yhdw = e.detail.value;
      this.yhdwIndex = -1;
    },
    handleGcmcChange: function handleGcmcChange(e) {
      this.gcmcIndex = e.detail.value;
      this.form2.gcmc = this.gcmcs[this.gcmcIndex];
    },
    handleGcmcInput: function handleGcmcInput(e) {
      this.form2.gcmc = e.detail.value;
      this.gcmcIndex = -1;
    },
    handleGcdzChange: function handleGcdzChange(e) {
      this.gcdzIndex = e.detail.value;
      this.form2.gcdz = this.gcdzs[this.gcdzIndex];
    },
    handleGcdzInput: function handleGcdzInput(e) {
      this.form2.gcdz = e.detail.value;
      this.gcdzIndex = -1;
    },
    handleGcbwChange: function handleGcbwChange(e) {
      this.gcbwIndex = e.detail.value;
      this.form2.gcbw = this.gcbws[this.gcbwIndex];
    },
    handleGcbwInput: function handleGcbwInput(e) {
      this.form2.gcbw = e.detail.value;
      this.gcbwIndex = -1;
    },
    handleQddjChange: function handleQddjChange(e) {
      this.qddjIndex = e.detail.value;
      this.form2.qddj = this.qddjs[this.qddjIndex];
    },
    handleQddjInput: function handleQddjInput(e) {
      this.form2.qddj = e.detail.value;
      this.qddjIndex = -1;
    },
    handleTldChange: function handleTldChange(e) {
      this.tldIndex = e.detail.value;
      this.form2.tld = this.tlds[this.tldIndex];
    },
    handleTldInput: function handleTldInput(e) {
      this.form2.tld = e.detail.value;
      this.tldIndex = -1;
    },
    handleJzfsChange: function handleJzfsChange(e) {
      this.jzfsIndex = e.detail.value;
      this.form2.jzfs = this.jzfsList[this.jzfsIndex];
    },
    handleJzfsInput: function handleJzfsInput(e) {
      this.form2.jzfs = e.detail.value;
      this.jzfsIndex = -1;
    },
    handleZdljChange: function handleZdljChange(e) {
      this.zdljIndex = e.detail.value;
      this.form2.zdlj = this.zdljs[this.zdljIndex];
    },
    handleZdljInput: function handleZdljInput(e) {
      this.form2.zdlj = e.detail.value;
      this.zdljIndex = -1;
    },
    filterNonNumeric: function filterNonNumeric(e, field) {
      var inputValue = e.detail.value;
      var validValue = inputValue.replace(/[^0-9.]/g, '');
      while (validValue.includes('..')) {
        validValue = validValue.replace('..', '.');
      }
      if (validValue.startsWith('.')) {
        validValue = '0' + validValue;
      }
      if (validValue.endsWith('.')) {
        validValue = validValue.slice(0, -1);
      }
      var numValue = parseFloat(validValue);
      if (isNaN(numValue)) {
        this.form2[field] = 0;
      } else {
        this.form2[field] = numValue;
      }
      this.validatePositiveNumber(field);
    },
    validatePositiveNumber: function validatePositiveNumber(field) {
      var _this3 = this;
      return function (e) {
        var value = e.detail.value;
        if (isNaN(value) || parseFloat(value) <= 0) {
          _this3["".concat(field, "Error")] = "".concat(field === 'jhfl' ? '计划方量' : field === 'zdlj' ? '最大粒径' : '运距', " \u9700\u8F93\u5165\u5927\u4E8E\u96F6\u7684\u6570\u5B57");
          _this3.form2[field] = '';
        } else {
          _this3["".concat(field, "Error")] = '';
          _this3.form2[field] = parseFloat(value);
        }
      };
    },
    bindDateChange: function bindDateChange(e) {
      this.form2.ghrq = e.detail.value;
      this.ghrqError = '';
    },
    save: function save() {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var res;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this4.form2.ghrq) {
                  _context2.next = 3;
                  break;
                }
                _this4.ghrqError = '供货日期为必填项';
                return _context2.abrupt("return");
              case 3:
                _context2.prev = 3;
                _context2.next = 6;
                return (0, _api.taskSheetSave)({
                  id: _this4.form2.id,
                  taskSheetCode: _this4.form2.taskSheetCode,
                  rwdh: _this4.form2.rwdh,
                  htbh: _this4.form2.htbh,
                  ghrq: _this4.form2.ghrq,
                  planDate: _this4.form2.planDate,
                  yhdw: _this4.form2.yhdw,
                  gcmc: _this4.form2.gcmc,
                  gcdz: _this4.form2.gcdz,
                  gcbw: _this4.form2.gcbw,
                  jhfl: _this4.form2.jhfl,
                  remainConcreteQuantity: _this4.form2.remainConcreteQuantity,
                  yj: _this4.form2.yj,
                  qddj: _this4.form2.qddj,
                  jzfs: _this4.form2.jzfs,
                  pumpingParams: _this4.form2.pumpingParams,
                  tld: _this4.form2.tld,
                  zdlj: _this4.form2.zdlj,
                  bz: _this4.form2.bz
                });
              case 6:
                res = _context2.sent;
                uni.showToast({
                  title: '编辑成功'
                });
                setTimeout(function () {
                  _this4.returnList();
                }, 500);
                _context2.next = 14;
                break;
              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](3);
                uni.showToast({
                  title: '编辑失败'
                });
              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 11]]);
      }))();
    },
    returnList: function returnList() {
      console.log('返回任务单列表');
      uni.reLaunch({
        url: '/pages/sdpage/rwd/index'
      });
    },
    togglePicker: function togglePicker(field) {
      var _this5 = this;
      // 关闭其他打开的选择器
      Object.keys(this.isPickerOpen).forEach(function (key) {
        if (key !== field) {
          _this5.isPickerOpen[key] = false;
        }
      });
      this.isPickerOpen[field] = !this.isPickerOpen[field];
      if (this.isPickerOpen[field]) {
        var options = [];
        switch (field) {
          case 'yhdw':
            options = this.yhdws;
            break;
          case 'gcmc':
            options = this.gcmcs;
            break;
          case 'gcdz':
            options = this.gcdzs;
            break;
          case 'gcbw':
            options = this.gcbws;
            break;
          case 'qddj':
            options = this.qddjs;
            break;
          case 'jzfs':
            options = this.jzfsList;
            break;
          case 'tld':
            options = this.tlds;
            break;
          case 'zdlj':
            options = this.zdljs;
            break;
        }
        uni.showActionSheet({
          itemList: options,
          success: function success(res) {
            switch (field) {
              case 'yhdw':
                _this5.yhdwIndex = res.tapIndex;
                _this5.form2.yhdw = _this5.yhdws[res.tapIndex];
                break;
              case 'gcmc':
                _this5.gcmcIndex = res.tapIndex;
                _this5.form2.gcmc = _this5.gcmcs[res.tapIndex];
                break;
              case 'gcdz':
                _this5.gcdzIndex = res.tapIndex;
                _this5.form2.gcdz = _this5.gcdzs[res.tapIndex];
                break;
              case 'gcbw':
                _this5.gcbwIndex = res.tapIndex;
                _this5.form2.gcbw = _this5.gcbws[res.tapIndex];
                break;
              case 'qddj':
                _this5.qddjIndex = res.tapIndex;
                _this5.form2.qddj = _this5.qddjs[res.tapIndex];
                break;
              case 'jzfs':
                _this5.jzfsIndex = res.tapIndex;
                _this5.form2.jzfs = _this5.jzfsList[res.tapIndex];
                break;
              case 'tld':
                _this5.tldIndex = res.tapIndex;
                _this5.form2.tld = _this5.tlds[res.tapIndex];
                break;
              case 'zdlj':
                _this5.zdljIndex = res.tapIndex;
                _this5.form2.zdlj = _this5.zdljs[res.tapIndex];
                break;
            }
            _this5.closePicker(field);
          },
          fail: function fail(err) {
            console.error(err);
            _this5.closePicker(field);
          }
        });
      }
    },
    closePicker: function closePicker(field) {
      this.isPickerOpen[field] = false;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 98:
/*!***********************************************************************************************************************************!*\
  !*** C:/erp/jhapp/code-123-20240706132934/pages/sdpage/rwd/TaskEdit.vue?vue&type=style&index=0&id=2237d605&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_TaskEdit_vue_vue_type_style_index_0_id_2237d605_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./TaskEdit.vue?vue&type=style&index=0&id=2237d605&scoped=true&lang=css& */ 99);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_TaskEdit_vue_vue_type_style_index_0_id_2237d605_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_TaskEdit_vue_vue_type_style_index_0_id_2237d605_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_TaskEdit_vue_vue_type_style_index_0_id_2237d605_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_TaskEdit_vue_vue_type_style_index_0_id_2237d605_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_TaskEdit_vue_vue_type_style_index_0_id_2237d605_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 99:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/erp/jhapp/code-123-20240706132934/pages/sdpage/rwd/TaskEdit.vue?vue&type=style&index=0&id=2237d605&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[92,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/sdpage/rwd/TaskEdit.js.map