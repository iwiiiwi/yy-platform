/*
 * File: app/view/MessageTabPanelViewController.js
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

Ext.define('CallCenterApp.view.MessageTabPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.messagetabpanel',

    onPostMessageButtonClick: function (button, e, eOpts) {
        var postSingleMessagePanel = button.up('#postSingleMessagePanel');
        var phoneField = postSingleMessagePanel.down('#messagePhone');
        var contentField = postSingleMessagePanel.down('#messageContent');

        if (!phoneField.validate()) {
            Ext.Msg.alert('Status', '请正确填写手机号码信息.');
            return;
        }

        var jsonArray = [];
        jsonArray.push({mobile: phoneField.getValue(), content: contentField.getValue(),});
        var url = Ext.getStore('ConfigStore').getAt(0).get('WebServerUrl');
        Ext.Ajax.request({

            url: url + '/action/sms/submit.do',
            params: {
                phoneAndContent: JSON.stringify(jsonArray),
            },

            success: function (response) {
                //var text=Ext.util.JSON.decode(response.responseText);
                var text = response.responseText;
                var result = JSON.parse(text);


                if (result === null) {
                    Ext.Msg.alert('提示', '提交出错了，结果：' + result);
                    return;
                }

                if (result.succeed === true) {
                    Ext.Msg.alert('提示', '发送成功');
                } else {
                    Ext.Msg.alert('提示', '发送出错了，错误：' + result.ptError);
                    return;
                }

                phoneField.reset();
                contentField.reset();
            }
        });
    },

    onInputExcelFieldRender: function (component, eOpts) {
        var baseurl = Ext.getStore('ConfigStore').getAt(0).get('WebServerUrl');
        var url = baseurl + '/action/sms/upload.do';

        $('#imageFiled-button-fileInputEl').fileupload({
            url: url,
            dataType: 'json',
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
            done: function (e, data) {
                $.each(data.result.files, function (index, file) {

                    carsetImageContent.setSrc(file.url);

                });
            },
            progressall: function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                fileuploadProgressBar.setValue(progress / 100);

            }
        }).prop('disabled', !$.support.fileInput)
            .parent().addClass($.support.fileInput ? undefined : 'disabled');
    }

});
