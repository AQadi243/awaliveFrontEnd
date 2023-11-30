// import React, { useState, useEffect } from 'react';
// import ImagePlaceholder from './ImagePlaceholder';



// const LazyImage = ({ src, alt, className }) => {
//   const [imageSrc, setImageSrc] = useState(null);
//   const [loading, setLoading] = useState(true); // State to track loading

//   useEffect(() => {
//     const img = new Image();
//     img.src = src;
//     img.onload = () => {
//       setImageSrc(src);
//       setLoading(false); // Set loading to false when image is loaded
//     };
//     img.onerror = () => {
//       setLoading(false); // Consider handling load failure
//     };
//   }, [src]);

//   return loading ? (
//     <ImagePlaceholder /> // Show the placeholder while loading
//   ) : (
//     <img src={imageSrc} alt={alt} className={className || "w-full"} />
//   );
// };

// export default LazyImage;
