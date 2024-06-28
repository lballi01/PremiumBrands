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
      "Artisanal breweries have been around for centuries, but the craft beer scene as we know it today really became popular in the 1970s when home-brewing became legal and common in the U.S.A. Craft Beers are defined as beers produced by small scale, independent brewers where craftsmanship is a key factor in the process, with a focus on experimentation and variety. It is the experimentation and variety that is key in both consumer choice and the brands that we list in our portfolio, beers that are packed with distinct, detectable flavours, aromas and characteristics. The world of packaged craft beer has evolved rapidly over the past couple of years. Whilst bottles historically were by far the favoured container for beers, cans have very rapidly taken over with over 70% of craft beers now sold in can, which has in turn lead to a rise in the eclectic styles and high quality designs that are now seen on craft beer cans.",
    backgroundImage: craft,
  },
  {
    icon: RxCrop,
    title: "Strong Beer",
    content: `
        Across the globe the average ABV (strength) of beer is around 4.6%, however there is a growing demand for stronger beers.
        A strong beer is defined as being above 8% ABV, within our portfolio we carry beers in the Strong Beer category from 8.5% through to 16%
        as more drinkers in pockets around the world prefer the greater intense flavours of a beer higher in alcohol. \n
        
        Strong beers are brewed in the traditional brewing hotbeds throughout Europe and beyond, including the UK, Belgium and the USA and span a number of beer styles, from lagers, to ales and stouts.
        Our range of Belgian brewed strong beers offer variety and choice in this growing sector of the market.
    `,
    backgroundImage: beer,
  },
  {
    icon: RxCrop,
    title: "Cider",
    content: `
        Apple cider is one of the oldest natural beverages produced by humans, and even the “father” of medicine, Hippocrates,
        considered it a true antibiotic. Historians believe that cider has been produced since 1500 BC, in Mesopotamia, being 
        later consumed and appreciated by ancient Romans and Greeks. Today cider has a worldwide appeal and has progressed beyond
         ‘just’ apple cider and is now one the fastest growing drink categories worldwide.

        The variations in aroma, flavour and sweetness are vast. Palate cleansing, smooth, sweet, acidic or tart; ciders offer 
        plenty of scope for exploration, which helps to drive their popularity. They can vary not only in colour but also from 
        completely clear to cloudy with sediment ranges, due to the filtering between pressing and fermentation. 

        Our range of British made ciders offer the variety and depth of portfolio that is in demand, with Apple, Mixed Berries 
        and Vintage variants to suit all occasions.
    `,
    backgroundImage: cider,
  },
  {
    icon: RxCrop,
    title: "Boutique Wines",
    content: `Wine has been produced for thousands of years, with evidence of ancient wine production in Georgia from c. 6000 BCE.
         Vitis Vinifera, the grape genus almost exclusively used in wine production around the world, was being cultivated in 
         Middle East dating back to 4000BCE.

        Wine production and consumption increased, burgeoning from the 15th century onwards as part of European expansion.
        Despite the devastating 1887 phylloxera louse infestation, modern science and technology adapted and industrial wine
        production and wine consumption now occur throughout the world.

        Boutique is often translated to mean small, but size is not the way in which we choose the wines listed in our portfolio.
        We work with wineries that are passionate, individual and creative in the way they produce their wines – probably better
        described as artisanal or hand-crafted. Our distribution network allows us to offer wines that would otherwise be limited
        to sales local to the immediate vicinity of the winery. Quality is at the forefront of these wines, from the root stock,
        to fruit, through to harvest and aging.
        `,
    backgroundImage: wine,
  },
  {
    icon: RxCrop,
    title: "Spirits",
    content: `As with wines, spirits in their various forms have been around for many years. Our focus is on gin and whisky as two
         of the most popular spirits in the world today.

        Whiskey, or whisky, depending on where you are, is believed by most to have originated in Scotland. However, the first
        written record traces back to Ireland in the year of 1405 and it was then dubbed, aqua vitae, translating to 
        “water of life”. During the 19th century, titans of the whisky world like James Buchanan, Tommy Dewar, Johnnie Walker
        & James Chivas took Scotch out of Scotland for the first time. Today we continue that tradition with a selection of 
        fine malt whiskies made available to overseas markets.

        Gin was first created in Holland as a medicine. It was sold in pharmacies and was said to relieve kidney and
        stomach ailments as well as gallstones and gout. The juniper berry which gin is derived from was said to have 
        medicinal qualities which contributed to its popularity.

        Gin is now an extremely popular drink around the world, its reinvention as a fashionable spirit has seen remarkable
        growth in the number of producers, the range of flavours and consumption. As with the wines we carry, our gin 
        portfolio is sourced from artisanal producers who grow and source all-natural ingredients to create craft-focussed
        drinks that transform the drinkers experience.
        `,
    backgroundImage: spirits,
  },
];
