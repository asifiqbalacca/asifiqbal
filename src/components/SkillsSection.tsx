import { FileSpreadsheet, Cloud, BookCheck, Monitor, Award } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      icon: FileSpreadsheet,
      name: "Microsoft Excel",
      level: "Intermediate",
      percentage: 70,
    },
    {
      icon: Cloud,
      name: "XERO Accounting",
      level: "Advisor Certified",
      percentage: 85,
    },
    {
      icon: BookCheck,
      name: "IFRS & IAS",
      level: "Proficient",
      percentage: 75,
    },
    {
      icon: Monitor,
      name: "Computer Literacy",
      level: "Advanced",
      percentage: 80,
    },
  ];

  const certifications = [
    {
      title: "Xero Advisor Certified",
      issuer: "Xero",
    },
    {
      title: "Excel 2021 Essential Training",
      issuer: "LinkedIn Learning",
    },
    {
      title: "Mastering MS Excel with Data Analytics",
      issuer: "HeadStart",
    },
    {
      title: "BD Tax & Communication for ACCA Future Leaders",
      issuer: "HeadStart",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest text-gold uppercase">Expertise</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Skills & Certifications
            </h2>
            <div className="flex justify-center">
              <div className="section-divider" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills */}
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                          <skill.icon className="w-5 h-5 text-primary group-hover:text-gold transition-colors" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{skill.name}</p>
                          <p className="text-xs text-muted-foreground">{skill.level}</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-gold">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-navy-light rounded-full transition-all duration-500 group-hover:from-gold group-hover:to-gold-dark"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
                Achievements & Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="card-professional p-5 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
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

export default SkillsSection;
