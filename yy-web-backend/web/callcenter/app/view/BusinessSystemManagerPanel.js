/*
 * File: app/view/BusinessSystemManagerPanel.js
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

Ext.define('CallCenterApp.view.BusinessSystemManagerPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.businessSystemManagerPanel',

    requires: [
        'CallCenterApp.view.BusinessSystemManagerPanelViewModel',
        'CallCenterApp.view.BusinessSystemManagerPanelViewController',
        'Ext.button.Button',
        'Ext.form.field.ComboBox',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.View',
        'Ext.toolbar.Paging'
    ],

    controller: 'businesssystemmanagerpanel',
    viewModel: {
        type: 'businesssystemmanagerpanel'
    },
    height: 590,
    id: 'BusinessSystemManagerPanel',
    itemId: 'BusinessSystemManagerPanel',
    closable: true,
    title: '业务系统管理',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    itemId: 'addButton',
                    width: 74,
                    text: '添加',
                    listeners: {
                        click: 'onAddButtonClick'
                    }
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'container',
            height: 149,
            items: [
                {
                    xtype: 'textfield',
                    itemId: 'systemNameField',
                    margin: 10,
                    width: 300,
                    fieldLabel: '系统名字',
                    labelAlign: 'right'
                },
                {
                    xtype: 'combobox',
                    itemId: 'fatherSystemField',
                    margin: 10,
                    width: 300,
                    fieldLabel: '父系统',
                    labelAlign: 'right',
                    editable: false,
                    displayField: 'f_stname',
                    store: 'BusinessSystemManagerStore',
                    valueField: 'f_stid'
                },
                {
                    xtype: 'textfield',
                    itemId: 'authorizationSystemField',
                    margin: 10,
                    width: 300,
                    fieldLabel: '可授权系统',
                    labelAlign: 'right'
                },
                {
                    xtype: 'textfield',
                    itemId: 'defaultUrlField',
                    margin: 10,
                    width: 300,
                    fieldLabel: '系统默认url',
                    labelAlign: 'right'
                }
            ]
        },
        {
            xtype: 'gridpanel',
            flex: 2,
            height: 'auto',
            itemId: 'BusinessSystemManagerGridPanel',
            title: '业务系统预览',
            columnLines: true,
            store: 'BusinessSystemManagerStore',
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'textfield',
                            itemId: 'selectField',
                            width: 200,
                            fieldLabel: '查找',
                            labelAlign: 'right',
                            labelWidth: 50
                        },
                        {
                            xtype: 'combobox',
                            itemId: 'selectComblBox',
                            width: 150,
                            fieldLabel: '',
                            labelWidth: 0,
                            editable: false,
                            displayField: 'f_stname',
                            store: 'BusinessSystemManagerStore',
                            valueField: 'f_stid'
                        },
                        {
                            xtype: 'button',
                            id: 'selectButton',
                            text: '搜索'
                        },
                        {
                            xtype: 'button',
                            itemId: 'resetButton',
                            text: '重置'
                        }
                    ]
                },
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    afterPageText: '页  共{0}页',
                    beforePageText: '第',
                    displayInfo: true,
                    displayMsg: '当前显示记录: {0} - {1} 共计: {2}',
                    emptyMsg: '没有记录',
                    firstText: '第一页',
                    lastText: '最后一页',
                    nextText: '下一页',
                    prependButtons: true,
                    prevText: '上一页',
                    refreshText: '刷新'
                }
            ],
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 48,
                    align: 'center',
                    dataIndex: 'String',
                    text: '序号'
                },
                {
                    xtype: 'gridcolumn',
                    align: 'center',
                    dataIndex: 'f_stid',
                    text: '系统编码'
                },
                {
                    xtype: 'gridcolumn',
                    align: 'center',
                    dataIndex: 'f_stname',
                    text: '系统名称'
                },
                {
                    xtype: 'gridcolumn',
                    align: 'center',
                    dataIndex: 'f_pstid',
                    text: '父系统'
                },
                {
                    xtype: 'gridcolumn',
                    align: 'center',
                    dataIndex: 'f_accredit',
                    text: '可授权系统'
                },
                {
                    xtype: 'gridcolumn',
                    align: 'center',
                    dataIndex: 'f_url',
                    text: '系统默认url'
                }
            ],
            listeners: {
                rowdblclick: 'onBusinessSystemManagerGridPanelRowDblClick'
            }
        }
    ],
    listeners: {
        beforerender: 'onBusinessSystemManagerPanelBeforeRender'
    }

});