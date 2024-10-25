import { useEffect, useState } from "react";
import { ApprovalCard } from "../../components/ApprovalCard"
import * as S from "./styles"


export const Main = () => {

    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('https://apikhiata.onrender.com/api/users/selecionar/awaiting-premium');
        const response = await fetch('http://localhost:16334/api/users/selecionar/awaiting-premium');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(data)


    return (
        <S.Wrapper>
            <S.Container>  
                <S.Title>Usuários Esperando Aprovação:</S.Title>
                <ApprovalCard name="Heitor Campos" email="heitor@email.com" />
            </S.Container>
        </S.Wrapper>
    )
}