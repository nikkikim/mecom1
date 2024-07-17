gdjs.Stage2Code = {};
gdjs.Stage2Code.localVariables = [];
gdjs.Stage2Code.GDTextObjects1= [];
gdjs.Stage2Code.GDTextObjects2= [];
gdjs.Stage2Code.GDKlaedFrigateShieldObjects1= [];
gdjs.Stage2Code.GDKlaedFrigateShieldObjects2= [];


gdjs.Stage2Code.mapOfGDgdjs_9546Stage2Code_9546GDKlaedFrigateShieldObjects1Objects = Hashtable.newFrom({"KlaedFrigateShield": gdjs.Stage2Code.GDKlaedFrigateShieldObjects1});
gdjs.Stage2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("KlaedFrigateShield"), gdjs.Stage2Code.GDKlaedFrigateShieldObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Stage2Code.mapOfGDgdjs_9546Stage2Code_9546GDKlaedFrigateShieldObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Stage1", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Stage2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Stage2Code.GDTextObjects1.length = 0;
gdjs.Stage2Code.GDTextObjects2.length = 0;
gdjs.Stage2Code.GDKlaedFrigateShieldObjects1.length = 0;
gdjs.Stage2Code.GDKlaedFrigateShieldObjects2.length = 0;

gdjs.Stage2Code.eventsList0(runtimeScene);

return;

}

gdjs['Stage2Code'] = gdjs.Stage2Code;
