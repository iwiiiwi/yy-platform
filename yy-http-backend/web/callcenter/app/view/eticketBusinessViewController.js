/*
 * File: app/view/eticketBusinessViewController.js
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

Ext.define('CallCenterApp.view.eticketBusinessViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.eticketbusiness',

    onMenuEticketClick: function (menu, item, e, eOpts) {
        var mainView = Ext.getCmp('mainView');
        var contentPanel = mainView.getComponent('contentPanel');

        if (item.itemId == 'eticketRequestItem') {
            var eticketRequestPanel = contentPanel.getComponent('eticketRequestPanel');

            if (eticketRequestPanel === undefined) {
                eticketRequestPanel = new CallCenterApp.view.eticketRequestPanel({
                    arr: []
                });

                contentPanel.add(eticketRequestPanel);
            }

            contentPanel.setActiveTab(eticketRequestPanel);
        } else if (item.itemId == 'eticketGiveItem') {
            var EticketGivePanel = contentPanel.getComponent('EticketGivePanel');
            if (EticketGivePanel === undefined) {
                EticketGivePanel = new CallCenterApp.view.EticketGivePanel({});
                contentPanel.add(EticketGivePanel);
            }
            contentPanel.setActiveTab(EticketGivePanel);


        } else if (item.itemId == 'eticketManageItem') {
            var eticketManagerPanel = contentPanel.getComponent('EticketManagerPanel');

            if (eticketManagerPanel === undefined) {
                eticketManagerPanel = new CallCenterApp.view.EticketManagerPanel({});

                contentPanel.add(eticketManagerPanel);
            }

            contentPanel.setActiveTab(eticketManagerPanel);
        } else if (item.itemId == 'eticketConsumeItem') {
            var eticketConsumerPanel = contentPanel.getComponent('EticketConsumePanel');

            if (eticketConsumerPanel === undefined) {
                eticketConsumerPanel = new CallCenterApp.view.EticketConsumePanel({});
                contentPanel.add(eticketConsumerPanel);
            }
            contentPanel.setActiveTab(eticketConsumerPanel);

        } else if (item.itemId === 'eticketGiveMagItem') {
            var EticketGiveMagPanel = contentPanel.getComponent('EticketGiveMagPanel');
            if (EticketGiveMagPanel === undefined) {
                EticketGiveMagPanel = new CallCenterApp.view.EticketGiveMagPanel({});
                contentPanel.add(EticketGiveMagPanel);
            }
            contentPanel.setActiveTab(EticketGiveMagPanel);
        } else if (item.itemId === 'eticketRuleGiveItem') {
            var EticketGiverulesPanel = contentPanel.getComponent('EticketGiverulesPanel');

            if (EticketGiverulesPanel === undefined) {
                EticketGiverulesPanel = new CallCenterApp.view.EticketGiverulesPanel({});
                contentPanel.add(EticketGiverulesPanel);
            }
            contentPanel.setActiveTab(EticketGiverulesPanel);
        }
    }

});
