import React from 'react';

const Head = ({ title }) => {
  React.useEffect(() => {
    document.title = `Renek | ${title}`;
  }, [title]);
  return <></>;
};

export default Head;
