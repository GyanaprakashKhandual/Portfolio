import cypressFileMap from "./file-map/file.map.cypress";
import restAssuredFileMap from "./file-map/file.map.rest-assured";
import reactjsFileMap from "./file-map/file.map.react";

const fileMap = {
  cypress: cypressFileMap,
  "rest-assured": restAssuredFileMap,
  reactjs: reactjsFileMap,
};

export default fileMap;