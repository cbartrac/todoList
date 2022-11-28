import { useSelector, useDispatch } from "react-redux";
import { CardContainer, FontExtraData, FontMainData, InfoContainer, DeleteButton } from "./styles";

export const Card = ({data, name}) => {
    const peopleList = useSelector((state) => state.peopleList);
    const dispatch = useDispatch();

    const deleteRow = (rowID) => {
        const newList = peopleList.filter(p => p.id !== rowID);
        dispatch({ type: "PEOPLE-UPDATE", payload: newList });
        dispatch({ type: "PEOPLE-COPY", payload: newList.filter(p => p.name.includes(name)) });
    }

    return (
        <CardContainer>
            <InfoContainer>
                <FontMainData>Name: {data?.name}</FontMainData>
                <FontExtraData>Height: {data?.height}</FontExtraData>
                <FontExtraData>Gender: {data?.gender}</FontExtraData>
            </InfoContainer>
            <DeleteButton onClick={() => deleteRow(data.id)}>Eliminar</DeleteButton>
        </CardContainer>
    )
}