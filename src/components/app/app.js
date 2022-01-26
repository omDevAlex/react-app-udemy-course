import Info from '../info/info'
import Search from '../search/search'
import Filter from '../filter/filter'
import EmployeesList from '../employees-list/employees-list'
import AddEmployees from '../add-emloyees/add-emloyees'
import '../search/search.css'

import './app.css'

function App() {

    const data = [
        {name: 'John C.', salary: 800, increase: false, id: 1},
        {name: 'Alex M.', salary: 3000, increase: false, id: 2},
        {name: 'Carl W.', salary: 4000, increase: false, id: 3}
    ]

    return (
        <div className="app">
            <Info />

            <div className='search-filter'>
                <Search />
                <Filter />
            </div>

            <EmployeesList data={data} />

            <AddEmployees />
        </div>
    )
}

export default App