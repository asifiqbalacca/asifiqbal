import { Building2, Calendar, CheckCircle2 } from "lucide-react";

const ExperienceSection = () => {
  const assignments = [
    {
      client: "CIMSOLUTIONS BANGLADESH LTD.",
      type: "Statutory Audit — Audit In-Charge",
      period: "23 Feb 2026 – Present",
      responsibilities: [
        "Led and managed the statutory audit for FY 2025, overseeing planning, risk assessment, and execution in compliance with IFRS and ISA",
        "Supervised team members, reviewed working papers, and ensured timely completion of fieldwork",
        "Performed substantive testing and analytical review across revenue, receivables, advances & prepayments, PPE, loyalty credit, expenses, and taxation",
        "Coordinated with senior management to resolve audit findings and supported finalization of audited financial statements and audit report",
      ],
    },
    {
      client: "KANSAI NEROLAC PAINTS (BANGLADESH) LTD.",
      type: "Audit Assignment",
      period: "7 Jan 2026 – 27 Jan 2026",
      responsibilities: [
        "Executed audit testing across major financial statement areas",
        "Performed vouching, reconciliations, confirmations, and analytical reviews",
        "Covered expenses, other income, receivables, cash & cash equivalents",
        "Audited FDRs, loans & borrowings ensuring compliance with accounting standards",
      ],
    },
    {
      client: "MR. DIY",
      type: "Inventory Count Assignment",
      period: "1 Jan 2026",
      responsibilities: [
        "Conducted physical inventory counts at MR. DIY retail locations",
        "Reconciled stock with QubeERP records for accuracy verification",
        "Documented observation findings and discrepancies",
        "Obtained management representations on inventory accuracy and completeness",
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
            {/* Firm Card */}
            <div className="card-professional p-8 mb-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    HODA VASI CHOWDHURY & CO
                  </h3>
                  <p className="text-muted-foreground">Chartered Accountants</p>
                  <p className="text-gold font-medium text-sm mt-2">Auditor</p>
                </div>
              </div>
            </div>

            {/* Assignments */}
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 ml-2">
              Client Assignments
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {assignments.map((assignment, index) => (
                <div key={index} className="card-professional p-6">
                  {/* Client Name */}
                  <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                    {assignment.client}
                  </h4>
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={14} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{assignment.period}</span>
                  </div>
                  <p className="text-sm text-gold font-medium mb-4">{assignment.type}</p>

                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {assignment.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={14} className="text-gold flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
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
