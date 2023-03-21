import { Actions, IActionsManager, IExecuteConfig } from "../types";
import { AddColumn } from "./AddColumn";
import { AddRow } from "./AddRow";
import { AddSheet } from "./AddSheet";
import { DeleteColumn } from "./DeleteColumn";
import { DeleteRow } from "./DeleteRow";
import { DeleteSheet } from "./DeleteSheet";
import { GroupAction } from "./GroupAction";
import { GroupColAction } from "./GroupColAction";
import { GroupRowAction } from "./GroupRowAction";
import { LockCell } from "./LockCell";
import { RemoveCellStyles } from "./RemoveCellStyles";
import { RenameSheet } from "./RenameSheet";
import { SetCellFormat } from "./SetCellFormat";
import { SetCellStyle } from "./SetCellStyle";
import { SetCellValue } from "./SetCellValue";
import { Clear } from "./Clear";
import { ClearSheet } from "./ClearSheet";
import { ResizeCol } from "./ResizeCol";
import { ResizeRow } from "./ResizeRow";
import { SetValidation } from "./SetValidation";
import { SortCells } from "./SortCells";
import { InsertLink } from "./InsertLink";
import { FitColumn } from "./FitCol";
import { Filter } from "./Filter";
import { Merge } from "./Merge";
import { Unmerge } from "./Unmerge";
export declare const actions: {
    setCellStyle: typeof SetCellStyle;
    setCellValue: typeof SetCellValue;
    setCellFormat: typeof SetCellFormat;
    removeCellStyles: typeof RemoveCellStyles;
    lockCell: typeof LockCell;
    deleteRow: typeof DeleteRow;
    addRow: typeof AddRow;
    deleteColumn: typeof DeleteColumn;
    addColumn: typeof AddColumn;
    groupAction: typeof GroupAction;
    groupRowAction: typeof GroupRowAction;
    groupColAction: typeof GroupColAction;
    addSheet: typeof AddSheet;
    deleteSheet: typeof DeleteSheet;
    renameSheet: typeof RenameSheet;
    clear: typeof Clear;
    clearSheet: typeof ClearSheet;
    resizeCol: typeof ResizeCol;
    resizeRow: typeof ResizeRow;
    setValidation: typeof SetValidation;
    sortCells: typeof SortCells;
    insertLink: typeof InsertLink;
    fitColumn: typeof FitColumn;
    filter: typeof Filter;
    merge: typeof Merge;
    unmerge: typeof Unmerge;
};
export declare class ActionsManager implements IActionsManager {
    private _actions;
    private _redoActions;
    private _config;
    private _dataStore;
    private _sheets;
    private _redoSheets;
    private _events;
    constructor(config: any);
    execute(command: Actions | IExecuteConfig[], config?: IExecuteConfig): void;
    undo(): void;
    redo(): void;
}
