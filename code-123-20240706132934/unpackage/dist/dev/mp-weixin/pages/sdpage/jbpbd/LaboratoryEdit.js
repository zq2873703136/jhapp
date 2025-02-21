(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/sdpage/jbpbd/LaboratoryEdit"],{

/***/ 116:
/*!*******************************************************************************************************!*\
  !*** C:/erp/jhapp/code-123-20240706132934/main.js?{"page":"pages%2Fsdpage%2Fjbpbd%2FLaboratoryEdit"} ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _LaboratoryEdit = _interopRequireDefault(__webpack_require__(/*! ./pages/sdpage/jbpbd/LaboratoryEdit.vue */ 117));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_LaboratoryEdit.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 117:
/*!**********************************************************************************!*\
  !*** C:/erp/jhapp/code-123-20240706132934/pages/sdpage/jbpbd/LaboratoryEdit.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LaboratoryEdit_vue_vue_type_template_id_1de58ad0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LaboratoryEdit.vue?vue&type=template&id=1de58ad0&scoped=true& */ 118);
/* harmony import */ var _LaboratoryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LaboratoryEdit.vue?vue&type=script&lang=js& */ 120);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _LaboratoryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _LaboratoryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _LaboratoryEdit_vue_vue_type_style_index_0_id_1de58ad0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LaboratoryEdit.vue?vue&type=style&index=0&id=1de58ad0&scoped=true&lang=css& */ 122);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LaboratoryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LaboratoryEdit_vue_vue_type_template_id_1de58ad0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LaboratoryEdit_vue_vue_type_template_id_1de58ad0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1de58ad0",
  null,
  false,
  _LaboratoryEdit_vue_vue_type_template_id_1de58ad0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/sdpage/jbpbd/LaboratoryEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 118:
/*!*****************************************************************************************************************************!*\
  !*** C:/erp/jhapp/code-123-20240706132934/pages/sdpage/jbpbd/LaboratoryEdit.vue?vue&type=template&id=1de58ad0&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LaboratoryEdit_vue_vue_type_template_id_1de58ad0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./LaboratoryEdit.vue?vue&type=template&id=1de58ad0&scoped=true& */ 119);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LaboratoryEdit_vue_vue_type_template_id_1de58ad0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LaboratoryEdit_vue_vue_type_template_id_1de58ad0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LaboratoryEdit_vue_vue_type_template_id_1de58ad0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LaboratoryEdit_vue_vue_type_template_id_1de58ad0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 119:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/erp/jhapp/code-123-20240706132934/pages/sdpage/jbpbd/LaboratoryEdit.vue?vue&type=template&id=1de58ad0&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 120:
