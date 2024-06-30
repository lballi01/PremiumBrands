import { RxCrop } from "react-icons/rx";

import beer from "../assets/beer.jpg";
import cider from "../assets/cider.jpg";
import craft from "../assets/craft.jpg";
import spirits from "../assets/spirits.jpg";
import wine from "../assets/wine.jpg";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about-us",
    title: "About Us",
  },
  {
    id: "products",
    title: "Products",
  },
  {
    id: "contactus",
    title: "Contact us",
  },
];



export const ServiceData = [
  {
    icon: RxCrop,
    title: "Craft Beer",
    content:
    `Artisanal breweries have a long history, but the modern craft beer movement gained 
    popularity in the 1970s in the U.S. when home-brewing became legal. Craft beers are
    produced by small, independent brewers who emphasize craftsmanship, experimentation,
    and variety, resulting in beers with distinct flavors and aromas. Recently, the craft
    beer market has seen a significant shift from bottles to cans, with over 70% of craft
    beers now sold in cans. This change has led to a rise in diverse styles and
    high-quality can designs.
    `,
    backgroundImage: craft,
  },
  {
    icon: RxCrop,
    title: "Strong Beer",
    content: `
        Globally, the average beer has an ABV of around 4.6%, but there's increasing demand
        for stronger beers, defined as having an ABV above 8%. Strong beers in the portfolio 
        range from 8.5% to 16% ABV, catering to those who prefer more intense flavors. These
        beers are brewed in traditional brewing regions like the UK, Belgium, and the USA,
        and include various styles such as lagers, ales, and stouts. The range of Belgian
        strong beers in the portfolio highlights the diversity and growth in this market segment.
    `,
    backgroundImage: beer,
  },
  {
    icon: RxCrop,
    title: "Cider",
    content: `
        Apple cider is one of the oldest natural beverages, dating back
        to 1500 BC in Mesopotamia, and was even considered an antibiotic
        by Hippocrates. Ancient Romans and Greeks also consumed it. Today,
        cider is a globally popular drink and one of the fastest-growing
        categories. It offers a wide range of aromas, flavors, and sweetness
        levels, from smooth and sweet to acidic and tart, and can be clear
        or cloudy. The British-made ciders in the portfolio include varieties
        such as Apple, Mixed Berries, and Vintage, catering to diverse tastes
        and occasions.
    `,
    backgroundImage: cider,
  },
  {
    icon: RxCrop,
    title: "Boutique Wines",
    content: `  
        Wine has been produced for thousands of years, with ancient 
        evidence from Georgia around 6000 BCE and grape cultivation in the Middle
        East dating back to 4000 BCE. Wine production expanded significantly
        from the 15th century during European expansion, despite setbacks
        like the 1887 phylloxera infestation. Modern wine production is now
        global. In our portfolio, we focus on artisanal or hand-crafted wines,
        not just small-scale operations. We collaborate with passionate,
        creative wineries, ensuring quality from root stock to aging. Our
        distribution network makes these high-quality wines accessible
        beyond their local regions.
      `,
    backgroundImage: wine,
  },
  {
    icon: RxCrop,
    title: "Spirits",
    content: `
        Spirits like gin and whisky have long histories. Whisky, believed to
        have originated in Scotland, has its first written record from Ireland
        in 1405, where it was called "aqua vitae" or "water of life." In the
        19th century, notable figures like James Buchanan and Johnnie Walker
        introduced Scotch whisky internationally. Our selection includes fine
        malt whiskies for overseas markets.
        
        Gin, initially created in Holland as a medicinal remedy, has evolved into
        a globally popular spirit. Its reinvention has led to a surge in producers
        and diverse flavors. Our gin portfolio features artisanal producers who
        use natural ingredients to craft high-quality, unique drinks.
        `,
    backgroundImage: spirits,
  },
];
