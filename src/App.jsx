import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';


import LandingPage from './Pages/LandingPage';
import Tops from './Pages/Tops';
import LaceTops from './Pages/LaceTops';
import Pantalon from './Pages/Pantalon';
import Skirts from './Pages/Skirts';
import Sweater from './Pages/Sweater';
import News from './Pages/News';
import Sale from './Pages/Sale';
import MostWanted from './Pages/MostWanted';

import ProductDetailsPage from './Pages/ProductDetailsPage'; 

import CartBar from './Components/CartBar'; 

/*======================Tops==================*/
import imgRheaLaceTop from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)1.jpeg";
import imgRheaLaceTopHover from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)2.jpeg";
import imgVeraWideTrousers from "./assets/images/TopsImage/f9f53333a37bc1807dfaf4ccf0455032.jpg";
import imgVeraWideTrousersHover from "./assets/images/TopsImage/PearlButtonTop-Black1.jpeg";
import imgAriaKnitSweater from "./assets/images/TopsImage/002b4b24610bcd3c53181e95ac6fcac1.jpg";
import imgAriaKnitSweaterHover from "./assets/images/TopsImage/6bee623fc17704978c4c4a2af30154d7.jpg";
import imgButtonTopYellow from "./assets/images/TopsImage/9fd39e193abe83bb2b53d81a9ca1ba39.jpg";
import imgButtonTopYellowHover from "./assets/images/TopsImage/5f12bc933faaf420241bef0bf4310a84.jpg";
import imgBallerinaLaceTop from "./assets/images/TopsImage/0165699a08d1c3ad78426787ff08ce81.jpg";
import imgBallerinaLaceTopHover from "./assets/images/TopsImage/83395c149a54a1680c39fa1a99f397f7.jpg";
import imgPrettyLaceDarkred from "./assets/images/TopsImage/8efc96e144017aff869551dbb48822ea.jpg";
import imgPrettyLaceDarkredHover from "./assets/images/TopsImage/0ae75f4b98c28aacb0231a1bc24f518b.jpg";
import imgPrettyLeoTop from "./assets/images/TopsImage/LuciaBasicLaceTee-White1.jpg";
import imgPrettyLeoTopHover from "./assets/images/TopsImage/LuciaBasicLaceTee-White2.jpeg";
import imgPearlButtonBlack from "./assets/images/TopsImage/NovaKnitTop-CoralGlitter2.jpeg";
import imgPearlButtonBlackHover from "./assets/images/TopsImage/NovaKnitTop-CoralGlitter1.jpeg";
import imgCelesteSilkBlouse from "./assets/images/TopsImage/6da88261abdaf9f68377f5f849190c08.jpg";
import imgCelesteSilkBlouseHover from "./assets/images/TopsImage/LyraLaceTop-VintageCreamHover.jpg";
import imgCroppedTurtleneckKnit from "./assets/images/TopsImage/Screenshot_19-6-2026_175916_venderbys.com.jpeg";
import imgCroppedTurtleneckKnitHover from "./assets/images/TopsImage/AriaLaceTop-Cream.jpeg";
import imgMinimalistCottonTee from "./assets/images/TopsImage/857194ff71d47af417db6b2ad344c217.jpg";
import imgMinimalistCottonTeeHover from "./assets/images/TopsImage/a143a488ca5a751ab702518c0cb51485.jpg";
import imgRibbedKnitLuxury from "./assets/images/TopsImage/AvaTop-Cream1.jpeg";
import imgRibbedKnitLuxuryHover from "./assets/images/TopsImage/AvaTop-Cream2.jpeg";
import imgPremiumLinenShirt from "./assets/images/TopsImage/Screenshot_18-6-2026_037_venderbys.com.jpeg";
import imgPremiumLinenShirtHover  from "./assets/images/TopsImage/Screenshot_18-6-2026_037_venderbys.com.jpeg";
import imgVelvetNightBodysuit from "./assets/images/TopsImage/ec4f8f60bef46e379c23ce8b98d0bdd6.jpg";
import imgVelvetNightBodysuitHover from "./assets/images/TopsImage/ec4f8f60bef46e379c23ce8b98d0bdd6.jpg";
import imgDianaMidiDress from "./assets/images/TopsImage/153234cda96473dff887569a3452bd2e.jpg";
import imgDianaMidiDressHover from "./assets/images/TopsImage/e8159a2aa36141ffda01785cb1194031.jpg";
import imgSeleneCorsetTop from "./assets/images/TopsImage/f4f5b7271dc4ff4d4bc7a6421c9c8787.jpg";
import imgSeleneCorsetTopHover from "./assets/images/TopsImage/e7c40a41c4e112d2243e45fafb69e212.jpg";
import imgAthenaBlazerJacket from "./assets/images/TopsImage/0e0206c055b952bd4ddbb960479f1a5d.jpg";
import imgAthenaBlazerJacketHover from "./assets/images/TopsImage/1a7533a69f43129ea4eec48f37422374.jpg";
import imgAuroraSatinSkirt from "./assets/images/TopsImage/543a2d7b24aa235e8d9c78041950b331.jpg";
import imgAuroraSatinSkirtHover from "./assets/images/TopsImage/6a8d4755299f937b2a6a91426d49a2ab.jpg";
import imgFreyaWrapCardigan from "./assets/images/TopsImage/8f879bfc41ea50bd51e865172d5caa53.jpg";
import imgFreyaWrapCardiganHover from "./assets/images/TopsImage/23b6ae19b7934d7be1609a1a7386ba41.jpg";
import imgIrisMeshLongsleeve from "./assets/images/TopsImage/74bbe60c90487aa6efcc272b13bbba92.jpg";
import imgIrisMeshLongsleeveHover from "./assets/images/TopsImage/aa0ad652acbb81aef4df844fe3fa349f.jpg";

/*==============LaceTops===========*/

