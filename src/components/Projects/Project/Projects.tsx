import ProjectsImages from "../ProjectImage/ProjectsImages.tsx";
import ProjectTitle from "../ProjectTitle/ProjectTitle";
import ProjectDescription from "../ProjectDescription/ProjectDescription.tsx";
import TechUsed from "../ProjectTechUsed/TechUsed.tsx";

export default function Projects() {
    return <div className="mb-14 mt-6 md:mb-28 md:mt-10 lg:mb-32 lg:mt-12">
        <p id="Projects" className="text-center text-3xl text-blue-800 font-bold mb-5 dark:text-sky-500">Projects</p>
        <div className="flex justify-center mt-5">
            <ProjectsImages ImgSrc={"../../../public/Kaldis.jpg"}/>
            <div className="m-3">
                <ProjectTitle Title={"Kaldi's coffee online orders and reservation system"}/>
                <ProjectDescription description={'allows users to order coffees from anywhere around addis ababa'}/>
                <TechUsed Tech="Html Css Javascript"/>
            </div>
        </div>
        <div className="flex justify-center mt-5">
            <ProjectsImages ImgSrc={"../../../public/Kaldis.jpg"}/>
            <div className="m-3">
                <ProjectTitle Title={"Kaldi's coffee online orders and reservation system"}/>
                <ProjectDescription description={'allows users to order coffees from anywhere around addis ababa'}/>
                <TechUsed Tech="Html Css Javascript"/>
            </div>
        </div>
        <div className="flex justify-center mt-5">
            <ProjectsImages ImgSrc={"../../../public/Kaldis.jpg"}/>
            <div className="m-3">
                <ProjectTitle Title={"Kaldi's coffee online orders and reservation system"}/>
                <ProjectDescription description={'allows users to order coffees from anywhere around addis ababa'}/>
                <TechUsed Tech="Html Css Javascript"/>
            </div>
        </div>
        <div className="flex justify-center mt-5">
            <ProjectsImages ImgSrc={"../../../public/Kaldis.jpg"}/>
            <div className="m-3">
                <ProjectTitle Title={"Kaldi's coffee online orders and reservation system"}/>
                <ProjectDescription description={'allows users to order coffees from anywhere around addis ababa'}/>
                <TechUsed Tech="Html Css Javascript"/>
            </div>
        </div>
    </div>
}