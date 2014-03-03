// Created by iWeb 3.0.4 local-build-20140302

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_1:new IWStrokeParts([{rect:new IWRect(-2,2,4,106),url:'Welcome_files/stroke_8.png'},{rect:new IWRect(-2,-2,4,4),url:'Welcome_files/stroke_9.png'},{rect:new IWRect(2,-2,118,4),url:'Welcome_files/stroke_10.png'},{rect:new IWRect(120,-2,4,4),url:'Welcome_files/stroke_11.png'},{rect:new IWRect(120,2,4,106),url:'Welcome_files/stroke_12.png'},{rect:new IWRect(120,108,4,4),url:'Welcome_files/stroke_13.png'},{rect:new IWRect(2,108,118,4),url:'Welcome_files/stroke_14.png'},{rect:new IWRect(-2,108,4,4),url:'Welcome_files/stroke_15.png'}],new IWSize(122,110)),stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,217),url:'Welcome_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Welcome_files/stroke_1.png'},{rect:new IWRect(2,-2,386,4),url:'Welcome_files/stroke_2.png'},{rect:new IWRect(388,-2,4,4),url:'Welcome_files/stroke_3.png'},{rect:new IWRect(388,2,4,217),url:'Welcome_files/stroke_4.png'},{rect:new IWRect(388,219,4,4),url:'Welcome_files/stroke_5.png'},{rect:new IWRect(2,219,386,4),url:'Welcome_files/stroke_6.png'},{rect:new IWRect(-2,219,4,4),url:'Welcome_files/stroke_7.png'}],new IWSize(390,221))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
