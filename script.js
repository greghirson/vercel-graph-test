
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-06 09:00:00", "b": 402.75}, {"a": "2025-04-06 09:05:00", "b": 402.75}, {"a": "2025-04-06 09:10:00", "b": 400.5}, {"a": "2025-04-06 09:15:00", "b": 401.2}, {"a": "2025-04-06 09:20:00", "b": 400.5}, {"a": "2025-04-06 09:25:00", "b": 401.4}, {"a": "2025-04-06 09:30:00", "b": 401.6}, {"a": "2025-04-06 09:35:00", "b": 402.5}, {"a": "2025-04-06 09:40:00", "b": 403.0}, {"a": "2025-04-06 09:45:00", "b": 406.6666666666667}, {"a": "2025-04-06 09:50:00", "b": 503.2}, {"a": "2025-04-06 09:55:00", "b": 539.0}, {"a": "2025-04-06 10:00:00", "b": 561.0}, {"a": "2025-04-06 10:05:00", "b": 595.2}, {"a": "2025-04-06 10:10:00", "b": 615.4}, {"a": "2025-04-06 10:15:00", "b": 632.75}, {"a": "2025-04-06 10:20:00", "b": 638.4}, {"a": "2025-04-06 10:25:00", "b": 651.2}, {"a": "2025-04-06 10:30:00", "b": 663.8}, {"a": "2025-04-06 10:35:00", "b": 677.4}, {"a": "2025-04-06 10:40:00", "b": 690.6}, {"a": "2025-04-06 10:45:00", "b": 672.0}, {"a": "2025-04-06 10:50:00", "b": 672.25}, {"a": "2025-04-06 10:55:00", "b": 657.4}, {"a": "2025-04-06 11:00:00", "b": 640.25}, {"a": "2025-04-06 11:05:00", "b": 625.6}, {"a": "2025-04-06 11:10:00", "b": 610.2}, {"a": "2025-04-06 11:15:00", "b": 597.8}, {"a": "2025-04-06 11:20:00", "b": 609.0}, {"a": "2025-04-06 11:25:00", "b": 598.4}, {"a": "2025-04-06 11:30:00", "b": 588.25}, {"a": "2025-04-06 11:35:00", "b": 571.6}, {"a": "2025-04-06 11:40:00", "b": 565.25}, {"a": "2025-04-06 11:45:00", "b": 550.0}, {"a": "2025-04-06 11:50:00", "b": 560.6666666666666}, {"a": "2025-04-06 11:55:00", "b": 552.25}, {"a": "2025-04-06 12:00:00", "b": 535.0}, {"a": "2025-04-06 12:05:00", "b": 535.0}, {"a": "2025-04-06 12:10:00", "b": 534.0}, {"a": "2025-04-06 12:15:00", "b": 520.2}, {"a": "2025-04-06 12:20:00", "b": 518.2}, {"a": "2025-04-06 12:25:00", "b": 506.0}, {"a": "2025-04-06 12:30:00", "b": 498.6}, {"a": "2025-04-06 12:35:00", "b": 495.2}, {"a": "2025-04-06 12:40:00", "b": 504.6666666666667}, {"a": "2025-04-06 12:45:00", "b": 504.0}, {"a": "2025-04-06 12:50:00", "b": 501.0}, {"a": "2025-04-06 12:55:00", "b": 495.4}, {"a": "2025-04-06 13:00:00", "b": 492.4}, {"a": "2025-04-06 13:05:00", "b": 496.0}, {"a": "2025-04-06 13:10:00", "b": 499.4}, {"a": "2025-04-06 13:15:00", "b": 497.0}, {"a": "2025-04-06 13:20:00", "b": 492.8}, {"a": "2025-04-06 13:25:00", "b": 487.0}, {"a": "2025-04-06 13:30:00", "b": 483.5}, {"a": "2025-04-06 13:35:00", "b": 468.0}, {"a": "2025-04-06 13:40:00", "b": 464.8}, {"a": "2025-04-06 13:45:00", "b": 461.8}, {"a": "2025-04-06 13:50:00", "b": 461.8}, {"a": "2025-04-06 13:55:00", "b": 461.3333333333333}, {"a": "2025-04-06 14:00:00", "b": 448.8}, {"a": "2025-04-06 14:05:00", "b": 456.0}, {"a": "2025-04-06 14:10:00", "b": 460.4}, {"a": "2025-04-06 14:15:00", "b": 461.6}, {"a": "2025-04-06 14:20:00", "b": 447.6}, {"a": "2025-04-06 14:25:00", "b": 442.3333333333333}, {"a": "2025-04-06 14:30:00", "b": 446.4}, {"a": "2025-04-06 14:35:00", "b": 443.0}, {"a": "2025-04-06 14:40:00", "b": 439.0}, {"a": "2025-04-06 14:45:00", "b": 442.3333333333333}, {"a": "2025-04-06 14:50:00", "b": 437.2}, {"a": "2025-04-06 14:55:00", "b": 437.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    