import laceImg1 from "./assets/images/LaceTops/824f269c577dc337899ab11ace691de3.jpg";
import laceImg1Hover from "./assets/images/LaceTops/c93dd164c8429f538c2297d1fbc58973.jpg";
import laceImg2 from "./assets/images/LaceTops/6a2b26099d18348e68e5b7d49a05e5d9.jpg";
import laceImg2Hover from "./assets/images/LaceTops/39e0031e417bd3247473de21eab5a9ec.jpg";
import laceImg3 from "./assets/images/LaceTops/RheaLaceTop-Black1.jpeg";
import laceImg3Hover from "./assets/images/LaceTops/RheaLaceTop-Black2.jpeg";
import laceImg4 from "./assets/images/LaceTops/PrettyLeoLaceTop1.jpeg";
import laceImg4Hover from "./assets/images/LaceTops/PrettyLeoLaceTop2.jpeg";
import laceImg5 from "./assets/images/LaceTops/c0d8227b7c98914fcf6931f94b81019b.jpg";
import laceImg5Hover from "./assets/images/LaceTops/c0d8227b7c98914fcf6931f94b81019b.jpg";
import laceImg6 from "./assets/images/LaceTops/deae1198ed0600446a4bb79ff0e17572.jpg";
import laceImg6Hover from "./assets/images/LaceTops/a768a45f79d019fd4377eeacf643bbbd.jpg";
import laceImg7 from "./assets/images/LaceTops/PrettyLaceTop-DarkRed.jpeg";
import laceImg7Hover from "./assets/images/LaceTops/PrettyLaceTop-DarkRed.jpeg";
import laceImg8 from "./assets/images/LaceTops/39e0031e417bd3247473de21eab5a9ec.jpg";
import laceImg8Hover from "./assets/images/LaceTops/53489b906c6658428e1c8c8d532e80da.jpg";
import laceImg9 from "./assets/images/LaceTops/8d774910acc06b63c1a175d5607f99d3.jpg";
import laceImg9Hover from "./assets/images/LaceTops/8d774910acc06b63c1a175d5607f99d3.jpg";
import laceImg10 from "./assets/images/LaceTops/2471cb5661c0e689eddca12e1bc6a0cf.jpg";
import laceImg10Hover from "./assets/images/LaceTops/acefcdcd2c20c587902b73566800efd7.jpg";
import laceImg11 from "./assets/images/LaceTops/Screenshot_23-6-2026_41142_venderbys.com.jpeg";
import laceImg11Hover from "./assets/images/LaceTops/Screenshot_23-6-2026_4133_venderbys.com.jpeg";
import laceImg12 from "./assets/images/LaceTops/Screenshot_19-6-2026_18058_venderbys.com.jpeg";
import laceImg12Hover from "./assets/images/LaceTops/Screenshot_19-6-2026_18126_venderbys.com.jpeg";
import laceImg13 from "./assets/images/LaceTops/3748d7e144eb6ed7edaa965a0a76a955.jpg";
import laceImg13Hover from "./assets/images/LaceTops/fff70c8b2f2083795ee49259c839e57f.jpg";
import laceImg14 from "./assets/images/LaceTops/d3bf14b2c50bfb49c937e95c129ea461.jpg";
import laceImg14Hover from "./assets/images/LaceTops/330da8cfba548d80d6c687b779f3ce53.jpg";
import laceImg15 from "./assets/images/LaceTops/988d76643b8f50fb4ab011d5e936117f.jpg";
import laceImg15Hover from "./assets/images/LaceTops/11059450c270d3873a0cb0de33cb5aed.jpg";
import laceImg16 from "./assets/images/LaceTops/NewBallarenaLaceTop-DarkBrowm.jpeg";
import laceImg16Hover from "./assets/images/LaceTops/e60fb834cd08b56f20023ea9fbccc0eff.jpg";
import laceImg17 from "./assets/images/LaceTops/4b0b86bd6f8a05e4f6a1bd5edb385125.jpg";
import laceImg17Hover from "./assets/images/LaceTops/1187b99bb3eb67ce3c44fc62843011f0.jpg";

/*===========Skirts========*/

import skirtsImg1 from "./assets/images/SkirtsPageImage/Screenshot_19-6-2026_71129_venderbys.com.jpeg";
import skirtsImg1Hover from "./assets/images/SkirtsPageImage/Screenshot_19-6-2026_71152_venderbys.com.jpeg";
import skirtsImg2 from "./assets/images/SkirtsPageImage/Screenshot_19-6-2026_71246_venderbys.com.jpeg";
import skirtsImg2Hover from "./assets/images/SkirtsPageImage/Screenshot_19-6-2026_7136_venderbys.com.jpeg";
import skirtsImg3 from "./assets/images/SkirtsPageImage/Screenshot_19-6-2026_7943_venderbys.com.jpeg";
import skirtsImg3Hover from "./assets/images/SkirtsPageImage/Screenshot_19-6-2026_7913_venderbys.com.jpeg";
import skirtsImg4 from "./assets/images/SkirtsPageImage/41b058762567350e9a16b3a74ee718ee.jpg";
import skirtsImg4Hover from "./assets/images/SkirtsPageImage/f5afa879aeaca6ab1d39338a5a482c13.jpg";
import skirtsImg5 from "./assets/images/SkirtsPageImage/4ae78cb5e8bae25a8f35018fae2a035b.jpg";
import skirtsImg5Hover from "./assets/images/SkirtsPageImage/52cb1af15da0edb13efe02751af5ed1b.jpg";
import skirtsImg6 from "./assets/images/SkirtsPageImage/09ac136b4ada9d1a849408c68848d06f.jpg";
import skirtsImg6Hover from "./assets/images/SkirtsPageImage/9d87e98736d513efd8407945439f8fa0.jpg";
import skirtsImg7 from "./assets/images/SkirtsPageImage/c511ecf1e24e89a6f74fe216a6b5b5d1.jpg";
import skirtsImg7Hover from "./assets/images/SkirtsPageImage/a6d2dca6b0714877aec8153ee64a8de2.jpg";
import skirtsImg8 from "./assets/images/SkirtsPageImage/ef9087fa25771a732ecff08f70abfd6d.jpg";
import skirtsImg8Hover from "./assets/images/SkirtsPageImage/d10cf92a360220e7e5cc5533a952437e.jpg";
import skirtsImg9 from "./assets/images/SkirtsPageImage/6c4feb706bbf684b667993ed0bcd8d38.jpg";
import skirtsImg9Hover from "./assets/images/SkirtsPageImage/6c4feb706bbf684b667993ed0bcd8d38.jpg";
import skirtsImg10 from "./assets/images/SkirtsPageImage/dd10d99a6a6ecdfb0d989967e2384972.jpg";
import skirtsImg10Hover from "./assets/images/SkirtsPageImage/dd10d99a6a6ecdfb0d989967e2384972.jpg";

