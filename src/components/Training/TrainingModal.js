import React, {useRef, useEffect, useCallback, useContext} from "react";
import { AppContext } from '../../context';

const TrainingModal = ({openCourse, setOpenCourse, training, courseId}) => {
  const {getCookie, selectFontBig, selectFontSmall} = useContext(AppContext);
  const modalRef = useRef();

  const closeModal = (e) => {
    if(modalRef.current === e.target) {
      setOpenCourse(false);
    }
  }

  const keyPress = useCallback (e => {
    if(e.key === 'Escape' && openCourse) {
      setOpenCourse(false);
    }
  }, [setOpenCourse, openCourse])

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.addEventListener('keydown', keyPress);
  }, [keyPress]);

  const filteredTraining = [];
  for (let i = 0; i < training.length; i++) {
    if(training[i].id === courseId) {
      filteredTraining.push(training[i]);
    }
  }
  // console.log(filteredTraining);

  return (
      <div className={openCourse ? 'popup' : 'popup-close'} ref={modalRef} onClick={closeModal}>
        <div className={openCourse ? 'popup__content' : 'popup__content-close'}>
          <div className={selectFontBig ? 'fs-26 popup__right' : selectFontSmall ? "popup__right" : "fs-20 popup__right"}>
            {filteredTraining && filteredTraining.map((engineerText, index) =>
                <div key={index}>
                  <i className="fas fa-times popup__icon" onClick={() => setOpenCourse(prev => !prev)}></i>
                  <div className={selectFontBig ? 'fs-26' : selectFontSmall ? "" : "fs-20"} dangerouslySetInnerHTML={{__html: getCookie.i18next === 'en' ? engineerText.text_en : getCookie.i18next === 'uz' ? engineerText.text_uz : getCookie.i18next === 'oz' ? engineerText.text_oz : engineerText.text_ru}}/>
                </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default TrainingModal;
