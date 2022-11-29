import {
  ProfileCard,
  Description,
  Stats,
  Quantity,
  Name,
} from './Profile.styled';
import PropTypes from 'prop-types';


const Profile = ({ user }) => {
    const { username, tag, location, avatar, stats } = user;
    return (<ProfileCard>
        <Description>
            <img
                src={avatar}
                alt={username} />
            <Name>{username}</Name>
            <p>=@{tag}</p>
            <p>{location}</p>
        </Description>
        
        <Stats>
            <li>
                <span>Followers</span>
                <Quantity>{stats.followers}</Quantity>
            </li>
            <li>
                <span>Views</span>
                <Quantity>{stats.views}</Quantity>
            </li>
            <li>
                <span>Likes</span>
                <Quantity>{stats.likes}</Quantity>
            </li>
        </Stats>
    </ProfileCard>)
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }),
}
export default Profile;