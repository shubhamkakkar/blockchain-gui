import React from "react";
import withKeysAndToken from "../../HOC/withKeysAndToken";
import FormField from "../../UI/FormField";
import classes from "./scss/CreateBlockForm.module.scss";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_BLOCK } from "../../gql/mutations/createBlock";
import BlockCard from "../../UI/BlockCard";
import CardRow from "../../UI/BlockCard/CardRow";

type TForm = {
    type: "checkbox" | "text";
    label: string;
    backendLabel: string;
};
type TButtonProps = {
    label: string;
    onChange: any;
};

const createBlockForm: TForm[] = [
    {
        type: "checkbox",
        label: "Organ",
        backendLabel: "organ"
    },
    {
        type: "checkbox",
        label: "blood group",
        backendLabel: "blood"
    },
    {
        type: "text",
        label:
            "Hospital ID the patient is admitted in/ units of blood group to be taken/ Organ(s) name being taken ( * ) ",
        backendLabel: "details"
    }
];

function CreateBlockForm({
    token,
    privateKey
}: {
    token: string;
    privateKey: string;
    history: any;
}) {
    const [initialFormValue, setFormValue] = React.useState({
        organ: false,
        blood: false,
        details: ""
    });

    const [createdBlock, setCreatedBlockData] = React.useState(false)
    const [createBlockMutation] = useMutation(CREATE_BLOCK);

    function onClick() {
        const {
            organ, blood, details
        } = initialFormValue;


        if ((organ || blood) && details.trim().length) {
            const data = JSON.stringify({ organ, blood, details });
            createBlockMutation({
                variables: {
                    data,
                    token,
                    privateKey
                }
            })
                .then(({ data: { createBlock } }) => setCreatedBlockData(createBlock))
                .catch(er => {
                    alert(er)
                    console.log({ er })
                })
        } else {
            alert("Its compulsory to select atleast one of the checkbox and fill in the details")
        }
    }

    function SubmitButton() {
        const Memorized = React.memo(() => (
            <div className={classes.actionArea}>
                <button {...{ onClick }} >Submit</button>
            </div>
        ));

        return <Memorized />
    }

    function Block() {
        // @ts-ignore
        const { __typename, timestamp, ...rest } = createdBlock;

        const Memorized = React.memo(() => (
            <BlockCard blockInfo={rest} isCreatBlock={true}>
                <CardRow label={"Organ"} value={`${initialFormValue.organ}`} />
                <CardRow label={"Blood"} value={`${initialFormValue.blood}`} />
                <CardRow label={"Details"} value={`${initialFormValue.details}`} />
            </BlockCard>
        ));

        return <Memorized />
    }

    return (
        <div className={classes.formContainer}>
            {
                createdBlock
                    ? <Block />
                    : <React.Fragment>
                        {
                            createBlockForm.map((createBlockFormProps, key) => (
                                <FormField
                                    // @ts-ignore
                                    value={initialFormValue[key]}
                                    {...{ ...createBlockFormProps, key }}
                                    onChange={(e, backendLabel) =>
                                        setFormValue({
                                            ...initialFormValue,
                                            [backendLabel]: e.target.value || e.target.checked
                                        })
                                    }
                                    labelColor={"#3f51b5"}
                                />
                            ))
                        }
                        <SubmitButton />
                    </React.Fragment>
            }
        </div>
    );
}

export default withKeysAndToken(CreateBlockForm);
