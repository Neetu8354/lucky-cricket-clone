import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const SITE = "https://yolo365bet24.live";

const AuthorEditorialTeam = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE}/author/yolo365-editorial-team#person`,
    name: "YOLO365 Editorial Team",
    url: `${SITE}/author/yolo365-editorial-team`,
    description: "Gaming analysts and sports content writers covering cricket, card games, game information, and responsible gaming resources.",
    worksFor: { "@id": `${SITE}/#organization` },
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="YOLO365 Editorial Team | Author Profile"
        description="Meet the YOLO365 Editorial Team, which researches cricket, game information, and responsible gaming resources."
        canonical="/author/yolo365-editorial-team"
        jsonLd={jsonLd}
      />
      <Header />
      <main className="container py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">YOLO365 Editorial Team</h1>
        <div className="space-y-6 text-foreground/85 leading-relaxed">
          <p>YOLO365 Editorial Team is a group of gaming analysts and sports content writers covering cricket, card games, game rules, and industry updates.</p>
          <p>Our articles focus on clear explanations, source-aware research, and responsible gaming guidance. We do not represent game outcomes, odds, or strategies as guaranteed results.</p>
          <p>Read our <Link to="/editorial-policy" className="text-gold underline">Editorial Policy</Link> to learn how we research, review, and update content.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthorEditorialTeam;
