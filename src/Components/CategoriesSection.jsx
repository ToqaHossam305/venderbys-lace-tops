import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/CategoriesSection.css';

import topsBaseImg from '../assets/images/TopsImage/Screenshot_19-6-2026_65543_www.instagram.com.jpeg'; 
import top1 from "../assets/images/TopsImage/bf663bed02a349f13cb7fd8886e06272.jpg";
import top1Hover from "../assets/images/TopsImage/bf663bed02a349f13cb7fd8886e06272.jpg";
import top2 from "../assets/images/TopsImage/6c9c657ec1eb10d2129b5e7f56ddcbed.jpg";
import top2Hover from "../assets/images/TopsImage/LolaLaceCorsetTop-Yellow.jpg";
import top3 from "../assets/images/TopsImage/bcf6a3a90e53bafc055eb541dab3809e.jpg";
import top3Hover from "../assets/images/TopsImage/38705216839b9757f91d71dc17c3598c.jpg";
import top4 from "../assets/images/TopsImage/285c3147299174f93493b9dd491b7458.jpg";
import top4Hover from "../assets/images/TopsImage/90b07c08c3d338d78db01021c43aebf2.jpg";
import top5 from "../assets/images/TopsImage/cf58b82253b3eb3b8a4fa59770c3f9d8.jpg";
import top5Hover from "../assets/images/TopsImage/93bbae74dcff7a7b83d6a9b069e541d6.jpg";
import top6 from "../assets/images/TopsImage/f62d534f5c06348fbf70626d5c16fb62.jpg";
import top6Hover from "../assets/images/TopsImage/c71a472a6d427af41a79e81e0fe8e43e.jpg";

import laceBaseImg from "../assets/images/LaceTops/9062b3e90edee01cc9599f896908fa55.jpg";
import lace1 from "../assets/images/LaceTops/5caef6e5b3da8428a7bb265114556828.webp.jpg"; 
import lace1Hover from "../assets/images/LaceTops/9fc4757e39875dcba8360b8e736080a2.webp.jpg";
import lace2 from "../assets/images/LaceTops/70da4a9587cc628be7629ca25d968222.jpg";
import lace2Hover from "../assets/images/LaceTops/70da4a9587cc628be7629ca25d968222.jpg";
import lace3 from "../assets/images/LaceTops/RheaLaceTop-Black1.jpeg";
import lace3Hover from "../assets/images/LaceTops/RheaLaceTop-Black2.jpeg";
import lace4 from "../assets/images/LaceTops/Screenshot_19-6-2026_18058_venderbys.com.jpeg";
import lace4Hover from "../assets/images/LaceTops/Screenshot_19-6-2026_18126_venderbys.com.jpeg";
import lace5 from "../assets/images/LaceTops/Screenshot_23-6-2026_41142_venderbys.com.jpeg";
import lace5Hover from "../assets/images/LaceTops/Screenshot_23-6-2026_4133_venderbys.com.jpeg";
import lace6 from "../assets/images/LaceTops/6a2b26099d18348e68e5b7d49a05e5d9.jpg";
import lace6Hover from "../assets/images/LaceTops/160be62893d0bc3b6ecd63246e677ef6.jpg";

import pantBaseImg from "../assets/images/PantalonPage/ea423f2e20ca01cc46549717bb78f5f6.jpg"; 
import pant1 from "../assets/images/PantalonPage/a90b5243aed3e0c1bb93bcbb4babbb98.jpg"; 
import pant1Hover from "../assets/images/PantalonPage/4c7000d41503e8a4a555a6a8f1be3e8b.jpg";
import pant2 from "../assets/images/PantalonPage/0cbeef5083683671d279ee43a28780a2.jpg";
import pant2Hover from "../assets/images/PantalonPage/c1c2835a00f1ed1a2c829b9a114fea87.jpg";
import pant3 from "../assets/images/PantalonPage/a081138079fab590cb663c29d2d99bad.jpg";
import pant3Hover from "../assets/images/PantalonPage/f56f223197f7a75af32ba1cd65481f6f.jpg";
import pant4 from "../assets/images/PantalonPage/c1c2835a00f1ed1a2c829b9a114fea87.jpg";
import pant4Hover from "../assets/images/PantalonPage/b40159b94ec12a4c4b3e9029315cd60f (1).jpg";
import pant5 from "../assets/images/PantalonPage/6be584a9d8b645ef4830efee1247dfbe.jpg";
import pant5Hover from "../assets/images/PantalonPage/7364bbc018e98f3b01a0b64ac5b0375f.jpg";
import pant6 from "../assets/images/PantalonPage/0d5f2a8df143d2a7f30fe3dffbce61c7.jpg";
import pant6Hover from "../assets/images/PantalonPage/88cba11fade306eee387f5b2c098a5d2.jpg";

