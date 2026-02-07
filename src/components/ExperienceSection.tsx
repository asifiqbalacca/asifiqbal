import { Building2, Calendar, CheckCircle2 } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "MR. DIY",
      role: "Trainee Accountant – Inventory Count Assignment",
      period: "Dec 2025 – Present",
      firm: "HODA VASI CHOWDHURY & CO",
      responsibilities: [
        "Conducted physical inventory counts at MR. DIY retail locations",
        "Reconciled stock with QubeERP records for accuracy verification",
        "Documented observation findings and discrepancies",
        "Obtained management representations on inventory accuracy and completeness",
      ],
    },
    {
      company: "KANSAI NEROLAC PAINTS (BANGLADESH) LTD.",
      role: "Trainee Accountant – Audit Assignment",
      period: "Previous",
      firm: "HODA VASI CHOWDHURY & CO",
      responsibilities: [
        "Executed audit testing across major financial statement areas",
        "Performed vouching, reconciliations, confirmations, and analytical reviews",
        "Covered expenses, other income, receivables, cash & cash equivalents",
        "Audited FDRs, loans & borrowings ensuring compliance with accounting standards",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest text-gold uppercase">Experience</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Professional Journey
            </h2>
            <div className="flex justify-center">
              <div className="section-divider" />
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-primary/30 to-transparent hidden md:block" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative md:grid md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? "" : "md:direction-rtl"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-background shadow-soft hidden md:block" />

                  {/* Content Card */}
                  <div className={`card-professional p-8 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8 md:col-start-2"}`}>
                    {/* Period Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
                      <Calendar size={14} />
                      {exp.period}
                    </div>

                    {/* Company & Firm */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {exp.company}
                        </h3>
                        <p className="text-sm text-muted-foreground">{exp.firm}</p>
                      </div>
                    </div>

                    {/* Role */}
                    <p className="text-foreground font-medium mb-4">{exp.role}</p>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 size={16} className="text-gold flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
