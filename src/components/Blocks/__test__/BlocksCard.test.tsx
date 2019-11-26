import React from 'react'
import { configure, shallow, ShallowWrapper } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import BlocksCard, { TBlocksCard } from "../BlocksCard";
import findByAttr from "../../../utility"

configure({ adapter: new EnzymeAdapter() });

describe('<BlocksCard/>', () => {
    let wrapper: ShallowWrapper;
    const blocksCardProps: TBlocksCard = {
        token: "token",
        error: { message: "error message" },
        data: {
            blocks: [
                {
                    index: 0,
                    _id: "_id",
                    prevHash: "12321312",
                    hash: "123213",
                    timestamp: "2321321",
                    data: "data - this would go away",
                    password: "password"
                }
            ]
        }
    }
    beforeEach(() => {
        wrapper = shallow(<BlocksCard  {...blocksCardProps} />)
    });
    test('should wrapper render', () => {
        expect(wrapper.length).toBe(1)
    });
    test('should container blockCardContainer with className: blockCardContainer', () => {
        const blockCardContainer = findByAttr(wrapper, "blockCardContainer");
        expect(blockCardContainer.length).toBe(1)
        expect(blockCardContainer.props().className).toBe("blockCardContainer")
    });

    describe('error isnot present', () => {
        let tempProps: TBlocksCard = {
            ...blocksCardProps,
            error: undefined
        };

        const tempWrapper = shallow(<BlocksCard {...tempProps} />);
        test('should not container errorDiv', () => {
            const errorDiv = findByAttr(tempWrapper, "errorDiv");
            expect(errorDiv.length).toBe(0)
        })
        test('should container blocksDiv', () => {
            const blocksDiv = findByAttr(tempWrapper, "blocksDiv-BlockCards");
            expect(blocksDiv.length).toBe(1)
        })


    })

    describe('blocks is an empty array', () => {
        let tempProps: TBlocksCard = {
            ...blocksCardProps,
            data: {
                blocks: []
            }
        };

        const tempWrapper = shallow(<BlocksCard {...tempProps} />);
        test('should not container blocksDiv', () => {
            const blocksDiv = findByAttr(tempWrapper, "blocksDiv-BlockCards");
            expect(blocksDiv.length).toBe(0)
        })
        test('should container errorDiv', () => {
            const errorDiv = findByAttr(tempWrapper, "errorDiv");
            expect(errorDiv.length).toBe(1)
        });


    })


})
