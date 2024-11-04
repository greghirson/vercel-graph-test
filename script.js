
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-03 15:40:00", "b": 701.2}, {"a": "2024-11-03 15:45:00", "b": 701.0}, {"a": "2024-11-03 15:50:00", "b": 700.0}, {"a": "2024-11-03 15:55:00", "b": 695.25}, {"a": "2024-11-03 16:00:00", "b": 699.0}, {"a": "2024-11-03 16:05:00", "b": 699.6}, {"a": "2024-11-03 16:10:00", "b": 707.25}, {"a": "2024-11-03 16:15:00", "b": 738.4}, {"a": "2024-11-03 16:20:00", "b": 792.4}, {"a": "2024-11-03 16:25:00", "b": 803.5}, {"a": "2024-11-03 16:30:00", "b": 790.25}, {"a": "2024-11-03 16:35:00", "b": 781.6666666666666}, {"a": "2024-11-03 16:40:00", "b": 781.25}, {"a": "2024-11-03 16:45:00", "b": 786.25}, {"a": "2024-11-03 16:50:00", "b": 794.2}, {"a": "2024-11-03 16:55:00", "b": 787.6}, {"a": "2024-11-03 17:00:00", "b": 794.8}, {"a": "2024-11-03 17:05:00", "b": 808.6}, {"a": "2024-11-03 17:10:00", "b": 809.6666666666666}, {"a": "2024-11-03 17:15:00", "b": 780.4}, {"a": "2024-11-03 17:20:00", "b": 767.0}, {"a": "2024-11-03 17:25:00", "b": 787.4}, {"a": "2024-11-03 17:30:00", "b": 790.0}, {"a": "2024-11-03 17:35:00", "b": 780.8}, {"a": "2024-11-03 17:40:00", "b": 765.2}, {"a": "2024-11-03 17:45:00", "b": 797.0}, {"a": "2024-11-03 17:50:00", "b": 777.2}, {"a": "2024-11-03 17:55:00", "b": 777.0}, {"a": "2024-11-03 18:00:00", "b": 761.4}, {"a": "2024-11-03 18:05:00", "b": 760.6666666666666}, {"a": "2024-11-03 18:10:00", "b": 759.0}, {"a": "2024-11-03 18:15:00", "b": 746.5}, {"a": "2024-11-03 18:20:00", "b": 733.5}, {"a": "2024-11-03 18:25:00", "b": 762.8}, {"a": "2024-11-03 18:30:00", "b": 807.0}, {"a": "2024-11-03 18:35:00", "b": 848.8}, {"a": "2024-11-03 18:40:00", "b": 922.0}, {"a": "2024-11-03 18:45:00", "b": 1030.25}, {"a": "2024-11-03 18:50:00", "b": 1058.6}, {"a": "2024-11-03 18:55:00", "b": 1071.8}, {"a": "2024-11-03 19:00:00", "b": 1052.4}, {"a": "2024-11-03 19:05:00", "b": 1043.2}, {"a": "2024-11-03 19:10:00", "b": 889.6}, {"a": "2024-11-03 19:15:00", "b": 902.4}, {"a": "2024-11-03 19:20:00", "b": 904.4}, {"a": "2024-11-03 19:25:00", "b": 896.6666666666666}, {"a": "2024-11-03 19:30:00", "b": 896.25}, {"a": "2024-11-03 19:35:00", "b": 894.6}, {"a": "2024-11-03 19:40:00", "b": 890.75}, {"a": "2024-11-03 19:45:00", "b": 888.0}, {"a": "2024-11-03 19:50:00", "b": 883.8}, {"a": "2024-11-03 19:55:00", "b": 852.4}, {"a": "2024-11-03 20:00:00", "b": 852.8}, {"a": "2024-11-03 20:05:00", "b": 867.0}, {"a": "2024-11-03 20:10:00", "b": 874.4}, {"a": "2024-11-03 20:15:00", "b": 854.25}, {"a": "2024-11-03 20:20:00", "b": 824.0}, {"a": "2024-11-03 20:25:00", "b": 820.75}, {"a": "2024-11-03 20:30:00", "b": 819.8}, {"a": "2024-11-03 20:35:00", "b": 838.0}, {"a": "2024-11-03 20:40:00", "b": 835.2}, {"a": "2024-11-03 20:45:00", "b": 830.4}, {"a": "2024-11-03 20:50:00", "b": 840.8}, {"a": "2024-11-03 20:55:00", "b": 829.75}, {"a": "2024-11-03 21:00:00", "b": 821.6}, {"a": "2024-11-03 21:05:00", "b": 826.6}, {"a": "2024-11-03 21:10:00", "b": 828.25}, {"a": "2024-11-03 21:15:00", "b": 799.2}, {"a": "2024-11-03 21:20:00", "b": 803.4}, {"a": "2024-11-03 21:25:00", "b": 822.75}, {"a": "2024-11-03 21:30:00", "b": 816.8}, {"a": "2024-11-03 21:35:00", "b": 801.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    