import React from "react";

export type TImageContainer = { src: string, alt: string, imageContainerClass: any, imageClass: any }

const ImageContainer = ({ src, alt, imageContainerClass, imageClass }: TImageContainer) => React.useMemo(() => (
    <div data-test="imageContainer" className={imageContainerClass}>
        <img data-test="image" className={imageClass}  {...{ src, alt }} />
    </div>
), [src]);


export default ImageContainer
