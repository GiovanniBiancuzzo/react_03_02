import { useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import Job from "./Job";

const Favourites = () => {
    const favourites = useSelector((state) => state.favourite.list);

    return (
        <Container>
            <Row>
                <Col xs={10} className="mx-auto my-3">
                    <h1>Favourite Jobs</h1>
                </Col>

                <Col xs={10} className="mx-auto mb-5">
                    {favourites.map((company) => (
                        <Job key={company._id} data={company} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default Favourites;
