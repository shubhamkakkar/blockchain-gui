import React from "react";
import withKeysAndToken from "../../HOC/withKeysAndToken";
import FormField from "../../UI/FormField";
import classes from "./scss/CreateBlockForm.module.scss";

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
            "Hospital ID the patient is admitted in/ units of blood group to be taken/ Organ(s) name being taken",
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
        organ: "",
        blood: "",
        details: ""
    });

    return (
        <div className={classes.formContainer}>
            {createBlockForm.map((createBlockFormProps, key) => (
                <FormField
                    // @ts-ignore
                    value={initialFormValue[key]}
                    {...{...createBlockFormProps, key}}
                    onChange={(e, backendLabel) =>
                        setFormValue({
                            ...initialFormValue,
                            [backendLabel]: e.target.value || e.target.checked
                        })
                    }
                />
            ))}
        </div>
    );
}

export default withKeysAndToken(CreateBlockForm);
