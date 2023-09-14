import { fromLonLat } from "ol/proj";
import { Point } from "ol/geom";
import { RMap, ROSM, RLayerVector, RFeature, ROverlay, RStyle } from "rlayers";

import React from "react";

const Map = () => {
  return (
    <div>
      <RMap
        className="example-map"
        initial={{ center: fromLonLat([78.564, 20.82]), zoom: 11 }}
      >
        <ROSM />
        <RLayerVector zIndex={10}>
          <RStyle.RStyle></RStyle.RStyle>
          <RFeature
            geometry={new Point(fromLonLat([2.295, 48.8737]))}
            onClick={(e) =>
              e.map.getView().fit(e.target.getGeometry().getExtent(), {
                duration: 250,
                maxZoom: 15,
              })
            }
          >
            <ROverlay className="example-overlay">
              Arc de Triomphe
              <br />
              <em>&#11017; click to zoom</em>
            </ROverlay>
          </RFeature>
        </RLayerVector>
      </RMap>
    </div>
  );
};

export default Map;