/*===============Pantalon====================*/
import pantalonImg1 from "./assets/images/PantalonPage/5d156a1fc00c7c1bc36428b2d00f70ec.jpg";
import pantalonImg1Hover from "./assets/images/PantalonPage/ea423f2e20ca01cc46549717bb78f5f6.jpg";
import pantalonImg2 from "./assets/images/PantalonPage/c9284f0aaf39a5a8897ff806e91dd35d.jpg";
import pantalonImg2Hover from "./assets/images/PantalonPage/7819775fa3382746270a16067052613d.jpg";
import pantalonImg3 from "./assets/images/PantalonPage/f56f223197f7a75af32ba1cd65481f6f.jpg";
import pantalonImg3Hover from "./assets/images/PantalonPage/a081138079fab590cb663c29d2d99bad.jpg";
import pantalonImg4 from "./assets/images/PantalonPage/a2bacfcebeaf564581ba7dc4430cc04c.jpg";
import pantalonImg4Hover from "./assets/images/PantalonPage/e7ec181c8288f41647a8b3efea38353e.jpg";
import pantalonImg5 from "./assets/images/PantalonPage/c1e5cfbdd1d89e3112aecd648791b445.jpg";
import pantalonImg5Hover from "./assets/images/PantalonPage/0cbeef5083683671d279ee43a28780a2.jpg";
import pantalonImg6 from "./assets/images/PantalonPage/7364bbc018e98f3b01a0b64ac5b0375f.jpg";
import pantalonImg6Hover from "./assets/images/PantalonPage/6be584a9d8b645ef4830efee1247dfbe.jpg";
import pantalonImg7 from "./assets/images/PantalonPage/172dbb832f66194d16537aeda6f4c779.jpg";
import pantalonImg7Hover from "./assets/images/PantalonPage/172dbb832f66194d16537aeda6f4c779.jpg";
import pantalonImg8 from "./assets/images/PantalonPage/d9204ad814c69e7846578d8e4100447e.jpg";
import pantalonImg8Hover from "./assets/images/PantalonPage/d9204ad814c69e7846578d8e4100447e.jpg";
import pantalonImg9 from "./assets/images/PantalonPage/ce7fe65e1ba2a8a143eee75807e65e00.jpg";
import pantalonImg9Hover from "./assets/images/PantalonPage/3e487b821f3100a889264efd11e3536e.jpg";
import pantalonImg10 from "./assets/images/PantalonPage/a90b5243aed3e0c1bb93bcbb4babbb98.jpg";
import pantalonImg10Hover from "./assets/images/PantalonPage/4c7000d41503e8a4a555a6a8f1be3e8b.jpg";



/*=============SWEATER===============*/
import sweaterImg1 from "./assets/images/SweaterPage/3bb8a03751aad8c84d73c62517fc919d (1).jpg"; 
import sweaterImg1Hover from "./assets/images/SweaterPage/c5063502bad676185f549ef13ce07527 (1).jpg";
import sweaterImg2 from "./assets/images/SweaterPage/7e5751afae7cac47ed19732dd8be0f09.jpg"; 
import sweaterImg2Hover from "./assets/images/SweaterPage/6bb761c9fc1e3bdae9fb47ca7480decc.jpg";
import sweaterImg3 from "./assets/images/SweaterPage/19aa0df91a75a7f8c19cbd47914c40f2.jpg"; 
import sweaterImg3Hover from "./assets/images/SweaterPage/1385fa39c00ee2b6f28efb4184bab7ee.jpg";
import sweaterImg4 from "./assets/images/SweaterPage/9f02a102a83e31ddd4e193859bf00f49.jpg"; 
import sweaterImg4Hover from "./assets/images/SweaterPage/839b43ce44b2111e3639924a0b8dd4de.jpg";
import sweaterImg5 from "./assets/images/SweaterPage/968bbb50b6d76f753bcf50fb1378acc9.jpg"; 
import sweaterImg5Hover from "./assets/images/SweaterPage/b7c9fd31c6499e625fe44c58e2e2a0dd.jpg";
import sweaterImg6 from "./assets/images/SweaterPage/71f0d2e8b213c6e41bd85e785c035bb8.jpg"; 
import sweaterImg6Hover from "./assets/images/SweaterPage/35804b97f7c9740fb10a3b99bf6c11c1.jpg";
import sweaterImg7 from "./assets/images/SweaterPage/d558590eca98888c943d9e800761fa28.jpg"; 
import sweaterImg7Hover from "./assets/images/SweaterPage/3cbd071b4e9925dbc37f5b0da09a3107.jpg";
import sweaterImg8 from "./assets/images/SweaterPage/1a3fa44bf9f32669883959a210296faa.webp.jpg"; 
import sweaterImg8Hover from "./assets/images/SweaterPage/1a3fa44bf9f32669883959a210296faa.webp.jpg";
import sweaterImg9 from "./assets/images/SweaterPage/b8ff6edb8e67a944ebe435a70c35237f.jpg"; 
import sweaterImg9Hover from "./assets/images/SweaterPage/3dbed16747a282d9497ba891358e8ace.jpg";
import sweaterImg10 from "./assets/images/SweaterPage/bb497987ed8014690d36fa2365124200.jpg"; 
import sweaterImg10Hover from "./assets/images/SweaterPage/3d505679d9086aa7055c10acbab54581.jpg";


