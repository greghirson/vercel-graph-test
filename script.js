
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-08 11:00:00", "b": 1057.4}, {"a": "2025-03-08 11:05:00", "b": 1122.4}, {"a": "2025-03-08 11:10:00", "b": 1153.8}, {"a": "2025-03-08 11:15:00", "b": 1037.6}, {"a": "2025-03-08 11:20:00", "b": 976.6}, {"a": "2025-03-08 11:25:00", "b": 972.8}, {"a": "2025-03-08 11:30:00", "b": 920.4}, {"a": "2025-03-08 11:35:00", "b": 901.0}, {"a": "2025-03-08 11:40:00", "b": 876.2}, {"a": "2025-03-08 11:45:00", "b": 847.6}, {"a": "2025-03-08 11:50:00", "b": 834.3333333333334}, {"a": "2025-03-08 11:55:00", "b": 823.8}, {"a": "2025-03-08 12:00:00", "b": 810.8}, {"a": "2025-03-08 12:05:00", "b": 804.0}, {"a": "2025-03-08 12:10:00", "b": 791.8}, {"a": "2025-03-08 12:15:00", "b": 768.5}, {"a": "2025-03-08 12:20:00", "b": 763.2}, {"a": "2025-03-08 12:25:00", "b": 776.25}, {"a": "2025-03-08 12:30:00", "b": 793.2}, {"a": "2025-03-08 12:35:00", "b": 820.6}, {"a": "2025-03-08 12:40:00", "b": 836.6}, {"a": "2025-03-08 12:45:00", "b": 854.75}, {"a": "2025-03-08 12:50:00", "b": 856.6}, {"a": "2025-03-08 12:55:00", "b": 849.25}, {"a": "2025-03-08 13:00:00", "b": 847.0}, {"a": "2025-03-08 13:05:00", "b": 886.2}, {"a": "2025-03-08 13:10:00", "b": 935.4}, {"a": "2025-03-08 13:15:00", "b": 906.4}, {"a": "2025-03-08 13:20:00", "b": 900.25}, {"a": "2025-03-08 13:25:00", "b": 896.8}, {"a": "2025-03-08 13:30:00", "b": 895.0}, {"a": "2025-03-08 13:35:00", "b": 896.0}, {"a": "2025-03-08 13:40:00", "b": 888.25}, {"a": "2025-03-08 13:45:00", "b": 892.75}, {"a": "2025-03-08 13:50:00", "b": 884.6}, {"a": "2025-03-08 13:55:00", "b": 903.8}, {"a": "2025-03-08 14:00:00", "b": 897.6}, {"a": "2025-03-08 14:05:00", "b": 917.0}, {"a": "2025-03-08 14:10:00", "b": 1102.0}, {"a": "2025-03-08 14:15:00", "b": 1164.6}, {"a": "2025-03-08 14:20:00", "b": 1180.0}, {"a": "2025-03-08 14:25:00", "b": 1181.4}, {"a": "2025-03-08 14:30:00", "b": 1178.0}, {"a": "2025-03-08 14:35:00", "b": 1174.75}, {"a": "2025-03-08 14:40:00", "b": 1169.8}, {"a": "2025-03-08 14:45:00", "b": 1173.6}, {"a": "2025-03-08 14:50:00", "b": 1177.6}, {"a": "2025-03-08 14:55:00", "b": 1188.75}, {"a": "2025-03-08 15:00:00", "b": 1199.8}, {"a": "2025-03-08 15:05:00", "b": 1212.75}, {"a": "2025-03-08 15:10:00", "b": 1246.2}, {"a": "2025-03-08 15:15:00", "b": 1260.75}, {"a": "2025-03-08 15:20:00", "b": 1246.0}, {"a": "2025-03-08 15:25:00", "b": 1221.4}, {"a": "2025-03-08 15:30:00", "b": 1175.8}, {"a": "2025-03-08 15:35:00", "b": 1135.5}, {"a": "2025-03-08 15:40:00", "b": 1098.4}, {"a": "2025-03-08 15:45:00", "b": 1054.6}, {"a": "2025-03-08 15:50:00", "b": 1029.2}, {"a": "2025-03-08 15:55:00", "b": 986.2}, {"a": "2025-03-08 16:00:00", "b": 980.0}, {"a": "2025-03-08 16:05:00", "b": 1004.0}, {"a": "2025-03-08 16:10:00", "b": 991.6}, {"a": "2025-03-08 16:15:00", "b": 954.6}, {"a": "2025-03-08 16:20:00", "b": 924.6}, {"a": "2025-03-08 16:25:00", "b": 892.8}, {"a": "2025-03-08 16:30:00", "b": 854.8}, {"a": "2025-03-08 16:35:00", "b": 854.25}, {"a": "2025-03-08 16:40:00", "b": 869.6}, {"a": "2025-03-08 16:45:00", "b": 863.0}, {"a": "2025-03-08 16:50:00", "b": 850.5}, {"a": "2025-03-08 16:55:00", "b": 947.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    