/*!***********************************************************************************************************!*\
  !*** C:/erp/jhapp/code-123-20240706132934/pages/sdpage/jbpbd/LaboratoryEdit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LaboratoryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./LaboratoryEdit.vue?vue&type=script&lang=js& */ 121);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LaboratoryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LaboratoryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LaboratoryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LaboratoryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LaboratoryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 121:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/erp/jhapp/code-123-20240706132934/pages/sdpage/jbpbd/LaboratoryEdit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        pickerRange: ['汽车泵', '地泵', '非泵', '塔吊', '自备泵'],
        jzfs: 0,
        pumpingType: '',
        planDate: '',
        ghrq: '',
        pbbh: '',
        sgbw: '',
        hntzl: '',
        demander: '',
        qddj: '',
        hntjp: '',
        jbsj: '',
        tld: '',
        ds: 0,
        zs1: 0,
        zs2: 0,
        xs: 0,
        s1: 0,
        s2: 0,
        b: 0,
        sn1: 0,
        sn2: 0,
        fmh1: 0,
        fmh2: 0,
        s: 0,
        wjj1: 0,
        wjj2: 0,
        wjj3: 0,
        rl: 0,
        dsError: '',
        zs1Error: '',
        zs2Error: '',
        xsError: '',
        s1Error: '',
        s2Error: '',
        bError: '',
        sn1Error: '',
        sn2Error: '',
        fmh1Error: '',
        fmh2Error: '',
        sError: '',
        wjj1Error: '',
        wjj2Error: '',
        wjj3Error: '',
        rlError: ''
      },
      sgbws: [],
      hntzls: [],
      hntjps: [],
      tlds: [],
      zdljs: [],
      qddjs: [],
      sgbwIndex: -1,
      hntzlIndex: -1,
      hntjpIndex: -1,
      tldIndex: -1,
      zdljIndex: -1,
      qddjIndex: -1,
      jbsjError: ''
    };
  },
  onLoad: function onLoad(query) {
    console.log(query, 'query');
    if (query.data) {
      console.log(query.data, 'query.data');
      var res = JSON.parse(query.data);
      console.log(res, 'res');
      console.log(res.ghrq, 'res.ghrq');
      this.form2 = _objectSpread(_objectSpread({}, this.form2), res);
      console.log(this.form2, 'this.form2');
    }
    this.getDictValues();
  },
  methods: {
    getDictValues: function getDictValues() {
      var _this = this;
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
                _this.sgbws = res.data.sgbws || [];
                _this.hntzls = res.data.hntzls || [];
                _this.hntjps = res.data.hntjps || [];
                _this.tlds = res.data.tlds || [];
                _this.zdljs = res.data.zdljs || [];
                _this.qddjs = res.data.qddjs || [];

                // 根据初始值设置下拉框选中状态
                _this.sgbwIndex = _this.sgbws.indexOf(_this.form2.sgbw);
                if (_this.sgbwIndex === -1) {
                  _this.sgbwIndex = -1;
                }
                _this.hntzlIndex = _this.hntzls.indexOf(_this.form2.hntzl);
                if (_this.hntzlIndex === -1) {
                  _this.hntzlIndex = -1;
                }
                _this.hntjpIndex = _this.hntjps.indexOf(_this.form2.hntjp);
                if (_this.hntjpIndex === -1) {
                  _this.hntjpIndex = -1;
                }
                _this.tldIndex = _this.tlds.indexOf(_this.form2.tld);
                if (_this.tldIndex === -1) {
                  _this.tldIndex = -1;
                }
                _this.zdljIndex = _this.zdljs.indexOf(_this.form2.zdlj);
                if (_this.zdljIndex === -1) {
                  _this.zdljIndex = -1;
                }
                _this.qddjIndex = _this.qddjs.indexOf(_this.form2.qddj);
                if (_this.qddjIndex === -1) {
                  _this.qddjIndex = -1;
                }
                _context.next = 28;
                break;
              case 24:
                _context.prev = 24;
                _context.t0 = _context["catch"](0);
                console.error('获取字典值失败', _context.t0);
                uni.showToast({
                  title: '获取下拉选项数据失败',
                  icon: 'none'
                });
              case 28:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 24]]);
      }))();
    },
    handleSgbwChange: function handleSgbwChange(e) {
      this.sgbwIndex = e.detail.value;
      this.form2.sgbw = this.sgbws[this.sgbwIndex];
    },
    handleSgbwInput: function handleSgbwInput(e) {
      this.form2.sgbw = e.detail.value;
      this.sgbwIndex = -1;
    },
    handleHntzlChange: function handleHntzlChange(e) {
      this.hntzlIndex = e.detail.value;
      this.form2.hntzl = this.hntzls[this.hntzlIndex];
    },
    handleHntzlInput: function handleHntzlInput(e) {
      this.form2.hntzl = e.detail.value;
      this.hntzlIndex = -1;
    },
    handleQddjChange: function handleQddjChange(e) {
      this.qddjIndex = e.detail.value;
      this.form2.qddj = this.qddjs[this.qddjIndex];
    },
    handleQddjInput: function handleQddjInput(e) {
      this.form2.qddj = e.detail.value;
      this.qddjIndex = -1;
    },
    handleHntjpChange: function handleHntjpChange(e) {
      this.hntjpIndex = e.detail.value;
      this.form2.hntjp = this.hntjps[this.hntjpIndex];
    },
    handleHntjpInput: function handleHntjpInput(e) {
      this.form2.hntjp = e.detail.value;
      this.hntjpIndex = -1;
    },
    handleTldChange: function handleTldChange(e) {
      this.tldIndex = e.detail.value;
      this.form2.tld = this.tlds[this.tldIndex];
    },
    handleTldInput: function handleTldInput(e) {
      this.form2.tld = e.detail.value;
      this.tldIndex = -1;
    },
    handleZdljChange: function handleZdljChange(e) {
      this.zdljIndex = e.detail.value;
      this.form2.zdlj = this.zdljs[this.zdljIndex];
    },
    handleZdljInput: function handleZdljInput(e) {
      this.form2.zdlj = e.detail.value;
      this.zdljIndex = -1;
    },
    validateJbsj: function validateJbsj() {
      if (!this.form2.jbsj) {
        this.jbsjError = '搅拌时间为必填项';
      } else {
        this.jbsjError = '';
      }
    },
    validatePositiveNumber: function validatePositiveNumber(field) {
      var fieldMap = {
        ds: '大石',
        zs1: '中石1',
        zs2: '中石2',
        xs: '小石',
        s1: '砂1',
        s2: '砂2',
        b: '冰',
        sn1: '水泥1',
        sn2: '水泥2',
        fmh1: '粉煤灰1',
        fmh2: '粉煤灰2',
        s: '水',
        wjj1: '外加剂1',
        wjj2: '外加剂2',
        wjj3: '外加剂3',
        rl: '容量'
      };
      var value = this.form2[field];
      if (isNaN(value) || value < 0) {
        this.form2["".concat(field, "Error")] = "".concat(fieldMap[field], " \u9700\u8F93\u5165\u5927\u4E8E\u96F6\u7684\u6570\u5B57");
        this.form2[field] = 0;
      } else {
        this.form2["".concat(field, "Error")] = '';
      }
    },
    filterNonNumeric: function filterNonNumeric(e, field) {
      var inputValue = e.detail.value;
      var validValue = inputValue.replace(/[^0-9.]/g, '');

      // 处理连续多个小数点的情况
      while (validValue.includes('..')) {
        validValue = validValue.replace('..', '.');
      }

      // 处理开头为小数点的情况
      if (validValue.startsWith('.')) {
        validValue = '0' + validValue;
      }

      // 处理结尾为小数点的情况
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
      this.jisuan();
    },
    jisuan: function jisuan() {
      this.form2.rl = Number(this.form2.ds) + Number(this.form2.zs1) + Number(this.form2.zs2) + Number(this.form2.xs) + Number(this.form2.s1) + Number(this.form2.s2) + Number(this.form2.b) + Number(this.form2.sn1) + Number(this.form2.sn2) + Number(this.form2.fmh1) + Number(this.form2.fmh2) + Number(this.form2.s) + Number(this.form2.wjj1) + Number(this.form2.wjj2) + Number(this.form2.wjj3);
      this.form2.rl = this.form2.rl.toFixed(2);
    },
    save: function save() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var res;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.validateJbsj();
                _this2.validatePositiveNumber('ds');
                _this2.validatePositiveNumber('zs1');
                _this2.validatePositiveNumber('zs2');
                _this2.validatePositiveNumber('xs');
                _this2.validatePositiveNumber('s1');
                _this2.validatePositiveNumber('s2');
                _this2.validatePositiveNumber('b');
                _this2.validatePositiveNumber('sn1');
                _this2.validatePositiveNumber('sn2');
                _this2.validatePositiveNumber('fmh1');
                _this2.validatePositiveNumber('fmh2');
                _this2.validatePositiveNumber('s');
                _this2.validatePositiveNumber('wjj1');
                _this2.validatePositiveNumber('wjj2');
                _this2.validatePositiveNumber('wjj3');
                _this2.validatePositiveNumber('rl');
                if (!(_this2.jbsjError || _this2.form2.dsError || _this2.form2.zs1Error || _this2.form2.zs2Error || _this2.form2.xsError || _this2.form2.s1Error || _this2.form2.s2Error || _this2.form2.bError || _this2.form2.sn1Error || _this2.form2.sn2Error || _this2.form2.fmh1Error || _this2.form2.fmh2Error || _this2.form2.sError || _this2.form2.wjj1Error || _this2.form2.wjj2Error || _this2.form2.wjj3Error || _this2.form2.rlError)) {
                  _context2.next = 19;
                  break;
                }
                return _context2.abrupt("return");
              case 19:
                _context2.prev = 19;
                _context2.next = 22;
                return (0, _api.ratioSave)({
                  id: _this2.form2.id,
                  pbbh: _this2.form2.pbbh,
                  sgbw: _this2.form2.sgbw,
                  hntzl: _this2.form2.hntzl,
                  ghrq: _this2.form2.ghrq,
                  planDate: _this2.form2.planDate,
                  zdlj: _this2.form2.zdlj,
                  hntjp: _this2.form2.hntjp,
                  jbsj: _this2.form2.jbsj,
                  tld: _this2.form2.tld,
                  ds: _this2.form2.ds,
                  remainConcreteQuantity: _this2.form2.remainConcreteQuantity,
                  zs1: _this2.form2.zs1,
                  qddj: _this2.form2.qddj,
                  bz: _this2.form2.bz,
                  phbsfsh: '0',
                  pumpingType: _this2.form2.pumpingType,
                  pumpingParams: _this2.form2.pumpingParams,
                  zs2: _this2.form2.zs2,
                  invoiceDate: _this2.form2.invoiceDate,
                  invoicePerson: _this2.form2.invoicePerson,
                  taskSheetStatus: _this2.form2.taskSheetStatus,
                  pumpingMachine: _this2.form2.pumpingMachine,
                  pumpingPipe: _this2.form2.pumpingPipe,
                  expansionType: _this2.form2.expansionType,
                  xs: _this2.form2.xs,
                  s1: _this2.form2.s1,
                  s2: _this2.form2.s2,
                  b: _this2.form2.b,
                  sn1: _this2.form2.sn1,
                  sn2: _this2.form2.sn2,
                  fmh1: _this2.form2.fmh1,
                  fmh2: _this2.form2.fmh2,
                  s: _this2.form2.s,
                  wjj1: _this2.form2.wjj1,
                  wjj2: _this2.form2.wjj2,
                  wjj3: _this2.form2.wjj3,
                  rl: _this2.form2.rl
                });
              case 22:
                res = _context2.sent;
                console.log('res', res);
                if (res.success) {
                  uni.showToast({
                    title: '修改成功'
                  });
                  setTimeout(function () {
                    uni.redirectTo({
                      url: '/pages/sdpage/jbpbd/index'
                    });
                  }, 500);
                } else {
                  uni.showToast({
                    title: res.errorMsg,
                    icon: "error"
                  });
                }
                _context2.next = 30;
                break;
              case 27:
                _context2.prev = 27;
                _context2.t0 = _context2["catch"](19);
                uni.showToast({
                  title: '修改失败'
                });
              case 30:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[19, 27]]);
      }))();
    },
    bindDateChange: function bindDateChange(e) {
      this.form2.ghrq = e.detail.value;
      console.log('ghrqghrqghrq', this.form2.ghrq);
    },
    bindDateChange2: function bindDateChange2(e) {
      this.form2.planDate = e.detail.value;
    },
    bindPickerChange3: function bindPickerChange3(e) {
      this.form2.jzfs = e.detail.value;
      this.form2.pumpingType = this.form2.pickerRange[this.form2.jzfs];
    },
    returnList: function returnList() {
      console.log('返回任务单列表');
      uni.redirectTo({
        url: '/pages/sdpage/jbpbd/index'
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 122:
/*!*******************************************************************************************************************************************!*\
  !*** C:/erp/jhapp/code-123-20240706132934/pages/sdpage/jbpbd/LaboratoryEdit.vue?vue&type=style&index=0&id=1de58ad0&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LaboratoryEdit_vue_vue_type_style_index_0_id_1de58ad0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./LaboratoryEdit.vue?vue&type=style&index=0&id=1de58ad0&scoped=true&lang=css& */ 123);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LaboratoryEdit_vue_vue_type_style_index_0_id_1de58ad0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LaboratoryEdit_vue_vue_type_style_index_0_id_1de58ad0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LaboratoryEdit_vue_vue_type_style_index_0_id_1de58ad0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LaboratoryEdit_vue_vue_type_style_index_0_id_1de58ad0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LaboratoryEdit_vue_vue_type_style_index_0_id_1de58ad0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 123:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/erp/jhapp/code-123-20240706132934/pages/sdpage/jbpbd/LaboratoryEdit.vue?vue&type=style&index=0&id=1de58ad0&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[116,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/sdpage/jbpbd/LaboratoryEdit.js.map