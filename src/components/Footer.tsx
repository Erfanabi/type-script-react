import React, { JSX, PropsWithChildren } from 'react';

function Footer({ children }: PropsWithChildren<unknown>) {
  const FOOTER: JSX.Element = (
    <div>
      <p>footer</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
  );

  return (
    <div className={'bg-red-500'}>
      {FOOTER}
      <div>{children}</div>;
    </div>
  );
}

export default React.memo(Footer);

// PropsWithChildren<unknown> => "می تونه هر چیزی باشه"