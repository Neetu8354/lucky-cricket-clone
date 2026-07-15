import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const EditorialPolicy = () => (
  <div className="min-h-screen">
    <SEO
      title="Editorial Policy | YOLO365"
      description="Learn how the YOLO365 Editorial Team researches, reviews, updates, and publishes gaming information and responsible gaming resources."
      canonical="/editorial-policy"
    />
    <Header />
    <main className="container py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Editorial Policy</h1>
      <div className="space-y-8 text-foreground/85 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Our purpose</h2>
          <p>YOLO365 publishes educational articles about cricket, card games, game rules, and responsible gaming. Our content is designed to help readers understand game formats and make informed decisions.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Research and review</h2>
          <p>Articles are prepared by the YOLO365 Editorial Team using publicly available rules, match information, and game documentation. We review articles for clarity, accuracy, and responsible gaming language before publication.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Updates and corrections</h2>
          <p>We display publication and update dates on articles. If information changes or an error is identified, we update the article or correct it as appropriate.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Independence and transparency</h2>
          <p>We do not present outcomes, strategies, or game information as guarantees of profit. Readers should verify applicable local laws and use only funds they can afford to lose.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Responsible gaming</h2>
          <p>Gaming should be treated as entertainment. Visit our Responsible Gaming page for budgeting, time-limit, and self-exclusion guidance.</p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default EditorialPolicy;
