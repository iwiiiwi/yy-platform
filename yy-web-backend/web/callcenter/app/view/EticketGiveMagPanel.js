/*
 * File: app/view/EticketGiveMagPanel.js
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

Ext.define('CallCenterApp.view.EticketGiveMagPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.eticketgivemagpanel',

    requires: [
        'CallCenterApp.view.EticketGiveMagPanelViewModel',
        'CallCenterApp.view.EticketGiveMagPanelViewController',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.form.field.Text',
        'Ext.grid.column.Date',
        'Ext.grid.View',
        'Ext.grid.plugin.RowEditing',
        'Ext.toolbar.Paging'
    ],

    controller: 'eticketgivemagpanel',
    viewModel: {
        type: 'eticketgivemagpanel'
    },
    height: 552,
    id: 'EticketGiveMagPanel',
    itemId: 'EticketGiveMagPanel',
    width: 660,
    layout: 'fit',
    closable: true,
    title: '优惠券赠送记录',

    items: [
        {
            xtype: 'gridpanel',
            itemId: 'EticketGiveMagGridPanel',
            title: '',
            store: 'EticketGiveMagStore',
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 55,
                    align: 'center',
                    dataIndex: 'string',
                    text: '序号'
                },
                {
                    xtype: 'gridcolumn',
                    width: 176,
                    enableFocusableContainer: true,
                    enableColumnHide: false,
                    align: 'center',
                    dataIndex: 'f_code',
                    text: '优惠券SN',
                    editor: {
                        xtype: 'textfield',
                        itemId: 'sticketsnEditor',
                        selectOnFocus: true
                    }
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    dataIndex: 'custName',
                    text: '客户姓名'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    dataIndex: 'f_ticketid',
                    text: '优惠券编码'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'f_phone',
                    text: '客户电话'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'f_orderid',
                    text: '关联订单'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                        if (value == 1) {
                            return '已绑定';
                        } else if (value == 2) {
                            return '已消费';
                        } else if (value == 3) {
                            return '已失效';
                        } else {
                            return '未知';
                        }
                    },
                    dataIndex: 'f_status',
                    text: '状态'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'f_usetime',
                    text: '使用时间',
                    format: 'Y-m-d H:i:s'
                }
            ],
            listeners: {
                render: 'onEticketGiveMagGridPanelRender'
            },
            plugins: [
                {
                    ptype: 'rowediting'
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            width: 360,
            displayInfo: true,
            store: 'EticketGiveMagStore'
        }
    ]

});