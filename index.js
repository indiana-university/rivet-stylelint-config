/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */
'use strict';

module.exports = {
  extends: 'stylelint-config-standard',
  defaultSeverity: 'error',
  rules: {
    'declaration-block-semicolon-newline-after': 'always',
    'number-leading-zero': 'never',
    'rule-empty-line-before': ['always', { 'except': ['first-nested'] }]
  }
};
