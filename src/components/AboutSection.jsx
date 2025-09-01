import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Introduction & Contact */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              3rd-Year Engineering Student & Aspiring AI/Autonomous Systems Specialist
            </h3>

            <p className="text-muted-foreground">
              I am currently seeking my final-year internship (PFE). This past summer, I completed a technical internship where I contributed to: <strong>Data Augmentation with SMOTE for Detection and Classification of Mental Disorders from EEG/ERG Signals</strong>. The project focused on enhancing machine learning models for mental health classification using limited and imbalanced datasets.
            </p>

            <p className="text-muted-foreground">
              I am enrolled in a 3-year engineering program in Digital Systems Engineering, specializing in Autonomous Systems  at ENSEM Nancy. I have built a strong foundation in Python and data processing, with a keen interest in responsible AI and innovative autonomous technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column: Skills / Experience Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Technical Internship</h4>
                  <p className="text-muted-foreground">
                    Contributed to data augmentation and machine learning modeling for EEG/ERG signal analysis using SMOTE and its variants.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Engineering Studies</h4>
                  <p className="text-muted-foreground">
                  3-year Digital Systems Engineering program at ENSEM Nancy, specializing in Autonomous Systems. Solid foundation in Python, data processing, and responsible AI.

                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">First-Year Internship at HCP</h4>
                  <p className="text-muted-foreground">
                    Worked on visualizing statistical indices at the Haut-Commissariat au Plan (HCP) in Rabat, Morocco. Gained hands-on experience with <strong>Apache Superset</strong> to create interactive dashboards, connect and query databases, and present statistical data in a clear and insightful manner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
