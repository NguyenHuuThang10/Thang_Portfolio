import { Col, Row } from 'react-bootstrap';
import Tilt from "react-parallax-tilt"; // Thư viện tạo hiệu ứng nghiêng
import avatarImg from "assets/avatar.svg";
import './introduction.scss';
import { useTranslation } from 'react-i18next';

const Introduction = () => {
    const { t, i18n } = useTranslation();

    return (
        <section className='introduction-section my-5 my-md-7' style={{ position: "relative" }}>
            <Row>
                <Col xs={12} md={9}>
                    <h2 className='text-center text-md-start'>
                        {i18n.resolvedLanguage === "en" ? <>
                            LET ME <span className='text-pink-100'> INTRODUCE </span> MYSELF
                        </>
                            :
                            <>
                                <span className='text-pink-100'>GIỚI THIỆU</span> BẢN THÂN
                            </>
                        }
                    </h2>
                    <br />
                    <p>
                        {t("introSection.heading1")}
                        <br /><br />

                        {i18n.language === "vi" ? (
                            <>
                                {t("introSection.heading2").split("JavaScript")[0]}
                                <b className="text-pink-100">JavaScript</b>,&nbsp;
                                {t("introSection.heading2")
                                    .split("JavaScript")[1]
                                    ?.replace("Node.js", "")}
                                <b className="text-pink-100">Node.js</b>,&nbsp;
                                <b className="text-pink-100">Express</b>,&nbsp;
                                <b className="text-pink-100">React</b>,&nbsp;
                                <b className="text-pink-100">RESTful API</b>,&nbsp;
                                <b className="text-pink-100">MySQL</b>, và&nbsp;
                                <b className="text-pink-100">MongoDB</b>.
                            </>
                        ) : (
                            <>
                                Skilled in <b className="text-pink-100">JavaScript</b> with experience in&nbsp;
                                <b className="text-pink-100">Node.js</b>,&nbsp;
                                <b className="text-pink-100">Express</b>,&nbsp;
                                <b className="text-pink-100">React</b>,&nbsp;
                                <b className="text-pink-100">RESTful APIs</b>,&nbsp;
                                <b className="text-pink-100">MySQL</b>, and&nbsp;
                                <b className="text-pink-100">MongoDB</b>.
                            </>
                        )}

                        <br /><br />

                        {i18n.language === "vi" ? (
                            <>
                                Ngoài ra, mình còn triển khai và vận hành hệ thống trên&nbsp;
                                <b className="text-pink-100">AWS</b> và các nền tảng cloud hiện đại.
                            </>
                        ) : (
                            <>
                                I also deploy and manage systems on&nbsp;
                                <b className="text-pink-100">AWS</b> and modern cloud platforms.
                            </>
                        )}

                        <br /><br />
                        {t("introSection.heading4")}
                        <br /><br />
                        {t("introSection.heading5")}
                    </p>


                </Col>
                <Col md={3} className='d-md-block d-none'>
                    <Tilt>
                        <img src={avatarImg} className="img-fluid" alt="avatar" />
                    </Tilt>
                </Col>
            </Row>
            <div className="about-container d-none d-md-flex">
                <span className="about-label">{t("introSection.about")}</span>
                <span className="vertical-line"></span>
            </div>
        </section>
    )
}

export default Introduction;