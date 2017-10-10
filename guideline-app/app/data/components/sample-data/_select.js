import React from 'react';
import { // eslint-disable-line import/no-extraneous-dependencies
    Select
} from 'NavFrontendModules/nav-frontend-skjema'; // eslint-disable-line import/extensions, import/no-unresolved
import generateSample from './../../../utils/sampling/sampleDataGenerator';

const options = [
    { value: 'norge', label: 'Norge' },
    { value: 'sverige', label: 'Sverige' },
    { value: 'danmark', label: 'Danmark' }
];

const optionChildren = () => options.map((option) =>
    (<option value={option.value} key={option.value}>{ option.label }</option>)
);

export default generateSample(Select, ['disabled', 'feil'], { label: 'Hvilken land er best om sommeren?' }, optionChildren());
