import React from "react";

interface IDate {
    value: string | Date;
}

const DateDisplay: React.FC<IDate> = ({ value }) => {
    const displayDate = new Date(value).toLocaleDateString("en-us", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
    return <time dateTime={value.toString()}>{displayDate}</time>;
};

export default DateDisplay;
