import { Col, Row } from "react-bootstrap";
import AnimationLottie from "components/share/animation-lottie";
import codingJSON from 'assets/lottie/coding.json';
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";

import GlowCard from "components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "components/sections/divider";
import { APP_DATA } from "helpers/data";
import SocialMedia from "components/sections/social.media";

import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return (
        <>
            <Row>
                <Col md={6} xs={12}>
                    <h3 className="text-center mb-md-5 mb-2">
                        {t("aboutSection.title").split(" ")[0]}{" "}
                        <span className="brand-red">{t("aboutSection.title").split(" ").slice(1).join(" ")}</span>
                    </h3>
                    <div>
                        <p>{t("aboutSection.hello")}</p>
                        <p>{t("aboutSection.job")}</p>
                        <p>{t("aboutSection.degree")}</p>
                    </div>

                    <div>
                        <p>{t("aboutSection.hobbyTitle")}</p>
                        <ul>
                            <li>{t("aboutSection.hobby1")}</li>
                            <li>{t("aboutSection.hobby2")}</li>
                            <li>{t("aboutSection.hobby3")}</li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-center brand-red">{t("aboutSection.quote")}</p>
                    </div>
                </Col>

                <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                    <AnimationLottie width="80%" animationPath={codingJSON} />
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12}
                    className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
                >
                    <AnimationLottie
                        width="50%"
                        animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
                    />
                </Col>
                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <div className="d-flex flex-column align-items-center gap-3">
                        <h4 className="text-center brand-red">{t("aboutSection.education.title")}</h4>
                        <GlowCard identifier="experience-5">
                            <div className="p-3 relative">
                                <div className="experience-container">
                                    <div className="duration-text">
                                        <p>{t("aboutSection.education.year")}</p>
                                    </div>
                                    <div className="details">
                                        <div className="icon">
                                            <FaGraduationCap size={36} />
                                        </div>
                                        <div className="info">
                                            <p className="title">{t("aboutSection.education.major")}</p>
                                            <p className="company">{t("aboutSection.education.school")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </GlowCard>
                    </div>
                </Col>
            </Row>

            <Divider />
            <Row>
                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <h3 className="mb-md-5 mb-2">{t("aboutSection.contactTitle")}</h3>
                    <SocialMedia
                        gmail={APP_DATA.GMAIL}
                        facebook={APP_DATA.FACEBOOK_URL}
                        phone={APP_DATA.PHONE}
                        github={APP_DATA.GITHUB_URL}
                    />
                </Col>
                <Col md={6} xs={12} className="d-flex flex-column align-items-center justify-content-center">
                    <AnimationLottie width="50%" animationPath={JSON.parse(CONTACT_LOTTIE)} />
                    <h4 className="text-center">{t("aboutSection.contactMe")}</h4>
                </Col>
            </Row>

            <div className="mb-5"></div>
        </>
    );
};

export default About;
