import React from 'react';
import { Pagination as PaginationAntd } from 'antd';

import './Pagination.scss';

export default function Pagination(props) {

    const { notices, location, history } = props;
    const currentPage = parseInt(notices.page);

    const onChangePage = newPage => {
        history.push(`${location.pathname}?page=${newPage}`)
    }

    return (
        
        <PaginationAntd
            defaultCurrent={currentPage}
            pageSize={5}
            total={notices.totalDocs}
            onChange={newPage => onChangePage(newPage)}
            className="pagination"
        >
            <h1>Paginacion...</h1>
        </PaginationAntd>
    )

}
