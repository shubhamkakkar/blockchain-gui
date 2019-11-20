import React from "react"
import {useMutation} from "@apollo/react-hooks";

import CreateBlockForm from "./CreateBlockForm";
import Heading from "../../UI/Heading";
import ImageContainer from "../../UI/ImageContainer";

import {CREATE_BLOCK} from "../../gql/mutations/createBlock";
import classes from "./scss/CreateBlock.module.scss"


export default function CreateBlock({history}: { history: any }) {
    const [createBlock] = useMutation(CREATE_BLOCK)
    return (
        <div className={classes.createBlockContainer}>
            <Heading title={" ! Create Block ! "}/>
            <div className={classes.animationContainer}>
                <ImageContainer
                    src={"https://cdn.dribbble.com/users/542205/screenshots/5380805/advisable_dr_9.png"}
                    alt={"Create Block"}
                    imageContainerClass={classes.imageContainer} imageClass={classes.image}
                />
                <CreateBlockForm {...{history}} />
            </div>
        </div>
    )
}
