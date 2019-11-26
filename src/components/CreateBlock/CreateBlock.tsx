import React from "react"
import CreateBlockForm from "./CreateBlockForm";
import Heading from "../../UI/Heading";
import ImageContainer from "../../UI/ImageContainer";
import classes from "./scss/CreateBlock.module.scss"


export default function CreateBlock({ history }: { history: any }) {
    return (
        <div data-test="createBlockContainer" className={classes.createBlockContainer}>
            <Heading data-test="Heading"
                title={"Create Block"} />
            <div data-test="animationContainer" className={classes.animationContainer}>
                <ImageContainer
                    data-test="ImageContainer"
                    src={"https://cdn.dribbble.com/users/542205/screenshots/5380805/advisable_dr_9.png"}
                    alt={"Create Block"}
                    imageContainerClass={classes.imageContainer}
                    imageClass={classes.image}
                />
                <CreateBlockForm
                    data-test="CreateBlockForm"
                    {...{ history }} />
            </div>
        </div>
    )
}
