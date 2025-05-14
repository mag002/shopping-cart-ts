import { Link } from "react-router"

function Pagination({ current, totalPage }: { current: number, totalPage: number }) {

    let listPage = []
    let listNumber = [1, 2, 3, '...', 20]
    if (totalPage < 5) {
        for (let index = 1; index <= totalPage; index++) {
            listPage.push(<li key={index}>
                <Link to={'/product?page=' + index} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white
             border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 
             dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{index}</Link>
            </li>)

        }
    }
    if (totalPage > 5) {
        if (current > 2) {
            listNumber = [1, '...', current - 1, current, current + 1, '...', totalPage]
        }
        if (current >= totalPage - 2) {
            listNumber = [1, '...', '...', totalPage - 2, totalPage - 1, totalPage]
        }
        listPage = listNumber.map((index, i) => {
            return <li key={Math.random() + i}>
                <Link to={typeof index === 'number' ? '/product?page=' + index : '/product?page=' + current} className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white
             border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${index === current ? 'dark:bg-gray-800' : 'dark:bg-gray-600'} 
             dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>{index}</Link>
            </li>
        })


    }

    console.log('listnumber', current, listNumber)
    return <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm">
            {listPage}
        </ul>
    </nav>
}
export default Pagination