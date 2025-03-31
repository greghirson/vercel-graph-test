
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-30 21:00:00", "b": 1223.8}, {"a": "2025-03-30 21:05:00", "b": 1210.4}, {"a": "2025-03-30 21:10:00", "b": 1203.6}, {"a": "2025-03-30 21:15:00", "b": 1206.2}, {"a": "2025-03-30 21:20:00", "b": 1198.0}, {"a": "2025-03-30 21:25:00", "b": 1174.0}, {"a": "2025-03-30 21:30:00", "b": 1162.5}, {"a": "2025-03-30 21:35:00", "b": 1154.4}, {"a": "2025-03-30 21:40:00", "b": 1146.0}, {"a": "2025-03-30 21:45:00", "b": 1129.0}, {"a": "2025-03-30 21:50:00", "b": 1112.8}, {"a": "2025-03-30 21:55:00", "b": 1121.2}, {"a": "2025-03-30 22:00:00", "b": 1107.3333333333333}, {"a": "2025-03-30 22:05:00", "b": 1103.2}, {"a": "2025-03-30 22:10:00", "b": 1099.2}, {"a": "2025-03-30 22:15:00", "b": 1081.5}, {"a": "2025-03-30 22:20:00", "b": 1077.0}, {"a": "2025-03-30 22:25:00", "b": 1078.4}, {"a": "2025-03-30 22:30:00", "b": 1090.2}, {"a": "2025-03-30 22:35:00", "b": 1086.4}, {"a": "2025-03-30 22:40:00", "b": 1064.25}, {"a": "2025-03-30 22:45:00", "b": 1068.5}, {"a": "2025-03-30 22:50:00", "b": 1056.8}, {"a": "2025-03-30 22:55:00", "b": 1051.0}, {"a": "2025-03-30 23:00:00", "b": 1019.5}, {"a": "2025-03-30 23:05:00", "b": 1036.6}, {"a": "2025-03-30 23:10:00", "b": 1055.6}, {"a": "2025-03-30 23:15:00", "b": 1031.4}, {"a": "2025-03-30 23:20:00", "b": 1006.0}, {"a": "2025-03-30 23:25:00", "b": 992.75}, {"a": "2025-03-30 23:30:00", "b": 973.5}, {"a": "2025-03-30 23:35:00", "b": 968.2}, {"a": "2025-03-30 23:40:00", "b": 965.8}, {"a": "2025-03-30 23:45:00", "b": 936.0}, {"a": "2025-03-30 23:50:00", "b": 917.0}, {"a": "2025-03-30 23:55:00", "b": 918.2}, {"a": "2025-03-31 00:00:00", "b": 900.6}, {"a": "2025-03-31 00:05:00", "b": 908.0}, {"a": "2025-03-31 00:10:00", "b": 901.6}, {"a": "2025-03-31 00:15:00", "b": 889.2}, {"a": "2025-03-31 00:20:00", "b": 886.0}, {"a": "2025-03-31 00:25:00", "b": 873.25}, {"a": "2025-03-31 00:30:00", "b": 858.4}, {"a": "2025-03-31 00:35:00", "b": 850.75}, {"a": "2025-03-31 00:40:00", "b": 852.6}, {"a": "2025-03-31 00:45:00", "b": 835.6}, {"a": "2025-03-31 00:50:00", "b": 841.4}, {"a": "2025-03-31 00:55:00", "b": 842.3333333333334}, {"a": "2025-03-31 01:00:00", "b": 832.25}, {"a": "2025-03-31 01:05:00", "b": 825.6}, {"a": "2025-03-31 01:10:00", "b": 833.4}, {"a": "2025-03-31 01:15:00", "b": 845.2}, {"a": "2025-03-31 01:20:00", "b": 841.0}, {"a": "2025-03-31 01:25:00", "b": 832.8}, {"a": "2025-03-31 01:30:00", "b": 823.0}, {"a": "2025-03-31 01:35:00", "b": 813.0}, {"a": "2025-03-31 01:40:00", "b": 815.6}, {"a": "2025-03-31 01:45:00", "b": 811.5}, {"a": "2025-03-31 01:50:00", "b": 802.75}, {"a": "2025-03-31 01:55:00", "b": 799.6666666666666}, {"a": "2025-03-31 02:00:00", "b": 797.6}, {"a": "2025-03-31 02:05:00", "b": 797.0}, {"a": "2025-03-31 02:10:00", "b": 791.0}, {"a": "2025-03-31 02:15:00", "b": 799.0}, {"a": "2025-03-31 02:20:00", "b": 794.8}, {"a": "2025-03-31 02:25:00", "b": 781.8}, {"a": "2025-03-31 02:30:00", "b": 770.6666666666666}, {"a": "2025-03-31 02:35:00", "b": 770.25}, {"a": "2025-03-31 02:40:00", "b": 777.3333333333334}, {"a": "2025-03-31 02:45:00", "b": 778.5}, {"a": "2025-03-31 02:50:00", "b": 773.2}, {"a": "2025-03-31 02:55:00", "b": 752.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    