/*
 * @Author: luo xi
 * @Date: 2022-04-30 22:39:34
 * @LastEditTime: 2022-12-29 21:32:08
 * @LastEditors: luo xi
 * @Description:
 * @FilePath: /KeepCoding/pnpmvue/packages/components/timeFlip/src/timeFlip.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const flipProps = {
  count: {
    type: Number,
  },
  maxCount:{
    type: Number,
  },
  isTopFlip:{
    type: Boolean,
    default: true,
  }
};

const timeProps = {};
export { timeProps };
export default flipProps;
