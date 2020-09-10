import React from "react";

export const TableOfContents: React.StatelessComponent<{
    html: string;
}> = (props) => (
    <div
        className="p-1 pb-4 overflow-auto sticky"
        style={{
            top: "1.25rem",
            maxHeight: "calc(100vh - 3rem)",
        }}
    >
        <h2 className="uppercase text-orange-400 text-base bg-transparent p-0">
            Contents
        </h2>
        <div
            dangerouslySetInnerHTML={{
                __html: props.html,
            }}
        />
    </div>
);
