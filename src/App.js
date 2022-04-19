
import { useEffect, useState, useMemo, React } from "react";
import data from "./data/data";
import Table from "./components/tableComponent";
import { Button } from "react-bootstrap";
import Product from "./components/productComponent";

// "processSteps": [
//   {
//     "name": "Commercetools products received",
//     "description": "Number of products stored in Commercetools that are not technical singles. In case of zero products there is a technical error in the communication to Commercetools.",
//     "status": "GREEN",
//     "numberOfPassedProducts": 217,
//     "passedProducts": [



const App = () => {

  const [status, setStatus] = useState();

  const columns = useMemo(
    () => [
      // {
      //   // Build our expander column
      //   id: 'expander', // Make sure it has an ID
      //   Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
      //     <span {...getToggleAllRowsExpandedProps()}>
      //       {isAllRowsExpanded ? '👇' : '👉'}
      //     </span>
      //   ),
      //   Cell: ({ row }) =>
      //     // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
      //     // to build the toggle for expanding a row
      //     row.canExpand ? (
      //       <span
      //         {...row.getToggleRowExpandedProps({
      //           style: {
      //             // We can even use the row.depth property
      //             // and paddingLeft to indicate the depth
      //             // of the row
      //             paddingLeft: `${row.depth * 2}rem`,
      //           },
      //         })}
      //       >
      //         {row.isExpanded ? '👇' : '👉'}
      //       </span>
      //     ) : null,
      // },
      {
        id: "search",
        Header: '',

        columns: [
          {
            Header: "Process Step",
            accessor: "name"
          },
          {
            Header: "Passed Products",
            accessor: "passedProducts"
          },
          {
            Header: "Discarded Products",
            accessor: "discardedProducts"
          },
          {
            Header: "Discarded Variants",
            accessor: "discardedVariants"
          },
          {
            Header: "Order Declined Variants",
            accessor: "orderDeclinedReasonVariants",

          }
        ]
      }
    ],
    []
  )

  const [tempData, setTempData] = useState([]);

  useEffect(() => {
    let newData = JSON.stringify([...data]);
    setTempData(JSON.parse(newData));
  }, [])

  return (

    <div style={{
      backgroundColor: 'white',
      height: '100%',
      width: '100%'
    }}>
      {tempData.map((item, index) => {
        return (
          <div key={index} style={{ backgroundColor: '#d0d7d9' }}>
            <div style={{ marginLeft: '5%', paddingTop: '5%' }}>
              <h2 style={{ fontWeight: 'normal', paddingBottom: '1%' }}> Product Trace : {item.traceId}</h2> 
            </div>
            <Product data={item}/>
            <div style={{ marginLeft: '5%', marginTop: '3%', paddingBottom: '5%' }}>
              <Table data={item.stepGroups} columns={columns} setStatus={setStatus} />
            </div>
          </div>

        )
      })}
    </div>
  );
}

export default App;