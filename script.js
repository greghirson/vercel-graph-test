
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-08 09:00:00", "b": 538.75}, {"a": "2025-01-08 09:05:00", "b": 526.2}, {"a": "2025-01-08 09:10:00", "b": 527.8}, {"a": "2025-01-08 09:15:00", "b": 548.2}, {"a": "2025-01-08 09:20:00", "b": 567.0}, {"a": "2025-01-08 09:25:00", "b": 594.6}, {"a": "2025-01-08 09:30:00", "b": 596.0}, {"a": "2025-01-08 09:35:00", "b": 601.6666666666666}, {"a": "2025-01-08 09:40:00", "b": 598.6}, {"a": "2025-01-08 09:45:00", "b": 593.2}, {"a": "2025-01-08 09:50:00", "b": 575.0}, {"a": "2025-01-08 09:55:00", "b": 550.4}, {"a": "2025-01-08 10:00:00", "b": 544.2}, {"a": "2025-01-08 10:05:00", "b": 536.6}, {"a": "2025-01-08 10:10:00", "b": 528.2}, {"a": "2025-01-08 10:15:00", "b": 527.3333333333334}, {"a": "2025-01-08 10:20:00", "b": 546.0}, {"a": "2025-01-08 10:25:00", "b": 1258.8}, {"a": "2025-01-08 10:30:00", "b": 1059.6}, {"a": "2025-01-08 10:35:00", "b": 1237.2}, {"a": "2025-01-08 10:40:00", "b": 835.8}, {"a": "2025-01-08 10:45:00", "b": 678.2}, {"a": "2025-01-08 10:50:00", "b": 1066.0}, {"a": "2025-01-08 10:55:00", "b": 938.0}, {"a": "2025-01-08 11:00:00", "b": 821.2}, {"a": "2025-01-08 11:05:00", "b": 742.6}, {"a": "2025-01-08 11:10:00", "b": 629.4}, {"a": "2025-01-08 11:15:00", "b": 590.0}, {"a": "2025-01-08 11:20:00", "b": 561.0}, {"a": "2025-01-08 11:25:00", "b": 539.8}, {"a": "2025-01-08 11:30:00", "b": 548.2}, {"a": "2025-01-08 11:35:00", "b": 552.8}, {"a": "2025-01-08 11:40:00", "b": 545.2}, {"a": "2025-01-08 11:45:00", "b": 529.2}, {"a": "2025-01-08 11:50:00", "b": 523.25}, {"a": "2025-01-08 11:55:00", "b": 534.8}, {"a": "2025-01-08 12:00:00", "b": 540.6}, {"a": "2025-01-08 12:05:00", "b": 585.0}, {"a": "2025-01-08 12:10:00", "b": 1270.8}, {"a": "2025-01-08 12:15:00", "b": 1395.2}, {"a": "2025-01-08 12:20:00", "b": 1054.8}, {"a": "2025-01-08 12:25:00", "b": 776.0}, {"a": "2025-01-08 12:30:00", "b": 693.8}, {"a": "2025-01-08 12:35:00", "b": 694.8}, {"a": "2025-01-08 12:40:00", "b": 680.8}, {"a": "2025-01-08 12:45:00", "b": 617.4}, {"a": "2025-01-08 12:50:00", "b": 580.25}, {"a": "2025-01-08 12:55:00", "b": 589.8}, {"a": "2025-01-08 13:00:00", "b": 557.2}, {"a": "2025-01-08 13:05:00", "b": 560.4}, {"a": "2025-01-08 13:10:00", "b": 580.0}, {"a": "2025-01-08 13:15:00", "b": 545.0}, {"a": "2025-01-08 13:20:00", "b": 545.75}, {"a": "2025-01-08 13:25:00", "b": 544.2}, {"a": "2025-01-08 13:30:00", "b": 550.2}, {"a": "2025-01-08 13:35:00", "b": 546.8}, {"a": "2025-01-08 13:40:00", "b": 536.8}, {"a": "2025-01-08 13:45:00", "b": 541.2}, {"a": "2025-01-08 13:50:00", "b": 588.25}, {"a": "2025-01-08 13:55:00", "b": 605.0}, {"a": "2025-01-08 14:00:00", "b": 1094.2}, {"a": "2025-01-08 14:05:00", "b": 1193.0}, {"a": "2025-01-08 14:10:00", "b": 643.2}, {"a": "2025-01-08 14:15:00", "b": 767.4}, {"a": "2025-01-08 14:20:00", "b": 807.0}, {"a": "2025-01-08 14:25:00", "b": 811.2}, {"a": "2025-01-08 14:30:00", "b": 875.0}, {"a": "2025-01-08 14:50:00", "b": 996.6}, {"a": "2025-01-08 14:55:00", "b": 950.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    