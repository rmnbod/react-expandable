import React from "react";
import { TocItem } from "../model/toc-item";
import styles from './sub-item.module.sass'

type Props = {item: TocItem}

export function SubItem(props: Props) {
    return (
        <div className={styles.container}>
            <span>{props.item.name}</span>
        </div>
    )
}