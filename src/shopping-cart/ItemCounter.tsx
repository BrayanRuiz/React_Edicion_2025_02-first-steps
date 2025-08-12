import React from 'react'

const ItemCounter = () => {
    return (
        <section
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
            }}
        >
            <button>+1</button>
            <span>10</span>
            <button>-1</button>
        </section>
    )
}

export default ItemCounter
