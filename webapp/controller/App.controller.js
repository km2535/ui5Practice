// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ],(Controller) =>{
//     "use Strict";
//     return Controller.extend("ui5.walkthrough.controller.App",{
//         onShowText(){
//             alert("컨트롤러에서 텍스트를 보여줍니다.")
//         }
//     })
// })

//Message Toast
// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/m/MessageToast"
// ],(Controller, MessageToast) =>{
//     "use Strict";
//     return Controller.extend("ui5.walkthrough.controller.App",{
//         onShowText(){
//             MessageToast.show("메시지 토스트에서 보여줍니다.")
//         }
//     })
// })


//Json Model
// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/m/MessageToast",
//     "sap/ui/model/json/JSONModel"
// ],(Controller, MessageToast, JSONModel) =>{
//     "use Strict";
//     return Controller.extend("ui5.walkthrough.controller.App",{
//         onInit(){
//             const oData = {
//                 profile : {
//                     name : "KANGMIN",
//                     age: "32",
//                     gender:"male"
//                 }
//             };
//             const oModel = new JSONModel(oData);
//             this.getView().setModel(oModel);
//         },
//         onShowText(){
//             MessageToast.show("메시지 토스트에서 보여줍니다.")
//         }
//     })
// })

//Translatables Text
// i18n 이란 : Internationalization의 약자로 i와 n사이의 18글자를 의미, 
// Locale 기반으로 개발할 때, UI와 텍스트를 분리시키고자 할 때 사용
sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/resource/ResourceModel"
    ],(Controller, MessageToast, JSONModel, ResoureceModel) =>{
        "use Strict";
        return Controller.extend("ui5.walkthrough.controller.App",{
            onInit(){
                const oData = {
                    profile : {
                        name : "KANGMIN",
                        gender: "male"
                    }
                };
                //모델을 세팅하면 xml 파일에서 바로 사용이 가
                const oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
                // 번역가능한 텍스트 
                const i18nModel = new ResoureceModel({
                    bundleName: "ui5.walkthrough.i18n.i18n"
                });
                this.getView().setModel(i18nModel, "i18n");
            },
            // 버튼 이벤트와 연결
            onShowText(){
                // 해당 버튼의 값을 가져오기 위한 코드
                const oBundle = this.getView().getModel("i18n").getResourceBundle();
                const model = this.getView().getModel();
                const name = model.getProperty("/profile/name");
                const gender = model.getProperty("/profile/gender");

                //번들에서 값을 가져와 위에서 정의한 변수를 넣는다.
                const sMsg = oBundle.getText("helloMsg",[name, gender]);
                MessageToast.show(sMsg);
            }
        })
    })