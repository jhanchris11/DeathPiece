import React, { useEffect, useState } from "react";
import Graph from "react-graph-vis";

import { getDataFromLocalNetwork } from "../../services/localNetworkService";
import { transformLocalNetworkToDiagram } from "../../helpers/NetworkDiagramHelper";

const NetworkDiagramModal = () => {
  const [graph, setGraph] = useState({});

  const options = {
    layout: {
      hierarchical: true
    },
    edges: {
      color: "red"
    },
    height: "300px"
  };

  const events = {
    select: function(event) {
      var { nodes, edges } = event;
    }
  };

  async function getDataLocalNetwork() {
    let result = await getDataFromLocalNetwork();
    let newData = transformLocalNetworkToDiagram(result.data);
    setGraph(newData);
  }

  useEffect(() => {
    getDataLocalNetwork();
  }, []);

  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={network => {}}
    />
  );
};

export default NetworkDiagramModal;
