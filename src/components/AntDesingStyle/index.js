import {ConfigProvider} from "antd";

const AntDesingStyle = ({children}) => {
    return(
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#fd5d14"
                },
                components: {
                    Spin: {
                        fontSize:18,
                    }
                }
            }}
        >
            {children}
        </ConfigProvider>
    )
}
export default AntDesingStyle;