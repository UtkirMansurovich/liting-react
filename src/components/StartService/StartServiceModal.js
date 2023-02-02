import React, {useRef, useEffect, useCallback, useContext} from 'react';
import { AppContext } from '../../context';

const StartServiceModal = ({openGip, setOpenGip, cheifEngineers, id}) => {

    const {getCookie, selectFontBig, selectFontSmall} = useContext(AppContext);

    const modalRef = useRef();

    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            setOpenGip(false);
        }
    }

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && openGip) {
            setOpenGip(false);
        }
    }, [setOpenGip, openGip])
    
    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.addEventListener('keydown', keyPress);
    }, [keyPress]);

    const filtered = cheifEngineers.filter(el => el.id === id);
    console.log(filtered)

    return (
            <div className={openGip ? 'popup' : 'popup-close'} ref={modalRef} onClick={closeModal}>
                <div className={openGip ? 'popup__content' : 'popup__content-close'}>
                    <div className={selectFontBig ? 'fs-26 popup__right' : selectFontSmall ? "popup__right" : "fs-20 popup__right"}>
                        {filtered && filtered.map((engineerText, index) =>
                            <div key={index}>
                                <i className="fas fa-times popup__icon" onClick={() => setOpenGip(prev => !prev)}></i>
                                <div className={selectFontBig ? 'fs-26' : selectFontSmall ? "" : "fs-20"} dangerouslySetInnerHTML={{__html: getCookie.i18next === 'en' ? engineerText.text_en : getCookie.i18next === 'uz' ? engineerText.text_uz : getCookie.i18next === 'oz' ? engineerText.text_oz : engineerText.text_ru}}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
}

export default StartServiceModal