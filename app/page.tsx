import Cards from "@/components/cards";
import AnimatedStats from "@/components/countup";
import DownloadApp from "@/components/downloadApp";
import EmploySection from "@/components/employer_section";
import Herosection from "@/components/herosection";



export default function Page() {
  return (
    <>
      <Herosection />
      <Cards />
      <AnimatedStats />
      <EmploySection />
      <DownloadApp />
      {/* <DownloadAppBanner /> */}
    </>
  );
}
