import React, { useRef, useState } from "react"
import styles from './item.module.sass'
import icExpand from './assets/ic_expand.svg'
import { TocItem } from "../model/toc-item";
import { SubItem } from "../sub-item/sub-item";

type Props = { tocItem: TocItem }

export function Item(props: Props) {
    const [isExpanded, setExpanded] = useState(false)

    const itemContainerRef = useRef<HTMLDivElement>(null)
    const subItemsContainerRef = useRef<HTMLDivElement>(null)

    let itemHeight

    if (subItemsContainerRef.current) {
        itemHeight = isExpanded
            ? 20 + subItemsContainerRef.current.clientHeight + 'px'
            : '20px'
    }

    return (
        <div className={ styles.container } ref={ itemContainerRef } style={ { height: itemHeight } }>
            <div className={ styles.item }>
                <span>{ props.tocItem.name }</span>
                { props.tocItem.subItems && <button onClick={ () => setExpanded(prevState => !prevState) }>
                    <img src={ icExpand } alt=''/>
                </button> }
            </div>
            { <div ref={ subItemsContainerRef } className={ styles.subItemContainer }>
                { props.tocItem.subItems?.map(subItem => <SubItem item={ subItem }/>) }
            </div> }
        </div>
    )
}

