import React from 'react';
import { ThemeConsumer } from '../../ThemeContext';

export default function ConsumePage() {
  return (
    <div>
      ThemeContext.Consumer 取值
      <ThemeConsumer>
        {ctx => <p>{JSON.stringify(ctx)}</p>}
      </ThemeConsumer>
    </div>
  )
};
