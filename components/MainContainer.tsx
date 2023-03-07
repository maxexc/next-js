import { FC } from "react";
const { default: Head } = require("next/head")
import { mainContainerType } from "../types"

const MainContainer:FC<mainContainerType> = ({ children, nameTitle, keyword }) => {
    return (
        <> 
            <Head>
                <title>{nameTitle}</title>
                <meta name="Next.js project created by maxexc" content={keyword} ></meta>
            </Head>
                {children}
        </>
    )
}

export default MainContainer;