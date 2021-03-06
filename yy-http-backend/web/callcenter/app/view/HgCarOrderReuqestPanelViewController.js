/*
 * File: app/view/HgCarOrderReuqestPanelViewController.js
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

Ext.define('CallCenterApp.view.HgCarOrderReuqestPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.hgcarorderreuqestpanel',

    onRefreBtnClick: function(button, e, eOpts) {
        var HgCarOrderReuqestPanel=button.up('#HgCarOrderReuqestPanel');

        var CarOrdertypeField=HgCarOrderReuqestPanel.down('#CarOrdertype');
        var CarOrderStatusField=HgCarOrderReuqestPanel.down('#CarOrderStatus');

        CarOrdertypeField.reset();
        CarOrderStatusField.reset();
        this.onHgCarOrderGridPanelRender(null,null);
    },

    onSignBtnClick: function(button, e, eOpts) {
        var HgcarOrderGridPanel=button.up('#HgCarOrderGridPanel');

        var status=HgcarOrderGridPanel.selection.data.f_status;

        if(status!==3){
            return;
        }
        var orderId=HgcarOrderGridPanel.selection.data.f_ofid;

        /**获取LoginSuccessJsonStore中的data**/
        var LoginSuccessStore = Ext.getStore('LoginSuccessJsonStore');
        var userId=LoginSuccessStore.data.items[0].data.userId;
        var userName=LoginSuccessStore.data.items[0].data.userName;
        var url = Ext.getStore('ConfigStore').getAt(0).get('OrderUrl');

        Ext.Ajax.request({

            url:url+"/biz/order/modify.do",
            params:{
                f_ofid:orderId,
                f_operator:userName,
                f_operatorid:userId,
                f_status:5
            },

            success:function(response){
                var text = response.responseText;
                var result = JSON.parse(text);

                if (result=== null) {
                    Ext.Msg.alert('提示', '保存出错了，结果：' + result);
                    return;

                }


                if (result.succeed === true) {
                    Ext.Msg.alert('提示', '操作成功');
                } else {
                    Ext.Msg.alert('提示', '操作失败');
                }

            }
        });

    },

    onQueryBtnClick: function(button, e, eOpts) {
        var HgCarOrderReuqestPanel=button.up('#HgCarOrderReuqestPanel');

        var CarOrdertypeField=HgCarOrderReuqestPanel.down('#CarOrdertype');
        var CarOrderStatusField=HgCarOrderReuqestPanel.down('#CarOrderStatus');

        var CarOrdertype='';
        var CarOrderStatus='';

        if(CarOrdertypeField.value!==null){
            CarOrdertype=CarOrdertypeField.getValue();
        }
        if(CarOrderStatusField.value!==null){
            CarOrderStatus=CarOrderStatusField.getValue();
        }

        var carOrderStore = Ext.getStore('CarOrderStore');
        var ajaxProxy = carOrderStore.getProxy();
        var url = Ext.getStore('ConfigStore').getAt(0).get('OrderUrl');
        console.log(url + "/biz/order/list.do?orderType="+CarOrdertype+'&orderStatus='+CarOrderStatus);
        ajaxProxy.setUrl(url + "/biz/order/list.do?orderType="+CarOrdertype+'&orderStatus='+CarOrderStatus);
        carOrderStore.load();
    },

    onHgCarOrderGridPanelRender: function(component, eOpts) {
        var carOrderStore = Ext.getStore('CarOrderStore');
        var ajaxProxy = carOrderStore.getProxy();
        var url = Ext.getStore('ConfigStore').getAt(0).get('OrderUrl');
        ajaxProxy.setUrl(url + "/biz/order/list.do");
        carOrderStore.load();
    },

    onHgCarOrderGridPanelSelectionChange: function(model, selected, eOpts) {
        if(selected.length<1){
            return;
        }
        /**1,查询询价记录***/
        var record=selected[0];
        var orderId=record.data.f_ofid;
        var carTypeId=record.data.f_cartypeid;

        var color=record.data.f_color===undefined?null:record.data.f_color;

        var CarReportPriceStore=Ext.getStore('CarReportPriceStore');
        var ajaxProxy=CarReportPriceStore.getProxy();

        var url = Ext.getStore('ConfigStore').getAt(0).get('OrderServerUrl');
        ajaxProxy.setUrl(url + "/hg/carenquiry/list.do?cartypeid="+carTypeId);
        CarReportPriceStore.load();

        /**2，更新PropertGrid记录**/

        var CarOrderDetailPropertyPanel=Ext.getCmp('CarOrderDetailPropertyPanel');

        /**状态，数字转化为字符**/
        var status=record.data.f_status;
        if(status===0){
            status='已作废';
        }else if(status===1){
            status= '询价';

        }else if(status===2){
            if(record.data.type===1){
                status='已跟进';
            }else{
                status='已报价';
            }
            //     status='已报价';
        }else if(status===3){
            status='已支付';
        }else if(status===4){
            status='已过期';
        }else if(status===5){
            status='待提车';
        }else if(status===6){
            status='已完成';
        }else{
            status='未知';
        }


        /***购车方式，转化**/
        var purchaseWay=record.data.f_purchaseway;
        if(purchaseWay===0){
            purchaseWay='分期付款';
        }else if(purchaseWay===1){
            purchaseWay='全额付款';
        }else{
            purchaseWay='其他';
        }
        /***支付方式 转化**/

        var paymodel=record.data.f_paymode;
        if(paymodel===undefined){
            paymodel=undefined;
        }else if(paymodel===0){
            paymodel='微信支付';
        }else if(paymodel===1){
            paymodel='支付宝';
        }else if(paymodel===2){
            paymodel='财付通';
        }else if(paymodel===3){
            paymodel='信用卡';
        }else if(paymodel===4){
            paymodel='储蓄卡';
        }

        var operateTime=record.data.f_operatetime;
        if(operateTime===undefined||operateTime===null){
            operateTime=undefined;
        }else{
            operateTime=operateTime.toLocaleString();
        }

        var payitem=record.data.f_payitem;
        if(payitem===0){
            payitem='购车订金支付';
        }

        CarOrderDetailPropertyPanel.setSource({
            f_ofid:orderId,
            f_name:record.data.f_name,
            f_phone:record.data.f_phone,
            f_carbrand:record.data.brand,
            f_carset:record.data.carSetName,
            f_cartype:record.data.title,
            f_operator:record.data.f_operator,
            f_operatetime:operateTime,
            f_createtime:record.data.f_createtime===undefined?undefined:record.data.f_createtime.toLocaleString(),
            f_status:status,
            f_bottomprice:record.data.f_bottomprice===undefined?undefined:record.data.f_bottomprice/10000,
            f_payments:record.data.f_payments===undefined?undefined:record.data.f_payments/10000,
            f_paymode:paymodel,
            f_payitem:payitem,
            f_paytime:(record.data.f_paytime===undefined?undefined:new Date(record.data.f_paytime*1000).toLocaleString()),
            f_purchaseway:purchaseWay,
            f_expecttime:record.data.f_expecttime===undefined?undefined:record.data.f_expecttime,
            f_ncname:record.data.f_ncname,
            f_saleman:record.data.f_saleman,
            f_salephone:record.data.f_salephone,
            f_color:record.data.f_color,
            f_desc:record.data.f_desc,
            f_editordesc:record.data.f_editordesc===undefined?'':record.data.f_editordesc
        },{
            f_ofid:{displayName:'订单号'},
            f_name:{displayName:'姓名',selectOnFocus:false},
            f_phone:{displayName:'联系方式'},
            f_carbrand:{displayName:'车辆品牌'},
            f_carset:{displayName:'车系'},
            f_cartype:{displayName:'车辆型号'},
            f_operator:{displayName:'报价员'},
            f_operatetime:{displayName:'操作时间'},
            f_createtime:{displayName:'购车单创建时间'},
            f_status:{displayName:'购车单状态'},
            f_bottomprice:{displayName:'最低价格(万)'},
            f_payments:{displayName:'定金金额'},
            f_paymode:{displayName:'支付方式'},
            f_payitem:{displayName:'支付项目'},
            f_paytime:{displayName:'支付时间'},
            f_purchaseway:{displayName:'购车方式'},
            f_expecttime:{displayName:'预计购车时间'},
            f_ncname:{displayName:'经销商名称'},
            f_saleman:{displayName:'销售代表'},
            f_salephone:{displayName:'销售代表联系方式'},
            f_color:{displayName:'车辆颜色'},
            f_desc:{displayName:'客户备注'},
            f_editordesc:{displayName:'编辑者备注'}
        });
    },

    onCarOrderDetailPropertyPanelPropertyChange: function(source, recordId, value, oldValue, eOpts) {
        //propertyGridPanel详细信息修改时触发

        if(recordId!=='f_editordesc'){
            return;
        }

        var url = Ext.getStore('ConfigStore').getAt(0).get('OrderUrl');
        /**获取LoginSuccessJsonStore中的data**/
        var LoginSuccessStore = Ext.getStore('LoginSuccessJsonStore');
        var userId=LoginSuccessStore.data.items[0].data.userId;
        var userName=LoginSuccessStore.data.items[0].data.userName;

        Ext.Ajax.request({

            url:url+"/biz/order/modify.do",
            params:{
                f_ofid:source.f_ofid,
                f_operator:userName,
                f_operatorid:userId,
                f_editordesc:value
            },

            success:function(response){
                var text = response.responseText;
                var result = JSON.parse(text);

                if (result=== null) {
                    Ext.Msg.alert('提示', '保存出错了，结果：' + result);
                    return;
                }

                if (!result.succeed) {

                    Ext.Msg.alert('提示', '保存出错了');
                    return;
                }
                //更新orderGrid数据
                var carOrderStore = Ext.getStore('CarOrderStore');
                var ajaxProxy = carOrderStore.getProxy();
                var url = Ext.getStore('ConfigStore').getAt(0).get('OrderUrl');
                ajaxProxy.setUrl(url + "/biz/order/list.do");
                carOrderStore.load();

            },
            failure:function(){
                Ext.Msg.alert('提示','操作失败');
            }
        });


    },

    onBottomPricesubmitBtnClick: function(button, e, eOpts) {
        var HgCarOrderRequestpanel=button.up('#HgCarOrderReuqestPanel');

        var CarAskPriceGridPanel= HgCarOrderRequestpanel.down('#CarAskPriceGridPanel');
        var HgCarOrderGridPanel= HgCarOrderRequestpanel.down('#HgCarOrderGridPanel');

        if(HgCarOrderGridPanel.selModel.selected.items.length<1){
            Ext.Msg.alert('错误提示','请选择需要报价的订单信息!');
            return;
        }

        var record= HgCarOrderGridPanel.selModel.selected.items[0].data;

        var type=record.f_type;
        if(type===1){/**直销车辆*/
            var BottomPriceSubmitPanel =new CallCenterApp.view.BottomPriceSubmitPanel({record:record});

            BottomPriceSubmitPanel.show();



        }else{/**底价购车**/

            if(CarAskPriceGridPanel.selModel.selected.items.length<1){
                Ext.Msg.alert('错误提示','请选择需要报价的信息!');
                return;
            }
            var askPriceRecord=CarAskPriceGridPanel.selModel.selected.items[0].data;


            var BottomPriceSubmitPanel =new CallCenterApp.view.BottomPriceSubmitPanel({record:record,askPriceRecord:askPriceRecord});
            var cartypeField=BottomPriceSubmitPanel.down('#cartype');
            BottomPriceSubmitPanel.show();

        }
    }

});
