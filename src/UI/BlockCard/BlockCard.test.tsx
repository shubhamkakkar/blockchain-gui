import React from 'react'
import wait from "waait";
import { GraphQLError } from 'graphql'
import Enzyme, { shallow, ShallowWrapper, mount, ReactWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { MockedProvider } from '@apollo/react-testing';
import BlockCard, { TBlockCard } from "./"
import { BLOCK } from "../../gql/query/block"
import CardRow from './CardRow'
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
        },
        errors: [new GraphQLError('Error!')],
    },
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


    test('should container', () => {
        const container = wrapperWithoutChild.find('[data-text="container"]');

        expect(container.length).toBe(1)

    });

    test('should CardRowSet container cardRow 3 times', () => {
        const CardRowSet = wrapperWithoutChild.find('[data-text="CardRowSet"]')
        expect(CardRowSet.length).toBe(1)
        expect(CardRowSet.find(CardRow).length).toBe(3)

    })
    test('should cardRow', () => {

    })


})

