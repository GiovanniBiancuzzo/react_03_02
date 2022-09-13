import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiBuilding2Fill, RiBuilding2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
    addToFavouriteAction,
    removeFromFavouriteAction,
    addRemoveFavouriteAction,
} from "../redux/actions";

const Job = ({ data }) => {
    const actualStateFavourites = useSelector((state) => state.favourite.list);

    const dispatch = useDispatch();
    const favouriteJob = actualStateFavourites.some(
        (company) => company._id === data._id
    );

    return (
        <Row
            className="mx-0 mt-3 p-3"
            style={{ border: "1px solid #00000033", borderRadius: 4 }}
        >
            <Col xs={1}>
                {favouriteJob ? (
                    <RiBuilding2Fill
                        onClick={() =>
                            dispatch(removeFromFavouriteAction(data))
                        }
                    />
                ) : (
                    <RiBuilding2Line
                        onClick={() => {
                            dispatch(addToFavouriteAction(data));
                        }}
                    />
                )}
            </Col>
            {/* <Col xs={1}>
                <Image src={data.url} />
            </Col> */}
            <Col xs={3}>
                <Link to={`/${data.company_name}`}>{data.company_name}</Link>
            </Col>
            <Col xs={7}>
                <a href={data.url} target="_blank" rel="noreferrer">
                    {data.title}
                </a>
            </Col>
        </Row>
    );
};

export default Job;
