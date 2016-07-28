/*
 * File: app/view/EtcStatusPanel.js
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

Ext.define('CallCenterApp.view.EtcStatusPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.etcstpanel',

    requires: [
        'CallCenterApp.view.EtcStatusPanelViewModel',
        'CallCenterApp.view.EtcStatusPanelViewController',
        'Ext.grid.column.RowNumberer',
        'Ext.form.field.ComboBox',
        'Ext.grid.column.Number',
        'Ext.form.field.Number',
        'Ext.view.Table',
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.property.Grid',
        'Ext.button.Button',
        'Ext.toolbar.Paging'
    ],

    controller: 'etcstatuspanel',
    viewModel: {
        type: 'etcstatuspanel'
    },
    itemId: 'etcStatusPanel',
    layout: 'fit',
    bodyPadding: 10,
    closable: true,
    title: 'ETC申请查询',

    items: [
        {
            xtype: 'container',
            id: 'EtcStatusContainer',
            itemId: 'EtcStatusContainer',
            layout: 'border',
            items: [
                {
                    xtype: 'gridpanel',
                    flex: 12,
                    region: 'center',
                    autoScroll: true,
                    frame: true,
                    id: 'EtcStatusGridPanel',
                    itemId: 'EtcStatusGridPanel',
                    header: false,
                    title: '',
                    columnLines: true,
                    store: 'EtcStatusStore',
                    columns: [
                        {
                            xtype: 'rownumberer',
                            width: 80,
                            align: 'center',
                            text: '序号'
                        },
                        {
                            xtype: 'gridcolumn',
                            align: 'center',
                            dataIndex: 'name',
                            text: '姓名'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 150,
                            align: 'center',
                            dataIndex: 'phone',
                            text: '电话'
                        },
                        {
                            xtype: 'gridcolumn',
                            autoRender: true,
                            width: 180,
                            align: 'center',
                            dataIndex: 'subtime',
                            text: '申请时间'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                                if (value === 0) {
                                    return "待处理";
                                } else if (value === 1) {
                                    return "处理中";
                                } else if (value === 2) {
                                    return "已接受";
                                } else if (value === 3) {
                                    return "被驳回";
                                } else if (value === 4) {
                                    return "已出单";
                                } else if (value === 5) {
                                    return "已送单";
                                } else if (value === 6) {
                                    return "业务完成";
                                } else if (value === 7) {
                                    return "完成咨询";
                                }
                            },
                            align: 'center',
                            dataIndex: 'f_status',
                            text: '状态',
                            editor: {
                                xtype: 'combobox',
                                itemId: 'EtcStatusCombobox',
                                selectOnFocus: true,
                                displayField: 'name',
                                forceSelection: true,
                                store: 'StatusStore',
                                valueField: 'id'
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 150,
                            align: 'center',
                            dataIndex: 'source',
                            text: '来源'
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'f_price',
                            text: 'ETC购买金额(元)',
                            editor: {
                                xtype: 'numberfield',
                                itemId: 'EtcPriceEditer',
                                minValue: 0
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'f_desc',
                            text: '备注',
                            editor: {
                                xtype: 'textfield',
                                itemId: 'descTextFieldEditor'
                            }
                        }
                    ],
                    viewConfig: {
                        xtype: 'tableview'
                    },
                    plugins: [
                        {
                            ptype: 'cellediting',
                            clicksToEdit: 1
                        }
                    ],
                    listeners: {
                        cellcontextmenu: 'onEtcStatusGridpanelCellContextMenu',
                        rowclick: 'onEtcStatusGridPanelRowClick'
                    }
                },
                {
                    xtype: 'propertygrid',
                    flex: 3,
                    region: 'east',
                    split: true,
                    id: 'EtcStatusPropertyGrid',
                    itemId: 'EtcStatusPropertyGrid',
                    width: 150,
                    collapsible: true,
                    title: '属性',
                    enableColumnMove: true,
                    sortableColumns: false
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    itemId: 'refreshBtn',
                    text: '刷新',
                    listeners: {
                        click: 'onRefreshBtnClick'
                    }
                },
                {
                    xtype: 'button',
                    itemId: 'exportBtn',
                    text: '导出内容',
                    listeners: {
                        click: 'onExportBtnClick'
                    }
                },
                {
                    xtype: 'button',
                    itemId: 'saveBtn',
                    text: '修改保存',
                    listeners: {
                        click: 'onSaveBtnClick'
                    }
                }
            ]
        },
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            itemId: 'pagingToolbar',
            width: 360,
            displayInfo: true,
            store: 'EtcStatusStore'
        }
    ],
    listeners: {
        render: 'onEtcStatusPanelRender'
    }

});