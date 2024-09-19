import { setToken } from "@/app/featurs/userSlice";
import { useAppDispatch } from "@/app/hook";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {

  const dispatch = useAppDispatch()

  return (
    <div>
      <button onClick={()=>dispatch(setToken('pooria'))}>Set token</button>
      <main className="">
        <Card txt={"adscsd"} src={"/1.jpg"} des={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis error nisi adipisci, excepturi, velit amet explicabo est eaque"} />
      </main>

      </div>
       
  );
}