import { useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import Job from "./Job";

const Favourites = () => {
    const favourites = useSelector((state) => state.favourite.list);
    const loading = false;
    // let loadind
    //     useEffect(() => {
    //         setTimeout(() => {
    //             loading: false;
    //         }, 200);
    //     }, []);

    return (
        <Container>
            <Row>
                <Col xs={10} className="mx-auto my-3">
                    <h1>Favourite Jobs</h1>
                </Col>

                {loading ? (
                    <Col xs={10} className="mx-auto mt-5 text-center">
                        {" "}
                        <Spinner animation="grow" variant="primary" />
                    </Col>
                ) : (
                    <Col xs={10} className="mx-auto mb-5">
                        {favourites.map((company) => (
                            <Job key={company._id} data={company} />
                        ))}
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default Favourites;
