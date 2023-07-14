import { Wrapper } from './styled';

type LoadingProps = {
  className?: string;
};

export default function Loading(props: LoadingProps) {
  const { className } = props;

  return (
    <Wrapper className={className}>
      <span />
    </Wrapper>
  );
}