/*====================NEWS===================*/
import newsImg1 from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)1.jpeg"; import newsImg1Hover from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)2.jpeg";
import newsImg2 from "./assets/images/TopsImage/0165699a08d1c3ad78426787ff08ce81.jpg"; import newsImg2Hover from "./assets/images/TopsImage/83395c149a54a1680c39fa1a99f397f7.jpg";
import newsImg3 from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)1.jpeg"; import newsImg3Hover from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)2.jpeg";
import newsImg4 from "./assets/images/TopsImage/0165699a08d1c3ad78426787ff08ce81.jpg"; import newsImg4Hover from "./assets/images/TopsImage/83395c149a54a1680c39fa1a99f397f7.jpg";
import newsImg5 from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)1.jpeg"; import newsImg5Hover from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)2.jpeg";
import newsImg6 from "./assets/images/TopsImage/0165699a08d1c3ad78426787ff08ce81.jpg"; import newsImg6Hover from "./assets/images/TopsImage/83395c149a54a1680c39fa1a99f397f7.jpg";
import newsImg7 from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)1.jpeg"; import newsImg7Hover from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)2.jpeg";
import newsImg8 from "./assets/images/TopsImage/0165699a08d1c3ad78426787ff08ce81.jpg"; import newsImg8Hover from "./assets/images/TopsImage/83395c149a54a1680c39fa1a99f397f7.jpg";
import newsImg9 from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)1.jpeg"; import newsImg9Hover from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)2.jpeg";
import newsImg10 from "./assets/images/TopsImage/0165699a08d1c3ad78426787ff08ce81.jpg"; import newsImg10Hover from "./assets/images/TopsImage/83395c149a54a1680c39fa1a99f397f7.jpg";

/*=======================SALE========================*/
import saleImg1 from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)1.jpeg"; import saleImg1Hover from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)2.jpeg";
import saleImg2 from "./assets/images/TopsImage/0165699a08d1c3ad78426787ff08ce81.jpg"; import saleImg2Hover from "./assets/images/TopsImage/83395c149a54a1680c39fa1a99f397f7.jpg";
import saleImg3 from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)1.jpeg"; import saleImg3Hover from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)2.jpeg";
import saleImg4 from "./assets/images/TopsImage/0165699a08d1c3ad78426787ff08ce81.jpg"; import saleImg4Hover from "./assets/images/TopsImage/83395c149a54a1680c39fa1a99f397f7.jpg";
import saleImg5 from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)1.jpeg"; import saleImg5Hover from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)2.jpeg";
import saleImg6 from "./assets/images/TopsImage/0165699a08d1c3ad78426787ff08ce81.jpg"; import saleImg6Hover from "./assets/images/TopsImage/83395c149a54a1680c39fa1a99f397f7.jpg";
import saleImg7 from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)1.jpeg"; import saleImg7Hover from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)2.jpeg";
import saleImg8 from "./assets/images/TopsImage/0165699a08d1c3ad78426787ff08ce81.jpg"; import saleImg8Hover from "./assets/images/TopsImage/83395c149a54a1680c39fa1a99f397f7.jpg";
import saleImg9 from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)1.jpeg"; import saleImg9Hover from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)2.jpeg";
import saleImg10 from "./assets/images/TopsImage/0165699a08d1c3ad78426787ff08ce81.jpg"; import saleImg10Hover from "./assets/images/TopsImage/83395c149a54a1680c39fa1a99f397f7.jpg";



