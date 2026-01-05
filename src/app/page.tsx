import { Metadata } from "next";
import HomeOnePage from "./(homes)/home-1/page";

export const metadata: Metadata = {
  title: "Kaev & Co - Home Page",
};

export default function Home() {
  return (
    <>
      <HomeOnePage />
    </>
  );
}
