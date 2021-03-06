/*
 * File: app/view/HotCarsetManagePanel.js
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

Ext.define('CallCenterApp.view.HotCarsetManagePanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.hotcarsetmanagepanel',

    requires: [
        'CallCenterApp.view.HotCarsetManagePanelViewModel',
        'CallCenterApp.view.HotCarsetManagePanelViewController',
        'Ext.toolbar.Toolbar',
        'Ext.form.field.ComboBox',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Action',
        'Ext.grid.View'
    ],

    controller: 'hotcarsetmanagepanel',
    viewModel: {
        type: 'hotcarsetmanagepanel'
    },
    id: 'HotCarsetManagePanel',
    itemId: 'HotCarsetManagePanel',
    layout: 'fit',
    closable: true,
    title: '热门车型管理',

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'combobox',
                    itemId: 'systemSelector',
                    fieldLabel: '系统',
                    labelAlign: 'right',
                    labelWidth: 80,
                    editable: false,
                    displayField: 'f_stname',
                    store: 'BusinessSystemManagerStore',
                    valueField: 'f_stid',
                    listeners: {
                        select: 'onSystemSelectorSelect'
                    }
                },
                {
                    xtype: 'combobox',
                    itemId: 'brandSelector',
                    fieldLabel: '品牌',
                    labelAlign: 'right',
                    labelWidth: 80,
                    editable: false,
                    displayField: 'name',
                    store: 'CarBrandOnStore',
                    valueField: 'id',
                    listeners: {
                        select: 'onBrandSelectorSelect'
                    }
                },
                {
                    xtype: 'combobox',
                    itemId: 'carsetSelector',
                    fieldLabel: '车型',
                    labelAlign: 'right',
                    labelWidth: 80,
                    editable: false,
                    displayField: 'name',
                    store: 'CarsetStore',
                    valueField: 'id'
                },
                {
                    xtype: 'button',
                    itemId: 'addBtn',
                    text: '添加',
                    listeners: {
                        click: 'onAddBtnClick'
                    }
                }
            ]
        }
    ],
    listeners: {
        render: 'onHotCarsetManagePanelRender'
    },
    items: [
        {
            xtype: 'gridpanel',
            store: 'HotCarsetStore',
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 50,
                    align: 'center',
                    text: '序号'
                },
                {
                    xtype: 'gridcolumn',
                    width: 150,
                    dataIndex: 'title',
                    text: '车型'
                },
                {
                    xtype: 'actioncolumn',
                    text: '操作',
                    items: [
                        {
                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                Ext.MessageBox.confirm('请确认', '您确认删除该条记录吗？',function(btn){

                                    if(btn==='no'){
                                        return;
                                    }else if(btn==='yes'){

                                        var id=record.data.hvid;
                                        var url = Ext.getStore('ConfigStore').getAt(0).get('OrderUrl');

                                        Ext.Ajax.request({
                                            url:url+"/biz/hot/delete.do",
                                            params:{
                                                id:id
                                            },

                                            success:function(response){
                                                var text = response.responseText;
                                                var result = JSON.parse(text);

                                                if (result=== null) {
                                                    Ext.Msg.alert('提示', '删除出错了，结果：' + result);
                                                    return;
                                                }else if (result.succeed) {
                                                    view.store.reload();
                                                    Ext.Msg.alert('提示', '删除成功');
                                                }else {
                                                    Ext.Msg.alert('提示', '删除出错了，错误：' + result.ptError);
                                                    return;
                                                }
                                            },

                                            failure:function(){
                                                Ext.Msg.alert('提示','删除失败');

                                            },
                                        });
                                    }
                                });
                            },
                            altText: '删除',
                            iconCls: 'Bulletcross',
                            tooltip: '删除'
                        }
                    ]
                }
            ]
        }
    ]

});