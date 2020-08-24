import React from "react";
import styles from "./expand-ic.module.sass"

type Props = { isExpanded: boolean }

export function ExpandIcon(props: Props) {
    return (
        <svg width="20px" height="20px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10"/>
            <line x1="6" y1="10" x2="14" y2="10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="10" y1="6" x2="10" y2="14" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                  className={ props.isExpanded ? styles.collapsed : styles.expanded }
            />
        </svg>
    )
}