/*
 * File: app/view/PasswordModifyFormViewController.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('CallCenterApp.view.PasswordModifyFormViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.passwordmodifyform',

    onModifyButtonClick: function (button, e, eOpts) {
        var view = this.getView();
        var modifyform = button.up('#modifypwdform');
        values = modifyform.getValues();
        var oldPwdField = modifyform.down('#oldPwd');
        var newPwdField = modifyform.down('#newPwd');


        // Success
        var successCallback = function (resp, ops) {
            var result = JSON.parse(resp.responseText);
            if (result.flag === "0") {
                alert("修改成功");
                modifyform.reset();

            } else {

                alert("修改失败，请重试！");
            }

        };

        // Failure
        var failureCallback = function (resp, ops) {

            Ext.Msg.alert('Login Failure', resp);

        };
        /**获取PreloginStore中的data*/
        var PrelogonStore = Ext.getStore('PreloginStore');
        var extraKey = PrelogonStore.getData().items[0].data.extraKey;
        var salt = PrelogonStore.getData().items[0].data.salt;
        /**----------------------------------------------------------*/
        /**获取LoginSuccessJsonStore中的data**/
        var LoginSuccessStore = Ext.getStore('LoginSuccessJsonStore');
        var token = LoginSuccessStore.data.items[0].data.token;

        var npwd = newPwdField.getValue();
        var opwd = oldPwdField.getValue();

        var newPassword = Ext.MD5(npwd + salt);
        var oldPassword = Ext.MD5(opwd + salt);

        var url = Ext.getStore('ConfigStore').getAt(1).get('UserServerUrl');
        Ext.Ajax.request({
            url: url + "/user/pwd/modify.do",
            params: {
                oldPwd: oldPassword,
                newPwd: newPassword,
                token: token,

            },
            success: successCallback,
            failure: failureCallback
        });

    },

    onResetButtonClick: function (button, e, eOpts) {
        var modifyform = button.up('#modifypwdform');
        modifyform.reset();
    }

});