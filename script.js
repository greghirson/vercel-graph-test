
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-20 01:10:00", "b": 839.0}, {"a": "2024-10-20 01:15:00", "b": 861.0}, {"a": "2024-10-20 01:20:00", "b": 879.6}, {"a": "2024-10-20 01:25:00", "b": 1125.4}, {"a": "2024-10-20 01:30:00", "b": 1498.0}, {"a": "2024-10-20 01:35:00", "b": 1013.4}, {"a": "2024-10-20 01:40:00", "b": 1058.6}, {"a": "2024-10-20 01:45:00", "b": 1046.2}, {"a": "2024-10-20 01:50:00", "b": 1385.6}, {"a": "2024-10-20 01:55:00", "b": 1401.4}, {"a": "2024-10-20 02:00:00", "b": 1162.6}, {"a": "2024-10-20 02:05:00", "b": 1037.8}, {"a": "2024-10-20 02:10:00", "b": 1149.0}, {"a": "2024-10-20 02:15:00", "b": 1772.6}, {"a": "2024-10-20 02:20:00", "b": 1422.4}, {"a": "2024-10-20 02:25:00", "b": 1221.2}, {"a": "2024-10-20 02:30:00", "b": 1214.2}, {"a": "2024-10-20 02:35:00", "b": 1272.6}, {"a": "2024-10-20 02:40:00", "b": 1009.0}, {"a": "2024-10-20 02:45:00", "b": 1034.4}, {"a": "2024-10-20 02:50:00", "b": 1114.0}, {"a": "2024-10-20 02:55:00", "b": 1857.2}, {"a": "2024-10-20 03:00:00", "b": 1051.6}, {"a": "2024-10-20 03:05:00", "b": 1095.2}, {"a": "2024-10-20 03:10:00", "b": 1012.6}, {"a": "2024-10-20 03:15:00", "b": 1543.6}, {"a": "2024-10-20 03:20:00", "b": 833.2}, {"a": "2024-10-20 03:25:00", "b": 1022.8}, {"a": "2024-10-20 03:30:00", "b": 1269.6}, {"a": "2024-10-20 03:35:00", "b": 1247.6}, {"a": "2024-10-20 03:40:00", "b": 1032.4}, {"a": "2024-10-20 03:45:00", "b": 1003.0}, {"a": "2024-10-20 03:50:00", "b": 1254.6}, {"a": "2024-10-20 03:55:00", "b": 909.0}, {"a": "2024-10-20 04:00:00", "b": 902.2}, {"a": "2024-10-20 04:05:00", "b": 928.0}, {"a": "2024-10-20 04:10:00", "b": 1074.2}, {"a": "2024-10-20 04:15:00", "b": 873.4}, {"a": "2024-10-20 04:20:00", "b": 872.5}, {"a": "2024-10-20 04:25:00", "b": 859.25}, {"a": "2024-10-20 04:30:00", "b": 850.6}, {"a": "2024-10-20 04:35:00", "b": 821.75}, {"a": "2024-10-20 04:40:00", "b": 812.4}, {"a": "2024-10-20 04:45:00", "b": 772.0}, {"a": "2024-10-20 04:50:00", "b": 749.6}, {"a": "2024-10-20 04:55:00", "b": 736.25}, {"a": "2024-10-20 05:00:00", "b": 733.0}, {"a": "2024-10-20 05:05:00", "b": 732.0}, {"a": "2024-10-20 05:10:00", "b": 730.25}, {"a": "2024-10-20 05:15:00", "b": 724.6}, {"a": "2024-10-20 05:20:00", "b": 724.3333333333334}, {"a": "2024-10-20 05:25:00", "b": 727.25}, {"a": "2024-10-20 05:30:00", "b": 723.0}, {"a": "2024-10-20 05:35:00", "b": 729.5}, {"a": "2024-10-20 05:40:00", "b": 729.8}, {"a": "2024-10-20 05:45:00", "b": 726.2}, {"a": "2024-10-20 05:50:00", "b": 720.2}, {"a": "2024-10-20 05:55:00", "b": 717.5}, {"a": "2024-10-20 06:00:00", "b": 733.2}, {"a": "2024-10-20 06:05:00", "b": 726.8}, {"a": "2024-10-20 06:10:00", "b": 721.8}, {"a": "2024-10-20 06:15:00", "b": 723.0}, {"a": "2024-10-20 06:20:00", "b": 717.8}, {"a": "2024-10-20 06:25:00", "b": 708.8}, {"a": "2024-10-20 06:30:00", "b": 723.6}, {"a": "2024-10-20 06:35:00", "b": 729.3333333333334}, {"a": "2024-10-20 06:40:00", "b": 725.2}, {"a": "2024-10-20 06:45:00", "b": 717.75}, {"a": "2024-10-20 06:50:00", "b": 713.2}, {"a": "2024-10-20 06:55:00", "b": 724.0}, {"a": "2024-10-20 07:00:00", "b": 722.6}, {"a": "2024-10-20 07:05:00", "b": 714.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    