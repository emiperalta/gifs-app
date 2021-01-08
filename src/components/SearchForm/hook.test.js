import { renderHook, act } from '@testing-library/react-hooks';
import useForm from './hook';

test('should change keyword', () => {
    const { result } = renderHook(() => useForm());

    act(() => {
        result.current.updateKeyword('messi');
    });

    expect(result.current.keyword).toBe('messi');
});

test('should change rating', () => {
    const { result } = renderHook(() => useForm());

    act(() => {
        result.current.updateRating('r');
    });

    expect(result.current.rating).toBe('r');
});

test('should change language', () => {
    const { result } = renderHook(() => useForm());

    act(() => {
        result.current.updateLang('es');
    });

    expect(result.current.lang).toBe('es');
});

test('should use initial values', () => {
    const { result } = renderHook(() =>
        useForm({
            initKeyword: 'bioshock',
            initRating: 'pg',
            initLang: 'ja',
        })
    );

    expect(result.current.keyword).toBe('bioshock');
    expect(result.current.rating).toBe('pg');
    expect(result.current.lang).toBe('ja');
});
