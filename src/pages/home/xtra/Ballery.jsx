// import React, { useState, useCallback } from "react";
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
// import { photos } from "./photos";

// const Ballery = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [viewerIsOpen, setViewerIsOpen] = useState(false);

//   const openLightbox = useCallback((event, { photo, index }) => {
//     setCurrentImage(index);
//     setViewerIsOpen(true);
//   }, []);

//   const closeLightbox = () => {
//     setCurrentImage(0);
//     setViewerIsOpen(false);
//   };

//   return (
//     <div>
//       <div className="flex justify-center items-center">
//         <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
//           <div
//             role="main"
//             className="flex flex-col items-center justify-center"
//           >
//             <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
//               Our Gallery
//             </h1>
//             <p className="text-base leading-normal mb-4 text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
//               You can click for ZOOM the Photo
//             </p>
//           </div>
//           <Gallery photos={photos} onClick={openLightbox} />
//           <ModalGateway>
//             {viewerIsOpen && (
//               <Modal onClose={closeLightbox}>
//                 <Carousel
//                   currentIndex={currentImage}
//                   views={photos.map((x) => ({
//                     ...x,
//                     srcset: x.srcSet,
//                     caption: x.title,
//                   }))}
//                 />
//               </Modal>
//             )}
//           </ModalGateway>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ballery;

import React from "react";

const Ballery = () => {
  return <div></div>;
};

export default Ballery;
