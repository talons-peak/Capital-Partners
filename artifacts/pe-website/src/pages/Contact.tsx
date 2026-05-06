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
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
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

const team = [
  {
    name: "Lori Hess",
    title: "Managing Partner",
    office: "(646) 858-0034",
    mobile: "(917) 446-3126",
    email: "lori@l-epartners.com",
  },
  {
    name: "Sandi Macan",
    title: "Partner",
    office: "(646) 858-0036",
    mobile: "(610) 420-3142",
    email: "sandi@l-epartners.com",
  },
  {
    name: "Nikki Delp",
    title: "Principal",
    office: "(646) 777-1574",
    mobile: "(610) 500-4164",
    email: "nikki@l-epartners.com",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<InquiryForm>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: "", organization: "", email: "", phone: "", type: "", message: "" },
  });

  function onSubmit(values: InquiryForm) {
    console.log(values);
    toast({
      title: "Inquiry Received",
      description: "Thank you for reaching out. A member of our team will be in touch shortly.",
    });
    form.reset();
  }

  return (
    <div className="pt-28 selection:bg-primary selection:text-primary-foreground" data-testid="contact-page">

      {/* ── PAGE HERO ── */}
      <section className="relative border-b border-border overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.06]">
          <img src="/le/hero-home.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 py-24 md:py-32">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-primary" />
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Contact</p>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif font-semibold leading-[0.9] tracking-tight text-foreground mb-10 max-w-4xl">
            Get in touch.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            L&amp;E Partners welcomes inquiries from private equity firms and senior operating executives. All correspondence is held in strict confidence.
          </motion.p>
        </Reveal>
      </section>

      {/* ── TEAM CONTACTS ── */}
      <section className="py-20 md:py-28 bg-white" data-testid="team-contacts-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-primary" />
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Our Team</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Reach a principal directly.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((p, i) => (
              <motion.div
                key={p.name}
                variants={fadeInUp}
                className="border border-border bg-white p-8 hover:border-primary/40 transition-colors"
                data-testid={`contact-card-${i}`}
              >
                <div className="w-8 h-[2px] bg-primary mb-5" />
                <h3 className="text-xl font-serif text-foreground mb-1">{p.name}</h3>
                <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-6">{p.title}</p>
                <ul className="space-y-2 text-sm text-muted-foreground font-light">
                  <li>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-semibold">Office</span>
                    <br />
                    <a href={`tel:${p.office.replace(/\D/g, "")}`} className="hover:text-primary transition-colors">{p.office}</a>
                  </li>
                  <li>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-semibold">Mobile</span>
                    <br />
                    <a href={`tel:${p.mobile.replace(/\D/g, "")}`} className="hover:text-primary transition-colors">{p.mobile}</a>
                  </li>
                  <li>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-semibold">Email</span>
                    <br />
                    <a href={`mailto:${p.email}`} className="hover:text-primary transition-colors break-all">{p.email}</a>
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="py-24 md:py-32 bg-muted" data-testid="contact-form-section">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            <Reveal className="lg:col-span-4">
              <motion.div variants={fadeInUp} className="space-y-12">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-[2px] bg-primary" />
                    <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Office</p>
                  </div>
                  <ul className="space-y-4 text-sm text-muted-foreground font-light">
                    <li className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>36 East 10th Street, Suite 8E<br />New York, NY 10003</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                      <a href="tel:6468580034" className="hover:text-primary transition-colors">+1 (646) 858-0034</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                      <a href="mailto:lori@l-epartners.com" className="hover:text-primary transition-colors">
                        lori@l-epartners.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="h-[1px] bg-border" />

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-[2px] bg-primary" />
                    <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Inquiry Types</p>
                  </div>
                  <ul className="space-y-3">
                    {["Private Equity Firm", "Executive", "General Inquiry"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground font-light">
                        <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>

            <div className="lg:col-span-7 lg:col-start-6 bg-white border border-border p-10 md:p-12" data-testid="contact-form">
              <h2 className="text-2xl font-serif text-foreground mb-8">Send an Inquiry</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Smith" className="border-border focus:border-accent rounded-none h-12" data-testid="input-name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="organization" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Organization</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Capital" className="border-border focus:border-accent rounded-none h-12" data-testid="input-organization" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="jane@example.com" className="border-border focus:border-accent rounded-none h-12" data-testid="input-email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                          Phone <span className="text-muted-foreground/40 normal-case tracking-normal">(optional)</span>
                        </FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+1 (212) 000-0000" className="border-border focus:border-accent rounded-none h-12" data-testid="input-phone" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="type" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Nature of Inquiry</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-border focus:border-accent rounded-none h-12" data-testid="select-type">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="border-border">
                          <SelectItem value="pe">Private Equity Firm</SelectItem>
                          <SelectItem value="executive">Executive</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Please provide a brief description of your inquiry..." rows={6} className="border-border focus:border-accent rounded-none resize-none" data-testid="textarea-message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground py-4 uppercase text-xs tracking-widest font-bold hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex items-center justify-center gap-3"
                    data-testid="button-submit"
                  >
                    Submit Inquiry <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-muted-foreground/50 leading-relaxed text-center font-light">
                    By submitting this form, your information will be handled in confidence.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
