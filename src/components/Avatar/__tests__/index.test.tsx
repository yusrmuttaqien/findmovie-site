import { describe, expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Avatar, { AvatarProps } from '..';

vi.mock('assets/nativeSVGs/NoImageAvatar.svg', () => ({
  default: 'NIAvatar',
}));
vi.mock('components/Avatar/styles', () => ({
  Wrapper: vi.fn(({ children }) => <figure>{children}</figure>),
}));

describe('Avatar component index', () => {
  let props: AvatarProps = {
    name: 'Yusril Muttaqien',
  };

  test('should render placeholder when src & character is undefined', () => {
    const { rerender } = render(<Avatar {...props} />);

    const imgEl = document.getElementsByTagName('img')[0];
    expect(imgEl.getAttribute('src')).toEqual('NIAvatar');
    expect(imgEl.getAttribute('alt')).toEqual(`${props.name} - unlisted`);
    expect(imgEl.getAttribute('title')).toEqual(`${props.name} - unlisted`);

    rerender(<Avatar {...props} profile="null" />);
    expect(imgEl.getAttribute('src')).toEqual('NIAvatar');
  });
  test('should render content when src & character is defined', () => {
    props = {
      ...props,
      character: 'FE Dev',
      profile: 'image',
    };

    render(<Avatar {...props} />);

    const imgEl = document.getElementsByTagName('img')[0];
    expect(imgEl.getAttribute('src')).toEqual(props.profile);
    expect(imgEl.getAttribute('alt')).toEqual(`${props.name} - ${props.character}`);
    expect(imgEl.getAttribute('title')).toEqual(`${props.name} - ${props.character}`);
  });
});
