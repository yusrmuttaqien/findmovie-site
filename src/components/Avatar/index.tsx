import { Wrapper } from './styles';

type AvatarProps = {
  name: string;
  character: string;
  profile: string;
};

export default function Avatar(props: AvatarProps) {
  const { name, character, profile } = props;

  return (
    <Wrapper>
      <img src={profile} alt={name} title={`${name} - ${character}`} />
    </Wrapper>
  );
}
