import React from 'react';
import styles from './App.module.sass';
import { Accordion } from "./accordion/accordion";
import {tocItems} from "./misc/toc-items-mock";

function App() {
    return (
        <div className={styles.container}>
            <Accordion tocItems={tocItems}/>
        </div>
    );
}

export default App;
