import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send, Instagram } from "lucide-react";
import { contactFormSchema } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mpqowagp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully",
          description: "We'll be in touch within 24 hours.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-card overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Let's Talk <br />
              <span className="text-primary">Strategy.</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              We're here to help you turn your ideas into digital reality with a 
              human touch. Reach out to discuss your project, no matter the size.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-white/40 text-sm font-semibold uppercase tracking-widest mb-2">
                  Email
                </h4>
                <a
                  href="mailto:nexusdev039@gmail.com"
                  className="text-2xl text-white hover:text-primary transition-colors"
                >
                  nexusdev039@gmail.com
                </a>
              </div>
              <div>
                <h4 className="text-white/40 text-sm font-semibold uppercase tracking-widest mb-2">
                  Location
                </h4>
                <p className="text-xl text-white">
                  INDIA
                </p>
              </div>
              <div>
                <h4 className="text-white/40 text-sm font-semibold uppercase tracking-widest mb-2">
                  Follow Us
                </h4>
                <a
                  href="https://www.instagram.com/nexusdev01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" /> @nexusdev01
                </a>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8 md:p-12">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Full Name
                  </label>
                  <input
                    {...form.register("name")}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />

                  {form.formState.errors.name && (
                    <p className="text-red-400 text-xs">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Email Address
                  </label>
                  <input
                    {...form.register("email")}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />

                  {form.formState.errors.email && (
                    <p className="text-red-400 text-xs">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">
                  Company (Optional)
                </label>
                <input
                  {...form.register("company")}
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Your Company Ltd."
                />
              </div>


              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">
                  Project Details
                </label>
                <textarea
                  {...form.register("message")}
                  rows={4}
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell us about your goals..."
                />

                {form.formState.errors.message && (
                  <p className="text-red-400 text-xs">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-bold bg-primary text-white glow-primary hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    Processing <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
