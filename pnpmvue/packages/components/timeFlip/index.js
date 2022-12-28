/*
 * @Author: luo xi
 * @Date: 2022-04-30 22:40:43
 * @LastEditTime: 2022-12-28 22:58:01
 * @LastEditors: luo xi
 * @Description:
 * @FilePath: /KeepCoding/pnpmvue/packages/components/timeFlip/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { install } from "@iep-plus/utils/install";
import flip from "./src/timeFlip.vue";
import timeFlipBlock from "./src/time.vue";

const timeFlip = install(flip);
const timeBlock = install(timeFlipBlock);
export { timeFlip, timeBlock };
export default timeFlip;
