/*
 * @Author: luoxi
 * @Date: 2023-01-14 10:29:15
 * @LastEditTime: 2023-01-14 10:52:23
 * @LastEditors: luoxi
 * @Description:
 */

const { series } = require("gulp");

// private tasks
function clean(cb) {
  console.log("clean");
  // body omitted
  cb();
}

// public tasks
function build(cb) {
  console.log("build");
  // body omitted
  cb();
}

function clean(cb) {
  // body omitted
  cb();
}

function cssTranspile(cb) {
  // body omitted
  cb();
}

function cssMinify(cb) {
  // body omitted
  cb();
}

function jsTranspile(cb) {
  // body omitted
  cb();
}

function jsBundle(cb) {
  // body omitted
  cb();
}

function jsMinify(cb) {
  // body omitted
  cb();
}

function publish(cb) {
  // body omitted
  cb();
}

exports.build = build;
exports.clean = clean;
exports.cssTranspile = cssTranspile;
exports.cssMinify = cssMinify;
exports.jsTranspile = jsTranspile;
exports.jsBundle = jsBundle;
exports.jsMinify = jsMinify;
exports.publish = publish;
// series 让任务按照顺序执行
// exports.default = series(clean, build);
