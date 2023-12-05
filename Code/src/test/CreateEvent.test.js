import React from "react";
import renderer from "react-test-renderer";

import CreateEvent from "../screens/events/CreateEvent";

describe('<CreateEvent />', () => {
    it('teste', () => {
        const tree = renderer.act(<CreateEvent {...{}}/>);

        console.log(tree)

        expect(tree.children.length).toBe(4);
    })
})
