import { ProfileContainer } from './style';
import noImg from '../../assets/images/noUser.webp';

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileContainer.Image src={noImg} />
      <div>
        <ProfileContainer.Name>Sherzod BM</ProfileContainer.Name>
        <ProfileContainer.Email>sherzodbcy@gmail.com</ProfileContainer.Email>
      </div>
    </ProfileContainer>
  );
};
export default Profile;
