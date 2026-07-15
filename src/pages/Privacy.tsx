import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy - YOLO365"
        description="YOLO365 privacy policy. Learn how we protect your personal data, what information we collect, and your rights under our privacy practices."
        canonical="/privacy"
      />
      <div className="container py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            Your privacy is important to YOLO365. This policy explains how we collect, use, and protect your personal information.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground mb-4">
            We collect information you provide directly, including your name, contact details, and payment information when you register an account or make transactions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We use your information to provide our services, process transactions, verify your identity, and communicate with you about your account.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
          <p className="text-muted-foreground mb-4">
            We implement industry-standard security measures to protect your data, including SSL encryption and secure payment processing.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Sharing</h2>
          <p className="text-muted-foreground mb-4">
            We do not sell your personal information to third parties. We may share data with payment processors and regulatory authorities as required by law.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
          <p className="text-muted-foreground mb-4">
            You have the right to access, correct, or delete your personal information. Contact our support team to exercise these rights.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cookies</h2>
          <p className="text-muted-foreground mb-4">
            We use cookies to improve your experience. You can manage cookie preferences through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Policy Updates</h2>
          <p className="text-muted-foreground mb-4">
            We may update this privacy policy from time to time. We will notify you of significant changes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            For privacy-related questions, contact our support team via WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
