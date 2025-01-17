<template>
  <Card
    class="tvl"
    :title="t('title')"
  >
    <div
      ref="chartRef"
      class="chart"
    ></div>
  </Card>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { chain } from "lodash";
import {
  ColorType,
  createChart as createChartFunc,
  IChartApi,
  ISeriesApi,
  LineData,
  LineStyle,
  LineType,
  UTCTimestamp,
} from "lightweight-charts";
import { Card } from "@/Framework";
import { Colors, round, unit } from "@/Util";
import type { Tvl } from "@CM/Models";
import { useCurveMonitorStore } from "@CM/Store";
import { onMounted, watch } from "vue";

const { t } = useI18n();

let chart: IChartApi;
let areaSerie: ISeriesApi<"Area">;

// Refs
const store = useCurveMonitorStore();

const chartRef = ref<HTMLElement | null>(null);

const tvl = computed((): Tvl[] => {
  return store.tvl;
});

// Hooks
onMounted((): void => {
  if (!chartRef.value) return;

  chart = createChartFunc(chartRef.value, {
    width: chartRef.value.clientWidth,
    height: chartRef.value.clientHeight,
    layout: {
      background: {
        type: ColorType.Solid,
        color: "rgba(255, 255, 255, 0)",
      },
      textColor: Colors.level5,
      fontFamily: "SF Mono, Consolas, monospace",
    },
    grid: {
      vertLines: {
        visible: false,
      },
      horzLines: {
        color: Colors.level4,
        style: LineStyle.Solid,
      },
    },
    rightPriceScale: {
      borderVisible: false,
      scaleMargins: {
        top: 0.1,
        bottom: 0.1,
      },
    },
    timeScale: {
      borderVisible: false,
      fixLeftEdge: true,
      fixRightEdge: true,
    },
    handleScale: false,
    handleScroll: false,
    localization: {
      priceFormatter: (price: number) => formatter(price),
    },
  });

  initChart();
  createChart(tvl.value);
});

// Watches
watch(tvl, (newTvl) => {
  createChart(newTvl);
});

// Methods
const initChart = (): void => {
  if (!chart) {
    return;
  }

  areaSerie = chart.addAreaSeries({
    priceFormat: {
      type: "price",
      precision: 6,
      minMove: 0.000001,
    },
    lineWidth: 2,
    lineType: LineType.WithSteps,
    lineColor: Colors.blue,
    topColor: "rgb(32, 129, 240, 0.2)",
    bottomColor: "rgba(32, 129, 240, 0)",
    lastValueVisible: false,
    priceLineVisible: false,
  });
};

const createChart = (newTvl: Tvl[]): void => {
  if (!chart || !areaSerie) {
    return;
  }

  const newSerie: LineData[] = chain(newTvl)
    .map((x) => ({
      time: x.timestamp as UTCTimestamp,
      value: x.tvl,
    }))
    .uniqWith((x, y) => x.time === y.time)
    .orderBy((c) => c.time, "asc")
    .value();

  if (newSerie.length > 0) {
    areaSerie.setData(newSerie);
  }

  chart.timeScale().fitContent();
};

const formatter = (y: number): string => {
  return `$${round(y, 1, "dollar")}${unit(y, "dollar")}`;
};
</script>

<style lang="scss" scoped>
@import "@/Styles/Variables.scss";

.tvl {
  ::v-deep(.card-body) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    .chart {
      height: 100%;
      z-index: 0;
    }
  }
}
</style>

<i18n lang="yaml" locale="en">
title: TVL
</i18n>
