import {Inter} from "next/font/google";
import style from "./layout.module.css"



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={style.container}>{children}</body>
    </html>
  )
}
