
import React, { useState } from 'react';
import { useTable } from "react-table";
import { Button } from 'react-bootstrap';
import styled from 'styled-components'
import { BsSearch } from "react-icons/bs";


const Styles = styled.div`
  /* This is required to make the table full-width */
  display: block;
  max-width: 95%;

  /* This will make the table scrollable when it gets too small */
  .tableWrap {
    display: block;
    max-width: 100%;
  }

  table {
    /* Make sure the inner table is always as wide as needed */
    width: 100%;
    border-spacing: 0;

    tr {
      :last-child {
        td {
          border-bottom: 0;

      }
    }

    th {
        margin: 0;
        padding: 0.5rem;
        border-bottom: 1px solid grey;
  
  
        /* The secret sauce */
        /* Each cell should grow equally */
        width: 1%;
        /* But "collapsed" cells should be as small as possible */
        &.collapse {
          width: 0.0000000001%;
        }   
      }
    }

    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid grey;


      /* The secret sauce */
      /* Each cell should grow equally */
      width: 1%;
      /* But "collapsed" cells should be as small as possible */
      &.collapse {
        width: 0.0000000001%;
      }

      :last-child {
        border-right: 0;
        
      }
    }
  }
`

const Table = ({ columns, data, setStatus }) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,

    } = useTable({
        columns,
        data,
    })

    const [showStatus, setShowStatus] = useState(false);
    const [statusData, setStatusData] = useState(null);
    const [clickedIndex, setClickedIndex] = useState(null);

    // Render the UI for your table
    return (
        <>
            <Styles>

                <table {...getTableProps()} style={{

                    "columnRuleWidth": "12",
                    width: '100%',

                }}>



                    <div className='tableWrap'>
                        <div style={{ backgroundColor: 'white', padding: 10}}>
                            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: 10 }}>
                                <h6><BsSearch size={20} style={{ paddingLeft: 10 }} /></h6>
                                <input style={{ height: 35, width: '25%', marginLeft: 15, borderWidth: 0, borderColor: 'transparent', outline: 'none' }} placeholder={"Search Process Steps Here"} />
                                <div style={{ position: 'absolute', right: '6%', fontWeight: 'bold' }}>
                                    Show status
                                </div>
                            </div>
                            <div>
                                <hr
                                    style={{
                                        color: 'black',
                                        backgroundColor: 'black',
                                        height: 1,
                                        width: '35%'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#ffffff', }}>
                        <thead>
                            {headerGroups.filter((item, index) => index === 0).map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()} >
                                    {/* MAIN HEADER */}
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()} >{column.render('Header')}</th>
                                    ))}
                                </tr>
                            ))}
                            {headerGroups.filter((item, index) => index > 0).map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()} >
                                    {/* SUB HEADER */}
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map((row, i) => {
                                prepareRow(row)
                                return (
                                    <>
                                        <tr {...row.getRowProps()} >

                                            {row.cells.filter((value, index) => index === 0).map((cell, index) => {
                                                return (
                                                    <>
                                                        {/* FIRST ROW */}

                                                        <td {...cell.getCellProps()} style={{ textAlign: 'left', paddingLeft: '3%' }}>
                                                            <>

                                                                <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                                                    <button style={{ marginRight: '10%', backgroundColor: 'transparent', borderColor: 'transparent' }} name="Show" onClick={() => {
                                                                        if (showStatus) {
                                                                            console.log(cell.value);

                                                                            data.filter((item, index) => item.name === cell.value).map((item, index) => {

                                                                                item.processSteps.map((item, index) => {
                                                                                    setStatusData(item.status)
                                                                                    setClickedIndex(i);
                                                                                    console.log("Status => " + item.status + " " + clickedIndex);
                                                                                    setStatus(item.status)
                                                                                    console.log("ON");
                                                                                })
                                                                            })
                                                                            setShowStatus(false)
                                                                        }
                                                                        else {
                                                                            setShowStatus(true)
                                                                            console.log("OFF");

                                                                        }
                                                                    }} > + </button>
                                                                    <p>{cell.render('Cell')}</p>
                                                                </div>
                                                            </>
                                                        </td>
                                                    </>
                                                )
                                            })}

                                            {row.cells.filter((value, index) => index > 0).map((cell, index) => {
                                                return (

                                                    <td {...cell.getCellProps()} style={{
                                                        textAlign: 'center', paddingLeft: '5%', fontWeight: cell.value > 0 ? 'bold' : 'normal'
                                                    }}>{cell.render('Cell')}</td>

                                                )
                                            })}

                                        </tr>

                                    </>
                                )
                            })}
                        </tbody>
                    </div>
                </table >

            </Styles>
        </>
    )
}

export default Table