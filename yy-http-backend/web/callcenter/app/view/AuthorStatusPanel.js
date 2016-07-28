/*
 * File: app/view/AuthorStatusPanel.js
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

Ext.define('CallCenterApp.view.AuthorStatusPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.authorstatuspanel',

    requires: [
        'CallCenterApp.view.AuthorStatusPanelViewModel',
        'CallCenterApp.view.AuthorStatusPanelViewController',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.form.field.Number',
        'Ext.grid.View',
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.property.Grid',
        'Ext.toolbar.Paging',
        'Ext.button.Button'
    ],

    controller: 'authorstatuspanel',
    viewModel: {
        type: 'authorstatuspanel'
    },
    frame: true,
    height: 467,
    itemId: 'authorStatusPanel',
    width: 643,
    layout: 'fit',
    closable: true,
    collapsed: false,
    title: '理赔查询',

    items: [
        {
            xtype: 'container',
            itemId: 'AuthorStatusPanelContainer',
            layout: 'border',
            items: [
                {
                    xtype: 'gridpanel',
                    flex: 12,
                    region: 'center',
                    autoScroll: true,
                    itemId: 'AuthorStatusGridPanel',
                    collapsed: false,
                    title: '',
                    columnLines: true,
                    store: 'AuthorStatusStore',
                    columns: [
                        {
                            xtype: 'rownumberer',
                            width: 48,
                            align: 'center',
                            dataIndex: '',
                            text: '序号'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 79,
                            align: 'center',
                            dataIndex: 'name',
                            text: '姓名'
                        },
                        {
                            xtype: 'gridcolumn',
                            align: 'center',
                            dataIndex: 'phone',
                            text: '电话'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 181,
                            align: 'center',
                            dataIndex: 'idcard',
                            text: '身份证'
                        },
                        {
                            xtype: 'gridcolumn',
                            align: 'center',
                            dataIndex: 'plateNum',
                            text: '车牌号'
                        },
                        {
                            xtype: 'gridcolumn',
                            align: 'center',
                            dataIndex: 'insuer',
                            text: '保险商'
                        },
                        {
                            xtype: 'datecolumn',
                            align: 'center',
                            dataIndex: 'insuerDate',
                            text: '出险日期',
                            format: 'Y-m-d'
                        },
                        {
                            xtype: 'datecolumn',
                            align: 'center',
                            dataIndex: 'reportDate',
                            text: '报案日期',
                            format: 'Y-m-d'
                        },
                        {
                            xtype: 'gridcolumn',
                            align: 'center',
                            dataIndex: 'beneficiary',
                            text: '第一受益人'
                        },
                        {
                            xtype: 'numbercolumn',
                            itemId: 'authorMoney',
                            align: 'center',
                            dataIndex: 'settleMoney',
                            text: '理赔金额',
                            editor: {
                                xtype: 'numberfield',
                                itemId: 'authorMoneyEditer',
                                selectOnFocus: true,
                                minText: '最小值为0',
                                minValue: 0
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                                {
                                    if (value == 1)return '纸质'; else return '电子档';
                                }
                            },
                            align: 'center',
                            dataIndex: 'receiveType',
                            text: '领取方式'
                        },
                        {
                            xtype: 'gridcolumn',
                            align: 'center',
                            dataIndex: 'receiveAddress',
                            text: '领取地址'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'f_desc',
                            text: '备注',
                            editor: {
                                xtype: 'textfield',
                                itemId: 'descTextFieldEtitor'
                            }
                        }
                    ],
                    viewConfig: {
                        itemId: 'AuthorStatusGridView',
                        enableTextSelection: true
                    },
                    plugins: [
                        {
                            ptype: 'cellediting',
                            clicksToEdit: 1
                        }
                    ],
                    listeners: {
                        cellcontextmenu: 'onAuthorStatusGridPanelCellContextMenu',
                        select: 'onAuthorStatusGridPanelSelect'
                    }
                },
                {
                    xtype: 'propertygrid',
                    flex: 3,
                    region: 'east',
                    split: true,
                    frame: true,
                    id: 'AuthorStatusPropertyPanel',
                    itemId: 'AuthorStatusPropertyPanel',
                    width: 150,
                    collapsible: true,
                    title: '属性',
                    titleCollapse: true
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            frame: false,
            itemId: 'mypagingtoolbar2',
            width: 360,
            displayInfo: true,
            lastText: '上一页',
            nextText: '下一页',
            store: 'AuthorStatusStore',
            listeners: {
                change: 'onMypagingtoolbar2Change'
            }
        },
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    itemId: 'refreshbutton',
                    width: 74,
                    iconCls: 'Arrowrefresh',
                    text: '刷新',
                    listeners: {
                        click: 'onRefreshbuttonClick'
                    }
                },
                {
                    xtype: 'button',
                    itemId: 'exportButton',
                    width: 77,
                    iconCls: 'Applicationosxgo',
                    text: '导出',
                    listeners: {
                        click: 'onExportButtonClick'
                    }
                },
                {
                    xtype: 'button',
                    itemId: 'saveButton',
                    iconCls: 'Scriptsave',
                    text: '修改保存',
                    listeners: {
                        click: 'onSaveButtonClick'
                    }
                }
            ]
        }
    ],
    listeners: {
        render: 'onAuthorStatusPanelRender'
    }

});