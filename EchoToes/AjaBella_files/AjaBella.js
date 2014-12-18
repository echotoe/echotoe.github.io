// Created by iWeb 3.0.4 local-build-20141217

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,392),url:'AjaBella_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'AjaBella_files/stroke_1.png'},{rect:new IWRect(2,-2,566,4),url:'AjaBella_files/stroke_2.png'},{rect:new IWRect(568,-2,4,4),url:'AjaBella_files/stroke_3.png'},{rect:new IWRect(568,2,4,392),url:'AjaBella_files/stroke_4.png'},{rect:new IWRect(568,394,4,5),url:'AjaBella_files/stroke_5.png'},{rect:new IWRect(2,394,566,5),url:'AjaBella_files/stroke_6.png'},{rect:new IWRect(-2,394,4,5),url:'AjaBella_files/stroke_7.png'}],new IWSize(570,396))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('AjaBella_files/AjaBellaMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
