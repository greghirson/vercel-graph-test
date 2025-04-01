
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-01 07:00:00", "b": 406.5}, {"a": "2025-04-01 07:05:00", "b": 407.0}, {"a": "2025-04-01 07:10:00", "b": 406.0}, {"a": "2025-04-01 07:15:00", "b": 410.8}, {"a": "2025-04-01 07:20:00", "b": 413.6}, {"a": "2025-04-01 07:25:00", "b": 407.5}, {"a": "2025-04-01 07:30:00", "b": 406.5}, {"a": "2025-04-01 07:35:00", "b": 406.4}, {"a": "2025-04-01 07:40:00", "b": 406.6666666666667}, {"a": "2025-04-01 07:45:00", "b": 410.3333333333333}, {"a": "2025-04-01 07:50:00", "b": 411.0}, {"a": "2025-04-01 07:55:00", "b": 408.0}, {"a": "2025-04-01 08:00:00", "b": 411.5}, {"a": "2025-04-01 08:05:00", "b": 410.0}, {"a": "2025-04-01 08:10:00", "b": 408.5}, {"a": "2025-04-01 08:15:00", "b": 413.0}, {"a": "2025-04-01 08:20:00", "b": 449.8}, {"a": "2025-04-01 08:25:00", "b": 411.5}, {"a": "2025-04-01 08:30:00", "b": 417.0}, {"a": "2025-04-01 08:35:00", "b": 415.4}, {"a": "2025-04-01 08:40:00", "b": 407.0}, {"a": "2025-04-01 08:45:00", "b": 408.0}, {"a": "2025-04-01 08:50:00", "b": 411.0}, {"a": "2025-04-01 08:55:00", "b": 417.4}, {"a": "2025-04-01 09:00:00", "b": 419.2}, {"a": "2025-04-01 09:05:00", "b": 421.0}, {"a": "2025-04-01 09:10:00", "b": 422.6}, {"a": "2025-04-01 09:15:00", "b": 408.0}, {"a": "2025-04-01 09:20:00", "b": 416.8}, {"a": "2025-04-01 09:25:00", "b": 426.4}, {"a": "2025-04-01 09:30:00", "b": 433.6}, {"a": "2025-04-01 09:35:00", "b": 425.0}, {"a": "2025-04-01 09:40:00", "b": 409.75}, {"a": "2025-04-01 09:45:00", "b": 407.0}, {"a": "2025-04-01 09:50:00", "b": 402.6666666666667}, {"a": "2025-04-01 09:55:00", "b": 402.8}, {"a": "2025-04-01 10:00:00", "b": 409.6}, {"a": "2025-04-01 10:05:00", "b": 549.6}, {"a": "2025-04-01 10:10:00", "b": 580.0}, {"a": "2025-04-01 10:15:00", "b": 577.8}, {"a": "2025-04-01 10:20:00", "b": 590.25}, {"a": "2025-04-01 10:25:00", "b": 579.75}, {"a": "2025-04-01 10:30:00", "b": 582.2}, {"a": "2025-04-01 10:35:00", "b": 577.0}, {"a": "2025-04-01 10:40:00", "b": 576.2}, {"a": "2025-04-01 10:45:00", "b": 584.0}, {"a": "2025-04-01 10:50:00", "b": 575.75}, {"a": "2025-04-01 10:55:00", "b": 586.75}, {"a": "2025-04-01 11:00:00", "b": 577.4}, {"a": "2025-04-01 11:05:00", "b": 571.5}, {"a": "2025-04-01 11:10:00", "b": 572.8}, {"a": "2025-04-01 11:15:00", "b": 573.8}, {"a": "2025-04-01 11:20:00", "b": 560.0}, {"a": "2025-04-01 11:25:00", "b": 555.0}, {"a": "2025-04-01 11:30:00", "b": 568.4}, {"a": "2025-04-01 11:35:00", "b": 570.0}, {"a": "2025-04-01 11:40:00", "b": 560.3333333333334}, {"a": "2025-04-01 11:45:00", "b": 564.8}, {"a": "2025-04-01 11:50:00", "b": 556.5}, {"a": "2025-04-01 11:55:00", "b": 543.0}, {"a": "2025-04-01 12:00:00", "b": 545.2}, {"a": "2025-04-01 12:05:00", "b": 556.25}, {"a": "2025-04-01 12:10:00", "b": 548.25}, {"a": "2025-04-01 12:15:00", "b": 555.2}, {"a": "2025-04-01 12:20:00", "b": 550.25}, {"a": "2025-04-01 12:25:00", "b": 534.25}, {"a": "2025-04-01 12:30:00", "b": 535.5}, {"a": "2025-04-01 12:35:00", "b": 538.75}, {"a": "2025-04-01 12:40:00", "b": 546.5}, {"a": "2025-04-01 12:45:00", "b": 548.0}, {"a": "2025-04-01 12:50:00", "b": 541.5}, {"a": "2025-04-01 12:55:00", "b": 534.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    