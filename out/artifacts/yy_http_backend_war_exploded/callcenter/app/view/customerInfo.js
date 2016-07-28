/*
 * File: app/view/customerInfo.js
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

Ext.define('CallCenterApp.view.customerInfo', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.customerinfo',

    requires: [
        'CallCenterApp.view.customerInfoViewModel',
        'CallCenterApp.view.customerInfoViewController',
        'Ext.menu.Menu',
        'Ext.menu.Item'
    ],

    controller: 'customerinfo',
    viewModel: {
        type: 'customerinfo'
    },
    itemId: 'customerInfo',
    toFrontOnShow: false,
    collapseDirection: 'bottom',
    collapsed: false,
    collapsible: true,
    iconCls: 'Userb',
    title: '客户信息',

    items: [
        {
            xtype: 'menu',
            floating: false,
            itemId: 'menuCustomer',
            items: [
                {
                    xtype: 'menuitem',
                    itemId: 'ctStatusItem',
                    iconCls: 'Zoomin',
                    text: '资料查询'
                },
                {
                    xtype: 'menuitem',
                    itemId: 'ctBizItem',
                    iconCls: 'Usermagnify',
                    text: '业务查询'
                }
            ],
            listeners: {
                click: 'onMenuCustomerClick'
            }
        }
    ]

});