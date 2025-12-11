import certificate from "../../images/certificate.jpg";
import React from "react";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";

dayjs.extend(localeData);
// LOTINCHA UZ LOCALE
dayjs.locale({
    name: "uz-latn",
    weekdays: "dushanba_seshanba_chorshanba_payshanba_juma_shanba_yakshanba".split("_"),
    months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avgust_sentyabr_oktabr_noyabr_dekabr".split("_"),
    weekdaysShort: "du_se_ch_pa_ju_sh_ya".split("_"),
    monthsShort: "yan_fev_mar_apr_may_iyu_iyu_avg_sen_okt_noy_dek".split("_"),
    weekStart: 1
}, null, true);
dayjs.locale("uz-latn");
const CertificatePdf = ({pdRef, data}) => {

    return(
        <div className="pdf-container" ref={pdRef}>
            <div className="certificate">
                <div className="blue-border">
                    <div className="blue-border-2">
                        {/*Emblem*/}
                        <div className="header-img">
                            <img src={certificate} alt="Emblem" style={{width: "300px"}}/>
                        </div>

                        <div className="title">O‘ZBEKISTON RESPUBLIKASI</div>

                        <div className="subtitle">Malaka oshirish haqida</div>
                        <div className="red">SERTIFIKAT</div>

                        <div style={{fontWeight: "600"}} className="center">KMO № {data?.certificateNumber}</div>

                        {/*FISH*/}
                        <div className="line">
                           <p className="line-text">{data?.fullName}</p>
                        </div>

                        <div className="center">
                            <p className="center-text">{dayjs(data?.startedAt).format("YYYY [yil] D MMMM")}dan</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p className="center-text">{dayjs(data?.endedAt).format("YYYY [yil] D MMMM") }gacha</p>
                        </div>

                        <div className="center">
                            “O‘ZLITINEFTGAZ” AJ qoshidagi
                        </div>

                        <div className="center">
                            “NEFTGAZ-MALAKA” o‘quv-tadqiqot markazi
                        </div>

                        <div className="center">
                            jami {data?.hour} soatli
                        </div>

                        <div className="line">
                           <p className="center-text">{data?.courseName}</p>
                        </div>

                        <div className="center">Bo‘yicha malaka oshirdi</div>

                        <div className="footer-certificate">
                            <div>Mudir</div>
                            <div className="qr">
                                <img src={`data:image/png;base64, ${data?.qrCodeBase64}`} alt="QR Code" style={{width:200, height:200}}/>
                            </div>
                            <div>Azimov S. X.</div>
                        </div>

                        <div className="date-block">
                            {dayjs(data?.date).format("DD.MM.YYYY")}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CertificatePdf;