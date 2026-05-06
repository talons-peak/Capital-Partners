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
import { ArrowRight, MapPin, Phone, Mail, Lock } from "lucide-react";

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
      title: "Thank you — we've received your note.",
      description: "A member of the L&E Partners team will be in touch within one business day.",
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
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 py-16 md:py-24">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-primary" />
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Contact</p>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif font-semibold leading-[0.9] tracking-tight text-foreground mb-8 max-w-4xl">
            Let's talk.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl">
            Whether you're a private equity firm exploring a search, an executive weighing your next chapter, or a connection somewhere in our industry — we'd welcome the conversation. Every inquiry is held in strict confidence, and a member of our team will respond within one business day.
          </motion.p>
        </Reveal>
      </section>

      {/* ── TEAM CONTACTS ── */}
      <section className="py-14 md:py-20 bg-white" data-testid="team-contacts-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div variants={fadeInUp} className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-primary" />
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Our Team</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Reach a principal directly.</h2>
            <p className="text-muted-foreground font-light mt-3 max-w-2xl">
              You're welcome to write to any of us — we read everything personally.
            </p>
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
      <section className="py-16 md:py-24 bg-muted" data-testid="contact-form-section">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            <Reveal className="lg:col-span-4">
              <motion.div variants={fadeInUp} className="space-y-10">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-[2px] bg-primary" />
                    <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Office</p>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground font-light">
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
                  <div className="flex items-center gap-3 mb-5">
                    <Lock className="w-4 h-4 text-primary flex-shrink-0" />
                    <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Confidential by Default</p>
                  </div>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Many of the executives and sponsors we hear from are still in active engagements or seats. Anything you share with us — including the fact that you got in touch — stays between us.
                  </p>
                </div>
              </motion.div>
            </Reveal>

            <div className="lg:col-span-7 lg:col-start-6 bg-white border border-border p-8 md:p-10" data-testid="contact-form">
              <h2 className="text-2xl font-serif text-foreground mb-2">Send a note</h2>
              <p className="text-sm text-muted-foreground font-light mb-7">
                A few sentences are plenty — we'll write back to set up a call.
              </p>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                      <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">I'm reaching out as</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-border focus:border-accent rounded-none h-12" data-testid="select-type">
                            <SelectValue placeholder="Select one" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="border-border">
                          <SelectItem value="pe">A private equity firm</SelectItem>
                          <SelectItem value="executive">An executive</SelectItem>
                          <SelectItem value="general">Something else</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="A few sentences about what's on your mind…" rows={6} className="border-border focus:border-accent rounded-none resize-none" data-testid="textarea-message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground py-4 uppercase text-xs tracking-widest font-bold hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex items-center justify-center gap-3"
                    data-testid="button-submit"
                  >
                    Send Note <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-muted-foreground/50 leading-relaxed text-center font-light">
                    We respect your privacy. Your information will not be shared.
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
