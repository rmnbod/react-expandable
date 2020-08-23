import React, { useEffect, useRef } from "react"
import styles from './item.module.sass'
import icExpand from './assets/ic_expand.svg'
import { TocItem } from "../model/toc-item";
import { SubItem } from "../sub-item/sub-item";

const ITEM_CONTAINER_HEIGHT = 20

type Props = { tocItem: TocItem }

export function Item(props: Props) {
    const isExpandedRef = useRef(false)
    const subItemsContainerHeightRef = useRef(0)
    const itemContainerRef = useRef<HTMLDivElement>(null)
    const subItemsContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const subItemsContainer = subItemsContainerRef.current
        const itemContainer = itemContainerRef.current
        if (!subItemsContainer || !itemContainer) return;

        subItemsContainerHeightRef.current = subItemsContainer.clientHeight
    }, [])

    return (
        <div ref={ itemContainerRef } className={ styles.container }>
            <div className={ styles.item }>
                <span>{ props.tocItem.name }</span>
                { props.tocItem.subItems && <button onClick={ onExpandClickHandler }>
                    <img src={ icExpand } alt=''/>
                </button> }
            </div>
            { <div ref={ subItemsContainerRef } className={ styles.subItemContainer }>
                { props.tocItem.subItems?.map(subItem => <SubItem item={ subItem }/>) }
            </div> }
        </div>
    )

    function onExpandClickHandler(): void {
        const itemContainer = itemContainerRef.current
        if (!itemContainer) return;

        if (isExpandedRef.current) {
            itemContainer.style.height = ITEM_CONTAINER_HEIGHT + 'px'
        } else {
            itemContainer.style.height = ITEM_CONTAINER_HEIGHT + subItemsContainerHeightRef.current + 'px'
        }

        isExpandedRef.current = !isExpandedRef.current
    }
}

