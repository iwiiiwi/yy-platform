/*
 * File: app/model/AuthorStatusModel.js
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

Ext.define('CallCenterApp.model.AuthorStatusModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Number',
        'Ext.data.field.String',
        'Ext.data.field.Date'
    ],

    fields: [
        {
            type: 'float',
            name: 'scid'
        },
        {
            type: 'string',
            mapping: 'f_name',
            name: 'name'
        },
        {
            mapping: 'f_phone',
            name: 'phone'
        },
        {
            mapping: 'f_idcard',
            name: 'idcard'
        },
        {
            mapping: 'f_plate_number',
            name: 'plateNum'
        },
        {
            mapping: 'f_insuer',
            name: 'insuer'
        },
        {
            type: 'date',
            mapping: 'f_insuerdate',
            name: 'insuerDate',
            dateFormat: 'timestamp'
        },
        {
            type: 'date',
            mapping: 'f_reportdate',
            name: 'reportDate',
            dateFormat: 'timestamp'
        },
        {
            mapping: 'f_beneficiary',
            name: 'beneficiary'
        },
        {
            mapping: 'f_ciid',
            name: 'ciid'
        },
        {
            mapping: 'f_settlemoney',
            name: 'settleMoney'
        },
        {
            mapping: 'f_receivetype',
            name: 'receiveType'
        },
        {
            mapping: 'f_receiveaddress',
            name: 'receiveAddress'
        },
        {
            name: 'f_desc'
        }
    ]
});