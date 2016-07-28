/*
 * File: app/view/ColumnManagePanel.js
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

Ext.define('CallCenterApp.view.ColumnManagePanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.columnmanagepanel',

    requires: [
        'CallCenterApp.view.ColumnManagePanelViewModel',
        'CallCenterApp.view.ColumnManagePanelViewController',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.form.field.ComboBox',
        'Ext.form.field.TextArea',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Action',
        'Ext.grid.View'
    ],

    controller: 'columnmanagepanel',
    viewModel: {
        type: 'columnmanagepanel'
    },
    id: 'ColumnManagePanel',
    itemId: 'ColumnManagePanel',
    closable: true,
    title: '栏目管理',

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    itemId: 'addButton',
                    text: '添加',
                    listeners: {
                        click: 'onAddButtonClick'
                    }
                },
                {
                    xtype: 'button',
                    itemId: 'resetButton',
                    text: '重置',
                    listeners: {
                        click: 'onResetButtonClick'
                    }
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'container',
            height: 265,
            maxHeight: 265,
            maxWidth: 650,
            minHeight: 265,
            minWidth: 650,
            width: 650,
            layout: 'column',
            items: [
                {
                    xtype: 'textfield',
                    itemId: 'nameField',
                    margin: '10 1000 10 10',
                    width: 300,
                    fieldLabel: '栏目名称',
                    labelAlign: 'right',
                    labelWidth: 80
                },
                {
                    xtype: 'combobox',
                    itemId: 'pitemIdField',
                    margin: 10,
                    width: 300,
                    fieldLabel: '父栏目名称',
                    labelAlign: 'right',
                    labelWidth: 80,
                    editable: false,
                    store: 'ColumnManageStore'
                },
                {
                    xtype: 'textfield',
                    itemId: 'statusField',
                    margin: 10,
                    width: 300,
                    fieldLabel: '栏目状态',
                    labelAlign: 'right',
                    labelWidth: 80
                },
                {
                    xtype: 'textfield',
                    itemId: 'orderField',
                    margin: 10,
                    width: 300,
                    fieldLabel: '排序',
                    labelAlign: 'right',
                    labelWidth: 80
                },
                {
                    xtype: 'textfield',
                    itemId: 'stIdField',
                    margin: 10,
                    width: 300,
                    fieldLabel: '系统编号',
                    labelAlign: 'right',
                    labelWidth: 80
                },
                {
                    xtype: 'textfield',
                    itemId: 'icoField',
                    margin: 10,
                    width: 300,
                    fieldLabel: '图标',
                    labelAlign: 'right',
                    labelWidth: 80
                },
                {
                    xtype: 'textfield',
                    itemId: 'itemCodeField',
                    margin: 10,
                    width: 300,
                    fieldLabel: '栏目编码',
                    labelAlign: 'right',
                    labelWidth: 80
                },
                {
                    xtype: 'textareafield',
                    itemId: 'descField',
                    margin: 10,
                    width: 620,
                    fieldLabel: '栏目描述',
                    labelAlign: 'right',
                    labelWidth: 80
                }
            ]
        },
        {
            xtype: 'gridpanel',
            autoScroll: true,
            itemId: 'ColumnManageGridPanel',
            title: '栏目详情预览',
            store: 'ColumnManageStore',
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 48,
                    align: 'center',
                    text: '序号'
                },
                {
                    xtype: 'gridcolumn',
                    width: 80,
                    dataIndex: 'f_itemid',
                    text: '栏目序号'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'f_name',
                    text: '栏目名称'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'f_pitemid',
                    text: '父栏目名称'
                },
                {
                    xtype: 'gridcolumn',
                    width: 80,
                    dataIndex: 'f_status',
                    text: '栏目状态'
                },
                {
                    xtype: 'gridcolumn',
                    width: 60,
                    align: 'center',
                    dataIndex: 'f_order',
                    text: '排序'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'f_stid',
                    text: '系统编号'
                },
                {
                    xtype: 'gridcolumn',
                    width: 83,
                    dataIndex: 'f_ico',
                    text: '图标'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'f_itemcode',
                    text: '栏目编码'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'f_desc',
                    text: '栏目描述'
                },
                {
                    xtype: 'actioncolumn',
                    text: '操作',
                    items: [
                        {
                            handler: function (view, rowIndex, colIndex, item, e, record, row) {
                                Ext.MessageBox.confirm('请确认', '您确认删除该条记录吗？', function (btn) {

                                    if (btn === 'no') {
                                        return;
                                    } else if (btn === 'yes') {

                                        var f_itemid = record.data.f_itemid;
                                        var url = Ext.getStore('ConfigStore').getAt(0).get('WebServerUrl');
                                        Ext.Ajax.request({
                                            url: url + "________--------__________",
                                            params: {
                                                f_itemid: f_itemid
                                            },

                                            success: function (response) {
                                                var text = response.responseText;
                                                var result = JSON.parse(text);

                                                if (result === null) {
                                                    Ext.Msg.alert('提示', '删除出错了，结果：' + result);
                                                    return;
                                                } else if (result.succeed) {
                                                    view.store.reload();
                                                    Ext.Msg.alert('提示', '删除成功');
                                                } else {
                                                    Ext.Msg.alert('提示', '删除出错了，错误：' + result.ptError);
                                                    return;
                                                }
                                            },

                                            failure: function () {
                                                Ext.Msg.alert('提示', '删除失败');

                                            },
                                        });

                                    }
                                });
                            },
                            altText: '是否删除',
                            iconCls: 'Bulletcross',
                            tooltip: '删除'
                        }
                    ]
                }
            ],
            listeners: {
                rowdblclick: 'onColumnManageGridPanelRowDblClick'
            }
        }
    ],
    listeners: {
        render: 'onColumnManagePanelRender'
    }

});