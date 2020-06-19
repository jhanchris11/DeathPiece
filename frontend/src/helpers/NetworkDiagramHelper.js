export const transformLocalNetworkToDiagram = (data)=> {
      let nodes = [];
      let edges = [];

      data.map( (element,index) => {
        nodes.push({ id: index+1, label: `IP: ${element['IP']}\n${element['MAC']}`, title: `HOST ${index+1}` }); 
      });
      let sizeNodes = nodes.length + 1
      nodes.push({ id: `${sizeNodes}`, label: `IP: 192.168.1.1`, title: `HOST ${sizeNodes}` });

      let lastIndex = nodes.length;
      nodes.map( (node,index) => {
          if(nodes.length != index){
            edges.push({ from: index+1,to: lastIndex}); 
          }
      });

      return {nodes,edges};
}