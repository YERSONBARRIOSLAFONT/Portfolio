import { Container, Row, Col } from 'react-bootstrap';

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Yerson, `}<span className="wrap">Web Developer</span></h1>
                        <p>Lorem Ipsum is simply dummy tesxt of the printing and typesetting industry. Lorem Ipsum is simply dummy tesxt of the printing and typesetting industry</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
