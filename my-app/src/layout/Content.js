import React from 'react';
import './Content.css'
export default function Content({children}) {
    return (
        <section className="Content">
            {children}
        </section>
    )
}