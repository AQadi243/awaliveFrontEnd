import { motion } from "framer-motion";

const PageAnimation = ({ children }) => {
  return (
    <>
      {children}
      <motion.div
        className='slideIn'
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ screenY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className='slideOut'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ screenY: 0 }}
        transition={{ duration: 1, ease: [ 0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default PageAnimation;
