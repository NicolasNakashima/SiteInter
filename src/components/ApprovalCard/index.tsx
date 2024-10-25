import * as S from "./styles"

interface IApprovalCard {
    name: string
    email: string
}

const ApprovalCard = ({name, email}: IApprovalCard) => {

    return (
        <S.Wrapper>
            <S.ColoredRec/>
            <S.ContainerInfo>
                <S.UserInfo>
                    <S.UserName>{name}</S.UserName>
                    <S.UserEmail>{email}</S.UserEmail>
                </S.UserInfo>
                <S.StyledButton variant="contained">Aprovar</S.StyledButton>
            </S.ContainerInfo>
        </S.Wrapper>
    )
 }

 export { ApprovalCard }