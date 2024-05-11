// import { useState } from "react";


// const features = [
//     {
//         "en": "Free toiletries",
//         "ar": "مستلزمات الحمام المجانية"
//     },
//     {
//         "en": "Kitchen",
//         "ar": "مطبخ"
//     },
//     {
//         "en": "Washing machine",
//         "ar": "غسالة ملابس"
//     },
//     {
//         "en": "Desk",
//         "ar": "مكتب"
//     },
//     {
//         "en": "Slippers",
//         "ar": "نعال"
//     },
//     {
//         "en": "Telephone",
//         "ar": "هاتف"
//     },
//     {
//         "en": "Ironing facilities",
//         "ar": "مرافق الكي"
//     },
//     {
//         "en": "Microwave",
//         "ar": "ميكروويف"
//     },
//     {
//         "en": "Hairdryer",
//         "ar": "مجفف الشعر"
//     },
//     {
//         "en": "Cable channels",
//         "ar": "قنوات الكابل"
//     },
//     {
//         "en": "Wardrobe or closet",
//         "ar": "خزانة أو ملابس"
//     },
//     {
//         "en": "Bottle of water",
//         "ar": "زجاجة ماء"
//     },
//     {
//         "en": "Coffee/tea pot",
//         "ar": "إبريق القهوة / الشاي"
//     },
//     {
//         "en": "Mini refrigerator",
//         "ar": "ثلاجة صغيرة"
//     }
// ]

// const RoomServiceAdd = () => {
//     const [checkedFeatures, setCheckedFeatures] = useState([]);
  
//     const handleFeatureChange = (feature) => {
//       setCheckedFeatures(prev => {
//         const isFeatureChecked = prev.find(f => f.en === feature.en);
//         if (isFeatureChecked) {
//           return prev.filter(f => f.en !== feature.en);
//         } else {
//           return [...prev, feature];
//         }
//       });
//     };
  
//     const handleCheckAll = () => {
//       if (checkedFeatures.length !== features.length) {
//         setCheckedFeatures(features);
//       } else {
//         setCheckedFeatures([]);
//       }
//     };
  
//     const isAllChecked = checkedFeatures.length === features.length;
//     console.log(isAllChecked);
//     console.log(checkedFeatures,'asdasda');
  
//     return (
//       <div className="w-full">
//         <div className="mb-4 w-full font-semibold flex justify-between items-center">
//           <p>Features</p>
//           <button
//             className={`px-4 py-2 text-xs border rounded ${isAllChecked ? 'bg-primary text-white dark:border-form-strokedark' : 'bg-transparent dark:border-form-strokedark'}`}
//             onClick={handleCheckAll}
//           >
//             {isAllChecked ? 'Unselect All' : 'Select All'}
//           </button>
//         </div>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {features.map((feature, index) => (
//             <button
//               key={index}
//               className={`px-4 py-2 border rounded text-sm ${checkedFeatures.find(f => f.en === feature.en) ? 'bg-primary text-white dark:border-form-strokedark' : 'bg-transparent dark:border-form-strokedark'}`}
//               onClick={() => handleFeatureChange(feature)}
//             >
//               {`${feature.en} / ${feature.ar}`}
//             </button>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default RoomServiceAdd;