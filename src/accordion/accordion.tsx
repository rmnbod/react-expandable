import React from "react";
import styles from './accordion.module.sass'
import { TocItem } from "./model/toc-item";
import { Item } from "./item/item";

type Props = {tocItems: TocItem[]}

export function Accordion(props: Props) {
    return (
        <div className={styles.container}>
            <h1>Table of Contents</h1>
            {props.tocItems.map(tocItem => {
                return (
                   <Item tocItem={tocItem}/>
                )
            })}
        </div>
    )
}