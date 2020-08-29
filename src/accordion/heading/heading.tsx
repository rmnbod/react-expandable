import React from "react";
import styles from './heading.module.sass'
import { icBackArrow } from "./assets/ic_back_arrow";

export function Heading() {
    return (
        <div className={ styles.container }>
            <button>
                { icBackArrow }
            </button>
            <h1>Table of Contents</h1>
        </div>
    )
}