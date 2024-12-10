
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-10 03:00:00", "b": 518.0}, {"a": "2024-12-10 03:05:00", "b": 520.6666666666666}, {"a": "2024-12-10 03:10:00", "b": 521.8}, {"a": "2024-12-10 03:15:00", "b": 520.8}, {"a": "2024-12-10 03:20:00", "b": 512.5}, {"a": "2024-12-10 03:25:00", "b": 527.0}, {"a": "2024-12-10 03:30:00", "b": 534.6}, {"a": "2024-12-10 03:35:00", "b": 533.4}, {"a": "2024-12-10 03:40:00", "b": 537.2}, {"a": "2024-12-10 03:45:00", "b": 535.4}, {"a": "2024-12-10 03:50:00", "b": 538.0}, {"a": "2024-12-10 03:55:00", "b": 619.6}, {"a": "2024-12-10 04:00:00", "b": 593.8}, {"a": "2024-12-10 04:05:00", "b": 588.0}, {"a": "2024-12-10 04:10:00", "b": 555.4}, {"a": "2024-12-10 04:15:00", "b": 541.2}, {"a": "2024-12-10 04:20:00", "b": 530.8}, {"a": "2024-12-10 04:25:00", "b": 522.4}, {"a": "2024-12-10 04:30:00", "b": 534.2}, {"a": "2024-12-10 04:35:00", "b": 533.75}, {"a": "2024-12-10 04:40:00", "b": 539.25}, {"a": "2024-12-10 04:45:00", "b": 525.6}, {"a": "2024-12-10 04:50:00", "b": 535.0}, {"a": "2024-12-10 04:55:00", "b": 550.75}, {"a": "2024-12-10 05:00:00", "b": 545.75}, {"a": "2024-12-10 05:05:00", "b": 536.25}, {"a": "2024-12-10 05:10:00", "b": 547.0}, {"a": "2024-12-10 05:15:00", "b": 546.0}, {"a": "2024-12-10 05:20:00", "b": 553.5}, {"a": "2024-12-10 05:25:00", "b": 556.0}, {"a": "2024-12-10 05:30:00", "b": 547.2}, {"a": "2024-12-10 05:35:00", "b": 537.8}, {"a": "2024-12-10 05:40:00", "b": 535.0}, {"a": "2024-12-10 05:45:00", "b": 534.4}, {"a": "2024-12-10 05:50:00", "b": 533.6}, {"a": "2024-12-10 05:55:00", "b": 531.4}, {"a": "2024-12-10 06:00:00", "b": 539.6}, {"a": "2024-12-10 06:05:00", "b": 545.6}, {"a": "2024-12-10 06:10:00", "b": 555.3333333333334}, {"a": "2024-12-10 06:15:00", "b": 549.0}, {"a": "2024-12-10 06:20:00", "b": 550.6666666666666}, {"a": "2024-12-10 06:25:00", "b": 542.0}, {"a": "2024-12-10 06:30:00", "b": 541.75}, {"a": "2024-12-10 06:35:00", "b": 552.5}, {"a": "2024-12-10 06:40:00", "b": 547.5}, {"a": "2024-12-10 06:45:00", "b": 559.2}, {"a": "2024-12-10 06:50:00", "b": 553.2}, {"a": "2024-12-10 06:55:00", "b": 559.4}, {"a": "2024-12-10 07:00:00", "b": 596.0}, {"a": "2024-12-10 07:05:00", "b": 634.75}, {"a": "2024-12-10 07:10:00", "b": 620.8}, {"a": "2024-12-10 07:15:00", "b": 624.6}, {"a": "2024-12-10 07:20:00", "b": 654.4}, {"a": "2024-12-10 07:25:00", "b": 652.0}, {"a": "2024-12-10 07:30:00", "b": 645.6}, {"a": "2024-12-10 07:35:00", "b": 666.0}, {"a": "2024-12-10 07:40:00", "b": 664.6}, {"a": "2024-12-10 07:45:00", "b": 670.0}, {"a": "2024-12-10 07:50:00", "b": 682.0}, {"a": "2024-12-10 07:55:00", "b": 700.2}, {"a": "2024-12-10 08:00:00", "b": 694.25}, {"a": "2024-12-10 08:05:00", "b": 687.0}, {"a": "2024-12-10 08:10:00", "b": 679.5}, {"a": "2024-12-10 08:15:00", "b": 660.0}, {"a": "2024-12-10 08:20:00", "b": 660.0}, {"a": "2024-12-10 08:25:00", "b": 666.75}, {"a": "2024-12-10 08:30:00", "b": 665.6}, {"a": "2024-12-10 08:35:00", "b": 663.5}, {"a": "2024-12-10 08:40:00", "b": 663.6}, {"a": "2024-12-10 08:45:00", "b": 658.4}, {"a": "2024-12-10 08:50:00", "b": 647.6666666666666}, {"a": "2024-12-10 08:55:00", "b": 641.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    