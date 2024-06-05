import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const period = 2000;

    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        const ticker = setInterval(() => {
            const i = loopNum % toRotate.length;
            const fullText = toRotate[i];
            setText(prevText => isDeleting ? fullText.substring(0, prevText.length - 1) : fullText.substring(0, prevText.length + 1));

            if (isDeleting) {
                setDelta(150);
                if (text === '') {
                    setIsDeleting(false);
                    setLoopNum(loopNum + 1);
                    setDelta(500);
                }
            } else if (text === fullText) {
                setIsDeleting(true);
                setDelta(period);
            }
        }, delta);

        return () => clearInterval(ticker);
    }, [text, delta, isDeleting, loopNum, toRotate]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Yerson, `}<span className="wrap">{text}</span></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

