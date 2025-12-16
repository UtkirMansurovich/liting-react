import certificate from "../../images/certificate.jpg";
import React, {useEffect} from "react";
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

                        <h2 className="title">O‘ZBEKISTON RESPUBLIKASI</h2>

                        <h3 className="subtitle">Malaka oshirish haqida</h3>
                        <h1 className="red">SERTIFIKAT</h1>

                        <p style={{fontWeight: "600"}} className="center">KMO № {data?.certificateNumber}</p>

                        {/*FISH*/}
                        <div className="line">
                           <p className="line-text">{data?.fullName}</p>
                        </div>

                        <div className="center">
                            <p className="center-text">{dayjs(data?.startedAt).format("YYYY [yil] D MMMM")}dan</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p className="center-text">{dayjs(data?.endedAt).format("YYYY [yil] D MMMM") }gacha</p>
                        </div>

                        <h4 className="center">
                            “O‘ZLITINEFTGAZ” AJ qoshidagi
                        </h4>

                        <h4 className="center">
                            “NEFTGAZ-MALAKA” o‘quv-tadqiqot markazi
                        </h4>

                        <p className="center">
                            jami {data?.hour} soatli
                        </p>

                        <div className="line">
                           <p className="center-text">{data?.courseName}</p>
                        </div>

                        <p className="center">Bo‘yicha malaka oshirdi</p>

                        <div className="footer-certificate">
                            <p>Mudir</p>
                            <div className="qr">
                                <img src={`data:image/png;base64, ${data?.qrCodeBase64}`} alt="QR Code" style={{width:100, height:100}}/>
                            </div>
                            <p className="signer">Azimov S. X.</p>
                        </div>

                        <p className="date-block">
                            {dayjs(data?.date).format("DD.MM.YYYY")}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CertificatePdf;