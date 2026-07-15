import GamePageTemplate from "./GamePageTemplate";

const Aviator = () => (
  <GamePageTemplate
    slug="aviator"
    title="Aviator Game Online India 2026 | Rules, Features & Live Crash Game"
    description="Learn how Aviator crash game works, gameplay features, betting rules, auto cashout options and responsible gaming information on YOLO365."
    h1="Aviator Game Online India: Crash Game Guide & Features"
    intro="Learn how the Aviator crash-game format works, including multiplier rounds, cashout options, table features, and responsible gaming practices."
    imageAlt="Aviator crash game interface showing a rising multiplier curve"
    seoImage="/images/aviator-og.jpg"
    highlights={[
      { title: "Multiplier rounds", desc: "Each round displays a multiplier that rises until the round ends." },
      { title: "Cashout options", desc: "Review the available manual and automatic cashout controls before joining a round." },
      { title: "Responsible gaming", desc: "Set a budget, understand the risks, and use only funds you can afford to lose." },
    ]}
    howToPlay={[
      "Review the game rules, controls, and table terms before participating.",
      "Set an entertainment budget and do not exceed it.",
      "Choose a round and review the available cashout options.",
      "Understand that the multiplier can stop at any time.",
      "Take breaks and use responsible gaming tools when needed.",
    ]}
    strategyTitle="Aviator game rules and responsible gaming guidance"
    benefitsHeading="Aviator Crash Game Features"
    howItWorksHeading="How Aviator Works"
    strategy={
      <>
        <p>Aviator rounds are unpredictable. Players may choose different approaches, but no approach can guarantee a result or profit.</p>
        <p>Review the table controls and cashout options before participating. Avoid increasing stakes to recover prior losses.</p>
        <p>Set a time and spending limit, take regular breaks, and visit our <a href="/responsible-gaming" className="text-gold underline">responsible gaming information</a> if the activity stops being enjoyable.</p>
      </>
    }
    faqs={[
      { q: "How does Aviator work?", a: "Aviator uses a crash-game format in which a displayed multiplier rises until the round ends. Review the applicable game rules and provider information before participating." },
      { q: "What is auto cashout?", a: "Auto cashout is an optional setting that can close a position at a selected multiplier if the round reaches it. Availability and rules can vary by table." },
      { q: "Can I access Aviator on mobile?", a: "Check the current platform and table requirements for supported mobile access and available features." },
      { q: "What is responsible gaming?", a: "Set a budget, treat participation as entertainment, and never chase losses. Outcomes are unpredictable and no strategy guarantees a profit." },
    ]}
    relatedSlugs={[
      { slug: "teen-patti", label: "Teen Patti Live" },
      { slug: "andar-bahar", label: "Andar Bahar" },
      { slug: "cricket-betting", label: "Cricket Betting" },
    ]}
  />
);
export default Aviator;
