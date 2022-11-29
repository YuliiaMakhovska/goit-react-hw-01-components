import {
    FriendContainer,
    Item,
    OnLine,
    Avatar,
    Title
} from './FriendList.styled'
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return (<FriendContainer>{friends.map(({ id, avatar, name, isOnline }) =>
        <Item key={id}>
            <OnLine isOnline={isOnline}></OnLine>
            <Avatar src={avatar} alt="User avatar" width="48"></Avatar>
            <Title>{ name }</Title>
        </Item> )}</FriendContainer>)
}


FriendList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number,
        })
    )
}

export default FriendList;