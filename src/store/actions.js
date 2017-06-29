/**
 * @method dispatchData 封装的发送commit 的函数
 */
import * as dialogAction from 'store/actions/dialog.action'
import * as userInfoAction from 'store/actions/userInfo.action'

let actions = Object.assign({}, dialogAction, userInfoAction)

export default actions
