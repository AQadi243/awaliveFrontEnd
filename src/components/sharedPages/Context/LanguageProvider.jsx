// /* eslint-disable react/prop-types */
// import i18next from 'i18next';
// import { createContext, useState } from 'react';

// // Create a context for the language settings
// export const LanguageContext = createContext();

// // export const useLanguageContext = () => useContext(LanguageContext);

// export const LanguageProvider = ({ children }) => {
//   const [currentLanguage, setCurrentLanguage] = useState('en');
//   const [isLoading, setIsLoading] = useState(false);

//   const changeLanguage = (language) => {
//     setIsLoading(true);
//     i18next.changeLanguage(language, () => {
//       setCurrentLanguage(language);
//       setIsLoading(false);
//     });
//   };

//   return (
//     <LanguageContext.Provider value={{ currentLanguage, isLoading, changeLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };
