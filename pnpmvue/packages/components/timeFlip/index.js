/*
 * @Author: luo xi
 * @Date: 2022-04-30 22:40:43
 * @LastEditTime: 2022-11-30 21:43:19
 * @LastEditors: luo xi
 * @Description:
 * @FilePath: /KeepCoding/pnpmvue/packages/components/timeFlip/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { install } from "@iep-plus/utils/install";
import flip from "./src/timeFlip.vue";

const timeFlip = install(flip);
export { timeFlip };
export default timeFlip;
