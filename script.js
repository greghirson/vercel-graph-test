
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-20 23:00:00", "b": 519.4}, {"a": "2024-12-20 23:05:00", "b": 519.4}, {"a": "2024-12-20 23:10:00", "b": 515.75}, {"a": "2024-12-20 23:15:00", "b": 515.25}, {"a": "2024-12-20 23:20:00", "b": 512.75}, {"a": "2024-12-20 23:25:00", "b": 517.4}, {"a": "2024-12-20 23:30:00", "b": 514.5}, {"a": "2024-12-20 23:35:00", "b": 517.75}, {"a": "2024-12-20 23:40:00", "b": 514.75}, {"a": "2024-12-20 23:45:00", "b": 508.25}, {"a": "2024-12-20 23:50:00", "b": 509.6666666666667}, {"a": "2024-12-20 23:55:00", "b": 497.75}, {"a": "2024-12-21 00:00:00", "b": 491.0}, {"a": "2024-12-21 00:05:00", "b": 505.0}, {"a": "2024-12-21 00:10:00", "b": 510.2}, {"a": "2024-12-21 00:15:00", "b": 502.0}, {"a": "2024-12-21 00:20:00", "b": 498.6}, {"a": "2024-12-21 00:25:00", "b": 495.5}, {"a": "2024-12-21 00:30:00", "b": 491.0}, {"a": "2024-12-21 00:35:00", "b": 485.4}, {"a": "2024-12-21 00:40:00", "b": 485.25}, {"a": "2024-12-21 00:45:00", "b": 510.6}, {"a": "2024-12-21 00:50:00", "b": 544.2}, {"a": "2024-12-21 00:55:00", "b": 529.5}, {"a": "2024-12-21 01:00:00", "b": 477.8}, {"a": "2024-12-21 01:05:00", "b": 475.0}, {"a": "2024-12-21 01:10:00", "b": 463.2}, {"a": "2024-12-21 01:15:00", "b": 446.5}, {"a": "2024-12-21 01:20:00", "b": 444.4}, {"a": "2024-12-21 01:25:00", "b": 442.25}, {"a": "2024-12-21 01:30:00", "b": 442.2}, {"a": "2024-12-21 01:35:00", "b": 441.5}, {"a": "2024-12-21 01:40:00", "b": 441.75}, {"a": "2024-12-21 01:45:00", "b": 442.75}, {"a": "2024-12-21 01:50:00", "b": 441.0}, {"a": "2024-12-21 01:55:00", "b": 442.0}, {"a": "2024-12-21 02:00:00", "b": 444.0}, {"a": "2024-12-21 02:05:00", "b": 440.25}, {"a": "2024-12-21 02:10:00", "b": 437.0}, {"a": "2024-12-21 02:15:00", "b": 431.8}, {"a": "2024-12-21 02:20:00", "b": 450.2}, {"a": "2024-12-21 02:25:00", "b": 444.0}, {"a": "2024-12-21 02:30:00", "b": 441.2}, {"a": "2024-12-21 02:35:00", "b": 434.3333333333333}, {"a": "2024-12-21 02:40:00", "b": 431.8}, {"a": "2024-12-21 02:45:00", "b": 427.5}, {"a": "2024-12-21 02:50:00", "b": 426.5}, {"a": "2024-12-21 02:55:00", "b": 437.2}, {"a": "2024-12-21 03:00:00", "b": 443.6}, {"a": "2024-12-21 03:05:00", "b": 439.5}, {"a": "2024-12-21 03:10:00", "b": 486.8}, {"a": "2024-12-21 03:15:00", "b": 486.25}, {"a": "2024-12-21 03:20:00", "b": 454.0}, {"a": "2024-12-21 03:25:00", "b": 430.0}, {"a": "2024-12-21 03:30:00", "b": 426.75}, {"a": "2024-12-21 03:35:00", "b": 413.6666666666667}, {"a": "2024-12-21 03:40:00", "b": 408.0}, {"a": "2024-12-21 03:45:00", "b": 409.0}, {"a": "2024-12-21 03:50:00", "b": 407.5}, {"a": "2024-12-21 03:55:00", "b": 405.5}, {"a": "2024-12-21 04:00:00", "b": 405.8}, {"a": "2024-12-21 04:05:00", "b": 406.25}, {"a": "2024-12-21 04:10:00", "b": 407.6666666666667}, {"a": "2024-12-21 04:15:00", "b": 407.3333333333333}, {"a": "2024-12-21 04:20:00", "b": 406.3333333333333}, {"a": "2024-12-21 04:25:00", "b": 407.0}, {"a": "2024-12-21 04:30:00", "b": 409.3333333333333}, {"a": "2024-12-21 04:35:00", "b": 418.75}, {"a": "2024-12-21 04:40:00", "b": 408.5}, {"a": "2024-12-21 04:45:00", "b": 406.5}, {"a": "2024-12-21 04:50:00", "b": 408.0}, {"a": "2024-12-21 04:55:00", "b": 407.3333333333333}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    