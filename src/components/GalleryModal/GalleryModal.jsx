import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";


const GalleryModal = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft,
  currentIndex,
  length,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <>
      <div className='overlay dismiss' onClick={handleClick}>
        <div>
          <Image src={clickedImg} alt='bigger pic' />
          <p

          >
            {currentIndex + 1} / {length}
          </p>
        </div>
        <span className='dismiss' onClick={handleClick}>
          X
        </span>
        <div onClick={handelRotationLeft} className='overlay-arrows_left'>
          <FontAwesomeIcon icon={faCaretLeft} size="2xl" style={{ color: "#f6f5f4", }} />

        </div>
        <div onClick={handelRotationRight} className='overlay-arrows_right'>
          <FontAwesomeIcon icon={faCaretRight} size="2xl" style={{ color: "#f6f5f4", }} />



        </div>
      </div>
    </>
  );
};

export default GalleryModal;
