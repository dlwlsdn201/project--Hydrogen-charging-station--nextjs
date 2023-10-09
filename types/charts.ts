import {BarControllerChartOptions, ChartData, CoreChartOptions, DatasetChartOptions, ElementChartOptions, PluginChartOptions, ScaleChartOptions} from "chart.js";
import {_DeepPartialObject} from "chart.js/dist/types/utils";

export type TChartData = ChartData<"bar",(number | [number,number] | null)[],unknown>;


export type TOptions = _DeepPartialObject<CoreChartOptions<"bar"> & ElementChartOptions<"bar"> & PluginChartOptions<"bar"> & DatasetChartOptions<"bar"> & ScaleChartOptions<"bar"> & BarControllerChartOptions>