import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils, {createRenderer}  from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import { mount, shallow } from 'enzyme';

const renderer = createRenderer();

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

export {expect, renderer};
