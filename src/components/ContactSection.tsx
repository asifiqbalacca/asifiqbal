import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "acca.asifiqbal@gmail.com",
      href: "mailto:acca.asifiqbal@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+88 01325-409636",
      href: "tel:+8801325409636",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/asifiqbal-acca",
      href: "https://www.linkedin.com/in/asifiqbal-acca",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhanmondi, Dhaka-1209, Bangladesh",
      href: null,
    },
  ];

  const reference = {
    name: "Yusha Al Khondkar FCCA",
    title: "Lead Specialist, Internal Audit & Investigation",
    company: "Grameenphone Ltd",
    email: "yushakhondkar@gmail.com",
    phone: "+880171-1091323",
  };

  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest text-gold uppercase">Contact</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Let's Connect
            </h2>
            <div className="flex justify-center">
              <div className="section-divider" />
            </div>
            <p className="text-primary-foreground/80 mt-6 max-w-lg mx-auto">
              I'm always open to discussing new opportunities, audit assignments, 
              or simply connecting with fellow finance professionals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-gold" />
                      </div>
                      <span className="text-sm text-primary-foreground/60">{item.label}</span>
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-primary-foreground hover:text-gold transition-colors font-medium text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-primary-foreground font-medium text-sm">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="mailto:acca.asifiqbal@gmail.com"
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gold text-primary font-semibold rounded-lg hover:bg-gold-dark transition-colors"
              >
                <Send size={18} />
                Send Me an Email
              </a>
            </div>

            {/* Reference */}
            <div>
              <h3 className="font-display text-2xl font-semibold mb-6">Professional Reference</h3>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center text-gold font-display text-2xl font-bold">
                    YK
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-semibold text-primary-foreground">
                      {reference.name}
                    </h4>
                    <p className="text-primary-foreground/70 text-sm">{reference.title}</p>
                    <p className="text-gold text-sm font-medium">{reference.company}</p>
                  </div>
                </div>
                <div className="space-y-3 pl-20">
                  <a
                    href={`mailto:${reference.email}`}
                    className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    <Mail size={14} />
                    {reference.email}
                  </a>
                  <a
                    href={`tel:${reference.phone}`}
                    className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    <Phone size={14} />
                    {reference.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
