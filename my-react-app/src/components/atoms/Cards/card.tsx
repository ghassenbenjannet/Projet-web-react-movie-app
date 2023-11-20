import React, { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren<{}> {
  classes: string
}

export const Card: React.FC<CardProps> = ({ children, classes}) => {
  return <div className={classes}>{children}</div>;
};