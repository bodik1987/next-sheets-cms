import Article from "./components/article";
import CmsSection from "./components/cms-section";
import Menu from "./components/ui/menu";
import Section from "./components/ui/section";
import ZoomImage from "./components/zoom-image";

export default function Home() {
  return (
    <>
      <Menu />
      <CmsSection />
      <ZoomImage />
      <Section content={<Article />} />
    </>
  );
}
