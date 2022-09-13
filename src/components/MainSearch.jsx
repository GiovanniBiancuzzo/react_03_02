import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addQueryAction, addToCatalogueAction } from "../redux/actions";
import Job from "./Job";

const MainSearch = () => {
    const dispatch = useDispatch();
    // const [query, setQuery] = useState("");
    const query = useSelector((state) => state.search.query);

    // const [jobs, setJobs] = useState([]);
    const jobs = useSelector((state) => state.job.catalogue);

    const handleChange = (e) => {
        dispatch(addQueryAction(e.target.value));
        // setQuery(e.target.value);
    };
    // useEffect(() => {
    //     console.log("ricerca istantanea");
    // });

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(addToCatalogueAction(query));
    };

    return (
        <Container>
            <Row>
                <Col xs={10} className="mx-auto my-3">
                    <h1>Remote Jobs Search</h1>
                </Col>
                <Col xs={10} className="mx-auto">
                    <Form onSubmit={handleSubmit}>
                        <Form.Control
                            type="search"
                            value={query}
                            onChange={handleChange}
                            placeholder="type and press Enter"
                        />
                    </Form>
                </Col>
                <Col xs={10} className="mx-auto mb-5">
                    {jobs.map((jobData) => (
                        <Job key={jobData._id} data={jobData} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default MainSearch;
