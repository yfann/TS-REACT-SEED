import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Table,Column,Cell} from 'fixed-data-table';

const rows=[
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3'],    
];

export class DataTable extends React.Component<any,{}>{
    render(){
        return (
                <Table
                    rowHeight={50}
                    rowsCount={rows.length}
                    width={500}
                    height={500}
                    headerHeight={50}>
                    <Column
                    header={<Cell>Col 1</Cell>}
                    cell={<Cell>Column 1 static content</Cell>}
                    width={200}
                    />
                </Table>
             )
    }
}