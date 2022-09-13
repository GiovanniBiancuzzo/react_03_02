import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Job from "./Job";

const Favourites = () => {
    const favourites = useSelector((state) => state.favourite.list);

    return (
        <Container>
            <Row>
                <Col>
                    {favourites.map((company) => (
                        <Job key={company._id} data={company} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default Favourites;
