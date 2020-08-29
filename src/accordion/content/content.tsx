import React from "react";
import styles from "./content.module.sass";
import { Item } from "../item/item";
import { TocItem } from "../model/toc-item";

type Props = { tocItems: TocItem[] }

export function Content(props: Props) {
    return (
        <div className={ styles.container }>
            { props.tocItems.map(tocItem => {
                return (
                    <Item tocItem={ tocItem }/>
                )
            }) }
        </div>
    )
}