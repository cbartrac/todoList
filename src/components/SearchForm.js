import { useSelector, useDispatch } from "react-redux";
import { SearchFormContainer, SearchInput, SearchButton } from "./styles";

export const SearchForm = ({setName, name}) => {
    const peopleList = useSelector((state) => state.peopleList);
    const dispatch = useDispatch();

    const searchPeople = () => {
        const newList = peopleList.filter(p => p.name.includes(name));
        dispatch({ type: "PEOPLE-COPY", payload: newList });
    }

    return (
        <SearchFormContainer>
            <SearchInput type="text" onChange={(e) => setName(e.target.value)}></SearchInput>
            <SearchButton onClick={searchPeople}>Search</SearchButton>
        </SearchFormContainer>
    )
}