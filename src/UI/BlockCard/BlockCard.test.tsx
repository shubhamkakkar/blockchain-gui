import React, { ReactElement } from 'react'
import Enzyme, { shallow, ShallowWrapper, mount, ReactWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { MockedProvider } from '@apollo/react-testing';
import BlockCard, { TBlockCard } from "./"
import { BLOCK } from "../../gql/query/block"
import findByAttr from "../../utility"

Enzyme.configure({ adapter: new EnzymeAdapter() });


const mocks = [
    {
        request: {
            query: BLOCK,
            variables: {
                token: "token", password: "$password", id: '$id'
            }
        },
        result: {
            data: {
                block: {
                    data: "data of block"
                }
            }
        }
    },
];

describe('blockCard', () => {
    let wrapperWithoutChild: ShallowWrapper;
    let wrapperWithChild: ShallowWrapper;
    let container: any;

    beforeEach(() => {
        const wrapperWithoutChildProps: TBlockCard = {
            isCreatBlock: false,
            blockInfo: {
                _id: "_id",
                index: 0,
                hash: "hash",
                prevHash: "prevHash",
                data: "data",
                password: "password",
                timestamp: "timestamp",
            }
        }
        wrapperWithoutChild = shallow(
            <MockedProvider mocks={mocks} addTypename={false}>
                <BlockCard {...wrapperWithoutChildProps} />
            </MockedProvider>
        )
    });
    test('should wrapper (all type) contains container', () => {
        expect(wrapperWithoutChild.length).not.toBe(0);
    })

    test('should check length of CardRow', () => {
        const CardRow = findByAttr(wrapperWithoutChild, "CardRow");
        console.log(wrapperWithoutChild.debug())
        // expect(CardRow.length).toBe(3)
    })


})

