import React, { useRef, useState } from "react"
import styles from './item.module.sass'
import { TocItem } from "../model/toc-item";
import { SubItem } from "../sub-item/sub-item";
import { ExpandIcon } from "./assets/expand-ic";

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
                    <ExpandIcon isExpanded={isExpanded}/>
                </button> }
            </div>
            { <div ref={ subItemsContainerRef } className={ styles.subItemsContainer }>
                { props.tocItem.subItems?.map((subItem, index) => (
                    <SubItem
                        item={ subItem }
                        isVisible={ isExpanded }
                        ordinalNumber={ index }
                    />
                )) }
            </div> }
        </div>
    )
}

