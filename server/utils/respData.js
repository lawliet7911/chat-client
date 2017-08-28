/**
 * 
 * 
 * @param {object} data 返回值
 * @param {number} code 状态码
 * @param {boolean} [success=false] 查询成功失败状态
 * @param {string} [message=null] 返回消息
 * @param {boolean} [isSingle=false] 
 * @returns 
 */
module.exports = (
  data,
  code,
  success = false,
  message = null,
  isSingle = false
) => {
  let respData = data;
  if (isSingle) {
    respData = data[0] || [];
  }
  return {
    data: respData,
    code: code,
    message: message,
    success: success
  };
};
