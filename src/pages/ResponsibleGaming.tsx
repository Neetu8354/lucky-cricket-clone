import SEO from "@/components/SEO";

const ResponsibleGaming = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Responsible Gaming - YOLO365"
        description="YOLO365 responsible gaming policy. Learn about our commitment to safe betting, self-exclusion tools, deposit limits, and gambling addiction support."
        canonical="/responsible-gaming"
      />
      <div className="container py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Responsible Gaming</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            YOLO365 is committed to promoting responsible gaming. We believe betting should be fun and entertaining, never a problem.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Our Commitment</h2>
          <p className="text-muted-foreground mb-4">
            We provide tools and resources to help you gamble responsibly. Our team is trained to identify and assist players who may be at risk.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Age Verification</h2>
          <p className="text-muted-foreground mb-4">
            We strictly enforce the minimum age requirement of 18 years. We use verification processes to ensure all players meet this requirement.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Self-Exclusion</h2>
          <p className="text-muted-foreground mb-4">
            If you feel you need a break from gambling, you can request self-exclusion. This will prevent you from accessing your account for a specified period.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Deposit Limits</h2>
          <p className="text-muted-foreground mb-4">
            You can set daily, weekly, or monthly deposit limits to help manage your spending. These limits can be adjusted at any time through your account settings.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Time Limits</h2>
          <p className="text-muted-foreground mb-4">
            We offer session time limits to help you control how long you spend on our platform. You'll receive reminders when your time limit is approaching.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Warning Signs</h2>
          <p className="text-muted-foreground mb-4">
            If you're betting more than you can afford, chasing losses, or neglecting other responsibilities, you may have a gambling problem. Seek help immediately.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Support Resources</h2>
          <p className="text-muted-foreground mb-4">
            If you or someone you know has a gambling problem, please contact:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>National Problem Gambling Helpline</li>
            <li>Gamblers Anonymous</li>
            <li>Your local mental health services</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            For responsible gaming support or to set limits, contact our team via WhatsApp. We're here to help 24/7.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsibleGaming;
