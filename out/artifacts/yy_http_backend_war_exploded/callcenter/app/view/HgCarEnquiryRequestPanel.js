/*
 * File: app/view/HgCarEnquiryRequestPanel.js
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

Ext.define('CallCenterApp.view.HgCarEnquiryRequestPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.hgcarenquiryrequestpanel',

    requires: [
        'CallCenterApp.view.HgCarEnquiryRequestPanelViewModel',
        'CallCenterApp.view.HgCarEnquiryRequestPanelViewController',
        'Ext.form.field.ComboBox',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.View',
        'Ext.form.field.Number',
        'Ext.form.field.Date',
        'Ext.button.Button'
    ],

    controller: 'hgcarenquiryrequestpanel',
    viewModel: {
        type: 'hgcarenquiryrequestpanel'
    },
    height: 542,
    id: 'HgCarEnquiryRequestPanel',
    itemId: 'HgCarEnquiryRequestPanel',
    width: 738,
    animCollapse: false,
    closable: true,
    title: '询价记录',

    items: [
        {
            xtype: 'container',
            height: 62,
            width: 730,
            layout: 'column',
            items: [
                {
                    xtype: 'combobox',
                    focusOnToFront: false,
                    itemId: 'carBrand',
                    width: 284,
                    fieldLabel: '车辆品牌',
                    labelWidth: 70,
                    emptyText: '请选择车辆品牌',
                    selectOnFocus: true,
                    anyMatch: true,
                    autoLoadOnValue: true,
                    caseSensitive: true,
                    displayField: 'name',
                    forceSelection: true,
                    queryMode: 'local',
                    store: 'CarBrandStord',
                    typeAhead: true,
                    valueField: 'id',
                    listeners: {
                        select: 'onCarBrandSelect'
                    }
                },
                {
                    xtype: 'combobox',
                    frame: true,
                    itemId: 'carset',
                    width: 291,
                    fieldLabel: '车系',
                    labelWidth: 50,
                    emptyText: '请选择车辆车系',
                    anyMatch: true,
                    autoLoadOnValue: true,
                    displayField: 'name',
                    queryMode: 'local',
                    store: 'CarsetStore',
                    valueField: 'id',
                    listeners: {
                        select: 'onCarsetSelect'
                    }
                },
                {
                    xtype: 'combobox',
                    itemId: 'carType',
                    width: 284,
                    fieldLabel: '车辆型号',
                    labelWidth: 70,
                    emptyText: '请选择车辆型号',
                    anyMatch: true,
                    autoLoadOnValue: true,
                    displayField: 'name',
                    queryMode: 'local',
                    store: 'CarTypeStore',
                    typeAhead: true,
                    valueField: 'id',
                    listeners: {
                        select: 'onCarTypeSelect'
                    }
                },
                {
                    xtype: 'combobox',
                    frame: true,
                    itemId: 'carColor',
                    width: 291,
                    fieldLabel: '颜色',
                    labelWidth: 50,
                    emptyText: '请填写车辆颜色',
                    anyMatch: true,
                    queryMode: 'local',
                    store: 'CarColorStore',
                    valueField: 'value'
                }
            ]
        },
        {
            xtype: 'gridpanel',
            frame: true,
            height: 211,
            itemId: 'CarReportPriceGridpanel',
            animCollapse: true,
            bodyBorder: true,
            collapsed: false,
            collapsible: true,
            title: '4S店报价记录',
            titleCollapse: true,
            columnLines: true,
            store: 'CarReportPriceStore',
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 74,
                    dataIndex: 'string',
                    text: '序号'
                },
                {
                    xtype: 'gridcolumn',
                    align: 'center',
                    dataIndex: 'f_carbrand',
                    text: '车辆品牌'
                },
                {
                    xtype: 'gridcolumn',
                    align: 'center',
                    dataIndex: 'f_carset',
                    text: '车系'
                },
                {
                    xtype: 'gridcolumn',
                    width: 175,
                    dataIndex: 'f_cartype',
                    text: '车辆型号'
                },
                {
                    xtype: 'gridcolumn',
                    align: 'center',
                    dataIndex: 'f_color',
                    text: '颜色'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'f_price',
                    text: '报价'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'f_ncname',
                    text: '经销商名称'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'userName',
                    text: '操作员姓名'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'f_enquirytime',
                    text: '提交时间',
                    format: 'Y-m-d H:i:s'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'f_validtime',
                    text: '有效时间',
                    format: 'Y-m-d H:i:s'
                }
            ]
        },
        {
            xtype: 'container',
            height: 148,
            margin: 20,
            width: 726,
            items: [
                {
                    xtype: 'numberfield',
                    itemId: 'reportPriceField',
                    padding: '',
                    fieldLabel: '4S店报价(万)',
                    labelWidth: 80,
                    minValue: 0
                },
                {
                    xtype: 'datefield',
                    itemId: 'limitDateField',
                    fieldLabel: '有效时间',
                    labelWidth: 80,
                    editable: false,
                    format: 'Y-m-d'
                },
                {
                    xtype: 'textfield',
                    itemId: 'dealerNameField',
                    fieldLabel: '经销商名称',
                    labelWidth: 80
                },
                {
                    xtype: 'textfield',
                    itemId: 'linkmanNameField',
                    fieldLabel: '销售顾问',
                    labelWidth: 80
                },
                {
                    xtype: 'textfield',
                    itemId: 'contactInformationField',
                    fieldLabel: '联系方式',
                    labelWidth: 80,
                    regex: /^1(3|5|8)[0-9]{9}$/,
                    regexText: '联系方式为11位',
                    listeners: {
                        blur: 'onContactInformationFieldBlur'
                    }
                }
            ]
        },
        {
            xtype: 'button',
            itemId: 'saveBtn',
            margin: '0 0 0 50',
            width: 66,
            text: '保存',
            listeners: {
                click: 'onSaveBtnClick'
            }
        }
    ],
    listeners: {
        render: 'onHgCarEnquiryRequestPanelRender'
    }

});