import React from "react";
import { TocItem } from "../model/toc-item";
import styles from './sub-item.module.sass'

type Props = { item: TocItem, isVisible: boolean, ordinalNumber: number }

export function SubItem(props: Props) {
    const transitionDelay = props.ordinalNumber * 60 + 'ms'
    return (
        <div
            className={ `${ styles.container } ${ props.isVisible ? styles.open : '' }` }
            style={ { animationDelay: transitionDelay } }
        >
            <span>{ props.item.name }</span>
        </div>
    )
}