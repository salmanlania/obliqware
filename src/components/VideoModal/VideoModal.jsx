import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

const VideoModal = ({ isOpen, setOpen, id }) => {
  return (
    <>
      {typeof window !== "undefined" && (
        <ModalVideo
          channel='youtube'
          autoplay
          ratio='16:9'
          isOpen={isOpen}
          videoId={id}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default VideoModal;
