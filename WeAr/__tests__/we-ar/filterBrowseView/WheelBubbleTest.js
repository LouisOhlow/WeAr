import React from 'react';
import renderer from 'react-test-renderer';
import WheelBubble from '../../../js/components/BrowseFilterView/WheelBubble';

describe('snapshot testing the wheel bubble', () => {
    it('bubble with BASIC text', () => {
        const item = { id: 0 }
        const index = 1
            const tree = renderer
              .create( 
              <WheelBubble
                navigate={() => {}}
                scrollPos={0}
                item={item}
                index={index}
              />)
              .toJSON();
            expect(tree).toMatchSnapshot();
    });

    it('bubble displaying 2', () => {
        const item = { id: 2 }
        const index = 2
            const tree = renderer
              .create( 
              <WheelBubble
                navigate={() => {}}
                scrollPos={0}
                item={item}
                index={index}
              />)
              .toJSON();
            expect(tree).toMatchSnapshot();
    });

    it('bubble displaying the plus', () => {
        const item = { id: 'add' }
        const index = 2
            const tree = renderer
              .create( 
              <WheelBubble
                navigate={() => {}}
                scrollPos={0}
                item={item}
                index={index}
              />)
              .toJSON();
            expect(tree).toMatchSnapshot();
    });

    it('bubble displaying nothing as the wheel end', () => {
        const item = { id: 'end' }
        const index = 2
            const tree = renderer
              .create( 
              <WheelBubble
                navigate={() => {}}
                scrollPos={0}
                item={item}
                index={index}
              />)
              .toJSON();
            expect(tree).toMatchSnapshot();
    });
});
