export const types = {
    SET_THEME: 'SET_THEME',
};

export function setTheme(themeName) {
    return { type: types.SET_THEME, themeName };
}
