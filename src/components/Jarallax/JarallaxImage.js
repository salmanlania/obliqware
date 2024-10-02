import { Image } from "react-bootstrap";



const JarallaxImage = ({ className = "", alt = "", ...props }) => {
  return <Image className={`jarallax-img ${className}`} alt={alt} {...props} />;
};

export default JarallaxImage;
