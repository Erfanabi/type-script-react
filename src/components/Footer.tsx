import React, { PropsWithChildren } from 'react';

function Footer({ children }: PropsWithChildren<unknown>) {
  return (
    <div className={'bg-red-400'}>
      <p>footer</p>

      {children}
    </div>
  );
}

export default React.memo(Footer);

// PropsWithChildren<unknown> => "می تونه هر چیزی باشه"