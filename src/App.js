import React, {useState} from 'react'
import List from './component/List'
import data from './config/data'
import './style.css'
export default function App() {
    const [people,setPeople] = useState(data);
    return (
        <main>
            <section className='container'>
                <h3>{people.length} birthdays today</h3>
                <List people={people}/>
                <button onClick={() => setPeople([])}>clear all</button>
            </section>
        </main>
    )
}
