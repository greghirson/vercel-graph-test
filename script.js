
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-08 14:00:00", "b": 897.6}, {"a": "2025-03-08 14:05:00", "b": 917.0}, {"a": "2025-03-08 14:10:00", "b": 1102.0}, {"a": "2025-03-08 14:15:00", "b": 1164.6}, {"a": "2025-03-08 14:20:00", "b": 1180.0}, {"a": "2025-03-08 14:25:00", "b": 1181.4}, {"a": "2025-03-08 14:30:00", "b": 1178.0}, {"a": "2025-03-08 14:35:00", "b": 1174.75}, {"a": "2025-03-08 14:40:00", "b": 1169.8}, {"a": "2025-03-08 14:45:00", "b": 1173.6}, {"a": "2025-03-08 14:50:00", "b": 1177.6}, {"a": "2025-03-08 14:55:00", "b": 1188.75}, {"a": "2025-03-08 15:00:00", "b": 1199.8}, {"a": "2025-03-08 15:05:00", "b": 1212.75}, {"a": "2025-03-08 15:10:00", "b": 1246.2}, {"a": "2025-03-08 15:15:00", "b": 1260.75}, {"a": "2025-03-08 15:20:00", "b": 1246.0}, {"a": "2025-03-08 15:25:00", "b": 1221.4}, {"a": "2025-03-08 15:30:00", "b": 1175.8}, {"a": "2025-03-08 15:35:00", "b": 1135.5}, {"a": "2025-03-08 15:40:00", "b": 1098.4}, {"a": "2025-03-08 15:45:00", "b": 1054.6}, {"a": "2025-03-08 15:50:00", "b": 1029.2}, {"a": "2025-03-08 15:55:00", "b": 986.2}, {"a": "2025-03-08 16:00:00", "b": 980.0}, {"a": "2025-03-08 16:05:00", "b": 1004.0}, {"a": "2025-03-08 16:10:00", "b": 991.6}, {"a": "2025-03-08 16:15:00", "b": 954.6}, {"a": "2025-03-08 16:20:00", "b": 924.6}, {"a": "2025-03-08 16:25:00", "b": 892.8}, {"a": "2025-03-08 16:30:00", "b": 854.8}, {"a": "2025-03-08 16:35:00", "b": 854.25}, {"a": "2025-03-08 16:40:00", "b": 869.6}, {"a": "2025-03-08 16:45:00", "b": 863.0}, {"a": "2025-03-08 16:50:00", "b": 850.5}, {"a": "2025-03-08 16:55:00", "b": 947.4}, {"a": "2025-03-08 17:00:00", "b": 979.0}, {"a": "2025-03-08 17:05:00", "b": 932.8}, {"a": "2025-03-08 17:10:00", "b": 872.6}, {"a": "2025-03-08 17:15:00", "b": 816.2}, {"a": "2025-03-08 17:20:00", "b": 780.4}, {"a": "2025-03-08 17:25:00", "b": 770.4}, {"a": "2025-03-08 17:30:00", "b": 764.0}, {"a": "2025-03-08 17:35:00", "b": 748.4}, {"a": "2025-03-08 17:40:00", "b": 738.5}, {"a": "2025-03-08 17:45:00", "b": 742.0}, {"a": "2025-03-08 17:50:00", "b": 738.6}, {"a": "2025-03-08 17:55:00", "b": 733.8}, {"a": "2025-03-08 18:00:00", "b": 723.5}, {"a": "2025-03-08 18:05:00", "b": 718.0}, {"a": "2025-03-08 18:10:00", "b": 719.6666666666666}, {"a": "2025-03-08 18:15:00", "b": 724.0}, {"a": "2025-03-08 18:20:00", "b": 729.4}, {"a": "2025-03-08 18:25:00", "b": 744.8}, {"a": "2025-03-08 18:30:00", "b": 763.5}, {"a": "2025-03-08 18:35:00", "b": 779.75}, {"a": "2025-03-08 18:40:00", "b": 781.5}, {"a": "2025-03-08 18:45:00", "b": 790.8}, {"a": "2025-03-08 18:50:00", "b": 801.75}, {"a": "2025-03-08 18:55:00", "b": 814.4}, {"a": "2025-03-08 19:00:00", "b": 805.2}, {"a": "2025-03-08 19:05:00", "b": 810.8}, {"a": "2025-03-08 19:10:00", "b": 814.2}, {"a": "2025-03-08 19:15:00", "b": 796.25}, {"a": "2025-03-08 19:20:00", "b": 796.0}, {"a": "2025-03-08 19:25:00", "b": 795.5}, {"a": "2025-03-08 19:30:00", "b": 791.6}, {"a": "2025-03-08 19:35:00", "b": 782.5}, {"a": "2025-03-08 19:40:00", "b": 777.2}, {"a": "2025-03-08 19:45:00", "b": 763.0}, {"a": "2025-03-08 19:50:00", "b": 759.25}, {"a": "2025-03-08 19:55:00", "b": 761.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    