import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  Mail,
  MessageCircle,
  FileText,
  ChevronRight,
} from "lucide-react";

const categories = [
  { name: "Getting Started", icon: FileText, articles: 12 },
  { name: "Billing & Account", icon: Search, articles: 8 },
  { name: "Server Management", icon: MessageCircle, articles: 24 },
  { name: "Network & Security", icon: FileText, articles: 15 },
];

const faqs = [
  {
    q: "How fast can I deploy a server?",
    a: "Most VPS instances are ready in under 60 seconds.",
  },
  {
    q: "Do you offer a money-back guarantee?",
    a: "Yes, we offer a 7-day risk-free trial on all cloud plans.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. You can scale your resources anytime from the dashboard.",
  },
];

const Help = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">
            How can we help?
          </h1>
          <div className="relative max-w-xl mx-auto mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 size-5" />
            <Input
              placeholder="Search for answers..."
              className="w-full bg-[#111] border-[#ffffff10] h-14 pl-12 rounded-2xl focus:ring-1 focus:ring-white/20 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {categories.map((cat) => (
            <Card
              key={cat.name}
              className="bg-[#111]/50 border-[#ffffff05] hover:border-[#ffffff15] transition-all cursor-pointer group"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <cat.icon className="size-5 text-[#ffffff60]" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-medium">
                      {cat.name}
                    </CardTitle>
                    <p className="text-sm text-[#ffffff40]">
                      {cat.articles} articles
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-5 text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Popular Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border-b border-[#ffffff05] pb-4"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none py-2">
                  <span className="text-lg text-[#ffffff90] group-hover:text-white transition-colors">
                    {faq.q}
                  </span>
                  <ChevronRight className="size-5 text-white/20 group-open:rotate-90 transition-all" />
                </summary>
                <p className="mt-2 text-[#ffffff60] leading-relaxed pl-1">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white text-black flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Still need help?</h3>
            <p className="text-black/60">
              Our team of experts is available 24/7 to assist you with any
              questions.
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="rounded-full bg-black text-white hover:bg-black/90 px-6">
              <MessageCircle className="mr-2 size-4" /> Live Chat
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-black/20 hover:bg-black/5 px-6"
            >
              <Mail className="mr-2 size-4" /> Email Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
