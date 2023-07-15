import NIAvatar from 'assets/nativeSVGs/NoImageAvatar.svg';
import { Wrapper } from './styles';

export type AvatarProps = {
  name: string;
  character?: string;
  profile?: string;
};

export default function Avatar(props: AvatarProps) {
  const { name, character, profile } = props;
  const src = profile?.includes('null') || !profile ? NIAvatar : profile;
  const desc = `${name} - ${character || 'unlisted'}`;

  return (
    <Wrapper>
      <img src={src} alt={desc} title={desc} />
    </Wrapper>
  );
}
