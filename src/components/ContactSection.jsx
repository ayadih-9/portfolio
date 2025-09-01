import { Linkedin, Mail, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Stay curious, keep learning, and let every question lead you to new discoveries.
        </p>

        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <a
                href="mailto:hidayaamrhar8@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                hidayaamrhar8@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Phone</h4>
              <a
                href="tel:+33699793957"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +33699793957
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Linkedin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/hidaya-amrhar-586935294"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                www.linkedin.com/in/hidaya-amrhar-586935294
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
