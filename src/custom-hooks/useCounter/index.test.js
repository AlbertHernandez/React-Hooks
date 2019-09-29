import useCounter from './index';
import { renderHook, act } from '@testing-library/react-hooks';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('useCustomHook', () => {
  it('works', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
      result.current.increment();
    });

    expect(result.current.count).toBe(2);
  });
});
