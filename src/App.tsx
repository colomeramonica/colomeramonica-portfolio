import MenuBar from './components/Menu'
import ImageContainer from './components/ImageContainer'
import SkillBar from './components/SkillBar'
import WorkExperience from './components/WorkExperience'
import SkillDot from './components/SkillDot'
import GradualSpacing from './components/ui/gradual-spacing'
import { FadeText } from './components/ui/fade-text'
import DotPattern from './components/ui/dot-pattern'
import { cn } from './lib/utils'

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-100 min-h-screen relative to-gray-300 via-gray-200">
      <DotPattern width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "absolute inset-0 w-full h-full [mask-image:linear-gradient(to_bottom_right,rgba(255,255,255,0.8),transparent)]",
        )} />
      <MenuBar />
      <div className="flex flex-row gap-32 mx-16 p-3 py-10">
        <ImageContainer />
        <div className="align-middle flex flex-col justify-center w-full">
          <FadeText text="Mônica Colomera" className="align-middle font-bold font-sans text-4xl text-wrap" direction="up" />
          <GradualSpacing text="full stack web developer" className="font-light font-sans text-gray-700 text-lg text-nowrap tracking-widest" />
        </div>
      </div>
      <div className="flex flex-col mx-16 p-3 py-10" id="about">
        <p className="font-bold py-3 text-lg">about</p>
        <div className="font-sans h-30 p-3 relative rounded text-wrap w-full">
          I hold a degree in Computer Science and have been a web developer since 2017. My expertise includes PHP, JavaScript, React, and NodeJS. I am proficient in containerization with Docker and unit testing using PHPUnit and Jest. I adhere to development standards such as Clean, SOLID, TDD, and BDD.<br />
          <br />
          Recently, I have focused on software architecture, enhancing my programming logic, and building efficient, well-structured systems.<br />
          <br />
          My goal is to simplify and automate processes through technology.
        </div>
      </div >
      <div className="flex flex-col mx-16 p-3 py-5" id="experience">
        <p className="font-bold py-3 text-lg">development stack</p>
        <SkillBar skill="PHP" level={90} />
        <SkillBar skill="HTML & CSS" level={80} />
        <SkillBar skill="JavaScript" level={80} />
        <SkillBar skill="Laravel" level={80} />
        <SkillBar skill="MySQL" level={80} />
        <SkillBar skill="VueJS" level={70} />
        <SkillBar skill="PostgreSQL" level={60} />
        <SkillBar skill="NodeJS" level={60} />
        <SkillBar skill="TailwindCSS & Sass" level={60} />
        <SkillBar skill="Docker" level={50} />
        <SkillBar skill="React & React Native" level={40} />
        <SkillBar skill="TypeScript" level={40} />
      </div>
      <div className="flex flex-col mx-16 p-3 py-10" id="experience">
        <p className="font-bold py-3 text-lg">work experience</p>
        <div className="flex flex-col">
          <WorkExperience companyName="BizCommerce" yearsWorked="sep 2017 - oct 2018" place="Marília, SP - Brazil"
            responsabilities={"Developed new modules for Magento online stores. Created a shipping module for new shipping methods integration"} />
          <div className="py-2">
            <p className="font-bold italic">Additional technologies required</p>
            <SkillDot skill="Magento" />
          </div>
          <WorkExperience companyName="Telecontrol" yearsWorked="nov 2018 - feb 2020" place="Marília, SP - Brazil"
            responsabilities={"Maintained the warranty request platform. Developed a new platform for budget exchanges between resellers and suppliers. Implemented a JavaScript tool to split large files for faster AWS uploads"} />
          <div className="py-2">
            <p className="font-bold italic">Additional technologies required</p>
            <div className="flex flex-row gap-1 justify-start">
              <SkillDot skill="AWS" />
              <SkillDot skill="Bootstrap" />
              <SkillDot skill="Zend Framework" />
            </div>
            <WorkExperience companyName="Tray eCommerce Platform" yearsWorked="mar 2020 - oct 2023" place="Marília, SP - Brazil"
              responsabilities={"Full-stack developer focused on purchase finalization for online stores. Refactored the customer center for order history and personal information. Developed REST APIs for backend service communication"} />
            <p className="font-bold italic">Additional technologies required</p>
            <div className="flex flex-row gap-1 justify-start">
              <SkillDot skill="VueJS" />
              <SkillDot skill="PHPUnit" />
              <SkillDot skill="NewRelic" />
            </div>
          </div>
          <WorkExperience companyName="Jacto Agriculture Machinery" yearsWorked="mar 2024 - present" place="Pompéia, SP - Brazil"
            responsabilities={"Designed and developed a new warranty request form integrated with Salesforce for case creation"} />
          <p className="font-bold italic">Additional technologies required</p>
          <div className="flex flex-row gap-1 justify-start">
            <SkillDot skill="Salesforce" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
