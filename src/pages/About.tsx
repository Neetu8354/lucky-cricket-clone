import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ShieldCheck, Users, HeartHandshake, Mail, BookOpen, MapPin } from "lucide-react";

const SITE = "https://yolo365bet24.live";

const About = () => {
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${SITE}/about#webpage`,
      url: `${SITE}/about`,
      name: "About YOLO365 | Online Gaming Platform & Customer Support Information",
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "About", item: `${SITE}/about` },
      ],
    },
  ];

  const values = [
    { icon: ShieldCheck, title: "User-focused information", desc: "Clear game information, platform resources, and account support guidance." },
    { icon: HeartHandshake, title: "Responsible gaming", desc: "Budgeting, time-limit, and self-exclusion information for eligible users." },
    { icon: Users, title: "Editorial standards", desc: "Gaming articles are supported by an editorial policy and a named editorial team." },
    { icon: Mail, title: "Customer support", desc: "Support resources are available through the contact page and support email." },
    { icon: BookOpen, title: "Policies and resources", desc: "Terms, privacy, responsible gaming, and editorial-policy pages are publicly available." },
    { icon: MapPin, title: "Service information", desc: "Review the applicable terms, policies, and local requirements before using any service." },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About YOLO365 | Online Gaming Platform & Customer Support Information"
        description="Learn about YOLO365, our gaming platform, services, customer support and commitment to providing a smooth online experience."
        canonical="/about"
        jsonLd={ld}
      />
      <Header />
      <main className="container py-16">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
          <a href="/" className="hover:text-gold">Home</a> <span className="mx-2">/</span> <span className="text-foreground/80">About</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">About <span className="text-gold">YOLO365</span></h1>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-12">
          YOLO365 provides online gaming information, platform resources, customer support, and responsible gaming guidance for eligible users.
        </p>

        <section className="mb-16 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Our story</h2>
          <p className="text-foreground/80 leading-relaxed">
            YOLO365 was created to simplify online gaming experiences with easy access to game information, responsive support, and user-focused technology. We aim to make rules, platform resources, and responsible gaming guidance easier to find and understand.
          </p>
        </section>

        <section className="mb-16 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Company information</h2>
          <div className="grid gap-4 text-sm text-foreground/80">
            <p><strong className="text-foreground">Platform:</strong> YOLO365 online gaming information and support resources.</p>
            <p><strong className="text-foreground">Support email:</strong> <a href="mailto:support@yolo365.live" className="text-gold underline">support@yolo365.live</a></p>
            <p><strong className="text-foreground">Editorial team:</strong> Gaming analysts and sports content writers. <Link to="/author/yolo365-editorial-team" className="text-gold underline">Meet the editorial team</Link>.</p>
            <p><strong className="text-foreground">Policies:</strong> Review our <Link to="/terms" className="text-gold underline">Terms</Link>, <Link to="/privacy" className="text-gold underline">Privacy Policy</Link>, and <Link to="/editorial-policy" className="text-gold underline">Editorial Policy</Link>.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Our platform resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-xl border hairline bg-card/40 hover:border-gold/40 transition-colors">
                <v.icon className="w-7 h-7 text-gold mb-3" />
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border hairline bg-card/40 p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Responsible gaming</h2>
          <p className="text-muted-foreground mb-6">Gaming should be treated as entertainment. Set a budget, take breaks, and never chase losses.</p>
          <Link to="/responsible-gaming" className="inline-flex items-center justify-center px-7 h-12 rounded-md bg-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            Responsible gaming information
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
