import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import { useSelector } from "react-redux";
import { getIsUserDataLoading } from "../../Redux/Selectors/UserSelectors/UserSelectors";

export const DataGridTable = ({ data, columns }) => {
  const isLoading = useSelector(getIsUserDataLoading);

  return (
    <div style={{ height: 400 }}>
      <DataGrid
        loading={isLoading}
        rows={data}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </div>
  );
};