import skirtBaseImg from "../assets/images/SkirtsPageImage/df9eba4fd5b4b0ae19828ccd7b138c2e.jpg";
import skirt1 from "../assets/images/SkirtsPageImage/Screenshot_19-6-2026_7943_venderbys.com.jpeg";
import skirt1Hover from "../assets/images/SkirtsPageImage/Screenshot_19-6-2026_7913_venderbys.com.jpeg";
import skirt2 from "../assets/images/SkirtsPageImage/4ae78cb5e8bae25a8f35018fae2a035b.jpg";
import skirt2Hover from "../assets/images/SkirtsPageImage/52cb1af15da0edb13efe02751af5ed1b.jpg";
import skirt3 from "../assets/images/SkirtsPageImage/41b058762567350e9a16b3a74ee718ee.jpg";
import skirt3Hover from "../assets/images/SkirtsPageImage/aa7893faf7459d8fb0adacba6d511543.jpg";
import skirt4 from "../assets/images/SkirtsPageImage/a8ae8363f223120a3a6837c3bacf8fb9.jpg";
import skirt4Hover from "../assets/images/SkirtsPageImage/080d94ce9092fd6ae6ca17927e0dab35.jpg";
import skirt5 from "../assets/images/SkirtsPageImage/Screenshot_19-6-2026_7136_venderbys.com.jpeg";
import skirt5Hover from "../assets/images/SkirtsPageImage/Screenshot_19-6-2026_71246_venderbys.com.jpeg";
import skirt6 from "../assets/images/SkirtsPageImage/dd10d99a6a6ecdfb0d989967e2384972.jpg";
import skirt6Hover from "../assets/images/SkirtsPageImage/d10cf92a360220e7e5cc5533a952437e.jpg";

import sweaterBaseImg from "../assets/images/SweaterPage/e1538903aa82aa7885adece31a12aa6d.jpg";
import sweater1 from "../assets/images/SweaterPage/0b0a65ff6454be6febe3d3a4025de7ff.jpg"; 
import sweater1Hover from "../assets/images/SweaterPage/d08ffe323bf0af32d0f3f2048b04c682.jpg";
import sweater2 from "../assets/images/SweaterPage/c6f6708294d519048c3e97bef7b6f6d8.jpg";
import sweater2Hover from "../assets/images/SweaterPage/c6f6708294d519048c3e97bef7b6f6d8.jpg";
import sweater3 from "../assets/images/SweaterPage/3bb8a03751aad8c84d73c62517fc919d (1).jpg";
import sweater3Hover from "../assets/images/SweaterPage/c5063502bad676185f549ef13ce07527 (1).jpg";
import sweater4 from "../assets/images/SweaterPage/5ef5743aba9de299d2565bd5399ae8eb.jpg";
import sweater4Hover from "../assets/images/SweaterPage/fd46ac5f55efc41490d5126ff28cadff.jpg";
import sweater5 from "../assets/images/SweaterPage/9f02a102a83e31ddd4e193859bf00f49.jpg";
import sweater5Hover from "../assets/images/SweaterPage/839b43ce44b2111e3639924a0b8dd4de.jpg";
import sweater6 from "../assets/images/SweaterPage/45b7b8c2a7421bb81230a4474e1d8998.jpg";
import sweater6Hover from "../assets/images/SweaterPage/e42e68c9a16f856e38189d434ddb6992.jpg";

