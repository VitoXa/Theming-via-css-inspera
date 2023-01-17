import compileThemeVarSection from './compileTheme';

describe(('compileThemeSection'), () => {
    it('should compile theme object properly', () => {
        const variablesCSS = compileThemeVarSection({ testSection: { primary: '#fff', innerTestSection: { primary: '#111' } }, primary: 'red' });
        expect(variablesCSS).toEqual([
            '--testSection--primary: #fff;',
            '--testSection--innerTestSection--primary: #111;',
            '--primary: red;',
        ].join('\r\n'));
    });
});
