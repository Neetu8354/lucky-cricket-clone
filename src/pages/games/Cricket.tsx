import GamePageTemplate from "./GamePageTemplate";

const Cricket = () => (
  <GamePageTemplate
    slug="cricket-betting"
    title="Cricket Betting India 2026 | IPL Live Betting & Odds - YOLO365"
    description="Follow IPL 2026 and live cricket betting markets on YOLO365. Explore match odds, cricket insights, and responsible gaming information."
    h1="Cricket Betting in India"
    intro="YOLO365 provides cricket-focused betting information, live match markets, account support features, and responsible gaming guidance for eligible users."
    imageAlt="YOLO365 cricket betting interface showing IPL match information"
    highlights={[
      { title: "Cricket market information", desc: "Review available match, player, totals, and live market information in one place." },
      { title: "Live match updates", desc: "Market availability can update as match conditions change." },
      { title: "Responsible gaming guidance", desc: "Set a budget, understand the risks, and use only funds you can afford to lose." },
    ]}
    howToPlay={[
      "Review the available cricket markets and relevant match information.",
      "Set a budget before participating and do not exceed it.",
      "Consider match conditions, team news, and market terms before making a decision.",
      "Use only funds you can afford to lose.",
      "Take breaks and use available responsible gaming tools when needed.",
    ]}
    strategyTitle="Responsible cricket betting guidance"
    benefitsHeading="Why Choose YOLO365 Cricket Betting"
    howItWorksHeading="How Cricket Betting Works"
    strategy={
      <>
        <p>Set a clear entertainment budget before participating. Never chase losses or use funds needed for essential expenses.</p>
        <p>Review match information and market terms carefully. Results are uncertain, so no approach can guarantee a return.</p>
        <p>Read our <a href="/blog/cricket-betting-bankroll-management-india" className="text-gold underline">bankroll management guide</a> and <a href="/responsible-gaming" className="text-gold underline">responsible gaming information</a> before participating.</p>
      </>
    }
    faqs={[
      { q: "Is online cricket betting legal in India?", a: "Laws and regulations vary by state. You are responsible for checking the laws that apply where you live before participating." },
      { q: "What is responsible gaming?", a: "Responsible gaming means setting a budget, treating participation as entertainment, and never chasing losses. Visit our Responsible Gaming page to learn more." },
      { q: "How can I get account support?", a: "Use the contact options on the site to request account support and receive current information about available services." },
      { q: "Can markets change during a match?", a: "Live market availability and odds can change as match conditions change. Review the current terms and information before making a decision." },
    ]}
    relatedSlugs={[
      { slug: "teen-patti", label: "Teen Patti Live" },
      { slug: "andar-bahar", label: "Andar Bahar" },
      { slug: "aviator", label: "Aviator Crash" },
    ]}
  />
);
export default Cricket;
