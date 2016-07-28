/*
 * File: app/view/InsStatusPanelViewController.js
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

Ext.define('CallCenterApp.view.InsStatusPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.insstatuspanel',

    onInsStatusGridpanelCellContextMenu: function (tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var targetDel = "/action/ins/delete.do";
        var storeId = 'InsStatusStore';
        var refreshUrl = "/action/ins/list.do?system=ytadmin@7788";
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

    onInsStatusGridpanelSelectionChange: function (model, selected, eOpts) {
        if (selected.length < 1) {
            return;
        }
        var record = selected[0].data;

        var InsStatusPropertyGridPanel = Ext.getCmp('InsStatusPropertyGridPanel');

        /**指定专修判断*/
        var f_repairdepot = record.f_repairdepot;
        if (f_repairdepot === 0) {
            f_repairdepot = '不购买';
        } else if (f_repairdepot === 1) {
            f_repairdepot = '国产';
        } else {
            f_repairdepot = '进口';
        }
        /**出单日期处理*/
        var f_effecttime = (record.f_effecttime === undefined) ? undefined : new Date(record.f_effecttime * 1000);
        /**初登日期**/
        var f_vehicleregister = (record.f_vehicleregister === undefined) ? undefined : new Date(record.f_vehicleregister * 1000);
        InsStatusPropertyGridPanel.setSource({
            f_name: record.f_name,
            f_phone: record.f_phone,
            f_idcard: record.f_idcard,
            f_platenum: record.f_platenum,
            f_engineno: record.f_engineno,
            f_source: record.f_source,
            f_sourcename: record.f_sourcename,
            status: record.status,
            f_desc: record.f_desc,
            appletime: record.appletime,
            f_system: record.f_system,
            f_insurer: record.f_insurer,
            f_safepackage: record.f_safepackage,
            f_effecttime: f_effecttime,
            f_vehicleregister: f_vehicleregister,
            f_vname: record.f_vname,
            f_cdw: (record.f_cdw == 1) ? '是' : '否',
            f_tpli: (record.f_tpli === undefined) ? undefined : record.f_tpli + '万',
            f_dsi: (record.f_dsi === 0 || record.f_dsi === undefined) ? '不购买' : record.f_dsi + '万/人',
            f_psi: (record.f_psi === 0 || record.f_psi === undefined) ? '不购买' : record.f_psi + '万/人',
            f_theftinsure: (record.f_theftinsure === 1) ? '是' : '否',
            f_domesticglass: (record.f_domesticglass === 1) ? '是' : '否',
            f_importglass: (record.f_importglass === 1) ? '是' : '否',
            f_repairdepot: f_repairdepot,
            f_abatement: (record.f_abatement == 1) ? '是' : '否',
            f_contactshop: (record.f_contactshop === true) ? '是' : '否',
            f_shopphone: record.f_shopphone
        }, {
            f_name: {
                displayName: '姓名',
            },
            f_phone: {
                displayName: '手机号码',
            },
            f_idcard: {
                displayName: '身份证',
            },
            f_platenum: {
                displayName: '车牌号',
            },
            f_engineno: {
                displayName: '发动机号',
            },
            f_source: {
                displayName: '来源',
            },
            f_sourcename: {
                displayName: '来源名称',
            },
            status: {
                displayName: '状态',
            },
            f_desc: {
                displayName: '备注',
            },
            appletime: {
                displayName: '提交时间',
            },
            f_system: {
                displayName: '系统时间',
            },
            f_insurer: {
                displayName: '保险公司',
            },
            f_safepackage: {
                displayName: '保险套餐',
            },
            f_effecttime: {
                displayName: '出单日期',
            },
            f_vehicleregister: {
                displayName: '初登日期',
            },
            f_vname: {
                displayName: '车辆型号',
            },
            f_cdw: {
                displayName: '车损险',
            },
            f_tpli: {
                displayName: '三责险',
            },
            f_dsi: {
                displayName: '司机座位险',
            },
            f_psi: {
                displayName: '乘客座位险',
            },
            f_theftinsure: {
                displayName: '盗抢险',
            },
            f_domesticglass: {
                displayName: '玻璃险(国产)',
            },
            f_importglass: {
                displayName: '玻璃险(进口)',
            },
            f_repairdepot: {
                displayName: '指定专修',
            },
            f_abatement: {
                displayName: '不计免赔',
            },
            f_contactshop: {
                displayName: '是否联系店主',
            },
            f_shopphone: {
                displayName: '店主电话',
            }

        });
    },

    onRefreshBtnClick: function (button, e, eOpts) {
        var insStatusStore = Ext.getStore('InsStatusStore');
        var ajaxProxy = insStatusStore.getProxy();
        var url = Ext.getStore('ConfigStore').getAt(0).get('WebServerUrl');
        ajaxProxy.setUrl(url + "/action/ins/list.do?system=ytadmin@7788");
        insStatusStore.load();
    },

    onExportBtnClick: function (button, e, eOpts) {
        var page = Ext.getStore('InsStatusStore').currentPage;
        var pageSize = Ext.getStore('InsStatusStore').getPageSize();
        var start = (page - 1) * pageSize;
        var url = Ext.getStore('ConfigStore').getAt(0).get('WebServerUrl');
        window.location = url + '/action/ins/export.do?system=ytadmin@7788&start=' + start + '&count=' + pageSize;
    },

    onSaveBtnClick: function (button, e, eOpts) {
        var insPanel = button.up('#insStatusPanel');

        var url = Ext.getStore('ConfigStore').getAt(0).get('WebServerUrl');
        var insStatusStore = Ext.getStore('InsStatusStore');
        var records = insStatusStore.getModifiedRecords().slice(0);
        if (records.length < 1) {
            return;
        }
        Ext.MessageBox.confirm('请确认', '您确认修改吗？', function (btn) {
            if (btn === 'no') {
                return;
            } else if (btn === 'yes') {

                var jsonArray = [];
                Ext.each(records, function (item) {
                    var f_isid = item.data.f_isid;
                    var f_status = item.data.f_status;
                    var f_totalfee = item.data.f_totalfee;
                    var f_desc = item.data.f_desc;
                    var f_insurancefee = item.data.f_insurancefee;
                    var f_compulsoryfee = item.data.f_compulsoryfee;
                    var f_revenue = item.data.f_revenue;
                    jsonArray.push({
                        f_isid: f_isid,
                        f_status: f_status,
                        f_totalfee: f_totalfee,
                        f_desc: f_desc,
                        f_insurancefee: f_insurancefee,
                        f_compulsoryfee: f_compulsoryfee,
                        f_revenue: f_revenue
                    });
                });
                Ext.Ajax.request({

                    url: url + "/action/ins/update.do",
                    params: {
                        status: JSON.stringify(jsonArray),
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
                            var insStatusStore = Ext.getStore('InsStatusStore');
                            var ajaxProxy = insStatusStore.getProxy();
                            var url = Ext.getStore('ConfigStore').getAt(0).get('WebServerUrl');
                            ajaxProxy.setUrl(url + "/action/ins/list.do?system=ytadmin@7788");
                            insStatusStore.load();

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

    onInsStatusPanelRender: function (component, eOpts) {
        this.onRefreshBtnClick(null, null, null);
    }

});
