
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-02-03 22:00:00", "b": 662.4}, {"a": "2025-02-03 22:05:00", "b": 687.0}, {"a": "2025-02-03 22:10:00", "b": 679.0}, {"a": "2025-02-03 22:15:00", "b": 676.8}, {"a": "2025-02-03 22:20:00", "b": 654.4}, {"a": "2025-02-03 22:25:00", "b": 641.8}, {"a": "2025-02-03 22:30:00", "b": 632.3333333333334}, {"a": "2025-02-03 22:35:00", "b": 626.5}, {"a": "2025-02-03 22:40:00", "b": 620.25}, {"a": "2025-02-03 22:45:00", "b": 621.4}, {"a": "2025-02-03 22:50:00", "b": 607.25}, {"a": "2025-02-03 22:55:00", "b": 600.0}, {"a": "2025-02-03 23:00:00", "b": 592.8}, {"a": "2025-02-03 23:05:00", "b": 588.25}, {"a": "2025-02-03 23:10:00", "b": 583.4}, {"a": "2025-02-03 23:15:00", "b": 570.75}, {"a": "2025-02-03 23:20:00", "b": 570.75}, {"a": "2025-02-03 23:25:00", "b": 568.2}, {"a": "2025-02-03 23:30:00", "b": 566.0}, {"a": "2025-02-03 23:35:00", "b": 563.4}, {"a": "2025-02-03 23:40:00", "b": 558.8}, {"a": "2025-02-03 23:45:00", "b": 547.6}, {"a": "2025-02-03 23:50:00", "b": 543.4}, {"a": "2025-02-03 23:55:00", "b": 543.8}, {"a": "2025-02-04 00:00:00", "b": 539.5}, {"a": "2025-02-04 00:05:00", "b": 531.75}, {"a": "2025-02-04 00:10:00", "b": 522.4}, {"a": "2025-02-04 00:15:00", "b": 516.2}, {"a": "2025-02-04 00:20:00", "b": 515.4}, {"a": "2025-02-04 00:25:00", "b": 518.5}, {"a": "2025-02-04 00:30:00", "b": 512.6}, {"a": "2025-02-04 00:35:00", "b": 505.2}, {"a": "2025-02-04 00:40:00", "b": 510.25}, {"a": "2025-02-04 00:45:00", "b": 508.0}, {"a": "2025-02-04 00:50:00", "b": 499.0}, {"a": "2025-02-04 00:55:00", "b": 500.6}, {"a": "2025-02-04 01:00:00", "b": 495.0}, {"a": "2025-02-04 01:05:00", "b": 495.0}, {"a": "2025-02-04 01:10:00", "b": 485.2}, {"a": "2025-02-04 01:15:00", "b": 478.2}, {"a": "2025-02-04 01:20:00", "b": 478.0}, {"a": "2025-02-04 01:25:00", "b": 469.0}, {"a": "2025-02-04 01:30:00", "b": 469.0}, {"a": "2025-02-04 01:35:00", "b": 462.3333333333333}, {"a": "2025-02-04 01:40:00", "b": 456.0}, {"a": "2025-02-04 01:45:00", "b": 457.2}, {"a": "2025-02-04 01:50:00", "b": 455.0}, {"a": "2025-02-04 01:55:00", "b": 440.25}, {"a": "2025-02-04 02:00:00", "b": 446.25}, {"a": "2025-02-04 02:05:00", "b": 444.0}, {"a": "2025-02-04 02:10:00", "b": 430.0}, {"a": "2025-02-04 02:15:00", "b": 424.4}, {"a": "2025-02-04 02:20:00", "b": 425.6}, {"a": "2025-02-04 02:25:00", "b": 429.25}, {"a": "2025-02-04 02:30:00", "b": 423.2}, {"a": "2025-02-04 02:35:00", "b": 421.8}, {"a": "2025-02-04 02:40:00", "b": 420.4}, {"a": "2025-02-04 02:45:00", "b": 417.6}, {"a": "2025-02-04 02:50:00", "b": 421.2}, {"a": "2025-02-04 02:55:00", "b": 417.0}, {"a": "2025-02-04 03:00:00", "b": 411.5}, {"a": "2025-02-04 03:05:00", "b": 410.0}, {"a": "2025-02-04 03:10:00", "b": 408.5}, {"a": "2025-02-04 03:15:00", "b": 407.5}, {"a": "2025-02-04 03:20:00", "b": 406.5}, {"a": "2025-02-04 03:25:00", "b": 407.5}, {"a": "2025-02-04 03:30:00", "b": 407.3333333333333}, {"a": "2025-02-04 03:35:00", "b": 405.6666666666667}, {"a": "2025-02-04 03:40:00", "b": 407.0}, {"a": "2025-02-04 03:45:00", "b": 406.75}, {"a": "2025-02-04 03:50:00", "b": 408.0}, {"a": "2025-02-04 03:55:00", "b": 406.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    