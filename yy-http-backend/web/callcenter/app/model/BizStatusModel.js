/*
 * File: app/model/BizStatusModel.js
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

Ext.define('CallCenterApp.model.BizStatusModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.String'
    ],

    fields: [
        {
            type: 'string',
            name: 'name'
        },
        {
            type: 'string',
            name: 'phone'
        },
        {
            type: 'string',
            name: 'id'
        },
        {
            type: 'string',
            mapping: 'stinfo',
            name: 'status'
        },
        {
            type: 'string',
            name: 'source'
        },
        {
            type: 'string',
            name: 'appletime'
        },
        {
            type: 'string',
            name: 'type'
        }
    ]
});