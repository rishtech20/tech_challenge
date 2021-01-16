import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Constants from "./constants";
import "./SongsList.css";

interface IConfig {
  key: keyof ISongs;
  direction: string;
}

interface ISongs {
  song?: string;
  artist?: string;
  songReleaseDate?: string;
  playCount?: number;
  metricA?: number;
  metricB?: number;
  metricC?: number;
  metricD?: number;
  metricE?: number;
  metricF?: number;
  metricG?: number;
  metricH?: number;
  metricI?: number;
  metricJ?: number;
  metricK?: number;
  metricL?: number;
  metricM?: number;
  metricN?: number;
  metricO?: number;
  metricP?: number;
}

const useSortableData = (items: ISongs[], config: IConfig | null = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null && sortConfig !== undefined) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: keyof ISongs) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const SongsList = () => {
  const [data, setData] = useState({ songs: [] });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { items, requestSort, sortConfig } = useSortableData(data.songs);

  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  useEffect(() => {
    const fetchData = async () => {
      // Call the GraphQL API
      const queryResult = await axios.post(Constants.GRAPHQL_API, {
        query: Constants.GET_SONGS_DATA,
      });
      // Update the component state
      const result = queryResult.data.data;
      setData({ songs: result.songs });
    };

    fetchData();
  });

  return (
    <div className="Table-Container">
      <table>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort("song")}
                className={getClassNamesFor("song")}
              >
                Song Name
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("artist")}
                className={getClassNamesFor("artist")}
              >
                Artist
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("songReleaseDate")}
                className={getClassNamesFor("songReleaseDate")}
              >
                Release Date
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("playCount")}
                className={getClassNamesFor("playCount")}
              >
                Play Count
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("metricA")}
                className={getClassNamesFor("metricA")}
              >
                Metric A
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("metricB")}
                className={getClassNamesFor("metricB")}
              >
                Metric B
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("metricC")}
                className={getClassNamesFor("metricC")}
              >
                Metric C
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("metricD")}
                className={getClassNamesFor("metricD")}
              >
                Metric D
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("metricE")}
                className={getClassNamesFor("metricE")}
              >
                Metric E
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("metricF")}
                className={getClassNamesFor("metricF")}
              >
                Metric F
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("metricG")}
                className={getClassNamesFor("metricG")}
              >
                Metric G
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("metricH")}
                className={getClassNamesFor("metricH")}
              >
                Metric H
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("metricI")}
                className={getClassNamesFor("metricI")}
              >
                Metric I
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("metricJ")}
                className={getClassNamesFor("metricJ")}
              >
                Metric J
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("metricK")}
                className={getClassNamesFor("metricK")}
              >
                Metric K
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("metricL")}
                className={getClassNamesFor("metricL")}
              >
                Metric L
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("metricM")}
                className={getClassNamesFor("metricM")}
              >
                Metric M
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("metricN")}
                className={getClassNamesFor("metricN")}
              >
                Metric N
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("metricO")}
                className={getClassNamesFor("metricO")}
              >
                Metric O
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("metricP")}
                className={getClassNamesFor("metricP")}
              >
                Metric P
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.songs.length ? (
            items.map((item) => (
              <tr>
                <td>{item["song"]}</td>
                <td>{item["artist"]}</td>
                <td>{item["songReleaseDate"]}</td>
                <td>{item["playCount"]}</td>
                <td>{item["metricA"]}</td>
                <td>{item["metricB"]}</td>
                <td>{item["metricC"]}</td>
                <td>{item["metricD"]}</td>
                <td>{item["metricE"]}</td>
                <td>{item["metricF"]}</td>
                <td>{item["metricG"]}</td>
                <td>{item["metricH"]}</td>
                <td>{item["metricI"]}</td>
                <td>{item["metricJ"]}</td>
                <td>{item["metricK"]}</td>
                <td>{item["metricL"]}</td>
                <td>{item["metricM"]}</td>
                <td>{item["metricN"]}</td>
                <td>{item["metricO"]}</td>
                <td>{item["metricP"]}</td>
              </tr>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SongsList;
