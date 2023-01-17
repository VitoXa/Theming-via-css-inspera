import React from 'react';
import PropTypes from 'prop-types';
import compileThemeVarSection from './compileTheme';

const ThemedContainer = ({ children }) => {
    const theme = {
        themeVariables: {
            header: {
                'secondary-text-color': '#A6A6A6',
                'text-color': '#fff',
                'background-color': '#323232',
            },
            'mpc-interaction': {
                'label-color': '#fff',
                'label-background': '#000',
            },
        },
    };
    return (
        <React.Fragment>
            <style>
                {
                    `:root {
                        ${compileThemeVarSection(theme.themeVariables)}
                    `
                }
            </style>
            {children}
        </React.Fragment>
    );
};
ThemedContainer.propTypes = {
    children: PropTypes.element.isRequired,
};

export default ThemedContainer;
