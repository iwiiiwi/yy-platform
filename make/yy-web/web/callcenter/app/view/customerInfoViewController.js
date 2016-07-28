/*
 * File: app/view/customerInfoViewController.js
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

Ext.define('CallCenterApp.view.customerInfoViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.customerinfo',

    onMenuCustomerClick: function (menu, item, e, eOpts) {
        var mainView = Ext.getCmp('mainView');
        var contentPanel = mainView.getComponent('contentPanel');

        if (item.itemId == 'ctStatusItem') {
            var ctStatusPanel = contentPanel.getComponent('customerStatusPanel');

            if (ctStatusPanel === undefined) {
                ctStatusPanel = new CallCenterApp.view.CustomerStatusPanel({});

                contentPanel.add(ctStatusPanel);
            }

            contentPanel.setActiveTab(ctStatusPanel);
        } else if (item.itemId == 'ctBizItem') {
            var bizStatusPanel = contentPanel.getComponent('bizStatusPanel');

            if (bizStatusPanel === undefined) {
                bizStatusPanel = new CallCenterApp.view.BizStatusPanel({});

                contentPanel.add(bizStatusPanel);
            }

            contentPanel.setActiveTab(bizStatusPanel);
        }


    }

});
