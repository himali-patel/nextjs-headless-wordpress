import React from 'react';
import { BlockProps } from '../index';

type Props = BlockProps & {
  url: string,
  text: string,
  className: string,
};

export default function Buttons({ block }: BlockProps) {
  const { innerBlocks } = block;

  console.log('Buttons innerBlocks:', innerBlocks); // Debugging line

  const renderInnerBlocks = (blocks) => {
    return blocks.map((block, index) => {
      console.log('Rendering block:', block); // Additional debugging

      // Handle each block type accordingly
      switch (block.name) {
        case 'core/button':
        //   const { url, text, className } = block.attrs;
          return (
           	<div dangerouslySetInnerHTML={ { __html: block.innerHTML } } />
          );
        // Add more cases for other block types if needed
        default:
          return <div key={index}>Unsupported block: {block.blockName}</div>;
      }
    });
  };

  return (
    <div className='buttons'>
      {innerBlocks && innerBlocks.length > 0 ? renderInnerBlocks(innerBlocks) : 'No buttons available'}
    </div>
  );
}
