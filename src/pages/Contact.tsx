import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { openWhatsApp } from "@/lib/wa";
import { Link } from "react-router-dom";
import { MessageCircle, Mail, Clock, Globe2 } from "lucide-react";

const SITE = "https://yolo365bet24.live";

const Contact = () => {
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${SITE}/contact#webpage`,
      url: `${SITE}/contact`,
      name: "Contact YOLO365 Support | Customer Help & Account Assistance",
      inLanguage: "en-IN",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "YOLO365",
      url: SITE,
      email: "support@yolo365.live",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          availableLanguage: ["English", "Hindi"],
          areaServed: "IN",
          email: "support@yolo365.live",
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
        },
      ],
    },
  ];

  const channels = [
    { icon: MessageCircle, title: "WhatsApp support", value: "Use the available chat channel to request support.", action: openWhatsApp, cta: "Open WhatsApp" },
    { icon: Mail, title: "Email", value: "support@yolo365.live", href: "mailto:support@yolo365.live", cta: "Send Email" },
    { icon: Clock, title: "Support hours", value: "24×7 — every day of the year", cta: "" },
    { icon: Globe2, title: "Languages", value: "English & Hindi (हिन्दी)", cta: "" },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact YOLO365 Support | Customer Help & Account Assistance"
        description="Contact YOLO365 support for customer help, account assistance, game information, and responsible gaming resources."
        canonical="/contact"
        jsonLd={ld}
      />
      <Header />
      <main className="container py-16">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
          <a href="/" className="hover:text-gold">Home</a> <span className="mx-2">/</span> <span className="text-foreground/80">Contact</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Contact <span className="text-gold">YOLO365</span></h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
          Customer support for account assistance, game information, policy questions, and responsible gaming resources.
        </p>

        <section className="grid md:grid-cols-2 gap-5 mb-12">
          {channels.map((c) => (
            <div key={c.title} className="p-6 rounded-xl border hairline bg-card/40">
              <c.icon className="w-7 h-7 text-gold mb-3" />
              <h2 className="font-semibold mb-1 text-lg">{c.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{c.value}</p>
              {c.cta && (
                c.action ? (
                  <button onClick={c.action} className="px-5 h-10 rounded-md bg-gold text-primary-foreground font-semibold text-sm hover:opacity-90">{c.cta}</button>
                ) : (
                  <a href={c.href} className="inline-flex px-5 h-10 items-center rounded-md border hairline hover:border-gold/40 text-sm font-medium">{c.cta}</a>
                )
              )}
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What can we help with?</h2>
          <ul className="grid md:grid-cols-2 gap-3 text-sm text-foreground/80">
            {[
              "Account access and account verification",
              "Payment-status and processing questions",
              "Game rules and platform information",
              "Website navigation and technical issues",
              "Privacy and policy questions",
              "Responsible gaming and self-exclusion requests", 
              "Feedback and complaints", 
              "Editorial-content corrections",
            ].map((q) => (
              <li key={q} className="p-4 rounded-md border hairline bg-card/30">• {q}</li>
            ))}
          </ul>
        </section>

        <section className="grid md:grid-cols-2 gap-5 mb-12">
          <div className="rounded-2xl border hairline bg-card/40 p-7">
            <h2 className="text-xl font-bold mb-3">Support information</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">Support hours are available 24 hours a day, seven days a week. English and Hindi assistance are available. Processing and response times depend on the request and any verification requirements.</p>
          </div>
          <div className="rounded-2xl border hairline bg-card/40 p-7">
            <h2 className="text-xl font-bold mb-3">Feedback and complaints</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">Email <a href="mailto:support@yolo365.live" className="text-gold underline">support@yolo365.live</a> with relevant details. You can also review our <Link to="/terms" className="text-gold underline">Terms</Link>, <Link to="/privacy" className="text-gold underline">Privacy Policy</Link>, and <Link to="/responsible-gaming" className="text-gold underline">Responsible Gaming</Link> resources.</p>
          </div>
        </section>

        <section className="rounded-2xl border hairline bg-card/40 p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Need help right now?</h2>
          <p className="text-muted-foreground text-sm mb-5">Use the contact channels above to request account or platform assistance.</p>
          <button onClick={openWhatsApp} className="px-7 h-12 rounded-md bg-gold text-primary-foreground font-semibold hover:opacity-90">
            Contact support
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
