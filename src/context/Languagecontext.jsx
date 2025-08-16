
import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    heroTitle: "Browse top quality Guitars online",
    heroSubtitle: "Explore 50k+ latest collections of branded guitars online with VibeStrings.",
    whyTry: "Why try VibeStrings?",
    smoothBrowsing: "SMOOTH BROWSING",
    easyDelivery: "EASY DELIVERY",
    swiftPayments: "SWIFT PAYMENTS",
    browseTitle: "Browse and buy your favorite guitars with VibeStrings.",
    featuringBrands: "Featuring the Best Brands",
    selectPreferred: "Select your preferred brand and explore our collection.",
    backToList: "← Back To List",
    backToHome: "← Back To Home",
    specification: "Specification",
    musicians: "Who plays it?",
    loading: "Loading...",
    error: "Error loading data.",
    available: "Selection",
    filterBy: "Filter by type",
    searchBy: "Search by name",
    showing: "Check out the",
    resultsFrom: "RESULTS FROM",
    heroTitleStart: "Browse top quality",
  heroTitleHighlight: "Guitars",
  heroTitleEnd: "online",
  heroSubtitle: "Explore 50k+ latest collections of branded guitars online with VibeStrings.",
   heroTitleStart: "Browse top quality",
  heroTitleHighlight: "Guitars",
  heroTitleEnd: "online",
  heroSubtitle: "Explore 50k+ latest collections of branded guitars online with VibeStrings.",
   backToHome: "← Back To Home",
    brandContent: {
      Ibanez: {
        heading: <>Play like a <span className="highlight">Rock star</span></>,
        paragraph: "With a legacy dating back to the 1950s, Ibanez blends expert craftsmanship with cutting-edge innovation to deliver guitars that inspire creativity and elevate your performance."
      },
      Fender: {
        heading: <>Strum with <span className="highlight">Legendary Tone</span></>,
        paragraph: "Since 1946, Fender has shaped the sound of modern music. From the bright twang of a Telecaster to the smooth warmth of a Strat, Fender guitars are trusted by legends and loved by beginners alike."
      },
      Gibson: {
        heading: <>Own the <span className="highlight">Stage</span></>,
        paragraph: "Gibson guitars have fueled rock, blues, and jazz for over a century. Known for their powerful tone and timeless design, they remain the weapon of choice for iconic performers."
      },
      Yamaha: {
        heading: <>Play with <span className="highlight">Precision</span></>,
        paragraph: "Yamaha guitars combine Japanese craftsmanship with versatile design, offering rich tone and reliability for musicians of every style."
      }
    }
  
  },
  mk: {
    heroTitle: "Прелистај квалитетни гитари онлајн",
    heroSubtitle: "Истражи повеќе од 50k најнови колекции на брендови со VibeStrings.",
    whyTry: "Зошто да пробаш VibeStrings?",
    smoothBrowsing: "ЛЕСНО ПРЕЛИСТУВАЊЕ",
    easyDelivery: "ЕДНОСТАВНА ДОСТАВА",
    swiftPayments: "БРЗИ ПЛАЌАЊА",
    browseTitle: "Прелистај и купи ја својата омилена гитара со VibeStrings.",
    featuringBrands: "Најдобрите брендови",
    selectPreferred: "Избери го твојот омилен бренд и истражи ја нашата колекција.",
    backToList: "← Назад на листата",
    backToHome: "← Назад на почетна",
    specification: "Спецификација",
    musicians: "Кој ја свири?",
    loading: "Се вчитува...",
    error: "Грешка при вчитување.",
    available: "Достапни гитари",
    filterBy: "Филтрирај по тип",
    searchBy: "Пребарај по име",
    showing: "ПРИКАЖАНИ",
    resultsFrom: "ОД ВКУПНО",
    
 heroTitleStart: "Прелистај квалитетни",
  heroTitleHighlight: "гитари",
  heroTitleEnd: "онлајн",
  heroSubtitle: "Истражи повеќе од 50k најнови колекции на брендови со VibeStrings.",
    backToHome: "← Назад на почетна",
    brandContent: {
      Ibanez: {
        heading: <>Свири како <span className="highlight">Рок ѕвезда</span></>,
        paragraph: "Со наследство од 1950-тите, Ibanez ги комбинира експертската изработка со иновативниот дизајн за да инспирира креативност и подобри перформансите."
      },
      Fender: {
        heading: <>Свирате со <span className="highlight">Легендарен Тон</span></>,
        paragraph: "Од 1946 година, Fender го обликува звукот на модерната музика. Од светлиот тон на Telecaster до топлиот звук на Strat, гитарите Fender се доверени од легенди и омилени на почетници."
      },
      Gibson: {
        heading: <>Поседувај ја <span className="highlight">Сцената</span></>,
        paragraph: "Гитарите Gibson го движеле рокот, блузот и џезот повеќе од еден век. Познати по моќниот тон и вечниот дизајн, тие остануваат избор на легендарни изведувачи."
      },
      Yamaha: {
        heading: <>Свири со <span className="highlight">Прецизност</span></>,
        paragraph: "Гитарите Yamaha комбинираат јапонска изработка со разновиден дизајн, нудејќи богат тон и сигурност за музичари од сите стилови."
      }}
  },
  sq: {
    heroTitle: "Shfleto kitarat me cilësi të lartë online",
    heroSubtitle: "Eksploro mbi 50k koleksione të fundit të kitarave të markave me VibeStrings.",
    whyTry: "Pse të provosh VibeStrings?",
    smoothBrowsing: "SHFLETIM I LEHTË",
    easyDelivery: "DËRGESË E LEHTË",
    swiftPayments: "PAGESA TË SHPEJTA",
    browseTitle: "Shfleto dhe bli kitarën tënde të preferuar me VibeStrings.",
    featuringBrands: "Markat më të mira",
    selectPreferred: "Zgjidh markën tënde të preferuar dhe eksploro koleksionin tonë.",
    backToList: "← Kthehu tek lista",
    backToHome: "← Kthehu në faqen kryesore",
    specification: "Specifikimet",
    musicians: "Kush e luan?",
    loading: "Duke u ngarkuar...",
    error: "Gabim gjatë ngarkimit.",
    available: "kitarat në dispozicion",
    filterBy: "Filtro sipas tipit",
    searchBy: "Kërko sipas emrit",
    showing: "Shiko",
    resultsFrom: "NGA GJITHSEJ",
    
heroTitleStart: "Shfleto",
  heroTitleHighlight: "kitarat me cilësi të lartë",
  heroTitleEnd: "online",
  heroSubtitle: "Eksploro mbi 50k koleksione të fundit të kitarave të markave me VibeStrings.",
  backToHome: "← Kthehu në faqen kryesore",
    brandContent: {
      Ibanez: {
        heading: <>Luaj si një <span className="highlight">yll Rock</span></>,
        paragraph: "Me një trashëgimi që daton nga vitet 1950, Ibanez kombinon mjeshtërinë me inovacionin për të frymëzuar kreativitet dhe performancë të lartë."
      },
      Fender: {
        heading: <>Shtrydh me <span className="highlight">Ton Legjendar</span></>,
        paragraph: "Që nga viti 1946, Fender ka formuar tingullin e muzikës moderne. Nga tingulli i ndritshëm i Telecaster deri tek ngrohtësia e Strat, kitarat Fender janë të preferuara nga legjendat dhe fillestarët."
      },
      Gibson: {
        heading: <>Mbi <span className="highlight">Skenën</span></>,
        paragraph: "Kitarat Gibson kanë nxitur rock, blues dhe jazz për mbi një shekull. Të njohura për tingullin e fuqishëm dhe dizajnin e përjetshëm, ato mbeten zgjedhja e artistëve ikonë."
      },
      Yamaha: {
        heading: <>Luaj me <span className="highlight">Saktësi</span></>,
        paragraph: "Kitarat Yamaha kombinon mjeshtërinë japoneze me dizajn të shumëanshëm, duke ofruar tingull të pasur dhe besueshmëri për muzikantët e çdo stili."
      } 
      
      // Add Gibson, Yamaha similarly...
    }
    
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}