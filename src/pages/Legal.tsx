import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock } from "lucide-react";

interface LegalLayoutProps {
  title: string;
  updateDate: string;
  children: React.ReactNode;
}

const LegalLayout = ({ title, updateDate, children }: LegalLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-10">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-12 rounded-full text-[#ffffff50] hover:text-white hover:bg-white/5 pl-2"
        >
          <ArrowLeft size={18} className="mr-2" /> Back
        </Button>

        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">{title}</h1>
          <div className="flex items-center gap-2 text-[#ffffff40] text-sm font-medium uppercase tracking-widest">
            <Clock size={14} /> Last Updated: {updateDate}
          </div>
        </div>

        <div className="prose prose-invert prose-white max-w-none prose-p:text-[#ffffff80] prose-p:font-light prose-p:leading-relaxed prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-strong:text-white prose-li:text-[#ffffff80] prose-li:font-light">
          {children}
        </div>
      </div>
    </div>
  );
};

export const Terms = () => (
  <LegalLayout title="Terms of Service" updateDate="December 20, 2025">
    <h2>1. Introduction</h2>
    <p>
      Welcome to Reboot. By using our website and services, you are agreeing to
      comply with and be bound by the following terms and conditions. Please
      review these terms carefully. If you do not agree to these terms, you
      should not use this site or its services.
    </p>

    <h2>2. Use of Service</h2>
    <p>
      Reboot provides high-performance cloud infrastructure and bare metal
      hosting. You agree to use these services only for lawful purposes. You are
      prohibited from using our services for any activity that is illegal,
      harmful, or interferes with the operation of our network or other users'
      experience.
    </p>

    <h2>3. Account Responsibility</h2>
    <p>
      You are responsible for maintaining the confidentiality of your account
      credentials and for all activities that occur under your account. You must
      notify Reboot immediately of any unauthorized use of your account.
    </p>

    <h2>4. Payment and Billing</h2>
    <p>
      Reboot services are billed on a subscription or pay-as-you-go basis. You
      agree to provide accurate billing information and authorize Reboot to
      charge the provided payment method for all incurred fees.
    </p>

    <h2>5. Limitation of Liability</h2>
    <p>
      To the maximum extent permitted by law, Reboot shall not be liable for any
      indirect, incidental, special, or consequential damages resulting from the
      use or inability to use our services.
    </p>
  </LegalLayout>
);

export const Privacy = () => (
  <LegalLayout title="Privacy Policy" updateDate="December 20, 2025">
    <h2>1. Data Collection</h2>
    <p>
      Reboot collects minimal data necessary to provide and secure our services.
      This includes contact information, billing details, and technical usage
      logs required for maintaining system integrity and performance.
    </p>

    <h2>2. Data Security</h2>
    <p>
      We implement industry-standard security measures to protect your
      information. All sensitive data is encrypted at rest and in transit.
    </p>

    <h2>3. Cookie Policy</h2>
    <p>
      We use only essential cookies required for authentication and security
      purposes. We do not use tracking or advertising cookies.
    </p>

    <h2>4. Third-Party Sharing</h2>
    <p>
      Reboot does not sell your personal data. We share data with third-party
      providers (such as payment processors) only to the extent necessary to
      deliver our services.
    </p>
  </LegalLayout>
);

export const SLA = () => (
  <LegalLayout title="Service Level Agreement" updateDate="December 20, 2025">
    <h2>1. Uptime Guarantee</h2>
    <p>
      Reboot guarantees a 99.9% monthly uptime for all Cloud VPS services and a
      99.99% monthly uptime for Bare Metal servers.
    </p>

    <h2>2. Credit Eligibility</h2>
    <p>
      If uptime falls below the guaranteed levels, customers are eligible for
      service credits calculated as a percentage of their monthly bill,
      depending on the severity of the downtime.
    </p>

    <h2>3. Network Performance</h2>
    <p>
      We guarantee that our global network will maintain low latency and high
      throughput based on the specifications of the service plan purchased.
    </p>

    <h2>4. Support Response Time</h2>
    <p>
      Our goal is to provide a human response to all high-priority support
      tickets within 15 minutes of submission.
    </p>
  </LegalLayout>
);
