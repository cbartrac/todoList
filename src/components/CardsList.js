import { useSelector } from "react-redux";
import { Card } from "./Card";
import { CardsListContainer } from "./styles";

export const CardsList = ({ name }) => {
  const filteredList = useSelector((state) => state.filteredList);

  return (
    <CardsListContainer>
      { filteredList?.map(p => <Card key={p.id} data={p} name={name} />) }
    </CardsListContainer>
  )
}