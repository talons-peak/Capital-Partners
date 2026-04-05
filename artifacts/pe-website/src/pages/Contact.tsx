import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  organization: z.string().min(2, "Please enter your organization"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  type: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(20, "Please provide a brief description (min 20 characters)"),
});

type InquiryForm = z.infer<typeof inquirySchema>;

const offices = [
  {
    city: "New York",
    label: "Headquarters",
    address: ["One Liberty Plaza, Suite 4200", "New York, NY 10006"],
    phone: "+1 (212) 000-0000",
    email: "nyc@le-partners.com",
  },
  {
    city: "London",
    label: "European Office",
    address: ["20 St James's Street", "London, SW1A 1ES, United Kingdom"],
    phone: "+44 20 0000 0000",
    email: "london@le-partners.com",
  },
  {
    city: "Singapore",
    label: "Asia Pacific Office",
    address: ["1 Raffles Place, #35-00", "OUB Centre, Singapore 048616"],
    phone: "+65 6000 0000",
    email: "apac@le-partners.com",
  },
];

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InquiryForm>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      phone: "",
      type: "",
      message: "",
    },
  });

  function onSubmit(values: InquiryForm) {
    console.log(values);
    toast({
      title: "Inquiry Received",
      description: "Thank you for reaching out. A member of our team will be in touch within 2 business days.",
    });
    form.reset();
  }

  return (
    <div className="pt-24 selection:bg-primary selection:text-primary-foreground" data-testid="contact-page">

      {/* ── PAGE HERO ── */}
      <section className="py-24 md:py-32 border-b border-white/8">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.p variants={fadeInUp} className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-6">
            Contact
          </motion.p>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif font-semibold leading-[0.9] tracking-tight mb-10 max-w-4xl">
            Initiate a dialogue.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-foreground/65 font-light leading-relaxed max-w-2xl">
            L-E Partners welcomes inquiries from exceptional management teams, intermediaries, and prospective limited partners. All correspondence is held in strict confidence.
          </motion.p>
        </Reveal>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="py-28 md:py-36" data-testid="contact-form-section">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

            {/* Sidebar Info */}
            <Reveal className="lg:col-span-4">
              <motion.div variants={fadeInUp} className="space-y-12">
                <div>
                  <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-6">Inquiry Types</p>
                  <ul className="space-y-4">
                    {[
                      "Investment Opportunities",
                      "Limited Partner Inquiries",
                      "Management Team Introductions",
                      "Intermediary / Advisor Relations",
                      "Media & Press",
                      "General Inquiries",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-foreground/60 font-light">
                        <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-[1px] bg-white/8" />

                <div>
                  <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-6">Response Time</p>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground/60 font-light leading-relaxed">
                      All inquiries receive a response within 2 business days. Investment-related correspondence is reviewed by a senior member of our team.
                    </p>
                  </div>
                </div>

                <div className="h-[1px] bg-white/8" />

                <div>
                  <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-6">Headquarters</p>
                  <ul className="space-y-4 text-sm text-foreground/60 font-light">
                    <li className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>One Liberty Plaza, Suite 4200<br />New York, NY 10006</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      +1 (212) 000-0000
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                      <a href="mailto:inquiries@le-partners.com" className="hover:text-primary transition-colors">
                        inquiries@le-partners.com
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </Reveal>

            {/* Form */}
            <div className="lg:col-span-7 lg:col-start-6" data-testid="contact-form">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Jonathan Sterling"
                              className="bg-transparent border-white/15 focus:border-primary rounded-none h-12 text-foreground placeholder:text-foreground/25"
                              data-testid="input-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">Organization</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Acme Corporation"
                              className="bg-transparent border-white/15 focus:border-primary rounded-none h-12 text-foreground placeholder:text-foreground/25"
                              data-testid="input-organization"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="j.sterling@example.com"
                              className="bg-transparent border-white/15 focus:border-primary rounded-none h-12 text-foreground placeholder:text-foreground/25"
                              data-testid="input-email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">
                            Phone <span className="text-foreground/30 normal-case tracking-normal">(optional)</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+1 (212) 000-0000"
                              className="bg-transparent border-white/15 focus:border-primary rounded-none h-12 text-foreground placeholder:text-foreground/25"
                              data-testid="input-phone"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">Nature of Inquiry</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger
                              className="bg-transparent border-white/15 focus:border-primary rounded-none h-12 text-foreground"
                              data-testid="select-type"
                            >
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border-white/15 text-foreground">
                            <SelectItem value="investment">Investment Opportunity</SelectItem>
                            <SelectItem value="lp">Limited Partner Inquiry</SelectItem>
                            <SelectItem value="management">Management Team Introduction</SelectItem>
                            <SelectItem value="intermediary">Intermediary / Advisor</SelectItem>
                            <SelectItem value="media">Media & Press</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please provide a brief description of your inquiry..."
                            rows={6}
                            className="bg-transparent border-white/15 focus:border-primary rounded-none text-foreground placeholder:text-foreground/25 resize-none"
                            data-testid="textarea-message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-4 uppercase text-xs tracking-widest font-bold hover:bg-white hover:text-background transition-colors duration-300 flex items-center justify-center gap-3"
                    data-testid="button-submit"
                  >
                    Submit Inquiry <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-foreground/30 leading-relaxed text-center font-light">
                    By submitting this form, you agree that your information will be handled in accordance with our Privacy Policy and held in strict confidence by L-E Partners LLC.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFICES ── */}
      <section className="py-24 bg-card border-t border-white/8" data-testid="offices-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4">Global Presence</p>
            <h2 className="text-3xl md:text-4xl font-serif">Offices</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8 border border-white/8">
            {offices.map((o, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-card p-10">
                <p className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-2">{o.label}</p>
                <h3 className="text-2xl font-serif mb-6">{o.city}</h3>
                <ul className="space-y-3 text-sm text-foreground/55 font-light">
                  {o.address.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                  <li className="pt-3">
                    <a href={`tel:${o.phone}`} className="hover:text-primary transition-colors">{o.phone}</a>
                  </li>
                  <li>
                    <a href={`mailto:${o.email}`} className="hover:text-primary transition-colors">{o.email}</a>
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
