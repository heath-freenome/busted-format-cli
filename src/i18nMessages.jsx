import getTestIds from './getTestIds';
import { FormattedMessage, defineMessage } from 'react-intl';
import React from 'react';

const TEST_IDS = getTestIds();

export const MSG = defineMessage({
  defaultMessage: 'Clear text',
  description: 'The aria-label for the clear text input icon button',
  'data-testid': TEST_IDS.clearButton,
});

export const TEST = (
  <FormattedMessage
    defaultMessage="Drop a file here"
    description="No file card text, displayed in the `Dropzone` when no file has yet been provided by the user"
    data-testid={TEST_IDS.noFileMsg}
  />
);

