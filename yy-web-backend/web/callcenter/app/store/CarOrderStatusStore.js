/*
 * File: app/store/CarOrderStatusStore.js
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

Ext.define('CallCenterApp.store.CarOrderStatusStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.field.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'CarOrderStatusStore',
            data: [
                {
                    id: 0,
                    name: '已作废'
                },
                {
                    id: 1,
                    name: '询价'
                },
                {
                    id: 2,
                    name: '已报价'
                },
                {
                    id: 3,
                    name: '已支付'
                },
                {
                    id: 4,
                    name: '过期'
                },
                {
                    id: 5,
                    name: '待提车'
                },
                {
                    id: 6,
                    name: '已完成'
                }
            ],
            fields: [
                {
                    name: 'id'
                },
                {
                    name: 'name'
                }
            ]
        }, cfg)]);
    }
});