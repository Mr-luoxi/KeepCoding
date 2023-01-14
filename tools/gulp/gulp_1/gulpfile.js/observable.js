/*
 * @Author: luoxi
 * @Date: 2023-01-14 11:18:20
 * @LastEditTime: 2023-01-14 11:23:00
 * @LastEditors: luoxi
 * @Description:
 */

const { of } = require("rxjs");

function observableTask() {
  return of(1, 2, 3);
}

exports.observableTask = observableTask;
