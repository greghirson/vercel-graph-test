
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-07 23:00:00", "b": 813.6666666666666}, {"a": "2024-12-07 23:05:00", "b": 806.2}, {"a": "2024-12-07 23:10:00", "b": 790.4}, {"a": "2024-12-07 23:15:00", "b": 795.6}, {"a": "2024-12-07 23:20:00", "b": 785.6}, {"a": "2024-12-07 23:25:00", "b": 777.4}, {"a": "2024-12-07 23:30:00", "b": 768.5}, {"a": "2024-12-07 23:35:00", "b": 765.25}, {"a": "2024-12-07 23:40:00", "b": 756.2}, {"a": "2024-12-07 23:45:00", "b": 750.0}, {"a": "2024-12-07 23:50:00", "b": 748.6}, {"a": "2024-12-07 23:55:00", "b": 736.0}, {"a": "2024-12-08 00:00:00", "b": 734.5}, {"a": "2024-12-08 00:05:00", "b": 723.75}, {"a": "2024-12-08 00:10:00", "b": 706.4}, {"a": "2024-12-08 00:15:00", "b": 653.0}, {"a": "2024-12-08 00:20:00", "b": 652.8}, {"a": "2024-12-08 00:25:00", "b": 639.0}, {"a": "2024-12-08 00:30:00", "b": 611.4}, {"a": "2024-12-08 00:35:00", "b": 556.2}, {"a": "2024-12-08 00:40:00", "b": 518.0}, {"a": "2024-12-08 00:45:00", "b": 495.2}, {"a": "2024-12-08 00:50:00", "b": 486.0}, {"a": "2024-12-08 00:55:00", "b": 467.6}, {"a": "2024-12-08 01:00:00", "b": 468.5}, {"a": "2024-12-08 01:05:00", "b": 466.8}, {"a": "2024-12-08 01:10:00", "b": 472.5}, {"a": "2024-12-08 01:15:00", "b": 467.5}, {"a": "2024-12-08 01:20:00", "b": 457.0}, {"a": "2024-12-08 01:25:00", "b": 456.8}, {"a": "2024-12-08 01:30:00", "b": 463.6}, {"a": "2024-12-08 01:35:00", "b": 463.5}, {"a": "2024-12-08 01:40:00", "b": 455.75}, {"a": "2024-12-08 01:45:00", "b": 451.0}, {"a": "2024-12-08 01:50:00", "b": 439.25}, {"a": "2024-12-08 01:55:00", "b": 442.0}, {"a": "2024-12-08 02:00:00", "b": 439.8}, {"a": "2024-12-08 02:05:00", "b": 427.0}, {"a": "2024-12-08 02:10:00", "b": 422.6}, {"a": "2024-12-08 02:15:00", "b": 425.75}, {"a": "2024-12-08 02:20:00", "b": 422.25}, {"a": "2024-12-08 02:25:00", "b": 439.2}, {"a": "2024-12-08 02:30:00", "b": 432.6}, {"a": "2024-12-08 02:35:00", "b": 417.25}, {"a": "2024-12-08 02:40:00", "b": 414.6}, {"a": "2024-12-08 02:45:00", "b": 411.0}, {"a": "2024-12-08 02:50:00", "b": 408.5}, {"a": "2024-12-08 02:55:00", "b": 415.6666666666667}, {"a": "2024-12-08 03:00:00", "b": 422.25}, {"a": "2024-12-08 03:05:00", "b": 411.75}, {"a": "2024-12-08 03:10:00", "b": 406.8}, {"a": "2024-12-08 03:15:00", "b": 466.8}, {"a": "2024-12-08 03:20:00", "b": 483.8}, {"a": "2024-12-08 03:25:00", "b": 486.0}, {"a": "2024-12-08 03:30:00", "b": 462.0}, {"a": "2024-12-08 03:35:00", "b": 444.75}, {"a": "2024-12-08 03:40:00", "b": 417.6}, {"a": "2024-12-08 03:45:00", "b": 404.0}, {"a": "2024-12-08 03:50:00", "b": 402.25}, {"a": "2024-12-08 03:55:00", "b": 402.5}, {"a": "2024-12-08 04:00:00", "b": 402.6}, {"a": "2024-12-08 04:05:00", "b": 402.3333333333333}, {"a": "2024-12-08 04:10:00", "b": 402.5}, {"a": "2024-12-08 04:15:00", "b": 401.75}, {"a": "2024-12-08 04:20:00", "b": 402.0}, {"a": "2024-12-08 04:25:00", "b": 402.5}, {"a": "2024-12-08 04:30:00", "b": 402.0}, {"a": "2024-12-08 04:35:00", "b": 403.0}, {"a": "2024-12-08 04:40:00", "b": 402.0}, {"a": "2024-12-08 04:45:00", "b": 401.6666666666667}, {"a": "2024-12-08 04:50:00", "b": 401.5}, {"a": "2024-12-08 04:55:00", "b": 402.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    