const categoriesData = {
  tops: [
    { id: 'sm-tops', isSeeMore: true, title: "See More Tops", path: "/shop/tops", image: topsBaseImg },
    { id: 101, title: "Luxe Silk Top", price: "45,00 EUR", badge: "NEW", image: top1, hoverImage: top1Hover },
    { id: 102, title: "Satin Crop Top", price: "38,00 EUR", badge: "", image: top2, hoverImage: top2Hover },
    { id: 103, title: " Linen Summer Top", price: "42,00 EUR", badge: "", image: top3, hoverImage: top3Hover },
    { id: 104, title: "Elegant Knit Top", price: "50,00 EUR", badge: "LIMITED", image: top4, hoverImage: top4Hover },
    { id: 105, title: "Classic Ribbed Top", price: "35,00 EUR", badge: "", image: top5, hoverImage: top5Hover },
    { id: 106, title: "Premium Cotton Top", price: "40,00 EUR", badge: "", image: top6, hoverImage: top6Hover },
  ],
  'lace-tops': [
    { id: 'sm-lace', isSeeMore: true, title: "See More Lace Tops", path: "/shop/lace-tops", image: laceBaseImg },
    { id: 201, title: "Rhea Lace Top", price: "50,95 EUR", badge: "HOT", image: lace1, hoverImage: lace1Hover },
    { id: 202, title: "Bolero Lace Top", price: "54,95 EUR", badge: "", image: lace2, hoverImage: lace2Hover },
    { id: 203, title: "Mara Lace Top", price: "40,95 EUR", badge: "SOLD OUT", isSoldOut: true, image: lace3, hoverImage: lace3Hover },
    { id: 204, title: "Vintage Lace Corset", price: "60,00 EUR", badge: "", image: lace4, hoverImage: lace4Hover },
    { id: 205, title: "Floral Mesh Top", price: "48,00 EUR", badge: "", image: lace5, hoverImage: lace5Hover },
    { id: 206, title: "Luxury Sleeve Lace", price: "58,00 EUR", badge: "", image: lace6, hoverImage: lace6Hover },
  ],
  pantalon: [
    { id: 'sm-pant', isSeeMore: true, title: "See More Trousers", path: "/shop/pantalon", image: pantBaseImg },
    { id: 301, title: "Classic Tailored Pants", price: "75,00 EUR", badge: "", image: pant1, hoverImage: pant1Hover },
    { id: 302, title: "High-Waist Satin Trousers", price: "80,00 EUR", badge: "NEW", image: pant2, hoverImage: pant2Hover },
    { id: 303, title: "Linen Wide-Leg Pants", price: "65,00 EUR", badge: "", image: pant3, hoverImage: pant3Hover },
    { id: 304, title: "Urban Cargo Trousers", price: "70,00 EUR", badge: "", image: pant4, hoverImage: pant4Hover },
    { id: 305, title: "Slim Pleated Trousers", price: "72,00 EUR", badge: "", image: pant5, hoverImage: pant5Hover },
    { id: 306, title: "Luxury Wool Pants", price: "95,00 EUR", badge: "", image: pant6, hoverImage: pant6Hover },
  ],
  skirts: [
    { id: 'sm-skirts', isSeeMore: true, title: "See More Skirts", path: "/shop/skirts", image: skirtBaseImg },
    { id: 401, title: "Satin Luxury Skirt", price: "35,00 EUR", badge: "SALE", image: skirt1, hoverImage: skirt1Hover },
    { id: 402, title: "Pleated Midi Skirt", price: "45,00 EUR", badge: "", image: skirt2, hoverImage: skirt2Hover },
    { id: 403, title: "Silk Wrap Skirt", price: "55,00 EUR", badge: "", image: skirt3, hoverImage: skirt3Hover },
    { id: 404, title: "Mini Tailored Skirt", price: "38,00 EUR", badge: "", image: skirt4, hoverImage: skirt4Hover },
    { id: 405, title: "A-Line Knit Skirt", price: "48,00 EUR", badge: "", image: skirt5, hoverImage: skirt5Hover },
    { id: 406, title: "Maxi Flowing Skirt", price: "60,00 EUR", badge: "", image: skirt6, hoverImage: skirt6Hover },
  ],
  Sweater: [
    { id: 'sm-sweater', isSeeMore: true, title: "See More Sweaters", path: "/shop/sweater", image: sweaterBaseImg },
    { id: 501, title: "Oversized Knit Sweater", price: "68,00 EUR", badge: "NEW", image: sweater1, hoverImage: sweater1Hover },
    { id: 502, title: "Classic Wool Sweater", price: "75,00 EUR", badge: "", image: sweater2, hoverImage: sweater2Hover },
    { id: 503, title: "Cozy Turtleneck", price: "60,00 EUR", badge: "", image: sweater3, hoverImage: sweater3Hover },
    { id: 504, title: "Ribbed Luxury Sweater", price: "70,00 EUR", badge: "", image: sweater4, hoverImage: sweater4Hover },
    { id: 505, title: "Cropped Knit Sweater", price: "55,00 EUR", badge: "", image: sweater5, hoverImage: sweater5Hover },
    { id: 506, title: "Premium Cashmere Sweater", price: "120,00 EUR", badge: "HOT", image: sweater6, hoverImage: sweater6Hover },
  ],
};

