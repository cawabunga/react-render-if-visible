import React from 'react';
declare type Props = {
    /** An estimate of the element's height */
    defaultHeight?: number;
    /** How far outside the viewport in pixels should elements be considered visible?  */
    visibleOffset?: number;
    root?: HTMLElement | null;
    children: React.ReactNode;
    placeholder?: React.ReactNode;
};
declare const RenderIfVisible: ({ defaultHeight, visibleOffset, root, children, placeholder }: Props) => JSX.Element;
export default RenderIfVisible;
