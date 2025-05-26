import Link from "next/link"
import { Mail, Phone, Linkedin, Download, ArrowRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
const download = () => {
  window.location.href = "./Muthu_Lingam_Resume.pdf";
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Muthu<span className="text-emerald-600">LR</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#about" className="hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-emerald-600 transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="hover:text-emerald-600 transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-emerald-600 transition-colors">
              Projects
            </Link>
            <Link href="#achievements" className="hover:text-emerald-600 transition-colors">
              Achievements
            </Link>
            <Link href="#education" className="hover:text-emerald-600 transition-colors">
              Education
            </Link>
            <Link href="#contact" className="hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </div>
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Muthu Lingam Raja</h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">Angular | Full Stack Developer</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Crafting scalable, efficient, and elegant web & mobile applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="./Muthu_Lingam_Full_stack.pdf" download>
              <Button className="bg-emerald-600 hover:bg-emerald-700" >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
              </a>
              <Button variant="outline" asChild>
                <Link href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="mailto:muthulingam58@gmail.com"
                className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" /> muthulingam58@gmail.com
              </Link>
              <Link
                href="tel:+919943393619"
                className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" /> +91 9943393619
              </Link>
              <Link
                href="https://www.linkedin.com/in/muthu-lingam-raja-202a5568/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 opacity-75 blur"></div>
              <div className="relative bg-white rounded-full p-1">
                <img
                  src="/mohan_anna.jpg?height=400&width=400"
                  alt="Muthu Lingam Raja"
                  className="rounded-full w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            About <span className="text-emerald-600">Me</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a Full Stack Developer with 10+ years of experience in building web and mobile applications. Skilled
              in Angular, Spring Boot, and a variety of modern technologies, I focus on building responsive,
              user-centric applications for both informational and transactional use cases.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-700">Madurai, India</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Availability</h3>
                <p className="text-gray-700">Open to full-time and contract opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technical <span className="text-emerald-600">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              title="Frontend"
              skills={[
                "Angular (8, 10, 14)",
                "AngularJS",
                "HTML5",
                "CSS",
                "JavaScript",
                "jQuery",
                "Bootstrap",
                "Kendo UI",
              ]}
            />
            <SkillCard title="Backend" skills={["Spring Boot", "REST APIs", ".NET MVC"]} />
            <SkillCard title="Mobile" skills={["IONIC", "WebView", "Kendo Mobile UI"]} />
            <SkillCard
              title="Tools"
              skills={[
                "Visual Studio",
                "Eclipse IDE",
                "Android Studio",
                "Xcode",
                "MySQL Workbench",
                "POSTMAN",
                "GitHub",
                "Jira",
                "Confluence",
              ]}
            />
            <SkillCard title="Languages" skills={["TypeScript", "JavaScript", "SQL"]} />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Work <span className="text-emerald-600">Experience</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <ExperienceCard
                company="DXC Technology India Pvt Ltd"
                role="Sr. Analyst III – Software Engineering"
                period="20th January 2022 – Present"
                description={[
                  "Worked on micro-UI Angular applications",
                  "Built custom Angular Storybook libraries",
                  "Developed Spring Boot microservices RESTFULL api's for both web and mobile app",
                  "Led Agile development with Jira, Confluence for team handling",
                  "Worded on IONIC framework to develop Android app using Angular"
                ]}
              />
               <ExperienceCard
                company="Fidelis Corporate Solutions Pvt Ltd (Client: DXC Technology India Pvt Ltd.,)"
                role="Sr. Frontend Developer"
                period="May 2021 – 19 January 2022"
                description={[
                  "Worked on micro-UI Angular applications",
                  "Upgraded Angular Storybook libraries to latest version",
                  "Upgrated Angular Version of all Micro-ui to latest version",
                  "Developed Custom input components for the application",
                ]}
              />
              <ExperienceCard
                company="Impact Standard Business Reporting Pvt Ltd (GovReports)"
                role="Senior UI Developer"
                period="Aug 2014 – Apr 2021"
                description={[
                  "AngularJS, Angular 8 UI development",
                  "Developed tax filing, accounting, and business management platforms",
                  "Created hybrid mobile apps using IONIC and Kendo UI",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured <span className="text-emerald-600">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Karnataka Procuring Portal"
              tech="Angular 14, Spring Boot"
              description="Government portal for tendering and contracts. Developed front-end and back-end, led Agile processes."
            />
            <ProjectCard
              title="Individual Tax Return"
              tech="Angular 8"
              description="Interface for tax agents to file taxes for clients. Built UI, routing, and session management."
            />
            <ProjectCard
              title="Office & Ledger Platforms"
              tech="AngularJS, Spring Boot"
              description="Applications for managing GST returns, invoicing, accounting. Built dashboards, forms, and reports."
            />
            <ProjectCard
              title="Mobile Applications"
              tech="IONIC, Kendo UI, AngularJS, WebView"
              description="Developed multiple mobile apps including TFND App, GST AVATAR App, and Karnataka Procuring App for various government and business services."
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-emerald-600">Achievements</span> & Awards
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AchievementCard title="FY23 Q1 Champs Award" />
              <AchievementCard title="FY23 Q2 Champs Award" />
              <AchievementCard title="FY23 H2 Collaborators Award" />
              <AchievementCard title="FY24 Q2 Champs Award" />
              <AchievementCard title="FY25 H1 Champs Award" />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-emerald-600">Education</span> & Qualifications
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <EducationCard
              degree="B.Tech in Information Technology"
              institution="Mepco Schlenk Engineering College, Anna University"
              period="2011–2014"
            />
            <EducationCard
              degree="Diploma in Information Technology"
              institution="KLN Polytechnic College"
              period="2009–2011"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Get In <span className="text-emerald-600">Touch</span>
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="mr-3 h-5 w-5 text-emerald-600 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:muthulingam58@gmail.com"
                      className="text-gray-600 hover:text-emerald-600 transition-colors"
                    >
                      muthulingam58@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-3 h-5 w-5 text-emerald-600 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+919943393619" className="text-gray-600 hover:text-emerald-600 transition-colors">
                      +91 9943393619
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Linkedin className="mr-3 h-5 w-5 text-emerald-600 mt-1" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/muthu-lingam-raja-202a5568/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-emerald-600 transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <Input type="text" placeholder="Your Name" className="w-full" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" className="w-full" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="w-full min-h-[150px]" />
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Muthu Lingam Raja. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

// Component for skill cards
function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <Card className="p-6 h-full">
      <h3 className="text-xl font-semibold mb-4 text-emerald-600">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </Card>
  )
}

// Component for experience cards
function ExperienceCard({
  company,
  role,
  period,
  description,
}: {
  company: string
  role: string
  period: string
  description: string[]
}) {
  return (
    <div className="relative pl-8 border-l-2 border-emerald-200">
      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-emerald-600"></div>
      <h3 className="text-xl font-bold">{company}</h3>
      <p className="text-lg font-medium text-emerald-600 mb-2">{role}</p>
      <p className="text-gray-600 mb-4">{period}</p>
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mr-2 mt-2"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Component for project cards
function ProjectCard({
  title,
  tech,
  description,
}: {
  title: string
  tech: string
  description: string
}) {
  return (
    <Card className="p-6 h-full flex flex-col">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-emerald-600 font-medium mb-4">{tech}</p>
      <p className="text-gray-700 flex-grow">{description}</p>
    </Card>
  )
}

// Component for achievement cards
function AchievementCard({ title }: { title: string }) {
  return (
    <Card className="p-6 text-center border-emerald-200 hover:border-emerald-600 transition-colors">
      <div className="mb-4 text-emerald-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      </div>
      <h3 className="font-semibold">{title}</h3>
    </Card>
  )
}

// Component for education cards
function EducationCard({
  degree,
  institution,
  period,
}: {
  degree: string
  institution: string
  period: string
}) {
  return (
    <Card className="p-6 border-emerald-200">
      <h3 className="text-xl font-bold mb-2">{degree}</h3>
      <p className="text-gray-700 mb-2">{institution}</p>
      <p className="text-emerald-600">{period}</p>
    </Card>
  )
}