/*============MOST WANTED============*/
import mostWantedImg1 from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)1.jpeg"; import mostWantedImg1Hover from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)2.jpeg";
import mostWantedImg2 from "./assets/images/TopsImage/0165699a08d1c3ad78426787ff08ce81.jpg"; import mostWantedImg2Hover from "./assets/images/TopsImage/83395c149a54a1680c39fa1a99f397f7.jpg";
import mostWantedImg3 from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)1.jpeg"; import mostWantedImg3Hover from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)2.jpeg";
import mostWantedImg4 from "./assets/images/TopsImage/0165699a08d1c3ad78426787ff08ce81.jpg"; import mostWantedImg4Hover from "./assets/images/TopsImage/83395c149a54a1680c39fa1a99f397f7.jpg";
import mostWantedImg5 from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)1.jpeg"; import mostWantedImg5Hover from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)2.jpeg";
import mostWantedImg6 from "./assets/images/TopsImage/0165699a08d1c3ad78426787ff08ce81.jpg"; import mostWantedImg6Hover from "./assets/images/TopsImage/83395c149a54a1680c39fa1a99f397f7.jpg";
import mostWantedImg7 from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)1.jpeg"; import mostWantedImg7Hover from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)2.jpeg";
import mostWantedImg8 from "./assets/images/TopsImage/0165699a08d1c3ad78426787ff08ce81.jpg"; import mostWantedImg8Hover from "./assets/images/TopsImage/83395c149a54a1680c39fa1a99f397f7.jpg";
import mostWantedImg9 from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)1.jpeg"; import mostWantedImg9Hover from "./assets/images/TopsImage/BoleroLaceTop-Black(Pre-Order)2.jpeg";
import mostWantedImg10 from "./assets/images/TopsImage/0165699a08d1c3ad78426787ff08ce81.jpg"; import mostWantedImg10Hover from "./assets/images/TopsImage/83395c149a54a1680c39fa1a99f397f7.jpg";
/*=======================================================*/

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);


  const staticLuxuryProducts = [
  
    // -------------------------------------------------------------------
    { id: "rhea-lace-top", category: "tops", name: "RHEA LACE TOP", price: 50.95, badge: "NEW IN", colors: ["#000000"], image: imgRheaLaceTop, hoverImage: imgRheaLaceTopHover },
    { id: "vera-wide-trousers", category: "tops", name: "VERA WIDE TROUSERS", price: 65.95, badge: "", colors: ["#000000"], image: imgVeraWideTrousers, hoverImage: imgVeraWideTrousersHover },
    { id: "aria-knit-sweater", category: "tops", name: "ARIA KNIT SWEATER", price: 85.00, badge: "LIMITED STOCK", colors: ["#000000"], image: imgAriaKnitSweater, hoverImage: imgAriaKnitSweaterHover },
    { id: "button-top-yellow", category: "tops", name: "BUTTON TOP LIGHT", price: 40.95, badge: "SALE", colors: ["#87CEEB"], image: imgButtonTopYellow, hoverImage: imgButtonTopYellowHover },
    { id: "ballerina-lace-top", category: "tops", name: "NEW BALLERINA BASIC TOP", price: 61.95, badge: "", colors: ["#8B0000"], image: imgBallerinaLaceTop, hoverImage: imgBallerinaLaceTopHover },
    { id: "pretty-lace-darkred", category: "tops", name: "PRETTY LACE TOP", price: 61.95, badge: "NEW IN", colors: ["#029d5de3"], image: imgPrettyLaceDarkred, hoverImage: imgPrettyLaceDarkredHover },
    { id: "pretty-leo-top", category: "tops", name: "PRETTY LEO LACE TOP", price: 61.95, badge: "", colors: ["#FFFFFF"], image: imgPrettyLeoTop, hoverImage: imgPrettyLeoTopHover },
    { id: "pearl-button-black", category: "tops", name: "PEARL BUTTON TOP", price: 61.95, badge: "", colors: ["#FFB6C1"], image: imgPearlButtonBlack, hoverImage: imgPearlButtonBlackHover },
    { id: "celeste-silk-blouse", category: "tops", name: "CELESTE SILK BLOUSE", price: 95.00, badge: "NEW IN", colors: ["#FFFFFF"], image: imgCelesteSilkBlouse, hoverImage: imgCelesteSilkBlouseHover },
    { id: "cropped-turtleneck-knit", category: "tops", name: "CROPPED TURTLENECK KNIT", price: 45.00, badge: "", colors: ["#FFFFFF"], image: imgCroppedTurtleneckKnit, hoverImage: imgCroppedTurtleneckKnitHover },
    { id: "minimalist-cotton-tee", category: "tops", name: "MINIMALIST COTTON TEE", price: 35.00, badge: "SALE", colors: ["#8B0000"], image: imgMinimalistCottonTee, hoverImage: imgMinimalistCottonTeeHover },
    { id: "ribbed-knit-luxury", category: "tops", name: "RIBBED KNIT LUXURY TOP", price: 55.00, badge: "", colors: ["#FFFFFF"], image: imgRibbedKnitLuxury, hoverImage: imgRibbedKnitLuxuryHover },
    { id: "premium-linen-shirt", category: "tops", name: "PREMIUM LINEN SHIRT", price: 75.00, badge: "NEW IN", colors: ["#8B0000"], image: imgPremiumLinenShirt, hoverImage: imgPremiumLinenShirtHover },
    { id: "velvet-night-bodysuit", category: "tops", name: "VELVET NIGHT BODYSUIT", price: 65.00, badge: "LIMITED STOCK", colors: ["#000000"], image: imgVelvetNightBodysuit, hoverImage: imgVelvetNightBodysuitHover },
    { id: "diana-midi-dress", category: "tops", name: "DIANA MIDI KNIT DRESS", price: 120.00, badge: "NEW IN", colors: ["#FFFFFF"], image: imgDianaMidiDress, hoverImage: imgDianaMidiDressHover },
    { id: "selene-corset-top", category: "tops", name: "SELENE CORSET TOP", price: 58.00, badge: "", colors: ["#87CEEB"], image: imgSeleneCorsetTop, hoverImage: imgSeleneCorsetTopHover },
    { id: "athena-blazer-jacket", category: "tops", name: "ATHENA OVERSIZED BLAZER", price: 145.00, badge: "", colors: [ "#2f1b1bf2"], image: imgAthenaBlazerJacket, hoverImage: imgAthenaBlazerJacketHover },
    { id: "aurora-satin-skirt", category: "tops", name: "AURORA SATIN SKIRT", price: 78.00, badge: "", colors: ["#FFFFFF"], image: imgAuroraSatinSkirt, hoverImage: imgAuroraSatinSkirtHover },
    { id: "freya-wrap-cardigan", category: "tops", name: "FREYA WRAP CARDIGAN", price: 89.00, badge: "LIMITED STOCK", colors: ["#2f1b1bf2"], image: imgFreyaWrapCardigan, hoverImage: imgFreyaWrapCardiganHover },
    { id: "iris-mesh-longsleeve", category: "tops", name: "IRIS MESH LONGSLEEVE", price: 49.00, badge: "SALE", colors: ["#FFB6C1"], image: imgIrisMeshLongsleeve, hoverImage: imgIrisMeshLongsleeveHover },

    // -------------------------------------------------------------------
  
    // -------------------------------------------------------------------
    { id: "lace-luxury-corset", category: "lace-tops", name: "LACE LUXURY CORSET", price: 69.95, badge: "NEW IN", colors: ["#0e1648"], image: laceImg1, hoverImage: laceImg1Hover },
    { id: "vintage-cream-lace", category: "lace-tops", name: "VINTAGE CREAM LACE BLOUSE", price: 55.00, badge: "", colors: ["#FFFFFF"], image: laceImg2, hoverImage: laceImg2Hover },
    { id: "amour-lace-crop", category: "lace-tops", name: "AMOUR LACE CROP TOP", price: 42.50, badge: "SALE", colors: ["#000000"], image: laceImg3, hoverImage: laceImg3Hover },
    { id: "charlotte-mesh-top", category: "lace-tops", name: "CHARLOTTE LACE MESH", price: 48.00, badge: "LIMITED STOCK", colors: ["#000000"], image: laceImg4, hoverImage: laceImg4Hover },
    { id: "seraphina-longsleeve", category: "lace-tops", name: "SERAPHINA LACE TOP", price: 64.00, badge: "", colors: ["#8B0000"], image: laceImg5, hoverImage: laceImg5Hover },
    { id: "coquette-bow-lace", category: "lace-tops", name: "COQUETTE BOW LACE TEE", price: 39.95, badge: "NEW IN", colors: ["#000000"], image: laceImg6, hoverImage: laceImg6Hover },
    { id: "noir-backless-lace", category: "lace-tops", name: "NOIR BACKLESS LACE TOP", price: 58.00, badge: "", colors: ["#bf0909"], image: laceImg7, hoverImage: laceImg7Hover },
    { id: "angelic-white-lace", category: "lace-tops", name: "ANGELIC WHITE LACE BODICE", price: 72.00, badge: "", colors: ["#FFFFFF"], image: laceImg8, hoverImage: laceImg8Hover },
    { id: "romantic-rose-top", category: "lace-tops", name: "ROMANTIC ROSE LACE TOP", price: 49.95, badge: "SALE", colors: ["#000000"], image: laceImg9, hoverImage: laceImg9Hover },
    { id: "gothic-glam-lace", category: "lace-tops", name: "GOTHIC GLAM LACE BLOUSE", price: 79.00, badge: "LIMITED STOCK", colors: ["#FFFFFF"], image: laceImg10, hoverImage: laceImg10Hover },
    { id: "secret-garden-lace", category: "lace-tops", name: "SECRET GARDEN LACE TOP", price: 53.50, badge: "", colors: ["#000000"], image: laceImg11, hoverImage: laceImg11Hover },
    { id: "belladonna-sleeveless", category: "lace-tops", name: "BELLADONNA LACE CAMI", price: 35.00, badge: "", colors: ["#87CEEB"], image: laceImg12, hoverImage: laceImg12Hover },
    { id: "vienna-highneck-lace", category: "lace-tops", name: "VIENNA HIGH-NECK LACE", price: 66.00, badge: "NEW IN", colors: ["#8B0000"], image: laceImg13, hoverImage: laceImg13Hover },
    { id: "florentine-lace-bodysuit", category: "lace-tops", name: "FLORENTINE LACE BODYSUIT", price: 85.00, badge: "", colors: ["#000000"], image: laceImg14, hoverImage: laceImg14Hover },
    { id: "sweetheart-lace-knit", category: "lace-tops", name: "SWEETHEART LACE KNIT", price: 59.95, badge: "", colors: ["#000000"], image: laceImg15, hoverImage: laceImg15Hover },
    { id: "isabella-sheer-top", category: "lace-tops", name: "ISABELLA SHEER LACE", price: 47.00, badge: "SALE", colors: ["#2f1b1bf2"], image: laceImg16, hoverImage: laceImg16Hover },
    { id: "midnight-lace-shrug", category: "lace-tops", name: "MIDNIGHT LACE SHRUG", price: 38.00, badge: "", colors: ["#FFFFFF"], image: laceImg17, hoverImage: laceImg17Hover },
   
    // ==========================================
  
    // ==========================================
    { id: "skirts-luxury-corset", category: "skirts", name: "LACE LUXURY CORSET", price: 69.95, badge: "NEW IN", colors: ["#FDFBD3"], image: skirtsImg1, hoverImage: skirtsImg1Hover },
    { id: "skirts-vintage-cream", category: "skirts", name: "VINTAGE CREAM LACE BLOUSE", price: 55.00, badge: "", colors: ["#000000"], image: skirtsImg2, hoverImage: skirtsImg2Hover },
    { id: "skirts-amour-crop", category: "skirts", name: "AMOUR LACE CROP TOP", price: 42.50, badge: "SALE", colors: ["#FFFFFF"], image: skirtsImg3, hoverImage: skirtsImg3Hover },
    { id: "skirts-charlotte-mesh", category: "skirts", name: "CHARLOTTE LACE MESH", price: 48.00, badge: "LIMITED STOCK", colors: ["#ecfa23"], image: skirtsImg4, hoverImage: skirtsImg4Hover },
    { id: "skirts-seraphina-longsleeve", category: "skirts", name: "SERAPHINA LACE TOP", price: 64.00, badge: "", colors: ["#000000"], image: skirtsImg5, hoverImage: skirtsImg5Hover },
    { id: "skirts-coquette-bow", category: "skirts", name: "COQUETTE BOW LACE TEE", price: 39.95, badge: "NEW IN", colors: ["#000000"], image: skirtsImg6, hoverImage: skirtsImg6Hover },
    { id: "skirts-noir-backless", category: "skirts", name: "NOIR BACKLESS LACE TOP", price: 58.00, badge: "", colors: ["#8B0000"], image: skirtsImg7, hoverImage: skirtsImg7Hover },
    { id: "skirts-angelic-white", category: "skirts", name: "ANGELIC WHITE LACE BODICE", price: 72.00, badge: "", colors: ["#FFFFFF"], image: skirtsImg8, hoverImage: skirtsImg8Hover },
    { id: "skirts-romantic-rose", category: "skirts", name: "ROMANTIC ROSE LACE TOP", price: 49.95, badge: "SALE", colors: ["#FFC0CB"], image: skirtsImg9, hoverImage: skirtsImg9Hover },
    { id: "skirts-gothic-glam", category: "skirts", name: "GOTHIC GLAM LACE BLOUSE", price: 79.00, badge: "LIMITED STOCK", colors: ["#FFFFFF"], image: skirtsImg10, hoverImage: skirtsImg10Hover },

    // ==========================================
  
    // ==========================================
    { id: "mostwanted-luxury-corset", category: "most-Wanted", name: "LACE LUXURY CORSET", price: 69.95, badge: "NEW IN", colors: ["#000000"], image: mostWantedImg1, hoverImage: mostWantedImg1Hover },
    { id: "mostwanted-vintage-cream", category: "most-Wanted", name: "VINTAGE CREAM LACE BLOUSE", price: 55.00, badge: "", colors: ["#FDFBD3"], image: mostWantedImg2, hoverImage: mostWantedImg2Hover },
    { id: "mostwanted-amour-crop", category: "most-Wanted", name: "AMOUR LACE CROP TOP", price: 42.50, badge: "SALE", colors: ["#8B0000"], image: mostWantedImg3, hoverImage: mostWantedImg3Hover },
    { id: "mostwanted-charlotte-mesh", category: "most-Wanted", name: "CHARLOTTE LACE MESH", price: 48.00, badge: "LIMITED STOCK", colors: ["#FFFFFF"], image: mostWantedImg4, hoverImage: mostWantedImg4Hover },
    { id: "mostwanted-seraphina-longsleeve", category: "most-Wanted", name: "SERAPHINA LACE TOP", price: 64.00, badge: "", colors: ["#000000"], image: mostWantedImg5, hoverImage: mostWantedImg5Hover },
    { id: "mostwanted-coquette-bow", category: "most-Wanted", name: "COQUETTE BOW LACE TEE", price: 39.95, badge: "NEW IN", colors: ["#FFB6C1"], image: mostWantedImg6, hoverImage: mostWantedImg6Hover },
    { id: "mostwanted-noir-backless", category: "most-Wanted", name: "NOIR BACKLESS LACE TOP", price: 58.00, badge: "", colors: ["#000000"], image: mostWantedImg7, hoverImage: mostWantedImg7Hover },
    { id: "mostwanted-angelic-white", category: "most-Wanted", name: "ANGELIC WHITE LACE BODICE", price: 72.00, badge: "", colors: ["#FFFFFF"], image: mostWantedImg8, hoverImage: mostWantedImg8Hover },
    { id: "mostwanted-romantic-rose", category: "most-Wanted", name: "ROMANTIC ROSE LACE TOP", price: 49.95, badge: "SALE", colors: ["#FFC0CB"], image: mostWantedImg9, hoverImage: mostWantedImg9Hover },
    { id: "mostwanted-gothic-glam", category: "most-Wanted", name: "GOTHIC GLAM LACE BLOUSE", price: 79.00, badge: "LIMITED STOCK", colors: ["#1a1a1a"], image: mostWantedImg10, hoverImage: mostWantedImg10Hover },

    // ==========================================
  
    // ==========================================
    { id: "sweater-luxury-corset", category: "sweater", name: "LACE LUXURY CORSET", price: 69.95, badge: "NEW IN", colors: ["#FFB6C1"], image: sweaterImg1, hoverImage: sweaterImg1Hover },
    { id: "sweater-vintage-cream", category: "sweater", name: "VINTAGE CREAM LACE BLOUSE", price: 55.00, badge: "", colors: ["#523434"], image: sweaterImg2, hoverImage: sweaterImg2Hover },
    { id: "sweater-amour-crop", category: "sweater", name: "AMOUR LACE CROP TOP", price: 42.50, badge: "SALE", colors: ["#505050"], image: sweaterImg3, hoverImage: sweaterImg3Hover },
    { id: "sweater-charlotte-mesh", category: "sweater", name: "CHARLOTTE LACE MESH", price: 48.00, badge: "LIMITED STOCK", colors: ["#505050"], image: sweaterImg4, hoverImage: sweaterImg4Hover },
    { id: "sweater-seraphina-longsleeve", category: "sweater", name: "SERAPHINA LACE TOP", price: 64.00, badge: "", colors: ["#000000"], image: sweaterImg5, hoverImage: sweaterImg5Hover },
    { id: "sweater-coquette-bow", category: "sweater", name: "COQUETTE BOW LACE TEE", price: 39.95, badge: "NEW IN", colors: ["#FFFFFF"], image: sweaterImg6, hoverImage: sweaterImg6Hover },
    { id: "sweater-noir-backless", category: "sweater", name: "NOIR BACKLESS LACE TOP", price: 58.00, badge: "", colors: ["#FFFFFF"], image: sweaterImg7, hoverImage: sweaterImg7Hover },
    { id: "sweater-angelic-white", category: "sweater", name: "ANGELIC WHITE LACE BODICE", price: 72.00, badge: "", colors: ["#ffb9f9"], image: sweaterImg8, hoverImage: sweaterImg8Hover },
    { id: "sweater-romantic-rose", category: "sweater", name: "ROMANTIC ROSE LACE TOP", price: 49.95, badge: "SALE", colors: ["#523434"], image: sweaterImg9, hoverImage: sweaterImg9Hover },
    { id: "sweater-gothic-glam", category: "sweater", name: "GOTHIC GLAM LACE BLOUSE", price: 79.00, badge: "LIMITED STOCK", colors: ["#f9eaea"], image: sweaterImg10, hoverImage: sweaterImg10Hover },

    // ==========================================
    
    // ==========================================
    { id: "sale-luxury-corset", category: "sale", name: "LACE LUXURY CORSET", price: 69.95, badge: "NEW IN", colors: ["#000000"], image: saleImg1, hoverImage: saleImg1Hover },
    { id: "sale-vintage-cream", category: "sale", name: "VINTAGE CREAM LACE BLOUSE", price: 55.00, badge: "", colors: ["#FDFBD3"], image: saleImg2, hoverImage: saleImg2Hover },
    { id: "sale-amour-crop", category: "sale", name: "AMOUR LACE CROP TOP", price: 42.50, badge: "SALE", colors: ["#8B0000"], image: saleImg3, hoverImage: saleImg3Hover },
    { id: "sale-charlotte-mesh", category: "sale", name: "CHARLOTTE LACE MESH", price: 48.00, badge: "LIMITED STOCK", colors: ["#FFFFFF"], image: saleImg4, hoverImage: saleImg4Hover },
    { id: "sale-seraphina-longsleeve", category: "sale", name: "SERAPHINA LACE TOP", price: 64.00, badge: "", colors: ["#000000"], image: saleImg5, hoverImage: saleImg5Hover },
    { id: "sale-coquette-bow", category: "sale", name: "COQUETTE BOW LACE TEE", price: 39.95, badge: "NEW IN", colors: ["#FFB6C1"], image: saleImg6, hoverImage: saleImg6Hover },
    { id: "sale-noir-backless", category: "sale", name: "NOIR BACKLESS LACE TOP", price: 58.00, badge: "", colors: ["#000000"], image: saleImg7, hoverImage: saleImg7Hover },
    { id: "sale-angelic-white", category: "sale", name: "ANGELIC WHITE LACE BODICE", price: 72.00, badge: "", colors: ["#FFFFFF"], image: saleImg8, hoverImage: saleImg8Hover },
    { id: "sale-romantic-rose", category: "sale", name: "ROMANTIC ROSE LACE TOP", price: 49.95, badge: "SALE", colors: ["#FFC0CB"], image: saleImg9, hoverImage: saleImg9Hover },
    { id: "sale-gothic-glam", category: "sale", name: "GOTHIC GLAM LACE BLOUSE", price: 79.00, badge: "LIMITED STOCK", colors: ["#1a1a1a"], image: saleImg10, hoverImage: saleImg10Hover },

    // ==========================================
   
    // ==========================================
    { id: "news-luxury-corset", category: "news", name: "LACE LUXURY CORSET", price: 69.95, badge: "NEW IN", colors: ["#000000"], image: newsImg1, hoverImage: newsImg1Hover },
    { id: "news-vintage-cream", category: "news", name: "VINTAGE CREAM LACE BLOUSE", price: 55.00, badge: "", colors: ["#FDFBD3"], image: newsImg2, hoverImage: newsImg2Hover },
    { id: "news-amour-crop", category: "news", name: "AMOUR LACE CROP TOP", price: 42.50, badge: "SALE", colors: ["#8B0000"], image: newsImg3, hoverImage: newsImg3Hover },
    { id: "news-charlotte-mesh", category: "news", name: "CHARLOTTE LACE MESH", price: 48.00, badge: "LIMITED STOCK", colors: ["#FFFFFF"], image: newsImg4, hoverImage: newsImg4Hover },
    { id: "news-seraphina-longsleeve", category: "news", name: "SERAPHINA LACE TOP", price: 64.00, badge: "", colors: ["#000000"], image: newsImg5, hoverImage: newsImg5Hover },
    { id: "news-coquette-bow", category: "news", name: "COQUETTE BOW LACE TEE", price: 39.95, badge: "NEW IN", colors: ["#FFB6C1"], image: newsImg6, hoverImage: newsImg6Hover },
    { id: "news-noir-backless", category: "news", name: "NOIR BACKLESS LACE TOP", price: 58.00, badge: "", colors: ["#000000"], image: newsImg7, hoverImage: newsImg7Hover },
    { id: "news-angelic-white", category: "news", name: "ANGELIC WHITE LACE BODICE", price: 72.00, badge: "", colors: ["#FFFFFF"], image: newsImg8, hoverImage: newsImg8Hover },
    { id: "news-romantic-rose", category: "news", name: "ROMANTIC ROSE LACE TOP", price: 49.95, badge: "SALE", colors: ["#FFC0CB"], image: newsImg9, hoverImage: newsImg9Hover },
    { id: "news-gothic-glam", category: "news", name: "GOTHIC GLAM LACE BLOUSE", price: 79.00, badge: "LIMITED STOCK", colors: ["#1a1a1a"], image: newsImg10, hoverImage: newsImg10Hover },

    // ==========================================

    // ==========================================
    { id: "pantalon-luxury-corset", category: "pantalon", name: "LACE LUXURY CORSET", price: 69.95, badge: "NEW IN", colors: ["#092341"], image: pantalonImg1, hoverImage: pantalonImg1Hover },
    { id: "pantalon-vintage-cream", category: "pantalon", name: "VINTAGE CREAM LACE BLOUSE", price: 55.00, badge: "", colors: ["#2d1c1c"], image: pantalonImg2, hoverImage: pantalonImg2Hover },
    { id: "pantalon-amour-crop", category: "pantalon", name: "AMOUR LACE CROP TOP", price: 42.50, badge: "SALE", colors: ["#3c3c3c"], image: pantalonImg3, hoverImage: pantalonImg3Hover },
    { id: "pantalon-charlotte-mesh", category: "pantalon", name: "CHARLOTTE LACE MESH", price: 48.00, badge: "LIMITED STOCK", colors: ["#079af5"], image: pantalonImg4, hoverImage: pantalonImg4Hover },
    { id: "pantalon-seraphina-longsleeve", category: "pantalon", name: "SERAPHINA LACE TOP", price: 64.00, badge: "", colors: ["#061b38"], image: pantalonImg5, hoverImage: pantalonImg5Hover },
    { id: "pantalon-coquette-bow", category: "pantalon", name: "COQUETTE BOW LACE TEE", price: 39.95, badge: "NEW IN", colors: ["#ffffff"], image: pantalonImg6, hoverImage: pantalonImg6Hover },
    { id: "pantalon-noir-backless", category: "pantalon", name: "NOIR BACKLESS LACE TOP", price: 58.00, badge: "", colors: ["#303030"], image: pantalonImg7, hoverImage: pantalonImg7Hover },
    { id: "pantalon-angelic-white", category: "pantalon", name: "ANGELIC WHITE LACE BODICE", price: 72.00, badge: "", colors: ["#000000"], image: pantalonImg8, hoverImage: pantalonImg8Hover },
    { id: "pantalon-romantic-rose", category: "pantalon", name: "ROMANTIC ROSE LACE TOP", price: 49.95, badge: "SALE", colors: ["#ffffff"], image: pantalonImg9, hoverImage: pantalonImg9Hover },
    { id: "pantalon-gothic-glam", category: "pantalon", name: "GOTHIC GLAM LACE BLOUSE", price: 79.00, badge: "LIMITED STOCK", colors: ["#ffffff"], image: pantalonImg10, hoverImage: pantalonImg10Hover }
  ];
 
  //-------------------------------------------------


  const handleAddToCart = (productToAdd) => {
    setCartItems((prevItems) => {
      const isExist = prevItems.find(item => item.id === productToAdd.id && item.size === productToAdd.size);
      if (isExist) {
        return prevItems.map(item => 
          (item.id === productToAdd.id && item.size === productToAdd.size)
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevItems, { ...productToAdd, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  return (
    <Router>
      <ScrollToTop /> 

      <CartBar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems} 
        setCartItems={setCartItems}
      />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        
       
        <Route path="/shop/tops" element={<Tops products={staticLuxuryProducts.filter(p => p.category === "tops")} onQuickAdd={handleAddToCart} />} />
        
       
        <Route path="/shop/lace-tops" element={<LaceTops products={staticLuxuryProducts.filter(p => p.category === "lace-tops")} onQuickAdd={handleAddToCart} />} />
         <Route path="/shop/skirts" element={<Skirts products={staticLuxuryProducts.filter(p => p.category === "skirts")} onQuickAdd={handleAddToCart} />} />
           <Route path="/shop/sweater" element={<Sweater products={staticLuxuryProducts.filter(p => p.category === "sweater")} onQuickAdd={handleAddToCart} />} />
             <Route path="/shop/pantalon" element={<Pantalon products={staticLuxuryProducts.filter(p => p.category === "pantalon")} onQuickAdd={handleAddToCart} />} />
               <Route path="/shop/sale" element={<Sale products={staticLuxuryProducts.filter(p => p.category === "sale")} onQuickAdd={handleAddToCart} />} />
                <Route path="/shop/news" element={<News products={staticLuxuryProducts.filter(p => p.category === "news")} onQuickAdd={handleAddToCart} />} />
                <Route path="/shop/most-wanted" element={<MostWanted products={staticLuxuryProducts.filter(p => p.category === "most-wanted")} onQuickAdd={handleAddToCart} />} />


        <Route path="/product/:id" element={<ProductDetailsPage products={staticLuxuryProducts} onProductAdd={handleAddToCart} />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;