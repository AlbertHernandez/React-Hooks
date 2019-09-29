import useCounter from './index';
import { renderHook, act } from '@testing-library/react-hooks';

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
