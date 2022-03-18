import { renderHook, act } from '@testing-library/react-hooks';
import { useLegacyState } from '../src';

const initialState = {
  firstName: 'John',
};

describe('useLegacyState', () => {
  it('should return correct initial state', () => {
    const hook = renderHook(() => useLegacyState(initialState));
    expect(hook.result.current[0]).toStrictEqual(initialState);
  });

  it('should return the updated state after setState', () => {
    const hook = renderHook(() => useLegacyState(initialState));
    act(() => hook.result.current[1]({ lastName: 'Doe' }));
    expect(hook.result.current[0]).toStrictEqual({
      ...initialState,
      lastName: 'Doe',
    });

    act(() => hook.result.current[1]({ age: 32 }));
    expect(hook.result.current[0]).toStrictEqual({
      ...initialState,
      lastName: 'Doe',
      age: 32,
    });
  });
});
