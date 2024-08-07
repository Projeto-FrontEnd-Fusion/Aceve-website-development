import React from 'react';

const Teste: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div {...props}>oi</div>
  );
}

export default Teste;
