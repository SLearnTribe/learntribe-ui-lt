import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Webcam from "react-webcam";
import { postAssessmentsProctoring } from "../Redux/Ducks/Proctoring/AssessmentProcSlice";

const videoConstraints = {
  width: 200,
  height: 200,
  facingMode: "user",
};

export const ProctoringWebcam = () => {
  const dispatch = useDispatch();

  const webcamRef = React.useRef(null);

  const [images, setImages] = useState([]);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    setImages(images.concat(imageSrc));

    console.log(images.length);

    if (images.length === 5) {
      console.log(images);

      dispatch(postAssessmentsProctoring(images));

      setImages([]);
    }
  }, [dispatch, webcamRef, images]);

  useEffect(() => {
    let interval = setInterval(() => {
      capture();
    }, 2000);
    return () => clearInterval(interval);
  }, [capture]);

  return (
    <div>
      <Webcam
        audio={false}
        height={200}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={200}
        videoConstraints={videoConstraints}
      />
    </div>
  );
};
