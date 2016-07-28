/*
 * File: app/view/EticketGivePanel.js
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

Ext.define('CallCenterApp.view.EticketGivePanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.eticketgivepanel',

    requires: [
        'CallCenterApp.view.EticketGivePanelViewModel',
        'CallCenterApp.view.EticketGivePanelViewController',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.grid.View',
        'Ext.selection.CheckboxModel',
        'Ext.form.field.Text',
        'Ext.grid.column.Date',
        'Ext.grid.plugin.CellEditing'
    ],

    controller: 'eticketgivepanel',
    viewModel: {
        type: 'eticketgivepanel'
    },
    height: 567,
    id: 'EticketGivePanel',
    itemId: 'EticketGivePanel',
    width: 750,
    layout: 'border',
    closable: true,
    title: '电子券赠送',

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    itemId: 'EticketGiveButton',
                    width: 52,
                    text: '赠送',
                    listeners: {
                        click: 'onEticketGiveButtonClick'
                    }
                },
                {
                    xtype: 'button',
                    itemId: 'SetSaveButton',
                    text: '设置保存',
                    listeners: {
                        click: 'onSetSaveButtonClick'
                    }
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'container',
            flex: 2,
            region: 'center',
            itemId: 'EticketInfoContainer',
            layout: 'border',
            items: [
                {
                    xtype: 'gridpanel',
                    flex: 12,
                    region: 'center',
                    split: false,
                    autoScroll: true,
                    frame: true,
                    id: 'EticketInfoGridPanel',
                    itemId: 'EticketInfoGridPanel',
                    title: '可用优惠券列表',
                    columnLines: true,
                    store: 'EticketManagerStore',
                    columns: [
                        {
                            xtype: 'rownumberer',
                            width: 66,
                            dataIndex: 'string',
                            text: '序号'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 129,
                            dataIndex: 'f_name',
                            text: '优惠券名称'
                        },
                        {
                            xtype: 'gridcolumn',
                            hidden: true,
                            dataIndex: 'f_id',
                            text: '优惠券编号'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'f_prenum',
                            text: '数量(个)'
                        },
                        {
                            xtype: 'numbercolumn',
                            align: 'center',
                            dataIndex: 'f_money',
                            text: '金额(元)'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 228,
                            align: 'center',
                            dataIndex: 'f_details',
                            text: '详情'
                        }
                    ],
                    selModel: {
                        selType: 'checkboxmodel',
                        allowDeselect: true,
                        mode: 'SIMPLE',
                        showHeaderCheckbox: true
                    },
                    listeners: {
                        render: 'onEticketInfoGridPanelRender',
                        select: 'onEticketInfoGridPanelSelect'
                    }
                },
                {
                    xtype: 'gridpanel',
                    flex: 4,
                    region: 'east',
                    split: true,
                    frame: true,
                    id: 'AutoRuleGridPanel',
                    itemId: 'AutoRuleGridPanel',
                    width: 150,
                    animCollapse: true,
                    bodyBorder: true,
                    collapsible: true,
                    title: '自动赠送规则',
                    titleCollapse: true,
                    allowDeselect: true,
                    columnLines: true,
                    store: 'EticketRuleStore',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'f_arid',
                            text: '规则编号'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'f_name',
                            text: '规则名称'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'f_desc',
                            text: '规则描述'
                        }
                    ],
                    listeners: {
                        render: 'onAutoRuleGridPanelRend'
                    },
                    selModel: {
                        selType: 'checkboxmodel',
                        allowDeselect: true,
                        mode: 'SIMPLE',
                        showHeaderCheckbox: true
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            flex: 1.5,
            region: 'south',
            height: 150,
            id: 'EticketMemberPanel',
            itemId: 'EticketMemberPanel',
            layout: 'fit',
            title: '客户信息',
            titleCollapse: false,
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'textfield',
                            id: 'phoneField',
                            itemId: 'phoneField',
                            width: 203,
                            fieldLabel: '电话号码',
                            labelWidth: 70
                        },
                        {
                            xtype: 'button',
                            itemId: 'memberSelectBtn',
                            width: 64,
                            text: '查询',
                            listeners: {
                                click: 'onMemberSelectBtnClick'
                            }
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'gridpanel',
                    height: 234,
                    itemId: 'EticketMemberGridpanel',
                    allowDeselect: true,
                    columnLines: true,
                    store: 'PtCustomerInfoStore',
                    columns: [
                        {
                            xtype: 'rownumberer',
                            width: 78,
                            align: 'center',
                            dataIndex: 'string',
                            text: '序号'
                        },
                        {
                            xtype: 'gridcolumn',
                            align: 'center',
                            dataIndex: 'f_name',
                            text: '客户姓名'
                        },
                        {
                            xtype: 'gridcolumn',
                            frame: true,
                            enableFocusableContainer: true,
                            dataIndex: 'f_phone',
                            text: '客户电话',
                            editor: {
                                xtype: 'textfield',
                                itemId: 'memberPhoneEditor',
                                enforceMaxLength: false,
                                maxLength: 11,
                                maxLengthText: '手机号码为11位',
                                selectOnFocus: true
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'f_sex',
                            text: '性别'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 138,
                            dataIndex: 'f_address',
                            text: '地址'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 175,
                            dataIndex: 'f_ciid',
                            text: '客户ID'
                        },
                        {
                            xtype: 'datecolumn',
                            dataIndex: 'f_initdate',
                            text: '创建时间',
                            format: 'Y-m-d H:i:s'
                        }
                    ],
                    listeners: {
                        render: 'onEticketMemberGridpanelRender'
                    },
                    selModel: {
                        selType: 'checkboxmodel',
                        allowDeselect: true,
                        mode: 'SIMPLE'
                    },
                    plugins: [
                        {
                            ptype: 'cellediting',
                            clicksToEdit: 1
                        }
                    ]
                }
            ]
        }
    ]

});