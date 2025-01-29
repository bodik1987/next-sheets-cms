import Article from "./components/article";
import CmsSection from "./components/cms-section";
import FeedbackForm from "./components/feedback-form";
import Menu from "./components/ui/menu";
import Section from "./components/ui/section";
import Tray from "./components/ui/tray";
import ZoomImage from "./components/zoom-image";

export default function Home() {
  return (
    <>
      <Menu />
      <CmsSection />
      <FeedbackForm />
      <Tray />
      <ZoomImage />
      <Section content={<Article />} />
    </>
  );
}
