import { Wrapper } from './styles';

export default function Pill(props: { children: string }) {
  const { children } = props;

  return (
    <Wrapper>
      <p>{children}</p>
    </Wrapper>
  );
}
