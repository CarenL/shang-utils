/*
 * @Author: liumengting 13516809674@163.com
 * @Date: 2024-09-29 10:23:59
 * @LastEditors: liumengting 13516809674@163.com
 * @LastEditTime: 2024-09-29 10:24:15
 * @FilePath: /shang-utils/src/format.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const formatToFixed = (money, decimals = 2) => {
  return (
    Math.round(
      (parseFloat(money) + Number.EPSILON) * Math.pow(10, decimals)
    ) / Math.pow(10, decimals)
  ).toFixed(decimals);
}
const Format = {
// 格式化金额展示： 12341234.246 -> $ 12,341,234.25
formatMoney: (money, symbol = "", decimals = 2) =>
  formatToFixed(money, decimals)
    .replace(/\B(?=(\d{3})+\b)/g, ",")
    .replace(/^/, `${symbol}`),
};

export default Format;