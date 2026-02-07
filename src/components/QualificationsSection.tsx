import { BookOpen, GraduationCap, Check, Clock } from "lucide-react";

const QualificationsSection = () => {
  const accaPapers = {
    appliedSkills: [
      { name: "Financial Reporting", status: "completed" },
      { name: "Financial Management", status: "completed" },
      { name: "Taxation (UK)", status: "completed" },
      { name: "Corporate & Business Law", status: "completed" },
      { name: "Audit & Assurance", status: "running" },
      { name: "Performance Management", status: "running" },
    ],
    diploma: [
      "Financial Accounting",
      "Management Accounting",
      "Business & Technology",
      "Maintaining Financial Records",
      "Maintaining Cost & Finance",
      "Recording Financial Transactions",
      "Management Information",
    ],
  };

  const academicQualifications = [
    {
      exam: "Higher Secondary Certificate (HSC)",
      institution: "Cumilla Victoria Govt. College, Cumilla",
      year: "2016",
      gpa: "4.25",
    },
    {
      exam: "Secondary School Certificate (SSC)",
      institution: "Cumilla Modern High School, Cumilla",
      year: "2014",
      gpa: "5.00",
    },
  ];

  return (
    <section id="qualifications" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest text-gold uppercase">Qualifications</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Education & Certifications
            </h2>
            <div className="flex justify-center">
              <div className="section-divider" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* ACCA Qualifications */}
            <div className="space-y-6">
              {/* Applied Skills */}
              <div className="card-professional p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      ACCA - Applied Skills Level
                    </h3>
                    <p className="text-sm text-muted-foreground">4/6 Papers Completed</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[66%] bg-gradient-to-r from-gold to-gold-dark rounded-full" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-right">66% Complete</p>
                </div>

                <ul className="space-y-3">
                  {accaPapers.appliedSkills.map((paper, index) => (
                    <li key={index} className="flex items-center gap-3">
                      {paper.status === "completed" ? (
                        <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center">
                          <Check size={14} className="text-gold" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 bg-accent/30 rounded-full flex items-center justify-center">
                          <Clock size={14} className="text-accent" />
                        </div>
                      )}
                      <span className={`text-sm ${paper.status === "running" ? "text-accent font-medium" : "text-muted-foreground"}`}>
                        {paper.name}
                        {paper.status === "running" && (
                          <span className="ml-2 text-xs bg-gold/10 px-2 py-0.5 rounded-full">In Progress</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Diploma */}
              <div className="card-professional p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                    <Check className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      ACCA - Diploma in Accounting & Business
                    </h3>
                    <p className="text-sm text-gold font-medium">7/7 Papers Completed ✓</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {accaPapers.diploma.map((paper, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {paper}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Academic Qualifications */}
            <div className="card-professional p-8 h-fit">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Academic Qualifications
                </h3>
              </div>

              <div className="space-y-6">
                {academicQualifications.map((qual, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-gold/30 hover:border-gold transition-colors"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gold rounded-full" />
                    <h4 className="font-medium text-foreground mb-1">{qual.exam}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{qual.institution}</p>
                    <div className="flex gap-4 text-sm">
                      <span className="text-muted-foreground">Year: <span className="text-foreground">{qual.year}</span></span>
                      <span className="text-muted-foreground">GPA: <span className="text-gold font-semibold">{qual.gpa}</span></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;
