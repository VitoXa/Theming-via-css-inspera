export function compileCSSVariable(name, value, parentSections = []) {
    return `--${[...parentSections, name].join('--')}: ${value};`;
}

function compileThemeVarSection(themeVarSection, parentSections = []) {
    return Object.keys(themeVarSection).map((varOrSectionName) => {
        if (typeof themeVarSection[varOrSectionName] === 'string') {
            return compileCSSVariable(varOrSectionName,
                themeVarSection[varOrSectionName], parentSections);
        }
        return compileThemeVarSection(themeVarSection[varOrSectionName],
            parentSections.concat(varOrSectionName));
    }).join('\r\n');
}

export default compileThemeVarSection;
