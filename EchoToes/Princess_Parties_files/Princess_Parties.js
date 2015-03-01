// Created by iWeb 3.0.4 local-build-20150301

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,331),url:'Princess_Parties_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Princess_Parties_files/stroke_1.png'},{rect:new IWRect(2,-2,422,4),url:'Princess_Parties_files/stroke_2.png'},{rect:new IWRect(424,-2,4,4),url:'Princess_Parties_files/stroke_3.png'},{rect:new IWRect(424,2,4,331),url:'Princess_Parties_files/stroke_4.png'},{rect:new IWRect(424,333,4,5),url:'Princess_Parties_files/stroke_5.png'},{rect:new IWRect(2,333,422,5),url:'Princess_Parties_files/stroke_6.png'},{rect:new IWRect(-2,333,4,5),url:'Princess_Parties_files/stroke_7.png'}],new IWSize(426,335))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Princess_Parties_files/Princess_PartiesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
