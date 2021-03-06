/*
 * File: app/view/AuthorStatusPanelViewController.js
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

Ext.define('CallCenterApp.view.AuthorStatusPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authorstatuspanel',

    onAuthorStatusGridPanelCellContextMenu: function (tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var targetDel = "/action/author/delete.do";
        var storeId = 'AuthorStatusStore';
        var refreshUrl = "/action/author/list.do?system=ytadmin@7788";
        var rightMenu = new CallCenterApp.view.RightClickMenu({
            record: record,
            targetDel: targetDel,
            storeId: storeId,
            refreshUrl: refreshUrl
        });
        e.preventDefault();
        //定位。显示 右键菜单
        rightMenu.showAt(e.getXY());
    },

    onAuthorStatusGridPanelSelect: function (rowmodel, record, index, eOpts) {
        var record = record.data;
        AuthorStatusPropertyPanel = Ext.getCmp('AuthorStatusPropertyPanel');
        AuthorStatusPropertyPanel.setSource({

            f_name: record.f_name,
            f_phone: record.f_phone,
            f_idcard: record.f_idcard,
            f_plate_number: record.f_plate_number,
            f_insuer: record.f_insuer,
            insuerDate: record.insuerDate,
            reportDate: record.reportDate,
            f_beneficiary: record.f_beneficiary,
            f_settlemoney: (record.f_settlemoney === undefined) ? undefined : record.f_settlemoney + '元',
            f_receivetype: (record.f_receivetype === 1) ? '纸质' : '电子档',
            f_receiveAddress: record.receiveAddress,
            f_source: record.f_source,
            f_desc: record.f_desc


        }, {
            f_name: {
                displayName: '姓名'
            },
            f_phone: {
                displayName: '电话号码'
            },
            f_idcard: {
                displayName: '身份证'
            },
            f_plate_number: {
                displayName: '车牌号'
            },
            f_insuer: {
                displayName: '保险商'
            },
            insuerDate: {
                displayName: '出险日期'
            },
            reportDate: {
                displayName: '报案日期'
            },
            f_beneficiary: {
                displayName: '第一受益人',
            },
            f_settlemoney: {
                displayName: '理赔金额',
            },
            f_receivetype: {
                displayName: '领取方式',
            },
            f_receiveAddress: {
                displayName: '领取地址',
            },
            f_source: {
                displayName: '来源',
            },
            f_desc: {
                displayName: '备注',
            },
        });
    },

    onMypagingtoolbar2Change: function (pagingtoolbar, pageData, eOpts) {
        var AuthorStatusStore = Ext.getStore('AuthorStatusStore');
        var records = AuthorStatusStore.getModifiedRecords().slice(0);
        if (records.length > 0) {
            //return;
            //       Ext.MessageBox.confirm('请确认', '当前页面有未保存数据，您确认转向下一页？', function(btn){
            //           if(btn==='no'){
            //              return;
            //           }
            //       });

        }
    },

    onRefreshbuttonClick: function (button, e, eOpts) {
        var AuthorStatusStore = Ext.getStore('AuthorStatusStore');
        AuthorStatusStore.removeAll();
        var ajaxProxy = AuthorStatusStore.getProxy();
        var url = Ext.getStore('ConfigStore').getAt(0).get('WebServerUrl');
        ajaxProxy.setUrl(url + "/action/author/list.do?system=ytadmin@7788");
        AuthorStatusStore.load();
    },

    onExportButtonClick: function (button, e, eOpts) {
        var AuthoriStatusStore = Ext.getStore('AuthorStatusStore');
        var page = AuthoriStatusStore.currentPage;
        var pageSize = AuthoriStatusStore.getPageSize();
        var start = (page - 1) * pageSize;
        var url = Ext.getStore('ConfigStore').getAt(0).get('WebServerUrl');
        window.location = url + '/action/author/export.do?system=ytadmin@7788&source=&start=' + start + '&count=' + pageSize;
    },

    onSaveButtonClick: function (button, e, eOpts) {

        var url = Ext.getStore('ConfigStore').getAt(0).get('WebServerUrl');
        var AuthorStatusStore = Ext.getStore('AuthorStatusStore');
        var records = AuthorStatusStore.getModifiedRecords().slice(0);
        if (records.length < 1) {
            return;
        }
        Ext.MessageBox.confirm('请确认', '您确认修改吗？', function (btn) {
            if (btn === 'no') {
                return;
            } else if (btn === 'yes') {

                var jsonArray = [];
                Ext.each(records, function (item) {
                    var f_scid = item.data.f_scid;
                    var f_settlemoney = item.data.settleMoney;
                    var f_desc = item.data.f_desc;
                    jsonArray.push({
                        f_scid: f_scid,
                        f_settlemoney: f_settlemoney,
                        f_desc: f_desc
                    });
                });
                Ext.Ajax.request({

                    url: url + "/action/author/update.do",
                    params: {
                        modifyStr: JSON.stringify(jsonArray),
                    },

                    success: function (response) {
                        var text = response.responseText;
                        var result = JSON.parse(text);

                        if (result === null) {
                            Ext.Msg.alert('提示', '保存出错了，结果：' + result);
                            return;
                        }

                        if (result[0].succeed) {

                            alert('保存成功');
                            /**保存成功后刷新当前页面数据***********刷新Store***************/
                            var AuthorStatusStore = Ext.getStore('AuthorStatusStore');
                            var ajaxProxy = AuthorStatusStore.getProxy();
                            var url = Ext.getStore('ConfigStore').getAt(0).get('WebServerUrl');
                            ajaxProxy.setUrl(url + "/action/author/list.do?system=ytadmin@7788");
                            AuthorStatusStore.load();
                            /**保存成功后刷新当前页面**************************/

                        } else {
                            Ext.Msg.alert('提示', '保存出错了，错误：' + result.ptError);
                            return;
                        }
                    },

                    failure: function () {
                        Ext.Msg.alert('提示', '失败');
                    },
                });

            }
        });
    },

    onAuthorStatusPanelRender: function (component, eOpts) {
        this.onRefreshbuttonClick(null, null, null);
    }

});
