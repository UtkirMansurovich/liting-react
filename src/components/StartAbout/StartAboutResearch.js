import React, {useRef, useEffect, useCallback} from 'react';

export default function StartAboutResearch({setOpenResearchModal, openResearchModal}) {

    const modalRef = useRef();

    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            setOpenResearchModal(false);
        }
    }

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && openResearchModal) {
            setOpenResearchModal(false);
        }
    }, [setOpenResearchModal, openResearchModal])
    
    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.addEventListener('keydown', keyPress);
    }, [keyPress]);

  return (
    <div className={openResearchModal ? 'popup' : 'popup-close'} ref={modalRef} onClick={closeModal}>
        <div className={openResearchModal ? 'popup__content' : 'popup__content-close'}>
            <div className='popup__right'>
                <div>
                    <i className="fas fa-times popup__icon" onClick={() => setOpenResearchModal(prev => !prev)}></i>
                    <p className='popup__text popup__bold'>ПРОЕКТНО-ТЕХНИЧЕСКАЯ ДЕЯТЕЛЬНОСТЬ</p>
                    <p className='popup__text'>Полный комплекс сквозного проектирования обустройства месторождений нефти и газа, а также инженерных коммуникаций нефтегазохимических производств, других объектов нефтегазовой отрасли с использованием BIM технологий, включая::</p>
                    <ul>
                        <li>инженерно-технические изыскания;</li>
                        <li>технико-экономические обоснования;</li>
                        <li>архитектурно-строительные и конструкторские решения;</li>
                        <li>проектно-сметную документацию с выдачей решений по инженерным коммуникациям: электроснабжение и электрохимзащита; отопление, вентиляция, теплогазоснабжение; водоснабжение, канализация и пожаротушение; прокладка промысловых и магистральных трубопроводов с сооружениями на них; автоматизация, телемеханизация технологических процессов, охранно-пожарная сигнализация и автоматическое пожаротушение, технологическая связь;</li>
                        <li>экологическую оценку проектов строительства и реконструкции объектов: определение воздействия проектируемых объектов на окружающую среду с обоснованием рисков и последствий их эксплуатации;</li>
                        <li>экспертизу промышленной безопасности опасных производственных объектов;</li>
                        <li>маркетинговые исследования по выбору поставщиков технологического оборудования;</li>
                        <li>финансовую оценку проектируемых объектов;</li>
                        <li>разработка технической документации на нестандартизированное оборудование на базе собственных научно-конструкторских исследований, отвечающих лучшим  мировым образцам.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
