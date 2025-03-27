import { title } from "process"
import "./global.css"

export const metadata = {
    title: "F1GPT",
    description : " Formula 1 questions!"
}


const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout;

