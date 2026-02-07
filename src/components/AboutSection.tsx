import { Target, TrendingUp, Award } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on completing ACCA qualification and building expertise in financial reporting",
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "Continuously learning and adapting to industry standards and best practices",
    },
    {
      icon: Award,
      title: "Certified Professional",
      description: "Xero Advisor Certified with strong foundation in accounting software",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest text-gold uppercase">About Me</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Career Objectives
            </h2>
            <div className="flex justify-center">
              <div className="section-divider" />
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Looking for an opportunity to apply in a professional work environment where I can 
                develop my <span className="text-foreground font-medium">ACCA qualification</span> and 
                gain plenty of practical experience in accounting, financial reporting, tax computation, 
                and audit procedures.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am enthusiastic about the opportunity to further discuss how my background, skills, 
                and enthusiasm for <span className="text-foreground font-medium">operational excellence</span> can 
                contribute to the continued success of the company and my own professional development.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-6">
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-gold">11/17</div>
                  <div className="text-sm text-muted-foreground mt-1">ACCA Papers</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-gold">5.00</div>
                  <div className="text-sm text-muted-foreground mt-1">SSC GPA</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-gold">7/7</div>
                  <div className="text-sm text-muted-foreground mt-1">Diploma Papers</div>
                </div>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="card-professional p-6 flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
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

export default AboutSection;
