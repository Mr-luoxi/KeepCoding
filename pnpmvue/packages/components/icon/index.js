/*
 * @Author: luo xi
 * @Date: 2022-04-30 22:40:43
 * @LastEditTime: 2022-05-30 20:58:49
 * @LastEditors: luoxi
 * @Description:
 * @FilePath: /pnpmvue/packages/components/icon/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { install } from "@iep-plus/utils/install";
import Icon from "./src/icon.vue";

const iepIcon = install(Icon);
export { iepIcon };
export default iepIcon;
