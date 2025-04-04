
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-03 19:00:00", "b": 560.0}, {"a": "2025-04-03 19:05:00", "b": 592.8}, {"a": "2025-04-03 19:10:00", "b": 612.5}, {"a": "2025-04-03 19:15:00", "b": 634.8}, {"a": "2025-04-03 19:20:00", "b": 650.8}, {"a": "2025-04-03 19:25:00", "b": 656.25}, {"a": "2025-04-03 19:30:00", "b": 644.2}, {"a": "2025-04-03 19:35:00", "b": 684.0}, {"a": "2025-04-03 19:40:00", "b": 652.0}, {"a": "2025-04-03 19:45:00", "b": 665.6}, {"a": "2025-04-03 19:50:00", "b": 648.4}, {"a": "2025-04-03 19:55:00", "b": 624.0}, {"a": "2025-04-03 20:00:00", "b": 622.8}, {"a": "2025-04-03 20:05:00", "b": 621.75}, {"a": "2025-04-03 20:10:00", "b": 614.75}, {"a": "2025-04-03 20:15:00", "b": 583.6}, {"a": "2025-04-03 20:20:00", "b": 566.75}, {"a": "2025-04-03 20:25:00", "b": 575.2}, {"a": "2025-04-03 20:30:00", "b": 570.75}, {"a": "2025-04-03 20:35:00", "b": 559.3333333333334}, {"a": "2025-04-03 20:40:00", "b": 560.0}, {"a": "2025-04-03 20:45:00", "b": 561.8}, {"a": "2025-04-03 20:50:00", "b": 550.0}, {"a": "2025-04-03 20:55:00", "b": 556.75}, {"a": "2025-04-03 21:00:00", "b": 564.6}, {"a": "2025-04-03 21:05:00", "b": 560.75}, {"a": "2025-04-03 21:10:00", "b": 547.5}, {"a": "2025-04-03 21:15:00", "b": 537.0}, {"a": "2025-04-03 21:20:00", "b": 542.4}, {"a": "2025-04-03 21:25:00", "b": 536.6}, {"a": "2025-04-03 21:30:00", "b": 522.6}, {"a": "2025-04-03 21:35:00", "b": 529.75}, {"a": "2025-04-03 21:40:00", "b": 527.75}, {"a": "2025-04-03 21:45:00", "b": 512.2}, {"a": "2025-04-03 21:50:00", "b": 511.4}, {"a": "2025-04-03 21:55:00", "b": 505.2}, {"a": "2025-04-03 22:00:00", "b": 519.2}, {"a": "2025-04-03 22:05:00", "b": 519.8}, {"a": "2025-04-03 22:10:00", "b": 503.4}, {"a": "2025-04-03 22:15:00", "b": 523.0}, {"a": "2025-04-03 22:20:00", "b": 541.5}, {"a": "2025-04-03 22:25:00", "b": 543.3333333333334}, {"a": "2025-04-03 22:30:00", "b": 546.5}, {"a": "2025-04-03 22:35:00", "b": 542.25}, {"a": "2025-04-03 22:40:00", "b": 536.2}, {"a": "2025-04-03 22:45:00", "b": 540.6}, {"a": "2025-04-03 22:50:00", "b": 534.0}, {"a": "2025-04-03 22:55:00", "b": 558.4}, {"a": "2025-04-03 23:00:00", "b": 478.6}, {"a": "2025-04-03 23:05:00", "b": 464.5}, {"a": "2025-04-03 23:10:00", "b": 463.0}, {"a": "2025-04-03 23:15:00", "b": 438.6}, {"a": "2025-04-03 23:20:00", "b": 435.0}, {"a": "2025-04-03 23:25:00", "b": 425.6666666666667}, {"a": "2025-04-03 23:30:00", "b": 410.0}, {"a": "2025-04-03 23:35:00", "b": 408.0}, {"a": "2025-04-03 23:40:00", "b": 417.2}, {"a": "2025-04-03 23:45:00", "b": 419.3333333333333}, {"a": "2025-04-03 23:50:00", "b": 408.5}, {"a": "2025-04-03 23:55:00", "b": 408.0}, {"a": "2025-04-04 00:00:00", "b": 407.5}, {"a": "2025-04-04 00:05:00", "b": 406.25}, {"a": "2025-04-04 00:10:00", "b": 422.8}, {"a": "2025-04-04 00:15:00", "b": 409.2}, {"a": "2025-04-04 00:20:00", "b": 407.0}, {"a": "2025-04-04 00:25:00", "b": 410.0}, {"a": "2025-04-04 00:30:00", "b": 404.75}, {"a": "2025-04-04 00:35:00", "b": 403.0}, {"a": "2025-04-04 00:40:00", "b": 402.0}, {"a": "2025-04-04 00:50:00", "b": 402.0}, {"a": "2025-04-04 00:55:00", "b": 401.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    