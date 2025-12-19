
export const loadFonts = async () => {
    // // normal font
    // const dejavuRes = await fetch("/fonts/DejaVuSans.ttf");
    // const dejavuBuffer = await dejavuRes.arrayBuffer();
    // const dejavuFont = btoa(
    //     new Uint8Array(dejavuBuffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
    // );
    //
    // // bold font
    // const dejavuBoldRes = await fetch("/fonts/DejaVuSans-Bold.ttf");
    // const dejavuBoldBuffer = await dejavuBoldRes.arrayBuffer();
    // const dejavuFontBold = btoa(
    //     new Uint8Array(dejavuBoldBuffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
    // );

    // normal font
    const dejavuRes = await fetch("/fonts/DejaVuSerif.ttf");
    const dejavuBuffer = await dejavuRes.arrayBuffer();
    const dejavuFont = btoa(
        new Uint8Array(dejavuBuffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
    );

    // bold font
    const dejavuBoldRes = await fetch("/fonts/DejaVuSerif-Bold.ttf");
    const dejavuBoldBuffer = await dejavuBoldRes.arrayBuffer();
    const dejavuFontBold = btoa(
        new Uint8Array(dejavuBoldBuffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
    );

    return { dejavuFont, dejavuFontBold };
};