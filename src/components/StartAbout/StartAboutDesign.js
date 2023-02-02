import React, {useRef, useEffect, useCallback} from 'react';

export default function StartAboutDesign({setOpenDesignModal, openDesignModal, selectFontBig, selectFontSmall}) {
    const modalRef = useRef();

    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            setOpenDesignModal(false);
        }
    }

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && openDesignModal) {
            setOpenDesignModal(false);
        }
    }, [setOpenDesignModal, openDesignModal])
    
    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.addEventListener('keydown', keyPress);
    }, [keyPress]);

  return (
    <div className={openDesignModal ? 'popup' : 'popup-close'} ref={modalRef} onClick={closeModal}>
        <div className={openDesignModal ? 'popup__content' : 'popup__content-close'}>
            <div className='popup__right'>
                <div>
                    <i className="fas fa-times popup__icon" onClick={() => setOpenDesignModal(prev => !prev)}></i>
                    <p className={selectFontBig ? 'fs-26 popup__text popup__bold': selectFontSmall ? "popup__text popup__bold" : "fs-20 popup__text popup__bold"}>НАУЧНО-ТЕХНОЛОГИЧЕСКАЯ ДЕЯТЕЛЬНОСТЬ</p>
                    <ul className={selectFontBig ? 'fs-26' : selectFontSmall ? '' : 'fs-20'}>
                        <li>прогнозирование уровня добычи нефти, газа и конденсата по месторождениям;</li>
                        <li>проектирование разработки нефтяных, газовых и нефтегазо-конденсатных месторождений и подземных хранилищ газа, с применением трехмерного моделирования резервуаров углеводородов;</li>
                        <li>содействие эффективной разработке и эксплуатации месторождений нефти и газа, включая месторождения с аномально высокими пластовыми давлениями, трудно извлекаемыми запасами в сложных горно-геологических условиях, истощенные месторождения, а также моделирования эксплуатации подземного хранилища газа в сезонах возрастания потребления газа;</li>
                        <li>оценка текущих и остаточных запасов углеводородов на основе трехмерного геологического и гидродинамического моделирования;</li>
                        <li>проектирование строительства скважин на нефть и газ;</li>
                            <ul>
                                <li>Проведение газодинамических и газоконденсатных исследований для определения текущего потенциального содержания конденсата и продуктивных характеристик скважин на разведочных и разрабатываемых объектах.</li>
                                <li>Определение степени извлечения конденсата и пропан-бутановой фракции на установках подготовки газа и конденсата с составлением материального баланса.</li>
                                <li>Проведение PLT исследований , с целю определения профиля притока пластовых флюидов.</li>
                            </ul>
                        <li>разработка технологических решений для обеспечения качественной подготовки газа и модернизация газотранспортных систем с переоборудованием газоперекачивающих агрегатов и расстановка компрессорных станций с выполнением обосновывающихся расчетов по материальному балансу потоков, конденсата и нефти, их транспортированию, утилизации попутных и низконапорных газов;</li>
                        <li>разработка технологических регламентов на эксплуатацию технологических установок;</li>
                        <li>определение затрат углеводородного сырья на собственные нужды и его технологические потери;</li>
                        <li>исследование путей повышения эффективности процессов получения и извлечения ценных компонентов из углеводородного сырья, расширения номенклатуры товарных продуктов;</li>
                        <li>адаптация передовых технологий газохимии, нефтепереработки, использования альтернативных видов топлива и возобновляемых источников энергии к условиям и возможностям нефтегазовой отрасли для обоснования и привлечения инвестиций;</li>
                        <li>осуществление аналитических и физических исследований по антикоррозионной защите оборудования на объектах отрасли с использованием методов неразрушающего контроля;</li>
                        <li>разработка решений по рациональному использованию топливно-энергетических ресурсов и энергосбережению;</li>
                        <li>осуществление аналитических и физико-химических исследований компонентного состава углеводородного сырья и продуктов его переработки и их качественных характеристик;</li>
                        <li>нормирование предельно-допустимых выбросов вредных веществ в атмосферу, сбросов и отходов производства;</li>
                        <li>анализ основных технико-экономических и финансовых показателей деятельности нефтегазовой отрасли с выдачей рекомендаций по их улучшению;</li>
                        <li>разработка нормативных документов в  области технического регулирования и стандартизации продукции;</li>
                        <li>разработка технической документации  на нестандартизированное оборудование на базе собственных научно-конструкторских исследований, отвечающих лучшим  мировым образцам.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}