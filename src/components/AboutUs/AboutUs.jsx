import React from 'react'
import './AboutUs.css'
import ImageSlider from './ImageSlider.js'
import TextSlider from './TextSlider.js'
import dubai from './dubai.jpg'




const AboutUs = () => {

    const slides = [
        { url: "https://www.premiumbrandsme.com/wp-content/uploads/2022/01/Draft_beer.jpg", title: "beach" },
        { url: "https://www.premiumbrandsme.com/wp-content/uploads/2022/01/Dubai_Marina.jpg", title: "boat" },
        { url: "https://www.premiumbrandsme.com/wp-content/uploads/2021/12/boutique-wine.jpg", title: "forest" },
        
      ];



      const texts = [
        "Premium Brands DWC LLC offer an alternative and authentic route to market for drinks brands from around the world. Specialising in boutique craft beers and strong beers, but also offering a range of ciders, boutique wines and spirits in the Middle East, Mid and East Africa and the Far East.", 
        "Whilst a relative newcomer to the market, the business founder and General Manager Naheed Younis brings a wealth of experience in the drinks industry having spent 29 years in the drinks industry, with over 17 years spent with the Heineken Group, including 5 of those most recent years in Dubai. The business possesses extensive knowledge and skills to develop brands and portfolios across multiple markets and channels, the ability to develop productive working relationships with clients ensures results are achieved quickly, efficiently and to mutual benefit. Through constant market monitoring and assessment of competitor activity Premium Brands will develop robust strategic plans to drive new business development across all alcoholic drinks sectors.",
        "With headquarters in Dubai, Premium Brands are ideally positioned to service the ever growing liquor trade throughout the GCC – Bahrain, Kuwait, Oman, Qatar, Saudi Arabia and the United Arab Emirates – Mid and East Africa – Burundi, Congo, Kenya, Rwanda, Tanzania and Uganda – and the Far East – China. We also serve the diplomatic channels and dry nations around the Middle East region.", 
        "We understand the process from both the customer and supplier perspective, so continually work for a win-win for all parties. With full route to market capability across multiple markets, Premium Brands are an ideal business partner for businesses and brands seeking a platform in international markets."
    ];

      const containerStyles = {
        width: "800px",
        height: "800px",
        margin: "0 auto",
        padding: "20px"
      };

  return (
    <div className="flex items-center justify-center flex-col h-[900px] shadow-md my-0 py-0 relative">
      <div className="absolute w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${dubai})`, filter: 'grayscale(100%) opacity(50%)' }}></div>
      <div className="flex items-center justify-center w-full h-[80%]">
        <div className="bg-white p-10 rounded-lg">
          <h1 className="text-center text-3xl font-bold mb-10">About Us</h1>
          <div className="container-box flex flex-col md:flex-row gap-10">
            <div className="left-side md:w-[50%]">
              <div style={containerStyles}>
                <ImageSlider slides={slides} parentWidth={500} />
              </div>
            </div>
            <div className="right-side md:w-[50%]">
              <div style={containerStyles}>
                <TextSlider texts={texts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs