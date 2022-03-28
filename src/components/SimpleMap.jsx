import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
    <div className="marker">
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="50"
            viewBox="0 0 830.000000 1280.000000"
            preserveAspectRatio="xMidYMid meet"
        >
            <metadata>
                Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
            <g
                transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                fill="#5d5bff"
                stroke="none"
            >
                <path
                    d="M3855 12789 c-555 -44 -1043 -176 -1530 -414 -1457 -712 -2370 -2223
                    -2322 -3840 19 -605 152 -1155 406 -1680 109 -225 183 -353 331 -575 65 -96
                    856 -1369 1760 -2827 903 -1459 1646 -2653 1650 -2653 4 0 747 1194 1650 2652
                    904 1459 1695 2732 1760 2828 148 222 222 350 331 575 421 869 520 1869 279
                    2821 -244 958 -822 1795 -1640 2371 -696 491 -1551 759 -2404 752 -94 -1 -216
                    -5 -271 -10z m635 -1764 c440 -80 813 -271 1120 -575 769 -761 825 -1980 130
                    -2812 -335 -402 -817 -663 -1344 -728 -114 -14 -378 -14 -492 0 -853 105
                    -1550 715 -1764 1544 -141 545 -52 1136 243 1613 330 531 862 876 1497 968
                    130 19 481 13 610 -10z"
                />
            </g>
        </svg>
    </div>
);

class SimpleMap extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
    }

    static defaultProps = {
        zoom: 11,
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: "100%", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyAKBJA0WKTZw47KHWvPHGy5yVc_Q2a8AAA",
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={this.props.center.lat}
                        lng={this.props.center.lng}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;
