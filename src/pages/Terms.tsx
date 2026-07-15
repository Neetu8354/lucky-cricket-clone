import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Terms and Conditions - YOLO365"
        description="Read YOLO365 terms and conditions. Learn about our betting rules, account policies, withdrawal terms, and responsible gaming guidelines."
        canonical="/terms"
      />
      <div className="container py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            By using YOLO365, you agree to these terms and conditions. Please read them carefully.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-4">
            By accessing and using YOLO365, you accept and agree to be bound by these terms and conditions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Age Requirement</h2>
          <p className="text-muted-foreground mb-4">
            You must be at least 18 years old to use our services. By using YOLO365, you confirm that you meet this age requirement.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Account Registration</h2>
          <p className="text-muted-foreground mb-4">
            You are responsible for maintaining the confidentiality of your account information. You agree to notify us immediately of any unauthorized use.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Betting Rules</h2>
          <p className="text-muted-foreground mb-4">
            All bets are final once placed. YOLO365 reserves the right to void any bets if there is evidence of fraud or manipulation.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Deposits and Withdrawals</h2>
          <p className="text-muted-foreground mb-4">
            Deposits are processed instantly. Withdrawals are typically processed within 5 minutes during business hours. We reserve the right to verify transactions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Responsible Gaming</h2>
          <p className="text-muted-foreground mb-4">
            We promote responsible gaming. If you believe you have a gambling problem, please contact our support team for self-exclusion options.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-4">
            YOLO365 is not liable for any losses arising from the use of our services. Please gamble responsibly.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            For any questions about these terms, please contact our support team via WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
