import React from "react";
import withKeysAndToken from "../../HOC/withKeysAndToken";
import FormField from "../../UI/FormField";

type TForm = {
    type: "checkbox" | "text";
    label: string;
};

const createBlockForm: TForm[] = [
    {
        type: "checkbox",
        label: "Organ"
    },
    {
        type: "checkbox",
        label: "blood group"
    },
    {
        type: "text",
        label: "Hospital ID the patient is admitted in"
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
    return (
        <div style={{display: "flex", flex: 1, flexDirection: "column", backgroundColor: "red"}}>
            {createBlockForm.map((createBlockFormProps, key) => (
                <FormField
                    {...{...createBlockFormProps, key}}
                    onChange={(e, label) =>
                        console.log({
                            e,
                            label
                        })
                    }
                />
            ))}
        </div>
    );
}

export default withKeysAndToken(CreateBlockForm);
