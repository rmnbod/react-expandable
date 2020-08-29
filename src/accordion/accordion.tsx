import React from "react";
import { TocItem } from "./model/toc-item";
import { Heading } from "./heading/heading";
import { Content } from "./content/content";
import styles from "./accordion.module.sass";

type Props = { tocItems: TocItem[] }

export function Accordion(props: Props) {
    return (
        <div className={styles.container}>
            <Heading/>
            <Content tocItems={ props.tocItems }/>
        </div>
    )
}