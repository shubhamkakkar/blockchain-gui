import React, { ReactElement } from 'react'
import wait from "waait";
import Enzyme, { shallow, ShallowWrapper, mount, ReactWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { MockedProvider } from '@apollo/react-testing';
import BlockCard, { TBlockCard } from "./"
import { BLOCK } from "../../gql/query/block"
import findByAttr from "../../utility"

Enzyme.configure({ adapter: new EnzymeAdapter() });


const mocks = {
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
}

describe('<BlockCard />', () => {
    let wrapperWithoutChild: ReactWrapper;


    beforeEach(async () => {
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
        wrapperWithoutChild = mount(
            <MockedProvider mocks={[mocks]} addTypename={false}>
                <BlockCard {...wrapperWithoutChildProps} />
            </MockedProvider>
        )

        await wait(0);
        wrapperWithoutChild.update();
    });
    // test('should wrapper (all type) contains container', () => {
    //     expect(wrapperWithoutChild.length).not.toBe(0);
    // })

    test('should container', () => {
        const container = wrapperWithoutChild.find('[data-text="container"]');
        expect(container.length).toBe(1)

    });

    test('should CardRowSet', () => {
        const CardRowSet = wrapperWithoutChild.find('[data-text="CardRowSet"]')
        expect(CardRowSet.length).toBe(1)
    })
    test('should cardRow', () => {
        const CardRowSet = wrapperWithoutChild.find('[data-text="CardRowSet"]')
        console.log(CardRowSet.debug())
    })


})

