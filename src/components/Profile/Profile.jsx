import {
  ProfileCard,
  Description,
  Stats,
  Quantity,
  Name,
} from './Profile.styled';
import PropTypes from 'prop-types';


const Profile = ({ username, tag, location, avatar, stats }) => {
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
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
}
export default Profile;