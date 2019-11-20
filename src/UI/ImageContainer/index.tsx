import React from "react";

const ImageContainer = ({src, alt, imageContainerClass, imageClass}: { src: string, alt: string, imageContainerClass: any, imageClass: any }) => React.useMemo(() => (
    <div className={imageContainerClass}>
        <img className={imageClass}
             {...{src, alt}}/>
    </div>
), [src]);


export default ImageContainer
