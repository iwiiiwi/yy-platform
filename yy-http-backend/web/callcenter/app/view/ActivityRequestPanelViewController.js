/*
 * File: app/view/ActivityRequestPanelViewController.js
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

Ext.define('CallCenterApp.view.ActivityRequestPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.activityrequestpanel',

    onAddBtnClick: function (button, e, eOpts) {
        var activityRequestPanel = button.up('#ActivityRequestPanel');

        var startTimeFiled = activityRequestPanel.down('#startTime');
        var endTimeFiled = activityRequestPanel.down('#endTime');

        var startDateFiled = activityRequestPanel.down('#startDate');
        var endDateFiled = activityRequestPanel.down('#endDate');

        var startTime = startTimeFiled.getRawValue();
        var startdate = startDateFiled.getRawValue();
        var start = startdate + " " + startTime;
        var startTime = startTimeFiled.getRawValue();
        var startdate = startDateFiled.getRawValue();
        var start = startdate + " " + startTime;

        var startDate = Ext.Date.parse(start, "Y-m-d H:i:s", true);
        if (startDate !== null) {
            startDate = startDate.getTime() / 1000;
        } else {
            Ext.Msg.alert('提示', '开始时间不能为空!');
            return;
        }

        var endTime = endTimeFiled.getRawValue();
        var enddate = endDateFiled.getRawValue();
        var end = enddate + " " + endTime;

        var endDate = Ext.Date.parse(end, "Y-m-d H:i:s", true);
        if (endDate !== null) {
            endDate = endDate.getTime() / 1000;
        } else {
            Ext.Msg.alert('提示', '结束时间不能为空!');
            return;
        }

        if (startDate > endDate) {
            Ext.Msg.alert('提示', '结束时间不能早于开始时间!');
            return;
        }

        var title = activityRequestPanel.down('#titleField');
        var stid = activityRequestPanel.down('#systemSelector');
        var type = activityRequestPanel.down('#typeSelector');
        var content = activityRequestPanel.down('#contentField');

        var title = activityRequestPanel.down('#titleField');
        var stid = activityRequestPanel.down('#systemSelector');
        var type = activityRequestPanel.down('#typeSelector');
        var content = activityRequestPanel.down('#contentField');

        if (stid.getValue() === null || type.getValue() === null) {
            Ext.Msg.alert('提示', '请填写必要信息!');
            return;
        }

        var data = {
            'title': title.getValue(),
            'startdate': startDate,
            'enddate': endDate,
            'type': type.getValue(),
            'stid': stid.getValue(),
            'content': content.getValue()
        };

        var url = Ext.getStore('ConfigStore').getAt(0).get('OrderUrl');

        Ext.Ajax.request({
            headers: {'Content-Type': 'application/json'},
            url: url + '/biz/app/activities/add.do',
            params: JSON.stringify(data),
            success: function (response) {
                var text = response.responseText;
                var result = JSON.parse(text);
                if (result === null) {
                    Ext.Msg.alert('提示', '添加出错了，结果：' + text);
                    return;
                }

                if (result.succeed === true) {
                    Ext.getStore('ActivityStore').reload();
                    Ext.Msg.alert('提示', '添加成功');
                } else {
                    Ext.Msg.alert('提示', '添加出错了，错误：' + result.errMsg);
                }
            }
        });
    }

});
