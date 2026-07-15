import GamePageTemplate from "./GamePageTemplate";

const AndarBahar = () => (
  <GamePageTemplate
    slug="andar-bahar"
    title="Andar Bahar Online India | Rules, Gameplay & Live Casino Guide"
    description="Learn how Andar Bahar works online, game rules, betting options, live dealer features and gameplay information on YOLO365."
    h1="Andar Bahar Online: Rules, Gameplay & Live Casino Guide"
    intro="Learn the rules, card-dealing sequence, table options, and responsible gaming information for the traditional Andar Bahar card game."
    imageAlt="Live Andar Bahar casino table with dealer interface"
    seoImage="/images/andar-bahar-og.jpg"
    highlights={[
      { title: "Game rules", desc: "Understand the Joker card, alternating deals, and the two available sides." },
      { title: "Table options", desc: "Review the table terms, available selections, and any optional side bets before participating." },
      { title: "Responsible gaming", desc: "Set a budget, understand the risks, and use only funds you can afford to lose." },
    ]}
    howToPlay={[
      "Review the table rules and terms before joining a game.",
      "Set an entertainment budget and do not exceed it.",
      "Understand the difference between the Andar and Bahar sides.",
      "The dealer reveals a Joker card and deals alternately to both sides.",
      "The first side to match the Joker card ends the round.",
      "Take breaks and use responsible gaming tools when needed.",
    ]}
    strategyTitle="Andar Bahar rules and responsible gaming guidance"
    benefitsHeading="Andar Bahar Rules Explained"
    howItWorksHeading="How Andar Bahar Works"
    strategy={
      <>
        <p>Andar Bahar is a card game in which the outcome of each round is determined by the deal. The rules and available selections can vary by table.</p>
        <p>Outcomes are random, and no betting approach guarantees a profit. Review table rules and paytables before choosing any option.</p>
        <p>Read our <a href="/blog/andar-bahar-online-strategy-india" className="text-gold underline">Andar Bahar game guide</a> and <a href="/responsible-gaming" className="text-gold underline">responsible gaming information</a> before participating.</p>
      </>
    }
    faqs={[
      { q: "Is Andar Bahar legal to play online in India?", a: "Laws and regulations vary by state. You are responsible for checking the laws that apply where you live before participating." },
      { q: "What is the difference between Andar and Bahar?", a: "Andar and Bahar are the two sides used in the game. Cards are dealt alternately until a card matches the Joker card." },
      { q: "How does an Andar Bahar round end?", a: "A round ends when a card matching the Joker card appears on either the Andar or Bahar side." },
      { q: "What is responsible gaming?", a: "Set a budget, treat participation as entertainment, and never chase losses. Outcomes are random and no strategy guarantees a profit." },
    ]}
    relatedSlugs={[
      { slug: "teen-patti", label: "Teen Patti Live" },
      { slug: "aviator", label: "Aviator Crash" },
      { slug: "cricket-betting", label: "Cricket Betting" },
    ]}
  />
);
export default AndarBahar;
