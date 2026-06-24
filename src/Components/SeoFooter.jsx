import React from 'react';

const SeoFooter = () => {
  return (
    <div className="seo-footer-section">
      <style>{`
        .seo-footer-section {
          padding: 60px 20px 80px 20px;
          background-color: #ffffff;
          font-family: sans-serif;
          max-width: 100%;
          box-sizing: border-box;
          color: #000000;
        }

        .seo-footer-container {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .seo-block {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .seo-title {
          font-size: 24px;
          font-weight: 400;
          letter-spacing: 2px;
          margin: 0;
          text-transform: uppercase;
        }

        .seo-text {
          font-size: 11px;
          line-height: 1.8;
          color: #000000;
          font-weight: 400;
          margin: 0;
          text-align: justify;
          letter-spacing: 0.3px;
        }

        .seo-link {
          color: #000000;
          text-decoration: underline;
          text-underline-offset: 3px;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .seo-link:hover {
          color: #888888;
        }

        @media (max-width: 768px) {
          .seo-footer-section {
            padding: 40px 15px 60px 15px;
          }

          .seo-title {
            font-size: 18px;
            letter-spacing: 1.5px;
          }

          .seo-text {
            font-size: 10.5px;
            line-height: 1.7;
          }
        }
      `}</style>

      <div className="seo-footer-container">
        
        <div className="seo-block">
          <h2 className="seo-title">TOPS FOR WOMEN</h2>
          <p className="seo-text">
            There are many different tops, and here at Venderby's, we have everything from <span className="seo-link">cut out tops</span>, <span className="seo-link">corset tops</span>, and <span className="seo-link">wrap tops</span>. A top for women can be oversized or fitted, short-sleeved or long-sleeved, and various tops can naturally be matched with each other and the rest of your outfit. Tops for women can be used to express your personal style, and there is a great difference in the design of tops compared to, for example, <span className="seo-link">pants</span> or <span className="seo-link">jeans</span>.
            <br /><br />
            In general, it's very easy and obvious to match our tops with other Venderby items. We use the same shades across collections. This means that, for example, our <span className="seo-link">brown pants</span> come in the same brown color as our <span className="seo-link">fine blouses</span>. So if you feel like styling yourself in an identical color from head to toe, you can advantageously look for items across our entire website.
            <br /><br />
            Of course, you can also match tops for women from Venderby's with other colors. We have a wide selection of different colors for our tops, so you can create the clothing combination that best reflects your personal style.
            <br /><br />
            In addition to having different colors, our tops also come in different designs. Some women's tops are fitted, while others are more puffy and loose. We personally believe that the contrast between a fitted top and a pair of voluminous pants makes for a great outfit. You can also match an oversized <span className="seo-link">sweatshirt</span> with a pair of loose pants for a relaxed and casual look. There are many possibilities with our tops for women.
          </p>
        </div>

        <div className="seo-block">
          <h2 className="seo-title">WE OFFER BOTH FITTED AND LOOSE TOPS</h2>
          <p className="seo-text">
            At Venderby's, we have both fitted and loose tops. Our fitted tops highlight your feminine curves more, and our loose tops reflect the current fashion scene, where a baggy and comfortable look dominates today's trends.
            <br /><br />
            However, we believe it's important to have a bit of everything in your wardrobe. Variety is a good thing, and it proves that your style is dynamic. There's also no rule saying you can't wear both types of tops. For example, you can easily wear a fitted <span className="seo-link">glitter top</span> under a voluminous sweatshirt. This way, you can always remove the top if it gets too warm, or if you just want to project a different style for a while. You can then put the sweater back on if it gets chilly.
          </p>
        </div>

        <div className="seo-block">
          <h2 className="seo-title">WE HAVE TOPS FOR ANY OCCASION</h2>
          <p className="seo-text">
            At Venderby's, we aim to embrace a wide range with our collections. Therefore, we make a great effort to offer a bit of variety. We carry both tops for women that are perfect for everyday wear, and we have tops that are ideal alternatives for the upcoming party.
            <br /><br />
            For everyday wear, we have sweatsuits that give you a relaxed and casual look. You can match these tops for women with matching <span className="seo-link">sweatpants</span> for a stylish tracksuit outfit. For the party, we have our fitted tops that come in many different designs and materials. We have, among other things, <span className="seo-link">lace tops</span> and <span className="seo-link">lace blouses</span>, which give your outfit a twist that makes you stand out on the dance floor.
          </p>
        </div>

        <div className="seo-block">
          <h2 className="seo-title">OUR TOPS ARE AFFORDABLE AND ALWAYS REFLECT THE LATEST FASHION</h2>
          <p className="seo-text">
            As you may have noticed, our tops for women are available at an affordable price. This applies to our entire product range, and it is quite intentional because we believe that it shouldn't cost a fortune to keep up with fashion trends. It should be possible for everyone to shop for clothes that reflect the latest trends. The prices of our tops for women also mean that most of our customers can shop for several items for their wardrobe at once. So if you feel that you need different <span className="seo-link">tops</span> or <span className="seo-link">long-sleeved blouses</span>, you have come to the right place.
          </p>
        </div>

        <div className="seo-block">
          <h2 className="seo-title">CONTACT US IF YOU HAVE QUESTIONS ABOUT OUR TOPS FOR WOMEN</h2>
          <p className="seo-text">
            If you have specific questions about any of our tops for women, do not hesitate to contact us. Our customer service is ready to answer your questions, big or small. You can write to us at <span className="seo-link">kontakt@venderbys.dk</span> or call us at 42 51 61 30. We look forward to helping you!
            <br />
            You can also visit our <span className="seo-link">Instagram</span> if you are interested in becoming part of our fashion universe. Here you can be updated with the latest news about our collections, learn more about the brand, and see how other customers match their Venderby items.
          </p>
        </div>

      </div>
    </div>
  );
};

export default SeoFooter;