import { Col, Row } from "react-bootstrap"
import ProjectCard from "./project.card"
import { PROJECTS } from "helpers/data"
import { useTranslation } from "react-i18next"

const Project = () => {
    const { t } = useTranslation()

    return (
        <>
            <Row>
                <Col xs={12}>
                    <h3 className="text-center">
                        {t("projectSection.title").split(" ")[0]}{" "}
                        <span className="brand-red">{t("projectSection.title").split(" ").slice(1).join(" ")}</span>
                    </h3>
                    <h6 className="text-center mb-md-5 mb-2">
                        {t("projectSection.subtitle")}
                    </h6>
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                {PROJECTS.map(item => (
                    <Col md={4} className="project-card" key={item.id}>
                        <ProjectCard
                            imgPath={item.imgPath}
                            title={t(`projectSection.projects.${item.id}.title`)}
                            description={t(`projectSection.projects.${item.id}.description`)}
                            githubLink={item.githubLink}
                            demoLink={item.demoLink}
                        />
                    </Col>
                ))}
            </Row>
            <div className="mb-7"></div>
        </>
    )
}

export default Project
