import MenuBar from './components/Menu'
import ImageContainer from './components/ImageContainer'
import SkillBar from './components/SkillBar'
import WorkExperience from './components/WorkExperience'

function App() {
  return (
    <>
      <MenuBar />
      <div className="flex flex-row gap-32 mx-16 p-3 py-10">
        <ImageContainer />
        <div className="align-middle flex flex-col justify-center w-[60px]">
          <h2 className="align-middle font-bold font-sans text-4xl text-wrap">Mônica Colomera</h2>
          <p className="font-light font-sans text-gray-700 text-lg text-nowrap tracking-widest">full stack web developer</p>
        </div>
      </div>
      <div className="flex flex-col mx-16 p-3 py-10">
        <p className="font-bold py-3 text-lg">about</p>
        <div className="border border-black font-sans h-30 p-3 rounded text-wrap w-full">
          I have a degree in Computer Science and have been working in web development since 2017. I have a lot of experience in web development, having worked for years with PHP and Javascript and, more recently, I've started using React and NodeJS.<br />
          I also have experience with containerization, creating and using Docker containers, and doing unit testing with tools like PHPUnit and Jest. I follow development standards and techniques like Clean, Solid, TDD, and BDD.<br />
          <br />
          Lately, I've been focusing my studies on software architecture, improving my programming logic, and my ability to create efficient and well-structured systems.<br />
          <br />
          My goal is to simplify and automate processes with the help of technology
        </div>
      </div >
      <div className="flex flex-col mx-16 p-3 py-5">
        <p className="font-bold py-3 text-lg">experience</p>
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
      <div className="flex flex-col mx-16 p-3 py-10">
        <p className="font-bold py-3 text-lg">work experience</p>
        <div className="flex flex-col">
          <WorkExperience companyName="BizCommerce" yearsWorked="2017-2018" place="Marília, SP - Brazil" />
        </div>
      </div>
    </>
  )
}

export default App
