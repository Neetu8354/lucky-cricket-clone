import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const RefundPolicy = () => (
  <div className="min-h-screen">
    <SEO
      title="Refund Policy | YOLO365"
      description="Read the YOLO365 refund-policy information and learn how to request support for payment-related questions."
      canonical="/refund-policy"
    />
    <Header />
    <main className="container py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Refund Policy</h1>
      <div className="space-y-6 text-foreground/85 leading-relaxed">
        <p>Payment-related questions are reviewed according to the applicable terms, payment-provider requirements, and account-verification procedures.</p>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Requesting support</h2>
          <p>For a payment-related issue, contact support at <a href="mailto:support@yolo365.live" className="text-gold underline">support@yolo365.live</a> and include the relevant transaction details and any available reference information.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Review process</h2>
          <p>Requests are reviewed on a case-by-case basis. Processing times depend on the payment method, the information provided, and any verification requirements.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Related policies</h2>
          <p>Please also review the Terms and Conditions and Privacy Policy for information about account use and data handling.</p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default RefundPolicy;
