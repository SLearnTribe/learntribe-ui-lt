import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";

export const DataGridTable = ({ data, columns }) => {
  return (
    <div style={{ height: 400 }}>
      <DataGrid
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