export default function CategoriesSection() {
  const [activeTab, setActiveTab] = useState('tops');
  const [activeMobileCardId, setActiveMobileCardId] = useState(null);
  
  const navigate = useNavigate();

  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const isDragging = useRef(false);

  const tabs = [
    { id: 'tops', label: 'Tops' },
    { id: 'lace-tops', label: 'Lace Tops' },
    { id: 'pantalon', label: 'Pantalon' },
    { id: 'skirts', label: 'Skirts' },
    { id: 'Sweater', label: 'Sweater' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sliderRef.current || window.innerWidth > 768) return;
      const slider = sliderRef.current;
      const cards = slider.querySelectorAll('.cat-card');
      const sliderCenter = slider.getBoundingClientRect().left + slider.offsetWidth / 2;

      let closestCardId = null;
      let minDistance = Infinity;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(sliderCenter - cardCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestCardId = card.getAttribute('data-id');
        }
      });

      setActiveMobileCardId(closestCardId);
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      slider.scrollLeft = 0;
      setTimeout(handleScroll, 100);
    }
    return () => slider?.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const handleMouseDown = (e) => {
    isDown.current = true;
    isDragging.current = false;
    sliderRef.current.classList.add('grabbing');
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    sliderRef.current.classList.remove('grabbing');
  };

  const handleMouseUp = () => {
    isDown.current = false;
    sliderRef.current.classList.remove('grabbing');
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.8;
    if (Math.abs(walk) > 5) isDragging.current = true;
    e.preventDefault();
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleCardClick = (e, isSeeMore, path) => {
    if (isDragging.current) {
      e.preventDefault();
      return;
    }
    if (isSeeMore && path) {
      navigate(path);
    }
  };

  return (
    <section className="categories-section">
      <div className="categories-tabs-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className="cat-slider-container"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {categoriesData[activeTab]?.map((item) => {
          if (item.isSeeMore) {
            return (
              <div
                key={item.id}
                data-id={item.id}
                className="cat-card is-see-more"
                onClick={(e) => handleCardClick(e, true, item.path)}
              >
                <div className="cat-image-wrapper">
                  <img src={item.image} alt={item.title} className="cat-img img-base" />
                  <div className="seemore-card-overlay">
                    <div className="seemore-box-minimal">
                      <span className="seemore-text">See More</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={item.id}
              data-id={item.id}
              className={`cat-card ${activeMobileCardId === String(item.id) ? 'active-mobile' : ''}`}
              style={{ opacity: item.isSoldOut ? 0.75 : 1 }}
              onClick={(e) => handleCardClick(e, false)}
            >
              <div className="cat-image-wrapper">
                {item.badge && (
                  <span className="cat-badge">{item.badge}</span>
                )}
                
                <img src={item.image} alt={item.title} className="cat-img img-base" />
                
                {item.hoverImage && (
                  <img src={item.hoverImage} alt={`${item.title} Hover`} className="cat-img img-hover" />
                )}

                {!item.isSoldOut && (
                  <div className="cat-quick-add">
                    <button className="cat-quick-btn">Quick Add +</button>
                  </div>
                )}
              </div>

              <div className="cat-info">
                <h3 className="cat-title">{item.title}</h3>
                <p className="cat-price">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}