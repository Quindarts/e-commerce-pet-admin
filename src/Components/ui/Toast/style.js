import styled from '@emotion/styled';
import * as React from 'react';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)`
  border-radius: 4px;
`;

export const styles = {
  success: { backgroundColor: 'green', color: 'white' },
  error: { backgroundColor: 'red', color: 'white' },
  warning: { backgroundColor: 'orange', color: 'black' },
  info: { backgroundColor: 'blue', color: 'white' },
};