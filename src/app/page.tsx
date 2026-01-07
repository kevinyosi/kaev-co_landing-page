import { Metadata } from "next";
import HomeFourMain from "@/pages/homes/home-4";

export const metadata: Metadata = {
  title: "Kaev & Co - Home Page",
};

export default function Home() {
  return (
    <>
      <HomeFourMain />
    </>
  );
}
