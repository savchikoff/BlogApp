"use client";

import { useEffect, useRef } from "react";
import * as mapboxgl from 'mapbox-gl';
import styles from "./Map.module.scss";
import 'mapbox-gl/dist/mapbox-gl.css';

export function Map() {
    const mapContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (mapContainer.current) {
            const map = new mapboxgl.Map({
                accessToken: "pk.eyJ1IjoieHllcm1pa3giLCJhIjoiY2xyYXBrZ3lmMGhlbjJxcGp0eTFjYmc5NSJ9.MeXZnYQp9VmvxUdozvOtlA",
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/light-v11",
                center: [27.567444, 53.893009],
                zoom: 10,
                maxZoom: 15,
            });

            map.addControl(new mapboxgl.NavigationControl(), "top-left");

            const popUp = new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<p><strong>Office:</strong> Yakuba Kolasa, 28</p>`
            );
            const marker = new mapboxgl.Marker()
                .setLngLat([27.594019908613216, 53.925715522650535])
                .setPopup(popUp)
                .addTo(map);

            return () => map.remove();
        }
    }, []);

    return (
        <div className={styles.mapContainer}
            ref={mapContainer}
            style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
        />
    );

}